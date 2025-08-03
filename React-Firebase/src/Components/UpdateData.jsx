import { getDatabase, ref, set, update } from 'firebase/database';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { app } from '../../Firebase';

const UpdateData = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const [name, setName] = useState(location.state[1].studentName);
    const [rno, setRno] = useState(location.state[0]);
    const [phone, setPhone] = useState(location.state[1].studentPhone);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, rno, phone);

        const db = getDatabase(app);
        const studentRef = ref(db, 'student/' + rno)
        update(studentRef, {
            studentName: name,
            studentPhone: phone,
        }).then((res) => {
            navigate('/studentList');
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={rno} onChange={(e) => { setRno(e.target.value) }} type='number' placeholder='Enter Roll Number' />
                <input value={name} onChange={(e) => { setName(e.target.value) }} type='text' placeholder='Enter Your name' />
                <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type='number' placeholder='Enter Phone Number' />
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}

export default UpdateData