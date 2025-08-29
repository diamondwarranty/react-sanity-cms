import React from "react";

// Reusable Card Component
const PlanCard = ({ title, description, sections, terms, footnotes }) => {
  return (
    <div className="flex w-full rounded-2xl border-2 border-secondary/15 bg-gradient-to-b from-secondary/5 to-secondary/0">
      <div className="w-full flex flex-col gap-6 lg:gap-8 p-6 lg:p-10">
        
        {/* Title + Description */}
        <div className="flex flex-col gap-2">
          <h3 className="inline-block tracking-tighter text-balance text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l font-lexend from-primary from-0% to-secondary to-70%">
            {title}
          </h3>
          <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif max-w-[800px]">
            {description}
          </p>
        </div>

        {/* Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-primary/10 border-2 rounded-lg">
          {/* Sections */}
         {/* Sections */}
<div className="flex font-lexend flex-col gap-6 p-6 lg:p-8 border-primary/10 border-b-2 lg:border-r-2 lg:border-b-0">
  {sections.map((section, index) => (
    <div key={index} className="flex flex-col gap-2">
      {section.title && (
        <h6 className="inline-block tracking-tighter text-balance text-md lg:text-lg leading-tight lg:leading-tight font-semibold text-gray/80 uppercase">
          {section.title}
        </h6>
      )}
      <ul className="list-disc list-inside text-gray/20">
        {section.items.map((item, idx) => (
          <li key={idx} className="text-gray/70">
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>


          {/* Terms */}
          <div className="flex font-lexend flex-col gap-4 p-6 lg:p-8">
            <h6 className="inline-block tracking-tighter text-balance text-md lg:text-lg leading-tight lg:leading-tight font-semibold text-gray/80 uppercase">
              Terms
            </h6>
            <ul>
              {terms.map((term, idx) => (
                <li key={idx} className="text-gray/60 mb-2">
                  <span>{term.split("/")[0]}</span>{" "}
                  <span className="text-gray/20">/</span>{" "}
                  <span>{term.split("/")[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footnotes */}
        <div>
          {footnotes.map((note, idx) => (
            <p
              key={idx}
              className={`tracking-tight font-lexend text-sm lg:text-base text-gray/60 lg:mb-4 mb-1 ${
                note.bold ? "font-semibold" : ""
              }`}
            >
              {note.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data
const plans = [
  {
    title: "Powertrain",
    description:
      "Our Powertrain plan offers limited liability coverage for essential vehicle components, ensuring peace of mind with protection for your engine, transmission, and drive axle assemblies.",
    sections: [
      {
        title: "Included components",
        items: [
          "Engine (Gas)",
          "Automatic Transmission",
          "Manual Transmission",
          "Front Drive Axle Assembly",
          "Rear Differential",
          "4x4/AWD (included)",
          "Fluids & Filters **",
          "Seals & Gaskets **",
          "Single Turbo-Supercharger (OEM) *",
          "24/7 Roadside Assistance *",
        ],
      },
    ],
    terms: [
      "3 Months/Unlimited Miles",
      "6 Months/Unlimited Miles",
      "12 Months/Unlimited Miles",
    ],
    footnotes: [
      { text: "* Surcharge Applies" },
      { text: "** Covered in conjunction with the failure of covered component" },
      { text: "See contract for complete program details.", bold: true },
    ],
  },
  {
    title: "Plus",
    description:
      "The Plus plan builds on our Powertrain coverage, adding protection for high-tech electrical systems, fuel systems, air conditioning, and more. This comprehensive plan includes rental car reimbursement and 24/7 roadside assistance, with flexible terms ranging from 3 to 48 months.",
    sections: [
      {
        title: "Includes powertrain components and...",
        items: [
          "Plus Sensor Package (included)",
          "Engine",
          "Seals & Gaskets",
          "Fuel System",
          "Air Conditioning (OEM)",
          "A/C Fluids & Freon (included) *",
          "ABS & Brakes System **",
          "Cooling System",
          "High Tech Electrical",
          "Steering & Suspension",
          "Rental Car Reimbursement",
          "Diagnostics (maximum of one hour)",
          "24/7 Roadside Assistance & Towing (included)",
        ],
      },
    ],
    terms: [
      "3 Months/5,000 Miles",
      "6 Months/9,000 Miles",
      "12 Months/30,000 Miles",
      "24 Months/40,000 Miles",
      "36 Months/50,000 Miles",
    ],
    footnotes: [
      {
        text: "* In conjunction with the replacement or repair of an A/C covered component.",
      },
      { text: "** Exclusions are: rotors, drums, pads & linings." },
      { text: "See contract for complete program details.", bold: true },
    ],
  },
  {
     title: "Enhanced",
    description:
      "Enhanced coverage includes all the benefits of the Powertrain and Plus plans, with added protection for enhanced fuel delivery, engine, electrical systems, and more such as trip interruption coverage with plans from 12 to 48 months.",
    
    sections: [
      {
        title: "INCLUDES POWERTRAIN AND PLUS COMPONENTS,  and...",
        items: [
          "Enhanced Sensor Package (included)", "Enhanced Fuel Delivery System", "Enhanced Engine", "Enhanced Electrical (PCM)", "Enhanced Air Conditioning", "Heating & Enhanced Cooling", "Enhanced Automatic Transmission", "Enhanced ABS & Brakes System", "Enhanced Suspension", "Exterior", "Rental Car Reimbursement", "Diagnostics (maximum of one hour)", "24/7 Roadside Assistance & Towing (included)", "Trip Interruption (included) ($200 maximum benefit)"

        ],
      },
    ],
    terms: [
      
      "12 Months/18,000 Miles",
      "24 Months/30,000 Miles",
      "36 Months/40,000 Miles",
        "48 Months/50,000 Miles",
    ],
    footnotes: [
     
      { text: "See contract for complete program details.", bold: true },
    ],
  },
  {
     title: "Exclusionary (Factory Wrap)",
    description:
      "The Exclusionary plan (Factory Wrap) provides the most comprehensive coverage, wrapping around your existing factory warranty to cover almost all OEM components and optional technology packages. Enjoy extensive roadside assistance and rental car benefits with flexible term options up to 6 years.",
    
    sections: [
      {
        title: "OEM Optional Technology Package",
        items: [
          "(Surcharge Applies)", "GPS Navigation System", "Navigation display unit", "Navigation control module", "Excluded Components:"


        ],
       
      },
      {
        title: "Excluded Components",
        items: [
         "Antennae",
"Cables & Wiring Harness",
"Phone System (Charger/Cradle, Microphone, Speakers, Mobile Phone)"


        ],
       
      },
      {
        title: "Included Benefits",
        items: [
        "Car Rental Program",
"Trip Interruption ($200 Maximum Benefit)",
"24/7 Roadside Assistance (included)"


        ],
       
      },
    ],
    terms: [
      
     "1 Year or up to 100,000 Miles on your odometer",
      "2 Year or up to 100,000 Miles on your odometer",
      "3 Year or up to 100,000 Miles on your odometer",
      "4 Year or up to 100,000 Miles on your odometer",
      "5 Year or up to 100,000 Miles on your odometer",
      "6 Year or up to 100,000 Miles on your odometer",
    ],
    footnotes: [
     
     {
        text: "* Coverage begins after original manufacturer's warranty expires either by time or miles. All factory installed components are covered except for the components and conditions listed in the EXCLUSIONS section of the contract.",
      },
     {
        text: "* Surcharge Applies",
      },
      { text: "** Covered in conjunction with the failure of covered component" },
      { text: "See contract for complete program details.", bold: true },
    ],
  },

  {
     title: "Powertrain Plus 5/100",
    description:
      "The Powertrain Plus 5/100 plan extends our Powertrain coverage to 5 years or 100,000 miles, including additional benefits like 24/7 roadside assistance. This plan ensures long-term peace of mind with limited liability coverage.",
    
    sections: [
      {
        title: "Includes powertrain components and...",
        items: [
          "Powertrain Plus Engine", "Fluids & Filters (Covered in conjunction with a covered component.)", "OEM Single & Twin Turbo/Supercharger (Surcharge Applies) All internally lubricated parts contained within the turbo/supercharger.", "Automatic Transmission", "Manual Transmission", "Rear Axle Assembly", "4x4/AWD (included)", "24/7 Roadside Assistance (included)"


        ],
      },
    ],
    terms: [
      
      "5 Years /1000 Miles",
     
    ],
    footnotes: [
      {
        text: "* Surcharge Applies",
      },
      { text: "** Covered in conjunction with the failure of covered component" },
      { text: "See contract for complete program details.", bold: true },
    ],
  },
  // 🔥 You would add "Enhanced", "Exclusionary (Factory Wrap)", "Powertrain Plus 5/100" here
];

// Wrapper Component
const PlansSection = () => {
  return (
    <section className="mb-section">
      <div className="flex flex-col gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
