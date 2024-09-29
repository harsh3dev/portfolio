"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
const BLUR_FADE_DELAY = 0.04;


const Hackathons = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    const HackathonData = isOpen ? DATA.hackathons : DATA.hackathons.slice(0, 3);
  return (
      <section id="hackathons ">
          <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 13}>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                              Hackathons
                          </div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                              I like building things
                          </h2>
                          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                              During my time in university, I attended{" "}
                              {DATA.hackathons.length}+ hackathons. People from around the
                              country would come together and build incredible things in 2-3
                              days. It was eye-opening to see the endless possibilities
                              brought to life by a group of motivated and passionate
                              individuals.
                          </p>
                      </div>
                  </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                  <ul className={cn(" ml-4 divide-y divide-dashed border-l ")}>
                      {HackathonData.map((project, id) => (
                          <BlurFade
                              key={project.title + project.dates}
                              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                          >
                              <HackathonCard
                                  title={project.title}
                                  description={project.description}
                                  location={project.location}
                                  dates={project.dates}
                                  image={project.image}
                                  links={project.links}
                              />
                          </BlurFade>
                      ))}
                  </ul>
              </BlurFade>
                <div className=" w-full flex justify-center items-center -mt-12 ">
                    <Button
                        onClick={handleOpen}
                        className=" underline-offset-4 hover:underline hover:bg-transparent "
                        variant={'ghost'}
                    >
                        <span className=" font-mono text-sm ">{isOpen ? "Show Less" :  "Show all"} </span>
                    </Button>
                </div>
          </div>
      </section>
  )
}

export default Hackathons
