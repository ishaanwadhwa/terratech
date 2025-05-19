import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface WhoWeAreProps {
  isHomePage?: boolean;
}

export function WhatWeDo({ isHomePage = false }: WhoWeAreProps) {
  const services = [
    {
      title: "Renewable Energy",
      description: "Smart Monitoring • Grid Integration • Energy Optimization",
      icon: "🔋",
      popupContent: {
        title: "Renewable Energy",
        description: (
          <>
            <p className="mb-4">
              We power renewable energy systems like Solar PV, Micro Wind, and Hybrid Grids with intelligent analytics.
            </p>
            <p>
              <a 
                href="https://terra-byte.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline hover:text-primary/80"
              >
                Terra-Byte.ai
              </a>
              {" "}enables real-time performance tracking, predictive maintenance, and seamless grid interaction to increase energy efficiency and reduce emissions.
            </p>
          </>
        ),
      },
    },
    {
      title: "Smart Industry",
      description: "IoT Connectivity • Industrial Automation • Predictive AI",
      icon: "🧠",
      popupContent: {
        title: "Smart Industry",
        description: (
          <>
            <p className="mb-4">
              From manufacturing to utilities, we modernize operations with intelligent sensors, real-time control, and machine learning.
            </p>
            <p>
              <a 
                href="https://terra-byte.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline hover:text-primary/80"
              >
                Terra-Byte.ai
              </a>
              {" "}connects assets, automates workflows, and predicts failures—boosting productivity while lowering environmental impact.
            </p>
          </>
        ),
      },
    },
    {
      title: "Digital Sustainability",
      description: "ESG Insights • Compliance Automation • Green Infrastructure",
      icon: "🌍",
      popupContent: {
        title: "Digital Sustainability",
        description: (
          <>
            <p className="mb-4">
              Sustainability starts with data.
            </p>
            <p>
              <a 
                href="https://terra-byte.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline hover:text-primary/80"
              >
                Terra-Byte.ai
              </a>
              {" "}provides ESG reporting tools, carbon tracking, and infrastructure analytics to help organizations meet sustainability goals, regulatory requirements, and Net Zero targets—seamlessly and transparently.
            </p>
          </>
        ),
      },
    },
  ];

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
        <p className="mt-4 text-lg text-muted-foreground">
        Enabling Smart, Sustainable Transformation
        Powered by the{" "}
        <a 
          href="https://terra-byte.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary underline hover:text-primary/80"
        >
          Terra-Byte.ai
        </a>
        {" "}Sustainability IoT Platform
        </p>
        {!isHomePage && (<p className="mt-4 text-lg text-muted-foreground">
          At TerraTech, we deliver real-time intelligence and automation for a sustainable future. Our proprietary IoT platform,{" "}
          <a 
            href="https://terra-byte.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary underline hover:text-primary/80"
          >
            Terra-Byte.ai
          </a>
          , drives smarter energy, industry, and infrastructure—combining environmental impact with operational excellence.
        </p>)}
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="cursor-pointer hover:shadow-lg transition-shadow">
            {service.popupContent ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <CardHeader>
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{service.popupContent.title}</DialogTitle>
                    <DialogDescription className="text-base">
                      {service.popupContent.description}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ) : (
              <>
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </>
            )}
          </Card>
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