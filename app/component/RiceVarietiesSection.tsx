"use client";

import Link from "next/link";

/* ===============================
   RICE VARIETIES DATA
================================ */
const riceVarieties = [
  {
    name: "PK 386",
    description: "White, Steamy, Extra Long Grain, Aromatic",
    image: "/rice/pk-386.png",
    url: "/varieties/pk-386",
  },
  {
    name: "Super Kernel Basmati Rice",
    description: "Premium Aroma, Aged, Long Grain",
    image: "/rice/Super-Kernel-Basmati-Rice.png",
    url: "/varieties/super-kernel",
  },
  {
    name: "Basmati 385 Rice",
    description: "Classic Basmati Taste, Medium To Long Grain",
    image: "/rice/Basmati-385-Rice.png",
    url: "/varieties/basmati-385",
  },
  {
    name: "Basmati D-98 / PK-198",
    description: "Balanced Quality And Value",
    image: "/rice/Basmati-D-98.png",
    url: "/varieties/d-98",
  },
  {
    name: "IRRI-6 Rice",
    description: "Economical, Reliable, Short To Medium Grain",
    image: "/rice/IRRI-6-Rice.png",
    url: "/varieties/irri-6",
  },
  {
    name: "IRRI-9 Rice",
    description: "Medium Grain, Ideal For Bulk & Industrial Use",
    image: "/rice/IRRI-9-Rice.png",
    url: "/varieties/irri-9",
  },
  {
    name: "Brown Rice",
    description: "Nutritious, High Fiber, Minimally Processed",
    image: "/rice/brown-rice.png",
    url: "/varieties/brown-rice",
  },
  {
    name: "KS-282",
    description: "Nutritious, High Fiber, Minimally Processed",
    image: "/rice/ks-282.png",
    url: "/varieties/ks-282",
  },
  {
    name: "1121 Basmati Rice",
    description: "White & Steamy, Extra Long Grain, Aromatic",
    image: "/rice/1121-basmati-rice.png",
    url: "/varieties/1121-basmati",
  },
  {
    name: "1121 Steam Rice",
    description: "Premium Aroma, Aged, Long Grain",
    image: "/rice/1121-Steam-Rice.png",
    url: "/varieties/1121-steam",
  },
  {
    name: "1121 White Rice",
    description: "Classic Basmati Taste, Medium To Long Grain",
    image: "/rice/1121-White-Rice.png",
    url: "/varieties/1121-white",
  },
  {
    name: "1121 Sella / Parboiled",
    description: "Balanced Quality And Value",
    image: "/rice/1121-Sela-Parboiled.png",
    url: "/varieties/1121-sella",
  },
];

/* ===============================
   COMPONENT
================================ */
export default function RiceVarietiesSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
          Our{" "}
          <span className="text-yellow-400 relative inline-block">
            Rice Varieties
            <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-yellow-400"></span>
          </span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We export a carefully selected range of basmati and non-basmati rice
          varieties to meet diverse market and culinary needs.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {riceVarieties.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="
                w-full
                h-64
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
              <h3 className="font-bold text-lg leading-tight">
                {item.name}
              </h3>

              {/* Hover Popup */}
              <div
                className="
                  mt-2
                  transform
                  translate-y-4
                  opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
              >
                <p className="text-sm text-white/90 mb-3">
                  {item.description}
                </p>

                <span
                  className="
                    inline-block
                    bg-yellow-400
                    text-black
                    text-xs
                    font-semibold
                    px-4
                    py-2
                    rounded
                  "
                >
                  Learn More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-center text-sm text-gray-600">
        Each variety is{" "}
        <span className="text-yellow-500 font-semibold">
          available for bulk export and private labeling
        </span>
        , subject to buyer requirements.
      </p>
    </section>
  );
}
