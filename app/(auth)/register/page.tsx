import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="-mt-40 space-y-6 rounded-lg border-2 bg-background/70 p-10 pt-16">
        <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="mx-auto h-10 w-10" />
            <h1 className="text-2xl font-semibold tracking-tight blur-[0.4px]">
              Create an account
            </h1>
            <p className="text-sm blur-[0.4px]">Enter your email</p>
            <Input
              className="placeholder:text-foreground-muted max-w-md self-center border-2 bg-background/70 backdrop-blur-md"
              placeholder="name@email.com"
            />
          </div>
          <Button
            size={"lg"}
            className=" text-base shadow-md dark:shadow-white"
          >
            <p className="absolute font-medium text-white blur-[0.4px]">
              Sign in with email
            </p>
            Sign in with email
          </Button>
        </div>
      </div>
      <div className="absolute bottom-28 right-10 h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]">
        <Image className="dark:invert" src={"/shape-20.png"} alt="shape" fill />
      </div>
    </div>
  )
}
