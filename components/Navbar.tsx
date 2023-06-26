import Link from "next/link"
import Image from "next/image";
import { NavLinks } from "@/constants";
import { AuthProviders } from "@/components";


const Navbar = () => {
    const session = {};
  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
            <Link href='/'>
                <Image src='/logo.png' alt="Kip DEV" width={115} height={43} />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((navlink) => (
                    <Link href={navlink.href} key={navlink.key}>{navlink.text}</Link>
                ))}
            </ul>
        </div>
        <div className="flexCenter gap-4">
            {session ? (
                <>
                UserPhoto
                <Link href='/create-project'>
                    Share Your work
                </Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar