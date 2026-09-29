import Link from "next/link"

interface ButtonProps {
  label: string;
  url: string;
  primary?: boolean;
}


export default function Button({ label, url, primary }: ButtonProps) {
  return (
    <Link className={`shadow-util max-w-[240px] px-6 py-2.5 rounded-full font-medium transition-all ${
      primary
        ? "bg-teal-200 hover:bg-teal-400 focus:bg-teal-400"
        : "hover:bg-neutral-100 focus:bg-neutral-100"
    }`}
    href={url}>
      {label}
    </Link>
  )
}
