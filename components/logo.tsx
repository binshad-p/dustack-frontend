import Image from "next/image";
import { logo } from "@/public";
import Link from "next/link";
export const Logo = () => <Link href={'/'}><Image src={logo} alt="logo" className="md:w-[180px] w-[150px]" /></Link>
