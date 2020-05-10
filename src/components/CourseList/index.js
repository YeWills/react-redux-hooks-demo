import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Child1 from './child1.js';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  // const courses = 999;
  const courses = useSelector(state => {
    console.log('---')
    return 1;
  });
  const dispatch = useDispatch();

  const [a, seta]=useState(0)

  function addCourse() {
    seta(a+1)
    // dispatch(addCourseAction(courses))
  }

  console.log('courselist')

  return (
    <>
      <ul>
      <div>{courses}</div>
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso courselist
      </button>
      <div>-------child 1</div>
      <div>
        <Child1 ddd={e=>e}/>
        {/* <Child1 /> */}
      </div>
    </>
  );
}
