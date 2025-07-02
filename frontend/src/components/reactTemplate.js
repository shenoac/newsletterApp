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
//         <p
//           key={idx}
//           style={{
//             color,
//             margin: 0,
//             marginBottom: 10,
//             lineHeight: 1.4,
//             textJustify: "inter-word",
//             hyphens: "auto",
//             textAlignLast: "left",
//           }}
//         >
//           {para.split("\\n").map((line, i, arr) => (
//             <React.Fragment key={i}>
//               {line}
//               {i < arr.length - 1 && <br />}
//             </React.Fragment>
//           ))}
//         </p>
//       ));
//   }

//   return (
//     <div className="pt-16 bg-[#dcebf7] text-black font-sans min-h-screen pb-10">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto mt-0 bg-[#bcf2fc] rounded-none rounded-t-2xl">
//         <div className="px-6 pt-8 pb-2 flex flex-col items-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-[#0a154f] uppercase tracking-wide text-center">
//             Monthly Newsletter
//           </h1>
//           <img
//             src="https://keelworks.org/assets/keelworks_logo-CAApWs9G.jpg"
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
//         <section className="w-[95%] mx-auto my-6 bg-[#e3ecf3] rounded-2xl shadow p-8">
//           <h2 className="text-xl font-semibold text-[#1a1a1a] uppercase mb-4">
//             Founder’s Message for ${month} ${year}
//           </h2>
//           {renderParagraphs(\`${founderMessage}\`, "#333")}
//           <div className="clear-right" />
//           <img
//             src="${founderPhotoUrl}"
//             alt="Founder Portrait"
//             className="float-right w-48 ml-6 mb-4 rounded-2xl border shadow-lg"
//           />
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
//         <section className="w-[95%] mx-auto my-6 bg-[#3a5a70] text-white rounded-2xl shadow p-8 flex flex-col items-center">
//           <h2 className="text-2xl font-bold uppercase mb-6">${teamName}</h2>
//           <div className="w-full flex justify-center mb-8">
//             <img
//               src="${teamImageUrl}"
//               alt="Team Portrait"
//               className="w-full max-w-[600px] object-cover rounded-2xl shadow-lg"
//             />
//           </div>
//           {renderParagraphs(\`${teamHighlight}\`, "#fff")}
//         </section>

//         {/* Volunteer/Associate Section */}
//         <section className="w-[95%] mx-auto my-6 bg-[#426b8d] rounded-2xl shadow p-8">
//           <h2 className="text-xl font-bold text-white uppercase mb-4">Associate of the Month</h2>
//           <img
//             src="${volunteerImageUrl}"
//             alt="Volunteer"
//             className="float-left w-48 mr-6 mb-4 object-cover rounded-2xl border shadow-lg"
//           />
//           <h3 className="text-white text-lg font-semibold mb-2">${volunteerName}</h3>
//           {renderParagraphs(\`${volunteerBio}\`, "#fff")}
//           <span
//             className="text-xl font-semibold mt-[5px] text-white"
//           >
//             Why ${volunteerName}?
//           </span>
//           {renderParagraphs(\`${whyVolunteer}\`, "#fff")}
//           <div className="clear-both" />
//         </section>

