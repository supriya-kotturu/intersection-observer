'use client'

import BannerCards from "@/components/BannerCards";
import MPTQuestions from "@/components/MPTQuestions";
import QuickAccessCards from "@/components/QuickAccessCards";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>();
  const [isOverlapping, setIsOverlapping] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map(entry => {
        console.log(entry)
        entry.isIntersecting ? setIsOverlapping(true) : setIsOverlapping(false)
      })
    }, {
      root: document.getElementById("#banner-cards"), rootMargin: '00px', threshold: 0.45
    })

    if (targetRef?.current) observer.observe(targetRef.current)

    return () => {
      if (targetRef?.current) observer.unobserve(targetRef.current)
    }
  }, [targetRef])

  console.log(isOverlapping)

  return (
    <>
      <main className={`min-h-screen relative text-lg bg-green-200 pt-2 ml-16 mr-16`}>
        <BannerCards isOverlapping={isOverlapping} />
        <MPTQuestions />
        <QuickAccessCards ref={targetRef} isOverlapping={isOverlapping} />

      </main></>
  );
}
