import Image from "next/image";

export default function Offers() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-8 grid md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="bg-[#ffb200] rounded-tl-2xl rounded-br-2xl p-12 flex items-center justify-between">
        <div className="pr-4">
          <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">
            Big Sale! Up To 50% Off
          </span>
          <h2 className="text-2xl font-bold mt-3">ORIGINAL PARTS</h2>
          <p className="mt-2 text-sm leading-relaxed">
            We offer exclusive brands.
          </p>
          <button className="mt-4 bg-black text-white text-sm px-4 py-2 font-semibold rounded cursor-pointer">
            Shop Now
          </button>
        </div>
        <img
          src="/card/engine.png"
          alt="parts"
          className="w-28 h-28 md:w-32 md:h-32 object-contain"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-[#4465a4] rounded-tl-2xl rounded-br-2xl p-12 flex items-center justify-between text-white">
        <div className="pr-4">
          <span className="uppercase text-xs font-bold">Most Affordable</span>
          <h2 className="text-2xl font-bold mt-2">EQUIPMENT BASICS</h2>
          <p className="mt-2 text-sm leading-relaxed">Top Quality</p>
          <button className="mt-4 bg-white text-black text-sm px-4 py-2 font-semibold rounded flex items-center cursor-pointer">
            Shop Now <span className="ml-1">›</span>
          </button>
        </div>
        <img
          src="/card/equipment.png"
          alt="equipment"
          className="w-28 h-28 md:w-32 md:h-32 object-contain"
        />
      </div>

      {/* Card 3 */}
   <div className="bg-[#010101] rounded-tl-2xl rounded-br-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white md:col-span-2 gap-6">
  {/* Left Text */}
  <div className="text-center md:text-left md:pr-6">
    <p className="text-yellow-400 font-bold text-sm">10% OFF ON</p>
    <h2 className="text-xl md:text-2xl font-bold mt-1">
      ALL PARTS & ACCESSORIES
    </h2>
    <button className="mt-4 text-yellow-400 font-semibold text-sm flex items-center justify-center md:justify-start cursor-pointer">
      Shop Now <span className="ml-1 cursor-pointer">›</span>
    </button>
  </div>

  {/* Right Image */}
  <img
    src="/card/accessories.png"
    alt="accessories"
    className="w-28 h-20 md:w-40 md:h-28 object-contain"
  />
</div>


      {/* Card 4 with BG Image + Text & Image Equal Width */}
      <div className="relative rounded-tl-2xl rounded-br-2xl overflow-hidden md:col-span-2 p-10">
        {/* BG Image */}
        <img
           src="/card/lamps.png"
          alt="lamps background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative p-6 flex items-center text-white gap-4">
          {/* Left: Text */}
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">LAMPS & LIGHT</h2>
            <p className="text-sm mt-2 leading-relaxed">
              UPTO <span className="text-yellow-400 font-bold">25% OFF</span>
            </p>
            <button className="mt-4 text-yellow-400 font-semibold text-sm flex items-center cursor-pointer">
              Shop Now <span className="ml-1">›</span>
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
}
