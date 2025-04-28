import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function CaseStudies() {
  const cases = [
    {
      title: "Smart City Energy Upgrade",
      location: "Oman",
      description: "Implemented city-wide energy management system reducing consumption by 30%",
    },
    {
      title: "Cold Chain Monitoring",
      location: "Healthcare Chain",
      description: "Real-time temperature monitoring for pharmaceutical storage facilities",
    },
    {
      title: "Predictive Maintenance",
      location: "Industrial Automation",
      description: "AI-powered maintenance prediction reducing downtime by 45%",
    },
  ];

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Case Studies / Real Impact
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See how we're making a difference
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseStudy) => (
          <Card key={caseStudy.title}>
            <CardHeader>
              <CardTitle>{caseStudy.title}</CardTitle>
              <CardDescription>{caseStudy.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{caseStudy.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a href="/case-studies">See All Projects</a>
        </Button>
      </div>
    </section>
  );
} 