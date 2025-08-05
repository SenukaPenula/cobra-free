const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36 bg-background border-y border-border/20">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:gap-12 md:px-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            About Cobra
          </h2>
          <div className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl lg:text-lg xl:text-xl space-y-4">
            <p>
              Cobra is more than just a name. It&apos;s a movement — one that believes in unrestricted access to the digital world.
            </p>
            <p>
              We don&apos;t sell freedom. We spread it.
            </p>
            <p>
              Whether you&apos;re here for mods, cracks, or just to escape the system — you&apos;re in.
            </p>
            <p className="font-bold text-primary/90">
              Welcome to the other side.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-mono tracking-widest text-accent text-lg">// We don&apos;t host. We just link. //</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
