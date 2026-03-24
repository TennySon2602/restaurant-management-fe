import svgPaths from "./svg-t8ofa1yqjn";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[20px] text-white top-[-2.2px] whitespace-nowrap">Manager Dashboard</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">{`Restaurant Operations & Analytics`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[54px] relative shrink-0 w-[216px]" data-name="Container">
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
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{`Reports & Analytics`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">Analyze restaurant performance</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[51px] relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] text-center whitespace-nowrap">This Quarter</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[16px] relative size-full">
          <Icon1 />
          <Text1 />
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
          <path d={svgPaths.p3053b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p37dcb700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 12.5V2.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Export</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff6b35] h-[36px] relative rounded-[10px] shrink-0 w-[104px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[259.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[51px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Total Revenue (Q1)</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">$142,000</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">+15%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white col-1 h-[135.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Avg Order Value</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">$74.50</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[29.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">+8%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white col-2 h-[135.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container9 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Total Orders</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">1,410</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">+12%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white col-3 h-[135.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph6 />
        <Paragraph7 />
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Customer Satisfaction</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">4.8/5</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">+0.2</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white col-4 h-[135.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph8 />
        <Paragraph9 />
        <Container13 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[135.988px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{`Monthly Revenue & Orders`}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%_1.06%_19.67%_13.77%]" data-name="Group">
      <div className="absolute inset-[-0.21%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 237">
          <g id="Group">
            <path d="M0 236.5H402" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 177.5H402" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 118.5H402" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 59.5H402" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 0.5H402" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.67%_1.06%_19.67%_13.77%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 236">
          <g id="Group">
            <path d="M67.5 0V236" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M201.5 0V236" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M335.5 0V236" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0.5 0V236" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M402.5 0V236" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.67%_1.06%_19.67%_13.77%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[80.33%_69.81%_13.16%_25.74%]" data-name="Group">
      <div className="absolute inset-[80.33%_72.03%_17.67%_27.97%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_69.81%_13.16%_25.74%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Jan</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[80.33%_41.42%_13.16%_54.13%]" data-name="Group">
      <div className="absolute inset-[80.33%_43.64%_17.67%_56.36%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_41.42%_13.16%_54.13%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Feb</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[80.33%_12.92%_13.16%_82.42%]" data-name="Group">
      <div className="absolute inset-[80.33%_15.25%_17.67%_84.75%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_12.92%_13.16%_82.42%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Mar</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[80.33%_12.92%_13.16%_25.74%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[80.33%_1.06%_13.16%_13.77%]" data-name="Group">
      <div className="absolute inset-[80.33%_1.06%_19.67%_13.77%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <path d="M0 0.5H402" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[77.75%_86.23%_17.25%_10.38%]" data-name="Group">
      <div className="absolute inset-[80.33%_86.23%_19.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[77.75%_87.92%_17.25%_10.38%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[58.09%_86.23%_36.91%_4.45%]" data-name="Group">
      <div className="absolute inset-[60.67%_86.23%_39.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.09%_87.92%_36.91%_4.45%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">15000</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[38.42%_86.23%_56.58%_4.03%]" data-name="Group">
      <div className="absolute inset-[41%_86.23%_59%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38.42%_87.92%_56.58%_4.03%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">30000</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[18.75%_86.23%_76.25%_4.03%]" data-name="Group">
      <div className="absolute inset-[21.33%_86.23%_78.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[18.75%_87.92%_76.25%_4.03%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">45000</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_93.58%_4.03%]" data-name="Group">
      <div className="absolute inset-[1.67%_86.23%_98.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.42%_87.92%_93.58%_4.03%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">60000</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_17.25%_4.03%]" data-name="Group">
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_17.25%_4.03%]" data-name="Group">
      <div className="absolute inset-[1.67%_86.23%_19.67%_13.77%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 236">
            <path d="M0.5 0V236" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <Group9 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[25.27%_72.58%_19.67%_16.61%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 165.2">
        <g id="Group">
          <path d={svgPaths.p2e805200} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[17.4%_44.19%_19.67%_45%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 188.8">
        <g id="Group">
          <path d={svgPaths.p13db9680} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[12.16%_15.81%_19.67%_73.39%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 204.533">
        <g id="Group">
          <path d={svgPaths.p2ff38280} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[12.16%_15.81%_19.67%_16.61%]" data-name="Group">
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[12.16%_15.81%_19.67%_16.61%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[12.16%_15.81%_19.67%_16.61%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[79.78%_60.93%_19.67%_28.26%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 1.65199">
        <g id="Group">
          <path d={svgPaths.p15883c0} fill="var(--fill-0, #FFB347)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[79.7%_32.54%_19.67%_56.65%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 1.888">
        <g id="Group">
          <path d={svgPaths.p9923600} fill="var(--fill-0, #FFB347)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[79.66%_4.15%_19.67%_85.04%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 2.006">
        <g id="Group">
          <path d={svgPaths.p3499f000} fill="var(--fill-0, #FFB347)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[79.66%_4.15%_19.67%_28.26%]" data-name="Group">
      <Group24 />
      <Group25 />
      <Group26 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[79.66%_4.15%_19.67%_28.26%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[79.66%_4.15%_19.67%_28.26%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[472px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group8 />
      <Group15 />
      <Group21 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute left-0 size-[14px] top-[8.2px]" data-name="Surface">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Surface">
          <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[24px] left-[153px] top-0 w-[73.2px]" data-name="List Item">
      <Surface1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[46.5px] not-italic text-[#ff6b35] text-[16px] text-center top-[-2.2px] whitespace-nowrap">revenue</p>
    </div>
  );
}

function Surface2() {
  return (
    <div className="absolute left-0 size-[14px] top-[8.2px]" data-name="Surface">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Surface">
          <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #FFB347)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[24px] left-[236.2px] top-0 w-[62.8px]" data-name="List Item">
      <Surface2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[40.5px] not-italic text-[#ffb347] text-[16px] text-center top-[-2.2px] whitespace-nowrap">orders</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute h-[24px] left-[5px] top-[271px] w-[462px]" data-name="Legend">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="BarChart">
      <Surface />
      <Legend />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading2 />
        <BarChart />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Sales by Category</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute bottom-1/2 left-[32.53%] right-[28.81%] top-[16.67%]" data-name="Group">
      <div className="absolute inset-[-0.5%_-0.27%_-0.5%_-0.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183.667 101">
          <g id="Group">
            <path d={svgPaths.p1db6fb00} fill="var(--fill-0, #FF6B35)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-[25.85%] left-[28.81%] right-1/2 top-[31.15%]" data-name="Group">
      <div className="absolute inset-[-0.54%_-0.77%_-0.55%_-0.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.267 130.406">
          <g id="Group">
            <path d={svgPaths.p3214d700} fill="var(--fill-0, #FFB347)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute bottom-[16.67%] left-[35.4%] right-[42.37%] top-1/2" data-name="Group">
      <div className="absolute inset-[-0.92%_-0.62%_-0.5%_-0.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.314 101.417">
          <g id="Group">
            <path d={svgPaths.p1da3ed00} fill="var(--fill-0, #4ECDC4)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[18.91%] left-1/2 right-[32.98%] top-1/2" data-name="Group">
      <div className="absolute inset-[-1.53%_-0.87%_-0.69%_-1.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.1385 95.3572">
          <g id="Group">
            <path d={svgPaths.p7854410} fill="var(--fill-0, #95E1D3)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[16.67%_28.81%]" data-name="Group">
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[16.67%_28.81%]" data-name="Group">
      <Group28 />
    </div>
  );
}

function Surface3() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[472px]" data-name="Surface">
      <Group27 />
    </div>
  );
}

function PieChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="PieChart">
      <Surface3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading3 />
        <PieChart />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[391px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Best-Selling Dishes</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[75.8px] items-start left-0 pb-[0.8px] pt-[24px] px-[24px] top-0 w-[1064px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Heading4 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-0 p-[16px] top-0 w-[135.65px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Rank</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[135.65px] p-[16px] top-0 w-[281.113px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Dish</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[416.76px] p-[16px] top-0 w-[219px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Sales</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[635.76px] p-[16px] top-0 w-[186.313px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Revenue</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[822.08px] p-[16px] top-0 w-[241.925px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Contribution</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[52.4px] left-0 top-0 w-[1064px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#f5f5f5] border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[52.4px] left-0 top-0 w-[1064px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#ff6b35] text-[14px]">#1</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex items-center justify-center left-[16px] px-[7.6px] rounded-[26843500px] size-[32px] top-[16.4px]" data-name="Container">
      <Text7 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[64.8px] left-0 top-0 w-[135.65px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[64.8px] left-[135.65px] top-0 w-[281.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">Truffle Pasta</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[64.8px] left-[416.76px] top-0 w-[219px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">245 orders</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[64.8px] left-[635.76px] top-0 w-[186.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[18.2px] whitespace-nowrap">$6860</p>
    </div>
  );
}

function Container22() {
  return <div className="bg-[#ff6b35] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container21() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[76.575px] relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">23.4%</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] pr-[58.725px] top-[22.4px] w-[209.925px]" data-name="Container">
      <Container21 />
      <Text8 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[64.8px] left-[822.08px] top-0 w-[241.925px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[64.8px] left-0 top-0 w-[1064px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ff6b35] text-[14px] whitespace-nowrap">#2</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex items-center justify-center left-[16px] px-[7.6px] rounded-[26843500px] size-[32px] top-[16.4px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[64.8px] left-0 top-0 w-[135.65px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[64.8px] left-[135.65px] top-0 w-[281.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">Wagyu Steak</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[64.8px] left-[416.76px] top-0 w-[219px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">189 orders</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[64.8px] left-[635.76px] top-0 w-[186.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[18.2px] whitespace-nowrap">$12285</p>
    </div>
  );
}

function Container26() {
  return <div className="bg-[#ff6b35] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container25() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[58.037px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">42.0%</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] pr-[58.725px] top-[22.4px] w-[209.925px]" data-name="Container">
      <Container25 />
      <Text10 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[64.8px] left-[822.08px] top-0 w-[241.925px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[64.8px] left-0 top-[64.8px] w-[1064px]" data-name="Table Row">
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ff6b35] text-[14px] whitespace-nowrap">#3</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex items-center justify-center left-[16px] px-[7.6px] rounded-[26843500px] size-[32px] top-[16.4px]" data-name="Container">
      <Text11 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[64.8px] left-0 top-0 w-[135.65px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[64.8px] left-[135.65px] top-0 w-[281.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">Grilled Salmon</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[64.8px] left-[416.76px] top-0 w-[219px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">167 orders</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[64.8px] left-[635.76px] top-0 w-[186.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[18.2px] whitespace-nowrap">$5845</p>
    </div>
  );
}

function Container30() {
  return <div className="bg-[#ff6b35] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container29() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[80.037px] relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">20.0%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] pr-[58.725px] top-[22.4px] w-[209.925px]" data-name="Container">
      <Container29 />
      <Text12 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[64.8px] left-[822.08px] top-0 w-[241.925px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[64.8px] left-0 top-[129.6px] w-[1064px]" data-name="Table Row">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ff6b35] text-[14px] whitespace-nowrap">#4</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex items-center justify-center left-[16px] px-[7.6px] rounded-[26843500px] size-[32px] top-[16.4px]" data-name="Container">
      <Text13 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[64.8px] left-0 top-0 w-[135.65px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[64.8px] left-[135.65px] top-0 w-[281.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">Chocolate Lava</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[64.8px] left-[416.76px] top-0 w-[219px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">156 orders</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[64.8px] left-[635.76px] top-0 w-[186.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[18.2px] whitespace-nowrap">$1872</p>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#ff6b35] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container33() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[93.613px] relative size-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">6.4%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] pr-[66.725px] top-[22.4px] w-[209.925px]" data-name="Container">
      <Container33 />
      <Text14 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[64.8px] left-[822.08px] top-0 w-[241.925px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[64.8px] left-0 top-[194.4px] w-[1064px]" data-name="Table Row">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ff6b35] text-[14px] whitespace-nowrap">#5</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex items-center justify-center left-[16px] px-[7.6px] rounded-[26843500px] size-[32px] top-[16.4px]" data-name="Container">
      <Text15 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[64.4px] left-0 top-0 w-[135.65px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[64.4px] left-[135.65px] top-0 w-[281.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">Lobster Bisque</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[64.4px] left-[416.76px] top-0 w-[219px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[18.2px] whitespace-nowrap">134 orders</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[64.4px] left-[635.76px] top-0 w-[186.313px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[18.2px] whitespace-nowrap">$2412</p>
    </div>
  );
}

function Container38() {
  return <div className="bg-[#ff6b35] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container37() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[91.762px] relative size-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">8.2%</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-[16px] pr-[66.725px] top-[22.4px] w-[209.925px]" data-name="Container">
      <Container37 />
      <Text16 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[64.4px] left-[822.08px] top-0 w-[241.925px]" data-name="Table Cell">
      <Container36 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[64.4px] left-0 top-[259.2px] w-[1064px]" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[323.6px] left-0 top-[52.4px] w-[1064px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[376px] left-0 overflow-clip top-[75.8px] w-[1064px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[451.8px] overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Container18 />
      <Table />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2d557600} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 10L12 15L17 10" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 15V3" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Export as Excel</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">Download full report (.xlsx)</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[44px] relative shrink-0 w-[182.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2d557600} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 10L12 15L17 10" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 15V3" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Export as PDF</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">Download printable report (.pdf)</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[44px] relative shrink-0 w-[220px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[96px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function ManagerReports() {
  return (
    <div className="h-[1269.787px] relative shrink-0 w-[1112px]" data-name="ManagerReports">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative size-full">
        <Container2 />
        <Container5 />
        <Container14 />
        <Container17 />
        <Container39 />
      </div>
    </div>
  );
}

export default function ManagerLayout() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] items-start relative size-full" data-name="ManagerLayout">
      <Header />
      <ManagerReports />
    </div>
  );
}