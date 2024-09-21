"use client"
import React from 'react'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Image from 'next/image';


const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
    const icon = `https://skillicons.dev/icons?i=${DATA.skillicons}` || null;

  return (
    <section id="skills">
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="flex flex-wrap gap-1">
        {
            // eslint-disable-next-line @next/next/no-img-element
            icon && 
            <BlurFade delay={BLUR_FADE_DELAY * 10 + 1 * 0.05}>
            <img src={icon} alt="Skill Icons" style={{ width: '100%', height: 'auto' }} />
            </BlurFade>

        }
        {!icon && DATA.skills.map((skill, id) => (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <Badge key={skill}>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skills
