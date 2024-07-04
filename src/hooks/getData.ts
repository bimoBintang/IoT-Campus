import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getDataUser = () => {
    const {
      data: users,
      error,
      isLoading,
    } = useQuery<User>({
      queryKey: ["user"],
      queryFn: async () =>
        await axios.get(`${process.env.GET_DATA_USER}`).then((res) => res.data.user),
      staleTime: 60 * 1000, // 1 minute
    });
  
    return { users, error, isLoading };
  };