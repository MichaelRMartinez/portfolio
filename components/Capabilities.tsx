import { capabilitiesItems } from "@/data/data";

export default function Capabilities() {
  return (<>
    <section className="py-20">
      <div className="container">
        
        <h2 className="section-title text-center">
          What Can I Do For You?
        </h2>

        {/* WRAPPER */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-11">
          {capabilitiesItems.map((item) => (
            // CARD
            <div key={item.id} className="p-6 border border-neutral-200 bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-teal-50 rounded-xl hover:border-black focus:border-black transition">
              {/* ICON */}
              <span className="text-neutral-700 inline-flex">
                <item.icon className="text-teal-500" size={30} />
              </span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  </>)
}
