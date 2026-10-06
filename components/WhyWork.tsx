import Image from "next/image";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { benefits } from "@/data/data";

export default function WhyWork() {
  return (<>
    <section className="py-20">
      <div className="container grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:items-center">

        {/* IMAGE */}
        <div className="relative mx-auto p-5 order-1 lg:order-first">
          <div className="max-w-[360px] w-full shadow-img mx-auto rounded-t-full bg-teal-200 flex items-center justify-center overflow-hidden pt-9">
            <Image
              src="/images/whywork-img.png"
              alt="Michael Martinez"
              height={2640}
              width={1980}
            />
          </div>

          {/* DECORATIONS */}
          <Image
            src="/images/star-icon.png"
            alt=""
            height={64}
            width={64}
            className="absolute top-20 right-0"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="section-title mb-2">Why Work Together?</h2>
          <p className="text">I have over 10 years of experience working in the web field across different roles.</p>

          {/* LIST */}
          <ul className="mt-8 space-y-4">
            {benefits.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="text-teal-500 shrink-0">
                  <RiCheckboxCircleFill />
                </span>
                <p className="text font-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>)
}
