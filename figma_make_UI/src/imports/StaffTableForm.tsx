import svgPaths from "./svg-2qcp9vf1mo";

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

function StaffTables() {
  return <div className="bg-[#f5f5f5] h-[658.4px] shrink-0 w-[1112px]" data-name="StaffTables" />;
}

function StaffLayout() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] h-[658.4px] items-start left-0 top-0 w-[1112px]" data-name="StaffLayout">
      <Header />
      <StaffTables />
    </div>
  );
}

function Icon1() {
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
          <Icon1 />
          <StaffLayout2 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
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
          <Icon2 />
          <StaffLayout3 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_56_6652)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_56_6652">
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
          <Icon3 />
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

function StaffTables1() {
  return <div className="absolute bg-[rgba(0,0,0,0.6)] h-[658.4px] left-0 top-0 w-[1112px]" data-name="StaffTables" />;
}

function Heading1() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[40px] w-[304px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[32px] left-[152.9px] not-italic text-[#2d2d2d] text-[24px] text-center top-[-2.8px] whitespace-nowrap">Open Table T1</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[79.6px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <Icon4 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[107.6px] not-italic text-[#99a1af] text-[10px] top-[-0.5px] tracking-[1px] uppercase whitespace-nowrap">Number of Guests</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[16px] shrink-0 size-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[32px] left-[32.1px] not-italic text-[#2d2d2d] text-[24px] text-center top-[13.2px] whitespace-nowrap">−</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[48px] left-[63.6px] not-italic text-[#2d2d2d] text-[48px] text-center top-[-3.8px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff6b35] relative rounded-[16px] shadow-[0px_20px_25px_0px_#ffedd4,0px_8px_10px_0px_#ffedd4] shrink-0 size-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[32px] left-[32.1px] not-italic text-[24px] text-center text-white top-[13.2px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[24px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Text1 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[104px] items-start left-[40px] top-[103.99px] w-[304px]" data-name="Container">
      <Label />
      <Container3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f9fafb] col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Button">
      <div className="content-stretch flex items-start py-[20px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[16px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[12px] text-center tracking-[1.2px] uppercase">Cancel</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[37px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2d2d2d] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shadow-[0px_20px_25px_0px_#e5e7eb,0px_8px_10px_0px_#e5e7eb] shrink-0" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[84px] not-italic text-[12px] text-center text-white top-[20px] tracking-[1.2px] uppercase whitespace-nowrap">Start</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[56px] left-[40px] top-[247.99px] w-[304px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function StaffTables2() {
  return (
    <div className="absolute bg-white h-[343.988px] left-[364px] rounded-[40px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[157.21px] w-[384px]" data-name="StaffTables">
      <Heading1 />
      <Container2 />
      <Container4 />
    </div>
  );
}

export default function StaffTableForm() {
  return (
    <div className="bg-white relative size-full" data-name="Staff/TableForm">
      <StaffLayout />
      <StaffLayout1 />
      <StaffTables1 />
      <StaffTables2 />
    </div>
  );
}