import { useMutation } from "react-query";
import { login } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../utils/LocalStorage";

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(login, {
    onSuccess: ({ data }) => {
      setLocalStorage("token", data.token);
      alert("로그인되었습니다.");
      navigate("/");
    },
    onError: () => {
      alert("로그인에 실패하였습니다.");
    },
  });
};

export default useLogin;
