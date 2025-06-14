import { Button } from "../components/ui/button";
import founderImage from "../assets/founder1.jpeg";
import founder2 from "../assets/founder2.jpeg";

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
          {/* Founders Section */}
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Founders
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
              {/* Founder 1 */}
              <div className="flex flex-col items-center max-w-md">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={founderImage}
                    alt="Mukesh Arora"
                    className="w-[200px] h-[200px] object-cover rounded-full"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold">Mukesh Arora</h3>
                    <p className="text-muted-foreground">Co-Founder & CEO</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-y-4 mt-6">
                  <p>
                    Mukesh Arora is a seasoned technology leader and sustainability advocate with over 40 years of experience in driving digital innovation across the GCC and India region. With a deep background in IoT, smart infrastructure, and emerging technologies, Mukesh has consistently led large-scale transformation initiatives across sectors such as retail, healthcare, manufacturing, government, and smart cities.
                  </p>
                  <p>
                    Before founding TerraTech, Mukesh held key CEO roles at leading technology firms, spearheading high-impact projects and nurturing innovation-focused businesses. His leadership philosophy combines practical problem-solving with a strong commitment to sustainability.
                  </p>
                  <p>
                    TerraTech FZCO is the result of his vision—to create technology that not only drives efficiency but also leaves a positive impact on the environment and society.
                  </p>
                  <p>
                    Mukesh is based between Dubai, UAE and Gurugram, India
                  </p>
                  <a 
                    href="mailto:mukesha@terratech.cloud"
                    className="text-primary underline hover:text-primary/80"
                  >
                    email: mukesha@terratech.cloud
                  </a>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col items-center max-w-md">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={founder2}
                    alt="Fareed F Al Hinai"
                    className="w-[200px] h-[200px] object-cover rounded-full"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold">Fareed F Al Hinai</h3>
                    <p className="text-muted-foreground">Co-Founder & CFO</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-y-4 mt-6">
                  <p>
                    Fareed is a results-driven business leader with an exceptional track record in scaling high-growth ventures across technology, healthtech, and finance, with significant expertise in strategic transformation, revenue acceleration, and international expansion.
                  </p>
                  <p>
                    Over the past 15 years, Fareed has driven double-digit revenue and profit growth, launched multiple award-winning digital platforms, and expanded various businesses into key global markets. Furthermore, he has led financial restructurings of large-scale debt portfolios, unlocked significant working capital, and steered organizations through crisis with cost discipline and commercial agility.
                  </p>
                  <p>
                    Prior to this, his early career in Global Banking (Corporate Investment Banking and Markets) with HSBC laid the foundation for his profound financial acumen, where he secured multi-billion-dollar mandates and built lasting institutional relationships in the MENA regional office in Dubai, and then heading Global Banking in Oman.
                  </p>
                  <p>
                    Fareed has served on multiple boards across the technology, infrastructure, and digital sectors, with a focus on governance, financial strategy, and growth. He is also an active member of the Young Presidents Organization (YPO).
                  </p>
                  <p>
                    He holds a Master of Public Affairs from Columbia University and a Master of Arts from the University of Glasgow. He is fluent in Arabic and English, with working knowledge of Swahili and French.
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