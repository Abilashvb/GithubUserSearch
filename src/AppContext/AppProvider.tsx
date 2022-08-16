import React, { useCallback, useEffect, useState } from "react";
import { IUser } from "../schemas/userSchema";
import { getInitialUser } from "../services/userServices";
import AppContext from "./AppContext";
const AppProvider: React.FC<IProps> = (props) => {

  const [initialUser, setInitialUser] = useState<IUser>({});

  useEffect(() => {
    getInitialUser().then(res => {
      setInitialUser(res);
    })
  }, []);

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl,
        initialUser
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export interface IProps {
  siteUrl: string;
}
