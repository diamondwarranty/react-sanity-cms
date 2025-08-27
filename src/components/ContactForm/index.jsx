import React from "react";

// Reusable input component
const InputField = ({ label, type, name, required, rows, colSpan }) => (
  <div className={`w-full flex flex-col gap-1 ${colSpan ? `lg:col-span-${colSpan}` : ""}`}>
    <label htmlFor={name} className="block relative text-sm lg:text-base text-gray/80 font-medium">
      {label}{" "}
      {required && (
        <span title="Required" className="text-base text-gray/30">
          ✶
        </span>
      )}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        required={required}
        rows={rows || 3}
        className="w-full block p-2 lg:p-3 mt-1 rounded-md border-gray-300 shadow-sm ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
      ></textarea>
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        className="w-full block p-2 lg:p-3 mt-1 rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
      />
    )}
  </div>
);

// Contact Form Section
const ContactForm = () => {
  const inputs = [
    { label: "Your Name", type: "text", name: "name", required: true },
    { label: "Phone", type: "tel", name: "phone", required: true },
    { label: "Email", type: "email", name: "email", required: true, colSpan: 2 },
    { label: "Message", type: "textarea", name: "message", required: true, colSpan: 2 },
  ];

  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full font-lexend rounded-2xl border-2 border-secondary/15 bg-transparent">
        <form className="w-full p-6 lg:p-12" id="contactForm">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {inputs.map((input, idx) => (
              <InputField key={idx} {...input} />
            ))}

            <button
              type="submit"
              className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl text-center font-bold tracking-tight transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100 lg:col-span-2 bg-primary text-white hover:enabled:bg-primary/80"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
