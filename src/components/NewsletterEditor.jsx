import { useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function NewsletterEditor() {
  // Header Section
  const [logoUrl, setLogoUrl] = useState("https://via.placeholder.com/80");
  const [headerTitle, setHeaderTitle] = useState(
    "KeelWorks Foundation Newsletter"
  );
  const [headerDate, setHeaderDate] = useState("December 2024");
  const [headerTagline, setHeaderTagline] = useState(
    "Stay informed with the latest updates and insights"
  );

  // Featured Story Section
  const [featuredImageUrl, setFeaturedImageUrl] = useState(
    "https://via.placeholder.com/800x300"
  );
  const [featuredTitle, setFeaturedTitle] = useState("Featured Story Title");
  const [featuredDescription, setFeaturedDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
  );
  const [featuredLink, setFeaturedLink] = useState("https://example.com/story");

  // News Updates Section: Array of 4 news items
  const initialNews = [
    {
      title: "Update Title 1",
      description:
        "Brief description of the update. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Update Title 2",
      description:
        "Brief description of the update. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Update Title 3",
      description:
        "Brief description of the update. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Update Title 4",
      description:
        "Brief description of the update. Lorem ipsum dolor sit amet.",
    },
  ];
  const [newsItems, setNewsItems] = useState(initialNews);

  // Additional Announcement Section
  const [announcementTitle, setAnnouncementTitle] = useState(
    "Upcoming Events & Announcements"
  );
  const [announcementDescription, setAnnouncementDescription] = useState(
    "Join us for our upcoming events and webinars. Stay tuned for more details on how you can get involved and support our mission."
  );
  const [announcementLink, setAnnouncementLink] = useState(
    "https://example.com/events"
  );

  // Footer Section
  const [footerText, setFooterText] = useState(
    "&copy; 2024 KeelWorks Foundation. All rights reserved."
  );
  const [socialFacebook, setSocialFacebook] = useState("https://facebook.com");
  const [socialTwitter, setSocialTwitter] = useState("https://twitter.com");
  const [socialInstagram, setSocialInstagram] = useState(
    "https://instagram.com"
  );

  // Generate the preview HTML using the state values.
  // For email compatibility, inline styling may be necessary.
  const previewHtml = `
    <div class="max-w-3xl mx-auto p-4">
      <!-- Header Section -->
      <header class="bg-blue-600 text-white p-6">
        <div class="flex items-center justify-between">
          <img src="${logoUrl}" alt="Organization Logo" class="w-20 h-20 rounded-full"/>
          <div class="text-right">
            <h1 class="text-3xl font-bold">${headerTitle}</h1>
            <p class="text-lg">${headerDate}</p>
          </div>
        </div>
        <p class="mt-4 text-xl">${headerTagline}</p>
      </header>
      
      <!-- Featured Story Section -->
      <section class="my-8">
        <img src="${featuredImageUrl}" alt="Featured Story" class="w-full h-auto object-cover rounded-lg"/>
        <h2 class="mt-4 text-2xl font-bold">${featuredTitle}</h2>
        <p class="mt-2 text-base">
          ${featuredDescription}
        </p>
        <a href="${featuredLink}" class="inline-block mt-4 text-blue-600 underline">
          Read More
        </a>
      </section>
      
      <!-- News Updates Section -->
      <section class="my-8">
        <h2 class="text-2xl font-bold mb-4">Latest Updates</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${newsItems
            .map(
              (item) => `
            <div class="border p-4 rounded">
              <h3 class="text-xl font-semibold">${item.title}</h3>
              <p class="text-sm mt-2">${item.description}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
      
      <!-- Additional Announcement Section -->
      <section class="my-8 bg-gray-100 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">${announcementTitle}</h2>
        <p class="text-base">
          ${announcementDescription}
        </p>
        <a href="${announcementLink}" class="inline-block mt-4 text-blue-600 underline">
          View Events
        </a>
      </section>
      
      <!-- Footer Section -->
      <footer class="bg-gray-200 text-gray-700 p-6 mt-8">
        <p class="text-center">${footerText}</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="${socialFacebook}" class="text-blue-600">Facebook</a>
          <a href="${socialTwitter}" class="text-blue-400">Twitter</a>
          <a href="${socialInstagram}" class="text-pink-600">Instagram</a>
        </div>
      </footer>
    </div>
  `;
  //   const downloadTemplate = () => {
  //     const blob = new Blob([previewHtml], { type: "text/html" });
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = "newsletter-template.html";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);
  //   };
  const downloadTemplate = () => {
    const completeHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Newsletter Template</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          ${previewHtml}
        </body>
      </html>
    `;
    const blob = new Blob([completeHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "newsletter-template.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Newsletter Editor</h2>

      {/* Header Section */}
      <div className="space-y-4 border p-4 rounded">
        <h3 className="text-xl font-bold">Header Section</h3>
        <label className="block">
          Logo URL:
          <input
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Title:
          <input
            type="text"
            value={headerTitle}
            onChange={(e) => setHeaderTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Publication Date:
          <input
            type="text"
            value={headerDate}
            onChange={(e) => setHeaderDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Tagline:
          <input
            type="text"
            value={headerTagline}
            onChange={(e) => setHeaderTagline(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Featured Story Section */}
      <div className="space-y-4 border p-4 rounded">
        <h3 className="text-xl font-bold">Featured Story Section</h3>
        <label className="block">
          Featured Image URL:
          <input
            type="text"
            value={featuredImageUrl}
            onChange={(e) => setFeaturedImageUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Featured Title:
          <input
            type="text"
            value={featuredTitle}
            onChange={(e) => setFeaturedTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Featured Description:
          <textarea
            value={featuredDescription}
            onChange={(e) => setFeaturedDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
          ></textarea>
        </label>
        <label className="block">
          Featured &quot;Read More&quot; Link:
          <input
            type="text"
            value={featuredLink}
            onChange={(e) => setFeaturedLink(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* News Updates Section */}
      <div className="space-y-4 border p-4 rounded">
        <h3 className="text-xl font-bold">News Updates Section</h3>
        {newsItems.map((item, index) => (
          <div key={index} className="border p-2 rounded mb-4">
            <h4 className="font-semibold">News Item {index + 1}</h4>
            <label className="block">
              Title:
              <input
                type="text"
                value={item.title}
                onChange={(e) => {
                  const newNews = [...newsItems];
                  newNews[index].title = e.target.value;
                  setNewsItems(newNews);
                }}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block">
              Description:
              <textarea
                value={item.description}
                onChange={(e) => {
                  const newNews = [...newsItems];
                  newNews[index].description = e.target.value;
                  setNewsItems(newNews);
                }}
                className="w-full p-2 border border-gray-300 rounded"
                rows="2"
              ></textarea>
            </label>
          </div>
        ))}
      </div>

      {/* Additional Announcement Section */}
      <div className="space-y-4 border p-4 rounded">
        <h3 className="text-xl font-bold">Additional Announcement Section</h3>
        <label className="block">
          Announcement Title:
          <input
            type="text"
            value={announcementTitle}
            onChange={(e) => setAnnouncementTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Announcement Description:
          <textarea
            value={announcementDescription}
            onChange={(e) => setAnnouncementDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
          ></textarea>
        </label>
        <label className="block">
          Announcement Link:
          <input
            type="text"
            value={announcementLink}
            onChange={(e) => setAnnouncementLink(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Footer Section */}
      <div className="space-y-4 border p-4 rounded">
        <h3 className="text-xl font-bold">Footer Section</h3>
        <label className="block">
          Footer Text:
          <input
            type="text"
            value={footerText}
            onChange={(e) => setFooterText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Facebook URL:
          <input
            type="text"
            value={socialFacebook}
            onChange={(e) => setSocialFacebook(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Twitter URL:
          <input
            type="text"
            value={socialTwitter}
            onChange={(e) => setSocialTwitter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Instagram URL:
          <input
            type="text"
            value={socialInstagram}
            onChange={(e) => setSocialInstagram(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Live Preview */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
        <div
          className="border border-gray-300 p-4"
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        ></div>
      </div>
      <div>
        <button
          onClick={downloadTemplate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download Template
        </button>
      </div>
    </div>
  );
}
