import React from "react";

export interface IAppContext {
    siteUrl: string;
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
});

export default AppContext;
