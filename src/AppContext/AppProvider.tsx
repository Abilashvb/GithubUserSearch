import React, { useCallback, useState } from "react";
import AppContext from "./AppContext";
const AppProvider: React.FC<IProps> = (props) => {

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl
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
