import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { deleteTodo } from '../../api/api';

const useDeleteTodo = () => {
  const navigate = useNavigate();

  return useMutation(deleteTodo, {
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export default useDeleteTodo;
