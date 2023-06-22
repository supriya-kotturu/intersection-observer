"use client";

const BannerCards = ({ isOverlapping }: { isOverlapping: boolean }) => {

  return (
    <div id="banner-cards" className={`banner-cards-wrp ${!isOverlapping ? "fixed top-6" : "relative"} z-20 pb-24 mb-2`}>
      Banner cards Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Neque, perferendis eveniet doloribus vel eligendi esse quod delectus
      reiciendis modi, placeat porro earum expedita dicta, natus dolores
      temporibus consequatur in impedit.
      <style jsx>
        {`
          .banner-cards-wrp {
            overflow-x: clip;
            margin-bottom: 8px;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(/slant_bg.svg);
          }
        `}
      </style>
    </div>
  );
};

export default BannerCards;
