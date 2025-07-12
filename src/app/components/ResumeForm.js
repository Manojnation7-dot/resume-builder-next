import { useState } from "react";

export default function ResumeForm({ formData, setFormData }) {
  const [activeFormTab, setActiveFormTab] = useState("personal");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (e.g., PNG, JPEG).");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImageUrl: reader.result, // This is a base64 data URL
      });
    };
    reader.readAsDataURL(file);
  }
};

  const handleArrayChange = (type, index, field, value) => {
    const updated = [...formData[type]];
    updated[index][field] = value;
    setFormData({ ...formData, [type]: updated });
  };

  const addArrayItem = (type, newItem) => {
    setFormData({ ...formData, [type]: [...formData[type], newItem] });
  };

  const removeArrayItem = (type, index) => {
    const updated = [...formData[type]];
    updated.splice(index, 1);
    setFormData({ ...formData, [type]: updated });
  };

  const fields = [
    { label: "Full Name", name: "name", placeholder: "e.g., John Doe" },
    { label: "Job Title", name: "title", placeholder: "e.g., Software Engineer" },
    { label: "Address", name: "address", placeholder: "e.g., 123 Main St, City, Country" },
    { label: "Phone Number", name: "phone", placeholder: "e.g., +1 234 567 8900" },
    { label: "Email Address", name: "email", placeholder: "e.g., john@example.com" },
    { label: "LinkedIn URL", name: "linkedin", placeholder: "e.g., linkedin.com/in/johndoe" },
    { label: "Website", name: "website", placeholder: "e.g., www.johndoe.com" },
    { label: "Summary", name: "summary", textarea: true, placeholder: "Write a brief professional summary..." },
    { label: "Skills", name: "skills", placeholder: "e.g., JavaScript, React, Node.js" },
    { label: "Languages", name: "languages", placeholder: "e.g., English, Spanish" },
    { label: "References", name: "references", placeholder: "e.g., Available upon request" },
    {
      label: "Declaration",
      name: "declaration",
      textarea: true,
      placeholder: "I hereby declare that the above information is true to the best of my knowledge...",
    },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        {["personal", "experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFormTab(tab)}
            className={`py-2 px-4 -mb-px border-b-2 ${
              activeFormTab === tab
                ? "border-blue-500 text-blue-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Personal Info Tab */}
      {activeFormTab === "personal" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Upload Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {formData.profileImageUrl && (
              <img
                src={formData.profileImageUrl}
                alt="Profile Preview"
                className="mt-4 w-32 h-32 object-cover rounded-full border shadow"
              />
            )}
          </div>
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              {field.textarea ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={3}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="block w-full rounded border border-gray-300 p-2"
                />
              ) : (
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="block w-full rounded border border-gray-300 p-2"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Experience Tab */}
      {activeFormTab === "experience" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Work Experience</h3>
          {formData.experience.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4 shadow-sm">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Software Engineer"
                    value={exp.title}
                    onChange={(e) =>
                      handleArrayChange("experience", idx, "title", e.target.value)
                    }
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    placeholder="e.g., Tech Corp Inc."
                    value={exp.company}
                    onChange={(e) =>
                      handleArrayChange("experience", idx, "company", e.target.value)
                    }
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., New York, NY"
                    value={exp.location}
                    onChange={(e) =>
                      handleArrayChange("experience", idx, "location", e.target.value)
                    }
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="text"
                      placeholder="e.g., Jan 2020"
                      value={exp.startDate}
                      onChange={(e) =>
                        handleArrayChange("experience", idx, "startDate", e.target.value)
                      }
                      className="block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="text"
                      placeholder="e.g., Dec 2022"
                      value={exp.endDate}
                      onChange={(e) =>
                        handleArrayChange("experience", idx, "endDate", e.target.value)
                      }
                      className="block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    placeholder="e.g., Responsible for building and maintaining..."
                    value={exp.description}
                    onChange={(e) =>
                      handleArrayChange("experience", idx, "description", e.target.value)
                    }
                    rows={3}
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem("experience", idx)}
                  className="inline-flex items-center text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addArrayItem("experience", {
                title: "",
                company: "",
                location: "",
                startDate: "",
                endDate: "",
                description: "",
              })
            }
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            + Add Experience
          </button>
        </div>
      )}

      {/* Education Tab */}
      {activeFormTab === "education" && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
          {formData.education.map((edu, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4 shadow-sm">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                  <input
                    type="text"
                    placeholder="e.g., B.Sc. Computer Science"
                    value={edu.degree}
                    onChange={(e) =>
                      handleArrayChange("education", idx, "degree", e.target.value)
                    }
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                  <input
                    type="text"
                    placeholder="e.g., University of XYZ"
                    value={edu.institution}
                    onChange={(e) =>
                      handleArrayChange("education", idx, "institution", e.target.value)
                    }
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Boston, MA"
                    value={edu.location}
                    onChange={(e) =>
                      handleArrayChange("education", idx, "location", e.target.value)
                    }
                    className="block w-full rounded-md border border-gray-300 p-2"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="text"
                      placeholder="e.g., Sep 2017"
                      value={edu.startDate}
                      onChange={(e) =>
                        handleArrayChange("education", idx, "startDate", e.target.value)
                      }
                      className="block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="text"
                      placeholder="e.g., Jun 2021"
                      value={edu.endDate}
                      onChange={(e) =>
                        handleArrayChange("education", idx, "endDate", e.target.value)
                      }
                      className="block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeArrayItem("education", idx)}
                  className="inline-flex items-center text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addArrayItem("education", {
                degree: "",
                institution: "",
                location: "",
                startDate: "",
                endDate: "",
              })
            }
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            + Add Education
          </button>
        </div>
      )}
    </div>
  );
}
