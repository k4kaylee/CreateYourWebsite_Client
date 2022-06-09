import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { useParams } from 'react-router-dom'
import { getBasket } from '../http/courseAPI';
import { REACT_APP_API_URL } from '../utils/consts';
import { fetchOneCourse } from "../http/courseAPI";
import NavBar from '../components/NavBar';
const Basket = () => {
    const { course } = useContext(Context)
    useEffect(() => {
        getBasket().then(data => course.setBaskets(data))
    }, [])
    let prices = 0;
    return (
        <>

            <div className="container" style={{ height: '100%' }} >
                <div className='subContainer' style={{ border: "2px solid grey" }}>
                    <h1 style={{}}>Корзина</h1>
                    <br></br>
                    <div className='row' style={{ width: '89%', justifyContent: 'space-between' }}>
                        <h3>Название</h3>
                        <h3>Цена</h3>
                    </div>
                    <br></br>

                    {course.basket.map(product =>
                        <div>
                            <div className="row">
                                <div className="basket">
                                    <div >
                                        <div className='row' style={{ width: '90%', justifyContent: 'space-between', fontFamily: 'Kdam Thmor Pro' }}>
                                            {/* <img src={REACT_APP_API_URL + product.course.img} style={{ width: '100px', height: '100px' }} /> */}
                                            <p>{product.course.name} </p>
                                            {/* <p style={{ marginLeft: "10px", marginRight: "5px" }}>ЗА</p> */}
                                            <p>{product.course.price} руб</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='row' style={{ width: '95%', justifyContent: "flex-end" }}>
                        {course.basket.map((price) =>
                            <p style={{ color: 'transparent' }}>{prices += Number(price.course.price)}</p>
                        )}
                        <h1>Итого: &nbsp;</h1>
                        <h1>{prices} руб</h1>
                    </div>
                </div>
                <NavBar />
            </div>
        </>
    )
}

export default Basket