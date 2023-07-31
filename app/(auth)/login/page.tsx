import Image from "next/image"
import Link from "next/link"
import { User } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mx-auto -mt-40 flex flex-col justify-center space-y-6 rounded-lg border-2 bg-background/70 bg-cover p-10 pt-16 backdrop-blur-md sm:w-[350px] z-10">
          <div className="flex flex-col items-center space-y-2 text-center">
            <User className="h-[40px] w-[40px] blur-[0.4px]" />
            <h1 className="text-2xl tracking-tighter blur-[0.4px]">
              Welcome back
            </h1>
            <p className="blur-[0.4px]">
              Enter your email to sign in to your account
            </p>
            <Input
              className="placeholder:text-foreground-muted max-w-md self-center border-2 bg-background/70 backdrop-blur-md"
              type="email"
              placeholder="name@email.com"
            />
            <Input
              className="placeholder:text-foreground-muted max-w-md self-center border-2 bg-background/70 backdrop-blur-md"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="px-8 text-center text-sm blur-[0.4px]">
            <Link
              className="underline underline-offset-4 hover:text-orange-600"
              href="/register"
            >
              Don&apos;t have an account?
              <br /> Sign Up
            </Link>
          </p>
        </div>
        <div className="absolute bottom-28 right-10 h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]">
          <Image
            className="dark:invert"
            src={"/shape-6.png"}
            alt="shape"
            fill
          />
        </div>
      </div>
    </>
  )
}
