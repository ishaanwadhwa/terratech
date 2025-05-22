import React, { useRef, useState, useLayoutEffect } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

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

// Sub-component for individual Industry Cards
const IndustryCard = ({ industry, isHomePage }) => {
  const isMobile = useIsMobile(); // Determine mobile state for this specific card instance
  // On desktop, start not expanded (false). On mobile, start expanded (true).
  const [expanded, setExpanded] = useState(isMobile);
  const [height, setHeight] = useState('auto'); // Start with auto height or initial calculated height
  const contentRef = useRef(null); // Ref to measure the content's height

  // Height when the card is collapsed on desktop (only description visible)
  const collapsedHeight = 120;

  // --- Define the buffer for expanded height ---
  const heightBuffer = 35; // Add 35px buffer to the calculated height

  // Effect to set the expanded state initially based on mobile status
  useLayoutEffect(() => {
     setExpanded(isMobile); // Always expanded on mobile, collapsed on desktop initially
  }, [isMobile]); // Re-run if isMobile state changes

  // Effect to measure content height and update the 'height' state for animation
  useLayoutEffect(() => {
    if (contentRef.current) {
      const currentContentHeight = contentRef.current.scrollHeight;
      // If expanded (desktop hover or mobile) or on mobile, set height to fit content PLUS BUFFER.
      // Otherwise (desktop not-hovered), set to collapsed height.
      if (expanded || isMobile) {
        // Use the full measured height PLUS BUFFER for expanded state
        setHeight(`${currentContentHeight + heightBuffer}px`);
      } else {
        // Use the adjusted collapsed height for desktop not-hovered
        setHeight(`${collapsedHeight}px`);
      }
    }
    // Re-measure if expanded state changes, isMobile changes, or content changes.
    // Also re-measure if the window is resized while expanded on desktop.
  }, [expanded, isMobile, industry.description, industry.description2]); // Include dependencies that affect content size

  // Event handlers for desktop hover/focus (disabled on mobile)
  const handleMouseEnter = () => !isMobile && setExpanded(true);
  const handleMouseLeave = () => !isMobile && setExpanded(false);
  const handleFocus = () => !isMobile && setExpanded(true); // For accessibility via keyboard
  const handleBlur = () => !isMobile && setExpanded(false); // For accessibility

  // *** Logic to remove emoji if on home page ***
  const displayTitle = isHomePage
    ? industry.title.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim()
    : industry.title;

  return (
    <div
      key={industry.title}
      className="relative rounded-xl overflow-hidden shadow-lg h-[480px] group" // Card container fixed height
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus} // Add focus handlers for keyboard navigation
      onBlur={handleBlur}
      tabIndex={0} // Make the card focusable
    >
      {/* Background Image */}
      {industry.image && (
        <img
          src={industry.image}
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Optional: dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Animated Overlay */}
      <div
        className={`
          absolute left-0 bottom-0 w-full z-10 flex
          bg-background/80 backdrop-blur-md p-6 rounded-t-xl overflow-hidden
        `}
        style={{
          // --- PRIMARY PLACE FOR TRANSITION AND HEIGHT ---
          height: height, // Use the calculated or fixed height
          transition: "height 0.8s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth transition defined here
          // -----------------------------------------------
        }}
      >
         {/* Inner container to measure content height */}
         <div ref={contentRef} className="w-full">
            <h3 className="text-xl font-bold mb-2">{displayTitle}</h3>
            <p className="text-muted-foreground mb-2">{industry.description}</p>
            {/* description2 is only rendered if expanded (desktop hover) or on mobile */}
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