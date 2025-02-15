import { useQuery } from "@tanstack/react-query";
import { fetchSpacecrafts } from "../api/Api";

const useSpaceCrafts = () => {
  return useQuery({
    queryKey: ["spacecrafts"],
    queryFn: fetchSpacecrafts,
  });
};

export default useSpaceCrafts;
