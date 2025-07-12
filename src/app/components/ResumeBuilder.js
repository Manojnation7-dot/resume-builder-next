'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import ResumePreview from "./ResumePreview"; 
import TemplateSelector from "./TemplateSelector";
import ResumeForm from "./ResumeForm";

export default function Home() {
  const searchParams = useSearchParams();
  const selectedTemplate = searchParams.get("template");
  const selectedTab = searchParams.get("tab");

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    linkedin: "",
    website: "",
    profileImageUrl: "",
    summary: "",
    experience: [{ title: "", company: "", location: "", startDate: "", endDate: "", description: "" }],
    education: [{ degree: "", institution: "", location: "", startDate: "", endDate: "" }],
    skills: "",
    languages: "",
    references: "",
    declaration: "I hereby declare that the above information is true to the best of my knowledge and belief.",
  });

  const [template, setTemplate] = useState("modern");
  const [activeTab, setActiveTab] = useState("form");
  const [isGenerating, setIsGenerating] = useState(false);

  // Sync query params
  useEffect(() => {
    if (selectedTemplate) {
      setTemplate(selectedTemplate);
    }
    if (selectedTab === "templates") {
      setActiveTab("templates");
    }
  }, [selectedTemplate, selectedTab]);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, template }),
      });
      if (!response.ok) throw new Error(await response.text());

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${formData.name || 'resume'}_${template}_resume.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed:", error);
      alert("PDF generation failed. Please check console for details.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("form")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "form" ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Edit Resume
            </button>
            <button
              onClick={() => setActiveTab("templates")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "templates" ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Templates
            </button>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {activeTab === "form" ? (
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>
                <ResumeForm formData={formData} setFormData={setFormData} />
              </div>
            ) : (
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Choose a Template</h2>
                <TemplateSelector template={template} setTemplate={setTemplate} />
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Resume Preview</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mt-2 lg:mt-0">
                    {template.charAt(0).toUpperCase() + template.slice(1)} Template
                  </span>
                </div>
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className={`flex items-center px-4 py-2 rounded-lg shadow-md transition-all ${
                    isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M8 12l4 4m0 0l4-4m-4 4V4" />
                      </svg>
                      Download PDF
                    </>
                  )}
                </button>
              </div>
              <div className="p-6">
                <div id="resume-content" className="border-2 border-gray-200 rounded-lg p-4 min-h-[800px] bg-white">
                  <ResumePreview formData={formData} template={template} />
                </div>
              </div>
            </div>
          </div>
        </div>
                  <section className="mt-12 bg-white rounded-xl p-6 shadow">
                  <h2 className="text-2xl font-semibold mb-4">Why Use MakeAResume?</h2>
                  <p className="text-gray-700">
                    Our free online resume builder helps you create professional resumes in minutes, you can choose from one of the our resume templates and build your resume without writing and inlining the Text Document files, It will be ready in minture and you will see the exact resume preview you are building. So make a resume now and get the job done.
                  </p>
                </section>
        <div className="lg:hidden mt-8 flex flex-col gap-4">
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating} 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded shadow hover:bg-blue-700"
          >
            {isGenerating ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
      </div>
    </main>
  );
}
