import React, { useState } from "react";
import InputField from "../InputField";

export default function DealerForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/dealer", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Application submitted successfully!");
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full rounded-2xl border-2 border-secondary/15 bg-transparent">
        <div className="w-full flex flex-col gap-4 lg:gap-8 p-6 lg:p-12 font-lexend">
          <h3 className="inline-block tracking-tighter text-balance text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Submit Forms
          </h3>

          <form
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <InputField label="Name" id="name" name="name" required />
            <InputField label="Email" id="email" name="email" type="email" required />
            <InputField label="Phone" id="phone" name="phone" type="tel" required />

            {/* File Upload */}
            <div className="col-span-1 lg:col-span-3">
              <div className="w-full flex flex-col lg:gap-1">
                <label
                  htmlFor="files"
                  className="block relative text-sm lg:text-base text-gray/80 font-medium"
                >
                  Upload Files{" "}
                  <span className="text-base text-gray/30">✶</span>
                </label>
                <input
                  type="file"
                  name="files"
                  id="files"
                  multiple
                  required
                  className="w-full block p-2 lg:p-3 mt-1 rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="col-span-1 lg:col-span-3 flex items-center gap-2">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms" className="text-sm lg:text-base text-gray/80">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl font-bold bg-primary text-white hover:bg-primary/80 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>
    </section>
  );
}
