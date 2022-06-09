import React, { useContext } from 'react';
import { Card, Row, Image } from 'react-bootstrap';
import CourseItem from './CourseItem';
import {Context} from '../index';

const CourseList = () => {
    // Заменить!    
    const {course} = useContext(Context)
    return (
        
        <div className="courseList_container">
            {course.courses.map(course => 
                <CourseItem key={course.id} course={course}/>
            )}
        </div>

    );
};

export default CourseList;