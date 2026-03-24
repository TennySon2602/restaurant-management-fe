import svgPaths from "./svg-ft07x0xdat";

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
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[36px] left-0 not-italic text-[#2d2d2d] text-[30px] top-[-2.4px] whitespace-nowrap">Payment History</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">{`Manage & audit past transactions`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[55.987px] relative shrink-0 w-[273.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[103px] items-center justify-between left-0 pr-[427.725px] top-0 w-[701.325px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Total Sales (Today)</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[36px] left-0 not-italic text-[#ff6b35] text-[30px] top-[-2.4px] whitespace-nowrap">$602.10</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[55px] items-start left-[24px] top-[24px] w-[130.2px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 22">
            <path d="M1 1V21" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <path d={svgPaths.p30498f48} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start left-[266.67px] pt-[12px] px-[12px] rounded-[16px] size-[48px] top-[27.5px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[rgba(255,107,53,0.2)] left-[242.67px] rounded-bl-[64px] size-[96px] top-0" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute bg-[#2d2d2d] h-[103px] left-[725.33px] overflow-clip rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[338.675px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[103px] left-[24px] top-[24px] w-[1064px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6b35] h-[36px] relative rounded-[14px] shadow-[0px_10px_15px_0px_#ffedd4,0px_4px_6px_0px_#ffedd4] shrink-0 w-[73.2px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[37px] not-italic text-[12px] text-center text-white top-[10px] tracking-[1.2px] uppercase whitespace-nowrap">all</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[36px] relative rounded-[14px] shrink-0 w-[85.6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[43.5px] not-italic text-[#99a1af] text-[12px] text-center top-[10px] tracking-[1.2px] uppercase whitespace-nowrap">cash</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative rounded-[14px] shrink-0 w-[85.6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[43.5px] not-italic text-[#99a1af] text-[12px] text-center top-[10px] tracking-[1.2px] uppercase whitespace-nowrap">card</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[36px] relative rounded-[14px] shrink-0 w-[100.8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[50.5px] not-italic text-[#99a1af] text-[12px] text-center top-[10px] tracking-[1.2px] uppercase whitespace-nowrap">mobile</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[53.6px] items-start left-[539.6px] pb-[0.8px] pl-[8.8px] pr-[0.8px] pt-[8.8px] rounded-[16px] top-0 w-[386.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[16.8px]" data-name="Icon">
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

function Button5() {
  return (
    <div className="absolute bg-[#2d2d2d] h-[53.6px] left-[942.4px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[121.6px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[75px] not-italic text-[14px] text-center text-white top-[15.8px] whitespace-nowrap">Export</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[53.6px] left-0 rounded-[16px] top-0 w-[523.6px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">Search by table or receipt ID...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16.8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[53.6px] left-0 top-0 w-[523.6px]" data-name="Container">
      <TextInput />
      <Icon3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[53.6px] left-[24px] top-[159px] w-[1064px]" data-name="Container">
      <Container10 />
      <Button5 />
      <Container11 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-0 pb-[24.8px] pt-[24px] px-[24px] top-0 w-[246.6px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Receipt ID</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-[246.6px] pb-[24.8px] pt-[24px] px-[24px] top-0 w-[116.912px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Table</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-[363.51px] pb-[24.8px] pt-[24px] px-[24px] top-0 w-[144.55px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Amount</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-[508.06px] pb-[24.8px] pt-[24px] px-[24px] top-0 w-[155.188px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Method</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-[663.25px] pb-[24.8px] pt-[24px] px-[24px] top-0 w-[134.988px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Time</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-[798.24px] pb-[24.8px] pt-[24px] px-[24px] top-0 w-[137.113px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Server</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute content-stretch flex h-[63.4px] items-start left-[935.35px] pb-[24.8px] pt-[24px] px-[24px] top-0 w-[127.05px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Action</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[63.4px] left-0 top-0 w-[1062.4px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[63.4px] left-0 top-0 w-[1062.4px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">R-T1-892134</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[24.4px] w-[198.6px]" data-name="Container">
      <Container14 />
      <Text1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-0 top-0 w-[246.6px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex items-center justify-center left-[24px] rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24.4px]" data-name="Container">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">T1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[246.6px] top-0 w-[116.912px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[363.51px] top-0 w-[144.55px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-[24px] not-italic text-[#ff6b35] text-[16px] top-[30.2px] whitespace-nowrap">$86.00</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[32.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] uppercase whitespace-nowrap">card</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[24px] top-[36.4px] w-[107.188px]" data-name="Container">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[508.06px] top-0 w-[155.188px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[663.25px] top-0 w-[134.988px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">12:45 PM</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[798.24px] top-0 w-[137.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">John D.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.8px] border-[rgba(0,0,0,0)] border-solid left-[24px] rounded-[14px] size-[37.6px] top-[25.6px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[935.35px] top-0 w-[127.05px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[88.8px] left-0 top-0 w-[1062.4px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">R-T4-892145</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[24.4px] w-[198.6px]" data-name="Container">
      <Container18 />
      <Text3 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-0 top-0 w-[246.6px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex items-center justify-center left-[24px] rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24.4px]" data-name="Container">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">T4</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[246.6px] top-0 w-[116.912px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[363.51px] top-0 w-[144.55px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-[24px] not-italic text-[#ff6b35] text-[16px] top-[30.2px] whitespace-nowrap">$124.50</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ef3000} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 8H4.00667M12 8H12.0067" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[31.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] uppercase whitespace-nowrap">cash</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[24px] top-[36.4px] w-[107.188px]" data-name="Container">
      <Icon8 />
      <Text4 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[508.06px] top-0 w-[155.188px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[663.25px] top-0 w-[134.988px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">1:15 PM</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[798.24px] top-0 w-[137.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">Sarah K.</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.8px] border-[rgba(0,0,0,0)] border-solid left-[24px] rounded-[14px] size-[37.6px] top-[25.6px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[935.35px] top-0 w-[127.05px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[88.8px] left-0 top-[88.8px] w-[1062.4px]" data-name="Table Row">
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">R-T6-892156</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[24.4px] w-[198.6px]" data-name="Container">
      <Container22 />
      <Text5 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-0 top-0 w-[246.6px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex items-center justify-center left-[24px] rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24.4px]" data-name="Container">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">T6</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[246.6px] top-0 w-[116.912px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[363.51px] top-0 w-[144.55px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-[24px] not-italic text-[#ff6b35] text-[16px] top-[30.2px] whitespace-nowrap">$35.20</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p15efa800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12H8.00667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[44.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] uppercase whitespace-nowrap">mobile</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[24px] top-[36.4px] w-[107.188px]" data-name="Container">
      <Icon11 />
      <Text6 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[508.06px] top-0 w-[155.188px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[663.25px] top-0 w-[134.988px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">1:30 PM</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[798.24px] top-0 w-[137.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">John D.</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.8px] border-[rgba(0,0,0,0)] border-solid left-[24px] rounded-[14px] size-[37.6px] top-[25.6px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[935.35px] top-0 w-[127.05px]" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[88.8px] left-0 top-[177.6px] w-[1062.4px]" data-name="Table Row">
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">R-T2-892167</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[24.4px] w-[198.6px]" data-name="Container">
      <Container26 />
      <Text7 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-0 top-0 w-[246.6px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex items-center justify-center left-[24px] rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24.4px]" data-name="Container">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">T2</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[246.6px] top-0 w-[116.912px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[363.51px] top-0 w-[144.55px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-[24px] not-italic text-[#ff6b35] text-[16px] top-[30.2px] whitespace-nowrap">$54.00</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[32.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] uppercase whitespace-nowrap">card</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[24px] top-[36.4px] w-[107.188px]" data-name="Container">
      <Icon14 />
      <Text8 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[508.06px] top-0 w-[155.188px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[663.25px] top-0 w-[134.988px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">2:05 PM</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[798.24px] top-0 w-[137.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">Mike R.</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.8px] border-[rgba(0,0,0,0)] border-solid left-[24px] rounded-[14px] size-[37.6px] top-[25.6px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[935.35px] top-0 w-[127.05px]" data-name="Table Cell">
      <Button9 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[88.8px] left-0 top-[266.4px] w-[1062.4px]" data-name="Table Row">
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">R-T9-892178</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[24.4px] w-[198.6px]" data-name="Container">
      <Container30 />
      <Text9 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-0 top-0 w-[246.6px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex items-center justify-center left-[24px] rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24.4px]" data-name="Container">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">T9</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[246.6px] top-0 w-[116.912px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[363.51px] top-0 w-[144.55px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-[24px] not-italic text-[#ff6b35] text-[16px] top-[30.2px] whitespace-nowrap">$210.00</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[32.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] uppercase whitespace-nowrap">card</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[24px] top-[36.4px] w-[107.188px]" data-name="Container">
      <Icon17 />
      <Text10 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[508.06px] top-0 w-[155.188px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[663.25px] top-0 w-[134.988px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">2:45 PM</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[798.24px] top-0 w-[137.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">Sarah K.</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.8px] border-[rgba(0,0,0,0)] border-solid left-[24px] rounded-[14px] size-[37.6px] top-[25.6px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[935.35px] top-0 w-[127.05px]" data-name="Table Cell">
      <Button10 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[88.8px] left-0 top-[355.2px] w-[1062.4px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">R-T3-892189</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[24.4px] w-[198.6px]" data-name="Container">
      <Container34 />
      <Text11 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-0 top-0 w-[246.6px]" data-name="Table Cell">
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex items-center justify-center left-[24px] rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24.4px]" data-name="Container">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">T3</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[246.6px] top-0 w-[116.912px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[363.51px] top-0 w-[144.55px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-[24px] not-italic text-[#ff6b35] text-[16px] top-[30.2px] whitespace-nowrap">$92.40</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ef3000} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 8H4.00667M12 8H12.0067" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[31.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] uppercase whitespace-nowrap">cash</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[24px] top-[36.4px] w-[107.188px]" data-name="Container">
      <Icon20 />
      <Text12 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[508.06px] top-0 w-[155.188px]" data-name="Table Cell">
      <Container36 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[663.25px] top-0 w-[134.988px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">3:10 PM</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[798.24px] top-0 w-[137.113px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[36.4px] uppercase whitespace-nowrap">John D.</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.8px] border-[rgba(0,0,0,0)] border-solid left-[24px] rounded-[14px] size-[37.6px] top-[25.6px]" data-name="Button">
      <Icon21 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute border-[#f9fafb] border-b-[0.8px] border-solid h-[88.8px] left-[935.35px] top-0 w-[127.05px]" data-name="Table Cell">
      <Button11 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[88.8px] left-0 top-[444px] w-[1062.4px]" data-name="Table Row">
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[532.8px] left-0 top-[63.4px] w-[1062.4px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[596.6px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white h-[598.2px] left-[24px] rounded-[40px] top-[236.6px] w-[1064px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function StaffPayments() {
  return (
    <div className="bg-[#f5f5f5] h-[858.8px] relative shrink-0 w-[1112px]" data-name="StaffPayments">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container9 />
        <Container12 />
      </div>
    </div>
  );
}

function StaffLayout() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] h-[658.4px] items-start left-0 top-0 w-[1112px]" data-name="StaffLayout">
      <Header />
      <StaffPayments />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p17c65ff0} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1aa35900} id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b6cafc0} id="Vector_3" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fc7e680} id="Vector_4" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function StaffLayout2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[42.4px]" data-name="StaffLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717171] text-[16px] top-[-2.2px] whitespace-nowrap">Tables</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] h-[57.6px] min-h-px min-w-px relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[1.6px] pl-[150.125px] pr-[150.138px] relative size-full">
          <Icon22 />
          <StaffLayout2 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p16dd5f0} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 8.33333H18.3333" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function StaffLayout3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.8px]" data-name="StaffLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#ff6b35] text-[16px] top-[-2.2px] whitespace-nowrap">Payments History</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[57.6px] min-h-px min-w-px relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ff6b35] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[1.6px] pl-[110.925px] pr-[110.938px] relative size-full">
          <Icon23 />
          <StaffLayout3 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_56_6520)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_56_6520">
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
          <Icon24 />
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

export default function StaffPaymentHistory() {
  return (
    <div className="bg-white relative size-full" data-name="Staff/PaymentHistory">
      <StaffLayout />
      <StaffLayout1 />
    </div>
  );
}