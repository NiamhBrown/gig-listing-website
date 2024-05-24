import { screen, render } from "@testing-library/react";

import Gig from "../src/components/Gig";

describe("Gig", () => {
  it("Should render a h3 with the correct name", async () => {
    render(      
    <Gig 
      artistName="Jamie T"
      imageSrc="./src/assets/jamie-t.jpeg"
      imageAlt="close up of Jamie T perfomring"
      description="From anthems like 'Sheila' to the heartfelt ballads of Emily's Heart,
      prepare to be taken on a musical journey like no other. Don't miss your chance to witness Jamie T
      in action – grab your tickets now!"
      eventTime="7pm 21/08/24"
      location="London"
    />);
    expect(screen.getByRole("heading")).toHaveTextContent("Jamie T");

    const timeParagraph = await screen.getByText("7pm 21/08/24")
    expect(timeParagraph).toBeTruthy();

    const locationParagraph = await screen.getByText("London")
    expect(locationParagraph).toBeTruthy();
  
  });
  });

