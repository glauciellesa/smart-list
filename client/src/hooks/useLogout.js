import { useAuthContext } from "./useAuthContex";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove from localStorage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
