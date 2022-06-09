import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
import { createCourse, fetchAreas, fetchCourses, fetchTypes } from "../../http/courseAPI";
import { observer } from "mobx-react-lite";

const CreateCourse = ({ active, setActive }) => {

    const { course } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => course.setTypes(data))
        fetchAreas().then(data => course.setAreas(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addCourse = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('img', file)
        formData.append('areaId', course.selectedArea.id)
        formData.append('typeId', course.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createCourse(formData).then(data => setActive())
        // console.log(info);
    }
    // console.log(price);
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                        <h3 style={{ marginBottom: "20px" }}>Добавить курс</h3>
                        <form>
                            <h4>Выберите тип: </h4>

                            <select >
                                {course.types.map(type =>
                                    <option
                                        onClick={() => course.setSelectedType(type)}
                                        key={type.id}>
                                        {type.name}
                                    </option>
                                )}
                            </select>

                        </form>

                        <form>
                            <h4>Выберите область: </h4>
                            <select >
                                {course.areas.map(area =>
                                    <option
                                        onClick={() => course.setSelectedArea(area)}
                                        key={area.id}
                                    >{area.name}</option>
                                )}
                            </select>
                        </form>

                        <form>
                            <input type="text" placeholder="Укажите название"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </form>

                        <form>
                            <input type="number" placeholder="Укажите цену"
                                value={price}
                                onChange={e => setPrice(e.target.value)} 
                                // onChange={e => setPrice(parseInt(e.target.value, 10))}
                                />
                        </form>

                        <form>
                            <input
                                type="file"
                                placeholder="Выберите изображение"
                                onChange={selectFile}
                            />
                        </form>

                        {/* <form>
                            <h4>Добавьте описание</h4>
                            <textarea></textarea>
                        </form> */}

                        {info.map(i =>
                            <form key={i.number}>

                                <input type="text" placeholder='Название'
                                    style={{ width: "20%" }}
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)} />

                                <input type="text" placeholder='Значение'
                                    style={{ width: "70%" }}
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)} />

                                <button className=""
                                    style={{ color: "red", width: "10%", height: "44px" }}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить</button>
                            </form>
                        )}
                        <div className='row'>
                            <button className="btn__clickable" style={{ float: "left" }} onClick={addInfo}>Новое свойство</button>
                            <button className="btn__clickable" onClick={addCourse}>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => {
                    setActive(false);
                }}
                className={active ? "modal-overlay open-overlay" : "modal-overlay"}
            ></div>
        </>
    )
}

export default observer(CreateCourse);