export async function sendTestEmail(token, emails, html, subject) {
  const res = await fetch("/api/email/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ to: emails, html, subject }),
  });
  if (!res.ok) throw new Error("Failed to send email");
  return res.json();
}
