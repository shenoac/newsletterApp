import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../api/auth";
import { useAuth } from "../AuthContext";

export default function ChangePassword() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await changePassword(token, currentPassword, newPassword);
      navigate("/");
    } catch {
      setError("Failed to change password");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <h1>Change Password</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 rounded w-full"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="current password"
          required
        />
        <input
          className="border p-2 rouned w-full"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          placeholder="new password"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}
