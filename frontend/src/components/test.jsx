import React from "react";

export default function Test() {
  // Helper: split text into paragraphs
  function renderParagraphs(str, color = "#000") {
    if (!str) return null;
    return str.split(/\n\s*\n/).map((para, idx) => (
      <p
        key={idx}
        style={{
          color,
          margin: 0,
          marginBottom: 10,
          lineHeight: 1.4,
          textJustify: "inter-word",
          hyphens: "auto",
          textAlignLast: "left",
        }}
      >
        {para.split("\n").map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    ));
  }

  return (
    <div
      className="bg-[#dcebf7] pt-5 pb-10 min-h-screen"
      style={{ WebkitTextSizeAdjust: "100%" }}
    >
      {/* Header wrapper */}
      <div className="max-w-full sm:max-w-[800px] mx-auto bg-[#bcf2fc] rounded-t-2xl overflow-hidden shadow-lg px-4 sm:px-6">
        <div className="text-center py-5">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0a154f]"
            style={{ lineHeight: 1.2 }}
          >
            Monthly Newsletter
          </h1>
        </div>
        <div className="px-4 pb-4">
          <img
            src="https://keelworks.org/assets/keelworks_logo-CAApWs9G.jpg"
            alt="Keelworks Foundation logo"
            className="w-full max-w-[720px] mx-auto h-auto block"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-full sm:max-w-[800px] mx-auto bg-gradient-to-b from-[#538699] to-[#263f48] p-4 sm:p-5 rounded-b-2xl shadow-lg mt-4">
        {/* Quote */}
        <div className="w-full bg-gradient-to-b from-[#0c1769c7] to-[#3828579e] rounded-lg p-6 sm:p-8 shadow-md mb-6">
          <h2 className="text-xl sm:text-2xl font-medium text-white leading-tight">
            “When we are no longer able to change the situation, we are
            challenged to change ourselves.” – Viktor Frankl
          </h2>
        </div>

        {/* Founder’s Message */}
        <section className="flex flex-col md:flex-row-reverse bg-gradient-to-b from-[#869ba9] to-[#19394f] rounded-lg p-4 sm:p-5 shadow-md mb-6 text-white">
          <img
            src="https://keelworks.org/assets/Thomas-G-DHSeUrwJ.jpg"
            alt="Portrait of the Founder"
            className="w-full md:w-48 h-64 rounded-lg mb-4 md:mb-0 md:ml-4 border"
          />
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-medium mb-3">
              Founder’s Message for June 2025
            </h2>
            {renderParagraphs(
              `Good June Folks! This month we are celebrating the start of our 18th year. With over 1000 interns each year and the overwhelming majority leaving with jobs, we are making a difference. Most of you reading this newsletter have played a part in making this happen, and I am very grateful for your support.

We continue to make progress on the applications needed to allow us to launch the KeelMaster program. While that program has always been about getting the most career challenged people to work, we also see it supporting high school students.

We are developing the curriculum and courses for the core competencies, and we are confident that teaching those core competencies will help them on their journey. challenged unemployed students to competencies self-identity, critical thinking, and assertiveness emotional intelligence.

I can’t end a monthly message without once again asking for your financial support. We sincerely appreciate.`,
              "#ffffff"
            )}
          </div>
        </section>

        {/* Donate CTA */}
        <div className="w-full bg-gradient-to-r from-[#5d98ae] to-[#263f48] rounded-lg p-4 sm:p-5 text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-medium text-white mb-2">
            Your support makes a difference
          </h2>
          <p className="text-sm sm:text-base text-white mb-3">
            The work we do wouldn't be possible without the generosity of our
            supporters.
          </p>
          <a
            href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link"
            role="button"
            aria-label="Donate to Keelworks Foundation"
            className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#060e3a] to-[#374269] rounded-full font-semibold text-base sm:text-xl text-white whitespace-nowrap"
          >
            Donate Now
          </a>
        </div>

        {/* Diversity Section */}
        <section className="flex flex-col md:flex-row bg-gradient-to-b from-[#5486b8b5] to-[#0a1d2fbf] rounded-lg p-4 sm:p-5 shadow-md mb-6 text-white">
          <img
            src="diversity.png"
            alt="Photo of associate"
            className="w-full md:w-48 h-64 mb-4 md:mb-0 md:mr-4 rounded-2xl border shadow-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Faridnuzzaman Tajim
            </h3>
            {renderParagraphs(
              `What sets me apart is my nontraditional educational journey. After pausing formal schooling in Bangladesh after 8th grade, I turned to self-directed learning while working remotely with international organizations like TED and KeelWorks. Now, as I prepare to study in the U.S. to earn both a high school diploma and an associate degree, I bring cultural adaptability, self-motivation, and a fresh, creative perspective to every team I join.

At KeelWorks, I’ve always felt respected, supported, and truly welcomed. The open-minded team creates a safe, empowering space where I’m encouraged to share ideas and grow. It’s not about where you come from—it’s about what you bring to the table. There’s no jealousy, competition, or negativity—just trust, encouragement, and collaboration.
`,
              "#ffffff"
            )}
          </div>
        </section>

        {/* Product Section */}
        <div className="w-full bg-gradient-to-b from-[#253c52] to-[#5486b8] rounded-lg p-4 sm:p-5 shadow-md mb-6 text-white">
          <h2 className="text-xl sm:text-2xl font-medium mb-3">
            Monthly Newsletter Application
          </h2>
          {renderParagraphs(
            `Neeraj Bodhale, the Project Manager for the Monthly Newsletter App Team shares his thoughts about the project.

The Monthly Newsletter App will make the newsletter publication process faster, easier, and more efficient.

Currently, this process is each month.

The Monthly Newsletter Application streamline process Once released, it will make publishing quicker, easier, and more.

The first iteration has been completed with the rollout of the new template in the May edition of the Monthly Newsletter. The project is in the testing phase evaluating functionality, gathering feedback, and making improvements. Future iterations will focus on enhancing user experience and expanding features.`,
            "#ffffff"
          )}
        </div>

        {/* Team Section */}
        <div className="w-full bg-gradient-to-b from-[#0a1d2f] to-[#5486b8] rounded-lg p-4 sm:p-5 shadow-md mb-6 text-white">
          <h2 className="text-xl sm:text-2xl font-medium mb-3">
            Monthly Newsletter Application Team
          </h2>
          <img
            src="team.png"
            alt="Monthly Newsletter Application Team"
            className="w-full h-auto rounded-lg mb-4"
          />
          {renderParagraphs(
            `Neeraj Bodhale, Monthly Newsletter Application team project Manager:

Proud to lead a creative and committed team. Their collaboration and ownership made the June newsletter a success. Grateful for everyone's effort!`,
            "#ffffff"
          )}
        </div>

        {/* Volunteer Spotlight */}
        <section className="flex flex-col md:flex-row bg-gradient-to-b from-[#5486b8] to-[#0a1d2f] rounded-lg p-4 sm:p-5 shadow-md text-white">
          <img
            src="associate.png"
            alt="Photo of Gauri Namdev Parab"
            className="w-full md:w-48 h-64 mb-4 md:mb-0 md:mr-4 rounded-lg border"
          />
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-medium mb-3">
              Associate of the Month
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Gauri Namdev Parab
            </h3>
            {renderParagraphs(
              `Serving as a Marketing Associate here since August of '24, this experience has been enriching. Teaming with deeply committed associates in diverse roles has been challenging and exhilarating.

Especially important is exposure to the strategic discussions and the application of my learning in real-world marketing. I’ve worked with talented people, applied skills learned in school, and learned from peers. I’ve gained confidence having accepted responsibility, successfully met those responsibilities, and enjoyed the respect of my peers. The range of tasks is exhilarating, and I love being at the center of such a diverse and competent team. I love being part of a team that depends on me and that I depend on.

I am conscious of the many at this foundation worthy of this recognition. I am humbled and honored to be the recipient of this honor.`,
              "#ffffff"
            )}
            <strong className="block mt-3 mb-1">Why Gauri Namdev Parab?</strong>
            {renderParagraphs(
              `Gauri is a dedicated and consistent performer. We depend on her for the monthly layout and content structuring for our newsletter. She is as regular as the sunrise and sunset and just as efficient. She quietly goes about her work, accepting revisions and critiques with equanimity. She makes us better and we could not accomplish our monthly newsletters without her.`,
              "#ffffff"
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      {/* <footer className="max-w-full sm:max-w-[800px] mx-auto bg-[#1f2e3d] text-white rounded-t-2xl p-4 sm:p-5 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <nav aria-label="Footer links">
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://keelworks.org/about"
                  className="text-white no-underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://keelworks.org/getinvolved"
                  className="text-white no-underline"
                >
                  Get Involved
                </a>
              </li>
              <li>
                <a
                  href="https://keelworks.org/oursolutions"
                  className="text-white no-underline"
                >
                  Our Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://keelworks.org/blog"
                  className="text-white no-underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://keelworks.org/success_stories"
                  className="text-white no-underline"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@keelworks.org"
                  className="text-white no-underline"
                >
                  Unsubscribe
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-right space-x-3">
            <a
              href="https://www.every.org/keelworks-foundation"
              aria-label="Donate via Every.org"
            >
              <img
                src="https://drive.usercontent.google.com/download?id=1u0TULL1XwZIhwPC084TzQeYYUYhe3RJH&export=view"
                alt="Donate icon"
                className="inline-block w-6 h-6 filter invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/keelworks-foundation/"
              aria-label="Keelworks LinkedIn page"
            >
              <img
                src="https://drive.usercontent.google.com/download?id=155v9Havzd39zHRdKE1UdjvDhCYP7ODoZ&export=view"
                alt="LinkedIn icon"
                className="inline-block w-6 h-6 filter invert"
              />
            </a>
            <a
              href="https://www.facebook.com/TheKeelWorks"
              aria-label="Keelworks Facebook page"
            >
              <img
                src="https://drive.usercontent.google.com/download?id=1vMJ0Z7MSf_CJUqrKOOH5Z5yYhWk45fiE&export=view"
                alt="Facebook icon"
                className="inline-block w-6 h-6 filter invert"
              />
            </a>
            <a
              href="https://keelworks.org/contactus"
              aria-label="Keelworks YouTube channel"
            >
              <img
                src="https://drive.usercontent.google.com/download?id=16RUVQYX21WQ3HW0WoxJ8BeaTzHSOXZdT&export=view"
                alt="YouTube icon"
                className="inline-block w-6 h-6 filter invert"
              />
            </a>
            <a
              href="https://www.instagram.com/thekeelworks/"
              aria-label="Keelworks Instagram profile"
            >
              <img
                src="https://drive.usercontent.google.com/download?id=1ihpPifzkBKZaMLXwftBE1WExhp9bV8vE&export=view"
                alt="Instagram icon"
                className="inline-block w-6 h-6 filter invert"
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-xs sm:text-sm">
          <p>© 2025 Keelworks. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}
