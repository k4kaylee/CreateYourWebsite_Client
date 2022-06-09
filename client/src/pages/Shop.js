import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import AreaBar from '../components/AreaBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import CourseList from '../components/CourseList';
import NavBar from '../components/NavBar.js';
import { Context } from '..';
import Pages from '../components/Pages';
import { fetchAreas, fetchCourses, fetchTypes } from '../http/courseAPI';
const Shop = () => {
  const {course} = useContext(Context)


  useEffect(() => {
    fetchTypes().then(data => course.setTypes(data))
    fetchAreas().then(data => course.setAreas(data))
    fetchCourses(null, null, 1, 4).then(data => {
        course.setCourses(data.rows)
        course.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchCourses(course.selectedType.id, course.selectedArea.id, course.page, 4).then(data => {
        course.setCourses(data.rows)
        course.setTotalCount(data.count)
    })
}, [course.page, course.selectedType, course.selectedArea,])

  return (
    <div className="shop-container">
      <div className='row _shop'  >
        <div className='col' style={{ border: "none", animationName: "typeBar", animationDuration: "0.5s" }}  >
          <TypeBar />
        </div>
        <div className='col' style={{ border: "none", animationName: "areaBar", animationDuration: "0.5s" }} >
          <AreaBar />
          <CourseList />
          <Pages/>
        </div>
      </div>
      <NavBar />
    </div>

  );
}

export default observer(Shop);

