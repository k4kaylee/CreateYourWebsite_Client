import { AuthResponse } from './../models/response/AuthResponse';
import { AxiosResponse } from "axios";
import {$api, $authHost} from "../http/index";

// функции с запросами
export default class AuthService{
    static async login(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/login', {email, password, role:"ADMIN"}) //AuthResponse - чтобы видеть данные
    }

    static async registration(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/registration', {email, password, role:"ADMIN"}) //AuthResponse - чтобы видеть данные
    }

    static async logout():Promise<void>{
        return $api.post('/user/logout') //AuthResponse - чтобы видеть данные
    }

    static async check(){
        return $authHost.post('/user/registration') //AuthResponse - чтобы видеть данные
    }
} //данные которые отправил сервис, находятся в data