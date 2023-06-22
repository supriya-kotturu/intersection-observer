'use client'

import BannerCards from "@/components/BannerCards";
import MPTQuestions from "@/components/MPTQuestions";
import QuickAccessCards from "@/components/QuickAccessCards";
import { useState, useRef, } from "react";
import TopOverlay from "@/components/TopOverlay";
import BottomOverlay from "@/components/BottomOverlay";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>();
  const [isOverlapping, setIsOverlapping] = useState(false)


  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.map(entry => {
  //       console.log(entry)
  //       entry.isIntersecting ? setIsOverlapping(true) : setIsOverlapping(false)
  //     })
  //   }, {
  //     root: null, rootMargin: '00px', threshold: 0.75
  //   })

  //   if (targetRef?.current) observer.observe(targetRef.current)

  //   return () => {
  //     if (targetRef?.current) observer.unobserve(targetRef.current)
  //   }
  // }, [targetRef])


  return (
    <>
      <main className="min-h-screen relative text-lg bg-green-200 pt-2 ml-16 mr-16">
        <TopOverlay >
          <BannerCards isOverlapping={isOverlapping} />
        </TopOverlay>
        <MPTQuestions />
        <BottomOverlay> <QuickAccessCards ref={targetRef} isOverlapping={isOverlapping} />
        </BottomOverlay>
      </main ></>
  );
}
