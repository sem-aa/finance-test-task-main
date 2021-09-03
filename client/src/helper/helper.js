import { tickersName } from "./constants";

export const makeNameTickers = (ticker) => {
  let name = "";
  switch (ticker) {
    case "AAPL":
      name = tickersName.AAPL;
      break;
    case "GOOGL":
      name = tickersName.GOOGL;
      break;
    case "MSFT":
      name = tickersName.MSFT;
      break;
    case "AMZN":
      name = tickersName.AMZN;
      break;
    case "FB":
      name = tickersName.FB;
      break;
    case "TSLA":
      name = tickersName.TSLA;
      break;

    default:
      name = tickersName.AMZN;
  }
  return name;
};

export const getDateFormat = (date) => date.slice(0, 10);

export const getCurrentTime = (time) => time.toString().slice(11, 19);
