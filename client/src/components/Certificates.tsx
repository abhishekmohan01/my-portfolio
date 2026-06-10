import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const certificates = [
  {
    title: "Achievement 1",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFxM9hbyD8Zuw/feedshare-shrink_2048_1536/B56ZsqYkoIJoAw-/0/1765942644271?e=1772064000&v=beta&t=lRdjOVKpZpvK0KZxcIKq2pkA44eQmN-flB5MxvQNpb0",
  },
  {
    title: "Achievement 2",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGqMhJhCpXVog/feedshare-shrink_2048_1536/B56ZsqWUvJI0A4-/0/1765942055801?e=1772064000&v=beta&t=EJMVYMM3n6t8p9oXXSgRn5gKM7oskeAQTwQGIvQIbRk",
  },
  {
    title: "Achievement 3",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHZItn2buOFtw/feedshare-shrink_1280/feedshare-shrink_1280/0/1725841810986?e=1772064000&v=beta&t=bR4osA6J9uTcMPos5jZPKdMrlBbsVO0MLmOM6zs-Ytk",
  },
  {
    title: "Achievement 4",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFqTtNwZKQmzA/feedshare-shrink_800/feedshare-shrink_800/0/1728780788055?e=1772064000&v=beta&t=HKEund9HWKbk3v8M6u5n6wIoGOIOusqEdEdEH0itrv0",
  },
  {
    title: "Achievement 5",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG4X_eJjAm2HQ/feedshare-shrink_2048_1536/B56ZPp2g38G8Ao-/0/1734795203663?e=1772064000&v=beta&t=VLfTG9_s9gS-vYG5-oNfnltlkWJx2cQH8LYiI2F4wxE",
  },
  {
    title: "Achievement 6",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGvGw85dzysKg/feedshare-shrink_800/feedshare-shrink_800/0/1733634728233?e=1772064000&v=beta&t=Lw9woldQ-AmRqYV_wIj3IXqASW8bfHlfPmG-QPmrjxc",
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Certificates & Certifications" subtitle="Academic Achievements" />
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card 
                      className="overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm group cursor-pointer h-[300px]"
                      onClick={() => window.open(cert.image, '_blank')}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-full w-full"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white font-medium">Click to view</p>
                        </div>
                      </motion.div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-white/10 hover:bg-primary/20" />
              <CarouselNext className="-right-12 border-white/10 hover:bg-primary/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
