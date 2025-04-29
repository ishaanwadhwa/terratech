import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

interface WhoWeAreProps {
  isHomePage?: boolean;
}
export function WhatWeDo({ isHomePage = false }: WhoWeAreProps) {
  const services = [
    {
      title: "Renewable Energy",
      description: "Solar PV, Micro Wind, Hybrid Grids",
      icon: "🔋",
    },
    {
      title: "Smart Industry",
      description: "IoT, Automation, Predictive AI",
      icon: "🧠",
    },
    {
      title: "Digital Sustainability",
      description: "ESG Advisory, Green Infra",
      icon: "🌍",
    },
  ];

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive solutions for a sustainable future
        </p>
        {!isHomePage && (<p className="mt-4 text-lg text-muted-foreground">
          TerraTech focuses on creating smart, efficient, and sustainable environments with advanced technology. From renewable energy solutions to smart city automation, we integrate real-time monitoring and optimization to reduce environmental impact and enhance operational efficiency.
        </p>)}
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <div className="text-4xl mb-2">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardContent>
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