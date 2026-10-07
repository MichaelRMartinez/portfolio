import { skillItems } from "@/data/data";

export default function Banner() {
  return (<>
    <section className="bg-neutral-900 py-4">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-4 items-center">
          {skillItems.map((item) => (
            <div key={item.id} className="text-white flex gap-1 basis-full md:basis-1/4 lg:basis-auto">
              <item.icon />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>)
}
