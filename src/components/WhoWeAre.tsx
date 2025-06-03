import { Button } from "../components/ui/button";
import founderImage from "../assets/founder1.jpeg";

interface WhoWeAreProps {
  isHomePage?: boolean;
}

export function WhoWeAre({ isHomePage = false }: WhoWeAreProps) {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Are</h2>
        <div className="mt-6 space-y-6 text-lg text-muted-foreground">
          <p>
            TerraTech is a sustainability-driven technology company founded by Mukesh Arora, 
            focused on building smarter, greener systems.
          </p>
          {!isHomePage && (
            <>
              <p className="text-lg text-muted-foreground">
              At TerraTech FZCO, we are committed to driving sustainability through cutting-edge technology. Our Sustainability IoT Platform,{" "}
              <a 
                href="https://terra-byte.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline hover:text-primary/80"
              >
                Terra-Byte.ai
              </a>
              , helps businesses optimize energy usage, reduce waste, optimize assets, improve uptime, boost productivity, and track both historical and predictive 
              trends, contributing to a more sustainable future.
              </p>
              <p>
                Aligned with the United Nations Sustainable Development Goals (SDGs), we focus on Affordable and Clean Energy (SDG 7), 
                Climate Action (SDG 13), and Responsible Consumption and Production (SDG 12).
              </p>
              <p className="text-lg text-muted-foreground">
              Powered by AI,{" "}
              <a 
                href="https://terra-byte.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline hover:text-primary/80"
              >
                Terra-Byte.ai
              </a>
              {" "}enhances decision-making with predictive analytics and real-time insights, ensuring smarter and more 
              efficient operations. With AI-driven capabilities, the platform continually learns and adapts, providing businesses with actionable 
              recommendations to further their sustainability goals.
              </p>
            </>
          )}
          <p>
            We design and deliver intelligent solutions that power clean energy, smart cities, 
            public health, and industrial ecosystems.
          </p>
        </div>
        {isHomePage && (
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
        )}
      </div>

      {!isHomePage && (
        <div className="mt-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-stretch">
              <div className="relative h-[80%] my-auto flex items-stretch overflow-hidden rounded-lg">
                <img
                  src={founderImage}
                  alt="Mukesh Arora - Founder of TerraTech"
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Mukesh Arora</h3>
                  <p className="mt-2 text-lg text-muted-foreground">Founder & CEO, TerraTech FZCO, Dubai</p>
                </div>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                  Mukesh Arora is a seasoned technology leader and sustainability advocate with over 40 years of experience in driving digital innovation across the GCC and India region. With a deep background in IoT, smart infrastructure, and emerging technologies, Mukesh has consistently led large-scale transformation initiatives across sectors such as retail, healthcare, manufacturing, government, and smart cities.
                  Before founding TerraTech, Mukesh held key CEO roles at leading technology firms, spearheading high-impact projects and nurturing innovation-focused businesses. His leadership philosophy combines practical problem-solving with a strong commitment to sustainability.
                  TerraTech FZCO is the result of his vision—to create technology that not only drives efficiency but also leaves a positive impact on the environment and society.
                  Mukesh is based between Dubai, UAE and Gurugram, India
                  <br />
                  <a 
                    href="mailto:mukesha@terratech.cloud"
                    className="text-primary underline hover:text-primary/80"
                  >
                    email: mukesha@terratech.cloud
                  </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 