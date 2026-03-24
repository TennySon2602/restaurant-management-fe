import svgPaths from "./svg-zgn45bc2o4";

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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Inventory Management</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Track ingredient stock levels</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[51px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
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

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[982.4px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Low Stock Alert</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[982.4px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">3 items need restocking</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[28px] items-start left-0 px-[12px] py-[4px] rounded-[26843500px] top-0 w-[72px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Salmon</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[28px] items-start left-[80px] px-[12px] py-[4px] rounded-[26843500px] top-0 w-[84px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Truffle Oil</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[28px] items-start left-[172px] px-[12px] py-[4px] rounded-[26843500px] top-0 w-[84.8px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Parmesan</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[28px] left-0 top-[64px] w-[982.4px]" data-name="Container">
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[92px] left-[32px] top-0 w-[982.4px]" data-name="Container">
      <Heading2 />
      <Paragraph2 />
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,193,7,0.1)] h-[141.6px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc107] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Total Items</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">8</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white col-1 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Low Stock</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#ffc107] text-[24px] top-[-2.8px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white col-2 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Out of Stock</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#f44336] text-[24px] top-[-2.8px] whitespace-nowrap">0</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white col-3 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Good Stock</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#4caf50] text-[24px] top-[-2.8px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white col-4 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[103.988px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-0 p-[16px] top-0 w-[162.375px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Ingredient</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[162.38px] p-[16px] top-0 w-[253.225px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Category</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[415.6px] p-[16px] top-0 w-[177.137px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Current Stock</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[592.74px] p-[16px] top-0 w-[141.938px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Min Stock</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[734.67px] p-[16px] top-0 w-[170.325px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Status</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[905px] p-[16px] top-0 w-[159px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px] text-right">Actions</p>
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
      <HeaderCell5 />
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

function TableCell() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Salmon</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[77.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Seafood</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">3 kg</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">5 kg</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[rgba(255,193,7,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[88px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ffc107] text-[14px] whitespace-nowrap">Low Stock</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-0 w-[1064px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Wagyu Beef</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[56px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Meat</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">8 kg</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">3 kg</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[rgba(76,175,80,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[60px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">Good</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[68.8px] w-[1064px]" data-name="Table Row">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Truffle Oil</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[48px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Oils</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">0.5 L</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">1 L</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[rgba(255,193,7,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[88px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ffc107] text-[14px] whitespace-nowrap">Low Stock</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[137.6px] w-[1064px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Parmesan</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[56.8px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Dairy</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">2 kg</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">4 kg</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[rgba(255,193,7,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[88px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#ffc107] text-[14px] whitespace-nowrap">Low Stock</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[206.4px] w-[1064px]" data-name="Table Row">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Pasta</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[92.8px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Dry Goods</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">15 kg</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">10 kg</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[rgba(76,175,80,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[60px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">Good</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[275.2px] w-[1064px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Lobster</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[77.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Seafood</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text14 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">6 kg</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">3 kg</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[rgba(76,175,80,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[60px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">Good</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[344px] w-[1064px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Chocolate</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#fff5f2] h-[28px] left-[16px] rounded-[26843500px] top-[21.6px] w-[146.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#2d2d2d] text-[14px] top-[3px] whitespace-nowrap">Dessert Ingredients</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[68.8px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[68.8px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">12 kg</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[68.8px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">5 kg</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[rgba(76,175,80,0.1)] h-[28px] left-[16px] rounded-[26843500px] top-[21.6px] w-[60px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#4caf50] text-[14px] top-[3px] whitespace-nowrap">Good</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[68.8px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text17 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[68.8px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[412.8px] w-[1064px]" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[68.4px] left-0 top-0 w-[162.375px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Cream</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[56.8px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Dairy</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[68.4px] left-[162.38px] top-0 w-[253.225px]" data-name="Table Cell">
      <Text18 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[68.4px] left-[415.6px] top-0 w-[177.137px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">8 L</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[68.4px] left-[592.74px] top-0 w-[141.938px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#717171] text-[16px] top-[20.2px] whitespace-nowrap">5 L</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[rgba(76,175,80,0.1)] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[60px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] whitespace-nowrap">Good</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[68.4px] left-[734.67px] top-0 w-[170.325px]" data-name="Table Cell">
      <Text19 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[127px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[68.4px] left-[905px] top-0 w-[159px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute h-[68.4px] left-0 top-[481.6px] w-[1064px]" data-name="Table Row">
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[550px] left-0 top-[52.4px] w-[1064px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[602.4px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[602.4px] items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Add New Ingredient</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">Add items to inventory</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[44px] relative shrink-0 w-[155.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b851600} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 9V13" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#fff5f2] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] whitespace-nowrap">Restock Low Items</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">Create purchase order</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[44px] relative shrink-0 w-[147.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[96px] relative shrink-0 w-full" data-name="Container">
      <Button17 />
      <Button18 />
    </div>
  );
}

function ManagerInventory() {
  return (
    <div className="h-[1138.988px] relative shrink-0 w-[1112px]" data-name="ManagerInventory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative size-full">
        <Container2 />
        <Container3 />
        <Container7 />
        <Container12 />
        <Container21 />
      </div>
    </div>
  );
}

export default function ManagerLayout() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] items-start relative size-full" data-name="ManagerLayout">
      <Header />
      <ManagerInventory />
    </div>
  );
}