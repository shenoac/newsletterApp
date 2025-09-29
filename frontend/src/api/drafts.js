const API = import.meta.env.VITE_API_URL;

export async function fetchDrafts(token) {
  const res = await fetch(`${API}/api/drafts`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to load drafts");
  const list = await res.json();
  return Object.fromEntries(
    list.map(({ key, data, updatedAt }) => [key, { ...data, updatedAt }])
  );
}

export async function fetchDraft(token, key) {
  const res = await fetch(`${API}/api/drafts/${encodeURIComponent(key)}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Draft not found");
  const { data } = await res.json();
  return data;
}

export async function saveDraft(token, key, data) {
  const res = await fetch(`${API}/api/drafts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ key, data }),
  });
  if (!res.ok) throw new Error("Failed to save draft");
  return res.json();
}

export async function deleteDraft(token, key) {
  const res = await fetch(`${API}/api/drafts/${encodeURIComponent(key)}`, {
    method: "DELETE",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to delete draft");
}
