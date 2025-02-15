import axios from "axios";

const url = "http://localhost:5000/spacecrafts";

export const fetchSpacecrafts = async () => {
  const { data } = await axios.get(url);
  return data;
};
