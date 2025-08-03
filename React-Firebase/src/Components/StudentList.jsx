import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, remove } from 'firebase/database'
import { app } from '../../Firebase'
import { useNavigate } from 'react-router-dom'

const StudentList = () => {
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState(null)

    useEffect(() => {
        const db = getDatabase(app);
        const studentRef = ref(db, 'student/');
        onValue(studentRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setStudentData(data);
        })
    }, [])

    const deleteData = (key) => {
        const db = getDatabase(app);
        const studentRef = ref(db, 'student/' + key);
        remove(studentRef);
    }

    return (
        <div>
            {
                studentData && (
                    <div>
                        {Object.entries(studentData).map(([key, value]) => {
                            return (
                                <div>
                                    <p>{value.studentName}  {value.studentPhone}</p>
                                    <button onClick={() => { deleteData(key) }}>Delete</button>
                                    <button onClick={() => { navigate("/updateData", { state: [key, value] }) }}>Update</button>
                                </div>
                            )
                        })}
                    </div>
                )

            }
        </div>
    )
}

export default StudentList