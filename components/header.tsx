import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  BarChart3,
  BookOpen,
  Calculator,
  ChevronDown,
  GitBranch,
  LayoutDashboard,
  Leaf,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/carrai.png"
            alt="carrai logo"
            height={60}
            width={200}
            className="h-[200]"
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/careers"}>
              <Button className="cursor-pointer" variant={"outline"}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Explore Careers</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cursor-pointer">
                  <GitBranch className="h-4 w-4" />
                  <span className="hidden md:block">Explore Streams</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/humanities"} className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Humanities</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/commerce"} className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Commerce</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/pcm"} className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    <span>PCM</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/pcb"} className="flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    <span>PCB</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant={"outline"} className="cursor-pointer">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox: "w-20 h-20",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
              }
            }}
            afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
