import Image from "next/image"
import { CornerUpLeft } from "lucide-react"

import { SideNav } from "../../components/side-nav"

export default function IndexPage() {
  return (
    <div className="flex">
      <SideNav />
      <section className="gap-6 pt-20">
        <div className="container flex max-w-[980px] flex-col justify-start gap-y-6">
          <span className="flex gap-2">
            <CornerUpLeft className="h-12 w-12 text-sky-400 blur-[1.2px] dark:text-sky-300" />
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter blur-[0.6px] md:text-7xl">
              Your <br />
              Dashboards.
            </h1>
          </span>
          <p className="pl-16 md:pl-24 text-xl md:text-2xl blur-[0.4px]">
            All your dashboards
            <br className="" /> in one place.
          </p>
        </div>
      </section>
      <div className="absolute bottom-28 right-10 h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]">
        <Image className="dark:invert" src={"/shape-4.png"} alt="shape" fill />
      </div>
    </div>
  )
}
