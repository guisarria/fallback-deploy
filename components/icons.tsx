import {
  LucideProps,
  Moon,
  SunMedium,
  View,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => <View className="h-10 w-10 blur-[0.4px]" />,
}
