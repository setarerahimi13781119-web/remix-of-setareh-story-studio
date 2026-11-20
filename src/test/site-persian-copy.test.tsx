import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SelectedWork } from "@/components/portfolio/SelectedWork";

describe("Khaneh Shalvar Persian campaign copy", () => {
  it("shows the approved slogan in the project details with RTL direction", () => {
    render(<SelectedWork />);

    fireEvent.click(screen.getByRole("button", { name: /view Khaneh Shalvar project/i }));

    const slogan = screen.getByText("از صفر تا صد استایل پاییزت رو از خانه شلوار بخر");
    expect(slogan).toBeInTheDocument();
    expect(slogan).toHaveAttribute("dir", "rtl");
    expect(slogan).toHaveClass("font-persian");
  });
});
