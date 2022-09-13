import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React from 'react';
import useSWR, { Key, Fetcher } from "swr";
import { useLanguage } from '../hooks/useLanguage';


const fetcher: Fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
const animation = { duration: 20000, easing: (t: number) => t };

const Users = () => {
    const { data }: any = useSWR("https://jsonplaceholder.ir/users", fetcher);
    const {t}=useLanguage()
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      renderMode: "performance",
        drag: false,
        slides: {
          perView:4
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
    console.log(data);
    
    return (
        <>
            <h2>{t.new}</h2>
            <div ref={sliderRef} className='keen-slider my-10'>
          {data?.map((user: any) => {
              return (
                <div key={data.id} className='keen-slider__slide'>
                <Image src={user.avatar} width='50px' height='50px'/>
                 <div>{user.username}</div>     
              </div>
              )
          })}
    </div>
      </>
      
  )
}

export default Users