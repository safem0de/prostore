import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              priority={true}
              src="/images/logo.svg"
              width={48}
              height={48}
              alt={`logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {/* {APP_NAME} */}
              Prostore
            </span>
          </Link>
        </div>
        <Menu/>
      </div>
    </header>
  );
};

export default Header;
