// export function getreactComponent({
//   month,
//   year,
//   founderMessage,
//   founderPhotoUrl,
//   quote,
//   productTitle,
//   productDescription,
//   teamName,
//   teamHighlight,
//   teamImageUrl,
//   volunteerName,
//   volunteerBio,
//   whyVolunteer,
//   volunteerImageUrl,
//   associateName,
//   diversityDetails,
//   associateImageUrl,
// }) {
//   return `
// import React from "react";

// export default function NewsletterTemplate() {

//   // Helper: Render string as multiple paragraphs, split by double line breaks.
//   function renderParagraphs(str, color = "#000") {
//     if (!str) return null;
//     return str
//       .split(/\\n\\s*\\n/)
//       .map((para, idx) => (
//         <p key={idx} style={{ color, margin: 0, marginBottom: 10, lineHeight: 1.4,text-justify: inter-word,hyphens: auto,text-align-last: left }}>
//           {para.split('\\n').map((line, i) => (
//             <React.Fragment key={i}>
//               {line}
//               {i < para.split('\\n').length - 1 && <br />}
//             </React.Fragment>
//           ))}
//         </p>
//       ));
//   }

//   return (
//     <div className="bg-[#dcebf7] text-black font-sans min-h-screen pb-10">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto mt-0 bg-[#bcf2fc] rounded-none rounded-t-2xl">
//         <div className="px-6 pt-8 pb-2 flex flex-col items-center">
//           <h1 className="text-4xl font-bold text-[#0a154f] uppercase tracking-wide pt-2 pb-2">
//             Monthly Newsletter
//           </h1>
//           <img
//             src="https://drive.usercontent.google.com/download?id=1kE6NfovyUI9XuUsxKD9xzQlV0clDGzpM&export=view&authuser=0"
//             alt="Keelworks Logo"
//             className="w-[90%] mx-auto my-2 rounded"
//             style={{ maxWidth: 720 }}
//           />
//         </div>
//       </div>

//       {/* Main Container */}
//       <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#dcebf7] to-[#6a9bbd] px-4 py-10 shadow-lg rounded-b-2xl">
//         {/* Quote / About Section */}
//         <section className="w-[95%] mx-auto my-6 bg-gradient-to-b from-[#3f5689] to-[#1b2e59] text-white rounded-2xl shadow p-8 text-lg">
//           <p className="m-0">${quote}</p>
//         </section>

//         {/* Founder Message */}
//         <section className="w-[95%] mx-auto my-6 bg-[#e3ecf3] rounded-2xl shadow flex flex-col md:flex-row items-start p-8">
//           <div className="flex-1 pr-0 md:pr-8">
//             <h2 className="text-xl font-semibold text-[#1a1a1a] uppercase mb-2">Founder’s Message for ${month} ${year}</h2>
//             {renderParagraphs(\`${founderMessage}\`, "#333")}
//           </div>
//           <div className="md:w-48 w-full flex-shrink-0 flex justify-center mt-6 md:mt-0">
//             <img
//               src="${founderPhotoUrl}"
//               alt="Founder Portrait"
//               className="w-48 h-48 object-cover rounded-2xl border shadow-lg"
//             />
//           </div>
//         </section>

//         {/* Donation CTA */}
//         <section className="w-[95%] mx-auto my-6 bg-[#5a8fb0] rounded-2xl shadow p-8 text-center text-[#1a1a1a]">
//           <h2 className="text-2xl uppercase font-bold mb-3 tracking-wider">
//             Your support makes a difference
//           </h2>
//           <p className="text-base font-medium mb-4">
//             The work we do wouldn't be possible without the generosity of our supporters.
//             Your donation helps us get people to work.
//           </p>
//           <a
//             href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               inline-block
//               pt-3
//               pb-[18px]
//               px-6
//               bg-gradient-to-b from-[#001d5e] to-[#263d78]
//               text-white
//               text-xl
//               font-bold
//               rounded-full
//               whitespace-nowrap
//               tracking-[1px]
//               text-center
//               leading-[1.2]
//               shadow-lg
//               hover:opacity-90
//               transition
//             "
//           >
//             <span className="block">DONATE NOW</span>
//             <span className="block text-[10px] font-normal text-[#c5cfff] mt-[2px]">
//               Help transform lives today!
//             </span>
//           </a>

//         </section>

//         {/* Product Section */}
//         <section className="w-[95%] mx-auto my-6 bg-gradient-to-b from-[#a4c6dd] to-[#507da3] text-white rounded-2xl shadow p-8">
//           <h2 className="text-2xl font-bold uppercase mb-4">${productTitle}</h2>
//           {renderParagraphs(\`${productDescription}\`, "#fff")}
//         </section>

