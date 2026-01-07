import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900">
          Why <span className="text-yellow-500">Choose Us</span>
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Why <span className="font-semibold text-yellow-500">Work With Us</span>
          <br />
          We focus on reliability, transparency, and long-term value rather than
          one-time transactions.
        </p>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* Left Features */}
          <div className="space-y-8 text-left">
            <Feature
              title="Direct Sourcing From Pakistan’s Key Rice-Growing Regions"
            />
            <Feature
              title="Strict Quality Control And Export-Grade Processing"
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-78 hexagon overflow-hidden">
              <Image
                src="/rice-field-1.png" // apni image yahan rakhein (public folder)
                alt="Rice Field"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-8 text-left">
            <Feature
              title="Consistent Specifications For International Buyers"
            />
            <Feature
              title="Competitive Export Pricing For Bulk Orders"
            />
            <Feature
              title="Complete Export Documentation And Logistics Support"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-500">
        ✓
      </div>
      <p className="text-gray-700">{title}</p>
    </div>
  );
}

