import svgPaths from "./svg-wzwi27o79j";
import imgImageWithFallback from "figma:asset/186abc42c4fa43b82a2d11ef4d9921d4c3f3411b.png";
import imgImageWithFallback1 from "figma:asset/ca81da59f924a0e3d6330dae137ebb880671a47f.png";
import imgImageWithFallback2 from "figma:asset/8dbc9f56f5c9f12e7efc6da6ba9b910f64ab4817.png";
import imgImageWithFallback3 from "figma:asset/1a3538b97caaa86f0bae25a170db2a1847e4ca7e.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[512px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-2.8px] whitespace-nowrap">La Cuisine Moderne</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.9)]">Fine Dining Experience</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[55.987px] relative shrink-0 w-[221.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#ff6b35] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[89.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">OPEN NOW</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[103.988px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pb-[24px] px-[24px] relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(45,45,45,0.8)] h-[224px] items-end left-0 to-[rgba(0,0,0,0)] top-0 w-[512px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[16px] text-white top-[-2.2px] whitespace-nowrap">Book a Table</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Select your favorite spot</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[132.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff6b35] h-[75.988px] relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[155.6px] relative size-full">
          <Icon />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16.8px] size-[20px] top-[16.8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_56_4502)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_56_4502">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[16.8px] top-[44.8px] w-[200.4px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[15px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] uppercase">Next Slot</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16.8px] top-[59.8px] w-[200.4px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[14px]">Today, 7:30 PM</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white col-1 h-[96.6px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon1 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16.8px] size-[20px] top-[16.8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[16.8px] top-[44.8px] w-[200.4px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[15px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] uppercase">Distance</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16.8px] top-[59.8px] w-[200.4px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[14px]">0.8 miles away</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white col-2 h-[96.6px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon2 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[96.6px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p17c65ff0} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1aa35900} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b6cafc0} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fc7e680} id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[14px]">Explore Menu</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Seasonal specialties</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[105.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-[157.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#ff6b35] text-[14px] text-center whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[73.6px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16.8px] py-[0.8px] relative size-full">
          <Container11 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[216px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{`Chef's Recommendations`}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[79px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">Show More</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-between left-0 px-[4px] top-0 w-[480px]" data-name="Container">
      <Heading1 />
      <Button2 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[12.8px] overflow-clip top-[123.6px] w-[123.738px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[12px]">Truffle Pasta</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[110.8px] left-0 top-0 w-[147.738px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[23px] items-start left-[106.94px] px-[8px] py-[4px] rounded-[10px] top-[8px] w-[32.8px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#ff6b35] text-[10px] whitespace-nowrap">$28</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[110.8px] left-[0.8px] top-[0.8px] w-[147.738px]" data-name="Container">
      <ImageWithFallback1 />
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[152.387px] relative rounded-[16px] shrink-0 w-[149.338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Paragraph9 />
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[12.8px] overflow-clip top-[123.6px] w-[123.738px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[12px]">Grilled Salmon</p>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[110.8px] left-0 top-0 w-[147.738px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[23px] items-start left-[106.94px] px-[8px] py-[4px] rounded-[10px] top-[8px] w-[32.8px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#ff6b35] text-[10px] whitespace-nowrap">$35</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[110.8px] left-[0.8px] top-[0.8px] w-[147.738px]" data-name="Container">
      <ImageWithFallback2 />
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[152.387px] relative rounded-[16px] shrink-0 w-[149.338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Paragraph10 />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[12.8px] overflow-clip top-[123.6px] w-[123.738px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[12px]">Chocolate Lava</p>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[110.8px] left-0 top-0 w-[147.738px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[23px] items-start left-[106.94px] px-[8px] py-[4px] rounded-[10px] top-[8px] w-[32.8px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#ff6b35] text-[10px] whitespace-nowrap">$12</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[110.8px] left-[0.8px] top-[0.8px] w-[147.738px]" data-name="Container">
      <ImageWithFallback3 />
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[152.387px] relative rounded-[16px] shrink-0 w-[149.338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Paragraph11 />
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[168.387px] items-start left-[-16px] overflow-clip pl-[16px] top-[39px] w-[512px]" data-name="Container">
      <Container17 />
      <Container20 />
      <Container23 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[207.387px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[533.575px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Button />
        <Container7 />
        <Container10 />
        <Container14 />
      </div>
    </div>
  );
}

function CustomerHome1() {
  return (
    <div className="bg-[#f5f5f5] h-[757.575px] relative shrink-0 w-[512px]" data-name="CustomerHome">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
        <Container5 />
      </div>
    </div>
  );
}

function CustomerLayout() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[658.4px] items-start left-0 pl-[300px] pt-[60.8px] top-0 w-[1112px]" data-name="CustomerLayout">
      <CustomerHome1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CustomerLayout2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[32.8px]" data-name="CustomerLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ff6b35] text-[12px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] h-[67.988px] items-center justify-self-stretch pt-[12px] relative row-1 shrink-0" data-name="Link">
      <Icon4 />
      <CustomerLayout2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p37c3c200} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p30f6b800} id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.1 21.8L8.5 15.5" id="Vector_3" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 5L12 12" id="Vector_4" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CustomerLayout3() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[29.6px]" data-name="CustomerLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717171] text-[12px] whitespace-nowrap">Menu</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] h-[67.988px] items-center justify-self-stretch pt-[12px] relative row-1 shrink-0" data-name="Link">
      <Icon5 />
      <CustomerLayout3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CustomerLayout4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[66.4px]" data-name="CustomerLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717171] text-[12px] whitespace-nowrap">Reservations</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[4px] h-[67.988px] items-center justify-self-stretch pt-[12px] relative row-1 shrink-0" data-name="Link">
      <Icon6 />
      <CustomerLayout4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p67f12c8} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CustomerLayout5() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[34.4px]" data-name="CustomerLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717171] text-[12px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[4px] h-[67.988px] items-center justify-self-stretch pt-[12px] relative row-1 shrink-0" data-name="Link">
      <Icon7 />
      <CustomerLayout5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[67.988px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function CustomerLayout1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[68.787px] items-start left-0 pt-[0.8px] px-[300px] top-[829px] w-[1112px]" data-name="CustomerLayout">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container26 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#ff6b35] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] tracking-[-0.4px] whitespace-nowrap">Gastros</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[32px] relative shrink-0 w-[98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container28 />
        <Text />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 16.6667">
            <path d={svgPaths.p297e5680} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 10">
            <path d={svgPaths.p6680d80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 1.66667">
            <path d="M10.8333 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function CustomerLayout6() {
  return (
    <div className="absolute bg-white content-stretch flex h-[60.8px] items-center justify-between left-0 pb-[0.8px] px-[16px] top-0 w-[1112px]" data-name="CustomerLayout">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Button3 />
    </div>
  );
}

export default function CustomerHome() {
  return (
    <div className="bg-white relative size-full" data-name="Customer/Home">
      <CustomerLayout />
      <CustomerLayout1 />
      <CustomerLayout6 />
    </div>
  );
}