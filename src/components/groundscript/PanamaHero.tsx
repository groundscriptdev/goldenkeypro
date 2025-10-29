import { motion } from "motion/react";

// Animated background elements
function Container1() {
  return (
    <div
      className="absolute bg-[rgba(219,188,108,0.13)] blur-[36.154px] filter left-[-11px] rounded-[1.5164e+07px] size-[424.808px] top-[22px]"
      data-name="Container1"
    />
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute contents inset-[-0.01%_0.04%_0.13%_0.01%]"
      data-name="Mask group"
    >
      <div
        className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute inset-[-0.01%_0.04%_0.13%_0.01%] mask-position-[-0.054px,_0px_0.054px,_0px] mask-size-[620.857px_620.364px,_620.653px_620.193px]"
        data-name="Vector"
        style={{ maskImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"620\" height=\"620\"%3E%3Cpath d=\"M143.095 573.677L143.052 573.719L144.134 574.383L143.095 573.677Z\" fill=\"%23DBBC6C\" fill-opacity=\"0.1\" stroke=\"%23FFF8E6\" stroke-opacity=\"0.5\" stroke-width=\"6.42354\"/%3E%3C/svg%3E'), url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"620\" height=\"620\"%3E%3Cpath d=\"M143.095 573.677L143.052 573.719L144.134 574.383L143.095 573.677Z\" fill=\"%23DBBC6C\" fill-opacity=\"0.1\" stroke=\"%23FFF8E6\" stroke-opacity=\"0.5\" stroke-width=\"6.42354\"/%3E%3C/svg%3E')" }}
      >
        <div className="absolute inset-[-0.66%_-0.52%_-0.52%_-0.52%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 628 628"
          >
            <path
              d="M143.095 573.677L143.052 573.719L144.134 574.383L143.095 573.677Z"
              fill="var(--fill-0, #DBBC6C)"
              fillOpacity="0.1"
              id="Vector"
              stroke="var(--stroke-0, #FFF8E6)"
              strokeOpacity="0.5"
              strokeWidth="6.42354"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div
      className="absolute contents inset-[-0.01%_0.04%_0.13%_0.01%]"
      data-name="Vector"
    >
      <MaskGroup />
    </div>
  );
}

function Arcos1() {
  return (
    <div
      className="absolute contents inset-[-0.01%_0.04%_0.13%_0.01%]"
      data-name="Arcos 1"
    >
      <Vector />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute bottom-[0.09%] contents left-0 right-[0.01%] top-0"
      data-name="Clip path group"
    >
      <Arcos1 />
    </div>
  );
}

function Arcos() {
  return (
    <motion.div
      className="h-[620.942px] overflow-clip relative shrink-0 w-full"
      data-name="Arcos"
      animate={{ rotate: 360 }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <ClipPathGroup />
    </motion.div>
  );
}

function Container() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.087px)] size-[620.942px] top-[calc(50%-0.529px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Container"
    >
      <Arcos />
    </div>
  );
}

// Central Card
function Container2() {
  return (
    <div
      className="absolute bg-[#d9d9d9] h-[235px] left-0 rounded-[19.885px] top-0 w-[388.654px]"
      data-name="Container"
    />
  );
}

function ImageSigningDocument() {
  return (
    <div
      className="absolute h-[737.538px] left-[-10.85px] top-[-21.69px] w-[491.692px]"
      data-name="Image (Signing document)"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src="/images/signing-document.png"
      />
    </div>
  );
}

