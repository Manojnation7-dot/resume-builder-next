import ClassicTemplate from "../components/templates/ClassicTemplate";
import ModernTemplate from "../components/templates/ModernTemplate";
import CreativeTemplate from "../components/templates/CreativeTemplate";


export const metadata = {
  title: "Resume Templates ",
  description: "Browse and preview our free professional resume templates. Choose the perfect design for your resume.",
   alternates: {
    canonical: 'https://makearesume.com/templates'
  }
};

export default function TemplatesPage() {
  const sampleData = {
    name: "John Doe",
    title: "Senior Software Engineer",
    address: "123 Main Street, City, Country",
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    linkedin: "linkedin.com/in/johndoe",
    website: "johndoe.dev",
    profileImageUrl: "",
    summary: "Experienced software engineer with a strong background in building scalable applications.",
    experience: [
      {
        title: "Lead Developer",
        company: "TechCorp",
        location: "New York, NY",
        startDate: "Jan 2020",
        endDate: "Present",
        description: "Leading a team of developers to build innovative solutions."
      },
    ],
    education: [
      {
        degree: "B.Sc. Computer Science",
        institution: "State University",
        location: "NY, USA",
        startDate: "2014",
        endDate: "2018"
      },
    ],
    skills: "JavaScript, React, Node.js, CSS, HTML",
    languages: "English, Spanish",
    references: "Available upon request.",
    declaration: "I hereby declare that the above information is true to the best of my knowledge and belief.",
  };

  const templates = [
    {
      id: "classic",
      name: "Classic Template",
      description: "A timeless, professional resume design.",
      PreviewComponent: ClassicTemplate,
    },
    {
      id: "modern",
      name: "Modern Template",
      description: "A clean, contemporary style for modern professionals.",
      PreviewComponent: ModernTemplate,
    },
    {
      id: "creative",
      name: "Creative Template",
      description: "A stylish and unique resume to showcase your creativity.",
      PreviewComponent: CreativeTemplate,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Resume Templates</h1>
      <p className="text-gray-600 mb-12">
        Select from our professionally designed templates to make your resume stand out.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <div className="mb-4 max-h-[400px] overflow-auto border border-gray-300 rounded">
              <template.PreviewComponent formData={sampleData} pdfMode={false} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{template.name}</h2>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <a
                href={`/?tab=templates&template=${template.id}`}
                className="inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                Use This Template
                </a>
          </div>
        ))}
      </div>
    </main>
  );
}
