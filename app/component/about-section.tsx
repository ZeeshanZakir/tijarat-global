"use client";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/stips.png')]
          bg-no-repeat
          bg-center
          bg-contain
          opacity-40
          pointer-events-none
        "
      />

      {/* Section Title */}
      <div className="relative text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
          About{" "}
          <span className="text-yellow-400 relative inline-block">
            Tijarat Global
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-yellow-400"></span>
          </span>
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="
        relative
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[1.1fr_0.9fr]
        gap-10
        items-center
      ">

        {/* Left Content */}
        <div>
          <h3 className="text-xl font-bold uppercase text-yellow-400 mb-4 relative inline-block">
            About Us
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tijarat Global is a Pakistan-based rice exporting company committed
            to delivering premium-quality rice to international buyers. We work
            closely with trusted growers and modern processing units to ensure
            consistent quality, reliable supply, and full compliance with export
            requirements.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our focus is on long-term partnerships with importers, wholesalers,
            distributors, and food brands across global markets.
          </p>
        </div>

        {/* Image Composition */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Main Image */}
          <div className="
            relative
            w-72
            h-72
            md:w-80
            md:h-80
            rounded-full
            overflow-hidden
          ">
            <img
              src="/rice-main.png"
              alt="Rice"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Image */}
          <div className="
            absolute
            top-6
            -left-10
            w-36
            h-36
            rounded-full
            overflow-hidden
          ">
            <img
              src="/rice-field.png"
              alt="Rice Field"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div className="
            absolute
            bottom-4
            -left-6
            w-32
            h-32
            rounded-full
            overflow-hidden
           
          ">
            <img
              src="/rice-harvest.png"
              alt="Rice Harvest"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
