import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (<>
    <section className="pt-12 lg:pt-14 pb-8">
      <div className="container grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">          
        {/* CONTENT */}
        <div className="space-y-2.5 sm:text-center lg:text-left">
          <h1 className="text-4xl font-semibold leading-[1.1] md:text-3xl lg:text-5xl">
            Michael Martinez<br />
            <span className="text-3xl md:text-2xl lg:text-4xl">Front-End Developer &amp; Accessibility Specialist</span>
          </h1>
          <p className="max-w-lg text-neutral-600 sm:mx-auto lg:mx-0">DHS Trusted Tester and Creative Developer specializing in React, Next.js, WCAG 2.2, Motion, and Sanity</p>

          {/* BUTTONS */}
          <div className="mt-7 grid gap-4 sm:flex sm:justify-center lg:justify-start">
            <Button label={'View My Work'} url={'/#work'} primary/>
            <Button label={'Explore My Content'} url={'/blog'} />
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative mx-auto p-5">
          <div className="max-w-[370px] w-full shadow-img mx-auto rounded-t-full bg-teal-200 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/hero-img.png"
              alt="Michael Martinez"
              height={528}
              width={396}
            />
          </div>
        </div>
      </div>
    </section>
  </>)
}
