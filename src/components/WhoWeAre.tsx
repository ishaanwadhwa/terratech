import { Button } from "../components/ui/button";
import founderImage from "../assets/founder.jpeg";

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
              <p>
                At TerraTech FZCO, we are committed to driving sustainability through cutting-edge technology. 
                Our Sustainability IoT Platform, Terra-Byte.ai, helps businesses optimize energy usage, reduce waste, 
                optimize assets, improve uptime, boost productivity, and track both historical and predictive trends, 
                contributing to a more sustainable future.
              </p>
              <p>
                Aligned with the United Nations Sustainable Development Goals (SDGs), we focus on Affordable and Clean Energy (SDG 7), 
                Climate Action (SDG 13), and Responsible Consumption and Production (SDG 12).
              </p>
              <p>
                Powered by AI, Terra-Byte.ai enhances decision-making with predictive analytics and real-time insights, 
                ensuring smarter and more efficient operations. With AI-driven capabilities, the platform continually learns 
                and adapts, providing businesses with actionable recommendations to further their sustainability goals.
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
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={founderImage}
                  alt="Mukesh Arora - Founder of TerraTech"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Mukesh Arora</h3>
                  <p className="mt-2 text-lg text-muted-foreground">Founder & CEO</p>
                </div>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Mukesh Arora is a visionary technology and digital transformation leader with nearly 40 years of global experience in shaping the future of IT and emerging technologies. As a CXO and former CEO, he has been at the forefront of driving smart city innovations, Industry 4.0 adoption, and sustainability initiatives across the GCC and India. Mukesh was an early pioneer of the Internet revolution in 1994, fueling his lifelong passion for harnessing technology to create real-world impact.
                  </p>
                  <p>
                    With a proven track record of turning innovation into business value, building agile, future-ready organizations, and championing Net Zero and carbon reduction programs, Mukesh continues to inspire change across industries. He is a frequent speaker at global technology forums and holds a Bachelor's degree in Mechanical Engineering and an MBA from the University of Bedfordshire, UK.
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