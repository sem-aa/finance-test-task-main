import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickersOperation } from "../redux/operations";
import fetchTickersData from "../redux/selectors";

import Table from "../components/Table/Table";

export default function Main() {
  const dispatch = useDispatch();
  const allTickers = useSelector(fetchTickersData);

  useEffect(() => {
    dispatch(fetchTickersOperation());
  }, [dispatch]);

  return <Table allTickers={allTickers} />;
}
