import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University, Jalandhar, Punjab",
    description: "Currently pursuing B.Tech in Computer Science and Engineering from Lovely Professional University, Jalandhar, Punjab (2023–2027).",
    image: "https://i.ytimg.com/vi/WCgNBSfuWWg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBKmQpO1l6idIi7BJ-5ZLUXJ9tCDg",
    icon: GraduationCap
  },
  {
    title: "Intermediate Education",
    institution: "Sunbeam English School, Bhagwanpur, Varanasi, Uttar Pradesh",
    description: "Completed my Intermediate education from Sunbeam English School, Bhagwanpur, Varanasi, Uttar Pradesh, India (2020–2021), with a focused foundation in science and maths along with information technology.",
    image: "https://resources.edunexttechnologies.com/web-data/sunbeam/images/b-school-building.jpg",
    icon: School
  },
  {
    title: "Matriculation",
    institution: "Sunbeam English School, Bhagwanpur, Varanasi, Uttar Pradesh",
    description: "Completed my Matriculation from Sunbeam English School, Bhagwanpur, Varanasi, Uttar Pradesh, India (2017–2018), building a strong academic foundation in science and mathematics.",
    image: "https://edunext-main-storage-cf.edunexttechnologies.com/sss/school___static/1758529398197_schoolbuildingii.JPG",
    icon: School
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" subtitle="My Academic Journey" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-primary border border-white/10">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-primary text-sm font-medium mb-4">
                    {item.institution}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}