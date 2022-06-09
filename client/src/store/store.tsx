import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import MainPage from "../pages/MainPage";
import LoginForm from "../components/LoginForm";
import { API_URL } from "../http";
// Взаимодействие с глобальным хранилищем
export class Store{
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool:boolean){
        this.isAuth = bool; //меняем текущее значение на значение которое получаем в параметрах
    }

    setUser(user: IUser){
        this.user = user; 
    }
    
    setLoading(bool:boolean){
        this.isLoading = bool;
    }

    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        }   catch(e) {
            // console.log(e.response?.data?.message); // ?-проверка на существование(typescript) из-за этого не выводятся в консоль
            alert(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string){
        try{
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)//если дошло, то мы зарегестрированы
            this.setUser(response.data.user)
        }   catch(e) {
            // console.log(e.response?.data?.message); // ?-проверка на существование(typescript)
            alert(e.response?.data?.message);
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token'); //удаляем из localstorage
            this.setAuth(false)
            this.setUser({}as IUser)
        }   catch(e) {
            // console.log(e.response?.data?.message); // ?-проверка на существование(typescript)
            alert(e.response?.data?.message);
        }
    }

    async checkAuth(){
        this.setLoading(true)
        try{ //тут interceptor будет лишним, так как нам будет выдаваться ошибка 401, в notion написал про это
            const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, {withCredentials:true})
            localStorage.setItem('token', response.data.accessToken); //вызываем это так как он зарег
            this.setAuth(true);
            this.setUser(response.data.user)
        }   catch(e) {
            console.log(e.response?.data?.message); // ?-проверка на существование(typescript)
        } finally{ //выполняется и при ошибке и если все ок
            this.setLoading(false)
        }
    }
} 