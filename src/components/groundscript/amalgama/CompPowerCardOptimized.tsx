"use client";

import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { hola, imgPgkStamp1, profile } from "./imageImports";
import { svgPaths } from "./svgPaths";

export default function CompPowerCardOptimized() {
  const t = useTranslations("components.power_card");

  return (
    <motion.div
      className="bg-white ground-script-bg-white shadow-lg overflow-hidden relative rounded-[22px] w-full max-w-[430px] mx-auto flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Image */}
      <div className="relative h-[260px] w-full shrink-0 bg-[#d9d9d9]">
        <img
          alt="Business professional"
          src={profile}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col px-5 pt-6 pb-8 gap-5 z-10">
        {/* Title */}
        <h3 className="font-['Noto_Serif_SC:Bold',_sans-serif] font-bold text-3xl text-black text-center leading-tight tracking-tight">
          {t("title")}
        </h3>

        {/* Success Rate Stats */}
        <div className="flex items-center gap-2 ml-1">
          <div className="w-[17px] h-[17px] shrink-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_optimized)">
                <path
                  d={svgPaths.pda53200}
                  stroke="#050505"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={svgPaths.p2039a900}
                  stroke="#050505"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_optimized">
                  <rect width="16.77" height="16.77" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="font-['Inter:Regular',_sans-serif] text-sm text-[#050505]">
            {t("success_rate")}
          </span>
        </div>

        {/* Description */}
        <p className="font-['Noto_Serif_SC:Regular',_sans-serif] text-[15px] leading-snug text-black tracking-tight">
          {t("description")}
        </p>

        {/* CTA Button */}
        <button className="bg-[#1b3d36] text-white rounded-full px-6 py-2.5 w-fit shadow-md hover:shadow-lg hover:bg-[#152e29] transition-all duration-300 flex items-center justify-center">
          <span className="font-['Inter:Regular',_sans-serif] text-sm">
            {t("start_now")}
          </span>
        </button>
      </div>

      {/* Decorative Stamp - Positioned absolutely to peek from the side */}
      <div className="absolute top-[280px] -right-20 w-[240px] h-[240px] pointer-events-none opacity-90 z-0">
        <div className="w-full h-full rotate-[28deg]">
          <img
            alt=""
            src={imgPgkStamp1}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}
