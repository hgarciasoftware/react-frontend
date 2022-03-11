import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

function ListStudents() {
  const [state, setState] = useState({ students: [] });
  const navigate = useNavigate();

  useEffect(() => {
    StudentService.getStudents().then((res) => {
      setState({ students: res.data });
    });
  }, []);

  const addStudent = () => {
    navigate('/add-student');
  };

  const editStudent = (id) => {
    navigate(`/update-student/${id}`);
  };

  const deleteStudent = (id) => {
    navigate(`/delete-student/${id}`);
  };

  const viewStudent = (id) => {
    navigate(`/view-student/${id}`);
  };

  return (
    <div>
      <h2 className="text-center">Students List</h2>
      <div>
        <button className="btn btn-primary" onClick={addStudent}> Add Student</button>
      </div>
      <div>
        <p></p>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Student Name</th>
              <th>Student Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              state.students.map(
                student =>
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>
                      <button onClick={() => editStudent(student.id)} className="btn btn-primary">Update</button> 
                      <button onClick={() => deleteStudent(student.id)} className="btn btn-danger">Delete</button> 
                      <button onClick={() => viewStudent(student.id)} className="btn btn-primary">View</button> 
                    </td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudents;