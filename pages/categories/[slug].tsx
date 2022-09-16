import {
  BackgroundImage,
  Badge,
  Center,
  Container,
  Group,
  Spoiler,
  SimpleGrid,
  Modal,
} from "@mantine/core";
import Image from "next/image";
import React, { EventHandler, useState } from "react";
import { urlFor } from "../../lib/sanity";
import { client } from "../../utils/client";
import { PortableText } from "@portabletext/react";
import { FaRegHeart, FaSteam, FaDownload, FaFireAlt } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useStore } from "../../store/useStore";
import { useRouter } from "next/router";
import { GameProps } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";
interface IgamePage{
  game:GameProps[]
}

const GamePage = ({ game }:IgamePage) => {
  const [opened, setOpened] = useState(false);
  const [selected,setSelected]=useState()
  const router = useRouter()
  const {t}=useLanguage()
  function handleClick(e:any) {
    setSelected(e.target.src)
    setOpened(true)
    
  }
  const addTocart=useStore((state:any)=>state.addToCart)
  function addItem() {
    addTocart(game[0])
  }
  function addToCartItems() {
    addTocart(game[0])
    router.push('/cart')
  }
  return (
    <>
      <div>
        <Modal opened={opened} onClose={() => setOpened(false)}>
          <img
            src={selected}
            className="object-cover w-full rounded"
            alt="image"
          />
        </Modal>
        <BackgroundImage
          src={urlFor(game[0].banner.asset._ref).url()}
          className="h-60 absolute top-0 left-0">
          <Center className="absolute -bottom-1/3 left-1/2 -translate-x-2/4">
            <Image
              src={urlFor(game[0].images[0].asset._ref).url()}
              width="350px"
              height="200px"
              className="rounded-lg"
              objectFit="cover"
              alt={game[0].title}
            />
          </Center>
        </BackgroundImage>
      </div>
      <div className="mt-72 mb-32">
        <h2 className="flex items-center justify-between w-fit mx-auto">
          {game[0].title}{" "}
          <span>
            <FaRegHeart color="#FF5400" className="ml-3" />
          </span>
        </h2>
        <Group position="center" my={20}>
          <Badge
            sx={{ paddingLeft: 0 }}
            size="lg"
            radius="xl"
            color="teal"
            leftSection={<FaSteam size={25} />}>
            {t.steam}
          </Badge>
          <Badge
            sx={{ paddingLeft: 0 }}
            size="lg"
            radius="xl"
            color="teal"
            leftSection={<FaDownload size={20} />}>
            {t.downloadable}
          </Badge>
          <Badge
            sx={{ paddingLeft: 0 }}
            size="lg"
            radius="xl"
            color="teal"
            leftSection={<FaFireAlt size={20} />}>
            {t.hot}
          </Badge>
        </Group>
        <h1 className="text-center my-5">${game[0].price}</h1>
        <Container size="xs" className="flex space-x-3">
          <button className="bg-[#FF5400] rounded-lg p-4" onClick={addItem}>
            <RiShoppingBag3Line size={35} color="white" />
          </button>
          <button
            className="w-full font-[Vazir] p-4 bg-[#FF5400] text-white font-bold text-lg rounded-lg"
            onClick={addToCartItems}>
            {t.shop}
          </button>
        </Container>
        <div className="my-10">
          <h2 className="mb-5">{t.visuals}</h2>

          <Container className="my-5 ">
            <video
              src={game[0].video}
              // eslint-disable-next-line react/no-unknown-property
              controls={true}
              poster={urlFor(game[0].banner.asset._ref).url()}
            />
            <SimpleGrid cols={4}>
              {game[0].images.map(
                (
                  image: { asset: { _ref: SanityImageSource } },
                  index: React.Key | null | undefined
                ) => (
                  <div key={index}>
                    <Image
                      onClick={handleClick}
                      className="rounded"
                      layout="responsive"
                      src={urlFor(image.asset._ref).url()}
                      width="270px"
                      height="154px"
                      alt="game-image"
                    />
                  </div>
                )
              )}
            </SimpleGrid>
          </Container>
        </div>
        <div className="my-10">
          <Spoiler maxHeight={240} showLabel={t.show} hideLabel={t.hide}>
            <PortableText value={game[0].description} />
          </Spoiler>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  const query = `*[_type =='games' && slug.current == $slug]{
    title,
    banner{asset{_ref}},
   images,
   price,
   description,
  "video": video.asset->url
  }`;
  const game = await client.fetch(query, {
    slug: params?.slug,
  });
  return {
    props: {
      game,
    },
  };
}

export default GamePage;
