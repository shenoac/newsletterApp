import React from "react";
import socialmediateam from "../../assets/images/Newsletters/MayNewsletter/socialmediateam.png";
import volunteer from "../../assets/images/Newsletters/MayNewsletter/volunteer.png";
import founder from "../../assets/images/Newsletters/MayNewsletter/Thomas-G.jpg";
import logo from "../../assets/images/Newsletters/MayNewsletter/keelworks_logo.jpg";

export default function NewsletterTemplate() {
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
    <div className="pt-16 bg-[#dcebf7] text-black font-sans min-h-screen pb-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto mt-0 bg-[#bcf2fc] rounded-none rounded-t-2xl">
        <div className="px-6 pt-8 pb-2 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0a154f] uppercase tracking-wide text-center">
            Monthly Newsletter
          </h1>
          <img
            src={logo}
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
            &quot;Never doubt that a small group of thoughtful committed
            citizens can change the world: indeed, it’s the only thing that ever
            has.” - Margaret Mead
          </p>
        </section>

        {/* Founder Message */}
        <section className="w-[95%] mx-auto my-6 bg-[#e3ecf3] rounded-2xl shadow p-8">
          <h2 className="text-xl font-semibold text-[#1a1a1a] uppercase mb-4">
            Founder’s Message for May 2025
          </h2>
          <img
            src={founder}
            alt="Founder Portrait"
            className="
              float-right w-48 ml-6 mb-4 rounded-2xl border shadow-lg
              "
          />
          {renderParagraphs(
            `The KeelWorks Foundation will not persist without real funding. We need significant donations to build the programs that will make the most impact on society. Our software projects are struggling due to high turnover. If we could pay competitive wages, we'd keep our people longer.

I need to be paid so I can stop borrowing to make ends meet. And when I can no longer do this job, someone will need to take over, and that person will HAVE to be paid.

The KeelMaster program has the potential to change lives, but it won't see day without the software and the key people needed to run the program. The program has three critical features that leverage change: needs analysis with mitigation, core competency courses, and mutual support (Together, we can do anything!!). This same program designed to get the most challenged to work will also be a leadership program for at risk high school students. And we hope to market the core competency courses to support leadership training for organizations.

If we can get 100 people to ask ten people to each donate $100 each, we'd have a nice start. We are working on a project to appeal to the wealthiest Americans to contribute. We must get that project up and running within a few weeks. That project will need seed money for events, speakers, and marketing. Please help.`,
            "#333"
          )}

          <div className="clear-right"></div>
        </section>

        {/* Donation CTA */}
        <section className="w-[95%] mx-auto my-6 bg-[#5a8fb0] rounded-2xl shadow p-8 text-center text-[#1a1a1a]">
          <h2 className="text-2xl uppercase font-bold mb-3 tracking-wider">
            Your support makes a difference
          </h2>
          <p className="text-base font-medium mb-4">
            The work we do wouldn&apos;t be possible without the generosity of
            our supporters. Your donation helps us get people to work.
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
        <section className="w-[95%] mx-auto my-6 bg-[#3a5a70] text-white rounded-2xl shadow p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold uppercase mb-6">
            Social Media Team
          </h2>
          <div className="w-full flex justify-center mb-8">
            <img
              src={socialmediateam}
              alt="Team Portrait"
              className="w-full max-w-[600px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full max-w-3xl text-left space-y-4">
            {renderParagraphs(
              `Oscar Campos, the project manager for the Social Media team, shares insights into the team's work and his experiences at KeelWorks.

Working at KeelWorks has been one of the most meaningful experiences of my professional life. I initially joined the social media team to help elevate the organization's digital voice, but what I’ve gained is much more. I’ve had the chance to work alongside people who are genuinely passionate about the mission, experiment with new ideas, and make a tangible contribution to something bigger.

What we're creating isn’t just content—it’s a narrative that brings the KeelWorks mission to life and helps humanize the brand. The content we produce builds trust and connects with people in a meaningful way. From developing the content calendar to executing each post, we’ve been intentional in ensuring that everything reflects KeelWorks values.

One of the most interesting challenges has been finding the balance between structure and spontaneity, especially while working remotely as a team. This challenge has strengthened our collaboration and helped us form lasting professional relationships.

This experience has reaffirmed my passion for blending strategy and storytelling. It helps that we believe in the mission and recognize the importance of our product to support the mission. I've found it interesting to see how impactful marketing can be even without big budgets—what matters most is a clear, purposeful mission. I appreciate that at KeelWorks, we are creative partners, making a real impact.`,
              "#fff"
            )}
          </div>
        </section>

        {/* Volunteer/Associate Section */}
        <section className="w-[95%] mx-auto my-6 bg-[#426b8d] rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold text-white uppercase mb-4">
            Associate of the Month
          </h2>
          <img
            src={volunteer}
            alt="Sam Xavier"
            className="float-left w-48 mr-6 mb-4 object-cover rounded-2xl border shadow-lg"
          />
          <h3 className="text-white text-lg font-semibold mb-2">Sam Xavier</h3>
          {renderParagraphs(
            `I am Sam Xavier, a project manager leading a team building a knowledge base called KeelCompass. This application is designed to capture solutions and challenges that people at KeelWorks face so that once solved, the solutions can be available to anyone following behind. What we know for certain is that the same challenges will be met again and again. We also know that initial solutions will be partial and ill-formed. This system will allow solutions to evolve and improve as we learn. Instead of inventing the wheel over and over, with this tool we can solve problems once and allow knowledge to mature.

At KeelWorks, leading this project, helping define the product roadmap, coordinating across product, UX, engineering, and QA teams, and driving progress toward key milestones is expanding my capability. It has forced me to be more intentional in my planning, prioritizing what truly matters, and making sure our product delivers real value. This experience strengthened my ability to manage ambiguity, lead cross-functional collaboration, and keep projects aligned to both vision and execution. It is a hands-on, fast-paced environment and this makes me more confident now as a project manager.

Why Sam?
The first is his effective communication and competent leadership. His ever present consistency - always being present is essential. He is leading one of the most challenging and important projects at KeelWorks. The second is the voice of those around him recommending him for this honor. This peer support and his team progress are conspicuous marks of exceptional leadership.

Congratulations and thank you, Sam!!`,
            "#fff"
          )}
          <div className="clear-both" />
        </section>
      </div>

      {/* Footer */}
      {/* <footer className="bg-[#1f2e3d] text-white mt-8 p-8 rounded-t-2xl">
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
      </footer> */}
    </div>
  );
}
