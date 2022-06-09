import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import CreateArea from "../components/modals/CreateArea";
import CreateCourse from "../components/modals/CreateCourse";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [areaVisible, setAreaVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <>
        <div className="container" style={{justifyContent: 'center', display: 'flex',flexDirection: 'column'}}>
            <button
                className="btn__clickable contentStartButton"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </button>
            <button
                className="btn__clickable contentStartButton"
                onClick={() => setAreaVisible(true)}
            >
                Добавить область
            </button>
            <button
                className="btn__clickable contentStartButton"
                onClick={() => {setCourseVisible(true)}}
            >
                Добавить курс
            </button>
            <CreateArea active={areaVisible} setActive={setAreaVisible}/>
            <CreateCourse active={courseVisible} setActive={setCourseVisible}/>
            <CreateType active={typeVisible} setActive={setTypeVisible}/>
            
        </div>
        <NavBar/>
        </>
    );
};

export default Admin;