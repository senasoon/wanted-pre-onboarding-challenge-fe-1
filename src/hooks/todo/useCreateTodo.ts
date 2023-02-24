import { useMutation, useQueryClient } from 'react-query';
import { createTodo } from 'api/api';

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export default useCreateTodo;
