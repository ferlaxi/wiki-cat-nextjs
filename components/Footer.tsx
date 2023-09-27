import Image from "next/image";
import logo from '@/public/images/LogoMainSection.svg'
import copy from '@/public/images/copyright_FILL0_wght400_GRAD0_opsz24.svg'
import Link from "next/link";

export default function Footer() {
  return (
    <>
        <div className="flex items-center xl:container xl:mx-auto h-28 bg-black rounded-t-[40px]">
            <Image
                className="xl:ml-28 md:ml-20 ml-3"
                src={logo}
                width={100}
                height={100}
                alt="logo"
                priority
            />

            <div className="flex gap-x-2 xl:ml-[44rem] md:ml-[15rem] ml-[2rem] ">
                <Image src={copy} alt="copy"  />
                <div className="flex text-white gap-x-2">
                    <p>Creado por </p>
                    <Link className="underline font-bold" href={'/'}>Fernando Laxi</Link>
                </div>
            </div>
        </div>
    </>
  )
}
