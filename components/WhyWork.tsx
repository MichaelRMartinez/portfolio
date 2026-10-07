import Image from "next/image";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { benefits } from "@/data/data";
import Button from "./Button";

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
          <div className="mt-10 ml-9">
            <Button label={'Get in Touch'} url={'https://www.linkedin.com/in/mrmartinez1/'} primary />
          </div>
        </div>
      </div>
    </section>
  </>)
}
