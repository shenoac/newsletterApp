function renderParagraphs(str, color = "#000") {
  if (!str) return "";
  return str
    .split(/\n\s*\n/) // Split by blank lines (paragraphs)
    .map(
      (para) =>
        `<p style="margin: 0 0 10px 0; line-height:1.4;text-justify: inter-word;hyphens: auto;text-align-last: left; color:${color}; font-family:'Lato', Arial, sans-serif;">
          ${para.replace(/\n/g, "<br>")}
        </p>`
    )
    .join("");
}

export function getEmailHtml({
  month,
  year,
  founderMessage,
  // founderPhotoUrl,
  quote,
  festivals,
  productTitle,
  productDescription,
  teamHighlight,
  teamName,
  teamImageUrl,
  volunteerName,
  volunteerBio,
  volunteerImageUrl,
  whyVolunteer,
}) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Newsletter Template</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
    <style>
      body, table, td, th, p, a, span, div, h1, h2, h3, h4, h5, h6 {
        font-family: 'Lato', Arial, sans-serif !important;
      }
      :root {
        color: #000;
      }
    </style>
  </head>
  <body style="margin:0; padding:0; font-family: 'Lato', Arial, sans-serif; color:#000; background-color:#dcebf7;">
    <!-- Outer Wrapper Table -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#dcebf7;">
      <tr>
        <td align="center" style="padding:0px;">
          <table width="800" cellpadding="0" cellspacing="0" border="0" style="background-color: #bcf2fc; margin:0 auto;">
            <!-- Header -->
            <tr>
              <td align="center" style="padding: 20px;">
                <h1
                  style="
                    margin: 0;
                    font-size: 54px;
                    line-height: 0px;
                    font-weight: bold;
                    color: #0a154f;
                    letter-spacing: 1px;
                    font-family: 'Lato', Arial, sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 2.4px;
                    padding-top: 10px;
                  "
                >
                  Monthly Newsletter
                </h1>
              </td>
            </tr>
            <!-- logo + title row -->
            <tr>
              <td align="center" style="padding: 0px;">
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <!-- text cell -->
                    <td style="vertical-align: middle; padding: 0 20px;">
                      <img
                        src="https://drive.usercontent.google.com/download?id=1kE6NfovyUI9XuUsxKD9xzQlV0clDGzpM&export=view&authuser=0"
                        alt="Keelworks Logo"
                        width="720"
                        style="display: block; border: 0; height: auto;"
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Container -->
    <table width="800" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(to bottom, #dcebf7 0%, #6a9bbd 100%); margin:0 auto; padding:20px;">
      <!-- Main Content -->
      <tr>
        <td>
          <!-- Quote / About Section -->
          <table width="95%" cellpadding="0" cellspacing="0" border="0" style="margin:20px auto;background: linear-gradient(
                            to bottom,
                            #3f5689 0%,
                            #1b2e59 100%
                          ); color:#ffffff; border-radius:8px; box-shadow: 0 0 0 1px rgba(71, 71, 71, 0.1);">
            <tr>
              <td style="position:relative; padding:40px 20px;">
                <p style="margin:0 0 0 0; font-family:'Lato', Arial, sans-serif; font-size: 18px; line-height: 1.4;">${quote}</p>
              </td>
            </tr>
          </table>

          <!-- Founder’s Message Section -->
          <table
            width="95%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              margin: 20px auto;
              background-color: #e3ecf3;
              border-radius: 8px;
              box-shadow: 0 0 0 1px rgba(71, 71, 71, 0.1);
            "
          >
            <!-- Heading row -->
            <tr>
              <td style="padding: 20px 20px 0;">
                <h2
                  style="
                    margin: 0;
                    font-size: 24px;
                    color: #1a1a1a;
                    font-weight: 600;
                    text-transform: uppercase;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  Founder’s Message for ${month} ${year}
                </h2>
              </td>
            </tr>
            <!-- Content row -->
            <tr>
              <td
                style="
                  padding: 10px 20px 20px;
                  color: #333333;
                  font-family: 'Lato', Arial, sans-serif;
                  line-height: 1.4;
                  text-align: left;
                "
              >
                <img
                  src="https://keelworks.org/assets/Thomas-G-DHSeUrwJ.jpg"
                  alt="Founder Portrait"
                  align="right"
                  style="
                    float: right;
                    width: 200px;
                    max-width: 100%;
                    margin: 0 0 20px 20px;
                    border-radius: 8px;
                    display: block;
                  "
                />
                ${renderParagraphs(founderMessage, "#000")}

              </td>
            </tr>
          </table>

          <!-- Donate section -->
          <table
            width="95%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              margin: 20px auto;
              padding: 10px;
              background-color: #5a8fb0;
              color: #333;
              border-radius: 8px;
            "
          >
            <tr>
              <td align="center" valign="middle" style="padding: 20px">
                <h2
                  style="
                    margin: 0;
                    line-height: 0.1;
                    color: #1a1a1a;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  Your support makes a difference
                </h2>
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle" style="padding: 0 20px 20px">
                <p
                  style="
                    margin: 0;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1.4;
                    color: #333333;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  The work we do wouldn't be possible without the
                  generosity of our supporters.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle" style="padding: 0 20px 20px">
                <a
                        href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
                        style="
                          display: inline-block;
                          padding: 12px 24px 18px 24px; /* extra bottom padding for text */
                          background: linear-gradient(
                            to bottom,
                            #001d5e 0%,
                            #263d78 100%
                          );
                          color: #ffffff;
                          text-decoration: none;
                          font-weight: 600;
                          border-radius: 25px;
                          font-size: 20px;
                          white-space: nowrap;
                          letter-spacing: 1px;
                          text-align: center;
                          line-height: 1.2;
                        "
                      >
                        <span style="display:block;">DONATE NOW</span>
                        <span style="display:block; font-size: 10px; font-weight: 400; color: #c5cfff; margin-top: 2px;">
                          Help transorm lives today!
                        </span>
                      </a>
              </td>
            </tr>
          </table>

          <!-- Festivals / Highlights Section -->
          <table
            width="95%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              margin: 20px auto;
              background: linear-gradient(to bottom, #7da7c5 0%, #2f5f7d 100%);
              border-radius: 8px;
              padding: 20px;
              box-shadow: 0 0 0 1px rgba(71, 71, 71, 0.1);
            "
          >
            <tr>
              <td
                align="center"
                style="
                  padding: 20px;
                  border-radius: 8px 8px 0 0;
                  text-align: left;
                "
              >
                <h2
                  style="
                    color: #fff;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  Community & Event Highlights
                </h2>
              </td>
            </tr>
            ${festivals
              .map(
                (festival) => `
                  <tr>
                    <td style="padding: 10px;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr style="background: #426b8d;">
                          <!-- Left: Text Section -->
                          <td
                            style="
                              width: 60%;
                              padding: 15px;
                              border-radius: 8px 0 0 8px;
                              color: #000;
                              vertical-align: top;
                              font-family: 'Lato', Arial, sans-serif;
                            "
                          >
                            <h3 style="margin-bottom: 10px; color: #f9f9f9; font-weight: 600; font-family: 'Lato', Arial, sans-serif;">
                              ${festival.title}
                            </h3>
                            <p style="margin: 0; color: #f9f9f9; font-family: 'Lato', Arial, sans-serif;">
                              ${festival.description}
                            </p>
                          </td>
                          <!-- Right: Image Section -->
                          <td
                            style="
                              width: 40%;
                              padding: 15px;
                              border-radius: 0 8px 8px 0;
                              vertical-align: top;
                              text-align: right;
                            "
                          >
                            <img
                              src="${festival.imageUrl}"
                              alt="${festival.alt || ""}"
                              style="
                                width: 100%;
                                max-width: 180px;
                                height: auto;
                                border-radius: 8px;
                                object-fit: contain;
                                display: block;
                              "
                            />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                `
              )
              .join("")}
          </table>

          <!-- Product Section -->
          <table
            width="95%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              margin: 20px auto;
              background: linear-gradient(to bottom, #a4c6dd 0%, #507da3 100%);
              border-radius: 8px;
              padding: 20px;
              box-shadow: 0 0 0 1px rgba(71, 71, 71, 0.1);
            "
          >
            <tr>
              <td style="padding: 20px">
                <h2
                  style="
                    color: #fff;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  ${productTitle}
                </h2>
                ${renderParagraphs(productDescription, "#fff")}
              </td>
            </tr>
          </table>

          <!-- Team Section -->
          <table
            width="95%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              margin: 20px auto;
              background: #3a5a70;
              border-radius: 8px;
              padding: 20px;
              box-shadow: 0 0 0 1px rgba(71, 71, 71, 0.1);
            "
          >
            <tr>
              <td style="padding: 20px">
                <h2
                  style="
                    color: #fff;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  ${teamName}
                </h2>
                <img
                  src="https://drive.usercontent.google.com/download?id=${teamImageUrl}&export=view&authuser=0"
                  alt="Team Portrait"
                  style="
                    display: block;
                    margin: 10px auto;
                    max-width: 80%;
                    border-radius: 8px;
                  "
                />
                ${renderParagraphs(teamHighlight, "#fff")}
              </td>
            </tr>
          </table>

          <!-- Volunteer/Associate Section -->
          <table
            width="95%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              margin: 20px auto;
              background: #4a6a83;
              border-radius: 8px;
              box-shadow: 0 0 0 1px rgba(71, 71, 71, 0.1);
            "
          >
            <tr>
              <td style="padding-top: 20px; padding-left: 20px">
                <h2
                  style="
                    color: #fff;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  Associate of the Month
                </h2>
              </td>
            </tr>
            <tr>
              <td
                style="
                  padding: 20px;
                  text-align: left;
                  color: #fff;
                  font-family: 'Lato', Arial, sans-serif;
                "
              >
                <img
                  src="https://drive.usercontent.google.com/download?id=${volunteerImageUrl}&export=view&authuser=0"
                  alt="Volunteer Image"
                  align="left"
                  style="
                    float: left;
                    width: 200px;
                    max-width: 100%;
                    margin: 0 20px 0px 0;
                    border-radius: 8px;
                    display: block;
                  "
                />
                <h2
                  style="
                    margin-top: 0;
                    margin-bottom: 8px;
                    font-size: 20px;
                    line-height: 1.2;
                    font-family: 'Lato', Arial, sans-serif;
                  "
                >
                  ${volunteerName}
                </h2>
                ${renderParagraphs(volunteerBio, "#fff")}
                <span style="font-size: 20px;font-weight: 600; margin-top: 5px;font-family:'Lato', Arial, sans-serif;color:#fff;">Why ${volunteerName}?</span>
                ${renderParagraphs(whyVolunteer, "#fff")}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- End Container -->
    <table width="800" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(to bottom, #dcebf7 0%, #6a9bbd 100%); margin:0 auto;">
      <!-- Footer -->
      <tr>
        <td>
          <table width="800" cellpadding="0" cellspacing="0" border="0" id="footer" style="background-color:#1f2e3d; color:#ffffff; margin:0 auto; padding:20px; font-family: 'Lato', Arial, sans-serif;">
            <!-- Footer Top -->
            <tr>
              <td style="border-top: 1px solid rgba(255,255,255,0.3); border-bottom: 1px solid rgba(255,255,255,0.3); padding:15px 15px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <!-- Footer Links -->
                    <td style="width:50%; vertical-align:top;">
                      <a href="https://keelworks.org/about" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">About Us</a>
                      <a href="https://keelworks.org/getinvolved" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">Get Involved</a>
                      <a href="https://keelworks.org/oursolutions" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">Our Solutions</a>
                      <a href="https://keelworks.org/blog" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">Blog</a>
                      <a href="https://keelworks.org/success_stories" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">Success Stories</a>
                      <a href="https://keelworks.org/getinvolved#faq" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">FAQ</a>
                      <a href="https://keelworks.org/non_dis_policy" style="display:block; margin-bottom:5px; text-decoration:none; color:#ffffff; font-weight:500; font-size:0.95rem; font-family: 'Lato', Arial, sans-serif;">Non-discrimination Policy</a>
                    </td>
                    <td style="
                      width:50%;
                      vertical-align:top;
                      text-align:right;
                      padding-top:10px;
                    ">
                      <h3 style="margin:0 0 6px; font-size:1.1rem; color:#ffffff; font-family: 'Lato', Arial, sans-serif;">
                        Support and Follow Us
                      </h3>
                      <div>
                        <!-- Donate -->
                        <a
                          href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
                          style="
                            display: inline-block;
                            margin-left: 5px;
                            text-decoration: none;
                          "
                        >
                          <img
                            src="https://drive.usercontent.google.com/download?id=1u0TULL1XwZIhwPC084TzQeYYUYhe3RJH&export=view&authuser=0"
                            alt="Donate"
                            width="24"
                            height="24"
                            style="
                              display: inline-block;
                              border: 0;
                              outline: none;
                            "
                          />
                        </a>
                        <!-- LinkedIn -->
                        <a
                          href="https://www.linkedin.com/company/keelworks-foundation/"
                          style="
                            display: inline-block;
                            margin-left: 5px;
                            text-decoration: none;
                          "
                        >
                          <img
                            src="https://drive.usercontent.google.com/download?id=155v9Havzd39zHRdKE1UdjvDhCYP7ODoZ&export=view&authuser=0"
                            alt="LinkedIn"
                            width="24"
                            height="24"
                            style="
                              display: inline-block;
                              border: 0;
                              outline: none;
                              filter: brightness(0) invert(1);
                            "
                          />
                        </a>
                        <!-- Facebook -->
                        <a
                          href="https://www.facebook.com/TheKeelWorks"
                          style="
                            display: inline-block;
                            margin-left: 5px;
                            text-decoration: none;
                          "
                        >
                          <img
                            src="https://drive.usercontent.google.com/download?id=1vMJ0Z7MSf_CJUqrKOOH5Z5yYhWk45fiE&export=view&authuser=0"
                            alt="Facebook"
                            width="24"
                            height="24"
                            style="
                              display: inline-block;
                              border: 0;
                              outline: none;
                            "
                          />
                        </a>
                        <!-- Youtube -->
                        <a
                          href="https://keelworks.org/contactus"
                          style="
                            display: inline-block;
                            margin-left: 5px;
                            text-decoration: none;
                          "
                        >
                          <img
                            src="https://drive.usercontent.google.com/download?id=16RUVQYX21WQ3HW0WoxJ8BeaTzHSOXZdT&export=view&authuser=0"
                            alt="Youtube"
                            width="24"
                            height="24"
                            style="
                              display: inline-block;
                              border: 0;
                              outline: none;
                            "
                          />
                        </a>
                        <!-- Instagram -->
                        <a
                          href="https://www.instagram.com/thekeelworks/"
                          style="
                            display: inline-block;
                            margin-left: 5px;
                            text-decoration: none;
                          "
                        >
                          <img
                            src="https://drive.usercontent.google.com/download?id=1ihpPifzkBKZaMLXwftBE1WExhp9bV8vE&export=view&authuser=0"
                            alt="Instagram"
                            width="24"
                            height="24"
                            style="
                              display: inline-block;
                              border: 0;
                              outline: none;
                            "
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer Bottom -->
            <tr>
                    <td style="text-align: center; padding: 15px 0">
                      <a
                        href="https://keelworks.org"
                        style="
                          text-decoration: none;
                          color: #ffffff;
                          font-weight: 600;
                          margin-right: 12px;
                        "
                      >
                        <span>VISIT US</span>
                      </a>
                      <span style="color: #ffffff; opacity: 0.6; font-weight: 400; margin: 0 12px;font-size: 24px;">|</span>
                      <a
                        href="#"
                        style="
                          text-decoration: none;
                          color: #ffffff;
                          font-weight: 600;
                          margin-left: 12px;
                        "
                      >
                        <span>To unsubscribe please email to info@keelworks.org</span>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    
                    <td style="text-align: center; padding: 15px 0">
                      <p style="display: inline; margin: 0; font-size: 12px;">
                        © 2025 Keelworks. All rights reserved.
                      </p>
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
