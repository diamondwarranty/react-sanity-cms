import React, { useState } from "react";

const InputField = ({ label, type, name, value, onChange, error, required, rows, colSpan }) => (
  <div className={`w-full flex flex-col gap-1 ${colSpan ? `lg:col-span-${colSpan}` : ""}`}>
    <label htmlFor={name} className="block relative text-sm lg:text-base text-gray/80 font-medium">
      {label}{" "}
      {required && <span title="Required" className="text-base text-gray/30">✶</span>}
    </label>

    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows || 3}
        className={`w-full block p-2 lg:p-3 mt-1 rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        }  ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500`}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full block p-2 lg:p-3 mt-1 rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        } ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500`}
      />
    )}

    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error as user types
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputs = [
    { label: "Your Name", type: "text", name: "name", required: true },
    { label: "Phone", type: "tel", name: "phone", required: true },
    { label: "Email", type: "email", name: "email", required: true, colSpan: 2 },
    { label: "Message", type: "textarea", name: "message", required: true, colSpan: 2 },
  ];

  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full font-lexend rounded-2xl border-2 border-secondary/15 bg-transparent">
        <form className="w-full p-6 lg:p-12" id="contactForm" onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {inputs.map((input, idx) => (
              <InputField
                key={idx}
                {...input}
                value={formData[input.name]}
                onChange={handleChange}
                error={errors[input.name]}
              />
            ))}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl text-center font-bold tracking-tight transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100 lg:col-span-2 bg-primary text-white hover:enabled:bg-primary/80 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="lg:col-span-2 mt-2 text-green-600 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="lg:col-span-2 mt-2 text-red-600 text-sm">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
