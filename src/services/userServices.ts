import axios from 'axios';
import { IUser } from '../schemas/userSchema';
const rootUrl = "https://api.github.com";

export const getInitialUsers = (): Promise<IUser[]> => {
    return new Promise((resolve, reject) => {
        axios.get(`${rootUrl}/users`).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    })
}