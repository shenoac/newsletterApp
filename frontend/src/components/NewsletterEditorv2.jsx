import { Navigate, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import { getEmailHtml } from "./emailTemplate";
import { getreactComponent } from "./reactTemplate";
import { fetchDraft, saveDraft } from "../api/drafts";
import { useAuth } from "../AuthContext";
import {
  Save,
  Download,
  Eye,
  ArrowLeft,
  Plus,
  Minus,
  Mail,
  FileText,
  Users,
  Calendar,
} from "lucide-react";

export default function NewsletterEditorv2({ draftKey }) {
  const { token } = useAuth();
  // const handleNavigateHome = () => {
  //   // Replace with your navigation logic
  //   // Navigate("/home");
  //   console.log("Navigate to homepage");
  // };

  // --- Form state
  const [month, setMonth] = useState("April");
  const [year, setYear] = useState("2025");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const [founderMessage, setFounderMessage] = useState(
    "Enter the founder's message here..."
  );
  const [founderPhotoUrl, setFounderPhotoUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1qO9g2-6uOZSeb3uMEsxwJa1ebAdvFwld&export=view&authuser=0"
  );

  const [quote, setQuote] = useState("Enter the quote here");

  // const initialFestivals = [
  //   {
  //     title: "Festival 1",
  //     description: "Description for Festival 1.",
  //     imageUrl:
  //       "https://img.freepik.com/free-vector/flat-easter-background_23-2149313725.jpg",
  //   },
  //   {
  //     title: "Festival 2",
  //     description: "Description for Festival 2.",
  //     imageUrl:
  //       "https://img.freepik.com/free-vector/hand-drawn-baisakhi-illustration_23-2148882316.jpg",
  //   },
  // ];
  // const [festivals, setFestivals] = useState(initialFestivals);

  const [productTitle, setProductTitle] = useState("Product Title");
  const [productDescription, setProductDescription] = useState(
    "Enter product description here..."
  );

  const [teamName, setTeamName] = useState("Enter team name here...");
  const [teamHighlight, setTeamHighlight] = useState(
    "Enter team highlight details here..."
  );
  const [teamImageUrl, setTeamImageUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1LbBerCXLE58OsR86CmAzgtpi-EvHaqBt&export=view&authuser=0"
  );

  const [volunteerName, setVolunteerName] = useState("Volunteer Name");
  const [volunteerBio, setVolunteerBio] = useState(
    "Enter volunteer bio here..."
  );
  const [whyVolunteer, setWhyVolunteer] = useState(
    "Enter reasons why this volunteer is special..."
  );
  const [volunteerImageUrl, setVolunteerImageUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1qO9g2-6uOZSeb3uMEsxwJa1ebAdvFwld&export=view&authuser=0"
  );

  const [associateName, setAssociateName] = useState(
    "Enter associate name here..."
  );
  const [diversityDetails, setDiversityDetails] = useState(
    "Enter diversity details here..."
  );
  const [associateImageUrl, setAssociateImageUrl] = useState(
    "https://drive.usercontent.google.com/download?id=1LbBerCXLE58OsR86CmAzgtpi-EvHaqBt&export=view&authuser=0"
  );

  useEffect(() => {
    if (!draftKey) return;
    fetchDraft(token, draftKey)
      .then((data) => {
        setMonth(data.month || "April");
        setYear(data.year || "2025");
        setFounderMessage(
          data.founderMessage || "Enter the founder's message here..."
        );
        setFounderPhotoUrl(data.founderPhotoUrl || "");
        setQuote(data.quote || "Enter the quote here");
        // setFestivals(data.festivals || initialFestivals);
        setProductTitle(data.productTitle || "Product Title");
        setProductDescription(
          data.productDescription || "Enter product description here..."
        );
        setTeamName(data.teamName || "Enter team name here...");
        setTeamHighlight(
          data.teamHighlight || "Enter team highlight details here..."
        );
        setTeamImageUrl(data.teamImageUrl || "");
        setVolunteerName(data.volunteerName || "Volunteer Name");
        setVolunteerBio(data.volunteerBio || "Enter volunteer bio here...");
        setWhyVolunteer(
          data.whyVolunteer || "Enter reasons why this volunteer is special..."
        );
        setVolunteerImageUrl(data.volunteerImageUrl || "");
      })
      .catch((err) => {
        console.error("Failed to load draft:", err);
        alert("Could not load draft.");
      });
  }, [draftKey]);

  // --- Save current form to server
  const handleSave = async () => {
    setIsSaving(true);
    const key = draftKey || `${month}-${year}`;
    const data = {
      month,
      year,
      founderMessage,
      founderPhotoUrl,
      quote,
      // festivals,
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
    };

    try {
      const saved = await saveDraft(token, key, data);
      alert(`Saved draft: ${saved.key}`);
      if (!draftKey) {
        // Handle navigation to new draft URL
        console.log(`New draft created: ${saved.key}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error saving draft");
    }
    setIsSaving(false);
  };

  // --- Generate previews & downloads
  const previewHtml = getEmailHtml({
    month,
    year,
    founderMessage,
    founderPhotoUrl,
    quote,
    // festivals,
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
  });

  const websiteHtml = getreactComponent({
    month,
    year,
    founderMessage,
    founderPhotoUrl,
    quote,
    // festivals,
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

  const downloadReactTemplate = () => {
    const blob = new Blob([websiteHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "newsletter-template.jsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // const handleFestivalCountChange = (e) => {
  //   const count = parseInt(e.target.value, 10);
  //   let newFestivals = [...festivals];
  //   if (count > festivals.length) {
  //     for (let i = festivals.length; i < count; i++) {
  //       newFestivals.push({
  //         title: `Festival ${i + 1}`,
  //         description: `Description for Festival ${i + 1}.`,
  //         imageUrl: "",
  //       });
  //     }
  //   } else {
  //     newFestivals = newFestivals.slice(0, count);
  //   }
  //   setFestivals(newFestivals);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 w-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="w-screen px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/")}
                className="p-2 hover:bg-blue-50 rounded-xl transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Newsletter Editor
                </h1>
                <p className="text-sm text-gray-500">
                  {month} {year} Edition
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                <span>{isSaving ? "Saving..." : "Save Draft"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex w-screen mx-auto">
        {/* Left: Editor Form */}
        <div className="w-9/6 p-8 space-y-6 max-h-screen overflow-y-auto">
          {/* Month & Year */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Publication Date
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Month
                </label>
                <input
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Founder's Message */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Founder&apos;s Message
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={founderMessage}
                  onChange={(e) => setFounderMessage(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={founderPhotoUrl}
                  onChange={(e) => setFounderPhotoUrl(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Quote of the Month */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Quote of the Month
              </h3>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quote
              </label>
              <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                rows="3"
              />
            </div>
          </div>

          {/* Festivals */}
          {/* <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Festivals
                </h3>
              </div>
              <select
                value={festivals.length}
                onChange={handleFestivalCountChange}
                className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Festival{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              {festivals.map((festival, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50/50 rounded-xl p-4 border border-blue-100"
                >
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Festival {idx + 1}
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={festival.title}
                        onChange={(e) => {
                          const updated = [...festivals];
                          updated[idx].title = e.target.value;
                          setFestivals(updated);
                        }}
                        className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={festival.description}
                        onChange={(e) => {
                          const updated = [...festivals];
                          updated[idx].description = e.target.value;
                          setFestivals(updated);
                        }}
                        className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                        rows="2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={festival.imageUrl}
                        onChange={(e) => {
                          const updated = [...festivals];
                          updated[idx].imageUrl = e.target.value;
                          setFestivals(updated);
                        }}
                        className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Product Highlight */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Product Highlight
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
            </div>
          </div>

          {/* Team Highlight */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Team Highlight
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details
                </label>
                <textarea
                  value={teamHighlight}
                  onChange={(e) => setTeamHighlight(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={teamImageUrl}
                  onChange={(e) => setTeamImageUrl(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Volunteer of the Month */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Volunteer of the Month
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={volunteerName}
                  onChange={(e) => setVolunteerName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  value={volunteerBio}
                  onChange={(e) => setVolunteerBio(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why Volunteer
                </label>
                <textarea
                  value={whyVolunteer}
                  onChange={(e) => setWhyVolunteer(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={volunteerImageUrl}
                  onChange={(e) => setVolunteerImageUrl(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>
          {/* Diversity section  */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Diversity</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Associate Name
                </label>
                <input
                  type="text"
                  value={associateName}
                  onChange={(e) => setAssociateName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details
                </label>
                <textarea
                  value={diversityDetails}
                  onChange={(e) => setDiversityDetails(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={associateImageUrl}
                  onChange={(e) => setAssociateImageUrl(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Live Preview & Downloads */}
        <div className="w-5/6 p-8">
          <div className="sticky top-24">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Live Preview
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={downloadTemplate}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Email</span>
                    </button>
                    <button
                      onClick={downloadReactTemplate}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Website</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 max-h-136 overflow-y-auto bg-gray-50">
                <div
                  className="bg-white rounded-lg shadow-sm border"
                  dangerouslySetInnerHTML={{ __html: previewHtml }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
