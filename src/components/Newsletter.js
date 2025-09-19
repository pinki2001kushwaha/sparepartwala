"use client";

export default function SearchAndSubscribe() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto my-12 flex flex-col gap-14">



      {/* ✉ Newsletter */}
      <div className="bg-[#101828] text-white rounded-md px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-lg md:text-xl font-bold uppercase">
            Subscribe To Our Newsletter!
          </h2>
          <p className="text-yellow-400 text-sm md:text-base mt-2">
            Get The Latest News, Updates, And Amazing Offers
          </p>
        </div>

        {/* Right Input + Button */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 md:w-72 px-4 py-3 rounded-md outline-none text-black bg-white"
          />
          <button className="bg-yellow-500 text-black px-6 py-3 font-bold rounded-md hover:bg-yellow-600 transition flex items-center justify-center gap-2 w-full sm:w-auto">
            SUBSCRIBE <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
