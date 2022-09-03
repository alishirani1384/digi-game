import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="navigation-wrapper">
      <div
        ref={sliderRef}
        className="keen-slider relative rounded-lg bg-white my-10">
        <div className="keen-slider__slide">
          <Image
            src="/840.jpg"
            width="600px"
            height="300px"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/841.jpg"
            width="600px"
            height="300px"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/842.jpg"
            width="600px"
            height="300px"
            layout="responsive"
            objectFit="cover"
            alt="image"
          />
        </div>
        <div
          className="absolute cursor-pointer right-3 top-0 bottom-0 flex items-center hover:backdrop-blur-sm"
          onClick={() => instanceRef.current?.next()}>
          <BsArrowRightCircle color="#fff" size={50} />
        </div>
        <div
          className="absolute cursor-pointer left-3 top-0 bottom-0 flex items-center hover:backdrop-blur-sm"
          onClick={() => instanceRef.current?.prev()}>
          <BsArrowLeftCircle color="#fff" size={50} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
