import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { fetchOneCourse } from "../http/courseAPI";
import { REACT_APP_API_URL } from '../utils/consts';
import { addToBasket } from "../http/courseAPI";
import { useNavigate } from "react-router-dom"
const CoursePage = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        info: [
            
        ]
    })
    const { id } = useParams()
    useEffect(() => {
        fetchOneCourse(id).then(data => setCourse(data))
    }, [])
    const add = () => {
        const formData = new FormData()
        formData.append('courseId', id)
        addToBasket(formData).then(response => alert(`Товар ` + course.name + ` был добавлен в вашу корзину!`))
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col" style={{ border: "none" }}>
                        <img
                            className='coursePageImg'
                            src={REACT_APP_API_URL + course.img}
                        />
                    </div>
                    <div>
                        <h2 style={{ marginBottom: "40px" }}>{course.name}</h2>
                        <h2 style={{ marginBottom: "10px" }}>От: {course.price} руб.</h2>
                        {/* <button className="btn__clickable contentStartButton">Добавить в корзину</button> */}
                        <button className="btn__clickable " onClick={add}>Добавить в корзину</button>
                    </div>
                </div>
                <button
                    variant={"outline-dark"}
                    // className="btn__clickable "
                    onClick={() => navigate('/basket')}
                >
                    Корзина
                </button>
                <div>
                    <h1 style={{ marginLeft: "16px" }}>О курсе</h1>
                    {course.info.map((info, index) =>
                        <div key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                            {info.title}: {info.description}
                        </div>
                    )}

                </div>
            </div>
            <NavBar />
        </>
    );
};

export default CoursePage;