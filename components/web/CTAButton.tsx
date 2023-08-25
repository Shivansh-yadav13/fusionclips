export default function CTAButton({ text } : { text: string }) {
  return (
    <button className="bg-black text-white xl:text-lg text-xs hover:bg-prime_dark hover:scale-110 transition-all font-bold py-4 my-5 xl:px-6 px-2 mx-auto text-center">
      {text}
      </button>
  );
}
