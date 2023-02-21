import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../../api/api';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['todo'], id);
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export default useUpdateTodo;
