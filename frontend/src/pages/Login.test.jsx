import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import { expect, test, vi } from "vitest";
import Login from "./Login";

vi.mock("../api/auth", () => ({
  login: vi.fn(() => Promise.reject(new Error("Invalid credentials"))),
}));

const renderLogin = () =>
  render(
    <AuthProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </AuthProvider>
  );

test("toggles password visibility", () => {
  renderLogin();
  const toggleButton = screen.getByRole("button", {
    name: /toggle visibility/i,
  });
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toHaveAttribute("type", "password");
  fireEvent.click(toggleButton);
  expect(passwordInput).toHaveAttribute("type", "text");
});

test("shows error message on failed login", async () => {
  renderLogin();
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "secret" },
  });
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
});
