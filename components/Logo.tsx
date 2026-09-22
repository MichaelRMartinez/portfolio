import { RiGame2Fill } from "@remixicon/react"
import Link from "next/link"

export default function Logo() {
  return (<>
    <div>
      <Link href="/" className="flex items-center gap-2">
        <span className="bg-teal-500 text-white size-10 flex items-center justify-center rounded-2xl shadow-util">
          <RiGame2Fill className="size-8" />
        </span>
        <span className="text-xl font-bold tracking-tight">Michael Martinez</span>
      </Link>
    </div>
  </>)
}
