import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickersOperation } from "../redux/operations";
import id from "uniqid";
import {
  makeNameTickers,
  getDateFormat,
  getCurrentTime,
} from "../helper/helper";
import fetchTickersData from "../redux/selectors";
import { Table, Container } from "react-bootstrap";
import style from "./table.module.css";
import sprite from "../img/sprite.svg";

export default function TableTickers() {
  const dispatch = useDispatch();
  const allTickers = useSelector(fetchTickersData);
  // const [stateTickers, setStateTickers] = useState([]);

  useEffect(() => {
    dispatch(fetchTickersOperation());
  }, [dispatch]);

  const indexLastTickers = allTickers.length - 1;
  const lastTickers = allTickers[indexLastTickers];
  const indexPrevTickers = allTickers.length - 2;
  const prevTikers = allTickers[indexPrevTickers];

  const makeClass = (a, b) => (a > b ? style.green : style.red);

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
            {lastTickers &&
              lastTickers.map((ticker) => (
                <tr key={id()}>
                  <th> {makeNameTickers(ticker.ticker)} </th>
                  <th>{ticker.exchange}</th>
                  <th> {ticker.price}$</th>
                  <th>{ticker.change}</th>
                  <th>{ticker.change_percent}%</th>
                  <th>{ticker.dividend}</th>
                  <th>{ticker.yield}</th>
                  <th>{getDateFormat(ticker.last_trade_time)}</th>
                  <th>{getCurrentTime(ticker.last_trade_time)}</th>
                </tr>
              ))}
          </tbody>
        </Table>
        {/* <Table striped bordered hover>
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
            {allTickers.length > 0 &&
              allTickers.map((ticker) => (
                <tr key={id()}>
                  <th>{makeNameTickers(ticker[ticker.length - 1].ticker)} </th>
                  <th>{ticker[ticker.length - 1].exchange}</th>
                  <th
                    className={makeClass(
                      ticker[ticker.length - 1].price,
                      ticker[ticker.length - 2].price
                    )}
                  >
                    {ticker[ticker.length - 1].price}$
                    <svg className={style.down}>
                      <use href={sprite + "#icon-arrow-down"}></use>
                    </svg>
                  </th>
                  <th
                    className={
                      ticker[ticker.length - 1].change >
                      ticker[ticker.length - 2].change
                        ? style.green
                        : style.red
                    }
                  >
                    {ticker[ticker.length - 1].change}
                  </th>
                  <th
                    className={
                      ticker[ticker.length - 1].change_percent >
                      ticker[ticker.length - 2].change
                        ? style.green
                        : style.red
                    }
                  >
                    {ticker[ticker.length - 1].change_percent}%
                  </th>
                  <th
                    className={
                      ticker[ticker.length - 1].dividend >
                      ticker[ticker.length - 2].dividend
                        ? style.green
                        : style.red
                    }
                  >
                    {" "}
                    {ticker[ticker.length - 1].dividend}
                  </th>
                  <th
                    className={
                      ticker[ticker.length - 1].yield >
                      ticker[ticker.length - 2].yield
                        ? style.green
                        : style.red
                    }
                  >
                    {ticker[ticker.length - 1].yield}
                  </th>
                  <th>
                    {getDateFormat(ticker[ticker.length - 1].last_trade_time)}
                  </th>
                  <th>
                    {getCurrentTime(ticker[ticker.length - 1].last_trade_time)}
                  </th>
                </tr>
              ))}
          </tbody>
        </Table> */}
      </Container>
    </>
  );
}
