import Menu from "./menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            priority
            src="/images/logo.svg"
            width={48}
            height={48}
            alt="logo"
          />
          <span className="hidden lg:block font-bold text-2xl">
            Prostore
          </span>
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
