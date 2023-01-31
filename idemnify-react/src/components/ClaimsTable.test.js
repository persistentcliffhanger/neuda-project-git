import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ClaimsTable from "./ClaimsTable";

jest.mock("../../data/DataFunctions", () => {
  return {
    getCountries: () => {
      return Promise.resolve({ status: 200, data: ["a", "b", "c"] });
    },
    addNewClaim: (newTrans) => {},
    getAllClaimsForPolicyNumber: () => Promise.resolve({ status: 200, data: [] }),
  };
});

test("countries dropdown is displayed when the countries are loaded", async () => {
  render(
    <BrowserRouter>
      <ClaimsTable searchTerm="" />
    </BrowserRouter>
  );
  const PolicyNumberSelector = await screen.findByRole("combobox", {}, 2000);
  expect(PolicyNumberSelector).toBeInTheDocument();
});

//write a test - that checks the number of countries displayed in the dropdown matches the expected number
test("countries dropdown contains the correct number of countries", async () => {
  render(
    <BrowserRouter>
      <ClaimsTable searchTerm="" />
    </BrowserRouter>
  );
  const arrayOfOptions = await screen.findAllByRole("option", {}, 2000);
  expect(arrayOfOptions).toHaveLength(4);
});
