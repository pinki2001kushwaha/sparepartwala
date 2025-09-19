// components/NoSSR.jsx
"use client";
import { useState, useEffect } from "react";

export default function NoSSR({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Top Navbar Skeleton */}
        <div className="bg-white py-3 px-4 md:px-6 flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 gap-3 md:gap-0">
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
          <div className="flex items-center overflow-hidden rounded-md w-full md:w-[450px] lg:w-[500px] h-10 bg-gray-200 animate-pulse"></div>
          <div className="flex justify-center md:justify-end items-center gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-9 h-9 bg-gray-200 animate-pulse rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Main Navbar Skeleton */}
        <div className="bg-white shadow-sm py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="w-16 h-6 bg-gray-200 animate-pulse rounded"></div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-28 h-8 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-8 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="relative h-96 bg-gradient-to-r from-yellow-400 to-yellow-500 mt-4 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center w-3/4">
              <div className="h-10 bg-white/30 animate-pulse rounded-lg mx-auto w-3/4 mb-4"></div>
              <div className="h-6 bg-white/30 animate-pulse rounded-lg mx-auto w-1/2 mb-6"></div>
              <div className="h-12 bg-black/20 animate-pulse rounded-lg mx-auto w-48"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[1, 2, 3].map((dot) => (
              <div key={dot} className="w-3 h-3 bg-white/50 animate-pulse rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Features Skeleton */}
        <div className="px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-200 animate-pulse rounded-full mb-3"></div>
              <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Vehicle Selector Skeleton */}
        <div className="px-4 py-8 bg-white">
          <div className="h-7 bg-gray-200 animate-pulse rounded w-1/4 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 bg-gray-100 animate-pulse rounded"></div>
            ))}
          </div>
        </div>

        {/* Offers Skeleton */}
        <div className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 animate-pulse rounded-lg p-4 flex flex-col justify-between">
              <div>
                <div className="h-6 bg-yellow-300/50 animate-pulse rounded w-1/3 mb-3"></div>
                <div className="h-7 bg-yellow-300/50 animate-pulse rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-yellow-300/50 animate-pulse rounded w-full mb-1"></div>
                <div className="h-4 bg-yellow-300/50 animate-pulse rounded w-4/5"></div>
              </div>
              <div className="h-10 bg-black/20 animate-pulse rounded w-32"></div>
            </div>
          ))}
        </div>

        {/* Car Makers Skeleton */}
        <div className="px-4 py-8 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <div className="h-7 bg-gray-200 animate-pulse rounded w-1/4"></div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-24 bg-white animate-pulse rounded-lg shadow-sm"></div>
            ))}
          </div>
        </div>

        {/* Newsletter Skeleton */}
        <div className="px-4 py-8 bg-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-7 bg-gray-600 animate-pulse rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-600 animate-pulse rounded w-2/3 mx-auto mb-6"></div>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <div className="flex-1 max-w-md h-12 bg-gray-600 animate-pulse rounded"></div>
              <div className="h-12 w-32 bg-yellow-500/50 animate-pulse rounded"></div>
            </div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="bg-gray-900 text-white py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((col) => (
              <div key={col} className="space-y-3">
                <div className="h-6 bg-gray-700 animate-pulse rounded w-1/2"></div>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-4 bg-gray-700 animate-pulse rounded w-3/4"></div>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="h-5 bg-gray-700 animate-pulse rounded w-1/4 mb-4 md:mb-0"></div>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-8 h-8 bg-gray-700 animate-pulse rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}