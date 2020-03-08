import React, { useState, useEffect } from 'react';
import  courseStore  from '../flux/stores/courseStore';
import {loadCourses} from '../flux/actions/courseActions';

import {Link } from 'react-router-dom';

function Courses() {
    const [courses,setCourses] = useState(courseStore.getCourses());

   useEffect(() =>{
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange); //clean up on unmount
   },[]) 

   function onChange(){
        setCourses(courseStore.getCourses());
   }
  //  render(){
        return(
            <div>
                 <h2>Courses</h2>
                 <Link className="btn btn-primary" to="/create-course">Add Course</Link>
                 <table className="table">
                        <thead>
                            <tr>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>Category</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            { courses.map (courses =>{
                              return (
                                <tr key={courses.id}>
                                    <td><Link to={"/course/" + courses.slug}>{courses.title}</Link></td>
                                    <td>{courses.authorId}</td>
                                    <td>{courses.category}</td>
                                </tr>
                              )  
                            })
                            }
                        </tbody>
                 </table>
            </div>
           

        ) 
   // }

}


export default Courses;