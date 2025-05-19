import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Check } from "lucide-react";
import terrabyteImage1 from "../assets/terrabyteai1.jpeg";
import terrabyteImage2 from "../assets/terrabyteai2.jpeg";

interface TerraBytePlatformProps {
  isHomePage?: boolean;
}

export function TerraBytePlatform({ isHomePage = false }: TerraBytePlatformProps) {
  if (isHomePage) {
  return (
    <section className="container py-24 bg-muted/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Powered by TerraByte IoT
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
            State-of-the-art Industry 4.0 Cloud Platform
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-3xl text-center space-y-8">
        <div className="flex justify-center gap-8 text-lg font-medium">
          <span>Real-time Monitoring</span>
          <span>|</span>
          <span>Control</span>
          <span>|</span>
          <span>Optimization</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Scalable Across Urban & Rural Environments
        </p>
          <Button size="lg" asChild>
            <a href="/platform">Explore TerraByte Platform</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-24">
      {/* Hero Section with Image */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Welcome to Terra-Byte.ai
        </h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8">
          AI-Powered Sustainability IoT Platform Built for the Future
        </h2>
        <div className="relative w-full rounded-lg overflow-hidden mb-8 bg-muted/50 p-4">
          <img
            src={terrabyteImage1}
            alt="Terra-Byte.ai Platform Interface"
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>
        <p className="text-lg text-muted-foreground">
          At Terra-Byte.ai, we are revolutionizing sustainability with real-time data and AI-driven insights. 
          Built on a robust open-source technology stack, our platform ensures reliable, scalable, and real-time 
          data processing. By leveraging industry-leading tools, Terra-Byte.ai empowers organizations to achieve 
          operational excellence while driving sustainability goals.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="mx-auto max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features of Terra-Byte.ai</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Real-Time Monitoring Card */}
          <Card>
            <CardHeader>
              <CardTitle>Real-Time Monitoring & Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Stay in control with continuous, real-time monitoring of assets and operations. The Terra-Byte.ai 
                platform allows organizations to make fast, data-driven decisions across industries like smart 
                cities, healthcare, manufacturing, and energy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Edge-to-Cloud Integration: Seamlessly stream data from IoT devices to the cloud</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Instant Data Access: Receive real-time updates and track performance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Custom Dashboards: Personalize your user experience</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* AI-Powered Analytics Card */}
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Analytics & Predictive Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Take full advantage of AI to optimize your operations, reduce waste, and improve sustainability 
                across your business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Predictive Maintenance: Identify potential failures before they occur</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Energy Optimization: Monitor energy usage in real time</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Continuous Improvement: Machine learning capabilities for better predictions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Scale and Performance Card */}
          <Card>
            <CardHeader>
              <CardTitle>Built for Scale and Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Terra-Byte.ai platform is designed for high throughput and low latency, ensuring that your 
                operations can scale seamlessly as data volumes grow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Scalable Infrastructure: Handle massive data streams with ease</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Event-Driven Architecture: Real-time data ingestion and processing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Visualization Card */}
          <Card>
            <CardHeader>
              <CardTitle>Powerful Data Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                With the Terra-Byte.ai platform, real-time monitoring and actionable insights come to life through 
                powerful data visualizations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Interactive Dashboards: View key metrics and trends in real time</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Custom Alerts: Set up personalized alerts for key metrics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Comprehensive Reporting: Track and report on key metrics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Section with Image */}
      <div className="mx-auto max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Terra-Byte.ai?</h2>
        <div className="grid gap-8 md:grid-cols-2 items-start mb-8">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Terra-Byte.ai is more than just an IoT platform; it's a comprehensive solution designed to drive 
              sustainability while optimizing business performance. Whether you're in manufacturing, urban planning, 
              or healthcare, the platform helps you:
            </p>
            <div className="space-y-2">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Maximize resource efficiency and reduce waste</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Improve operational uptime through predictive maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Lower energy consumption and reduce your carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Ensure compliance with environmental and regulatory standards</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative w-full rounded-lg overflow-hidden bg-muted/50 p-4">
            <img
              src={terrabyteImage2}
              alt="Terra-Byte.ai Platform Benefits"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Start Your Journey to Smarter Sustainability</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Explore how Terra-Byte.ai can help your organization unlock the power of data and drive meaningful, 
          sustainable change.
        </p>
        <Button size="lg" asChild>
          <a href="/contact">Get Started</a>
        </Button>
      </div>
    </section>
  );
} 