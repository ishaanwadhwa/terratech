import { Button } from "../components/ui/button";

export function TerraBytePlatform() {
  return (
    <section className="container py-24 bg-muted/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Powered by TerraByte IoT
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          State-of-the-art Industry 4.0 Cloud Platform
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-3xl text-center space-y-8">
        <div className="flex justify-center gap-8 text-lg font-medium">
          <span>Real-time Monitoring</span>
          <span>|</span>
          <span>Control</span>
          <span>|</span>
          <span>Optimization</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Scalable Across Urban & Rural Environments
        </p>
        <Button size="lg" asChild>
          <a href="/platform">Explore TerraByte Platform</a>
        </Button>
      </div>
    </section>
  );
} 