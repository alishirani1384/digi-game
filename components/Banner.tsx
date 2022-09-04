import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { urlFor } from "../lib/sanity";
import { BannerProp } from "../types";
import Link from "next/link";

const Banner = ({ banners }: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  return (
    <div className="navigation-wrapper">
      <div
        ref={sliderRef}
        className="keen-slider relative rounded-lg bg-white my-10">
        {banners.map((banner: BannerProp, index: number) => {
          return (
            <div
              key={index}
              className="keen-slider__slide relative cursor-pointer">
              <Link href={`/categories/game?=${banner.slug.current}`}>
                <Image
                  src={urlFor(banner.image.asset._ref).url()}
                  width="600px"
                  height="300px"
                  layout="responsive"
                  objectFit="cover"
                  alt={banner.name}
                />
              </Link>
            </div>
          );
        })}
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
