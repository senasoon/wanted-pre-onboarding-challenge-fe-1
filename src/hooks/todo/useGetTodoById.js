import { useQuery } from 'react-query';
import { getTodoById } from '../../api/api';

const useGetTodoById = (id) =>
  useQuery(['todo', id], () => getTodoById(id), {
    select: (data) => {
      return data.data.data;
    },
  });

export default useGetTodoById;
