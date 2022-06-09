import React, { useContext } from 'react';
import { Context } from '../index'
import { ListGroup } from 'react-bootstrap';

const TypeBar = () => {
    const { course } = useContext(Context)
    // console.log(course.courses)
    return (
        <>
            {course.types.map(type =>
                <div
                    className='listGroup_item'
                    style={{ cursor: "pointer", width: "220px" }}
                    active={type.id === course.setSelectedType.id}
                    key={type.id}
                    onClick={() => {
                        course.setSelectedType(type);            
                        alert('isSelected') /* не забыть убрать*/
                        course.courses.filter(course => course.type == type)
                        // console.log(course);
                        course.setCourses(course.courses);
                    }}
                >
                    {type.name}
                </div>)}
                
        </>
    );
};

export default TypeBar;