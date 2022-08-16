import React from "react";
import { IUser } from "../schemas/userSchema";

export interface IAppContext {
    siteUrl: string;
    activeUser: IUser;
    onSearchClick: any;
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    activeUser: {},
    onSearchClick: undefined
});

export default AppContext;
