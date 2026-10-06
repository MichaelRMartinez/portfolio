"use client";
import { useState } from "react";
import { projects } from "@/data/data";
import { RiPagesFill, RiGithubFill } from "@remixicon/react";
import Image from "next/image";

export default function Projects() {

  const [activeTab, setActiveTab] = useState("All");
  
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(activeTab)
        );

  return (<>
    <section className="py-20 bg-gray-50">
      <div className="container">

        <div className="text-center space-y-2.5">
          <h2 className="section-title">My Projects</h2>
          <p className="text max-w-2xl mx-auto">
           Every project is built with accessibility in mind, following WCAG 2.1 AA guidelines and aiming for a 100 Accessibility score in Google Lighthouse.
          </p>
          <p className="text max-w-2xl mx-auto">All styles were created with Tailwind CSS.</p>
        </div>

        {/* WRAPPER */}
        <div className="mt-7">
          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "React", "Next.JS", "Motion", "Sanity", "GSAP"].map(
              (tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`shadow-util px-6 py-2.5 rounded-full font-medium transition duration-300 ${activeTab === tab ? "bg-teal-200 hover:bg-teal-400 focus:bg-teal-400" : "hover:bg-neutral-200 focus:bg-neutral-200"}`}>
                  {tab}
                </button>
              )
            )}
          </div>

          {/* CARD WRAPPER */}
          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              // CARD
              <div key={project.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:border-black focus:border-black transition">
                {/* IMAGE */}
                <div className="w-full overflow-hidden flex items-center justify-center relative">
                  <Image
                    src={project.imageUrl}
                    alt={""}
                    width={project.width}
                    height={project.height}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p>
                    Tags:
                    {project.tags.map((tag) => (
                      <span key={tag} className="ml-6 text">{tag}</span>
                    ))}
                  </p>
                  <p className="text">{project.summary}</p>
                  <div className="flex gap-x-3">
                    <a href={project.githubLink} target="_blank" className="flex shadow-util rounded-full py-3 px-2 bg-teal-200 hover:bg-teal-400 focus:bg-teal-400 transition-colors duration-300">
                      <RiGithubFill className="" />
                      GitHub
                    </a>

                    <a href={project.demoLink} target="_blank" className="flex shadow-util rounded-full py-3 px-2 bg-teal-200 hover:bg-teal-400 focus:bg-teal-400 transition-colors duration-300">
                      <RiPagesFill className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </>)
}
