"use client";
import { Button } from "@/components/ui/button";
import { Code, Users, Lock, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const AboutSection = () => {
  const missionCards = [
    { icon: Code, title: "Open Source First", text: "We believe in transparency and community-driven development. Open source software empowers users and developers alike." },
    { icon: Lock, title: "Universal Access", text: "Quality software should be accessible to everyone, regardless of economic status or geographic location." },
    { icon: Users, title: "Community Driven", text: "The best software is built by communities, for communities. We champion collaborative development." },
    { icon: Zap, title: "Innovation Freedom", text: "Free and open software enables innovation without barriers. When code is open, creativity has no limits." }
  ];

  const philosophyPoints = [
    { title: "Freedom is Not Free", text: "Digital freedom requires vigilance, community, and the courage to choose alternatives. Every time you choose open-source, you vote for a more equitable digital future." },
    { title: "Quality Without Compromise", text: "Free doesn't mean inferior. Many open-source projects surpass their commercial counterparts in functionality, security, and innovation. We showcase only the best." },
    { title: "Knowledge is Power", text: "We don't just provide links – we educate. Understanding your digital tools turns you into a more powerful user and a more informed citizen of the digital world." }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-background border-y border-border/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small z-0"></div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* Main Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={aboutVariants}
          custom={0}
          className="text-center space-y-4 mb-16 md:mb-24"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            About Cobra
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Empowering digital freedom through open software
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={aboutVariants}
          custom={1}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <h3 className="text-3xl font-bold text-accent mb-6 tracking-wide">OUR MISSION</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a world where software monopolies control access to digital tools, COBRA stands as a beacon of freedom. We believe that software is a tool of empowerment, not oppression. Our mission is simple: democratize access to quality software by showcasing the best open-source alternatives and free tools available. We don&apos;t just list software - we curate a revolution.
          </p>
          <p className="mt-6 text-primary/80 italic font-mono text-lg">
            &quot;Software freedom for everyone&quot; isn&apos;t just our motto - it&apos;s our promise.
          </p>
        </motion.div>
        
        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {missionCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={aboutVariants}
              custom={i * 0.5 + 2}
              className="bg-secondary/20 border border-primary/20 rounded-xl p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex items-center gap-4">
                <card.icon className="h-8 w-8 text-primary" />
                <h4 className="text-xl font-bold text-primary/90">{card.title}</h4>
              </div>
              <p className="text-muted-foreground">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* The Cobra Philosophy */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={aboutVariants}
            custom={5}
            className="text-3xl font-bold text-accent mb-12 tracking-wide text-center"
          >
            THE COBRA PHILOSOPHY
          </motion.h3>
          <div className="space-y-10">
            {philosophyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={aboutVariants}
                custom={i + 6}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="w-1 md:w-2 h-16 md:h-auto md:self-stretch bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-primary/90 mb-2">{point.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join The Movement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={aboutVariants}
          custom={9}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-accent mb-6 tracking-wide">JOIN THE MOVEMENT</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Every download of open-source software is a step toward digital freedom. Every shared link spreads the revolution. Be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold rounded-full transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
              Explore Software <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold rounded-full border-accent/50 hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]">
              Get Involved
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
