import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

let dd = 10;

export default function CourseList() {
  const courses = useSelector(state => {
    console.log(1111)
    return 11
  });
  // const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction(dd++))
  }

  console.log('child1')

  return (
    <>
      <ul>
        <div>{courses}</div>
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}
