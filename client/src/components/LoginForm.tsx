import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '..';
import { $api } from '../http';
import { IUser } from '../models/IUser';
import UserService from '../services/UserService';
import Modal from './Modal';

const LoginForm: FC = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])
  const [modalActive, setModalActive] = useState(false)
  // сделать как в user.jsx

  // const fetchUsers = async () => {
  //   // const users = await http.get("/users"); //!работает с файлом http.js, он там закидывает /users  в конец http
  //   const login = await $api.get("/login")
  // };
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  const [modal, setModal] = useState({
    title: "",
    body: "",
    id: "",
  });

  return (
    // store.isAuth ?
    <>
      {/* <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      <button onClick={() => store.login(email, password)} >Log in</button>
      <button onClick={() => store.registration(email, password)}>Registration</button>
      <button  onClick={() => setModalActive(true)}>Show modal</button> */}
      {/* <button onClick={getUsers}>Получить пользователей</button> */}
      {/* <Modal active={modalActive} setActive={setModalActive}>

      </Modal> */}
      <div className="container-login">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Please Sign Up, Sign In</h2>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="user@gmail.com" />
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="password" />
          <div className='row'>
            {/* <Link to="/mainpage"> */}
            {/* <button onClick={() => store.login(email, password)}> Log in </button> */}
            {/* </Link> */}
            {/* <Link > */}
              <button onClick={() => store.login(email, password)} className="btn__clickable"> Log in </button>
            {/* </Link> */}

            {/* <Link to=""> */}
              <button onClick={() => store.registration(email, password)} className="btn__clickable"> Registration </button>
            {/* </Link> */}
            {/* <button onClick={getUsers}>Получить пользователей</button> */}
          </div>

          {/* {props ? (<span className="error">ERROR</span>):(<p></p>)} */}
        </div>
      </div>
    </>

  );
};

export default observer(LoginForm);