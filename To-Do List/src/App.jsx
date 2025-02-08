import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import './App.css';
import { stringify, v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
}, [])


  const saveLocalStorage = (first) => {
      localStorage.setItem("todos", JSON.stringify(todos))  
  }

  const toggleFinish = (e) => {
    setshowFinished(!showFinished);
  }

  // Function used to handle Add toTodo
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveLocalStorage()
  };

  // Function used to handle Edit toTodo
  const handleEdit = (e, id) => {
      let t = todos.filter((i) => i.id === id)
      setTodo(t[0].todo)
      let newtodos = todos.filter((item) => {
        return item.id != id
      })
      setTodos(newtodos)
      saveLocalStorage()
  };

  // Function used to handle Delete toTodo
  const handleDelete = (e, id) => {
    let newtodos = todos.filter((item) => {
      return item.id != id
    })
    setTodos(newtodos)
    saveLocalStorage()
  };

  // Function used to handle the change in inputbox 
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Used to handle the checkbox whether it is true or false
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    })

    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
    saveLocalStorage()
  };

  return (
    <>
  
      <div className="container mt-6 p-4 bg-violet-200 w-6/12 rounded mx-auto min-h-[80vh]">
        <h1 className='font-bold text-center text-2xl'>myTasks - Manage your To-Dos at one place</h1>
        <h2 className="text-lg font-bold mt-6 ml-24">Add a To-Do</h2>
        <div className="addTodo flex justify-center items-center">
         
          <input
            value={todo}
            onChange={handleChange}
            className="w-96 h-8 rounded border border-orange-400 outline-none "
            type="text"
          />
  
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-violet-500 p-1 px-5 ml-4 text-white rounded-md hover:bg-violet-700 font-bold"
          >
            Add
          </button>
        </div>
  
        <input className='mt-4 ml-8'
          type="checkbox"
          onChange={toggleFinish}
          checked={showFinished}
          name=""
          id=""
        />
        <span className='ml-2 font-bold text-lg '>Show All</span>

        <h2 className="text-lg font-bold mt-4 ml-8">Your To-Dos</h2>
  
        <div className="flex flex-col w-full justify-center ">
          {todos.length === 0 && <div>No To-Dos to display</div>}
  
          {todos.map((item, index) => (
            (showFinished || !item.isCompleted) && (
              <div
                key={index}
                className="flex justify-between items-center mt-4"
              >
                <div className="flex gap-4 ml-8">
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    name={item.id}
                    id=""
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
  
                <div className="buttons mr-8">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-violet-500 p-1 px-5 ml-4 text-white rounded-md hover:bg-violet-700 font-bold"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-red-600 p-1 px-5 ml-4 text-white rounded-md hover:bg-red-700 font-bold"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}  
export default App;
