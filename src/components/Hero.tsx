import { Button } from "../components/ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Technology for Sustainability. Built for the Cloud.
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Clean Energy | Smart Infrastructure | Real-Time Intelligence
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href="/platform">Explore Our Platform</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
      <div className="w-full h-[400px] mt-8 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
        {/* Placeholder for animated icons or video loop */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Animated visualization of wind, solar, data streams, and smart city
        </div>
      </div>
    </section>
  );
}
