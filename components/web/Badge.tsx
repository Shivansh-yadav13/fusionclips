export default function Badge({ text, color } : { text: string, color: string }) {
  return (
    <span className={`inline-flex my-10 items-center rounded-md bg-${color}-800/25 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-700/10`}>{text}</span>
  );
}
