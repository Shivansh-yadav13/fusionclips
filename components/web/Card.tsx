import Image from "next/image";

export default function Card({ title, emo, desc }: { title: string, emo: string, desc: string }) {
  return (
    <div className='w-fit flex sm:my-10'>
      <div className="flex justify-start gap-2">
        <h1 className="text-4xl">{emo}</h1>
      </div>
      <div className="">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-light font-semibold">{desc}</p>
      </div>
    </div>
  );
}
