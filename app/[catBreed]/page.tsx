import { GetAllBreeds, getBreedImage } from "@/lib/cat.API";
import Image from "next/image";

export default async function CatBreed({
  params,
}: {
  params: { catBreed: string };
}) {
  const { catBreed } = params;

  const imagesBreed = await getBreedImage(catBreed);
  const infoBreed = await GetAllBreeds();

  let name: string = "";
  let description: string = "";
  let temperament: string = "";
  let origin: string = "";
  let life_span: string = "";
  let adaptability: number = 0;
  let affection_level: number = 0;
  let child_friendly: number = 0;
  let grooming: number = 0;
  let intelligence: number = 0;
  let health_issues: number = 0;
  let social_needs: number = 0;
  let stranger_friendly: number = 0;

  infoBreed.map((cat: any) => {
    if (cat.id == catBreed) {
      name = cat.name;
      description = cat.description;
      temperament = cat.temperament;
      origin = cat.origin;
      life_span = cat.life_span;
      adaptability = cat.adaptability;
      affection_level = cat.affection_level;
      child_friendly = cat.child_friendly;
      grooming = cat.grooming;
      intelligence = cat.intelligence;
      health_issues = cat.health_issues;
      social_needs = cat.social_needs;
      stranger_friendly = cat.stranger_friendly;
    }
  });

  return (
    <>
      <div className="xl:container mx-auto">
        <div className="h-[50rem] flex xl:flex-nowrap md:flex-wrap flex-wrap md:justify-center md:mx-14 mx-7">
          <div className="relative md:w-1/2 w-full flex justify-center">
            <div className="absolute w-16 md:h-80 h-64 bg-cat-decoration md:-ml-96 -ml-72 mt-6 rounded-2xl"></div>
            <div className="relative md:w-[370px] md:h-[370px] w-[300px] h-[300px] rounded-3xl md:mb-10 md:ml-0 ml-4">
              <Image
                className="rounded-3xl"
                src={imagesBreed[0].url}
                alt={catBreed}
                fill
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 md:w-1/2 mt-4 md:mt-0 mr-16 w-full md:items-start justify-center items-start">
            <p className="text-[36px] font-semibold text-cat-black">{name}</p>

            <p className="text-[18px] text-cat-black font-medium xl:w-[40rem] md:w-[30rem] w-full">
              {description}
            </p>

            <div className="flex gap-x-2">
              <p className="font-bold ">Temperament: </p>
              <p className="font-medium">{temperament}</p>
            </div>

            <div className="flex gap-x-2">
              <p className="font-bold ">Origin: </p>
              <p className="font-medium">{origin}</p>
            </div>

            <div className="flex gap-x-2">
              <p className="font-bold ">Life Span: </p>
              <p className="font-medium">{life_span} years</p>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Adaptability: </p>
                <div className="font-medium">
                  {adaptability == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : adaptability == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : adaptability == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : adaptability == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : adaptability == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Affection Level: </p>
                <div className="font-medium">
                  {affection_level == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : affection_level == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : affection_level == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : affection_level == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : affection_level == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Child Friendly: </p>
                <div className="font-medium">
                  {child_friendly == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : child_friendly == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : child_friendly == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : child_friendly == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : child_friendly == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Grooming: </p>
                <div className="font-medium">
                  {grooming == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : grooming == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : grooming == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : grooming == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : grooming == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Intelligence: </p>
                <div className="font-medium">
                  {intelligence == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : intelligence == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : intelligence == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : intelligence == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : intelligence == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Health Issues: </p>
                <div className="font-medium">
                  {health_issues == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : health_issues == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : health_issues == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : health_issues == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : health_issues == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Social Needs: </p>
                <div className="font-medium">
                  {social_needs == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : social_needs == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : social_needs == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : social_needs == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : social_needs == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between md:w-[30rem] w-full">
                <p className="font-bold ">Stranger Friendly: </p>
                <div className="font-medium">
                  {stranger_friendly == 1 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : stranger_friendly == 2 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : stranger_friendly == 3 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : stranger_friendly == 4 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate2 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : stranger_friendly == 5 ? (
                    <div className="flex items-center gap-x-2">
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                      <div className="bg-cat-rate1 md:w-14 w-5 rounded-2xl h-2.5"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[36px] text-cat-black h-auto xl:mt-[10rem] md:mt-[35rem] mt-[40rem] xl:text-left md:text-center text-center font-semibold">
          Other photos
        </p>
        <div className="flex md:flex-wrap flex-wrap justify-center gap-x-12 gap-y-9 md:justify-center md:mt-[5rem] mt-[2rem] mb-28">
          {imagesBreed[1] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[1].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[2] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[2].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[3] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[3].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[4] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[4].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[5] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[5].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[6] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[6].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[7] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[7].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          {imagesBreed[8] != null ? (
            <div className="relative w-[278px] h-[278px] rounded-3xl">
              <Image
                className="rounded-3xl"
                src={imagesBreed[8].url}
                alt="BreedPhoto"
                fill
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
