import React, { useState } from "react";

const ReportModal = ({ onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(2); // Start directly at Step 2
  const [selectedOption, setSelectedOption] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the report is being submitted

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true); // Start the submission animation
    onSubmit({ selectedOption, description });

    // Simulate submission process
    setTimeout(() => {
      onClose(); // Close modal after submission
      setIsSubmitting(false); // Reset the submitting state
    }, 1500); // Simulate 1.5 seconds delay
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-6 bg-white shadow-lg rounded-xl mx-7">
        {/* Title and Close Button */}
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Report Mistake
          </h2>
          <button
            onClick={onClose}
            className="absolute text-xl text-gray-500 top-2 right-4 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Step 2: Category Selection */}
        {currentStep === 2 && (
          <div
            className="transition-opacity duration-300 ease-in-out"
            style={{ opacity: currentStep === 2 ? 1 : 0 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Choose a reason for the report:
            </h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="wrongHeat"
                  name="reportOption"
                  value="Wrong Heat"
                  onChange={handleOptionChange}
                  className="mr-2"
                  checked={selectedOption === "Wrong Heat"}
                />
                Wrong Heat
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="wrongCompetition"
                  name="reportOption"
                  value="Wrong Competition"
                  onChange={handleOptionChange}
                  className="mr-2"
                  checked={selectedOption === "Wrong Competition"}
                />
                Wrong Competition
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="wrongResults"
                  name="reportOption"
                  value="Wrong Results or People Tagged"
                  onChange={handleOptionChange}
                  className="mr-2"
                  checked={selectedOption === "Wrong Results or People Tagged"}
                />
                Wrong Results or People Tagged
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="other"
                  name="reportOption"
                  value="Other"
                  onChange={handleOptionChange}
                  className="mr-2"
                  checked={selectedOption === "Other"}
                />
                Other
              </label>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setCurrentStep(3)} // Move to description step
                disabled={!selectedOption} // Disable until an option is selected
                className="px-6 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Description */}
        {currentStep === 3 && (
          <div
            className="transition-opacity duration-300 ease-in-out"
            style={{ opacity: currentStep === 3 ? 1 : 0 }}
          >
            <textarea
              placeholder="Add a short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentStep(2)} // Move to category selection
                className="px-6 py-2 text-gray-700 transition bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(4)} // Move to review step
                disabled={!selectedOption} // Disable until an option is selected
                className="px-6 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review and Confirm */}
        {currentStep === 4 && (
          <div
            className="transition-opacity duration-300 ease-in-out"
            style={{ opacity: currentStep === 4 ? 1 : 0 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Review Your Report
            </h3>
            <div className="mb-4">
              <strong>Reason: </strong>
              <span className="text-gray-600">{selectedOption}</span>
            </div>
            <div className="mb-4">
              <strong>Description: </strong>
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentStep(2)} // Go back to description step if needed
                className="px-6 py-2 text-gray-700 transition bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Edit
              </button>
              <button
                onClick={handleSubmit} // Submit the report
                disabled={isSubmitting} // Disable the button while submitting
                className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportModal;
