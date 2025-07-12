export default function ClassicTemplate({ formData, pdfMode = false }) {
  return (
    <div
      className={`max-w-a4 mx-auto px-12 py-10 bg-white ${
        pdfMode ? "" : "shadow border border-gray-200 rounded"
      }`}
      style={{ fontFamily: "Times New Roman, serif", lineHeight: "1.5" }}
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
          <h1 className="text-4xl font-bold text-gray-900">{formData.name}</h1>
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

      {/* Summary */}
      {formData.summary && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-800 whitespace-pre-line">{formData.summary}</p>
        </section>
      )}

      {/* Experience */}
      {Array.isArray(formData.experience) && formData.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            Experience
          </h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-sm text-gray-800">
                {exp.company} | {exp.location}
              </p>
              <p className="text-xs text-gray-600 mb-1">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-800 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {Array.isArray(formData.education) && formData.education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            Education
          </h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-800">
                {edu.institution} | {edu.location}
              </p>
              <p className="text-xs text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {formData.skills && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            {formData.skills.split(",").map((skill, index) => (
              <li key={index} className="capitalize">{skill.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {formData.languages && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            Languages
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            {formData.languages.split(",").map((lang, index) => (
              <li key={index}>{lang.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {/* References */}
      {formData.references && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            References
          </h2>
          <p className="text-gray-800 whitespace-pre-line">{formData.references}</p>
        </section>
      )}

      {/* Declaration */}
      {formData.declaration && (
        <section className="mb-5">
          <h2 className="text-lg font-bold mb-1 text-gray-900 uppercase tracking-wide">
            Declaration
          </h2>
          <p className="text-gray-800 whitespace-pre-line">{formData.declaration}</p>
        </section>
      )}

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
