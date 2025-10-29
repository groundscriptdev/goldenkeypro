"use client";

import React from "react";
import { motion } from "motion/react";
import {
  hola,
  imgPgkStamp1
} from "./imageImports";
import { svgPaths } from "./svgPaths";

function Frame() {
  return (
    <div className="absolute h-[260px] left-[calc(50%+0.5px)] overflow-clip rounded-[22px] top-[8px] translate-x-[-50%] w-[430px]">
      <div className="absolute bg-[#d9d9d9] h-[260px] left-0 rounded-[22px] top-0 w-[430px]" />
      <div className="absolute h-[816px] left-[-12px] top-[-24px] w-[544px]" data-name="plano_vertical_documental_de_una_empresarioa_chinoa_4555_en_da_de_arribo_primer_plano-_mano_firmand_tyantp5nj3j4cplur3j7_10 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={hola} />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[18px] size-[16.77px] top-[338.1px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_5_31)" id="Icon">
          <path d={svgPaths.pda53200} id="Vector" stroke="var(--stroke-0, #050505)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39754" />
          <path d={svgPaths.p2039a900} id="Vector_2" stroke="var(--stroke-0, #050505)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39754" />
        </g>
        <defs>
          <clipPath id="clip0_5_31">
            <rect fill="white" height="16.7704" width="16.7704" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SuccessRate() {
  return (
    <div className="absolute h-[20.963px] left-[42.77px] top-[336px] w-[121.897px]" data-name="SuccessRate">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[61px] not-italic text-[#050505] text-[14px] text-center text-nowrap top-[0.57px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">95% tasa de éxito</p>
    </div>
  );
}

function SuccessGroup() {
  return (
    <div className="absolute contents left-[18px] top-[336px]">
      <Icon />
      <SuccessRate />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="h-[20.963px] relative shrink-0 w-[121.897px]" data-name="ButtonText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.963px] relative w-[121.897px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[61px] not-italic text-[14px] text-center text-nowrap text-white top-[0.57px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Comenzar ahora</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[#1b3d36] box-border content-stretch flex gap-[8.385px] h-[38px] items-center left-[16px] pl-[16.77px] pr-0 py-0 rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[429px] w-[155px]" data-name="ButtonContainer">
      <ButtonText />
    </div>
  );
}

export default function CompPowerCard() {
  return (
    <motion.div
      className="bg-white ground-script-bg-white shadow-lg overflow-clip relative rounded-[22px] size-full mx-auto max-w-[430px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Frame />
      <p className="absolute font-['Noto_Serif_SC:Bold',_sans-serif] font-bold leading-[43.114px] left-[50%] text-[30.795px] text-black text-center text-nowrap top-[280px] tracking-[-0.6917px] translate-x-[-50%] whitespace-pre">Tu llave a panama</p>
      <p className="absolute font-['Noto_Serif_SC:Regular',_sans-serif] font-normal h-[38px] leading-[19px] left-[16px] text-[15px] text-black top-[365px] tracking-[-0.4398px] w-[335px]">{`Abriendo las puertas a tu nueva vida con inversiones seguras y rentables. `}</p>
      <SuccessGroup />
      <ButtonContainer />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.4684106707572937)+(var(--transform-inner-height)*0.8835108876228333)))] items-center justify-center left-[90%] top-[314px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.4684106707572937)+(var(--transform-inner-width)*0.8835108876228333)))]" style={{ "--transform-inner-width": "236.25", "--transform-inner-height": "236.25" } as React.CSSProperties}>
        <div className="flex-none rotate-[27.931deg]">
          <div className="relative size-[236.252px]" data-name="PGK stamp 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPgkStamp1} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}