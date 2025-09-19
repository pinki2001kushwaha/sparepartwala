"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // If no history, redirect to home page
      router.push("/");
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 text-center px-6 relative">
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-yellow-500 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-gray-600 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Back Button ✅ - Fixed with proper event handling */}
      <button
        onClick={handleGoBack}
        className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow hover:bg-yellow-600 transition cursor-pointer"
      >
        ⬅ Go Back
      </button>
      
    

      {/* Decorative */}
      <div className="absolute bottom-10 opacity-10 text-[10rem] font-extrabold text-gray-800 select-none pointer-events-none">
        SparePartWale
      </div>
    </section>
  );
}