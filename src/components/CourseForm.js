import React from 'react';
import TextInput from './TextInput';
import PropTypes from 'prop-types';

function CourseForm(props) {
    return(
        <form onSubmit={props.onSubmit}>
            <TextInput id="title"  label="Title" name="title"
                 onChange={props.onChange}  value={props.course.title} error={props.errors.title}/>
            <div className="form-group">
            <label>Author</label>
                <div className="field">
                <select className="form-control" name="authorId" onChange={props.onChange} value={props.course.authorId || ''}>
                    <option value="1">
                        ABC
                    </option>
                    <option value="2">
                        BBC
                    </option>
                    <option value="3">
                        POI
                    </option>
                </select>
                </div>
                {props.errors.authorId && (
                    <div className="alert alert-danger">
                        {props.errors.authorId}
                    </div>
                )}
            </div>
                <TextInput id="category"  label="Category" name="category"
                 onChange={props.onChange} error={props.errors.title}  value={props.course.category}/>
                <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    );
}

export default CourseForm;


CourseForm.propTypes ={
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}