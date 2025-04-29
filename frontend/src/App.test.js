import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("affiche la page d'inscription par défaut", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const title = screen.getByText(/créer un compte/i);
  expect(title).toBeInTheDocument();
});
