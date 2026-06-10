import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Heart, GraduationCap, Globe, Lightbulb, Code } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const footprints = [
  {
    title: "Trustee In Aghor Foundation",
    description: "I serve as a Trustee at Aghor Foundation, contributing to initiatives focused on social upliftment, spiritual awareness, and humanitarian service. Through this responsibility, I actively support sustainable efforts aimed at transforming lives and empowering communities at the grassroots level.",
    icon: Heart,
    image: "https://media.licdn.com/dms/image/v2/D5622AQFmfHefhVHeiA/feedshare-shrink_1280/feedshare-shrink_1280/0/1731759949786?e=1772668800&v=beta&t=KTAWafbpedUrplAEbTol6rGhcVBfP0lg6O2M72VumgM",
    link: "https://www.linkedin.com/posts/abhishek---mohan_spiritualgrowth-communityservice-aghorfoundation-activity-7263527697144778752-Z0op?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8lXIIBs-Q5HW1whkzfCQ3a7HpYOEt0tro"
  },
  {
    title: "Member Of Thagaam Foundation",
    description: "I am an active Member of Thagaam Foundation, contributing to initiatives focused on social welfare and community development. Through my involvement, I support efforts aimed at creating sustainable impact and empowering lives at the grassroots level.",
    icon: Users,
    image: "https://lh3.googleusercontent.com/p/AF1QipOqIJDzFK28s_5_nZf4zbyV22bv7yxQ_SIrtg75=s1360-w1360-h1020-rw",
    link: "https://drive.google.com/drive/folders/1g97iSxII5UBrIKfbgRTMysycBKgTQjPN?usp=drive_link"
  },
  {
    title: "Attended Workshop LPU CPE",
    description: "The workshop emphasized giving us useful insights on the fundamentals of body language, unravelling the significance of facial expressions, gestures, and postures in conveying unspoken messages. We gained a deeper knowledge of the impact of non-verbal cues in personal and professional interactions.",
    icon: GraduationCap,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFuWPysU6eWOQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1700314391259?e=1772668800&v=beta&t=Hff-VeMgjFL_BoV2baHXhYV-WDzE3X2xT_SoViiK7_4",
    link: "https://www.linkedin.com/posts/abhishek---mohan_today-i-attended-the-workshop-speak-without-activity-7131635465304092672-pPlz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8lXIIBs-Q5HW1whkzfCQ3a7HpYOEt0tro"
  },
  {
    title: "Google DevFest Chandigarh 2023",
    description: "Had an incredible time at Google DevFest Chandigarh 2023 hosted at Amity University Mohali! Alumni speakers brought a wealth of knowledge and expertise, shedding light on the latest trends and technologies shaping the future.",
    icon: Globe,
    image: "https://media.licdn.com/dms/image/v2/D5622AQG97FSuW8ForQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1702692362023?e=1772668800&v=beta&t=gZ3Meyq_jOqSKC-FOhSfts2Q8pTq-1hU6IUs48geWrQ",
    link: "https://www.linkedin.com/posts/abhishek---mohan_googledevfest-techinnovation-generativeai-activity-7141609396823801856-XBfF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8lXIIBs-Q5HW1whkzfCQ3a7HpYOEt0tro"
  },
  {
    title: "Organised Session ON Atmanirbhar Bharat Semiconductor",
    description: "It was an absolute privilege to be part of the historic event at Lovely Professional University on March 13, 2024, where Prime Minister Narendra Modi announced India's foray into semiconductor manufacturing virtually.",
    icon: Lightbulb,
    image: "https://media.licdn.com/dms/image/v2/D5622AQFF-CI3hD82Xw/feedshare-shrink_800/feedshare-shrink_800/0/1712517273521?e=1772668800&v=beta&t=0kA6p10j6Qnsod0SuWalpaa6_s-zzzvYnnHYzr2WhkM",
    link: "https://www.linkedin.com/posts/abhishek---mohan_makeinindia-atmanirbharbharat-semiconductormanufacturing-activity-7182818134943305728-Lzxz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8lXIIBs-Q5HW1whkzfCQ3a7HpYOEt0tro"
  },
  {
    title: "Participated in 24 Hours Hackathon \"HACKWITHVERTOS\"",
    description: "Hackathons are always a great way to show and learn skills. I attended a 24-hour Hackathon, which helped me learn a lot. Me and my team of 4 tried to solve real-life problems by making a website.",
    icon: Code,
    image: "https://media.licdn.com/dms/image/v2/D5622AQFF_Bk0La09pA/feedshare-shrink_1280/feedshare-shrink_1280/0/1712607111751?e=1772668800&v=beta&t=fjQz6Wy0NYVmf3CP3DTB3k5-K5E9JFgBPbzj6hTtMj8",
    link: "https://www.linkedin.com/posts/abhishek---mohan_hackwithvertos-innovation-tech-activity-7183079660124086272-t9ny?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8lXIIBs-Q5HW1whkzfCQ3a7HpYOEt0tro"
  }
];

export function SocialFootprints() {
  return (
    <section id="social-footprints" className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <SectionHeading title="Social Footprints" subtitle="Impact & Engagement" />

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {footprints.map((footprint, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="group overflow-hidden border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply" />
                        <img 
                          src={footprint.image} 
                          alt={footprint.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-primary border border-white/10">
                          <footprint.icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                          {footprint.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {footprint.description}
                        </p>
                        
                        <div className="flex gap-3 mt-auto">
                          <a href={footprint.link} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50 group-hover:text-primary">
                              <ExternalLink className="w-4 h-4 mr-2" /> View More
                            </Button>
                          </a>
                        </div>
                      </div>
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