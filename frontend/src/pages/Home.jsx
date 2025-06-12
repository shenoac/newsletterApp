import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDraft, fetchDrafts } from "../api/drafts";
import { Calendar, Edit3, Mail, PlusCircle, Trash2 } from "lucide-react";
import { useAuth } from "../AuthContext";

export default function Home() {
  const [drafts, setDrafts] = useState({});
  const navigate = useNavigate();
  const { logout, token } = useAuth();

  async function handleDelete(key) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this newsletter?"
    );
    if (!confirmDelete) return;
    try {
      await deleteDraft(token, key);
      setDrafts((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    } catch (err) {
      console.error("Failed to delete draft:", err);
      alert("Could not delete the newsletter.");
    }
  }

  useEffect(() => {
    async function loadDrafts() {
      try {
        const all = await fetchDrafts(token);
        setDrafts(all);
      } catch (err) {
        console.error("Failed to load drafts:", err);
        alert("Could not load your newsletters.");
      }
    }
    loadDrafts();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 via white to-indigo-50">
      {/* header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to to-indigo-600 bg-clip-text text-transparent">
                  Newsletter Studio
                </h1>
                <p className="text-sm text-gray-500">Keelworks</p>
              </div>
            </div>
            {/* <button
              onClick={() => navigate("/editor")}
              className="bg-gradient-to-r from blue-600 to indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Create Newsletter</span>
            </button> */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate("/editor")}
                className="bg-gradient-to-r from blue-600 to indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Create Newsletter</span>
              </button>
              <button
                onClick={() => navigate("/create-user")}
                className="bg-gradient-to-r from blue-600 to indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                Add User
              </button>
              <button
                onClick={() => navigate("/change-password")}
                className="bg-gradient-to-r form-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                Change Password
              </button>
              <button
                onClick={logout}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* welcome section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {" "}
            Welcome Back!
          </h2>
          <p className="text-gray-600">
            Ready to create Newsletter for the Keelworks Community?
          </p>
        </div>
        {/* stats card */}
        <div></div>
        {/* main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* recent newsletter  */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recent Newsletter
                  </h3>
                  <button className="text-white hover:text-white-700 font-medium text-sm hover:underline">
                    View All
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {Object.entries(drafts).map(([key, data]) => (
                  <div
                    key={key}
                    className="p-6 hover:bg-blue-50/50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {data.month} {data.year}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                          </span>
                          <span>Last Updated at: {data.updatedAt}</span>
                          {/* <span>
                            <Eye />
                            <span>{data.opens} opens</span>
                          </span> */}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            data.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {data.status}
                        </span>
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() =>
                            navigate(`/editor/${encodeURIComponent(key)}`)
                          }
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          onClick={() => handleDelete(key)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
