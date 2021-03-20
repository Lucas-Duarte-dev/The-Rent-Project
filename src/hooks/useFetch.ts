import useSWR from "swr";
import api from "../services/api";

export function useFetch<Data = any, Error = any>(
  url: string,
  token: string | null
) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url, {
      headers: { authorization: `Baerer ${token}` },
    });

    return response.data;
  });

  return { data, error, mutate };
}
