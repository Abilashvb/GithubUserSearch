import axios from 'axios';
import { IUser } from '../schemas/userSchema';
const rootUrl = "https://api.github.com";

export const getUserData = (userName: string): Promise<IUser> => {
    return new Promise(async (resolve, reject) => {
        axios.get(`${rootUrl}/users/${userName}`)
        .then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    })
}