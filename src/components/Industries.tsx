import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function Industries() {
  const industries = [
    {
      title: "Smart Cities",
      description: "Urban infrastructure and management solutions",
    },
    {
      title: "Energy & Utilities",
      description: "Power generation and distribution systems",
    },
    {
      title: "Healthcare",
      description: "Medical facility and equipment monitoring",
    },
    {
      title: "Infrastructure",
      description: "Construction and maintenance management",
    },
    {
      title: "Retail & Hospitality",
      description: "Commercial space optimization",
    },
  ];

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Industries We Serve
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Transforming diverse sectors with sustainable technology
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Card key={industry.title}>
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{industry.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a href="/industries">Full Industry Use Cases →</a>
        </Button>
      </div>
    </section>
  );
} 