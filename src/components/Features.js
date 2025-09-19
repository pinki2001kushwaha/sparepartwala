import Image from "next/image";

export default function Features() {
  const features = [
    { icon: "/icons/quality.png", label: "Best Quality Products" },
    { icon: "/icons/delivery.png", label: "Fast Delivery" },
    { icon: "/icons/return.png", label: "Easy Return" },
    { icon: "/icons/support.png", label: "Support 24/7" },
  ];

  return (
    <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-y-0 border-b border-gray-300 py-6 md:py-8 text-gray-700 text-sm sm:text-base">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 px-4 text-center sm:text-left"
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
          />
          <span className="font-semibold whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
