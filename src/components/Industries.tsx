import React, { useRef, useState, useLayoutEffect } from "react";
import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card"; // Remove or comment out this line

// Import your images (update filenames as needed)
import smartCitiesImg from "../assets/industries/smart-cities.jpeg";
import energyUtilitiesImg from "../assets/industries/energy-utilities.jpeg";
import healthcareImg from "../assets/industries/healthcare.jpeg";
import infrastructureImg from "../assets/industries/infrastructure.jpeg";
import retailHospitalityImg from "../assets/industries/retail-hospitality.jpeg";

// !!! IMPORTANT !!!
// REPLACE THIS DUMMY HOOK WITH YOUR ACTUAL MOBILE DETECTION LOGIC
// You can use libraries like 'react-responsive' or window.innerWidth checks
const useIsMobile = () => {
  // This is a basic client-side check.
  // For SSR, you might need a different approach or default to mobile
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // Adjust 640 to your 'sm' breakpoint if different
    // Initial check
    checkMobile();
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return isMobile;
};

interface IndustriesProps {
  isHomePage?: boolean;
}

// Define the type for an industry object
interface Industry {
  title: string;
  image: string; // Assuming image is a string path or imported module
  description: string;
  description2: string;
  useCases?: string[]; // Optional array
  valueDelivered?: string[]; // Optional array
}

// Define the props for the IndustryCard sub-component
interface IndustryCardProps {
  industry: Industry;
  isHomePage: boolean;
}

// Sub-component for individual Industry Cards
// *** Added types for props ***
const IndustryCard: React.FC<IndustryCardProps> = ({ industry, isHomePage }) => {
  const isMobile = useIsMobile(); // Assume useIsMobile is correctly implemented elsewhere
  const [expanded, setExpanded] = useState(isMobile);
  const [height, setHeight] = useState('auto');
  // *** Typed the ref ***
  const contentRef = useRef<HTMLDivElement>(null);

  const collapsedHeight = 120; // ADJUST THIS VALUE if description1 is still cut off
  const heightBuffer = 20; // Add buffer to the calculated height

  useLayoutEffect(() => {
     setExpanded(isMobile);
  }, [isMobile]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const currentContentHeight = contentRef.current.scrollHeight;
      if (expanded || isMobile) {
        setHeight(`${currentContentHeight + heightBuffer}px`);
      } else {
        setHeight(`${collapsedHeight}px`);
      }
    }
  }, [expanded, isMobile, industry.description, industry.description2]);


  const handleMouseEnter = () => !isMobile && setExpanded(true);
  const handleMouseLeave = () => !isMobile && setExpanded(false);
  const handleFocus = () => !isMobile && setExpanded(true);
  const handleBlur = () => !isMobile && setExpanded(false);

  const displayTitle = isHomePage
    ? industry.title.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim()
    : industry.title;


  return (
    <div
      key={industry.title} // Use original title as key
      className="relative rounded-xl overflow-hidden shadow-lg h-[480px] group" // Card container fixed height
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {/* Background Image */}
      {industry.image && (
        <img
          src={industry.image}
          alt={displayTitle} // Use displayTitle for alt text
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Animated Overlay */}
      <div
        className={`
          absolute left-0 bottom-0 w-full z-10 flex
          bg-background/80 backdrop-blur-md p-6 rounded-t-xl overflow-hidden
        `}
        style={{
          height: height,
          transition: "height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
         {/* Inner container to measure content height */}
         {/* *** Typed the ref attribute *** */}
         <div ref={contentRef as React.RefObject<HTMLDivElement>} className="w-full">
            <h3 className="text-xl font-bold mb-2">{displayTitle}</h3>
            <p className="text-muted-foreground mb-2">{industry.description}</p>
            {(expanded || isMobile) && industry.description2 && (
              <p
                className="text-muted-foreground mt-2"
                dangerouslySetInnerHTML={{ __html: industry.description2 }}
              />
            )}
         </div>
      </div>
    </div>
  );
};

export function Industries({ isHomePage = false }: IndustriesProps) {
  const industries = [
    {
      title: "🏙️ Smart Cities",
      image: smartCitiesImg,
      description: "Connected Urban Systems • Smart Lighting • Waste Management",
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
      image: energyUtilitiesImg,
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
      image: healthcareImg,
      description: "Environment Monitoring • Equipment Uptime • Energy Efficiency",
      description2: "TerraByte.ai tracks critical parameters (temperature, humidity, power) in hospitals, labs, and pharmacies—ensuring compliance, safety, and sustainability.",
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
      image: infrastructureImg,
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
      image: retailHospitalityImg,
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
             // Render the sub-component for each card
             <IndustryCard key={industry.title} industry={industry} isHomePage={isHomePage} />
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
    <>
      <div className="w-full bg-slate-100 dark:bg-muted py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How TerraByte.ai Powers Sustainable Innovation Across Industries
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Discover how our Sustainability IoT Platform helps organizations transform operations, reduce environmental impact, and achieve measurable outcomes.
          </p>
        </div>
      </div>
      <section className="container py-24">
        <div className="mx-auto mt-0 grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="bg-white/80 dark:bg-muted/80 rounded-xl shadow-md overflow-hidden flex flex-col h-full">
              {/* Image at the top */}
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover"
              />
              {/* Text content below */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-2">{industry.title.replace(/^[^\w]+/, '')}</h2>
                <p className="text-base text-muted-foreground mb-4">{industry.description}</p>
                {industry.description2 && (
                  <p className="text-base text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: industry.description2 }} />
                )}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Use Cases:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {industry.useCases?.map((useCase, idx) => (
                      <li key={idx}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Value Delivered:</h3>
                  <ul className="list-disc list-inside text-sm">
                    {industry.valueDelivered?.map((value, idx) => (
                      <li key={idx}>{value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
} 