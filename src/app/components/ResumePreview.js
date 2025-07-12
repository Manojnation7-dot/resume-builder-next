import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

export default function ResumePreview({ formData, template }) {
  switch (template) {
    case "modern":
      return <ModernTemplate formData={formData} pdfMode={false} />;
    case "classic":
      return <ClassicTemplate formData={formData} pdfMode={false} />;
    case "creative":
      return <CreativeTemplate formData={formData} pdfMode={false} />;  
    default:
      return <div>Select a template to preview your resume.</div>;
  }
}
