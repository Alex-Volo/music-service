import { useContext } from "react";
import { UserContext } from "providers/UserContextProvider";

export const useUser = () => useContext(UserContext);