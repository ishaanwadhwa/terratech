import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function SustainabilityImpact() {
  const metrics = [
    {
      title: "Energy Saved",
      value: "1.2M",
      unit: "kWh",
    },
    {
      title: "Carbon Reduction",
      value: "500",
      unit: "Tons",
    },
    {
      title: "Connected Devices",
      value: "10K",
      unit: "",
    },
    {
      title: "Active Monitoring Zones",
      value: "50",
      unit: "",
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sustainability Impact
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Measurable results for a greener future
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader>
              <CardTitle className="text-center">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold">
                {metric.value}
                <span className="text-lg text-muted-foreground ml-1">
                  {metric.unit}
                </span>
              </div>
            </CardContent>
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