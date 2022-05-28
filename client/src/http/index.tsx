import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
export const API_URL = `http://localhost:8080/api`
const $api = axios.create({
    withCredentials: true, //чтобы к каждому запросу куки цеплялись автомотически
    baseURL: API_URL //по которому будет посылать url
})

$api.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}` //на запрос, токен храним в localStorage по ключу token
    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}` //на запрос, токен храним в localStorage по ключу token,
    };
    return config;
})
//теперь на каждый запрос будет цепляться токен 
$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true // + дополн проверка, чтобы если снова возвращалась 401 он всегда не делал refresh
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken) //прийдут некоторые токены, поэтому сохраняем их в localstorage
            return $api.request(originalRequest);  // хранит все данныедля запроса
        } catch (error) {
            console.log('НЕ АВТОРИЗОВАН');
        }
    }
    throw error; //если if не сработал, прокидываем наверх
})
export default $api;