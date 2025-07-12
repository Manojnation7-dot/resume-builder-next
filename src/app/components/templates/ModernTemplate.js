export default function ModernTemplate({ formData, pdfMode = false }) {
  return (
    <div
      className={`max-w-a4 mx-auto p-8 bg-white ${pdfMode ? "" : "shadow border rounded"}`}
      style={{ fontFamily: "Arial, sans-serif", minHeight: "297mm" }}
    >
      {/* Header */}
        <header className="mb-6 flex items-center gap-4">
          {formData.profileImageUrl && (
            <img
              src={formData.profileImageUrl}
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full border border-gray-300"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold text-blue-700">{formData.name}</h1>
            {formData.title && (
              <p className="text-lg italic text-gray-800">{formData.title}</p>
            )}
            <p className="text-sm text-gray-700 mt-2">
              {formData.email && `${formData.email} | `}
              {formData.phone && `${formData.phone} | `}
              {formData.address}
            </p>
          </div>
        </header>

        <hr className="my-4 border-gray-300" />
      
      {/* Profile Summary */}
      {formData.summary && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Summary</h2>
          <p className="text-gray-700 whitespace-pre-line">{formData.summary}</p>
        </section>
      )}

      {/* Experience */}
      {Array.isArray(formData.experience) && formData.experience.length > 0 && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Experience</h2>
          <div className="space-y-4">
            {formData.experience.map((exp, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-bold text-gray-900">
                  {exp.title} at {exp.company}
                </p>
                <p className="text-sm text-gray-600">
                  {exp.location} | {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {Array.isArray(formData.education) && formData.education.length > 0 && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Education</h2>
          <div className="space-y-4">
            {formData.education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-bold text-gray-900">{edu.degree}</p>
                <p className="text-sm text-gray-600">
                  {edu.institution} | {edu.location}
                </p>
                <p className="text-sm text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {formData.skills && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Skills</h2>
          <p className="text-gray-700">{formData.skills}</p>
        </section>
      )}

      {/* Languages */}
      {formData.languages && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Languages</h2>
          <p className="text-gray-700">{formData.languages}</p>
        </section>
      )}

      {/* References */}
      {formData.references && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">References</h2>
          <p className="text-gray-700">{formData.references}</p>
        </section>
      )}

      {/* Declaration */}
      {formData.declaration && (
        <section className="mb-6 break-inside-avoid pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Declaration</h2>
          <p className="text-gray-700 whitespace-pre-line">{formData.declaration}</p>
        </section>
      )}

      {/* Footer */}
        {/* Footer */}
            <div className="mt-12 flex justify-between text-right break-inside-avoid">
            <p className="text-sm text-gray-600 mb-1">
              Date: {new Date().toLocaleDateString()}
            </p>
            {formData.name && (
              <p className="text-sm font-semibold mt-2">( {formData.name} )</p>
            )}
          </div>
    </div>
  );
}
