import React, { useCallback, useEffect, useState } from "react";
import { Config } from "../const/common";
import { IUser } from "../schemas/userSchema";
import { getUserData } from "../services/userServices";
import AppContext from "./AppContext";
const AppProvider: React.FC<IProps> = (props) => {

  const [activeUser, setActiveUser] = useState<IUser>({});

  useEffect(() => {
    getUserData(Config.defaultUser).then(res => {
      setActiveUser(res);
    });
  }, []);

  const onSearchClick = useCallback((searchString: string) => {
    getUserData(searchString).then(res => {
      setActiveUser(res);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl,
        activeUser,
        onSearchClick
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
