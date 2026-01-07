"use client";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        pt-20
        bg-[url('/green.png')]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        text-center
        px-4
        sm:px-6
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative max-w-4xl text-white">
        <h1 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          leading-tight
          uppercase
          mb-4
        ">
          PREMIUM <span className="text-yellow-400">PAKISTANI RICE</span>
          <br />
          EXPORTERS FOR GLOBAL
          <br />
          MARKETS
        </h1>

        <p className="
          text-sm
          sm:text-base
          leading-relaxed
          mb-6
          text-white/95
        ">
          Supplying 1121 Basmati, Super Kernel Basmati,
          <br className="hidden sm:block" />
          IRRI & Specialty Rice – Quality Assured, Bulk
          <br className="hidden sm:block" />
          Ready, Export Focused
        </p>

        <button
          className="
            bg-yellow-400
            text-white
            px-6
            sm:px-7
            py-3
            rounded-md
            font-semibold
            text-sm
            transition
            duration-300
            hover:bg-yellow-500
            hover:-translate-y-1
          "
        >
          Explore Our Varieties
        </button>
      </div>
    </section>
  );
}
