import svgPaths from "./svg-za8wowlsn8";

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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[206px]" data-name="Container">
      <Container5 />
      <Icon2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[84px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Revenue Today</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[31.988px] left-[24px] top-[108px] w-[206px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">$4850.00</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[24px] top-[147.99px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#4caf50] text-[12px]">+12% vs yesterday</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white col-1 h-[187.975px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container4 />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[206px]" data-name="Container">
      <Container8 />
      <Icon4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[84px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Customers Today</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[31.988px] left-[24px] top-[108px] w-[206px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">142</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[24px] top-[147.99px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#4caf50] text-[12px]">+8% vs yesterday</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white col-2 h-[187.975px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container7 />
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13b4cd00} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32939e80} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdc9c900} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p20de0972} id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] pr-[158px] top-[24px] w-[206px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[84px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Table Occupancy</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[31.988px] left-[24px] top-[108px] w-[206px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">78%</p>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#ff6b35] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[8px] items-start left-[24px] overflow-clip pr-[45.325px] rounded-[26843500px] top-[147.99px] w-[206px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white col-3 h-[187.975px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container10 />
      <Paragraph7 />
      <Paragraph8 />
      <Container12 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] pr-[158px] top-[24px] w-[206px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[84px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Active Reservations</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[31.988px] left-[24px] top-[108px] w-[206px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">18</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[24px] top-[147.99px] w-[206px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#717171] text-[12px]">{`For today & tonight`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white col-4 h-[187.975px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container15 />
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[187.975px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container6 />
      <Container9 />
      <Container14 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Revenue Trends</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%_1.06%_11.67%_13.77%]" data-name="Group">
      <div className="absolute inset-[-0.19%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 261">
          <g id="Group">
            <path d="M0 260.5H402" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 195.5H402" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 130.5H402" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 65.5H402" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 0.5H402" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.67%_1.06%_11.67%_13.77%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 260">
          <g id="Group">
            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M67.5 0V260" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M134.5 0V260" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M201.5 0V260" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M268.5 0V260" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M335.5 0V260" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M402.5 0V260" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.67%_1.06%_11.67%_13.77%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[88.33%_83.58%_5.16%_11.12%]" data-name="Group">
      <div className="absolute inset-[88.33%_86.23%_9.67%_13.77%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_83.58%_5.16%_11.12%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Mon</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[88.33%_69.81%_5.16%_25.74%]" data-name="Group">
      <div className="absolute inset-[88.33%_72.03%_9.67%_27.97%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_69.81%_5.16%_25.74%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Tue</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[88.33%_55.08%_5.16%_39.41%]" data-name="Group">
      <div className="absolute inset-[88.33%_57.84%_9.67%_42.16%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_55.08%_5.16%_39.41%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Wed</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[88.33%_41.31%_5.16%_54.03%]" data-name="Group">
      <div className="absolute inset-[88.33%_43.64%_9.67%_56.36%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_41.31%_5.16%_54.03%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Thu</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[88.33%_27.86%_5.16%_68.96%]" data-name="Group">
      <div className="absolute inset-[88.33%_29.45%_9.67%_70.55%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_27.86%_5.16%_68.96%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Fri</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[88.33%_13.24%_5.16%_82.73%]" data-name="Group">
      <div className="absolute inset-[88.33%_15.25%_9.67%_84.75%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_13.24%_5.16%_82.73%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Sat</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[88.33%_0.47%_5.16%_94.87%]" data-name="Group">
      <div className="absolute inset-[88.33%_1.06%_9.67%_98.94%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_0.47%_5.16%_94.87%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">Sun</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[88.33%_0.47%_5.16%_11.12%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[88.33%_0.47%_5.16%_11.12%]" data-name="Group">
      <div className="absolute inset-[88.33%_1.06%_11.67%_13.77%]" data-name="Vector">
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

function Group14() {
  return (
    <div className="absolute contents inset-[85.75%_86.23%_9.25%_10.38%]" data-name="Group">
      <div className="absolute inset-[88.33%_86.23%_11.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[85.75%_87.92%_9.25%_10.38%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[64.09%_86.23%_30.91%_6.14%]" data-name="Group">
      <div className="absolute inset-[66.67%_86.23%_33.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.09%_87.92%_30.91%_6.14%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">1500</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[42.42%_86.23%_52.58%_5.51%]" data-name="Group">
      <div className="absolute inset-[45%_86.23%_55%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.42%_87.92%_52.58%_5.51%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">3000</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[20.75%_86.23%_74.25%_5.72%]" data-name="Group">
      <div className="absolute inset-[23.33%_86.23%_76.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_87.92%_74.25%_5.72%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">4500</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_93.58%_5.72%]" data-name="Group">
      <div className="absolute inset-[1.67%_86.23%_98.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.42%_87.92%_93.58%_5.72%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">6000</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_9.25%_5.51%]" data-name="Group">
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_9.25%_5.51%]" data-name="Group">
      <div className="absolute inset-[1.67%_86.23%_11.67%_13.77%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 260">
            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <Group13 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[13.33%_0.21%_45%_12.92%]" data-name="Group">
      <div className="absolute inset-[-1.2%_-0.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 413 128">
          <g id="Group">
            <path d={svgPaths.pb490b00} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
            <g id="Group_2">
              <path d={svgPaths.p21195200} fill="var(--fill-0, #FF6B35)" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
              <path d={svgPaths.p1ed71480} fill="var(--fill-0, #FF6B35)" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
              <path d={svgPaths.p12159080} fill="var(--fill-0, #FF6B35)" id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
              <path d={svgPaths.p137a8b00} fill="var(--fill-0, #FF6B35)" id="Vector_5" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
              <path d={svgPaths.p34111600} fill="var(--fill-0, #FF6B35)" id="Vector_6" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
              <path d={svgPaths.p24816700} fill="var(--fill-0, #FF6B35)" id="Vector_7" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
              <path d={svgPaths.p25150900} fill="var(--fill-0, #FF6B35)" id="Vector_8" stroke="var(--stroke-0, #FF6B35)" strokeWidth="3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[472px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group12 />
      <Group19 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="LineChart">
      <Surface />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading1 />
        <LineChart />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Peak Hours</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[1.67%_1.06%_11.67%_13.77%]" data-name="Group">
      <div className="absolute inset-[-0.19%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 261">
          <g id="Group">
            <path d="M0 260.5H402" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 195.5H402" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 130.5H402" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 65.5H402" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 0.5H402" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[1.67%_1.06%_11.67%_13.77%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 260">
          <g id="Group">
            <path d="M29.2143 0V260" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M86.6429 0V260" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M144.071 0V260" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M201.5 0V260" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M258.929 0V260" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M316.357 0V260" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M373.786 0V260" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0.5 0V260" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M402.5 0V260" id="Vector_9" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[1.67%_1.06%_11.67%_13.77%]" data-name="Group">
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[88.33%_76.54%_5.16%_16.25%]" data-name="Group">
      <div className="absolute inset-[88.33%_80.15%_9.67%_19.85%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_76.54%_5.16%_16.25%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">11 AM</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[88.33%_64.27%_5.16%_28.31%]" data-name="Group">
      <div className="absolute inset-[88.33%_67.98%_9.67%_32.02%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_64.27%_5.16%_28.31%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">12 PM</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[88.33%_52.85%_5.16%_41.22%]" data-name="Group">
      <div className="absolute inset-[88.33%_55.81%_9.67%_44.19%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_52.85%_5.16%_41.22%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">1 PM</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[88.33%_40.47%_5.16%_53.18%]" data-name="Group">
      <div className="absolute inset-[88.33%_43.64%_9.67%_56.36%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_40.47%_5.16%_53.18%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">6 PM</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[88.33%_28.4%_5.16%_65.45%]" data-name="Group">
      <div className="absolute inset-[88.33%_31.48%_9.67%_68.52%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_28.4%_5.16%_65.45%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">7 PM</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[88.33%_16.13%_5.16%_77.51%]" data-name="Group">
      <div className="absolute inset-[88.33%_19.31%_9.67%_80.69%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_16.13%_5.16%_77.51%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">8 PM</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[88.33%_3.96%_5.16%_89.68%]" data-name="Group">
      <div className="absolute inset-[88.33%_7.14%_9.67%_92.86%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_3.96%_5.16%_89.68%] leading-[normal] not-italic text-[#717171] text-[12px] text-center whitespace-nowrap">9 PM</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[88.33%_3.96%_5.16%_16.25%]" data-name="Group">
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[88.33%_1.06%_5.16%_13.77%]" data-name="Group">
      <div className="absolute inset-[88.33%_1.06%_11.67%_13.77%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <path d="M0 0.5H402" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <Group24 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[85.75%_86.23%_9.25%_10.38%]" data-name="Group">
      <div className="absolute inset-[88.33%_86.23%_11.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[85.75%_87.92%_9.25%_10.38%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[64.09%_86.23%_30.91%_9.32%]" data-name="Group">
      <div className="absolute inset-[66.67%_86.23%_33.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.09%_87.92%_30.91%_9.32%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">15</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[42.42%_86.23%_52.58%_8.69%]" data-name="Group">
      <div className="absolute inset-[45%_86.23%_55%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[42.42%_87.92%_52.58%_8.69%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">30</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[20.75%_86.23%_74.25%_8.9%]" data-name="Group">
      <div className="absolute inset-[23.33%_86.23%_76.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_87.92%_74.25%_8.9%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">45</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_93.58%_8.9%]" data-name="Group">
      <div className="absolute inset-[1.67%_86.23%_98.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.42%_87.92%_93.58%_8.9%] leading-[normal] not-italic text-[#717171] text-[12px] text-right whitespace-nowrap">60</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_9.25%_8.69%]" data-name="Group">
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[1.42%_86.23%_9.25%_8.69%]" data-name="Group">
      <div className="absolute inset-[1.67%_86.23%_11.67%_13.77%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 260">
            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #717171)" />
          </svg>
        </div>
      </div>
      <Group33 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[66.67%_75.48%_11.67%_14.99%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 65">
        <g id="Group">
          <path d={svgPaths.p167cf300} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[42.11%_63.31%_11.67%_27.15%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 138.667">
        <g id="Group">
          <path d={svgPaths.p2b980400} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[23.33%_51.14%_11.67%_39.32%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 195">
        <g id="Group">
          <path d={svgPaths.p169fbf00} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[33.44%_38.98%_11.67%_51.49%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 164.667">
        <g id="Group">
          <path d={svgPaths.p36604500} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[13.22%_26.81%_11.67%_63.66%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 225.333">
        <g id="Group">
          <path d={svgPaths.p12e51880} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[19%_14.64%_11.67%_75.82%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 208">
        <g id="Group">
          <path d={svgPaths.p30655cc0} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[47.89%_2.48%_11.67%_87.99%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 121.333">
        <g id="Group">
          <path d={svgPaths.p26be8700} fill="var(--fill-0, #FF6B35)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[13.22%_2.48%_11.67%_14.99%]" data-name="Group">
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[13.22%_2.48%_11.67%_14.99%]" data-name="Group">
      <Group41 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[13.22%_2.48%_11.67%_14.99%]" data-name="Group">
      <Group40 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[472px]" data-name="Surface">
      <Group20 />
      <Group23 />
      <Group32 />
      <Group39 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="BarChart">
      <Surface1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading2 />
        <BarChart />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[391px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p377dab00} id="Vector" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[134.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Inventory Alerts</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Heading3 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Salmon</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ffc107] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[37.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Paragraph12 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Remaining: 3 kg</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f5f5f5] col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc107] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[16px] pt-[16px] relative size-full">
        <Container24 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[66.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Truffle Oil</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f44336] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[52.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Critical</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Text2 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Remaining: 0.5 L</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f5f5f5] col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc107] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[16px] pt-[16px] relative size-full">
        <Container26 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[66.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Parmesan</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#ffc107] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[37.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Text3 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Remaining: 2 kg</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f5f5f5] col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc107] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[16px] pt-[16px] relative size-full">
        <Container28 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container25 />
      <Container27 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[175px] relative rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function ManagerDashboard() {
  return (
    <div className="h-[849.975px] relative shrink-0 w-[1112px]" data-name="ManagerDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative size-full">
        <Container2 />
        <Container17 />
        <Container20 />
      </div>
    </div>
  );
}

export default function ManagerLayout() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] items-start relative size-full" data-name="ManagerLayout">
      <Header />
      <ManagerDashboard />
    </div>
  );
}