function ImageFrame() {
  return (
    <div
      className="absolute h-[235px] left-[7.68px] overflow-clip rounded-[19.885px] top-[7.23px] w-[388.654px]"
      data-name="ImageFrame"
    >
      <Container2 />
      <ImageSigningDocument />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="absolute h-[38.971px] left-[16.71px] top-[253.08px] w-[244.067px]"
      data-name="Paragraph"
    >
      <p className="absolute font-serif font-bold leading-[38.968px] left-[122.5px] text-[27.834px] text-black text-center text-nowrap top-0 tracking-[-0.6252px] translate-x-[-50%] whitespace-pre">
        Tu llave a panama
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="absolute h-[34.346px] left-[14.46px] top-[329.9px] w-[302.788px]"
      data-name="Paragraph"
    >
      <p className="absolute font-normal leading-[17.173px] left-0 text-[13.558px] text-black top-[-0.45px] tracking-[-0.3975px] w-[253.077px]">
        Abriendo las puertas a tu nueva vida con inversiones seguras y
        rentables.
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute contents inset-[8.22%_9.57%_9.57%_8.22%]"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.22%_9.57%_9.57%_8.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.246px] mask-size-[14.949px_14.949px]"
        data-name="Vector"
        style={{ maskImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\"%3E%3Cpath d=\"M6.85158 13.0803C10.2916 13.0803 13.0803 10.2916 13.0803 6.85158C13.0803 3.41156 10.2916 0.622873 6.85158 0.622873C3.41156 0.622873 0.622873 3.41156 0.622873 6.85158C0.622873 10.2916 3.41156 13.0803 6.85158 13.0803Z\" stroke=\"%23050505\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.24575\"/%3E%3C/svg%3E')" }}
      >
        <div className="absolute inset-[-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 14"
          >
            <path
              d="M6.85158 13.0803C10.2916 13.0803 13.0803 10.2916 13.0803 6.85158C13.0803 3.41156 10.2916 0.622873 6.85158 0.622873C3.41156 0.622873 0.622873 3.41156 0.622873 6.85158C0.622873 10.2916 3.41156 13.0803 6.85158 13.0803Z"
              id="Vector"
              stroke="var(--stroke-0, #050505)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.24575"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-[41.1%_38.34%_42.45%_36.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.606px_-6.229px] mask-size-[14.949px_14.949px]"
        data-name="Vector_2"
        style={{ maskImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\"%3E%3Cpath d=\"M6.85158 13.0803C10.2916 13.0803 13.0803 10.2916 13.0803 6.85158C13.0803 3.41156 10.2916 0.622873 6.85158 0.622873C3.41156 0.622873 0.622873 3.41156 0.622873 6.85158C0.622873 10.2916 3.41156 13.0803 6.85158 13.0803Z\" stroke=\"%23050505\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.24575\"/%3E%3C/svg%3E')" }}
      >
        <div className="absolute inset-[-25%_-16.67%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5 4"
          >
            <path
              d="M0.622873 1.86861L1.86861 3.11435L4.36007 0.622873"
              id="Vector_2"
              stroke="var(--stroke-0, #050505)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.24575"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute bottom-[1.35%] contents left-0 right-[1.35%] top-0"
      data-name="Clip path group"
    >
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="h-[15.153px] overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <ClipPathGroup1 />
    </div>
  );
}

function SuccessBadgeIcon() {
  return (
    <div
      className="relative shrink-0 size-[15.153px]"
      data-name="SuccessBadgeIcon"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[15.153px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="basis-0 grow h-[18.077px] min-h-px min-w-px relative shrink-0"
      data-name="Paragraph"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18.077px] relative w-full">
        <p className="absolute font-normal leading-[18.077px] left-0 not-italic text-[#050505] text-[12.654px] text-nowrap top-[0.45px] tracking-[-0.1359px] whitespace-pre">
          95% tasa de éxito
        </p>
      </div>
    </div>
  );
}

function SuccessBadge() {
  return (
    <div
      className="absolute content-stretch flex gap-[7.231px] h-[18.077px] items-center left-[16.27px] top-[303.69px] w-[126.433px]"
      data-name="SuccessBadge"
    >
      <SuccessBadgeIcon />
      <Paragraph2 />
    </div>
  );
}

function StartButton() {
  return (
    <div
      className="basis-0 grow h-[18.077px] min-h-px min-w-px relative shrink-0"
      data-name="StartButton"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18.077px] relative w-full">
        <p className="absolute font-normal leading-[18.077px] left-0 not-italic text-[12.654px] text-nowrap text-white top-[0.45px] tracking-[-0.1359px] whitespace-pre">
          Comenzar ahora
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[#1b3d36] box-border content-stretch flex h-[34.346px] items-center left-[14.46px] px-[15.154px] py-0 rounded-[1.5164e+07px] shadow-[0px_9.038px_13.558px_-2.712px_rgba(0,0,0,0.1),0px_3.615px_5.423px_-3.615px_rgba(0,0,0,0.1)] top-[387.75px] w-[127.195px]"
      data-name="Button"
    >
      <StartButton />
    </div>
  );
}

function StampImage() {
  return (
    <motion.div
      className="absolute left-[50.8px] size-[288.68px] top-[50.8px]"
      data-name="StampImage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut",
      }}
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src="/images/stamp-image.png"
      />
    </motion.div>
  );
}

function Container3() {
  return (
    <div className="relative size-[390.272px]" data-name="Container">
      <StampImage />
    </div>
  );
}

