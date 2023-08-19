export default function CTAButton({ text } : { text: string }) {
  return (
    <button className="bg-black text-white text-lg hover:bg-prime_dark hover:scale-110 transition-all font-bold py-2 my-5 px-6 mx-auto text-center">
      {text}
      </button>
  );
}
