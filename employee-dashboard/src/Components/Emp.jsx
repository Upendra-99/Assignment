import React, { useState, useEffect } from 'react'
import EmpInput from './EmpInput';
import EmpList from './EmpList';
const Emp = () => {
  const [empList, setEmpList] = useState([]);
  const [error, setError] = useState(false);
  const [loded, setLoded] = useState(false);
  const [myFilter, setMyFilter] = useState(false);
  const [mySort, setMySort] = useState(true);
  const url = "http://localhost:3000/employees";
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    return fetch(url)
      .then(e => e.json())
      .then(e => setEmpList(e))
      .catch(e => setError(true))
      .finally(e => setLoded(true));
  }
  function save(param) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(param)
    })
      .then(e => e.json())
      .then(e => getData())
      .catch(e => setError(true))
      .finally(e => setLoded(true))
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees Dashboard</h1>
      {
        !loded ? "Loading ..." : error ? "Something went wrong from server " :
          <>
            <EmpInput handleItem={save} />
            <hr className='hr' />
            <div className="filter">
              <button onClick={() => setMyFilter(false)}>Show all Departments</button>
              <button onClick={() => setMyFilter("Marketing")}>Show Marketing</button>
              <button onClick={() => setMyFilter("HR")}>Show HR</button>
              <button onClick={() => setMyFilter("IT")}>Show IT</button>
              <button onClick={() => setMyFilter("Finance")}>Show Finance</button>
            </div>
            <div className="sort">
              <button onClick={() => setMySort(true)}>Sort by Salary Ascending</button>
              <button onClick={() => setMySort(false)}>Sort by Salary Descending</button>
            </div>
            <div className="description">
              {empList.filter(e => myFilter ? (e.department == myFilter) : true).sort((a, b) => mySort ? a.salary - b.salary : b.salary - a.salary).map((e, i) => <EmpList key={i} {...e} />)}
            </div>
          </>
      }
    </div >
  )
}

export default Emp;