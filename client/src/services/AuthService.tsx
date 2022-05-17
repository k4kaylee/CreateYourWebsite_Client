import { AuthResponse } from './../models/response/AuthResponse';
import { AxiosResponse } from "axios";
import $api from "../http";

// функции с запросами
export default class AuthService{
    static async login(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password}) //AuthResponse - чтобы видеть данные
    }

    static async registration(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password}) //AuthResponse - чтобы видеть данные
    }

    static async logout():Promise<void>{
        return $api.post('/logout') //AuthResponse - чтобы видеть данные
    }
} //данные которые отправил сервис, находятся в data