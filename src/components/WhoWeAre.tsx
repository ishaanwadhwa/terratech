import { Button } from "../components/ui/button";

export function WhoWeAre() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Are</h2>
        <div className="mt-6 space-y-6 text-lg text-muted-foreground">
          <p>
            TerraTech is a sustainability-driven technology company founded by Mukesh Arora, 
            focused on building smarter, greener systems.
          </p>
          <p>
            We design and deliver intelligent solutions that power clean energy, smart cities, 
            public health, and industrial ecosystems.
          </p>
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="/about">Learn More About Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
} 