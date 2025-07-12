export default function TemplateSelector({ template, setTemplate }) {
  const templates = [
    { id: "modern", name: "Modern", description: "Clean and professional" },
    { id: "classic", name: "Classic", description: "Traditional and elegant" },
    { id: "creative", name: "Creative", description: "For Creative uses" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Select Template</h3>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => setTemplate(tpl.id)}
            className={`border rounded-lg p-4 text-left hover:border-blue-500 transition ${
              template === tpl.id
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 bg-white"
            }`}
          >
            <h4 className="font-medium">{tpl.name}</h4>
            <p className="text-sm text-gray-500">{tpl.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
