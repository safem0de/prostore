import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { ShoppingCart, UserIcon, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
//   SheetDescription,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex items-center gap-4">
      <nav className="hidden md:flex items-center gap-3">
        <ModeToggle />
        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link href="/cart">
            <ShoppingCart size={18} />
            <span>Cart</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link href="/sign-in">
            <UserIcon size={18} />
            <span>Sign In</span>
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="p-6 space-y-4">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link href="/cart">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link href="/sign-in">
                <UserIcon size={18} />
                <span>Sign In</span>
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
