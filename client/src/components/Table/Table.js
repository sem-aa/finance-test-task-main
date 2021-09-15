import React from "react";
import id from "uniqid";
import {
  makeNameTickers,
  getDateFormat,
  getCurrentTime,
} from "../../helper/helper";
import { Table, Container } from "react-bootstrap";
import style from "./Table.module.css";
// import sprite from "../img/sprite.svg";

export default function TableTickers({ allTickers }) {
  const lastTickers = allTickers?.[allTickers.length - 1] || [];
  const prevTikers = allTickers?.[allTickers.length - 2] || [];

  const getPrevField = (tickerName, field) => {
    const exactTicker = prevTikers?.filter(
      (ticker) => ticker.ticker === tickerName
    );
    return exactTicker[0]?.[field];
  };

  const makeClass = (lastTicker, prevTicker) =>
    Number(lastTicker) > Number(prevTicker) ? style.green : style.red;

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Exchange</th>
              <th>Price</th>
              <th>Change</th>
              <th>Percent</th>
              <th>Dividend</th>
              <th>Yield</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {lastTickers?.map((ticker, index) => (
              <tr key={id()}>
                <>
                  <th>{makeNameTickers(ticker.ticker)} </th>
                  <th>{ticker.exchange} </th>
                  <th
                    className={makeClass(
                      ticker.price,
                      getPrevField(ticker.ticker, "price")
                    )}
                  >
                    {ticker.price} $
                  </th>
                  <th
                    className={makeClass(
                      ticker.change,
                      getPrevField(ticker.ticker, "change")
                    )}
                  >
                    {ticker.change}
                  </th>
                  <th
                    className={makeClass(
                      ticker.change_percent,
                      getPrevField(ticker.ticker, "change_percent")
                    )}
                  >
                    {ticker.change_percent}%{" "}
                  </th>
                  <th
                    className={makeClass(
                      ticker.dividend,
                      getPrevField(ticker.ticker, "dividend")
                    )}
                  >
                    {ticker.dividend}{" "}
                  </th>
                  <th
                    className={makeClass(
                      ticker.yield,
                      getPrevField(ticker.ticker, "yield")
                    )}
                  >
                    {ticker.yield}{" "}
                  </th>
                  <th>{getDateFormat(ticker.last_trade_time)}</th>
                  <th>{getCurrentTime(ticker.last_trade_time)}</th>
                </>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
