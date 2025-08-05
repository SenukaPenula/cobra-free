const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background border-y">
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Our Philosophy
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            In a digital world shackled by paywalls and restrictions, Cobra emerges as a symbol of liberation. We believe information, tools, and entertainment are rights, not commodities. Our mission is to dismantle the barriers that limit access to digital resources, championing the free flow of content for all. We are the architects of a new era of digital freedom, where access is universal and unrestricted.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold tracking-widest text-accent">// We don't host. We just link. //</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
