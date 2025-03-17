// AdvancedNewsletterPreview.jsx
// import React from "react";

export default function AdvancedNewsletterPreview() {
  const advancedPreviewHtml = `
    <div class="max-w-3xl mx-auto p-4">
      <!-- Header Section -->
      <header class="bg-blue-600 text-white p-6">
        <div class="flex items-center justify-between">
          <img src="https://via.placeholder.com/80" alt="Organization Logo" class="w-20 h-20 rounded-full"/>
          <div class="text-right">
            <h1 class="text-3xl font-bold">KeelWorks Foundation Newsletter</h1>
            <p class="text-lg">December 2024</p>
          </div>
        </div>
        <p class="mt-4 text-xl">Stay informed with the latest updates and insights</p>
      </header>
      
      <!-- Featured Story Section -->
      <section class="my-8">
        <img src="https://via.placeholder.com/800x300" alt="Featured Story" class="w-full h-auto object-cover rounded-lg"/>
        <h2 class="mt-4 text-2xl font-bold">Featured Story Title</h2>
        <p class="mt-2 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
        <a href="https://example.com/story" class="inline-block mt-4 text-blue-600 underline">
          Read More
        </a>
      </section>
      
      <!-- News Updates Section -->
      <section class="my-8">
        <h2 class="text-2xl font-bold mb-4">Latest Updates</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border p-4 rounded">
            <h3 class="text-xl font-semibold">Update Title 1</h3>
            <p class="text-sm mt-2">
              Brief description of the update. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="border p-4 rounded">
            <h3 class="text-xl font-semibold">Update Title 2</h3>
            <p class="text-sm mt-2">
              Brief description of the update. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="border p-4 rounded">
            <h3 class="text-xl font-semibold">Update Title 3</h3>
            <p class="text-sm mt-2">
              Brief description of the update. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="border p-4 rounded">
            <h3 class="text-xl font-semibold">Update Title 4</h3>
            <p class="text-sm mt-2">
              Brief description of the update. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Additional Announcement Section -->
      <section class="my-8 bg-gray-100 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Upcoming Events & Announcements</h2>
        <p class="text-base">
          Join us for our upcoming events and webinars. Stay tuned for more details on how you can get involved and support our mission.
        </p>
        <a href="https://example.com/events" class="inline-block mt-4 text-blue-600 underline">
          View Events
        </a>
      </section>
      
      <!-- Footer Section -->
      <footer class="bg-gray-200 text-gray-700 p-6 mt-8">
        <p class="text-center">&copy; 2024 KeelWorks Foundation. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" class="text-blue-600">Facebook</a>
          <a href="https://twitter.com" class="text-blue-400">Twitter</a>
          <a href="https://instagram.com" class="text-pink-600">Instagram</a>
        </div>
      </footer>
    </div>
  `;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Advanced Newsletter Preview</h2>
      <div
        className="border border-gray-300 p-4"
        dangerouslySetInnerHTML={{ __html: advancedPreviewHtml }}
      ></div>
    </div>
  );
}
