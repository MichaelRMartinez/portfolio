import { RiCodeSSlashLine } from "@remixicon/react"
import Link from "next/link"

export default function Logo() {
  return (<>
    <div>
      <Link href="/" className="flex items-center gap-2">
        <span className="bg-teal-200 hover:bg-teal-400 size-10 flex items-center justify-center rounded-2xl shadow-util transition-colors duration-300">
          <RiCodeSSlashLine className="size-8" />
        </span>
        <span className="text-xl font-bold tracking-tight">Michael Martinez</span>
      </Link>
    </div>
  </>)
}
