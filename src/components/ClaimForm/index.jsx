import React from "react";
import InputField from "../InputField/index.jsx";


export default function ClaimForm() {
  // Array of input/textarea/select fields for the form
  const claimFields = [
    { label: "Customer Name", type: "text", name: "customerName", required: true },
    { label: "Vehicle Identification #", type: "text", name: "vin", required: true },
    { label: "Contract Number", type: "text", name: "contractNumber", required: false },
    { label: "Current Mileage", type: "number", name: "mileage", required: true, min: 0 },
    { label: "Vehicle Towed In?", type: "select", name: "vehicleTowed", required: true, options: ["Yes", "No"] },
    { label: "Repair Shop Name", type: "text", name: "repairShopName", required: true },
    { label: "Street Address", type: "text", name: "streetAddress", required: true },
    { label: "City", type: "text", name: "city", required: true },
    { label: "State", type: "text", name: "state", required: true },
    { label: "Zip", type: "text", name: "zip", required: true },
    { label: "Phone", type: "tel", name: "phone", required: true },
    { label: "Fax", type: "tel", name: "fax", required: false },
    { label: "Contact Name", type: "text", name: "contactName", required: true },
    { label: "Customer Complaint", type: "textarea", name: "customerComplaint", required: true, rows: 3 },
    { label: "Estimate (Part Numbers, Part Pricing, Labor Time, Labor Rate)", type: "textarea", name: "estimate", required: true, rows: 3 },
  ];

  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full font-lexend rounded-2xl border-2 border-secondary/15 bg-transparent">
        <form className="w-full p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8" id="claimForm">
          <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-gray/80 col-span-1 lg:col-span-3">
            Customer
          </h5>

          {/* Render Customer & Vehicle fields */}
          {claimFields.slice(0, 5).map((field, idx) => (
            <InputField key={idx} {...field} />
          ))}

          <hr className="col-span-1 lg:col-span-3 w-full h-px my-1 lg:my-2 bg-gray/10 border-0 rounded" />

          <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-gray/80 col-span-1 lg:col-span-3">
            Repair Shop
          </h5>

          {/* Render Repair Shop fields */}
          {claimFields.slice(5, 13).map((field, idx) => (
            <InputField key={idx} {...field} />
          ))}

          <hr className="col-span-1 lg:col-span-3 w-full h-px my-1 lg:my-2 bg-gray/10 border-0 rounded" />

          <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-gray/80 col-span-1 lg:col-span-3">
            Details
          </h5>

          {/* Render Details fields */}
          {claimFields.slice(13).map((field, idx) => (
            <InputField key={idx} {...field} className="lg:col-span-3" />
          ))}

          <button
            type="submit"
            className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl text-center font-bold tracking-tight transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100 lg:col-span-3 bg-primary text-white hover:enabled:bg-primary/80"
          >
            Submit Claim
          </button>
        </form>
      </div>
    </section>
  );
}
