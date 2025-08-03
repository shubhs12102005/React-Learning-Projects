import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../../Firebase'

const AddStudent = () => {

    const [name, setName] = useState("");
    const [rno, setRno] = useState(null);
    const [phone, setPhone] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, rno, phone);

        const db = getDatabase(app);
        set(ref(db, 'student/' + rno), {
            studentName: name,
            studentPhone: phone
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setRno(e.target.value) }} type='number' placeholder='Enter Roll Number' />
                <input onChange={(e) => { setName(e.target.value) }} type='text' placeholder='Enter Your name' />
                <input onChange={(e) => { setPhone(e.target.value) }} type='number' placeholder='Enter Phone Number' />
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}

export default AddStudent