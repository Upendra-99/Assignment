import React, { useState } from 'react';

const EmpInput = ({ handleItem }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState('');
  return (
    <div>
      <div className="formDiv">
        <form onSubmit={(e) => {
          console.log(e.currentTarget.value);
          console.log(e);
          e.preventDefault();
          setName("");
          setDepartment("");
          setGender("");
          setRole("");
          setSalary("");
          return handleItem({
            name,
            department,
            gender,
            role,
            salary,
          });
        }}>
          <input type="text" value={name} name="name" placeholder='Enter Name' onChange={e => setName(e.currentTarget.value)} />
          <input type="text" value={department} name="department" placeholder='Enter Department' onChange={e => setDepartment(e.currentTarget.value)} />
          <input type="text" value={gender} name="gender" placeholder='Enter Gender' onChange={e => setGender(e.currentTarget.value)} />
          <input type="text" value={role} name="role" placeholder='Enter Role' onChange={e => setRole(e.currentTarget.value)} />
          <input type="text" value={salary} name="salary" placeholder='Enter Salary' onChange={e => setSalary(e.currentTarget.value)} />
          <button type='submit' id='submit'>ADD EMPLOYEE</button>
        </form>
      </div>
    </div>
  )
}

export default EmpInput