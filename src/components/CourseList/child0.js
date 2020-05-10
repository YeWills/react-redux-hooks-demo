import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Child0 from './child0.js'

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  // const courses = 999;
  const courses = useSelector(state => {
    console.log(12)
    return state.data;
  });
  const dispatch = useDispatch();

  const [a, seta]=useState(0)

  function addCourse() {
    // seta(a+1)
    seta(1)
    // dispatch(addCourseAction(courses+1))
  }

  console.log('child 2 0')

  return (
    <>
      <ul>
      <div>{courses}</div>
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso courselist
      </button>
      <div>-------child 1 0</div>
      <div>
        {/* <Child0 /> */}
      </div>
    </>
  );
}
