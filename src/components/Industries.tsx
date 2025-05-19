import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface IndustriesProps {
  isHomePage?: boolean;
}

export function Industries({ isHomePage = false }: IndustriesProps) {
  const industries = [
    {
      title: "🏙️ Smart Cities",
      description: "Connected Urban Systems • Smart Lighting • Water & Waste Management",
      description2: "<a href='https://terra-byte.ai' target='_blank' rel='noopener noreferrer' className='text-primary underline hover:text-primary/80'>TerraByte.ai</a> enables city-wide automation—monitoring utilities, reducing energy use, and improving quality of life through smart infrastructure.",
      useCases: [
        "Smart Street Lighting: Automated dimming, energy analytics, and fault detection.",
        "Smart Waste Management: IoT-enabled bins with route optimization for collection.",
        "Smart Water Distribution: Leakage detection, flow analytics, reservoir level monitoring and consumption tracking.",
        "Urban Air Quality Monitoring: Real-time environmental dashboards and alerts."
      ],
      valueDelivered: [
        "Reduced energy consumption",
        "Improved service delivery",
        "Lower operational costs",
        "Data-driven policy insights"
      ]
    },
    {
      title: "⚡ Energy & Utilities",
      description: "Renewable Integration • Grid Monitoring • Predictive Maintenance",
      description2: "Our platform brings intelligence to solar, wind, hybrid, and utility networks—enabling optimization, forecasting, and downtime reduction.",
      useCases: [
        "Solar PV & Micro-Wind Monitoring: Real-time performance tracking and predictive alerts.",
        "Hybrid Grid Management: Load balancing, remote diagnostics, and fault isolation.",
        "Substation and Transformer Monitoring: Condition-based maintenance and uptime improvement."
      ],
      valueDelivered: [
        "Enhanced asset utilization",
        "Reduced downtime",
        "Carbon footprint reduction",
        "Smart grid readiness"
      ]
    },
    {
      title: "🏥 Healthcare",
      description: "Environment Monitoring • Equipment Uptime • Energy Efficiency",
      description2: "Our platform brings intelligence to solar, wind, hybrid, and utility networks—enabling optimization, forecasting, and downtime reduction.",
      useCases: [
        "Connected Medical Devices: Connect medical device outputs with the HIS systems for real-time monitoring and analysis.",
        "Energy Monitoring: Real-time usage insights and alerts for hospitals and labs.",
        "Medical Equipment Tracking: Uptime monitoring and predictive maintenance.",
        "Air Quality & Environment Sensing: Indoor air compliance and filtration feedback."
      ],
      valueDelivered: [
        "Regulatory compliance",
        "Asset efficiency",
        "Energy cost savings",
        "Safer patient environments"
      ]
    },
    {
      title: "🏗️ Infrastructure",
      description: "Structural Health • Site Monitoring • Asset Optimization",
      description2: "From construction sites to smart buildings, our platform enables data-driven decisions with real-time alerts and predictive maintenance.",
      useCases: [
        "Smart Construction Monitoring: Site-level energy, noise, air quality, and vibration tracking.",
        "Structural Health Monitoring: Real-time stress, crack, and tilt monitoring in bridges/buildings.",
        "Asset Utilization Analytics: Heavy equipment usage tracking and downtime prevention."
      ],
      valueDelivered: [
        "Improved safety",
        "Compliance reporting",
        "Lower project delays",
        "Optimized asset lifecycle"
      ]
    },
    {
      title: "🛍️ Retail & Hospitality",
      description: "Energy Optimization • Smart Facilities • Sustainability KPIs",
      description2: "Whether it's a single store or global chain, <a href='https://terra-byte.ai' target='_blank' rel='noopener noreferrer' className='text-primary underline hover:text-primary/80'>TerraByte.ai</a> improves energy usage, tracks environmental conditions, and boosts ESG performance.",
      useCases: [
        "Store Energy Optimization: Lighting, HVAC, and refrigeration monitoring.",
        "Smart Environment Control: Comfort zone management based on occupancy and conditions.",
        "Sustainability Dashboards: Real-time ESG and carbon reporting.",
        "Cold Storage Compliance: Freezer and chiller monitoring in restaurants and supermarkets."
      ],
      valueDelivered: [
        "Reduced utility bills",
        "ESG data readiness",
        "Improved guest comfort",
        "Brand sustainability differentiation"
      ]
    },
  ];

  if (isHomePage) {
    return (
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sustainable Transformation Through IoT Intelligence
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            At TerraTech, we help organizations across industries digitize their operations and meet their sustainability goals.
            Our{" "}
            <a 
              href="https://terra-byte.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary underline hover:text-primary/80"
            >
              TerraByte.ai
            </a>{" "}
            Sustainability IoT Platform delivers real-time visibility, AI-driven insights, and automation—making environmental and operational efficiency measurable and actionable.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title}>
              <CardHeader>
                <CardTitle>{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                {industry.description2 && (
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: industry.description2 }} />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          {isHomePage && (
            <Button size="lg" asChild>
              <a href="/industries">Full Industry Use Cases →</a>
            </Button>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          How TerraByte.ai Powers Sustainable Innovation Across Industries
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Discover how our Sustainability IoT Platform helps organizations transform operations, reduce environmental impact, and achieve measurable outcomes.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl space-y-16">
        {industries.map((industry) => (
          <div key={industry.title} className="space-y-8">
            <div className="border-b pb-8">
              <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
              <p className="text-lg text-muted-foreground mb-4">{industry.description}</p>
              {industry.description2 && (
                <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: industry.description2 }} />
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Use Cases:</h3>
                <ul className="space-y-3">
                  {industry.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Value Delivered:</h3>
                <ul className="space-y-3">
                  {industry.valueDelivered.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">✔️</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 