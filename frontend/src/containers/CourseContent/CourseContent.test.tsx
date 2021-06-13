import React from "react";
import { CourseContents } from "../../api/api.interface";
import { render } from "../../utils/testUtils";
import { CourseContent, getImage } from "./CourseContent";

describe("components/CourseContent", () => {
  it("should render", () => {
    const { container } = render(<CourseContent />);
    expect(container).toMatchSnapshot();
  });
});

test("Test Default Image", () => {
  const cc: CourseContents = {
    title: "ada",
    description: "sddsdsdc",
    course: 1,
    created_by: 2,
  };
  const imgPath = getImage(cc);
  expect(imgPath).toBe(
    "https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622"
  );
});

test("Test Given Image", () => {
  const cc: CourseContents = {
    title: "ada",
    description: "sddsdsdc",
    course: 1,
    created_by: 2,
    img: "myImageURL",
  };
  const imgPath = getImage(cc);
  expect(imgPath).toBe("myImageURL");
});
