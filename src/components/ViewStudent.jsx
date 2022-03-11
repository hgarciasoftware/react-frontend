import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

function ViewStudent(props) {
  const [state, setState] = useState({
    id: props.match.params.id,
    student: {}
  });

  useEffect(() => {
    StudentService.getStudentById(state.id).then((res) => {
      setState({ id, student: res.data });
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">View Student Details</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Student ID: </label>
                  <input placeholder={state.student.id} readOnly="true" name="id" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Student Name: </label>
                  <input placeholder={state.student.name} name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Student Grade: </label>
                  <input placeholder={state.student.grade} name="grade" className="form-control" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;