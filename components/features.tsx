import Image from "next/image";

import featuresData from "./features.json";

function Features() {
  return (
    <section id="features" className="bg-darkBg pt-24 pb-48 text-white">
      <div className="container mx-auto flex flex-col  justify-center gap-12 px-6 text-center md:flex-row md:flex-wrap">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="mx-auto flex w-full flex-col items-center space-y-2 sm:min-w-[200px] sm:max-w-[400px]"
          >
            <div className="mb-6 flex h-24 items-center justify-center">
              <Image src={feature.iconUrl} alt="" width="80" height="80" />
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="max-w-md">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
