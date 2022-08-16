import React from "react";
import { IUser } from "../schemas/userSchema";

export interface IAppContext {
    siteUrl: string;
    initialUser: IUser;
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    initialUser: {},
});

export default AppContext;
