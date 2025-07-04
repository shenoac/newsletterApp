export async function fetchStats(token, key) {
  const res = await fetch(`/api/analytics/stats/${encodeURIComponent(key)}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to load stats");
  return res.json();
}

export async function recordReadTime(key, seconds) {
  await fetch(`/api/analytics/time/${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secondsSpent: seconds,
      clientTime: new Date().toISOString(),
    }),
  });
}
