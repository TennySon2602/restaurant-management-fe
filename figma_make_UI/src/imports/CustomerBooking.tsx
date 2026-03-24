import svgPaths from "./svg-5dme8uhi8q";

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-[0.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p317fdd80} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p31c78b80} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3625bb80} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2ca18b80} id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <Icon />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[26px] not-italic text-[#99a1af] text-[10px] top-[-1px] tracking-[1px] uppercase whitespace-nowrap">Guest Count</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[14px] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[28px] left-[23.8px] not-italic text-[#2d2d2d] text-[20px] text-center top-[8px] whitespace-nowrap">−</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[36px] left-[135.8px] not-italic text-[#2d2d2d] text-[30px] text-center top-[-2.4px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6b35] relative rounded-[14px] shadow-[0px_10px_15px_0px_#ffedd4,0px_4px_6px_0px_#ffedd4] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[28px] left-[23.8px] not-italic text-[20px] text-center text-white top-[8px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Text />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[79px] items-start left-0 top-0 w-[400px]" data-name="Container">
      <Label />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[4px] size-[12px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <Icon1 />
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[15px] left-[24px] not-italic text-[#99a1af] text-[10px] top-[-1px] tracking-[1px] uppercase whitespace-nowrap">Date</p>
    </div>
  );
}

function DatePicker() {
  return <div className="bg-[#f9fafb] h-[44px] rounded-[14px] shrink-0 w-full" data-name="Date Picker" />;
}

function Container5() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label1 />
      <DatePicker />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[4px] size-[12px] top-[1.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_56_4592)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_56_4592">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <Icon2 />
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[15px] left-[24px] not-italic text-[#99a1af] text-[10px] top-[-1px] tracking-[1px] uppercase whitespace-nowrap">Time</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Option4() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Option5() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Option6() {
  return <div className="absolute left-[-564px] size-0 top-[407.6px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-[#f9fafb] h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label2 />
      <Dropdown />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[91.8px] left-0 pt-[24.8px] top-[103px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[194.8px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[258.8px] relative rounded-[32px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[185.6px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[24px] not-italic text-[#2d2d2d] text-[12px] top-0 tracking-[1.2px] uppercase whitespace-nowrap">Tap to Select Tables</p>
      </div>
    </div>
  );
}

function Container10() {
  return <div className="bg-[#e5e7eb] rounded-[26843500px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[26843500px] shrink-0 size-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Container12() {
  return <div className="bg-[#ff6b35] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[26843500px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[8px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container10 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container9 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[12px] left-0 not-italic text-[#d1d5dc] text-[8px] top-[-0.2px] tracking-[0.8px] uppercase whitespace-nowrap">Main Dining</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#2d2d2d] text-[10px] text-center whitespace-nowrap">C1</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[12px] opacity-60 relative shrink-0 w-[9.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-[5.5px] not-italic text-[#2d2d2d] text-[8px] text-center top-[-0.2px] whitespace-nowrap">4P</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 pb-[51.562px] pt-[51.563px] px-[1.6px] rounded-[20px] size-[130.125px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#2d2d2d] text-[10px] text-center whitespace-nowrap">C2</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[12px] opacity-60 relative shrink-0 w-[9.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-[5.5px] not-italic text-[#2d2d2d] text-[8px] text-center top-[-0.2px] whitespace-nowrap">6P</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.063px] items-center justify-center left-[142.13px] pb-[19.037px] pt-[19.025px] px-[1.6px] rounded-[16px] top-0 w-[130.137px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#2d2d2d] text-[10px] text-center whitespace-nowrap">C3</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[12px] opacity-60 relative shrink-0 w-[9.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-[5.5px] not-italic text-[#2d2d2d] text-[8px] text-center top-[-0.2px] whitespace-nowrap">4P</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[284.26px] pb-[51.575px] pt-[51.563px] px-[1.6px] rounded-[20px] size-[130.137px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#d1d5dc] text-[10px] text-center whitespace-nowrap">C4</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[12px] opacity-60 relative shrink-0 w-[9.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-[5.5px] not-italic text-[#d1d5dc] text-[8px] text-center top-[-0.2px] whitespace-nowrap">2P</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-center justify-center left-0 opacity-50 py-[51.563px] rounded-[20px] size-[130.125px] top-[142.14px]" data-name="Button">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#2d2d2d] text-[10px] text-center whitespace-nowrap">C5</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[12px] opacity-60 relative shrink-0 w-[9.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-[5.5px] not-italic text-[#2d2d2d] text-[8px] text-center top-[-0.2px] whitespace-nowrap">8P</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.063px] items-center justify-center left-[142.13px] pb-[19.037px] pt-[19.025px] px-[1.6px] rounded-[16px] top-[142.14px] w-[130.137px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[272.263px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[296.263px] items-start left-0 top-[150.6px] w-[414.4px]" data-name="Container">
      <Paragraph />
      <Container15 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[12px] left-0 not-italic text-[#b9f8cf] text-[8px] top-[-0.2px] tracking-[0.8px] uppercase whitespace-nowrap">Garden Patio</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[9.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[5.5px] not-italic text-[#2d2d2d] text-[9px] text-center top-[-0.2px] whitespace-nowrap">P1</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[123.2px] px-[1.6px] py-[17.25px] rounded-[26843500px] size-[48px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[11.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[6px] not-italic text-[#2d2d2d] text-[9px] text-center top-[-0.2px] whitespace-nowrap">P2</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[183.2px] px-[1.6px] py-[17.25px] rounded-[14px] size-[48px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[11.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[6px] not-italic text-[#2d2d2d] text-[9px] text-center top-[-0.2px] whitespace-nowrap">P3</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[243.2px] px-[1.6px] py-[17.25px] rounded-[26843500px] size-[48px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Text13 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(240,253,244,0.2)] content-stretch flex flex-col gap-[12px] h-[105.6px] items-start left-[-24px] pb-[0.8px] pt-[16.8px] px-[24px] rounded-[24px] top-[478.86px] w-[462.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0fdf4] border-b-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none rounded-[24px]" />
      <Paragraph1 />
      <Container17 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[12px] left-0 top-0 w-[414.4px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[12px] left-0 not-italic text-[#d1d5dc] text-[8px] top-[-0.2px] tracking-[0.8px] uppercase whitespace-nowrap">Window Side</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[13.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[7.5px] not-italic text-[#2d2d2d] text-[9px] text-center top-[-0.2px] whitespace-nowrap">W1</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[10.5px] opacity-60 relative shrink-0 w-[8.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[10.5px] not-italic relative shrink-0 text-[#2d2d2d] text-[7px] text-center whitespace-nowrap">2P</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 px-[1.6px] py-[35.3px] rounded-[26843500px] size-[94.6px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[8px] not-italic text-[#2d2d2d] text-[9px] text-center top-[-0.2px] whitespace-nowrap">W2</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[10.5px] opacity-60 relative shrink-0 w-[8.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[10.5px] not-italic relative shrink-0 text-[#2d2d2d] text-[7px] text-center whitespace-nowrap">2P</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[106.6px] px-[1.6px] py-[35.3px] rounded-[26843500px] size-[94.6px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[8px] not-italic text-[#d1d5dc] text-[9px] text-center top-[-0.2px] whitespace-nowrap">W3</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[10.5px] opacity-60 relative shrink-0 w-[8.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[10.5px] not-italic relative shrink-0 text-[#d1d5dc] text-[7px] text-center whitespace-nowrap">4P</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-center justify-center left-[213.2px] opacity-50 py-[35.3px] rounded-[14px] size-[94.6px] top-0" data-name="Button">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-[8px] not-italic text-[#2d2d2d] text-[9px] text-center top-[-0.2px] whitespace-nowrap">W4</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[10.5px] opacity-60 relative shrink-0 w-[8.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[10.5px] not-italic relative shrink-0 text-[#2d2d2d] text-[7px] text-center whitespace-nowrap">6P</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[319.8px] px-[1.6px] py-[35.3px] rounded-[14px] size-[94.6px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[94.6px] left-0 top-[24px] w-[414.4px]" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#dbeafe] h-[118.6px] left-[-24px] rounded-br-[26843500px] rounded-tr-[26843500px] top-0 w-[4px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="absolute h-[118.6px] left-0 top-0 w-[414.4px]" data-name="Container">
      <Paragraph2 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[584.463px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[674.063px] relative rounded-[40px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
          <Container8 />
          <Container13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex h-[68px] items-start py-[24px] relative rounded-[32px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[14px] text-center tracking-[1.4px] uppercase">Confirm Selection →</p>
    </div>
  );
}

function CustomerReservations() {
  return (
    <div className="bg-[#f5f5f5] h-[1265.662px] relative shrink-0 w-[512px]" data-name="CustomerReservations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[96.8px] px-[24px] relative size-full">
        <Container />
        <Container7 />
        <Button14 />
      </div>
    </div>
  );
}

function CustomerLayout() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[658.4px] items-start left-0 pl-[300px] pt-[60.8px] top-0 w-[1112px]" data-name="CustomerLayout">
      <CustomerReservations />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #717171)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CustomerLayout2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[32.8px]" data-name="CustomerLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717171] text-[12px] whitespace-nowrap">Home</p>
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
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CustomerLayout4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[66.4px]" data-name="CustomerLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ff6b35] text-[12px] whitespace-nowrap">Reservations</p>
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

function Container21() {
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
    <div className="absolute bg-white content-stretch flex flex-col h-[68.787px] items-start left-0 pt-[0.8px] px-[300px] top-[1337.61px] w-[1112px]" data-name="CustomerLayout">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container21 />
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

function Container23() {
  return (
    <div className="bg-[#ff6b35] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[#2d2d2d] text-[16px] top-[-2.2px] tracking-[-0.4px] whitespace-nowrap">Gastros</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[32px] relative shrink-0 w-[98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container23 />
        <Text22 />
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

function Button15() {
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
    <div className="absolute bg-white content-stretch flex h-[60.8px] items-center justify-between left-px pb-[0.8px] px-[16px] top-0 w-[1112px]" data-name="CustomerLayout">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Button15 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[151.2px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[28px] left-0 not-italic text-[#2d2d2d] text-[18px] top-[-1.4px] whitespace-nowrap">Book Your Table</p>
      </div>
    </div>
  );
}

function CustomerReservations1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[72.8px] items-center justify-between left-[301px] pb-[0.8px] pl-[8px] pr-[184.4px] top-[61px] w-[512px]" data-name="CustomerReservations">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Button16 />
      <Heading />
    </div>
  );
}

export default function CustomerBooking() {
  return (
    <div className="bg-white relative size-full" data-name="Customer/booking">
      <CustomerLayout />
      <CustomerLayout1 />
      <CustomerLayout6 />
      <CustomerReservations1 />
    </div>
  );
}