//         {/* Team Section */}
//         <section className="w-[95%] mx-auto my-6 bg-[#3a5a70] to-[#446a88] text-white rounded-2xl shadow p-8 flex flex-col items-center">
//           <h2 className="text-2xl font-bold uppercase mb-4">${teamName}</h2>
//           <img
//             src="https://drive.usercontent.google.com/download?id=${teamImageUrl}&export=view&authuser=0""
//             alt="Team Portrait"
//             className="mb-4 w-64 max-w-full rounded-2xl shadow"
//           />
//           {renderParagraphs(\`${teamHighlight}\`, "#fff")}
//         </section>

//         {/* Volunteer/Associate Section */}
//         <section className="w-[95%] mx-auto my-6 bg-[#4a6a83] text-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-start">
//           <div className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0">
//             <img
//               src="https://drive.usercontent.google.com/download?id=${volunteerImageUrl}&export=view&authuser=0"
//               alt="Volunteer"
//               className="w-48 h-48 object-cover rounded-2xl border shadow"
//             />
//           </div>
//           <div className="md:w-2/3 md:pl-8">
//             <h2 className="text-2xl font-bold uppercase mb-2">${volunteerName}</h2>
//             {renderParagraphs(\`${volunteerBio}\`, "#fff")}

//             <h2 className="text-2xl font-bold uppercase mb-2">Why ${volunteerName}?</h2>
//             {renderParagraphs(\`${whyVolunteer}\`, "#fff")}
//           </div>
//         </section>

//         {/* Diversity Section */}
//         <section className="w-[95%] mx-auto my-6 bg-[#4a6a83] text-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-start">
//           <div className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0">
//             <img
//               src="https://drive.usercontent.google.com/download?id=${associateImageUrl}&export=view&authuser=0"
//               alt="Associate"
//               className="w-48 h-48 object-cover rounded-2xl border shadow"
//             />
//           </div>
//           <div className="md:w-2/3 md:pl-8">
//             <h2 className="text-2xl font-bold uppercase mb-2">${associateName}</h2>
//             {renderParagraphs(\`${diversityDetails}\`, "#fff")}

