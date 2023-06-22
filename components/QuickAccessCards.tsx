"use client";

import { forwardRef } from "react";
import OtherContent from "./OtherContent";

const QuickAccessCards = ({ isOverlapping }: { isOverlapping: boolean }, ref: any) => {
  return (
    <div id="quick-access" ref={ref} className={`quick-access-wrp ${isOverlapping ? 'mt-0 pt-0' : 'mt-96'} relative z-20 pt-24`}>
      <OtherContent />
      <style jsx>
        {`
          .quick-access-wrp {
            background-position: top; 
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(/invert_slant_bg.svg);
          }
        `}
      </style>
    </div>
  );
};


export default forwardRef(QuickAccessCards);

