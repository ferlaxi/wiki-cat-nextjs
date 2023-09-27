import { MainSection } from "@/components/MainSection";
import { getBreedBeng, getBreedSava, getBreedSrex, getCatBreedList, getbreedNorw } from "@/lib/cat.API";

export default async function Home({}) {
  
  const catbreedlist = await getCatBreedList();
  const breedBeng = await getBreedBeng();
  const breedSava = await getBreedSava();
  const breedNorw = await getbreedNorw();
  const breedSrex = await getBreedSrex();

  return (
    <>
      <MainSection catbreedlist={catbreedlist} beng={breedBeng} sava={breedSava} norw={breedNorw} srex={breedSrex} />
    </>
  );
}
