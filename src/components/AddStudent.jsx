import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

function AddStudent() {
  const [state, setState] = useState({
    id: '',
    name: '',
    grade: ''
  });

  const navigate = useNavigate();

  const idHandler = (event) => {
    setState({ ...state, id: event.target.value });
  };

  const nameHandler = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const gradeHandler = (event) => {
    setState({ ...state, grade: event.target.value });
  };

  const saveStudent = (e) => {
    e.preventDefault();

    let student = {
      id: state.id,
      name: state.name,
      grade: state.grade
    };

    console.log(student);
    StudentService.createStudent(student)
      .then(res => {
        navigate('/students');
      })
      .catch(err => {
        console.log('record not saved.');
      });
  }; // closing save method

  const cancel = () => {
    navigate('/students');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Student</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Student ID: </label>
                  <input placeholder="Id" name="id" className="form-control"
                    value={state.id} onChange={idHandler} />
                </div>
                <div className="form-group">
                  <label>Student Name: </label>
                  <input placeholder="Name" name="name" className="form-control"
                    value={state.name} onChange={nameHandler} />
                </div>
                <div className="form-group">
                  <label>Student Grade: </label>
                  <input placeholder="Grade" name="grade" className="form-control"
                    value={state.grade} onChange={gradeHandler} />
                </div>
                <button className="btn btn-success" onClick={saveStudent}> Save </button>
                <button className="btn btn-danger" onClick={cancel}> Cancel </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;