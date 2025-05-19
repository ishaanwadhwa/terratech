import { Button } from "../components/ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import heroImage from "../assets/terra-tech-hero.jpeg";

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Driving sustainability through cutting-edge technology
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          TerraTech FZCO delivers cutting-edge IoT and digital solutions for sustainable cities, 
          efficient industries, and a greener planet.
        </p>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          At the heart of TerraTech's offering is our AI-powered Sustainability IoT Platform –{" "}
          <a 
            href="https://terra-byte.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary underline hover:text-primary/80"
          >
            Terra-Byte.ai
          </a>{" "}
          that enables smarter and greener decision-making.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href="/platform">Explore Our Sustainability Platform</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
      <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mt-12">
        <img
          src={heroImage}
          alt="TerraTech Platform"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
