export function getPreviewHtml({
  founderMessage,
  //   founderPhotoUrl,
  festivals,
  productTitle,
  productDescription,
  //   productImageUrl,
  teamHighlight,
  teamImageUrl,
  volunteerName,
  volunteerBio,
  volunteerImageUrl,
  volunteerWhy,
}) {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Newsletter Template</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              color: #333;
              line-height: 1.6;
            }
            .yellow-text { color: #f1c810; }
            .blue-text { color: #2995ef; }
            .heading-bg-blue {
              background-color: #2995ef;
              padding-top: 10px;
              padding-bottom: 10px;
              margin-bottom: 10px;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              max-width: 50px;
              margin-bottom: 10px;
            }
            h1 {
              font-size: 2.5em;
              margin: 0;
              color: #1a5276;
            }
            h2 {
              color: #1a5276;
              margin-top: 30px;
              border-bottom: 2px solid #1a5276;
              padding-bottom: 5px;
            }
            h3 { color: #2874a6; }
            .boat-image {
              width: 80%;
              max-height: 300px;
              display: block;
              margin: 0 auto;
            }
            .donate-banner {
              background-color: #ecc721;
              padding: 20px;
              text-align: center;
              margin: 20px 0;
              border-radius: 5px;
            }
            .donate-button {
              display: inline-block;
              background-color: #e94235;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
            }
            .section {
              margin-bottom: 30px;
              clear: both;
            }
            .founders-message {
              padding: 15px;
              background-color: #f9f9f9;
              border-left: 4px solid #1a5276;
            }
            .grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
            .border {
              border: 1px solid #ccc;
            }
            .rounded { border-radius: 5px; }
            .footer {
              background-color: #1e1c1c;
              color: wheat;
              text-align: center;
              margin-top: 50px;
              padding-top: 20px;
              padding-bottom: 10px;
              border-top: 1px solid #ddd;
              font-size: 0.9em;
            }
            @media (max-width: 600px) {
              .grid {
                grid-template-columns: 1fr;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <header>
              <div class="header-top">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" style="font-size: 14px; color: #f1c810; font-weight: bold;">
                      March 2025
                    </td>
                    <td align="right" style="font-size: 14px;">
                      <a href="https://keelworks.org" style="text-decoration: none;">
                        Keelworks.org
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <h1 class="yellow-text">NEWSLETTER</h1>
              <table align="center" cellpadding="0" cellspacing="0" style="margin: 0 auto; text-align: center;">
                <tr>
                  <td>
                    <img
                      src="https://drive.usercontent.google.com/download?id=1cU2t-In9g8mVx0FF3YTZ--ohKzXf-jlD&export=view&authuser=0"
                      alt="Keelworks Foundation Logo"
                      class="logo"
                    />
                    <h2 style="margin: 0; color: #1a5276;">KEELWORKS FOUNDATION</h2>
                  </td>
                </tr>
              </table>
            </header>
            <img src="https://drive.usercontent.google.com/download?id=1axyVBbprKIY8S2Rnug-8z0fKrC4jmI38&export=view&authuser=0" alt="KeelWorks" class="boat-image" />
            <p style="text-align: center; font-size: 12px; color: #333;">
              Image Credit: “Gandellow..." by MrComplexity CC -BY-SA-4.0
            </p>
            <!-- Founder's Message Section -->
            <div class="section">
              <h2 class="yellow-text heading-bg-blue">Founder's Message</h2>
              <div class="founders-message">
                <p>${founderMessage}</p>
              </div>
            </div>
            <!-- Donate button section -->
            <section class="donate-banner section">
              <h3 class="blue-text">Your support makes a difference</h3>
              <p>
                The work we do wouldn't be possible without the generosity of our supporters.
                Your donation helps us get people to work.
              </p>
              <a
                href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
                class="donate-button"
              >DONATE NOW</a>
            </section>
            <!-- Festivals Section -->
            <section class="my-8">
              <h2 class="yellow-text heading-bg-blue">Festivals</h2>
              <div class="grid">
                ${festivals
                  .map(
                    (festival) => `
                      <div class="border rounded" style="padding: 15px;">
                        <img src="${festival.imageUrl}" alt="${festival.title}" style="width: 100%; height: auto; object-fit: cover; margin-bottom: 10px;" />
                        <h3 class="text-xl font-semibold">${festival.title}</h3>
                        <p>${festival.description}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </section>
            <!-- Product Highlight Section -->
            <section class="my-8">
              <h2 class="yellow-text heading-bg-blue">Product Highlight</h2>
              <div class="border rounded" style="padding: 15px;">
                <h3 class="text-xl font-semibold">${productTitle}</h3>
                <p>${productDescription}</p>
              </div>
            </section>
            <!-- Team Highlight Section -->
            <section class="my-8">
              <h2 class="yellow-text heading-bg-blue">Team Highlight</h2>
              <div class="border rounded" style="padding: 15px;">
                <img src="${teamImageUrl}" alt="Team Highlight" style="width: 100%; height: auto; object-fit: cover; margin-bottom: 10px;" />
                <p>${teamHighlight}</p>
              </div>
            </section>
            <!-- Volunteer of the Month Section -->
            <section class="my-8">
              <h2 class="yellow-text heading-bg-blue">Volunteer of the Month</h2>
              <div class="flex" style="align-items: start; border: 1px solid #ccc; padding: 15px; border-radius: 5px;">
                <img src="${volunteerImageUrl}" alt="${volunteerName}" style="width: 96px; height: 96px; border-radius: 50%; margin-right: 15px;" />
                <div>
                  <h3 class="text-xl font-semibold">${volunteerName}</h3>
                  <p>${volunteerBio}</p>
                  <h4 style="margin-top: 10px; font-weight: bold;">Why ${volunteerName}?</h4>
                  <p>${volunteerWhy}</p>
                </div>
              </div>
            </section>
            <div class="footer">
              <span>To unsubscribe please email to info@keelworks.org</span>
              <p>© 2025 Keelworks. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
}