//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#1f2e3d] text-white mt-8 p-8 rounded-t-2xl">
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <a href="https://keelworks.org/about" className="block text-sm font-medium mb-1 hover:underline">
//               About Us
//             </a>
//             <a href="https://keelworks.org/getinvolved" className="block text-sm font-medium mb-1 hover:underline">
//               Get Involved
//             </a>
//             <a href="https://keelworks.org/oursolutions" className="block text-sm font-medium mb-1 hover:underline">
//               Our Solutions
//             </a>
//             <a href="https://keelworks.org/blog" className="block text-sm font-medium mb-1 hover:underline">
//               Blog
//             </a>
//             <a href="https://keelworks.org/success_stories" className="block text-sm font-medium mb-1 hover:underline">
//               Success Stories
//             </a>
//             <a href="https://keelworks.org/getinvolved#faq" className="block text-sm font-medium mb-1 hover:underline">
//               FAQ
//             </a>
//             <a href="https://keelworks.org/non_dis_policy" className="block text-sm font-medium hover:underline">
//               Non-discrimination Policy
//             </a>
//           </div>
//           <div className="text-right flex flex-col items-end">
//             <h3 className="font-semibold mb-2">Support and Follow Us</h3>
//             <div className="flex space-x-3">
//               <a
//                 href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate/card"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Donate"
//               >
//                 <img src="https://drive.usercontent.google.com/download?id=1u0TULL1XwZIhwPC084TzQeYYUYhe3RJH&export=view&authuser=0" alt="Donate" className="w-6 h-6" />
//               </a>
//               <a href="https://www.linkedin.com/company/keelworks-foundation/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <img src="https://drive.usercontent.google.com/download?id=155v9Havzd39zHRdKE1UdjvDhCYP7ODoZ&export=view&authuser=0" alt="LinkedIn" className="w-6 h-6" />
//               </a>
//               <a href="https://www.facebook.com/TheKeelWorks" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <img src="https://drive.usercontent.google.com/download?id=1vMJ0Z7MSf_CJUqrKOOH5Z5yYhWk45fiE&export=view&authuser=0" alt="Facebook" className="w-6 h-6" />
//               </a>
//               <a href="https://keelworks.org/contactus" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
//                 <img src="https://drive.usercontent.google.com/download?id=16RUVQYX21WQ3HW0WoxJ8BeaTzHSOXZdT&export=view&authuser=0" alt="YouTube" className="w-6 h-6" />
//               </a>
//               <a href="https://www.instagram.com/thekeelworks/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <img src="https://drive.usercontent.google.com/download?id=1ihpPifzkBKZaMLXwftBE1WExhp9bV8vE&export=view&authuser=0" alt="Instagram" className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-8">
//           <a href="#" className="font-semibold mr-4 hover:underline">
//             UNSUBSCRIBE
//           </a>
//           <span>© 2025 Keelworks. All rights reserved.</span>
//         </div>
//       </footer>
//     </div>
//   );
// }
// `;
// }
export function getreactComponent({
  month,
  year,
  founderMessage,
  founderPhotoUrl,
  quote,
  productTitle,
  productDescription,
  teamName,
  teamHighlight,
  teamImageUrl,
  volunteerName,
  volunteerBio,
  whyVolunteer,
  volunteerImageUrl,
  associateName,
  diversityDetails,
  associateImageUrl,
}) {
  return `
import React from "react";

export default function NewsletterTemplate() {

  // Helper: Render string as multiple paragraphs, split by double line breaks.
  function renderParagraphs(str, color = "#000") {
    if (!str) return null;
    return str
      .split(/\\n\\s*\\n/)
      .map((para, idx) => (
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
          {para.split("\\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
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
            src="https://drive.usercontent.google.com/download?id=1kE6NfovyUI9XuUsxKD9xzQlV0clDGzpM&export=view&authuser=0"
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
          <p className="m-0">${quote}</p>
        </section>

        {/* Founder Message */}
        <section className="w-[95%] mx-auto my-6 bg-[#e3ecf3] rounded-2xl shadow p-8">
          <h2 className="text-xl font-semibold text-[#1a1a1a] uppercase mb-4">
            Founder’s Message for ${month} ${year}
          </h2>
          {renderParagraphs(\`${founderMessage}\`, "#333")}
          <div className="clear-right" />
          <img
            src="${founderPhotoUrl}"
            alt="Founder Portrait"
            className="float-right w-48 ml-6 mb-4 rounded-2xl border shadow-lg"
          />
        </section>

        {/* Donation CTA */}
        <section className="w-[95%] mx-auto my-6 bg-[#5a8fb0] rounded-2xl shadow p-8 text-center text-[#1a1a1a]">
          <h2 className="text-2xl uppercase font-bold mb-3 tracking-wider">
            Your support makes a difference
          </h2>
          <p className="text-base font-medium mb-4">
            The work we do wouldn't be possible without the generosity of our supporters.
            Your donation helps us get people to work.
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
          <h2 className="text-2xl font-bold uppercase mb-4">${productTitle}</h2>
          {renderParagraphs(\`${productDescription}\`, "#fff")}
        </section>

        {/* Team Section */}
        <section className="w-[95%] mx-auto my-6 bg-[#3a5a70] text-white rounded-2xl shadow p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold uppercase mb-6">${teamName}</h2>
          <div className="w-full flex justify-center mb-8">
            <img
              src="${teamImageUrl}"
              alt="Team Portrait"
              className="w-full max-w-[600px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          {renderParagraphs(\`${teamHighlight}\`, "#fff")}
        </section>

        {/* Volunteer/Associate Section */}
        <section className="w-[95%] mx-auto my-6 bg-[#426b8d] rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold text-white uppercase mb-4">Associate of the Month</h2>
          <img
            src="${volunteerImageUrl}"
            alt="Volunteer"
            className="float-left w-48 mr-6 mb-4 object-cover rounded-2xl border shadow-lg"
          />
          <h3 className="text-white text-lg font-semibold mb-2">${volunteerName}</h3>
          {renderParagraphs(\`${volunteerBio}\`, "#fff")}
          <span
            className="text-xl font-semibold mt-[5px] text-white"
          >
            Why {volunteerName}?
          </span>
          {renderParagraphs(\`${whyVolunteer}\`, "#fff")}
          <div className="clear-both" />
        </section>

        {/* Diversity Section */}
        <section className="w-[95%] mx-auto my-6 bg-[#426b8d] rounded-2xl shadow p-8">
          <h2 className="text-xl font-bold text-white uppercase mb-4">Diversity at Keelworks</h2>
          <img
            src="${associateImageUrl}"
            alt="Volunteer"
            className="float-left w-48 mr-6 mb-4 object-cover rounded-2xl border shadow-lg"
          />
          <h3 className="text-white text-lg font-semibold mb-2">${associateName}</h3>
          {renderParagraphs(\`${diversityDetails}\`, "#fff")}
          <div className="clear-both" />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f2e3d] text-white mt-8 p-8 rounded-t-2xl">
        {/* …same footer links as before… */}
      </footer>
    </div>
  );
}
`;
}
