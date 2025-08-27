import React from "react";

// Card data
const contactCards = [
  {
    title: "Office",
    content: [
      {
        label: "Address",
        value: (
          <>
            Diamond Warranty Corp
            <br />
            PO Box 970, Pittston, PA 18640-0970
          </>
        ),
      },
      {
        label: "Working hours",
        value: "Mon - Fri, 8:30am - 5:00pm (EST)",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      { label: "Phone", value: <a href="tel:18003845023" className="hover:underline">1-800-384-5023</a> },
      { label: "Fax", value: <a href="tel:18003845041" className="hover:underline">1-800-384-5041</a> },
      { label: "Email", value: <a href="mailto:info@diamondwarrantycorp.com" className="hover:underline">info@diamondwarrantycorp.com</a> },
    ],
  },
  {
    title: "24 Hour Roadside Assistance",
    content: [
      { label: "Phone", value: <a href="tel:18552784690" className="hover:underline">1-855-278-4690</a> },
      { label: "Details", value: "Producer Code 85362 and Plan U" },
    ],
  },
  {
    title: "Claims",
    content: [
      { label: "Email", value: <a href="mailto:claims@diamondwarrantycorp.com" className="hover:underline">claims@diamondwarrantycorp.com</a> },
    ],
  },
];

// Card component
const ContactCard = ({ title, content }) => {
  return (
    <div className="flex font-lexend w-full rounded-2xl border-2 border-secondary/15 bg-gradient-to-b from-secondary/5 to-secondary/0">
      <div className="flex flex-col p-6 lg:p-8 text-gray/80">
        <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-0% to-secondary to-70% mb-2">
          {title}
        </h5>
        {content.map((item, index) => (
          <p key={index} className="mb-2">
            <strong>{item.label}:</strong>
            <br />
            {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

// Main section component
const ContactSection = () => {
  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactCards.map((card, idx) => (
          <ContactCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
