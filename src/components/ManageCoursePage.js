import React, {useState,useEffect} from 'react';
import {Prompt} from 'react-router-dom';
import  CourseForm from '../components/CourseForm';
//import { useState } from 'react';
import * as CourseActions from '../flux/actions/courseActions';
import CourseStore from '../flux/stores/courseStore';

import {toast } from 'react-toastify';

const ManageCourseProps = props =>{
    const [errors,setErrors] = useState({});
    const [courses, setCourses] = useState(CourseStore.getCourses());
    const [course,setCourse] = useState({
        id:null,
        slug:'',
        title:'',
        authorId: null,
        category:""
    });

    useEffect(() => {
        CourseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        if(courses.length === 0){
            CourseActions.loadCourses();
        }
        // if(slug){
        //     setCourse(course.getCourseBySlug(slug));
        // }
        return () => CourseStore.removeChangeListener(onChange);
    },[props.match.params.slug]);


    function onChange(){
        setCourses(CourseStore.getCourses());
    }
    function formIsValid(){
        const _errors = {};
        if(!course.title) _errors.title = 'title is required';
        if(!course.authorId) _errors.authorId = 'author is required';
        if(!course.category) _errors.category = 'category is required';
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    } 
    function handleChange({target}){
        setCourse({
            ...course,
            [target.name]:target.value
        });
    }


    function handleSubmit(event){
        event.preventDefault();
        if(!formIsValid()) return;
        CourseActions.saveCourse(course);
        toast.success('course saved');
        props.history.push("/courses");
    }
    return (
             <React.Fragment>
                 <h2>Manage Course</h2>
                 {/* <Prompt when={true} message="Are you sure you want to leave?"></Prompt>
                 {props.match.params.slug} */}
                 <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit}/>
                
             </React.Fragment>
    );

}

export default ManageCourseProps;