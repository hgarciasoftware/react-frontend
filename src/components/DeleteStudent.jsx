import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

function DeleteStudent(props) {
  const [state, setState] = useState({
    id: props.match.params.id,
    name: '',
    grade: ''
  });

  useEffect(() => {
    StudentService.getStudentById(state.id).then((res) =>{
      let student = res.data;

      setState({
        id: state.id,
        name: student.name,
        grade: student.grade
      });
    });
  }, [state.id]);

  const deleteStudent = (e) => {
    e.preventDefault();

    let student = {
      id: state.id,
      name: state.name,
      grade: state.grade
    };

    console.log(student);
    StudentService.deleteStudent(state.id).then(res => {
      props.history.push('/students');
    });
  };

  const cancel = () => {
    props.history.push('/students');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Delete Student</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Student ID: </label>
                  <input placeholder="Id" readOnly="true" name="id" className="form-control"
                    value={state.id} />
                </div>
                <div className="form-group">
                  <label>Student Name: </label>
                  <input placeholder="Name" readOnly="true" name="name" className="form-control"
                    value={state.name} />
                </div>
                <div className="form-group">
                  <label>Student Grade: </label>
                  <input placeholder="Grade" readOnly="true" name="grade" className="form-control"
                    value={state.grade} />
                </div>
                <button className="btn btn-success" onClick={deleteStudent}> Delete </button>
                <button className="btn btn-danger" onClick={cancel}> Cancel </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteStudent;