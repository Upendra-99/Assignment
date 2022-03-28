import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const url = 'https://masai-api-mocker.herokuapp.com/';
    const history = useHistory();
    const init = {
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    };
    const [data, setData] = useState(init);
    function handleChange(e) {
        const target = e.target;
        let { name, value } = target;
        if (target.name == 'meritalStatus') {
            value = target.checked;
        }
        setData({ ...data, [name]: value });
    }
    function save(param) {
        return fetch(url+'auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(e => e.json())
            .then(e => history.push('/login'));
    }
    return (
        <div>
            <div className="formDiv" style={{ textAlign: 'center'}}>
                <h1>Registration</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    save(data);
                    setData(init);
                }}>
                    <input type="text" value={data.name} name='name' placeholder='name' onChange={handleChange} />
                    <br />
                    <input type="email" value={data.email} name='email' placeholder='email' onChange={handleChange} />
                    <br />
                    <input type="text" value={data.password} name='password' placeholder='password' onChange={handleChange} />
                    <br />
                    <input type="text" value={data.username} name='username' placeholder='username' onChange={handleChange} />
                    <br />
                    <input type="text" value={data.mobile} name='mobile' placeholder='mobile' onChange={handleChange} />
                    <br />
                    <input type="text" value={data.description} name='description' placeholder='description' onChange={handleChange} />
                    <br />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>);
}

export default Register