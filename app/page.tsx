import Link from "next/link"
import { DiscIcon as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MinecraftServer() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center">The Nonsense Club</h1>

        <div className="text-xl md:text-2xl text-center mb-12 text-gray-300">
          A vanilla Minecraft server where nonsense makes perfect sense.
        </div>

        <Button
          asChild
          size="lg"
          className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2"
        >
          <Link href="https://discord.gg/PrA99U99Gn" target="_blank" rel="noopener noreferrer">
            <Discord className="w-6 h-6" />
            Join our Discord
          </Link>
        </Button>
      </div>

      {/* Footer */}
      <div className="w-full text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Eikemo Developments. All rights reserved. 
      </div>
    </div>
  )
}

