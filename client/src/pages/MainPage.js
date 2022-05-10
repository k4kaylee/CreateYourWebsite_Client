import React from 'react'
import * as Icons from 'react-icons'
import {FaBars} from "react-icons/bi";
import NavBar from '../components/NavBar.js';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from 'react-animate-on-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




export default function MainPage() {
  // let animItems = document.querySelectorAll('.anim-items');
  // if (animItems.length > 0){
  //   function animOnScroll(params) {
  //     for (let i = 0; i < animItems.length; i++) {
  //       const animItem = animItems[i];
  //       const animItemHeight = animItem.offsetHeight;
  //       const animItemOffset = offset(animItem).top;
  //       const animStart = 4;
  //
  //
  //
  //       let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //
  //       if (animItemHeight > window.innerHeight) {
  //         animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //       }
  //
  //       if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)){
  //         animItem.classList.add('_active');
  //       } else {
  //         animItem.classList.remove('_active');
  //       }
  //     }
  //   }
  //   function offset(el) {
  //     const rect = el.getBoundingClientRect(),
  //       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  //       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  //   }
  // }
  const headerRef = useRef(null);
  const pointRef = useRef(null);
  const textRRef = useRef(null);
  const textLRef = useRef(null);
  // const lines = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const point = pointRef.current;
    const paragraphRight = textRRef.current;
    const paragraphLeft = textLRef.current;
    // const line = lines.current;
    gsap.fromTo(header, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
      trigger: header
    }})
    gsap.fromTo(paragraphRight, {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.7, scrollTrigger: {
      trigger: paragraphRight
    }})
    gsap.fromTo(paragraphLeft, {x: -30, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 1.4, scrollTrigger: {
      trigger: paragraphLeft
    }})


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
                    <p className='main-page__title orbitron'>CREATE YOUR WEBSITE</p>
                    {/*TODO: Сделать url для p */}
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
              <div className="headerText" ref={headerRef}>Создайте сайт своей мечты!</div>
              <p className="contentText" ref={textRRef}>Необходимо создать сайт, но не знаете как? Наш сервис готов вам в этом помочь!</p>
              <p className="contentPoint" ref={textLRef}>1. Выберите шаблон</p>
            </div>


        </div>
    )
}
