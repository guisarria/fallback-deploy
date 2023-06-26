import Link from "next/link"
import {
  Brush,
  Clock,
  Clock2,
  DollarSign,
  MailOpen,
  MapPin,
  Music,
  PhoneCall,
  Pizza,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function SideNav() {
  return (
    <nav className="sticky z-10 flex h-screen self-start border-r bg-background/50 px-7 pt-6 backdrop-blur-md dark:bg-background">
      <ul className="flex flex-col gap-y-10 text-lg">
        <li className="flex gap-2">
          <Link className="flex" href="/dashboards/bank" rel="noreferrer">
            <DollarSign className="mr-2 h-6 w-6 text-blue-500 blur-[0.4px] dark:text-blue-300" />
            <span className="hidden blur-[0.4px] md:inline">
              Bank Simulation
            </span>
          </Link>
        </li>
        <li className="flex gap-2">
          <Link className="flex" href="/dashboards/music" rel="noreferrer">
            <Music className="mr-2 h-6 w-6 text-violet-500 blur-[0.4px] dark:text-violet-300" />
            <span className="hidden blur-[0.4px] md:inline">
              Music Simulation
            </span>
          </Link>
        </li>
        <li className="flex gap-2">
          <Link className="flex" href="" rel="noreferrer">
            <Pizza className="mr-2 h-6 w-6 text-orange-500 blur-[0.4px] dark:text-orange-300" />
            <span className="hidden line-through blur-[0.4px] md:inline">
              <Clock2 className="align-center absolute z-20 ml-[60px] h-8 w-8 snap-center justify-center rounded-full bg-red-200 " />
              Dashboard Three
            </span>
          </Link>
        </li>
        <li className="flex gap-2">
          <Link className="flex" href="" rel="noreferrer">
            <Brush className="mr-2 h-6 w-6 text-red-500 blur-[0.4px] dark:text-red-300 " />
            <span className="hidden line-through blur-[0.4px] md:inline">
              <Clock className="align-center absolute z-20 ml-[60px] h-8 w-8 snap-center justify-center rounded-full bg-red-200 blur-[0.4px]" />
              Dashboard Four
            </span>
          </Link>
        </li>
        <li className="mt-4 hidden flex-col items-center justify-center space-y-2 text-center md:flex">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size={"lg"}
                className="max-w-[250px] text-base shadow-md dark:shadow-white"
              >
                <p className="absolute text-white blur-sm">Contact Us</p>
                Contact Us
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-6">
                  <h4 className="leading-none dark:text-sky-300">Contact Us</h4>
                  <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-2">
                      <MailOpen className="h-7 w-7 text-sky-400 dark:text-foreground" />
                      <p className="text-sm">contact@email.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PhoneCall className="h-7 w-7 text-sky-400 dark:text-foreground" />
                      <p className="text-sm">00000-00000</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-7 w-7 text-sky-400 dark:text-foreground" />
                      <p className="text-sm">
                        Flowers Avenue 00000, New York - NY
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </nav>
  )
}
