import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '..';
import { IUser } from '../models/IUser';
import Loading from '../pages/Loading';
import MainPage from '../pages/MainPage';
import UserService from '../services/UserService';
import LoginForm from './LoginForm';
import Basket from '../pages/Basket';
import Admin from '../pages/Admin';
import Shop from '../pages/Shop';
import {authRoutes, publicRoutes} from "../routes";
import { ADMIN_ROUTE, BASKET_ROUTE, COURSE_ROUTE, LOADINGROUTE, MAIN_PAGE, SHOP_ROUTE } from '../utils/consts';
import CoursePage from '../pages/CoursePage';
const AppRoutes = () => {
  // при первом запуске приложения это запускать 
  const [users, setUsers] = useState<IUser[]>([])
  const { store } = useContext(Context)
  useEffect(() => {
    //проверка на isActivated должна быть где то тут, раньше локалсторадж так как там еще ничего нет
    if (localStorage.getItem('token')) {  //если в localStorage по ключу токен что-то есть тогда проверяем. Если юзер нажмет выйти, то это даже срабатывать не будет
      store.checkAuth()
    }
  }, [])
  if (store.isLoading) {
    return <Loading/>
  }
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  // if (!store.isAuth) { //если false то 
  //   return (
  //     <LoginForm/>
  //   )
  // }
  //   <div>
  //   <LoginForm />
  //   <button onClick={getUsers}>Получить пользователей</button>
  //   <h3>Которая кодом а не jsx, проверка</h3>
  // </div>


  return (
    store.isAuth ?
      <Routes>

        <Route path='/loading' element={<Loading />} />
        <Route path={ADMIN_ROUTE} element={<Admin/>}  />
        <Route path={SHOP_ROUTE} element={<Shop/>}  />
        {/* <Route path={BASKET_ROUTE} element={<Basket/>}  /> */}
        <Route path={MAIN_PAGE} element={<MainPage />} />
        <Route path='/course/:id' element={<CoursePage/>}/>
        <Route path='/course' element={<CoursePage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        
        {/* <Route path='/redirect' element={<Navigate to="/mainpage" />}></Route> */}
        {/* TODO: при переходе(если еще в ссылке не указывал mainpage, то не переходит) */}
      </Routes>
      :
      <Routes>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path={MAIN_PAGE} element={<MainPage />} />
        <Route path='*' element={<LoginForm />}></Route>
      </Routes>
  )
}
export default observer(AppRoutes)
