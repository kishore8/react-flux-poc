import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
//Action Creator
export function saveCourse(course){
    //hey dispatcher, go and tell all the stores that a course was created.
    var tempArr = JSON.parse(localStorage.getItem('courses'));
    tempArr.push(course);
    localStorage.setItem('courses',JSON.stringify(tempArr));
    dispatcher.dispatch({
        actionType:actionTypes.CREATE_COURSE,//action
        course: course
    });
}


export function loadCourses(){
    dispatcher.dispatch({
        actionType:actionTypes.LOAD_COURSES,//action
        courses: JSON.parse(localStorage.getItem('courses'))
    });
}