export async function GET(request) {
  const robots = `
    User-agent: *
    Allow: /

    Sitemap: https://makearesumenow.com/sitemap.xml
  `;

  return new Response(robots.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
