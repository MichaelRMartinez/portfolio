import { skillItems } from "@/data/data";
import Marquee from "react-fast-marquee";

export default function Banner() {
  return (<>
    <section className="bg-neutral-900 py-4 -skew-y-3">
      <div>
        <Marquee autoFill={true} pauseOnHover={true}>
          {skillItems.map((item) => (
            <div className="ml-8 text-white flex gap-1" key={item.id}>
              <item.icon />
              <span>{item.label}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  </>)
}
