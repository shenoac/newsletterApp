export async function login(email, password) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Invalid Credentials");
  return res.json();
}

export async function createUser(token, email, password) {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}

export async function changePassword(token, currentPassword, newPassword) {
  const res = await fetch("/api/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  if (!res.ok) throw new Error("Failed to change Password");
  return res.json();
}
