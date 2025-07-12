// app/resume-template.jsx
export default function ResumeTemplate({ formData }) {
  return (
    <html>
      <head>
        <style>{`
          body { font-family: Arial, sans-serif; padding: 2rem; }
          h1 { color: #1E40AF; }
          h2 { margin-top: 1rem; }
          p { margin: 0.25rem 0; }
        `}</style>
      </head>
      <body>
        <h1>{formData.name}</h1>
        <p>{formData.title}</p>
        <p>{formData.email} | {formData.phone} | {formData.address}</p>

        <h2>Summary</h2>
        <p>{formData.summary}</p>

        <h2>Experience</h2>
        <p>{formData.experience}</p>

        <h2>Education</h2>
        <p>{formData.education}</p>

        <h2>Skills</h2>
        <p>{formData.skills}</p>
      </body>
    </html>
  );
}
