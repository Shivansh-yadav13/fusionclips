import Image from "next/image";

export default function Footer() {
  return (
    <footer className='w-3/5 mx-auto static bottom-0'>
      <div className='flex flex-col items-center w-full py-5'>
          <Image src="/fclogo.png" width={40} height={40} alt="fusionclipslogo" />
          <p className="text-center font-semibold">Make Next Gen Clips with the Power of AI 🤖</p>
      </div>
    </footer>
  );
}
