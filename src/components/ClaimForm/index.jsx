import React, { useState } from "react";

export default function ClaimForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    vin: "",
    contractNumber: "",
    mileage: "",
    vehicleTowed: "",
    repairShopName: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    fax: "",
    contactName: "",
    customerComplaint: "",
    estimate: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName) newErrors.customerName = "Customer Name is required";
    if (!formData.vin) newErrors.vin = "VIN is required";
    if (!formData.mileage) newErrors.mileage = "Mileage is required";
    if (!formData.vehicleTowed) newErrors.vehicleTowed = "Please select Yes or No";
    if (!formData.repairShopName) newErrors.repairShopName = "Repair Shop Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.customerComplaint) newErrors.customerComplaint = "Customer Complaint is required";
    if (!formData.estimate) newErrors.estimate = "Estimate is required";
    if (!formData.streetAddress) newErrors.streetAddress = "streetAddress is required";
    if (!formData.city) newErrors.city = "city is required";
    if (!formData.state) newErrors.state = "state is required";
    if (!formData.zip) newErrors.zip = "zip is required";
    if (!formData.contactName) newErrors.contactName = "contactName is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setStatus("Submitting...");
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Submitted successfully!");
        setFormData({
          customerName: "",
          vin: "",
          contractNumber: "",
          mileage: "",
          vehicleTowed: "",
          repairShopName: "",
          streetAddress: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          fax: "",
          contactName: "",
          customerComplaint: "",
          estimate: "",
        });
      } else {
        setStatus("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full font-lexend rounded-2xl border-2 border-secondary/15 bg-transparent">
        <form
          id="claimForm"
          onSubmit={handleSubmit}
          className="w-full p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          
          {/* Details Section */}
          <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-gray/80 col-span-1 lg:col-span-3">
            Customer
          </h5>
          {/* Customer Name */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="customerName">Customer Name  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.customerName && <p className="text-red-500 text-xs">{errors.customerName}</p>}
          </div>

          {/* VIN */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="vin">Vehicle Identification #  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="vin"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.vin && <p className="text-red-500 text-xs">{errors.vin}</p>}
          </div>
{/* contract number */}
           <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="contractNumber">Contract Number <span className="text-gray/40">(Optional)</span></label>
            <input
              type="text"
              id="contractNumber"
              name="contractNumber"
              value={formData.contractNumber}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.contractNumber && <p className="text-red-500 text-xs">{errors.contractNumber}</p>}
          </div>

          {/* Mileage */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="mileage">Current Mileage  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              min="0"
              value={formData.mileage}
              onChange={handleChange}
               className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.mileage && <p className="text-red-500 text-xs">{errors.mileage}</p>}
          </div>

          {/* Vehicle Towed */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="vehicleTowed">Vehicle Towed In?</label>
            <select
              id="vehicleTowed"
              name="vehicleTowed"
              value={formData.vehicleTowed}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.vehicleTowed && <p className="text-red-500 text-xs">{errors.vehicleTowed}</p>}
          </div>

           <hr className="col-span-1 lg:col-span-3 w-full h-px my-1 lg:my-2 bg-gray/10 border-0 rounded" />

          {/* Details Section */}
          <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-gray/80 col-span-1 lg:col-span-3">
            Repair Shop
          </h5>

          {/* Repair Shop Name */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="repairShopName">Repair Shop Name  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="repairShopName"
              name="repairShopName"
              value={formData.repairShopName}
              onChange={handleChange}
            className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.repairShopName && <p className="text-red-500 text-xs">{errors.repairShopName}</p>}
          </div>

         

          {/* street adress */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="streetAddress">Street Address  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.streetAddress && <p className="text-red-500 text-xs">{errors.streetAddress}</p>}
          </div>

          {/* city */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="city">City  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 border rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
          </div>

          {/* state */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="state">State  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 border rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
          </div>

          {/* zip */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="zip">Zip  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 border rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}
          </div>

 {/* Phone */}
          <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="phone">Phone  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 border rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

{/* fax */}
           <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="fax">Fax <span className="text-gray/40">(Optional)</span></label>
            <input
              type="text"
              id="fax"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 border rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.fax && <p className="text-red-500 text-xs">{errors.fax}</p>}
          </div>

          {/* contact Name   */}
           <div className="w-full font-lexend flex flex-col lg:gap-1">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="contactName">Contact Name  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.contactName && <p className="text-red-500 text-xs">{errors.contactName}</p>}
          </div>


           <hr className="col-span-1 lg:col-span-3 w-full h-px my-1 lg:my-2 bg-gray/10 border-0 rounded" />

          {/* Details Section */}
          <h5 className="inline-block tracking-tighter text-balance text-xl lg:text-2xl font-semibold text-gray/80 col-span-1 lg:col-span-3">
            Details
          </h5>

          {/* Customer Complaint */}
          <div className="w-full font-lexend flex flex-col lg:gap-1 col-span-1 lg:col-span-3">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="customerComplaint">Customer Complaint  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <textarea
              id="customerComplaint"
              name="customerComplaint"
              value={formData.customerComplaint}
              onChange={handleChange}
              rows="3"
             className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300
        ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.customerComplaint && <p className="text-red-500 text-xs">{errors.customerComplaint}</p>}
          </div>

          {/* Estimate */}
          <div className="w-full font-lexend flex flex-col lg:gap-1 col-span-1 lg:col-span-3">
            <label className="block relative text-sm lg:text-base text-gray/80 font-medium" htmlFor="estimate">Estimate (Part Numbers, Part Pricing, Labor Time, Labor Rate)  <span title="Required" className="text-base text-gray/30">
            ✶
          </span></label>
            <textarea
              id="estimate"
              name="estimate"
              value={formData.estimate}
              onChange={handleChange}
              rows="3"
             className="w-full block p-2 lg:p-3 mt-1 rounded-md border border-gray-300
          ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.estimate && <p className="text-red-500 text-xs">{errors.estimate}</p>}
          </div>

          <button
            type="submit"
            className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl font-bold bg-primary text-white hover:bg-primary/80 lg:col-span-3 transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100"
          >
            Submit Claim
          </button>

          {status && <p className="lg:col-span-3 mt-2 text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
