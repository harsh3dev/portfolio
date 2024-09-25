import React from 'react'
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
const BLUR_FADE_DELAY = 0.04;

const Education = () => {
  return (
      <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                  <h2 className="text-xl font-bold">Education</h2>
              </BlurFade>
              {DATA.education.map((education, id) => (
                  <BlurFade
                      key={education.school}
                      delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                  >
                      <ResumeCard
                          key={education.school}
                          altText={education.school}
                          title={education.school}
                          subtitle={education.degree}
                          period={`${education.start} - ${education.end}`}
                      />
                  </BlurFade>
              ))}
          </div>
      </section>
  )
}

export default Education
