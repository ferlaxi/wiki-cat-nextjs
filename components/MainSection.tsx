"use client";

import Image from "next/image";
import logo from "@/public/images/LogoMainSection.svg";
import icon_search from "@/public/images/search_FILL0_wght400_GRAD0_opsz24.svg";
import React, { useState } from "react";
import cat_xl from "@/public/images/HeroImagelg.png";
import cat_md from "@/public/images/HeroImagemd.png";
import cat_sm from "@/public/images/HeroImagesm.png";
import arrow from "@/public/images/trending_flat_FILL0_wght400_GRAD0_opsz24.svg";
import image1 from '@/public/images/image 1.png'
import image2 from '@/public/images/image 2.png'
import image3 from '@/public/images/image 3.png'
import Link from "next/link";

interface CatProps {
  catbreedlist: any;
  beng: any;
  sava: any;
  norw: any;
  srex: any;
}

interface CatBreeds {}

export const MainSection = ({
  catbreedlist,
  beng,
  sava,
  norw,
  srex,
}: CatProps) => {
  const [catsearch, setCatsearch] = useState("");

  const filterCats = (listcat: any) => {
    return listcat.filter((cat: any) =>
      cat.name.toLowerCase().includes(catsearch.toLocaleLowerCase())
    );
  };

  const filteredCats = filterCats(catbreedlist);

  return (
    <>
      {/* First Main section */}
      <div className="relative border container mx-auto 2xl:h-[35rem] md:h-[30rem] rounded-t-[40px]">
        <Image
          className="rounded-t-[40px] -z-10 xl:block md:hidden hidden"
          src={cat_xl}
          alt="cat-xl"
          fill
          priority
        />

        <Image
          className="rounded-t-[40px] -z-10 xl:hidden md:block hidden"
          src={cat_md}
          alt="cat-md"
          fill
          priority
        />

        <Image
          className="rounded-t-[40px] -z-10 md:hidden"
          src={cat_sm}
          alt="cat-sm"
          fill
          priority
        />



        <div className="2xl:ml-36 xl:ml-28 md:ml-20 2xl:mt-40 md:mt-28 ml-4 mt-10 pb-4">
          <Image className="md:w-72 w-44" src={logo} alt="cat-logo" priority height={300} width={300} />

          <p className="text-[20px] text-white md:w-[20rem] w-[15rem]">
            Get to know more about your cat breed
          </p>

          <div className="relative w-fit md:mt-10 mt-3">
            <input
              onChange={(e) => {
                setCatsearch(e.target.value);
              }}
              type="text"
              className="md:w-72 w-44 h-[52px] rounded-full placeholder:font-semibold placeholder:text-cat-black placeholder:text-[14px] pl-4 focus:ring-0 focus:border-none border-none"
              placeholder="Enter your breed"
            />
            <Image
              className="absolute top-3.5 right-3"
              src={icon_search}
              priority
              height={27}
              width={27}
              alt="icon_search"
            />
          </div>

          {catsearch != "" && filteredCats != 0 ? (
            <div className="flex flex-col absolute z-10 bg-white w-72 mt-3 rounded-3xl h-[12rem] overflow-scroll pl-5 scrollbar-thin">
              {filteredCats.map((cat: any) => {
                return (
                  <Link 
                    href={cat.id}
                    className="mt-5 transition-all duration-300 hover:bg-cat-gray3 w-[95%] py-3 pl-3 font-semibold rounded-xl cursor-pointer"
                    key={cat.id}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Second main section */}
      <div className="bg-cat-bg xl:h-[35rem] md:h-[55rem] h-[88rem] container mx-auto rounded-b-[40px]">
        <div className="mx-28 pt-10">
          <div className="relative">
            <p className="text-cat-black font-semibold">Most Searched Breeds</p>
            <div className="absolute rounded-xl border-b-[3px] border-cat-border-line w-14"></div>
          </div>

          <div className="flex md:flex-row gap-y-2 flex-col items-center md:justify-between md:items-center pt-10">
            <p className="md:text-[48px] text-[22px] md:text-left text-center text-cat-black font-bold md:w-[500px] leading-none">
              66+ Breeds For you to discover
            </p>
            <Link className="flex gap-x-1 justify-center md:w-[10rem] w-[15rem]" href={"https://www.jagranjosh.com/general-knowledge/list-of-top-10-cat-breeds-1673957411-1"} target="_blank">
              <div className="text-cat-link font-bold">SEE MORE</div>
              <Image src={arrow} alt="arrow" />
            </Link>
          </div>

          <div className="flex gap-y-24 flex-wrap justify-between pt-12">
            <div className="relative md:w-[220px] w-[200px] h-[200px] md:h-[220px] rounded-3xl">
              <div className="absolute w-16 h-44 bg-cat-decoration -ml-4 mt-6 rounded-2xl"></div>
              <Image
                className="rounded-3xl"
                src={beng[0].url}
                alt="Beng"
                fill
                priority
              />
              <p className="absolute text-cat-black font-bold md:top-60 top-52 text-[18px]">
                Bengal
              </p>
            </div>
            <div className="relative md:w-[220px] md:h-[220px] w-[200px] h-[200px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={sava[0].url}
                alt="Beng"
                fill
                priority
              />
              <p className="absolute text-cat-black font-bold md:top-60 top-52 text-[18px]">
                Savannah
              </p>
            </div>
            <div className="relative md:w-[220px] md:h-[220px] w-[200px] h-[200px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={norw[0].url}
                alt="Beng"
                fill
                priority
              />
              <p className="absolute text-cat-black font-bold md:top-60 top-52 text-[18px]">
                Norwegian Forest Cat
              </p>
            </div>
            <div className="relative md:w-[220px] md:h-[220px] w-[200px] h-[200px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={srex[0].url}
                alt="Beng"
                fill
                priority
              />
              <p className="absolute text-cat-black font-bold md:top-60 top-52 text-[18px]">
                Selkirk Rex
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third main section */}
      <div className="container mx-auto h-[40rem] 2xl:mb-8 md:mb-0 mb-24">
        <div className="md:flex-row flex-col container 2xl:mx-auto xl:mx-28 flex 2xl:justify-between items-center pt-16">
          <div className="flex flex-col gap-y-14">
            <div className="relative">
              <div className="absolute rounded-xl border-b-[3px] border-cat-border-line w-14"></div>
              <p className="text-cat-black md:text-[48px] text-[20px] font-bold md:w-[440px] leading-none mt-5">
                Why should you have a cat?
              </p>
            </div>

            <p className="text-cat-black md:w-[400px] w-[300px]">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </p>

            <Link className="flex items-center gap-x-1 w-fit" href={"https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"} target="_blank">
              <div className="text-cat-link font-bold">READ MORE</div>
              <Image src={arrow} alt="arrow" />
            </Link>
          </div>

          <div className="flex gap-x-5 md:mt-0 mt-5 md:w-[50%] w-[300px]">
            <div className="flex flex-col gap-y-5">
              <Image src={image2} alt="image2" />
              <Image className="xl:ml-[110px]" src={image1} alt="image1" width={200} height={200}/>
            </div>

            <div>
              <Image src={image3} alt="image3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
