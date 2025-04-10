import { render, screen } from "@testing-library/react";
import { useState } from "react";
import Gig from "../src/components/Gig";
import jimiHendrix from "../src/assets/jimi-hendrix.jpg";
import userEvent from "@testing-library/user-event";

const jimiProps = {
  name: "Jimi Hendrix",
  image: jimiHendrix,
  description: "Live from Monterey Pop festival - it was lit!",
  dateTime: "18 June 1967 - 3pm",
  location: "Monterery Country Fairgrounds, Monterey, California",
};

// describe - beforeEach - render
// test - expect - assert
describe("Gig component", () => {
  beforeEach(() => {
    render(<Gig {...jimiProps} />);
  });

  test("renders with correct name", () => {
    expect(
      screen.getByRole("heading", { name: "Jimi Hendrix" })
    ).toBeInTheDocument();
  });

  test("renders with correct image, checking accessibility and source", () => {
    const img = screen.getByRole("img", { name: "Picture of Jimi Hendrix" });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("jimi-hendrix.jpg") // works regardless of full path
    );
  });

  test("renders with correct description", () => {
    expect(
      screen.getByRole("heading", {
        name: "Live from Monterey Pop festival - it was lit!",
      })
    ).toBeInTheDocument();
  });

  test("renders with correct date and time", () => {
    expect(screen.getByText("18 June 1967 - 3pm")).toBeInTheDocument();
  });

  test("renders with correct location", () => {
    expect(
      screen.getByText("Monterery Country Fairgrounds, Monterey, California")
    ).toBeInTheDocument();
  });
});

// ? Test for Gig favourite functionality - by passing state to Gig component from Parent
const GigFaveTestComponent = () => {
  const [favourite, setFavourite] = useState(false);
  const toggleFave = () => setFavourite((prev) => !prev);

  return <Gig {...jimiProps} favourite={favourite} toggleFave={toggleFave} />;
};

describe("Gig componenet favourite functionality - uses state", () => {
  test("favourite button toggles correctly", async () => {
    render(<GigFaveTestComponent />);

    const favButton = screen.getByRole("button");
    expect(favButton).toHaveTextContent("Favourite");

    await userEvent.click(favButton);
    expect(favButton).toHaveTextContent("Unfavourite");
    expect(screen.getByText("⭐️")).toBeInTheDocument();

    await userEvent.click(favButton);
    expect(favButton).toHaveTextContent("Favourite");
    expect(screen.queryByText("⭐️")).not.toBeInTheDocument();
  });
});
