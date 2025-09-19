import Image from "next/image";

export default function Features() {
  return (
    <div className="w-[90%] md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 border-b border-gray-300 text-sm text-gray-600 divide-y sm:divide-y-0 sm:divide-x-2 divide-gray-400">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-0 font-semibold text-center sm:text-left">
        <Image src="/icons/quality.png" alt="Best Quality" width={32} height={32} />
        <span>Best Quality Products</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-0 font-semibold text-center sm:text-left">
        <Image src="/icons/delivery.png" alt="Fast Delivery" width={32} height={32} />
        <span>Fast Delivery</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-0 font-semibold text-center sm:text-left">
        <Image src="/icons/return.png" alt="Easy Return" width={32} height={32} />
        <span>Easy Return</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-0 font-semibold text-center sm:text-left">
        <Image src="/icons/support.png" alt="Support 24/7" width={32} height={32} />
        <span>Support 24/7</span>
      </div>
    </div>
  );
}
