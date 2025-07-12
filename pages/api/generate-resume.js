import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import React from "react";
import { renderToString } from "react-dom/server";
import ModernTemplate from "../../src/app/components/templates/ModernTemplate";
import ClassicTemplate from "../../src/app/components/templates/ClassicTemplate";
import CreativeTemplate from "../../src/app/components/templates/CreativeTemplate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { formData, template } = req.body;

  console.log("✅ Received formData:", formData);
  console.log("✅ Using template:", template);

  let browser = null;

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath || undefined,
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    let htmlContent;

    switch (template) {
      case "modern":
        htmlContent = renderToString(
          <ModernTemplate formData={formData} pdfMode={true} />
        );
        break;
      case "classic":
        htmlContent = renderToString(
          <ClassicTemplate formData={formData} pdfMode={true} />
        );
        break;
      case "creative":
        htmlContent = renderToString(
          <CreativeTemplate formData={formData} pdfMode={true} />
        );
        break;
      default:
        throw new Error(`Unknown template: ${template}`);
    }

    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            @page { margin: 0; }
            body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          </style>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;

    await page.setContent(fullHtml, { waitUntil: ["networkidle0", "domcontentloaded"] });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.status(200).end(pdfBuffer);

    console.log("✅ PDF generated successfully! Buffer length:", pdfBuffer.length);
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    res.status(500).json({ message: "PDF generation failed", error: error.message });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}
