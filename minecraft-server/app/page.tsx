import { Copy } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="The Nonsense Club Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-lg">The Nonsense Club</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hjem" className="hover:text-blue-600 transition">
                Hjem
              </a>
              <a href="#staff" className="hover:text-blue-600 transition">
                Staff
              </a>
              <a href="#discord" className="hover:text-blue-600 transition">
                Discord
              </a>
              <a href="#galleri" className="hover:text-blue-600 transition">
                Galleri
              </a>
              <a href="#oppdatering" className="hover:text-blue-600 transition">
                Oppdatering
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="hjem"
          className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">The Nonsense Club</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Din nye favoritt Minecraft-server</p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition">
              <code className="font-mono">spill.thenonsenseclub.xyz</code>
              <Copy className="w-4 h-4" />
            </div>
            <div className="mt-4 text-green-400">
              <span className="font-bold">12</span> spillere pålogget
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section id="staff" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Staff Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[1, 2].map((member) => (
                <Card key={member} className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src="/placeholder.svg"
                      alt={`Staff Member ${member}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Brukernavn{member}</h3>
                  <p className="text-gray-600">Staff Member</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Discord & Map Section */}
        <section id="discord" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Bli med på Discord</h2>
                <Button className="bg-[#5865F2] hover:bg-[#4752C4]">Bli med nå</Button>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Server Kart</h2>
                <Button variant="outline">Åpne Dynmap</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galleri" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Galleri</h2>
            <Carousel className="max-w-3xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((image) => (
                  <CarouselItem key={image}>
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg"
                        alt={`Server Screenshot ${image}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Updates Section */}
        <section id="oppdatering" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Siste Oppdatering</h2>
            <Card className="max-w-2xl mx-auto p-6">
              <h3 className="font-bold text-xl mb-4">Oppdatering v1.0</h3>
              <p className="text-gray-600">
                Her kommer den nyeste serveroppdateringen med alle endringer og forbedringer.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} The Nonsense Club. Alle rettigheter forbeholdt</p>
          <p className="text-sm text-gray-400 mt-2">Utviklet av Eikemo Developments</p>
        </div>
      </footer>
    </div>
  )
}

