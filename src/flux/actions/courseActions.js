import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import { courses as cour } from '../../../tools/mockData';
//Action Creator
export function saveCourse(course){
    //hey dispatcher, go and tell all the stores that a course was created.
    console.log(course);
    dispatcher.dispatch({
        actionType:actionTypes.CREATE_COURSE,//action
        course: course
    });
}


export function loadCourses(){
    dispatcher.dispatch({
        actionType:actionTypes.LOAD_COURSES,//action
        courses: cour
    });
}