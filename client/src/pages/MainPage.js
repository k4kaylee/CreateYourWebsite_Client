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
                   <p className='main-page__title orbitron'>CREATE   YOUR   LIFE</p>
                    <ul className='row'>
                        <li className='main-page__subtext ralewawy shadow-lemon'>ОБРАЗ МЫШЛЕНИЯ</li>
                        <li className='main-page__subtext orbitron shadow-rose '>STRATEGY</li>
                        <li className='main-page__subtext orbitron shadow-blue'>INNOVATION</li>
                        <li className='main-page__subtext ralewawy shadow-lemon'>СМЕЛЫЙ ВИЗУАЛ</li>
                    </ul>
                </div>
                <NavBar/>
            </div>

            <div className="contentBox">
              
              <p className="headerText" ref={bottomRef}>Профессия твоей мечты!</p>
              <p className="contentPoint" ref={rightRef}> Выбирай сферу своих интересов и ныряй в мир новых знаний!</p>
              <p className="contentPoint" style={{color:"#F90B8E"}} ref={leftRef}>Выберите курс</p>
              
              
              <div className='contentBox-body'>
                <div className="imageDiv imageDivMarketing fadeIn"></div>
                <p className='contentBox-text orbitron rightRef'>БИЗНЕС-АНАЛИТИКА</p>
                <p className="contentSubText leftRef">Вы научитесь эффективно общаться с заказчиками, формулировать технические задания, улучшать и автоматизировать бизнес-процессы.</p>
              </div>
             
              {/* <p className="contentPoint leftRef">Всё по своим местам</p> */}
              <div className='contentBox-body'>
                <div className="imageDiv imageDivDigital fadeIn"></div>
                <p className='contentBox-text orbitron rightRef' >DIGITAL-МАРКЕТИНГ</p>
              </div>
              <p className="contentSubText leftRef"> Вы научитесь настраивать инструменты привлечения и удержания клиентов, познакомитесь с SMM, освоите веб-аналитику, сможете проводить полный анализ рынка и применять каждый инструмент на практике.ссы.</p>
             
              <div className='contentBox-body'>
                <div className="imageDiv imageDivAnimation fadeIn"></div>
                <p className='contentBox-text orbitron rightRef'>ОСНОВЫ КОМПЬЮТЕРНОЙ АНИМАЦИИ</p>
              </div>
              <p className="contentSubText leftRef"> Вы научитесь создавать сложные 2D- и 3D-анимации, работать с визуальными эффектами. На профессиональном уровне освоите Cinema 4D и After Effects.</p>
              <div className='contentBox-body'>
                <div className="imageDiv imageDivAutoDesk fadeIn"></div>
                <p className='contentBox-text orbitron rightRef'>AUTODESK REVIT</p>
              </div>
              <p className="contentSubText leftRef">Вы научитесь работать с системой архитектурно-строительного проектирования, грамотно подготавливать проектную документацию, вносить изменения на любой стадии выполнения проекта.</p>
              
              <div className='contentBox-body'>
                <div className="imageDiv imageDivAngl fadeIn"></div>
                <p className='contentBox-text orbitron rightRef' id='width'>АНГЛИЙСКИЙ ДЛЯ IT</p>
              </div>
              <p className="contentSubText leftRef">Вы научитесь общаться с коллегами, читать документацию на иностранном языке, разбираться в терминах, выступать на конференциях и вебинарах.</p>

              <div className='contentBox-body'>
                <div className="imageDiv imageDivGame fadeIn"></div>
                <p className='contentBox-text orbitron rightRef'>РАЗРАБОТКА ИГР НА UNREAL EMGINE 4</p>
              </div>
              <p className="contentSubText leftRef">Вы научитесь разработке игр на движке Unreal Engine 4, работе с Blueprints и C++, и создадите свои игры.</p>

              <div className='contentBox-body'>
                <div className="imageDiv imageDivUnity fadeIn"></div>
                <p className='contentBox-text orbitron rightRef'>РАЗРАБОТКА ИГР НА UNITY</p>
              </div>
              <p className="contentSubText leftRef">Вы научитесь создавать 3D-игры: разрабатывать сюжет, дизайн и механику.</p>

              <div className='contentBox-body '>
                <div className="imageDiv imageDivMinecraft fadeIn"></div>
                <p className='contentBox-text orbitron rightRef'>MINECRAFT ПРОГРАММИРОВАНИЕ</p>
              </div>
              <p className="contentSubText leftRef">Вы научитесь создавать 3D-вселенные, управлять искусственным интеллектом и весело проводить время.</p>

              {/* <div className="contentStartButton fadeIn">Создать</div> */}
              <Link to='/shop'>
                <button className="btn__clickable contentStartButton">ВЫБРАТЬ КУРС</button>
              </Link>
            </div>
            
        </div>
    )
}
export default observer(MainPage)