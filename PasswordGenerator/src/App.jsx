import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // All useState that is used to (Change in UI)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  // Fucntion to create Random Password
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // Function to copy
  const copyPasswordToClipboard = useCallback(() => {
     passwordRef.current?.select()
     window.navigator.clipboard.writeText(password)
  }, [password])

  // This function ||(useEffect hook) runs the passwordGenerator() whenever (changes made on dependecies)
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]) // <= Dependencies

  return (
    
    // Main div || component 
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-8 my-8 bg-gray-800 text-orange-500">

      {/* H1 Tag */}
      <h1 className='text-white text-center font-bold text-lg'>Password generator</h1>

      {/* Div to give (input:text && button) */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-10">
        <input
            type="text"
            value={password}
            className="outline-none w-full p-2 rounded mr-2 border-2 border-orange-500"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 rounded'
        >copy</button>  
     </div>

    {/* Div to show length of a Password */}
    <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={5}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>

      {/* Number Allowed Checkbox */}
      <div>
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)}
            } 
         />
          <label>Number: {numberAllowed}</label>
      </div>

      {/* Special Character Allowed Checkbox */}
      <div>
         <input type="checkbox" defaultChecked={charAllowed} id="charInput"
           onChange={() => {
             setCharAllowed((prev) => !prev)}
            } 
          />
          <label>Special Char: {numberAllowed}</label>
      </div>
   </div>
</div>
    
  )
}

export default App