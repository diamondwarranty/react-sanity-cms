import React from 'react';

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
            {item.link ? (
              <a href={item.link} className="hover:underline">
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

const ContactSection = ({ contactCards }) => {
  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactCards?.map((card, idx) => (
          <ContactCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
