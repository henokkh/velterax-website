import Image from "next/image";
import { FormEvent, useState } from "react";
import * as yup from "yup";
import { FormikConsumer, useFormik } from "formik";

function ContactForm() {
  const [messageSentSuccess, setMessageSentSuccess] = useState<null | boolean>(
    null
  );
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(`handle submit called, e is ${e}`);
    setIsSubmiting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.values),
      });
      const data = await response.json();
      if (data.message === "Message sent successfully") {
        setMessageSentSuccess(true);
      } else {
        setMessageSentSuccess(false);
      }
    } catch (e) {
      setMessageSentSuccess(false);
    } finally {
      setIsSubmiting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerEmail: "",
      message: "",
    },
    onSubmit: handleFormSubmit,
    validationSchema: yup.object({
      customerName: yup.string().trim().required("Name is required"),
      customerEmail: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <div>
      <section className=" text-grey-900 bg-lightBg px-6 py-32 md:px-0">
        <div
          id="contact"
          className=" bg-darkBlue1 mx-auto max-w-4xl space-y-6  rounded-lg p-10 px-6 text-center md:px-16"
        >
          <h5 className="text-2xl font-bold">Contact Us Today</h5>
          <p className="md:text-left">
            It only takes a minute to reach us. If you have any questions, our
            support team would be happy to help you.
          </p>
          {/* Input & Button Container */}
          <form
            className="flex flex-col space-y-4 md:text-left"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-medium  ">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="customerName"
                className="block w-full rounded-lg border border-gray-400  bg-white  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                value={formik.values.customerName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.customerName && formik.touched.customerName && (
                <div className="p-2 text-red-500">
                  {formik.errors.customerName}
                </div>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block font-medium  ">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="customerEmail"
                className="block w-full rounded-lg border border-gray-400  bg-white  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                value={formik.values.customerEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.customerEmail && formik.touched.customerEmail && (
                <div className="p-2 text-red-500">
                  {formik.errors.customerEmail}
                </div>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block font-medium  ">
                Message
              </label>
              <textarea
                rows={5}
                id="message"
                className="block w-full rounded-lg border border-gray-400  bg-white  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.message && formik.touched.message && (
                <div className="p-2 text-red-500">{formik.errors.message}</div>
              )}
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={
                  isSubmiting || messageSentSuccess === true || !formik.isValid
                }
                className=" flex w-52 items-center justify-center space-x-4 rounded-full bg-primaryAccent p-3 text-lg font-bold text-white hover:scale-105 disabled:opacity-25 disabled:hover:scale-100"
              >
                <span>Send Message</span>
                <Image
                  src="/images/icon-send.svg"
                  alt=""
                  width="25"
                  height="25"
                />
              </button>
              {messageSentSuccess && (
                <div className="text-bold p-4 text-primaryAccent" role="alert">
                  Your message has been sent!
                </div>
              )}
              {messageSentSuccess === false && (
                <div className="text-bold p-4 text-primaryAccent" role="alert">
                  Your message was NOT sent. Please try again in a few minutes.
                </div>
              )}
            </div>
          </form>
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
