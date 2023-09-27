import Image from "next/image";
import logo from '@/public/CatwikiLogo.svg'
import Link from "next/link";

export default function Nav() {
  return (
    <>
        <Link href={'/'} className="flex md:justify-start items-center container 2xl:ml-52 md:mx-20 mx-3 h-20 w-fit">
            <Image
                src={logo}
                width={100}
                height={100}
                alt="logo"
                priority
            />
        </Link>
    </>
  )
}
