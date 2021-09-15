import React from "react";
import Enzyme, { shallow } from "enzyme";
import Table from "./Table";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockTickers = [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "261.74",
    change: "166.56",
    change_percent: "0.06",
    dividend: "0.47",
    yield: "1.10",
    last_trade_time: "2021-09-15T07:23:06.000Z",
  },
  {
    ticker: "GOOGL",
    exchange: "NASDAQ",
    price: "185.40",
    change: "170.00",
    change_percent: "0.19",
    dividend: "0.41",
    yield: "1.83",
    last_trade_time: "2021-09-15T07:23:41.000Z",
  },
];

describe("Table component", () => {
  test("render", () => {
    const wrapper = shallow(<Table tickers={mockTickers} />);

    expect(wrapper).toMatchSnapshot();
  });
});

test("returns the default emty array when there is no tickers to map through", () => {
  const wrapper = shallow(<Table />);

  expect(wrapper).toMatchSnapshot();
});




