export default function CreativeTemplate({ formData, pdfMode = false }) {
  return (
    <div
      className={`max-w-a4 mx-auto bg-white ${pdfMode ? "" : "shadow border rounded"}`}
    >
      <div className="grid grid-cols-4" style={{ height: pdfMode ? '297mm' : 'auto' }}>
        {/* Sidebar */}
        <aside className="col-span-1 bg-blue-800 text-white p-6" style={{ height: pdfMode ? '297mm' : 'auto' }}>
          <div className="flex flex-col">
            {formData.profileImageUrl && (
              <div className="mb-4">
                <img
                  src={formData.profileImageUrl}
                  alt="Profile"
                  className="w-32 h-32 object-cover rounded-full border border-gray-300"
                />
              </div>
            )}
            <h1 className="text-3xl font-bold mb-1">{formData.name}</h1>
            {formData.title && (
              <p className="text-sm mb-2 italic">{formData.title}</p>
            )}
            {formData.email && <p className="text-xs">{formData.email}</p>}
            {formData.phone && <p className="text-xs">{formData.phone}</p>}
            {formData.address && <p className="text-xs">{formData.address}</p>}

            {/* Languages */}
            {formData.languages && (
              <div className="mt-6">
                <h2 className="text-sm font-bold uppercase mb-1">Languages</h2>
                <ul className="list-disc list-inside text-xs">
                  {formData.languages.split(",").map((lang, idx) => (
                    <li key={idx}>{lang.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {formData.skills && (
              <div className="mt-6">
                <h2 className="text-sm font-bold uppercase mb-1">Skills</h2>
                <ul className="list-disc list-inside text-xs">
                  {formData.skills.split(",").map((skill, idx) => (
                    <li key={idx}>{skill.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-3 p-8 flex flex-col">
          {formData.summary && (
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2 uppercase tracking-wider text-blue-800">
                Profile
              </h2>
              <p className="text-gray-800 whitespace-pre-line">{formData.summary}</p>
            </section>
          )}

          {Array.isArray(formData.experience) && formData.experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2 uppercase tracking-wider text-blue-800">
                Experience
              </h2>
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-700">
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

          {Array.isArray(formData.education) && formData.education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2 uppercase tracking-wider text-blue-800">
                Education
              </h2>
              {formData.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-700">
                    {edu.institution} | {edu.location}
                  </p>
                  <p className="text-xs text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Declaration */}
          {formData.declaration && (
            <section className="mt-8">
              <h2 className="text-xl font-bold mb-2 uppercase tracking-wider text-blue-800">
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
        </main>
      </div>
    </div>
  );
}