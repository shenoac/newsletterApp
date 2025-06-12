import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import Home from "./Home";
import { expect, test, vi } from "vitest";

vi.mock("../api/drafts", () => ({
  fetchDrafts: vi.fn(() => Promise.resolve({})),
}));

const renderHome = () =>
  render(
    <AuthProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </AuthProvider>
  );

test("renders welcome message", () => {
  renderHome();
  expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /create newsletter/i })
  ).toBeInTheDocument();
});
