import React from "react";
import { IUser } from "../schemas/userSchema";

export interface IAppContext {
    siteUrl: string;
    activeUser: IUser;
    onSearchClick: any;
    isLightTheme: boolean;
    setIsLightTheme: any;
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    activeUser: {},
    onSearchClick: undefined,
    isLightTheme: false,
    setIsLightTheme: undefined
});

export default AppContext;
