import { Component, useState } from 'react'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashBoard from './Components/DashBoard'
import AddStudent from './Components/AddStudent'
import StudentList from './Components/StudentList'
import UpdateData from './Components/UpdateData'

const myRouter = createBrowserRouter([
  {
    path: '', Component: DashBoard,
    children: ([
      { path: '', Component: AddStudent },
      { path: 'addStudent', Component: AddStudent },
      { path: 'studentList', Component: StudentList },
      { path: 'updateData', Component: UpdateData },
    ])
  }
])


function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
