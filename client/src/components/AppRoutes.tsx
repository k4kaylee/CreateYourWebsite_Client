import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '..';
import { IUser } from '../models/IUser';
import Editor from '../pages/Editor';
import MainPage from '../pages/MainPage';
import UserService from '../services/UserService';
import LoginForm from './LoginForm';

const AppRoutes = () => {
  // при первом запуске приложения это запускать 
  const [users, setUsers] = useState<IUser[]>([])
  const { store } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem('token')) {  //если в localStorage по ключу токен что-то есть тогда проверяем. Если юзер нажмет выйти, то это даже срабатывать не будет
      store.checkAuth()
    }
  }, [])
  if (store.isLoading) {
    return <div>Загрузка...</div>
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
        <Route path="/mainpage" element={<MainPage/>}  />
        <Route path="/editor" element={<Editor/>}  />
        {/* <Route path='/redirect' element={<Navigate to="/mainpage" />}></Route> */}
        {/* TODO: при переходе(если еще в ссылке не указывал mainpage, то не переходит) */}
      </Routes>
      :
      <Routes>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='*' element={<LoginForm />}></Route>
      </Routes>
  )
}
export default observer(AppRoutes)
