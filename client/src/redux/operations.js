import { socket } from "../services/socket";
import { fetchTickers } from "./actions";

export const fetchTickersOperation = () => async (dispatch) => {
  try {
    socket.emit("start");
    socket.on("ticker", (data) => dispatch(fetchTickers(data)));
  } catch (error) {
    console.log(error.message);
  }
};
