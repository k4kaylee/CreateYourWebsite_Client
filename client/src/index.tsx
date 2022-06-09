import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Store } from './store/store';
import CourseStore from "./store/CourseStore";
import UserStore from "./store/UserStore";

interface State {
  store: Store,
  user: UserStore,
  course: CourseStore
}

export const store = new Store();
export const user = new UserStore();
export const course = new CourseStore();

export const Context = createContext<State>({
  store,
  user,
  course
})

ReactDOM.render(
  <Context.Provider value={{
    user,
    course,
    store
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);
