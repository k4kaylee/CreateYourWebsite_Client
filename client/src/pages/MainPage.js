import React from 'react'
import { observer } from 'mobx-react-lite';
import * as Icons from 'react-icons'
import {FaBars} from "react-icons/bi";
import NavBar from '../components/NavBar.js';
import { useRef, useEffect, useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from 'react-animate-on-scroll';
import { gsap } from "gsap";
import $api from "../http";
import { Context } from '..';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const { store } = useContext(Context)
  const contents = [
    {
      id: "1",
      point: "Выберите шаблон",
      text: "Есть идея, но не знаете, как реализовать? Или, возможно, сайт нужно сделать в кратчайшие сроки? Попробуйте выбрать что-то из уже <b>готовых решений</b>. От трэвел-блога до личной визитки – найдётся всё!",
    },
    {
      id: "2",
      point: "Всё по своим местам",
      text: "Вы знаете, что делаете? Что ж, тогда осталось всего-то расположить элементы на вашей странице. Для этого воспользуйтесь <b>редактором</b>. Вы наверняка найдёте необходимые компоненты!"
    },
    {
      id: "3",
      point: "Создавайте",
      text: "Наш ресурс предоставляет вам полную свободу действий в подходе к созданию вашего сайта. Изменяйте готовые наброски или делайте всё полностью с нуля."
    }
  ];
  const bottomRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  
  useEffect(() => {
    const header = bottomRef.current;
    const paragraphRight = rightRef.current;
    const paragraphLeft = leftRef.current;
    gsap.fromTo(header, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
      trigger: header,
    }})
    gsap.fromTo(paragraphRight, {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.3, scrollTrigger: {
      trigger: paragraphRight
    }})
    gsap.fromTo(paragraphLeft, {x: -30, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.5, scrollTrigger: {
      trigger: paragraphLeft
    }})

    gsap.utils.toArray(".fadeIn").forEach(fade => {
        gsap.fromTo(fade, {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: fade
        }})
    });
    gsap.utils.toArray(".leftRef").forEach(paragraphLeft => {
        gsap.fromTo(paragraphLeft, {
          x: -30,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: paragraphLeft
        }})
    });
    gsap.utils.toArray(".rightRef").forEach(paragraphRight => {
        gsap.fromTo(paragraphRight, {
          x: 100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: paragraphRight
        }})
    });

  }, [])
    return (
        <div className='main-page'>
          <Link to="/login">
            <button onClick={()=>store.logout()}>Выйти</button>
          </Link>
           
            <ul className='row columns-ul'>
                <li className='columns columns_first'></li>
                <li className='columns columns_second'></li>
                <li className='columns columns_third'></li>
                <li className='columns columns_fourth'></li>
                <li className='columns columns_fifth'></li>
                <li className='columns columns_sixth'></li>
            </ul>

            <div className='main-page__wrapper'>
                <div className='indent'></div>
                <div className='main-page__text'>
                    <ul className='row'>
                        <li className='main-page__subtext ralewawy shadow-blue'>В РИТМЕ ЖИЗНИ</li>
                        <li className='main-page__subtext orbitron shadow-lemon'>BRAINCHILD</li>
                        <li className='main-page__subtext orbitron shadow-rose '>MOTIVATION</li>
                    </ul>
                   <p className='main-page__title orbitron'>CREATE YOUR WEBSITE</p>
                    <ul className='row'>
                        <li className='main-page__subtext ralewawy shadow-lemon'>ОБРАЗ МЫШЛЕНИЯ</li>
                        <li className='main-page__subtext orbitron shadow-rose '>STRATEGY</li>
                        <li className='main-page__subtext orbitron shadow-blue'>INNOVATION</li>
                        <li className='main-page__subtext ralewawy shadow-lemon'>СМЕЛЫЙ ВИЗУАЛ</li>
                    </ul>
                </div>
                <NavBar/>
            </div>

            <div class="contentBox">
              <div className="headerText" ref={bottomRef}>Создайте сайт своей мечты!</div>
              <p className="contentText" ref={rightRef}> Необходимо создать сайт, но не знаете как? Наш сервис готов вам в этом помочь!</p>
              <p className="contentPoint" ref={leftRef}>Выберите шаблон</p>
              <div className="imageDiv fadeIn"></div>
              <p className="contentSubText rightRef">Есть идея, но не знаете, как реализовать? Или, возможно, сайт нужно сделать в кратчайшие сроки? Попробуйте выбрать что-то из уже <b>готовых решений</b>. От трэвел-блога до личной визитки – найдётся всё!</p>
              <p className="contentPoint leftRef">Всё по своим местам</p>
              <div className="imageDiv fadeIn"></div>
              <p className="contentSubText rightRef">Вы знаете, что делаете? Что ж, тогда осталось всего-то расположить элементы на вашей странице. Для этого воспользуйтесь <b>редактором</b>. Вы наверняка найдёте необходимые компоненты!</p>
              <p className="contentPoint leftRef">Создавайте</p>
              <div className="imageDiv fadeIn"></div>
              <p className="contentSubText rightRef">Наш ресурс предоставляет вам полную свободу действий в подходе к созданию вашего сайта. Изменяйте готовые наброски или делайте всё полностью с нуля.</p>
              <p className="contentPoint fadeIn">Дерзайте!</p>
              <div className="contentStartButton fadeIn">Создать</div>
            </div>
            
        </div>
    )
}
export default observer(MainPage)