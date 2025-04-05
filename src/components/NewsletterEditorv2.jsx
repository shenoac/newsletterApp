import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { getPreviewHtml } from "./previewTemplate";

export default function NewsletterEditorv2() {
  // Founder's Message Section
  const [founderMessage, setFounderMessage] = useState(
    "Enter the founder's message here..."
  );
  const [founderPhotoUrl, setFounderPhotoUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1qO9g2-6uOZSeb3uMEsxwJa1ebAdvFwld&export=view&authuser=0"
  );

  // Festivals Section: Array of festival objects
  const initialFestivals = [
    {
      title: "Festival 1",
      description: "Description for Festival 1.",
      imageUrl:
        "https://drive.usercontent.google.com/download?id=1j4-EO94SlRZIIhE2ToU4UwP2l098CTnP&export=view&authuser=0",
    },
    {
      title: "Festival 2",
      description: "Description for Festival 2.",
      imageUrl:
        "https://drive.usercontent.google.com/download?id=13t7_GhFbhiRkPDu85SItacvDvWUA9Gur&export=view&authuser=0",
    },
  ];
  const [festivals, setFestivals] = useState(initialFestivals);

  // Handler to update number of festivals based on user selection
  const handleFestivalCountChange = (e) => {
    const count = parseInt(e.target.value);
    let newFestivals = [...festivals];
    if (count > festivals.length) {
      for (let i = festivals.length; i < count; i++) {
        newFestivals.push({
          title: `Festival ${i + 1}`,
          description: `Description for Festival ${i + 1}.`,
          imageUrl: "",
        });
      }
    } else if (count < festivals.length) {
      newFestivals = newFestivals.slice(0, count);
    }
    setFestivals(newFestivals);
  };

  // Product Highlight Section
  const [productTitle, setProductTitle] = useState("Product Title");
  const [productDescription, setProductDescription] = useState(
    "Enter product description here..."
  );
  const [productImageUrl, setProductImageUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1qO9g2-6uOZSeb3uMEsxwJa1ebAdvFwld&export=view&authuser=0"
  );

  // Team Highlight Section
  const [teamHighlight, setTeamHighlight] = useState(
    "Enter team highlight details here..."
  );
  const [teamImageUrl, setTeamImageUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1LbBerCXLE58OsR86CmAzgtpi-EvHaqBt&export=view&authuser=0"
  );

  // Volunteer of the Month Section
  const [volunteerName, setVolunteerName] = useState("Volunteer Name");
  const [volunteerBio, setVolunteerBio] = useState(
    "Enter volunteer bio here..."
  );
  const [volunteerImageUrl, setVolunteerImageUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1qO9g2-6uOZSeb3uMEsxwJa1ebAdvFwld&export=view&authuser=0"
  );
  const [volunteerWhy, setVolunteerWhy] = useState(
    "Enter reasons why this volunteer is special..."
  );

  const previewHtml = getPreviewHtml({
    founderMessage,
    founderPhotoUrl,
    festivals,
    productTitle,
    productDescription,
    productImageUrl,
    teamHighlight,
    teamImageUrl,
    volunteerName,
    volunteerBio,
    volunteerImageUrl,
    volunteerWhy,
  });

  const downloadTemplate = () => {
    const blob = new Blob([previewHtml], { type: "text/html" });
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
    <>
      <div className="flex bg-white w-full justify-center ">
        <div className="ms-40 w-1/2 p-8 space-y-8">
          <h2 className="text-2xl font-bold">
            Newsletter Editor with Image Links
          </h2>

          {/* Founder's Message */}
          <div className="space-y-4 border p-4 rounded">
            <h3 className="text-xl font-bold">Founder&apos;s Message</h3>
            <label className="block">
              Message:
              <textarea
                value={founderMessage}
                onChange={(e) => setFounderMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </label>
            <label className="block">
              Founder Photo URL:
              <input
                type="text"
                value={founderPhotoUrl}
                onChange={(e) => setFounderPhotoUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
          </div>

          {/* Festivals */}
          <div className="space-y-4 border p-4 rounded">
            <h3 className="text-xl font-bold">Festivals</h3>
            <label className="block">
              Number of Festivals:
              <select
                value={festivals.length}
                onChange={handleFestivalCountChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>
            {festivals.map((festival, index) => (
              <div key={index} className="border p-2 rounded mb-4">
                <h4 className="font-semibold">Festival {index + 1}</h4>
                <label className="block">
                  Title:
                  <input
                    type="text"
                    value={festival.title}
                    onChange={(e) => {
                      const newFestivals = [...festivals];
                      newFestivals[index].title = e.target.value;
                      setFestivals(newFestivals);
                    }}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </label>
                <label className="block">
                  Description:
                  <textarea
                    value={festival.description}
                    onChange={(e) => {
                      const newFestivals = [...festivals];
                      newFestivals[index].description = e.target.value;
                      setFestivals(newFestivals);
                    }}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                  ></textarea>
                </label>
                <label className="block">
                  Festival Image URL:
                  <input
                    type="text"
                    value={festival.imageUrl}
                    onChange={(e) => {
                      const newFestivals = [...festivals];
                      newFestivals[index].imageUrl = e.target.value;
                      setFestivals(newFestivals);
                    }}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </label>
              </div>
            ))}
          </div>

          {/* Product Highlight */}
          <div className="space-y-4 border p-4 rounded">
            <h3 className="text-xl font-bold">Product Highlight</h3>
            <label className="block">
              Title:
              <input
                type="text"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block">
              Description:
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </label>
            <label className="block">
              Product Image URL:
              <input
                type="text"
                value={productImageUrl}
                onChange={(e) => setProductImageUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
          </div>

          {/* Team Highlight */}
          <div className="space-y-4 border p-4 rounded">
            <h3 className="text-xl font-bold">Team Highlight</h3>
            <label className="block">
              Description:
              <textarea
                value={teamHighlight}
                onChange={(e) => setTeamHighlight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </label>
            <label className="block">
              Team Image URL:
              <input
                type="text"
                value={teamImageUrl}
                onChange={(e) => setTeamImageUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
          </div>

          {/* Volunteer of the Month */}
          <div className="space-y-4 border p-4 rounded">
            <h3 className="text-xl font-bold">Volunteer of the Month</h3>
            <label className="block">
              Name:
              <input
                type="text"
                value={volunteerName}
                onChange={(e) => setVolunteerName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block">
              Bio:
              <textarea
                value={volunteerBio}
                onChange={(e) => setVolunteerBio(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </label>
            <label className="block">
              Volunteer Image URL:
              <input
                type="text"
                value={volunteerImageUrl}
                onChange={(e) => setVolunteerImageUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block">
              Why Volunteer:
              <textarea
                value={volunteerWhy}
                onChange={(e) => setVolunteerWhy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="me-50">
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
              className="bg-green-600 text-white px-4 py-2 rounded my-4"
            >
              Download Template
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