function Card() {
  return (
    <div
      className="absolute bg-white h-[470px] left-1/2 rounded-[19.885px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[403.115px]"
      data-name="Card"
    >
      <div className="h-[470px] overflow-clip relative rounded-[inherit] w-[403.115px]">
        <ImageFrame />
        <Paragraph />
        <Paragraph1 />
        <SuccessBadge />
        <Button />
        <div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[86.57px] top-[161.59px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]"
          style={
            {
              "--transform-inner-width": "390.265625",
              "--transform-inner-height": "390.265625",
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[30deg]">
            <Container3 />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(219,187,108,0.44)] border-solid inset-0 pointer-events-none rounded-[19.885px]"
      />
    </div>
  );
}

function Central() {
  return (
    <div
      className="absolute h-[470px] left-[calc(50%-0.442px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[403.115px]"
      data-name="Central"
    >
      <Container1 />
      <Container />
      <Card />
    </div>
  );
}

// Corner Cards
function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_10_399)" id="Icon">
          <path
            d="M22 7L13.5 15.5L8.5 10.5L2 17"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M2 12H22"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_10_399">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icono() {
  return (
    <div
      className="bg-[#31504a] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[48px]"
      data-name="Icono"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function TituloHeading() {
  return (
    <div
      className="absolute h-[38px] left-0 top-[4px] w-[202px]"
      data-name="Titulo / Heading"
    >
      <p className="absolute font-semibold leading-[19px] left-0 text-[#0f172b] text-[18px] top-0 tracking-[-0.3125px] w-[140px]">
        Camino a la Ciudadanía
      </p>
    </div>
  );
}

function TextoParagraph() {
  return (
    <div
      className="absolute h-[48px] left-[-65px] top-[54px] w-[273px]"
      data-name="Texto / Paragraph"
    >
      <p className="absolute font-normal h-[43px] leading-[22px] left-0 not-italic text-[#45556c] text-[16px] top-0 tracking-[-0.3125px] w-[276px]">
        Naturalización en 5 años con pasaporte panameño
      </p>
    </div>
  );
}

function Info() {
  return (
    <div className="h-[38px] relative shrink-0 w-[202px]" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[202px]">
        <TituloHeading />
        <TextoParagraph />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[100px] items-start relative shrink-0 w-[272px]"
      data-name="Container"
    >
      <Icono />
      <Info />
    </div>
  );
}

function Card4() {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex flex-col h-[150px] items-start left-[893px] p-[25px] rounded-[14px] top-[606px] w-[316px]"
      data-name="Card 4"
    >
      <div
        aria-hidden="true"
        className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-[14px]"
      />
      <Container4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d="M16 7H22V13"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M16 7H22V13"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Icono1() {
  return (
    <div
      className="bg-[#31504a] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[48px]"
      data-name="Icono"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function TituloHeading1() {
  return (
    <div
      className="absolute h-[38px] left-0 top-[4px] w-[202px]"
      data-name="Titulo / Heading"
    >
      <p className="absolute font-semibold leading-[19px] left-0 text-[#0f172b] text-[18px] top-0 tracking-[-0.3125px] w-[140px]">
        Inversiones de Alto Retorno
      </p>
    </div>
  );
}

function TextoParagraph1() {
  return (
    <div
      className="absolute h-[48px] left-[-65px] top-[54px] w-[273px]"
      data-name="Texto / Paragraph"
    >
      <p className="absolute font-normal h-[43px] leading-[22px] left-0 not-italic text-[#45556c] text-[16px] top-0 tracking-[-0.3125px] w-[276px]">
        Rendimientos anuales del 5-7% en oportunidades inmobiliarias premium
      </p>
    </div>
  );
}

function Info1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[202px]" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[202px]">
        <TituloHeading1 />
        <TextoParagraph1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[100px] items-start relative shrink-0 w-[272px]"
      data-name="Container"
    >
      <Icono1 />
      <Info1 />
    </div>
  );
}

function Card3() {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex flex-col h-[150px] items-start left-[893px] p-[25px] rounded-[14px] top-[171px] w-[316px]"
      data-name="Card 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-[14px]"
      />
      <Container5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M16 3.128C16.8578 3.35037 17.6174 3.85126 18.1597 4.55206C18.702 5.25286 18.9962 6.11389 18.9962 7C18.9962 7.88611 18.702 8.74714 18.1597 9.44794C17.6174 10.1487 16.8578 10.6496 16 10.872"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Icono2() {
  return (
    <div
      className="bg-[#31504a] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[48px]"
      data-name="Icono"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function TituloHeading2() {
  return (
    <div
      className="absolute h-[38px] left-0 top-[4px] w-[202px]"
      data-name="Titulo / Heading"
    >
      <p className="absolute font-semibold leading-[19px] left-0 text-[#0f172b] text-[18px] top-0 tracking-[-0.3125px] w-[140px]">
        Beneficios Familiares
      </p>
    </div>
  );
}

function TextoParagraph2() {
  return (
    <div
      className="absolute h-[48px] left-[-65px] top-[54px] w-[273px]"
      data-name="Texto / Paragraph"
    >
      <p className="absolute font-normal h-[43px] leading-[26px] left-0 not-italic text-[#45556c] text-[16px] top-0 tracking-[-0.3125px] w-[276px]">
        Incluye a tu cónyuge, hijos y padres en tu solicitud de residencia
      </p>
    </div>
  );
}

function Info2() {
  return (
    <div className="h-[38px] relative shrink-0 w-[202px]" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[202px]">
        <TituloHeading2 />
        <TextoParagraph2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[100px] items-start relative shrink-0 w-[272px]"
      data-name="Container"
    >
      <Icono2 />
      <Info2 />
    </div>
  );
}

function Card2() {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex flex-col h-[150px] items-start left-[46px] p-[25px] rounded-[14px] top-[606px] w-[316px]"
      data-name="Card 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-[14px]"
      />
      <Container6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M3 10C2.99993 9.70907 3.06333 9.42162 3.18579 9.15772C3.30824 8.89381 3.4868 8.6598 3.709 8.472L10.709 2.473C11.07 2.16791 11.5274 2.00052 12 2.00052C12.4726 2.00052 12.93 2.16791 13.291 2.473L20.291 8.472C20.5132 8.6598 20.6918 8.89381 20.8142 9.15772C20.9367 9.42162 21.0001 9.70907 21 10V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V10Z"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Icono3() {
  return (
    <div
      className="bg-[#31504a] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[48px]"
      data-name="Icono"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function TituloHeading3() {
  return (
    <div
      className="absolute h-[38px] left-0 top-[4px] w-[202px]"
      data-name="Titulo / Heading"
    >
      <p className="absolute font-semibold leading-[19px] left-0 text-[#0f172b] text-[18px] top-0 tracking-[-0.3125px] w-[140px]">
        Residencia Permanente
      </p>
    </div>
  );
}

function TextoParagraph3() {
  return (
    <div
      className="absolute h-[48px] left-[-65px] top-[54px] w-[273px]"
      data-name="Texto / Paragraph"
    >
      <p className="absolute font-normal h-[43px] leading-[22px] left-0 not-italic text-[#45556c] text-[16px] top-0 tracking-[-0.3125px] w-[276px]">
        Ruta directa hacia la residencia en Panamá mediante inversión calificada
      </p>
    </div>
  );
}

function Info3() {
  return (
    <div className="h-[38px] relative shrink-0 w-[202px]" data-name="Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[202px]">
        <TituloHeading3 />
        <TextoParagraph3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[100px] items-start relative shrink-0 w-[272px]"
      data-name="Container"
    >
      <Icono3 />
      <Info3 />
    </div>
  );
}

function Card1() {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex flex-col h-[150px] items-start left-[46px] p-[25px] rounded-[14px] top-[171px] w-[316px]"
      data-name="Card 1"
    >
      <div
        aria-hidden="true"
        className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-[14px]"
      />
      <Container7 />
    </div>
  );
}

function App() {
  return (
    <div
      className="absolute bottom-[13.33%] left-1/2 top-[62.67%] translate-x-[-50%] w-[385px]"
      data-name="App1"
    >
      <p className="absolute font-normal h-[24px] leading-[24px] left-[calc(50%-0.5px)] not-italic text-[#45556c] text-[16px] text-center top-0 tracking-[-0.4492px] translate-x-[-50%] w-[394px]">
        Cuatro pilares fundamentales que garantizan tu éxito
      </p>
    </div>
  );
}

function TituloHeader() {
  return (
    <div
      className="absolute h-[75px] left-[calc(50%-0.5px)] top-[40px] translate-x-[-50%] w-[715px]"
      data-name="Titulo / Header"
    >
      <p className="absolute font-bold h-[37px] leading-[36px] left-[357.5px] text-[40px] text-black text-center top-0 tracking-[0.3516px] translate-x-[-50%] w-[715px]">
        Por qué elegir Panama Golden Key
      </p>
      <App />
    </div>
  );
}

export function PanamaHero() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Componente - Razón: Golden Key"
    >
      <Central />
      <Card4 />
      <Card3 />
      <Card2 />
      <Card1 />
      <TituloHeader />
    </div>
  );
}
