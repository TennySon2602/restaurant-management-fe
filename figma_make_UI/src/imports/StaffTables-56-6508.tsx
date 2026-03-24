import svgPaths from "./svg-amkcmt670k";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[20px] text-white top-[-2.2px] whitespace-nowrap">Staff POS System</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">{`Table & Order Management`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[54px] relative shrink-0 w-[176px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12257fa0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c1f680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 8H6" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[36px] relative rounded-[14px] shrink-0 w-[104px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[54px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#2d2d2d] h-[86px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[1112px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">Floor Plan</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Staff Terminal · Area: All</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[51.975px] relative shrink-0 w-[200px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="bg-[#4caf50] rounded-[26843500px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[59.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] uppercase whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[79.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container8 />
        <Text1 />
      </div>
    </div>
  );
}

function Container10() {
  return <div className="bg-[#f44336] rounded-[26843500px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] uppercase whitespace-nowrap">Occupied</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[73.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container10 />
        <Text2 />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="bg-[#ffc107] rounded-[26843500px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] uppercase whitespace-nowrap">Reserved</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container12 />
        <Text3 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#2d2d2d] rounded-[26843500px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] uppercase whitespace-nowrap">Merged Group</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[104.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container14 />
        <Text4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[44px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[16.8px] rounded-[14px] top-0 w-[411.2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ff6b35] h-[44px] left-[423.2px] rounded-[14px] shadow-[0px_10px_15px_0px_#ffedd4,0px_4px_6px_0px_#ffedd4] top-0 w-[172.8px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[98px] not-italic text-[16px] text-center text-white top-[7.8px] whitespace-nowrap">Merge Tables</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[596px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[51.975px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[40px] left-[105.6px] top-[60px] w-[40.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[20.5px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T1</p>
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button2() {
  return (
    <div className="bg-[#4caf50] col-1 justify-self-stretch overflow-clip relative rounded-[32px] row-1 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[60px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T2</p>
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button3() {
  return (
    <div className="bg-[#4caf50] col-2 justify-self-stretch overflow-clip relative rounded-[32px] row-1 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[44px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T3</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[5.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.1)] h-[23.988px] left-[106.4px] rounded-[26843500px] top-[92px] w-[39.2px]" data-name="Container">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[28.5px] not-italic text-[12px] text-center text-white top-[4px] whitespace-nowrap">4</p>
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button4() {
  return (
    <div className="bg-[#ffc107] col-3 justify-self-stretch overflow-clip relative rounded-[32px] row-1 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[40px] left-[103.2px] top-[60px] w-[45.6px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[23px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T4</p>
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button5() {
  return (
    <div className="bg-[#4caf50] col-4 justify-self-stretch overflow-clip relative rounded-[32px] row-1 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[60px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22.5px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T5</p>
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button6() {
  return (
    <div className="bg-[#4caf50] col-1 justify-self-stretch overflow-clip relative rounded-[32px] row-2 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[60px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T6</p>
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button7() {
  return (
    <div className="bg-[#4caf50] col-2 justify-self-stretch overflow-clip relative rounded-[32px] row-2 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[60px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22.5px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T7</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button8() {
  return (
    <div className="bg-[#4caf50] col-3 justify-self-stretch overflow-clip relative rounded-[32px] row-2 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[60px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T8</p>
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button9() {
  return (
    <div className="bg-[#4caf50] col-4 justify-self-stretch overflow-clip relative rounded-[32px] row-2 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[40px] left-[103.6px] top-[44px] w-[44.8px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[22px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T9</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[5.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.1)] h-[23.988px] left-[106.4px] rounded-[26843500px] top-[92px] w-[39.2px]" data-name="Container">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[28px] not-italic text-[12px] text-center text-white top-[4px] whitespace-nowrap">6</p>
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button10() {
  return (
    <div className="bg-[#ffc107] col-1 justify-self-stretch overflow-clip relative rounded-[32px] row-3 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[40px] left-[94.8px] top-[60px] w-[62.4px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[31px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T10</p>
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button11() {
  return (
    <div className="bg-[#4caf50] col-2 justify-self-stretch overflow-clip relative rounded-[32px] row-3 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[40px] left-[96.8px] top-[60px] w-[58.4px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[29px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T11</p>
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button12() {
  return (
    <div className="bg-[#4caf50] col-3 justify-self-stretch overflow-clip relative rounded-[32px] row-3 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[40px] left-[94.8px] top-[60px] w-[62.4px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[40px] left-[31.5px] not-italic text-[36px] text-center text-white top-[-2.8px] whitespace-nowrap">T12</p>
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[188px] rounded-bl-[32px] size-[64px] top-0" data-name="Container" />;
}

function Button13() {
  return (
    <div className="bg-[#4caf50] col-4 justify-self-stretch overflow-clip relative rounded-[32px] row-3 self-stretch shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[528px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function StaffTables1() {
  return (
    <div className="bg-[#f5f5f5] h-[635.975px] relative shrink-0 w-[1112px]" data-name="StaffTables">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[16px] px-[16px] relative size-full">
        <Container2 />
        <Container15 />
      </div>
    </div>
  );
}

function StaffLayout() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] h-[597.6px] items-start left-0 top-0 w-[1112px]" data-name="StaffLayout">
      <Header />
      <StaffTables1 />
    </div>
  );
}

function Icon4() {
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

function StaffLayout2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[42.4px]" data-name="StaffLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#ff6b35] text-[16px] top-[-2.2px] whitespace-nowrap">Tables</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] h-[57.6px] min-h-px min-w-px relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ff6b35] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[1.6px] pl-[150.125px] pr-[150.138px] relative size-full">
          <Icon4 />
          <StaffLayout2 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p16dd5f0} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 8.33333H18.3333" id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function StaffLayout3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.8px]" data-name="StaffLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717171] text-[16px] top-[-2.2px] whitespace-nowrap">Payments History</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[57.6px] min-h-px min-w-px relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[1.6px] pl-[110.925px] pr-[110.938px] relative size-full">
          <Icon5 />
          <StaffLayout3 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_56_6619)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_56_6619">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StaffLayout4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32px]" data-name="StaffLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717171] text-[16px] top-[-2.2px] whitespace-nowrap">Shift</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="flex-[1_0_0] h-[57.6px] min-h-px min-w-px relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[1.6px] pl-[155.325px] pr-[155.337px] relative size-full">
          <Icon6 />
          <StaffLayout4 />
        </div>
      </div>
    </div>
  );
}

function StaffLayout1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[57.6px] items-start left-0 pb-[0.8px] pr-[0.012px] top-[86px] w-[1112px]" data-name="StaffLayout">
      <div aria-hidden="true" className="absolute border-b-[0.8px] border-black border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

export default function StaffTables() {
  return (
    <div className="bg-white relative size-full" data-name="Staff/Tables">
      <StaffLayout />
      <StaffLayout1 />
    </div>
  );
}