import { skillItems } from "@/data/data";

export default function Banner() {
  return (<>
    <section className="bg-neutral-900 py-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap lg:sp gap-4">
          {skillItems.map((item) => (
            <div className="ml-8 text-white flex gap-1" key={item.id}>
              <item.icon />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>)
}
