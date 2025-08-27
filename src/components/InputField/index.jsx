import React from "react";

const InputField = ({ label, id, name, type = "text", required = false }) => {
  return (
    <div className="w-full font-lexend flex flex-col lg:gap-1">
      <label
        htmlFor={id}
        className="block relative text-sm lg:text-base text-gray/80 font-medium"
      >
        {label}{" "}
        {required && (
          <span title="Required" className="text-base text-gray/30">
            ✶
          </span>
        )}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        className="w-full block p-2 lg:p-3 mt-1 rounded-md border-gray-300 ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default InputField;
