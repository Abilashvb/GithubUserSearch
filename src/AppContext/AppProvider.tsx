import React, { useCallback, useEffect, useState } from "react";
import { Config } from "../const/common";
import { IUser } from "../schemas/userSchema";
import { getUserData } from "../services/userServices";
import AppContext from "./AppContext";

const AppProvider: React.FC<IProps> = (props) => {
  const [activeUser, setActiveUser] = useState<IUser>({});
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
  const [isUserFound, setIsUserFound] = useState<boolean>(true);

  useEffect(() => {
    getUserData(Config.defaultUser).then(res => {
      setIsUserFound(true);
      setActiveUser(res);
    }).catch(err => {
      if (err.response.status === 404) {
        setActiveUser({});
        setIsUserFound(false);
      }
    })
  }, []);

  const onSearchClick = useCallback((searchString: string) => {
    getUserData(searchString).then(res => {
      setIsUserFound(true);
      setActiveUser(res);
    }).catch(err => {
      if (err.response.status === 404) {
        setActiveUser({});
        setIsUserFound(false);
      }
    })
  }, []);

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl,
        activeUser,
        onSearchClick,
        isLightTheme,
        setIsLightTheme,
        isUserFound
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
