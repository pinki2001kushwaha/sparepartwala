import Image from "next/image";

const categories = [
  { name: "Maintenance Service Parts", img: "/categories/services.png" },
  { name: "Air Conditioning", img: "/categories/air.png" },
  { name: "Belts Chains and Rollers", img: "/categories/rollers.png" },
  { name: "Bearings", img: "/categories/bearings.png" },
  { name: "Control Cables", img: "/categories/cables.png" },
  { name: "Body", img: "/categories/body.png" },
  { name: "Brake System", img: "/categories/brake.png" },
  { name: "Clutch System", img: "/categories/clutch.png" },
];

export default function Categories() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-12">
      <h3 className="font-bold text-lg mb-4 uppercase"> Choose From A Category{" "} <span className="text-yellow-500 inline-block border-b-2 border-yellow-500 cursor-pointer"> SEE ALL CATEGORY &gt; </span> </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-tl-2xl rounded-br-2xl p-6 min-h-[140px] bg-gray-100 hover:shadow-lg cursor-pointer transition"
          >
            {/* Left side text */}
            <span className="font-medium text-gray-700 text-base md:text-lg">
              {cat.name}
            </span>

            {/* Right side image */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-14 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
