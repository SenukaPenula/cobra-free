const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36 bg-background border-y border-border/20">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:gap-12 md:px-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Our Philosophy
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl lg:text-lg xl:text-xl">
            In a digital world shackled by paywalls and restrictions, Cobra emerges as a symbol of liberation. We believe information, tools, and entertainment are rights, not commodities. Our mission is to dismantle the barriers that limit access to digital resources, championing the free flow of content for all. We are the architects of a new era of digital freedom, where access is universal and unrestricted.
          </p>
        </div>
        <div className="mt-8">
          <p className="font-mono tracking-widest text-accent text-lg">// We don&apos;t host. We just link. //</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
