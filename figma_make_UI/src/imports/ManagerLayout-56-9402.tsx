import svgPaths from "./svg-h4s6oub8ka";

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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Menu Management</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] whitespace-nowrap">Manage menu items and categories</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[51px] relative shrink-0 w-[226.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6b35] h-[48px] relative rounded-[10px] shrink-0 w-[142.4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[85px] not-italic text-[16px] text-center text-white top-[9.8px] whitespace-nowrap">Add Dish</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[51px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#ff6b35] h-[40px] left-0 rounded-[10px] top-0 w-[50.4px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[25px] not-italic text-[16px] text-center text-white top-[5.8px] whitespace-nowrap">All</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[40px] left-[58.4px] rounded-[10px] top-0 w-[108.8px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[54.5px] not-italic text-[#2d2d2d] text-[16px] text-center top-[5.8px] whitespace-nowrap">Appetizers</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[40px] left-[175.2px] rounded-[10px] top-0 w-[75.2px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[38px] not-italic text-[#2d2d2d] text-[16px] text-center top-[5.8px] whitespace-nowrap">Mains</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[40px] left-[258.4px] rounded-[10px] top-0 w-[94.4px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[47.5px] not-italic text-[#2d2d2d] text-[16px] text-center top-[5.8px] whitespace-nowrap">Desserts</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[40px] left-[360.8px] rounded-[10px] top-0 w-[78.4px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[39.5px] not-italic text-[#2d2d2d] text-[16px] text-center top-[5.8px] whitespace-nowrap">Drinks</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[72px] relative rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-0 p-[16px] top-0 w-[249.325px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Name</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[249.33px] p-[16px] top-0 w-[223.225px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Category</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[472.55px] p-[16px] top-0 w-[118.863px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Price</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[591.41px] p-[16px] top-0 w-[269.613px]" data-name="Header Cell">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Status</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[52.4px] items-start left-[861.03px] p-[16px] top-0 w-[202.975px]" data-name="Header Cell">
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
    <div className="absolute h-[68.8px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Caesar Salad</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[91.2px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Appetizers</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[68.8px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[68.8px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$14</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c116900} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] text-center whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[100px]" data-name="Button">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[68.8px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[68.8px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container7 />
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
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Lobster Bisque</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[91.2px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Appetizers</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[68.8px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[68.8px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$18</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c116900} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] text-center whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[100px]" data-name="Button">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[68.8px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button10 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[68.8px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[68.8px] w-[1064px]" data-name="Table Row">
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Truffle Pasta</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[61.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Mains</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[68.8px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[68.8px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$28</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c116900} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] text-center whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[100px]" data-name="Button">
      <Icon8 />
      <Text6 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[68.8px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button13 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon10 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button14 />
      <Button15 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[68.8px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[137.6px] w-[1064px]" data-name="Table Row">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Grilled Salmon</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[61.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Mains</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[68.8px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[68.8px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$35</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pa74e200} id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717171] text-[14px] text-center whitespace-nowrap">Unavailable</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[116.8px]" data-name="Button">
      <Icon11 />
      <Text8 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[68.8px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button16 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
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
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button17 />
      <Button18 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[68.8px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[206.4px] w-[1064px]" data-name="Table Row">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Wagyu Steak</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[61.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Mains</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[68.8px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[68.8px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$65</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c116900} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] text-center whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[100px]" data-name="Button">
      <Icon14 />
      <Text10 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[68.8px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button19 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button20 />
      <Button21 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[68.8px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[275.2px] w-[1064px]" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[68.8px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Chocolate Lava</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[77.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Desserts</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[68.8px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[68.8px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$12</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c116900} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] text-center whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[100px]" data-name="Button">
      <Icon17 />
      <Text12 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[68.8px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button22 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button23 />
      <Button24 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[68.8px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[344px] w-[1064px]" data-name="Table Row">
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
    <div className="absolute h-[68.4px] left-0 top-0 w-[249.325px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#2d2d2d] text-[16px] top-[20.2px] whitespace-nowrap">Tiramisu</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#fff5f2] content-stretch flex h-[28px] items-start left-[16px] px-[12px] py-[4px] rounded-[26843500px] top-[21.6px] w-[77.6px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap">Desserts</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[68.4px] left-[249.33px] top-0 w-[223.225px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[68.4px] left-[472.55px] top-0 w-[118.863px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#ff6b35] text-[16px] top-[20.2px] whitespace-nowrap">$10</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p24b33000} id="Vector" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c116900} id="Vector_2" stroke="var(--stroke-0, #4CAF50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4caf50] text-[14px] text-center whitespace-nowrap">Available</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[18.4px] w-[100px]" data-name="Button">
      <Icon20 />
      <Text14 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[68.4px] left-[591.41px] top-0 w-[269.613px]" data-name="Table Cell">
      <Button25 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p178c7700} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3336 13.3336">
            <path d={svgPaths.p3179a980} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
            <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
            <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #D4183D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[16px] top-[16.4px] w-[170.975px]" data-name="Container">
      <Button26 />
      <Button27 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[68.4px] left-[861.03px] top-0 w-[202.975px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute h-[68.4px] left-0 top-[412.8px] w-[1064px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[481.2px] left-0 top-[52.4px] w-[1064px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[533.6px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[533.6px] items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Total Items</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">7</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white col-1 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Available</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#4caf50] text-[24px] top-[-2.8px] whitespace-nowrap">6</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white col-2 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Unavailable</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#717171] text-[24px] top-[-2.8px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white col-3 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#717171] text-[14px]">Categories</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#2d2d2d] text-[24px] top-[-2.8px] whitespace-nowrap">4</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white col-4 h-[103.988px] justify-self-stretch relative rounded-[14px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[24px] px-[24px] relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[103.988px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function ManagerMenu() {
  return (
    <div className="h-[880.588px] relative shrink-0 w-[1112px]" data-name="ManagerMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative size-full">
        <Container2 />
        <Container4 />
        <Container6 />
        <Container14 />
      </div>
    </div>
  );
}

export default function ManagerLayout() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[58.4px] items-start relative size-full" data-name="ManagerLayout">
      <Header />
      <ManagerMenu />
    </div>
  );
}