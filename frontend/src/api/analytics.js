export async function fetchStats(token, key) {
  const res = await fetch(`api/analytics/stats/${encodeURIComponent(key)}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to load stats");
  return res.json();
}
