import Image from "next/image"
import Link from "next/link"
import {
  Aperture,
  Apple,
  ArrowDown,
  DollarSign,
  Flower,
  Github,
  GripVertical,
  Instagram,
  Lightbulb,
  Linkedin,
  MailOpen,
  MapPin,
  PhoneCall,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="flex flex-col content-center items-center justify-center">
      <section className="z-10 pt-20">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-5xl font-black leading-tight tracking-tight blur-[0.8px] md:text-6xl md:leading-normal lg:text-8xl">
            This is <br className="inline" />
            Dashboard
            <b className="text-white drop-shadow-sm dark:text-orange-300">
              FallBack
            </b>
          </h1>
          <p className="max-w-[42rem] text-xl tracking-tight blur-[0.4px] sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            culpa dolorem architecto ratione recusandae eligendi sed voluptate?
            Similique, saepe, quasi obcaecati laborum dolorem.
          </p>
          <Link href="/register">
            <Button
              size={"lg"}
              className="max-w-[250px] text-base shadow-md dark:shadow-white"
            >
              <p className="absolute font-medium text-white blur-sm">
                Start Now
              </p>
              Start Now
            </Button>
          </Link>
        </div>
      </section>
      <div className="my-32 flex">
        <ArrowDown className="z-10 h-20 w-20 text-red-300 blur-[1px] dark:text-blue-200" />
      </div>
      <section id="partnership" className="container z-10 rounded-xl">
        <div className="flex flex-col content-center items-center justify-center">
          <div className="">
            <h2 className="mb-16 text-center text-3xl font-black blur-[0.6px] md:text-4xl">
              Partnership
            </h2>
            <div className="flex justify-center gap-x-10 blur-[0.8px] drop-shadow-2xl md:gap-x-32">
              <Github className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]" />
              <Linkedin className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]" />
              <Apple className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]" />
              <Flower className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]" />
            </div>
          </div>
        </div>
      </section>
      <div className="mb-10 mt-32 flex content-center items-center justify-center">
        <GripVertical className="z-10 h-20 w-20 text-teal-400 blur-[1px] dark:text-teal-300" />
      </div>
      <section
        id="features"
        className="container z-10 space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex flex-col items-center space-y-4 text-center">
          <h2 className="font-heading mb-10 animate-pulse text-6xl blur-[2.6px] drop-shadow-lg md:text-8xl">
            The definitive framework
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-xl border bg-background/80 p-2 py-4 backdrop-blur-md">
            <div className="flex h-[300px] flex-col p-2">
              <Lightbulb className="h-14 w-14 text-yellow-400 blur-[0.8px] dark:text-yellow-200" />
              <h3 className="my-1 font-semibold blur-[0.4px]">Team</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                suscipit error harum laudantium dolore! Nulla soluta molestias,
                veritatis iste facilis veniam suscipit. Tempore amet ea
                asperiores, commodi nemo debitis facilis?
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background/80 p-2 py-4 backdrop-blur-md">
            <div className="flex h-[300px] flex-col p-2">
              <Aperture className="h-14 w-14 text-sky-400 blur-[0.8px] dark:text-sky-300" />
              <h3 className="my-1 font-semibold blur-[0.4px]">Tecnologies</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                repellat nihil doloremque maiores labore. Praesentium, mollitia
                minus sequi eligendi officiis doloremque asperiores et placeat?
                Consectetur magni voluptatum ea omnis deleniti!
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border bg-background/80 p-2 py-4 backdrop-blur-md">
            <div className="flex h-[300px] flex-col p-2">
              <Shield className="h-14 w-14 text-green-400 blur-[0.8px] dark:text-green-200" />
              <h3 className="my-1 font-semibold blur-[0.4px]">Security</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ex id, porro nam cum sunt incidunt impedit nesciunt
                amet ratione dolores quibusdam tenetur officiis blanditiis
                officia. Sequi saepe quam id!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container z-10 my-10 flex content-center justify-center">
        <div className="h-[182px] w-[2px] border-x-4 border-dashed border-purple-400 blur-[1px] dark:border-red-300"></div>
      </div>
      <section
        id="contact"
        className="container z-10 my-10 flex h-[400px] content-center items-center justify-center rounded-none border bg-background/80 backdrop-blur-md md:max-w-[70rem] md:rounded-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid-col-1 mb-10 grid text-left lg:mx-10 lg:mb-0">
            <h2 className="mb-2 grid text-4xl font-black blur-[0.6px] dark:text-sky-300 md:text-5xl">
              Contact
            </h2>
            <p className="mb-4 grid text-lg tracking-tight ">
              Lorem, ipsum dolor sit amet consectetur fugiat possimus non!
              <br /> Quo, tempore optio rem magnam dolor.
            </p>
            <div className="mb-10 flex gap-4 lg:mb-0 lg:mt-3">
              <Linkedin className="h-9 w-9 text-sky-400 blur-[0.4px] dark:text-foreground" />
              <Instagram className="h-9 w-9 text-sky-400 blur-[0.4px] dark:text-foreground" />
            </div>
          </div>
          <div className="grid-col-1 grid gap-2 text-left md:gap-0 lg:ml-40">
            <div className="flex items-center space-x-2">
              <MailOpen className="h-8 w-8 text-sky-400 blur-[0.4px] dark:text-foreground" />
              <p className="text-base">contact@email.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneCall className="h-8 w-8 text-sky-400 blur-[0.4px] dark:text-foreground" />
              <p className="text-base">11 11111-1111</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-sky-400 blur-[0.4px] dark:text-foreground" />
              <p className="text-base">Flowers Avenue 00000, New York - NY</p>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 w-screen border-t bg-background/80 px-6 py-10 backdrop-blur-md">
        <div className="flex justify-end">
          <div className="flex flex-col">
            <p className="font-medium">Made by Guilherme Sarria</p>
            <div className="flex justify-end gap-x-2">
              <Link href="">
                <Github className="h-6 w-6 blur-[0.4px]" />
              </Link>
              <Link href="">
                <Linkedin className="h-6 w-6 blur-[0.4px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute left-0 top-96 h-[450px] w-[450px]">
        <Image className="dark:invert" src={"/shape-7.png"} alt="shape" fill />
      </div>
      <div className="absolute bottom-[800px] right-10 h-[300px] w-[300px] md:bottom-[800px] md:h-[350px] md:w-[350px]">
        <Image className="dark:invert" src={"/shape-23.png"} alt="shape" fill />
      </div>
      <div className="absolute bottom-32 left-0 h-[400px] w-[400px]">
        <Image className="dark:invert" src={"/8.png"} alt="shape" fill />
      </div>
    </div>
  )
}
