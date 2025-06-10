import React from "react";

export default function NewsletterTemplate() {
  const festivals = [
    {
      title: "May 1 – International Workers' Day / May Day",
      description:
        "This day serves as an important reminder of the ongoing fight for fair labor conditions and economic justice.",
      imageUrl:
        "https://img.freepik.com/free-vector/flat-international-workers-day-illustration_23-2149372608.jpg",
    },
    {
      title: "May 5 – Cinco de Mayo (Mexico/USA)",
      description:
        "Cinco de Mayo marks Mexico’s triumph over France at the Battle of Puebla in 1862. In the United States, it has evolved into a vibrant celebration of Mexican-American culture, featuring delicious food and rich heritage.",
      imageUrl:
        "https://img.freepik.com/free-vector/cinco-de-mayo-with-hat-cactus_23-2148487489.jpg",
    },
    {
      title: "May 12 – Vesak / Buddha Day (Buddhism)",
      description:
        "Vesak is a significant day for Buddhists, celebrating the birth, enlightenment, and passing of Gautama Buddha. It’s a time for acts of kindness, meditation, and deep reflection.",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-illustration-buddha-vesak_23-2148476620.jpg",
    },
    {
      title: "May 16 – Malcolm X Day (USA – some states)",
      description:
        "Malcolm X Day pays tribute to the life and legacy of the civil rights icon Malcolm X. It encourages us to reflect on issues of justice, equality, and the empowerment of Black communities.",
      imageUrl:
        "https://drive.usercontent.google.com/download?id=147ymUCKHjKFaazZBi8KcQCfS7rm8Yvtg&export=view&authuser=0",
    },
    {
      title: "May 25 – Africa Day",
      description:
        "Africa Day celebrates the establishment of the Organization of African Unity in 1963. It’s a moment to honor African unity, progress, and the rich cultural diversity of the continent.",
      imageUrl:
        "https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149367537.jpg",
    },
    {
      title: "May 29 – Ascension Day (Christianity)",
      description:
        "Ascension Day takes place 40 days after Easter, commemorating the moment Jesus Christ ascended into heaven. Many Christians observe this day with special church services and prayers.",
      imageUrl:
        "https://img.freepik.com/free-vector/gradient-ascension-day-background_23-2149365136.jpg",
    },
    {
      title: "May - Jewish American Heritage Month",
      description:
        "Jewish American Heritage Month is celebrated annually in May in the United States, honors the contributions of Jewish Americans to the nation's history, culture, and society. It recognizes their contributions in science, arts, politics, and civil rights, as well as their rich heritage and enduring resilience.",
      imageUrl:
        "https://drive.usercontent.google.com/download?id=1ljVdETYZn0bfvQEORYIFSgOr6KukqdFz&export=view&authuser=0",
    },
  ];

  // Helper: Render string as multiple paragraphs, split by double line breaks.
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
      // <p key={idx} style={{ color, margin: 0, marginBottom: 10, lineHeight: 1.4,text-justify: inter-word,hyphens: auto,text-align-last: left }}>
      //   {para.split('\n').map((line, i) => (
      //     <React.Fragment key={i}>
      //       {line}
      //       {i < para.split('\n').length - 1 && <br />}
      //     </React.Fragment>
      //   ))}
      // </p>
    ));
  }

  return (
    <div className="bg-[#dcebf7] text-black font-sans min-h-screen pb-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto mt-0 bg-[#bcf2fc] rounded-none rounded-t-2xl">
        <div className="px-6 pt-8 pb-2 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#0a154f] uppercase tracking-wide pt-2 pb-2">
            Monthly Newsletter
          </h1>
          <img
            src="https://iili.io/3kOC4SI.jpg"
            alt="Keelworks Logo"
            className="w-[90%] mx-auto my-2 rounded"
            style={{ maxWidth: 720 }}
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#dcebf7] to-[#6a9bbd] px-4 py-10 shadow-lg rounded-b-2xl">
        {/* Quote / About Section */}
        <section className="w-[95%] mx-auto my-6 bg-gradient-to-b from-[#3f5689] to-[#1b2e59] text-white rounded-2xl shadow p-8 text-lg">
          <p className="m-0">
            "Never doubt that a small group of thoughtful committed citizens can
            change the world: indeed, it’s the only thing that ever has.” -
            Margaret Mead
          </p>
        </section>

        {/* Founder Message */}
        <section className="w-[95%] mx-auto my-6 bg-[#e3ecf3] rounded-2xl shadow flex flex-col md:flex-row items-start p-8">
          <div className="flex-1 pr-0 md:pr-8">
            <h2 className="text-xl font-semibold text-[#1a1a1a] uppercase mb-2">
              Founder’s Message
            </h2>
            {renderParagraphs(
              `The KeelWorks Foundation will not persist without real funding. We need significant donations to build the programs that will make the most impact on society. Our software projects are struggling due to high turnover. If we could pay competitive wages, we'd keep our people longer.

I need to be paid so I can stop borrowing to make ends meet. And when I can no longer do this job, someone will need to take over, and that person will HAVE to be paid.

The KeelMaster program has the potential to change lives, but it won't see day without the software and the key people needed to run the program. The program has three critical features that leverage change: needs analysis with mitigation, core competency courses, and mutual support (Together, we can do anything!!). This same program designed to get the most challenged to work will also be a leadership program for at risk high school students. And we hope to market the core competency courses to support leadership training for organizations.

If we can get 100 people to ask ten people to each donate $100 each, we'd have a nice start. We are working on a project to appeal to the wealthiest Americans to contribute. We must get that project up and running within a few weeks. That project will need seed money for events, speakers, and marketing. Please help.`,
              "#333"
            )}
          </div>
          <div className="md:w-48 w-full flex-shrink-0 flex justify-center mt-6 md:mt-0">
            <img
              src="https://drive.usercontent.google.com/download?id=1qO9g2-6uOZSeb3uMEsxwJa1ebAdvFwld&export=view&authuser=0"
              alt="Founder Portrait"
              className="w-48 h-48 object-cover rounded-2xl border shadow-lg"
            />
          </div>
        </section>

        {/* Donation CTA */}
        <section className="w-[95%] mx-auto my-6 bg-[#5a8fb0] rounded-2xl shadow p-8 text-center text-[#1a1a1a]">
          <h2 className="text-2xl uppercase font-bold mb-3 tracking-wider">
            Your support makes a difference
          </h2>
          <p className="text-base font-medium mb-4">
            The work we do wouldn't be possible without the generosity of our
            supporters. Your donation helps us get people to work.
          </p>
          <a
            href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              pt-3
              pb-[18px]
              px-6
              bg-gradient-to-b from-[#001d5e] to-[#263d78]
              text-white
              text-xl
              font-bold
              rounded-full
              whitespace-nowrap
              tracking-[1px]
              text-center
              leading-[1.2]
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            <span className="block">DONATE NOW</span>
            <span className="block text-[10px] font-normal text-[#c5cfff] mt-[2px]">
              Help transform lives today!
            </span>
          </a>
        </section>

        {/* Festivals Highlights */}
        <section className="w-[95%] mx-auto my-6 rounded-2xl shadow bg-gradient-to-b from-[#8fb2c8] to-[#446a88] overflow-hidden">
          <h2 className="text-xl font-bold text-white bg-gradient-to-b from-[#7da7c5] to-[#2f5f7d] rounded-t-2xl p-4 text-center uppercase">
            Community &amp; Event Highlights
          </h2>
          <div className="flex flex-col space-y-6 p-4">
            {festivals.map((festival, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row bg-[#426b8d] rounded-2xl shadow-md overflow-hidden"
              >
                {/* Left: Text */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {festival.title}
                  </h3>
                  <p className="text-white">{festival.description}</p>
                </div>
                {/* Right: Image */}
                <div className="md:w-2/5 flex justify-end items-center p-4">
                  <img
                    src={festival.imageUrl}
                    alt={festival.title}
                    className="w-full max-w-[180px] rounded-2xl object-contain shadow"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Section */}
        <section className="w-[95%] mx-auto my-6 bg-gradient-to-b from-[#a4c6dd] to-[#507da3] text-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold uppercase mb-4">
            Web-based Portfolio Builder
          </h2>
          {renderParagraphs(
            `We are excited to introduce a web-based portfolio builder designed to make job-hunting easier for UX designers, instructional designers, and graphic artists. This tool addresses the challenge that participants needing a portfolio face: most portfolio templates simply do not fit a specific need.

Many roles, especially those requiring some creative component, require an effective portfolio, and templates and school guidance are not effectively supporting the need. The goal is to simplify and enable effective portfolio creation, supporting our efforts at getting people to work. Since employment for many requires an effective portfolio, and templates rarely support this, we are making what is needed.

The UX team has performed extensive research to understand needs and support that effective design. While most portfolio templates require excessive clicks and rarely support efficient and effective display, this application will ensure effective portfolio performance.

Tool Features: This application allows users to pick the type of portfolio and to upload components to their portfolio. The functionality will be user tested and effective.

The design for the instructional design portion is complete, but the UX component is much more complex. Progress is steady but slower than anticipated. The project is still in the research and planning phase and will enter the design stage soon. We expect the tool to be ready for development by the end of May or the beginning of June 2025, with an official release by the end of this year.`,
            "#fff"
          )}
        </section>

        {/* Team Section */}
        <section className="w-[95%] mx-auto my-6 bg-[#3a5a70] to-[#446a88] text-white rounded-2xl shadow p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold uppercase mb-4">
            Social Media Team
          </h2>
          <img
            src="https://drive.usercontent.google.com/download?id=1_TFuJekAglWIIlyFtfSc43NaI-jE-F-H&export=view&authuser=0"
            alt="Team Portrait"
            className="mb-4 w-64 max-w-full rounded-2xl shadow"
          />
          {renderParagraphs(
            `Oscar Campos, the project manager for the Social Media team, shares insights into the team's work and his experiences at KeelWorks.

Working at KeelWorks has been one of the most meaningful experiences of my professional life. I initially joined the social media team to help elevate the organization's digital voice, but what I’ve gained is much more. I’ve had the chance to work alongside people who are genuinely passionate about the mission, experiment with new ideas, and make a tangible contribution to something bigger.

What we're creating isn’t just content—it’s a narrative that brings the KeelWorks mission to life and helps humanize the brand. The content we produce builds trust and connects with people in a meaningful way. From developing the content calendar to executing each post, we’ve been intentional in ensuring that everything reflects KeelWorks values.

One of the most interesting challenges has been finding the balance between structure and spontaneity, especially while working remotely as a team. This challenge has strengthened our collaboration and helped us form lasting professional relationships.

This experience has reaffirmed my passion for blending strategy and storytelling. It helps that we believe in the mission and recognize the importance of our product to support the mission. I've found it interesting to see how impactful marketing can be even without big budgets—what matters most is a clear, purposeful mission. I appreciate that at KeelWorks, we are creative partners, making a real impact.`,
            "#fff"
          )}
        </section>

        {/* Volunteer/Associate Section */}
        <section className="w-[95%] mx-auto my-6 bg-[#4a6a83] text-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0">
            <img
              src="https://drive.usercontent.google.com/download?id=1dasRxLlRJgRS_cf6Z_k04dzd_Vq263G4&export=view&authuser=0"
              alt="Volunteer"
              className="w-48 h-48 object-cover rounded-2xl border shadow"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold uppercase mb-2">Sam Xavier</h2>
            {renderParagraphs(
              `I am Sam Xavier, a project manager leading a team building a knowledge base called KeelCompass. This application is designed to capture solutions and challenges that people at KeelWorks face so that once solved, the solutions can be available to anyone following behind. What we know for certain is that the same challenges will be met again and again. We also know that initial solutions will be partial and ill-formed. This system will allow solutions to evolve and improve as we learn. Instead of inventing the wheel over and over, with this tool we can solve problems once and allow knowledge to mature.

At KeelWorks, leading this project, helping define the product roadmap, coordinating across product, UX, engineering, and QA teams, and driving progress toward key milestones is expanding my capability. It has forced me to be more intentional in my planning, prioritizing what truly matters, and making sure our product delivers real value. This experience strengthened my ability to manage ambiguity, lead cross-functional collaboration, and keep projects aligned to both vision and execution. It is a hands-on, fast-paced environment and this makes me more confident now as a project manager.

Why Sam?
The first is his effective communication and competent leadership. His ever present consistency - always being present is essential. He is leading one of the most challenging and important projects at KeelWorks. The second is the voice of those around him recommending him for this honor. This peer support and his team progress are conspicuous marks of exceptional leadership.

Congratulations and thank you, Sam!!`,
              "#fff"
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f2e3d] text-white mt-8 p-8 rounded-t-2xl">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <a
              href="https://keelworks.org/about"
              className="block text-sm font-medium mb-1 hover:underline"
            >
              About Us
            </a>
            <a
              href="https://keelworks.org/getinvolved"
              className="block text-sm font-medium mb-1 hover:underline"
            >
              Get Involved
            </a>
            <a
              href="https://keelworks.org/oursolutions"
              className="block text-sm font-medium mb-1 hover:underline"
            >
              Our Solutions
            </a>
            <a
              href="https://keelworks.org/blog"
              className="block text-sm font-medium mb-1 hover:underline"
            >
              Blog
            </a>
            <a
              href="https://keelworks.org/success_stories"
              className="block text-sm font-medium mb-1 hover:underline"
            >
              Success Stories
            </a>
            <a
              href="https://keelworks.org/getinvolved#faq"
              className="block text-sm font-medium mb-1 hover:underline"
            >
              FAQ
            </a>
            <a
              href="https://keelworks.org/non_dis_policy"
              className="block text-sm font-medium hover:underline"
            >
              Non-discrimination Policy
            </a>
          </div>
          <div className="text-right flex flex-col items-end">
            <h3 className="font-semibold mb-2">Support and Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate"
              >
                <img
                  src="https://drive.usercontent.google.com/download?id=1u0TULL1XwZIhwPC084TzQeYYUYhe3RJH&export=view&authuser=0"
                  alt="Donate"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/keelworks-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="https://drive.usercontent.google.com/download?id=155v9Havzd39zHRdKE1UdjvDhCYP7ODoZ&export=view&authuser=0"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.facebook.com/TheKeelWorks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="https://drive.usercontent.google.com/download?id=1vMJ0Z7MSf_CJUqrKOOH5Z5yYhWk45fiE&export=view&authuser=0"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://keelworks.org/contactus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img
                  src="https://drive.usercontent.google.com/download?id=16RUVQYX21WQ3HW0WoxJ8BeaTzHSOXZdT&export=view&authuser=0"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/thekeelworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="https://drive.usercontent.google.com/download?id=1ihpPifzkBKZaMLXwftBE1WExhp9bV8vE&export=view&authuser=0"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="font-semibold mr-4 hover:underline">
            UNSUBSCRIBE
          </a>
          <span>© 2025 Keelworks. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
