import { observer } from 'mobx-react-lite';
import React, {FC, useContext, useState} from 'react';
import { Context } from '..';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {store} = useContext(Context)
  
  return (
    <div>
      <input onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="Email"/>
      <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder="Password"/>
      <button onClick={()=>store.login(email, password)} >Log in</button>
      <button onClick={()=>store.registration(email, password)}>Registration</button>
    </div>
  );
};

export default observer(LoginForm);