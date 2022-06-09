import React, { useContext,useState } from 'react';
import { Context } from "../../index";
import {createType} from "../../http/courseAPI";
const CreateType = ({ active, setActive }) => {
    const { course } = useContext(Context)
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            setActive()
        })
    }
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                        <h3 style={{ marginBottom: "20px" }}>Добавить тип</h3>
                        <form>
                            <h4>Укажите название</h4>
                            <input type="text"
                                value={value}
                                onChange={e => setValue(e.target.value)} />
                        </form>

                        <button className="btn__clickable" onClick={addType}>Добавить</button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "red" }}
                onClick={() => {
                    setActive(false);
                }}
                className={active ? "modal-overlay open-overlay" : "modal-overlay"}
            ></div>
        </>
    );
}

export default CreateType;