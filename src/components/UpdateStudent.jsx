import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

function UpdateStudent() {
  const { id } = useParams();
  const [state, setState] = useState({
    id: id,
    name: '',
    grade: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    StudentService.getStudentById(state.id).then((res) => {
      let student = res.data;

      setState({
        id: state.id,
        name: student.name,
        grade: student.grade
      });
    });
  }, [state.id]);

  const idHandler = (event) => {
    setState({ ...state, id: event.target.value });
  };

  const nameHandler = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const gradeHandler = (event) => {
    setState({ ...state, grade: event.target.value });
  };

  const updateStudent = (e) => {
    e.preventDefault();

    let student = {
      id: state.id,
      name: state.name,
      grade: state.grade
    };

    StudentService.updateStudent(student, state.id).then((res) => {
      navigate('/students');
    });
  };

  const cancel = () => {
    navigate('/students');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Student</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Student ID: </label>
                  <input placeholder="Id" readOnly="true" name="id" className="form-control"
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
                <button className="btn btn-success" onClick={updateStudent}> Update </button>
                <button className="btn btn-danger" onClick={cancel}> Cancel </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;