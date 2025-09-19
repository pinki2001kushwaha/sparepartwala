import Image from "next/image";

const makers = [
  { name: "MARUTI SUZUKI", img: "/brands/maruti.png", color: "text-black-700" },
  { name: "HONDA", img: "/brands/honda.png", color: "text-red-600" },
  { name: "TATA", img: "/brands/tata.png", color: "text-[#486aad]" },
  { name: "HYUNDAI", img: "/brands/hyundai.png", color: "text-gray-700" },
  { name: "MAHINDRA", img: "/brands/mahindra.png", color: "text-red-500" },
];

export default function CarMakers() {
  return (
    <section className="w-full mx-auto py-8 bg-gray-100">
      {/* Header */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h3 className="font-bold text-lg md:text-xl uppercase text-center md:text-left">
            Popular Car Makers{" "}
            <span className="text-yellow-500 cursor-pointer block md:inline">
              See All Brand &gt;
            </span>
          </h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-yellow-400 text-white rounded flex items-center justify-center">
              ‹
            </button>
            <button className="w-8 h-8 bg-yellow-400 text-white rounded flex items-center justify-center">
              ›
            </button>
          </div>
        </div>

        {/* Brand logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {makers.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-40 sm:w-44 md:w-48 h-36 sm:h-40 bg-white rounded-tl-2xl rounded-br-2xl shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={brand.img}
                alt={brand.name}
                width={80}
                height={80}
                className="object-contain mb-2"
              />
              <p className={`font-semibold text-center ${brand.color}`}>
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
