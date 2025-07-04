import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStats } from "../api/analytics";
import { useAuth } from "../AuthContext";

export default function AnalyticsDashboard() {
  const { key } = useParams();
  const { token } = useAuth();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchStats(token, key);
        setStats(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load analytics");
      }
    }
    load();
  }, [key, token]);

  if (error) return <div className="p-6">{error}</div>;
  if (!stats) return <div className="p-6">Loading...</div>;

  //   deriving unique users based on user agent string
  const uniqueViewers = new Set((stats.opens || []).map((o) => o.userAgent))
    .size;

  const getDevice = (ua) => {
    if (!ua) return "Unknown";
    const lower = ua.toLowerCase();
    if (
      lower.includes("mobile") ||
      lower.includes("iphone") ||
      lower.includes("android") ||
      lower.includes("smartphone")
    )
      return "Mobile";
    if (lower.includes("ipad") || lower.includes("tablet")) return "Tablet";
    return "Desktop";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics for {key}</h1>
      <p className="mb-2">Total Opens: {stats.openCount}</p>
      <p className="mb-4">Unique Viewers: {uniqueViewers}</p>
      <h2 className="text-xl font-semibold mb-2">View Details</h2>
      <table className="mb-4 text-sm border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1 text-left">Server Time</th>
            <th className="px-2 py-1 text-left">Device Time</th>
            <th className="px-2 py-1 text-left">Email Client</th>
            <th className="px-2 py-1 text-left">Device</th>
            <th className="px-2 py-1 text-left">Seconds</th>
          </tr>
        </thead>
        <tbody>
          {(stats.opens || []).map((o, idx) => (
            <tr key={idx} className="border-t border-gray-200">
              <td className="px-2 py-1">{new Date(o.time).toLocaleString()}</td>
              <td className="px-2 py-1">
                {o.clientTime ? new Date(o.clientTime).toLocaleString() : "-"}
              </td>
              <td className="px-2 py-1">{o.emailClient || "-"}</td>
              <td className="px-2 py-1">{getDevice(o.userAgent)}</td>
              <td className="px-2 py-1">{o.secondsSpent ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
