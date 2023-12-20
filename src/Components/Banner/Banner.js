import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import "./Banner.css";
function Banner() {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
     <div className="mb-4 relative">
        <div className="img_input_container">
          <label htmlFor="file" className="img_label">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14M5 12h14"
              ></path>
            </svg>
            Upload File
          </label>
          <input type="file" id="file" className="hidden" />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="heading"
          className="block text-sm font-medium text-gray-600"
        >
          Heading
        </label>
        <input
          type="text"
          id="heading"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="text-center">
        <CustomButton backgroundcolor="blue" buttonText="Save Banner" />
      </div>
    </div>
  );
}

export default Banner;
