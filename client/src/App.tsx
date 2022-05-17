import React, { FC, useContext, useEffect, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage.js';
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from './components/LoginForm';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

const App: FC = () => {
  
  // при первом запуске приложения это запускать 
  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])
  useEffect(()=>{
    if(localStorage.getItem('token')){  //если в localStorage по ключу токен что-то есть тогда проверяем. Если юзер нажмет выйти, то это даже срабатывать не будет
      store.checkAuth()
    }
    },[])
    if(store.isLoading){
      return <div>Загрузка...</div>
    }
    if(!store.isAuth){
      return(
        <div>
          <LoginForm/>
          <button onClick={getUsers}>Получить пользователей</button>
        </div>
      )
    }

    async function getUsers(){
      try {
        const response = await UserService.fetchUsers();
        setUsers(response.data)
      } catch (e) {
        console.log(e); 
      }
    }

  return (
    <div className="App">
      {/* <Router>
        <MainPage/>
      </Router>     */}
      <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'Авторизируйтесь'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'Подтвердите аккаунт!'}</h1>
      <button onClick={()=>store.logout()}>Выйти</button>
      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
      {users.map(user=>
        <div key={user.email}>{user.email}</div>
      )}
    </div>
  );
}

export default observer(App); //чтобы mobx отслеживал