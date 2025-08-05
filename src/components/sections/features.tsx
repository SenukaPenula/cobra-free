
"use client";

import { Shield, Zap, Users, Infinity } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Total Anonymity',
      description: 'Your privacy is paramount. We ensure your digital footprint remains untraceable.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Blazing Fast Access',
      description: 'Get instant access to a vast library of software and media without any speed limits.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Community Driven',
      description: 'Join a thriving community of enthusiasts dedicated to digital freedom and knowledge sharing.',
    },
    {
        icon: <Infinity className="h-10 w-10 text-primary" />,
        title: 'Unrestricted Content',
        description: 'Explore a universe of content with no censorship or restrictions. True digital freedom.',
    },
  ];

  return (
    <section id="features" className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Why Choose Cobra?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are built on principles that prioritize you. No compromises.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 border border-border/50 rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary/90">{feature.title}</h3>
              <p className="text-muted-foreground mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