//         {/* Diversity Section */}
//         <section className="w-[95%] mx-auto my-6 bg-[#426b8d] rounded-2xl shadow p-8">
//           <h2 className="text-xl font-bold text-white uppercase mb-4">Diversity at Keelworks</h2>
//           <img
//             src="${associateImageUrl}"
//             alt="Volunteer"
//             className="float-left w-48 mr-6 mb-4 object-cover rounded-2xl border shadow-lg"
//           />
//           <h3 className="text-white text-lg font-semibold mb-2">${associateName}</h3>
//           {renderParagraphs(\`${diversityDetails}\`, "#fff")}
//           <div className="clear-both" />
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#1f2e3d] text-white mt-8 p-8 rounded-t-2xl">
//         {/* …same footer links as before… */}
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
  return `import React from 'react';

export default function NewsletterTemplate() {
  // Helper: split text into paragraphs
  function renderParagraphs(str, color = '#000') {
    if (!str) return null;
    return str
      .split(/\\n\\s*\\n/)
      .map((para, idx) => (
        <p
          key={idx}
          className="mb-2 leading-relaxed text-left"
          style={{ color }}
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
    <div className="bg-[#dcebf7] pt-5 pb-10 min-h-screen" style={{ WebkitTextSizeAdjust: '100%' }}>
      {/* Outer wrapper container */}
      <div className="max-w-[800px] mx-auto bg-[#bcf2fc] rounded-t-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="text-center p-5">
          <h1 className="text-4xl font-semibold text-[#0a154f]" style={{ lineHeight: 1.2 }}>
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

      {/* Main content container with gradient background */}
      <div
        className="max-w-[800px] mx-auto bg-gradient-to-b from-[#538699] to-[#263f48] p-5 rounded-b-2xl shadow-lg mt-4"
      >
        {/* Quote section */}
        <div className="w-full bg-gradient-to-b from-[#0c1769c7] to-[#3828579e] rounded-lg p-8 shadow-md mb-6">
          <h2 className="text-2xl font-medium text-white leading-tight">
            “${quote}”
          </h2>
        </div>

        {/* Founder’s Message */}
        <div className="w-full bg-gradient-to-b from-[#869ba9] to-[#19394f] rounded-lg p-5 shadow-md mb-6 text-white">
          <h2 className="text-2xl font-medium mb-4">Founder’s Message for ${month} ${year}</h2>
          <div className="flex flex-col md:flex-row-reverse">
            <img
              src="${founderPhotoUrl}"
              alt="Portrait of the Founder"
              className="w-48 h-auto rounded-lg mb-4 md:mb-0 md:ml-4 border"
            />
            <div className="flex-1">
              {renderParagraphs(\`${founderMessage}\`, '#ffffff')}
            </div>
          </div>
        </div>

        {/* Donate CTA */}
        <div className="w-full bg-gradient-to-r from-[#5d98ae] to-[#263f48] rounded-lg p-5 text-center mb-6">
          <h2 className="text-2xl font-medium text-white mb-3">Your support makes a difference</h2>
          <p className="text-base text-white mb-4">The work we do wouldn't be possible without the generosity of our supporters.</p>
          <a
            href="https://www.every.org/keelworks-foundation?utm_campaign=donate-link"
            role="button"
            aria-label="Donate to Keelworks Foundation"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#060e3a] to-[#374269] rounded-full font-semibold text-xl text-white whitespace-nowrap"
          >
            Donate Now
          </a>
        </div>

        {/* Diversity Section */}
        <div className="w-full bg-gradient-to-b from-[#5486b8b5] to-[#0a1d2fbf] rounded-lg p-5 shadow-md mb-6 text-white">
          <h2 className="text-2xl font-medium mb-4">Diversity at Keelworks</h2>
          <img
            src="${associateImageUrl}"
            alt="Photo of ${associateName}"
            className="float-left w-48 h-auto rounded-lg mb-4 mr-4 border"
          />
          <h3 className="text-xl font-semibold mb-2">${associateName}</h3>
          {renderParagraphs(\`${diversityDetails}\`, '#ffffff')}
          <div className="clear-left" />
        </div>


        {/* Product Section */}
        <div className="w-full bg-gradient-to-b from-[#253c52] to-[#5486b8] rounded-lg p-5 shadow-md mb-6 text-white">
          <h2 className="text-2xl font-medium mb-4">${productTitle}</h2>
          {renderParagraphs(\`${productDescription}\`, '#ffffff')}
        </div>

        {/* Team Section */}
        <div className="w-full bg-gradient-to-b from-[#0a1d2f] to-[#5486b8] rounded-lg p-5 shadow-md mb-6 text-white">
          <h2 className="text-2xl font-medium mb-4">${teamName}</h2>
          <img
            src="${teamImageUrl}"
            alt="${teamName}"
            className="w-full h-auto rounded-lg mb-4"
          />
          {renderParagraphs(\`${teamHighlight}\`, '#ffffff')}
        </div>

        {/* Volunteer Spotlight */}
        <div className="w-full bg-gradient-to-b from-[#5486b8] to-[#1b2e59] rounded-lg p-5 shadow-md mb-6 text-white">
          <h2 className="text-2xl font-medium mb-4">Associate of the Month</h2>
          <img
            src="${volunteerImageUrl}"
            alt="Photo of ${volunteerName}"
            className="float-left w-48 h-auto rounded-lg mb-4 mr-4 border"
          />
          <h3 className="text-xl font-semibold mb-2">${volunteerName}</h3>
          {renderParagraphs(\`${volunteerBio}\`, '#ffffff')}
          <strong className="block mt-3 mb-1">Why ${volunteerName}?</strong>
          {renderParagraphs(\`${whyVolunteer}\`, '#ffffff')}
          <div className="clear-left" />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-[800px] mx-auto bg-[#1f2e3d] text-white rounded-t-2xl p-5 mt-6">
        {/* Footer content copied from email version */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <nav aria-label="Footer links">
            <ul className="space-y-2">
              <li><a href="https://keelworks.org/about" className="text-white no-underline">About Us</a></li>
              <li><a href="https://keelworks.org/getinvolved" className="text-white no-underline">Get Involved</a></li>
              <li><a href="https://keelworks.org/oursolutions" className="text-white no-underline">Our Solutions</a></li>
              <li><a href="https://keelworks.org/blog" className="text-white no-underline">Blog</a></li>
              <li><a href="https://keelworks.org/success_stories" className="text-white no-underline">Success Stories</a></li>
              <li><a href="mailto:info@keelworks.org" className="text-white no-underline">Unsubscribe</a></li>
            </ul>
          </nav>
          <div className="text-right space-x-3">
            <a href="https://www.every.org/keelworks-foundation" aria-label="Donate via Every.org"><img src="https://drive.usercontent.google.com/download?id=1u0TULL1XwZIhwPC084TzQeYYUYhe3RJH&export=view" alt="Donate icon" className="inline-block w-6 h-6 filter invert" /></a>
            <a href="https://www.linkedin.com/company/keelworks-foundation/" aria-label="Keelworks LinkedIn page"><img src="https://drive.usercontent.google.com/download?id=155v9Havzd39zHRdKE1UdjvDhCYP7ODoZ&export=view" alt="LinkedIn icon" className="inline-block w-6 h-6 filter invert" /></a>
            <a href="https://www.facebook.com/TheKeelWorks" aria-label="Keelworks Facebook page"><img src="https://drive.usercontent.google.com/download?id=1vMJ0Z7MSf_CJUqrKOOH5Z5yYhWk45fiE&export=view" alt="Facebook icon" className="inline-block w-6 h-6 filter invert" /></a>
            <a href="https://keelworks.org/contactus" aria-label="Keelworks YouTube channel"><img src="https://drive.usercontent.google.com/download?id=16RUVQYX21WQ3HW0WoxJ8BeaTzHSOXZdT&export=view" alt="YouTube icon" className="inline-block w-6 h-6 filter invert" /></a>
            <a href="https://www.instagram.com/thekeelworks/" aria-label="Keelworks Instagram profile"><img src="https://drive.usercontent.google.com/download?id=1ihpPifzkBKZaMLXwftBE1WExhp9bV8vE&export=view" alt="Instagram icon" className="inline-block w-6 h-6 filter invert" /></a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          <p>© 2025 Keelworks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}`;
}
