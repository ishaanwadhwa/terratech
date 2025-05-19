import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function SustainabilityImpact() {
  const tiles = [
    {
      icon: "⚡",
      heading: "ENERGY SAVINGS POTENTIAL",
      subheading: "UP TO 20% REDUCTION",
      description:
        "in electricity usage by optimizing lighting, HVAC, and industrial loads through IoT–based automation",
    },
    {
      icon: "🌱",
      heading: "CARBON EMISSION REDUCTION",
      subheading: "UP TO 30% LOWER CARBON FOOTPRINT",
      description:
        "when integrating renewable energy, smart grid controls, and predictive maintenance",
    },
    {
      icon: "🔗",
      heading: "CONNECTED INFRASTRUCTURE",
      subheading: "THOUSANDS OF IoT ENDPOINTS",
      description:
        "from sensors and controllers to gateways can be deployed across diverse sectors and geographies",
    },
    {
      icon: "🗺️",
      heading: "SCALABLE MONITORING ZONES",
      subheading: "MULTI-SITE, MULTI-COUNTRY VISIBILITY",
      description:
        "enabling unified control across urban, industrial, healthcare, or commercial environments",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Terratech | Industry Use Cases.pdf';
    link.download = 'Terratech | Industry Use Cases.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container py-24 bg-muted/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
          Sustainability Impact
        </h2>
        <p className="text-lg text-muted-foreground">
          The Potential of Smart, Data-Driven Sustainability
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <Card key={tile.heading} className="flex flex-col items-center p-6 text-center h-full">
            <div className="text-4xl mb-4">{tile.icon}</div>
            <div className="font-semibold uppercase tracking-wide text-base mb-2">{tile.heading}</div>
            <div className="font-bold text-2xl mb-2">{tile.subheading}</div>
            <div className="text-muted-foreground text-base leading-snug">{tile.description}</div>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a 
            href="/Terratech | Industry Use Cases.pdf" 
            download="Terratech | Industry Use Cases.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Impact Snapshot
          </a>
        </Button>
      </div>
    </section>
  );
} 