export async function fetchDrafts() {
  const res = await fetch("/api/drafts");
  if (!res.ok) throw new Error("Failed to load drafts");
  const list = await res.json();
  return Object.fromEntries(
    list.map(({ key, data, updatedAt }) => [key, { ...data, updatedAt }])
  );
}

export async function fetchDraft(key) {
  const res = await fetch(`/api/drafts/${encodeURIComponent(key)}`);
  if (!res.ok) throw new Error("Draft not found");
  const { data } = await res.json();
  return data;
}

export async function saveDraft(key, data) {
  const res = await fetch("/api/drafts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, data }),
  });
  if (!res.ok) throw new Error("Failed to save draft");
  return res.json();
}

export async function deleteDraft(key) {
  const res = await fetch(`/api/drafts/${encodeURIComponent(key)}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete draft");
}
