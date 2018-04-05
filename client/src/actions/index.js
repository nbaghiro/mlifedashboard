import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
	console.log(`Fetching User`);
	const res = await axios.get("/api/current-user");
	console.log(res.data);
	dispatch({ type: FETCH_USER, payload: res.data });
};
