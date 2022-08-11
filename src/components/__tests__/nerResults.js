import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NerResults from "../nerResults";

test("check renders", () => {
  let mock_entities = [];
  render(<NerResults results={mock_entities} />);
});

test("check renders text without entities", () => {
  let mock_entities = [];
  let mock_text = "Lorem ipsum dolor sit amet";
  render(<NerResults results={mock_entities} text={mock_text} />);
  expect(screen.getByLabelText("ner-output")).toHaveTextContent(mock_text);
});

test("check renders text with entities", () => {
  let mock_entities = [
    {
      end_char: 121,
      label: "NORP",
      start_char: 115,
    },
    {
      end_char: 136,
      label: "GPE",
      start_char: 131,
    },
  ];

  let mock_text =
    "Shubhi Sharma remembers feeling the excitement rise in her throat as the aircraft lumbered " +
    "down the runaway in the Indian capital, Delhi, and lifted into the air.";

  render(<NerResults results={mock_entities} text={mock_text} />);

  const first_entity = screen.getByTestId("115");
  const second_entity = screen.getByTestId("131");

  expect(screen.getByLabelText("ner-output")).toContainElement(first_entity);
  expect(screen.getByLabelText("ner-output")).toContainElement(second_entity);
});
