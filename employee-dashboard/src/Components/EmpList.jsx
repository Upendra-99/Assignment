import React from 'react'

const EmpList = ({ name,
  department,
  gender,
  role,
  salary,
  id }) => {
  return <div className="card">
    <p className="elem">Id: {id}</p>
    <p className="elem">Name: {name}</p>
    <p className="elem">Gender: {department}</p>
    <p className="elem">Role: {gender}</p>
    <p className="elem">Department: {role}</p>
    <p className="elem">Salary: {salary}</p>
  </div>
}

export default EmpList;