import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

function ListStudents(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getStudents().then((res) => {
      setStudents(res.data);
    });
  }, []);

  const addStudent = () => {
    props.history.push('/add-student');
  };

  const editStudent = (id) => {
    props.history.push(`/update-student/${id}`);
  };

  const deleteStudent = (id) => {
    props.history.push(`/delete-student/${id}`);
  };

  const viewStudent = (id) => {
    props.history.push(`/view-student/${id}`);
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
              students.map(
                student => {
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
                }
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudents;