import { useQuery } from 'react-query';
import { getTodos } from '../../api/api';

const useTodos = () => useQuery(['todos'], getTodos);

export default useTodos;
