function renderParagraphs(str, color = "#000") {
  if (!str) return "";
  return str
    .split(/\n\s*\n/) // Split by blank lines into paragraphs
    .map(
      (para) => `
      <p style="
        margin: 0 0 10px 0;
        line-height: 1.4;
        text-align: left;
        color: ${color};
        font-family: 'Lato', Arial, sans-serif;
        font-size: 16px;
      ">
        ${para.replace(/\n/g, "<br>")}
      </p>
    `
    )
    .join("");
}

export function getEmailHtml({
  month,
  year,
  founderMessage,
  quote,
  productTitle,
  productDescription,
  teamHighlight,
  teamName,
  teamImageUrl,
  volunteerName,
  volunteerBio,
  volunteerImageUrl,
  whyVolunteer,
  associateName,
  diversityDetails,
  associateImageUrl,
}) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Monthly Newsletter</title>
    <!-- Web fonts may not load in all email clients; still included for clients that do -->
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap" rel="stylesheet" />
    <style>
      /* Media queries for responsive design */
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mobile-padding {
          padding: 10px !important;
        }
        .mobile-text {
          font-size: 14px !important;
        }
        .mobile-title {
          font-size: 24px !important;
        }
        .mobile-header {
          font-size: 28px !important;
        }
        .mobile-image {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 0 15px 0 !important;
          float: none !important;
          display: block !important;
        }
        .mobile-center {
          text-align: center !important;
        }
        .mobile-button {
          display: block !important;
          width: 80% !important;
          padding: 15px 20px !important;
          font-size: 18px !important;
        }
        .mobile-footer-links {
          display: block !important;
          text-align: center !important;
          padding-right: 0 !important;
          padding-bottom: 20px !important;
          width: 100% !important;
        }
        .mobile-footer-social {
          display: block !important;
          text-align: center !important;
          padding-top: 0 !important;
          width: 100% !important;
        }
        .mobile-footer-row {
          display: block !important;
          width: 100% !important;
        }
        .mobile-unsubscribe-text {
          font-size: 12px !important;
          line-height: 1.4 !important;
        }
      }
      
      @media only screen and (max-width: 480px) {
        .mobile-header {
          font-size: 24px !important;
        }
        .mobile-title {
          font-size: 20px !important;
        }
        .mobile-text {
          font-size: 13px !important;
        }
      }
    </style>
  </head>
  <body style="
      margin: 0;
      padding: 0;
      background-color: #dcebf7;
      -webkit-text-size-adjust: 100%;
    "
  >

    <!-- Wrapper to center everything -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 20px 10px;">
      <tr>
        <td align="center">

          <!-- Container -->
          <table role="presentation" width="800" cellpadding="0" cellspacing="0" border="0" class="container" style="
              width: 100% !important;
              max-width: 800px;
              margin: 0 auto;
              background: #bcf2fc;
              border-collapse: collapse;
            "
          >
            <!-- Header Title -->
            <tr>
              <td align="center" class="mobile-padding" style="padding: 20px;">
                <h1 class="mobile-header" style="
                    margin: 0;
                    font-family: 'Raleway', Arial, sans-serif;
                    font-size: 34px;
                    font-weight: 600;
                    line-height: 1.2;
                    color: #0a154f;
                  "
                >
                  Monthly Newsletter
                </h1>
              </td>
            </tr>

            <!-- Logo -->
            <tr>
              <td align="center" class="mobile-padding" style="padding: 0 20px 20px;">
                <img
                  src="https://keelworks.org/assets/keelworks_logo-CAApWs9G.jpg"
                  alt="Keelworks Foundation logo"
                  role="img"
                  width="720"
                  style="
                    display: block;
                    width: 100%;
                    max-width: 720px;
                    height: auto;
                    border: 0;
                  "
                />
              </td>
            </tr>

            <!-- Main Content Wrapper -->
            <tr>
              <td style="
                  background: #538699
                  padding: 20px;
                "
                class="mobile-padding"
              >

                <!-- Quote Section -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #0c1769c7;
                    border-radius: 8px;
                    margin: 20px 0;
                    box-shadow: 0 0 0 1px rgba(71,71,71,0.1);
                  "
                >
                  <tr>
                    <td class="mobile-padding" style="padding: 40px 20px;">
                      <h2 class="mobile-title" style="
                          margin: 0;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          line-height: 1.2;
                          color: #ffffff;
                        "
                      >
                        ${quote}
                      </h2>
                    </td>
                  </tr>
                </table>

                <!-- Founder's Message -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #869ba9;
                    border-radius: 8px;
                    margin: 20px 0;
                    box-shadow: 0 0 0 1px rgba(71,71,71,0.1);
                  "
                >
                  <tr>
                    <td class="mobile-padding" style="padding: 20px;">
                      <h2 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          color: #ffffff;
                          line-height: 1.2;
                        "
                      >
                        Founder's Message for ${month} ${year}
                      </h2>
                      <div style="color: #ffffff;">
                        <img
                          src="https://keelworks.org/assets/Thomas-G-DHSeUrwJ.jpg"
                          alt="Portrait of the Founder"
                          role="img"
                          align="right"
                          class="mobile-image"
                          style="
                            display: block;
                            width: 200px;
                            max-width: 100%;
                            height: auto;
                            margin: 0 0 20px 20px;
                            border-radius: 8px;
                          "
                        />
                        ${renderParagraphs(founderMessage, "#ffffff")}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Donate CTA -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #5d98ae;
                    border-radius: 8px;
                    margin: 20px 0;
                  "
                >
                  <tr>
                    <td align="center" class="mobile-padding" style="padding: 20px;">
                      <h2 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          color: #ffffff;
                          line-height: 1.2;
                        "
                      >
                        Your support makes a difference
                      </h2>
                      <p class="mobile-text" style="
                          margin: 0 0 20px;
                          font-family: 'Lato', Arial, sans-serif;
                          font-size: 16px;
                          line-height: 1.4;
                          color: #ffffff;
                        "
                      >
                        The work we do wouldn't be possible without the generosity of our supporters.
                      </p>
                      <a
                        href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link"
                        role="button"
                        aria-label="Donate to Keelworks Foundation"
                        class="mobile-button"
                        style="
                          display: inline-block;
                          padding: 12px 36px;
                          background: #060e3a;
                          color: #ffffff !important;
                          text-decoration: none !important;
                          font-family: 'Lato', Arial, sans-serif;
                          font-size: 20px;
                          font-weight: 600;
                          line-height: 1.2;
                          border-radius: 25px;
                          white-space: nowrap;
                          text-align: center;
                        "
                      >
                        Donate Now
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Diversity Section -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #5486b8;
                    border-radius: 8px;
                    margin: 20px 0;
                    box-shadow: 0 0 0 1px rgba(71,71,71,0.1);
                  "
                >
                  <tr>
                    <td class="mobile-padding mobile-center" style="padding: 20px; color: #ffffff;">
                      <h2 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          line-height: 1.2;
                        "
                      >
                        Diversity at Keelworks
                      </h2>
                      <img
                        src="https://drive.usercontent.google.com/download?id=${associateImageUrl}&export=view"
                        alt="Photo of ${associateName}"
                        role="img"
                        class="mobile-image"
                        style="
                          display: block;
                          float: left;
                          width: 200px;
                          max-width: 100%;
                          height: auto;
                          margin: 0 20px 20px 0;
                          border-radius: 8px;
                        "
                      />
                      <h3 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 24px;
                          font-weight: 500;
                          line-height: 1.2;
                        "
                      >
                        ${associateName}
                      </h3>
                      ${renderParagraphs(diversityDetails, "#ffffff")}
                    </td>
                  </tr>
                </table>

                <!-- Product Section -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #253c52;
                    border-radius: 8px;
                    margin: 20px 0;
                    box-shadow: 0 0 0 1px rgba(71,71,71,0.1);
                  "
                >
                  <tr>
                    <td class="mobile-padding" style="color: #ffffff;padding: 20px;">
                      <h2 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          line-height: 1.2;
                        "
                      >
                        ${productTitle}
                      </h2>
                      ${renderParagraphs(productDescription, "#ffffff")}
                    </td>
                  </tr>
                </table>

                <!-- Team Section -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #0a1d2f;
                    border-radius: 8px;
                    margin: 20px 0;
                    box-shadow: 0 0 0 1px rgba(71,71,71,0.1);
                  "
                >
                  <tr>
                    <td class="mobile-padding" style="color: #ffffff; padding: 20px;">
                      <h2 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          line-height: 1.2;
                        "
                      >
                        ${teamName}
                      </h2>
                      <img
                        src="https://drive.usercontent.google.com/download?id=${teamImageUrl}&export=view"
                        alt=""
                        role="img"
                        style="
                          display: block;
                          margin: 10px auto;
                          width: 80%;
                          max-width: 80%;
                          height: auto;
                          border-radius: 8px;
                        "
                      />
                      ${renderParagraphs(teamHighlight, "#ffffff")}
                    </td>
                  </tr>
                </table>

                <!-- Volunteer Spotlight -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="
                    background: #5486b8;
                    border-radius: 8px;
                    margin: 20px 0;
                    box-shadow: 0 0 0 1px rgba(71,71,71,0.1);
                  "
                >
                  <tr>
                    <td class="mobile-padding mobile-center" style="padding: 20px; color: #ffffff;">
                      <h2 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 28px;
                          font-weight: 500;
                          line-height: 1.2;
                        "
                      >
                        Associate of the Month
                      </h2>
                      <img
                        src="https://drive.usercontent.google.com/download?id=${volunteerImageUrl}&export=view"
                        alt="Photo of ${volunteerName}"
                        role="img"
                        class="mobile-image"
                        style="
                          display: block;
                          float: left;
                          width: 200px;
                          max-width: 100%;
                          height: auto;
                          margin: 0 20px 20px 0;
                          border-radius: 8px;
                        "
                      />
                      <h3 class="mobile-title" style="
                          margin: 0 0 10px;
                          font-family: 'Raleway', Arial, sans-serif;
                          font-size: 24px;
                          font-weight: 500;
                          line-height: 1.2;
                        "
                      >
                        ${volunteerName}
                      </h3>
                      ${renderParagraphs(volunteerBio, "#ffffff")}
                      <strong class="mobile-text" style="
                          display: block;
                          margin: 10px 0 5px;
                          font-family: 'Lato', Arial, sans-serif;
                          font-size: 20px;
                          color: #ffffff;
                        "
                      >
                        Why ${volunteerName}?
                      </strong>
                      ${renderParagraphs(whyVolunteer, "#ffffff")}
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr ">
              <td class="mobile-padding" style="background-color: #1f2e3d; padding: 20px; color: #ffffff;">
                <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.3); margin: 0 0 20px 0;" />
                <!-- Footer Links and Social - Stacked on mobile -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr class="mobile-footer-row">
                    <td class="mobile-footer-links" style="vertical-align: top; padding-right: 20px; width: 50%;">
                      <nav aria-label="Footer links">
                        <p style="margin: 0 0 8px;"><a href="https://keelworks.org/about" style="color: #ffffff; text-decoration: none;">About Us</a></p>
                        <p style="margin: 0 0 8px;"><a href="https://keelworks.org/getinvolved" style="color: #ffffff; text-decoration: none;">Get Involved</a></p>
                        <p style="margin: 0 0 8px;"><a href="https://keelworks.org/oursolutions" style="color: #ffffff; text-decoration: none;">Our Solutions</a></p>
                        <p style="margin: 0 0 8px;"><a href="https://keelworks.org/blog" style="color: #ffffff; text-decoration: none;">Blog</a></p>
                        <p style="margin: 0 0 8px;"><a href="https://keelworks.org/success_stories" style="color: #ffffff; text-decoration: none;">Success Stories</a></p>
                      </nav>
                    </td>
                    <td class="mobile-footer-social" style="vertical-align: top; text-align: right; width: 50%;">
                      <p style="margin: 0 0 8px; font-size: 18px; font-family: 'Raleway', Arial, sans-serif;">Follow Us</p>
                      <p style="margin: 0;">
                       <a href="https://www.every.org/keelworks-foundation" aria-label="Donate via Every.org" style="margin: 0 5px; text-decoration:none; display: inline-block;">
                     <img src="https://drive.usercontent.google.com/download?id=1u0TULL1XwZIhwPC084TzQeYYUYhe3RJH&export=view&authuser=0" alt="Donate icon" width="24" height="24" role="img" style="display:inline-block; border:0;" />
                   </a>
                   <a href="https://www.linkedin.com/company/keelworks-foundation/" aria-label="Keelworks LinkedIn page" style="margin: 0 5px; text-decoration:none; display: inline-block;">
                     <img src="https://drive.usercontent.google.com/download?id=155v9Havzd39zHRdKE1UdjvDhCYP7ODoZ&export=view&authuser=0" alt="LinkedIn icon" width="24" height="24" role="img" style="display:inline-block; border:0; filter:brightness(0) invert(1);" />
                   </a>
                   <a href="https://www.facebook.com/TheKeelWorks" aria-label="Keelworks Facebook page" style="margin: 0 5px; text-decoration:none; display: inline-block;">
                     <img src="https://drive.usercontent.google.com/download?id=1vMJ0Z7MSf_CJUqrKOOH5Z5yYhWk45fiE&export=view&authuser=0" alt="Facebook icon" width="24" height="24" role="img" style="display:inline-block; border:0;" />
                   </a>
                   <a href="https://keelworks.org/contactus" aria-label="Keelworks YouTube channel" style="margin: 0 5px; text-decoration:none; display: inline-block;">
                     <img src="https://drive.usercontent.google.com/download?id=16RUVQYX21WQ3HW0WoxJ8BeaTzHSOXZdT&export=view&authuser=0" alt="YouTube icon" width="24" height="24" role="img" style="display:inline-block; border:0;" />
                   </a>
                   <a href="https://www.instagram.com/thekeelworks/" aria-label="Keelworks Instagram profile" style="margin: 0 5px; text-decoration:none; display: inline-block;">
                     <img src="https://drive.usercontent.google.com/download?id=1ihpPifzkBKZaMLXwftBE1WExhp9bV8vE&export=view&authuser=0" alt="Instagram icon" width="24" height="24" role="img" style="display:inline-block; border:0;" />
                   </a>
                      </p>
                    </td>
                  </tr>
                 </table>

                <!-- Visit Us / Unsubscribe Row -->

                  <tr role="presentation">
                    <td align="center" style="padding:15px 0;background-color: #1f2e3d">
                      <table
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        align="center"
                        style="margin: 0 auto; width: 100%;"
                      >
                        <tr>
                          <td align="center" style="padding:5px;">
                            <a
                              href="https://keelworks.org"
                              aria-label="Visit Keelworks website"
                              style="
                                color:#fff;
                                text-decoration:none;
                                font-weight:600;
                                display: inline-block;
                              "
                            >
                              VISIT US
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding:5px;">
                            <span class="mobile-unsubscribe-text" style="
                              color:#fff;
                              text-decoration:none;
                              font-weight:600;
                              font-size: 14px;
                              line-height: 1.2;
                            ">
                              To unsubscribe please email info@keelworks.org
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr role="presentation">
                    <td align="center" style="padding:15px 0;background-color: #1f2e3d">
                      <p style="margin:0; font-size:12px; color:#ffffff;">
                        © 2025 Keelworks. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>

  </body>
</html>
`;
}
