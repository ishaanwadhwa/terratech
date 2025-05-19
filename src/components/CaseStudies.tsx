import { Card } from "./ui/card";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Smart Energy Management",
      location: "Gurugram, India",
      painArea: "Inefficient energy usage across a large commercial infrastructure leading to inflated energy bills and sustainability non-compliance.",
      objective: "To gain real-time visibility into energy consumption patterns and reduce wastage through automated insights and optimization tools.",
      impact: "A fully integrated energy monitoring and optimization system led to a significant reduction in energy wastage and improved operational efficiency.",
      howItWorks: "The Terra-Byte Sustainability IoT Platform captured granular energy usage data, flagged inefficiencies, and enabled facility teams to make real-time, informed decisions through interactive dashboards."
    },
    {
      title: "Renewable Energy Monitoring",
      location: "Distributed Sites in Northern India",
      painArea: "Lack of unified monitoring and reporting across scattered solar and micro wind turbine installations, leading to underperformance and manual reconciliation delays.",
      objective: "To centralize monitoring of renewable energy assets and automate reconciliation of production data for accountability and grid planning.",
      impact: "Enabled accurate tracking and reconciliation of solar and wind energy production, improving system reliability and performance reporting.",
      howItWorks: "Terra-Byte.ai connected seamlessly with each renewable asset, providing real-time dashboards, trend analytics, and fault detection — all from a single platform."
    },
    {
      title: "Predictive Maintenance",
      location: "Industrial Automation Sites (Pan-India)",
      painArea: "Unexpected machinery breakdowns causing costly downtime, reactive repairs, and reduced productivity across multiple automation sites.",
      objective: "To transition from reactive to predictive maintenance using AI to anticipate faults and schedule maintenance proactively.",
      impact: "Achieved a 45% reduction in unplanned downtime, extended equipment life, and improved maintenance planning.",
      howItWorks: "Terra-Byte.ai analyzed live and historical performance data to detect anomalies, predict upcoming failures, and trigger alerts for timely interventions before breakdowns occurred."
    }
  ];

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Case Studies</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
          Real-World Impact with Terra-Byte.ai
        </h2>
        <p className="text-lg text-muted-foreground">
          Smart sustainability in action. Explore how our platform is solving real problems across sectors.
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {caseStudies.map((study, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-all duration-200">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                <p className="text-muted-foreground font-medium text-sm">Location: {study.location}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-primary text-sm">Pain Area</h4>
                  <p className="text-muted-foreground text-sm">{study.painArea}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-primary text-sm">Objective</h4>
                  <p className="text-muted-foreground text-sm">{study.objective}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-primary text-sm">Impact</h4>
                  <p className="text-muted-foreground text-sm">{study.impact}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-primary text-sm">How It Works</h4>
                  <p className="text-muted-foreground text-sm">{study.howItWorks}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
} 