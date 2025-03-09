import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-stanza-1.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} alt={"Stanza Logo"} className="w-32 aspect-auto" />
    </Link>
  );
};

export default Logo;
