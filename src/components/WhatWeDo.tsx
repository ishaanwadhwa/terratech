import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface WhoWeAreProps {
  isHomePage?: boolean;
}

export function WhatWeDo({ isHomePage = false }: WhoWeAreProps) {
  const services = [
    {
      title: "Renewable Energy",
      description: "Smart Monitoring • Grid Integration • Energy Optimization",
      icon: "🔋",
      backgroundImage: "/images/renewable-energy.jpg",
      detailedDescription: (
        <>
          <p className="mb-4 text-white text-center text-lg drop-shadow">
            We power renewable energy systems like Solar PV, Micro Wind, and
            Hybrid Grids with intelligent analytics.
          </p>
          <p className="text-white text-center text-lg drop-shadow">
            <a
              href="https://terra-byte.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Terra-Byte.ai
            </a>{" "}
            enables real-time performance tracking, predictive maintenance, and
            seamless grid interaction to increase energy efficiency and reduce
            emissions.
          </p>
        </>
      ),
    },
    {
      title: "Smart Industry",
      description: "IoT Connectivity • Industrial Automation • Predictive AI",
      icon: "🧠",
      backgroundImage: "/images/smart-industry.jpg",
      detailedDescription: (
        <>
          <p className="mb-4 text-white text-center text-lg drop-shadow">
            From manufacturing to utilities, we modernize operations with
            intelligent sensors, real-time control, and machine learning.
          </p>
          <p className="text-white text-center text-lg drop-shadow">
            <a
              href="https://terra-byte.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Terra-Byte.ai
            </a>{" "}
            connects assets, automates workflows, and predicts failures—boosting
            productivity while lowering environmental impact.
          </p>
        </>
      ),
    },
    {
      title: "Digital Sustainability",
      description: "ESG Insights • Compliance Automation • Green Infrastructure",
      icon: "🌍",
      backgroundImage: "/images/digital-sustainability.jpg",
      detailedDescription: (
        <>
          <p className="mb-4 text-white text-center text-lg drop-shadow">
            Sustainability starts with data.
          </p>
          <p className="text-white text-center text-lg drop-shadow">
            <a
              href="https://terra-byte.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Terra-Byte.ai
            </a>{" "}
            provides ESG reporting tools, carbon tracking, and infrastructure
            analytics to help organizations meet sustainability goals,
            regulatory requirements, and Net Zero targets—seamlessly and
            transparently.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What We Do
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Enabling Smart, Sustainable Transformation Powered by the{" "}
          <a
            href="https://terra-byte.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-500"
          >
            Terra-Byte.ai
          </a>{" "}
          Sustainability IoT Platform
        </p>
        {!isHomePage && (
          <p className="mt-4 text-lg text-muted-foreground">
            At TerraTech, we deliver real-time intelligence and automation for a
            sustainable future. Our proprietary IoT platform,{" "}
            <a
              href="https://terra-byte.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Terra-Byte.ai
            </a>
            , drives smarter energy, industry, and infrastructure—combining
            environmental impact with operational excellence.
          </p>
        )}
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-cyan-500 shadow-lg"
            style={{
              backgroundImage: `url(${service.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-white text-center">
              <h3 className="text-4xl font-extrabold mb-2 drop-shadow-lg whitespace-pre-line">
                {service.title}
              </h3>
              <p className="text-lg font-medium mb-6 leading-snug drop-shadow">
                {service.description.split("•").map((segment, i) => (
                  <span key={i}>
                    {segment.trim()}
                    {i < service.description.split("•").length - 1 && (
                      <span className="mx-1">•</span>
                    )}
                  </span>
                ))}
              </p>
              <div className="text-base max-w-md leading-relaxed drop-shadow">
                {service.detailedDescription}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isHomePage && (
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="/solutions">View Our Solutions</a>
          </Button>
        </div>
      )}
    </section>
  );
}
