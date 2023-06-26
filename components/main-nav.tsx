import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { CommandMenu } from "./ui/command"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-4  md:gap-20">
      <Link href="/" className="flex items-center">
        <Icons.logo className="mr-2 h-10 w-10 md:ml-0" />
        <span className="ml-1 hidden font-bold blur-[0.4px] md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-4 blur-[0.4px] lg:gap-10">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-base font-medium",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
          <CommandMenu />
        </nav>
      ) : null}
    </div>
  )
}
