import {type QueryKey, useQueryClient} from "@tanstack/react-query";

const useInvalidateQueries = () => {
  const queryClient = useQueryClient();
  const invalidateQueries = async (...queryKeys: QueryKey[]) => {
    await Promise.all(
      queryKeys.map((queryKey) =>
        queryClient.invalidateQueries({queryKey})
      )
    );
  };
  return {invalidateQueries}
}
export default useInvalidateQueries