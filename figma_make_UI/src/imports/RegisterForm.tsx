import svgPaths from "./svg-uf8igh15pz";
import imgImageRestaurantInterior from "figma:asset/5859f3e1d12b8c2472d9b29ac83f31d4b981099f.png";

function ImageRestaurantInterior() {
  return (
    <div className="absolute h-[840.4px] left-[-27.8px] opacity-60 top-[-38.19px] w-[611.6px]" data-name="Image (Restaurant Interior)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRestaurantInterior} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#2d2d2d] h-[763.763px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[556px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p36c5af80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18 17V9" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 17V5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 17V14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#ff6b35] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[113.6px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[36px] left-0 not-italic text-[30px] text-white top-[-2.4px] whitespace-nowrap">Gastros</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 top-0 w-[460px]" data-name="Container">
      <Container4 />
      <Heading1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[180px] leading-[60px] left-0 not-italic text-[48px] top-[72px] w-[460px]" data-name="Heading 3">
      <p className="absolute left-0 text-white top-[-3.4px] w-[313px]">{`Manage your flavors `}</p>
      <p className="absolute left-0 text-[#ff6b35] top-[116.6px] whitespace-nowrap">anywhere you are.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[56px] left-0 top-[268px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.7)] top-[-1.4px] w-[361px]">The all-in-one platform for rapid restaurant operations, bookings, and analytics.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[324px] left-[48px] top-[391.76px] w-[460px]" data-name="Container">
      <Container3 />
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#2d2d2d] col-1 h-[763.763px] justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Container">
      <ImageRestaurantInterior />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[15.988px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">Back to Login</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[134.8px]" data-name="Button">
      <Icon1 />
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-[44px] w-[448px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[36px] left-0 not-italic text-[#2d2d2d] text-[30px] top-[-2.4px] whitespace-nowrap">Create Account</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[88px] w-[448px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[15px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] tracking-[1px] uppercase">Join our restaurant network</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[99px] size-[20px] top-[13.6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #FF6B35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fff7ed] col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff6b35] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[108.6px] not-italic text-[#ff6b35] text-[12px] text-center top-[41.6px] tracking-[1.2px] uppercase whitespace-nowrap">Customer</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[99px] size-[20px] top-[13.6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[109.3px] not-italic text-[#99a1af] text-[12px] text-center top-[41.6px] tracking-[1.2px] uppercase whitespace-nowrap">Staff</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[71.188px] left-0 top-[135px] w-[448px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[13.6px] items-start left-0 px-[4px] top-[8px] w-[77.8px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Full Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[59.2px] left-0 rounded-[20px] top-[24px] w-[448px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">John Doe</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[83.2px] left-0 top-0 w-[448px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[13.6px] items-start left-0 px-[4px] top-[8px] w-[114.8px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[15px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[1px] uppercase">Email or Phone</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white h-[59.2px] left-0 rounded-[20px] top-[24px] w-[448px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">you@email.com or +1...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[83.2px] left-0 top-[99.2px] w-[448px]" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[13.6px] items-start left-0 px-[4px] top-[8px] w-[76px]" data-name="Label">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-white h-[59.2px] left-0 rounded-[20px] top-[24px] w-[448px]" data-name="Password Input">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">••••••••</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[83.2px] left-0 top-[198.4px] w-[448px]" data-name="Container">
      <Label2 />
      <PasswordInput />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#ff6b35] content-stretch flex h-[52px] items-start left-0 py-[16px] rounded-[16px] shadow-[0px_20px_25px_0px_#ffedd4,0px_8px_10px_0px_#ffedd4] top-[313.6px] w-[448px]" data-name="Button">
      <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-center text-white tracking-[1.4px] uppercase">Register as customer</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[365.6px] left-0 top-[238.19px] w-[448px]" data-name="Form">
      <Container8 />
      <Container9 />
      <Container10 />
      <Button3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[31.975px] left-0 not-italic text-[12px] text-center top-[635.79px] w-[448px] whitespace-nowrap" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute leading-[16px] left-[223.8px] text-[#99a1af] top-0">{`By creating an account, you agree to our `}</p>
      <p className="-translate-x-1/2 absolute leading-[0] left-[224.5px] text-[#2d2d2d] top-[15.99px]">
        <span className="leading-[16px]">Terms of Service</span>
        <span className="leading-[16px] text-[#99a1af]">{` and `}</span>
        <span className="leading-[16px]">Privacy Policy</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[667.763px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
        <Heading />
        <Paragraph1 />
        <Container7 />
        <Form />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f5f5f5] col-2 h-[763.763px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[54px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function AuthHome() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[763.763px] relative shrink-0 w-full" data-name="AuthHome">
      <Container />
      <Container5 />
    </div>
  );
}

export default function RegisterForm() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="register form">
      <AuthHome />
    </div>
  );
}