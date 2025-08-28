import React, { useState } from "react";

export default function DealerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    files: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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
    if (!formData.files) newErrors.files = "Please upload at least one file";
    if (!formData.terms) newErrors.terms = "You must accept the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("phone", formData.phone);
      formPayload.append("email", formData.email);
      formPayload.append("terms", formData.terms);

      if (formData.files) {
        for (let i = 0; i < formData.files.length; i++) {
          formPayload.append("files[]", formData.files[i]);
        }
      }

      const res = await fetch("/api/dealer", {
        method: "POST",
        body: formPayload,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", files: null, terms: false });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full font-lexend rounded-2xl border-2 border-secondary/15 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
          encType="multipart/form-data"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm lg:text-base text-gray/80 font-medium"
            >
              Name <span className="text-base text-gray/30">✶</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 w-full p-2 lg:p-3 rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm lg:text-base text-gray/80 font-medium"
            >
              Email <span className="text-base text-gray/30">✶</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full p-2 lg:p-3 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm lg:text-base text-gray/80 font-medium"
            >
              Phone <span className="text-base text-gray/30">✶</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 w-full p-2 lg:p-3 rounded-md border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* File Upload */}
          <div className="col-span-1 lg:col-span-3">
            <label
              htmlFor="files"
              className="block text-sm lg:text-base text-gray/80 font-medium"
            >
              Upload Files <span className="text-base text-gray/30">✶</span>
            </label>
            <input
              type="file"
              id="files"
              name="files"
              multiple
              onChange={handleChange}
              className={`mt-1 w-full block p-2 lg:p-3 rounded-md border ${
                errors.files ? "border-red-500" : "border-gray-300"
              } ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80`}
            />
            {errors.files && <p className="text-red-500 text-xs mt-1">{errors.files}</p>}
          </div>

          {/* Terms */}
          <div className="col-span-1 lg:col-span-3 flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className={errors.terms ? "border-red-500" : ""}
            />
            <label
              htmlFor="terms"
              className="text-sm lg:text-base text-gray/80"
            >
              I agree to the{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-xs mt-1 lg:col-span-3">{errors.terms}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl font-bold bg-primary text-white hover:bg-primary/80 lg:col-span-3 transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100"
          >
            {status === "sending" ? "Submitting..." : "Submit Application"}
          </button>

          {status === "success" && (
            <p className="lg:col-span-3 mt-2 text-green-600 text-sm">
              ✅ Application submitted successfully!
            </p>
          )}
          {status === "error" && (
            <p className="lg:col-span-3 mt-2 text-red-600 text-sm">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
