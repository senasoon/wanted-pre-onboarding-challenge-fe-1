import { useMutation } from "react-query";
import { signUp } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../utils/LocalStorage";

const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation(signUp, {
    onSuccess: ({ data }) => {
      setLocalStorage("token", data.token);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    },
    onError: (e) => {
      alert(e);
    },
  });
};

export default useSignUp;
