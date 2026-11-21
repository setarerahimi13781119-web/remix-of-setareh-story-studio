import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Header } from "@/components/portfolio/Portfolio";
import { SelectedWork } from "@/components/portfolio/SelectedWork";

afterEach(cleanup);

describe("Responsive navigation", () => {
  it("opens the mobile navigation and closes it after selecting a section", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile" });
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(within(mobileNavigation).getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work",
    );

    fireEvent.click(within(mobileNavigation).getByRole("link", { name: "Work" }));

    expect(screen.queryByRole("navigation", { name: "Mobile" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Selected work interactions", () => {
  it("renders all five approved project cards", () => {
    render(<SelectedWork />);

    for (const title of [
      "Nikmehr",
      "Khaneh Shalvar",
      "Khaneh Mod Setareh",
      "Touch Ups",
      "Junoon Podcast",
    ]) {
      expect(screen.getByRole("button", { name: `View ${title} project` })).toBeInTheDocument();
    }
  });

  it("opens a labelled project dialog and closes it with Escape", async () => {
    render(<SelectedWork />);

    fireEvent.click(screen.getByRole("button", { name: "View Nikmehr project" }));

    const dialog = await screen.findByRole("dialog", { name: "Nikmehr" });
    expect(dialog).toHaveTextContent("Content coordination & publishing");
    expect(dialog).toHaveTextContent("Jenab Khan and 1001");

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
