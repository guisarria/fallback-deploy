import {
  Aperture,
  Eye,
  Headphones,
  ListChecks,
  Mic,
  Music,
  Music2,
  Music3,
  Music4,
  Send,
  ThumbsUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function BankSimulator() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center lg:flex-row">
      <section className="container z-10 mb-4 mt-14 rounded-lg border-2 bg-background/80 py-4 backdrop-blur-md lg:mx-2 lg:pb-14 lg:pt-0">
        <div className="my-8 flex flex-col text-center">
          <h2 className="text-3xl text-blue-500 blur-[0.6px] dark:text-blue-300 md:text-4xl">
            Music Simulation
          </h2>
        </div>
        <div className="flex flex-col justify-around md:flex-row">
          <ul className="flex flex-col items-center space-y-6 border-b pb-6 text-lg md:border-b-0 lg:pb-0 ">
            <li className="flex items-center space-x-4 ">
              <Music className="h-12 w-12 text-blue-500 blur-[0.8px] dark:text-blue-300" />
              <div>
                <p className="ml-2">Music</p>
                <Select>
                  <SelectTrigger className="w-[180px] max-w-md self-center border-2 bg-background/70 backdrop-blur-md">
                    <SelectValue placeholder="Placeholder..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Music2 className="h-12 w-12 text-blue-500 blur-[0.8px] dark:text-blue-300" />
              <div>
                <p className="ml-2">Platform</p>
                <Select>
                  <SelectTrigger className="w-[180px] max-w-md self-center border-2 bg-background/70 backdrop-blur-md">
                    <SelectValue placeholder="Placeholder..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Music3 className="h-12 w-12 text-blue-500 blur-[0.8px] dark:text-blue-300" />
              <div>
                <p className="ml-2">AD Type</p>
                <Select>
                  <SelectTrigger className="w-[180px] max-w-md self-center border-2 bg-background/70 backdrop-blur-md">
                    <SelectValue placeholder="Placeholder..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Music4 className="h-12 w-12 text-blue-500 blur-[0.8px] dark:text-blue-300" />
              <div>
                <p className="ml-2">Form</p>
                <Select>
                  <SelectTrigger className="w-[180px] max-w-md self-center border-2 bg-background/70 backdrop-blur-md">
                    <SelectValue placeholder="Placeholder..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </li>
            <li className="flex items-center space-x-6 md:self-start">
              <Headphones className="ml-2 h-12 w-12 text-blue-500 blur-[0.8px] dark:text-blue-300 md:ml-0" />
              <div className=" flex w-[180px] flex-col space-y-2">
                <p>Trigger</p>
                <Switch />
              </div>
            </li>
            <li className="flex items-center space-x-6 md:self-start">
              <Mic className="h-12 w-12 text-blue-500 blur-[0.8px] dark:text-blue-300" />
              <div>
                <p>Themes</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[180px] max-w-md self-center border-2 bg-background/70 backdrop-blur-md"
                    >
                      <ListChecks className="h-4 w-4" />
                      <span className="sr-only">Open Popover</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 grid-cols-2">
                    <div className="col-span-1 grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Themes</h4>
                        <p className="text-sm text-muted-foreground">
                          You can select more than one.
                        </p>
                      </div>
                      <div className="grid gap-2 space-y-4">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="atendimento">Lorem</Label>
                          <Checkbox id="atendimento" />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="atendimento">Lorem</Label>
                          <Checkbox id="atendimento" />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="atendimento">Lorem</Label>
                          <Checkbox id="atendimento" />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="atendimento">Lorem</Label>
                          <Checkbox id="atendimento" />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="atendimento">Lorem</Label>
                          <Checkbox id="atendimento" />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="atendimento">Lorem</Label>
                          <Checkbox id="atendimento" />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </li>
            <li>
              <Button variant={"default"} size={"lg"} className="ml-6 text-lg">
                Simulate
              </Button>
            </li>
          </ul>
          <div className="flex flex-col content-center items-center space-y-8 py-14 text-left lg:pt-20">
            <div>
              <Label htmlFor="atendimento" className="text-xl">
                Investment
              </Label>
              <span className="flex items-center justify-center">
                <Eye className="z-20 h-16 w-16 text-blue-500 blur-[0.8px] dark:text-blue-300" />
                <Input className="max-w-[250px] self-center border-2 bg-background/70 backdrop-blur-md"></Input>
              </span>
            </div>
            <div>
              <Label htmlFor="atendimento" className="text-xl">
                Likes
              </Label>
              <span className="flex items-center justify-center">
                <ThumbsUp className="z-20 h-14 w-14 text-blue-500 blur-[0.8px] dark:text-blue-300" />
                <Input className="max-w-[250px] self-center border-2 bg-background/70 backdrop-blur-md"></Input>
              </span>
            </div>
            <div>
              <Label htmlFor="atendimento" className="text-xl">
                Comments
              </Label>
              <span className="flex items-center justify-center">
                <Send className="z-20 h-14 w-14 text-blue-500 blur-[0.8px] dark:text-blue-300" />
                <Input className="max-w-[250px] self-center border-2 bg-background/70 backdrop-blur-md"></Input>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container z-10 flex h-[500px] flex-col items-center justify-center space-y-4 rounded-lg border-2 bg-background/80 py-4 backdrop-blur-md lg:mx-2 lg:w-[500px]">
        <Aperture className="h-14 w-14 blur-[0.8px]" />
        <h1 className="text-center text-2xl blur-[0.4px]">
          Artificial Intelligence
        </h1>
        <p className="px-8 text-center text-base blur-[0.4px]">
          Ask AI everything about music.
        </p>
        <Input
          className="placeholder:text-foreground-muted max-w-md self-center border-2 bg-background/70 backdrop-blur-md"
          placeholder="Digite aqui..."
        />
      </section>
      <Music4 className="bottom-100 absolute right-0 h-[800px] w-[800px] stroke-[1] font-serif text-black blur-md dark:text-blue-300" />
    </div>
  )
}
