import { useState } from 'react';
import axios from 'axios'
import './App.css'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import notfound from './assets/404.png'
import mist from './assets/mist.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'


function App() {

  const [value, setValue] = useState('');  // Input value
  const [data, setData] = useState({});  // all data 
  const [main, setMain] = useState('');   // to check whether condition
  const [error, setError] = useState(false);  // shows error message
  const [success, setSuccess] = useState(false);  // shows success or all info

  // Onchange when giving input
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value)
  }

  // This function hits api
  const FindWeather = async () => {
    if (value != '') {
      try {
        const api_key = "5786bde1f856bf36cb2613656e59e3a3";
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api_key}`);
        console.log(data);

        // Checking we have got a success or error by code
        if (data.cod == '404') {
          setError(true);
          setSuccess(false);
        }

        if (data.cod == '200') {
          setSuccess(true);
          setError(false);
        }

        // Setting up all data
        setMain(data.weather[0].main);
        setData({
          temp: Math.round(data.main.temp - 273.15),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          speed: data.wind.speed
        });

      } catch (error) {
        console.log("Error occurs");
        setError(true);
        setSuccess(false);
      }
    } else {
      alert("Enter City to find Weather");
    }
  }

  // Helper function to return appropriate image
  const getIcon = (desc) => {
    switch (desc) {
      case 'Clouds':
        return cloud;
      case 'Clear':
        return clear;
      case 'Rain':
        return rain;
      case 'Mist':
        return mist;
      case 'Snow':
        return snow;
      default:
        return notfound;
    }
  };

  return (
    <div className='mt-20 p-8 h-auto w-auto bg-[#fff] flex justify-center items-center flex-col rounded-[10px]'>
      {/* Input */}
      <div>
        <input onChange={(e) => { onChange(e) }} placeholder='Enter Your Location...' className='pl-2 mt-4 bg-[#e6f5fb] h-[50px] w-[270px] rounded-[7px] outline-none border-none text-lg' />
        <button onClick={FindWeather} className="fa-solid fa-magnifying-glass text-xl ml-4 bg-[#e6f5fb] h-[45px] w-[45px] rounded-full cursor-pointer"></button>
      </div>


      {/* Image with Degree */}

      {success &&
        <div>
          <img src={getIcon(main)} className='w-[220px]' alt="" />
          <h1 className='text-4xl font-bold text-center mt-6'>{data.temp}°C</h1>
          <h1 className='text-3xl  text-center mt-6'>{data.description}</h1>
        </div>
      }

      {/* Humidity & Speed */}
      {success &&
        <div className='mt-4 flex gap-16'>

          <div className='flex gap-2'>
            <i className="fa-solid fa-droplet text-4xl mt-2"></i>
            <div className='text-xl'>
              <span className='font-bold'>{data.humidity}%</span>
              <p>Humidity</p>
            </div>
          </div>


          <div className='flex gap-2'>
            <i className="fa-solid fa-wind text-4xl mt-2"></i>
            <div className='text-xl'>
              <span className='font-bold'>{data.speed}Km/Hr</span>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      }

      {
        error &&
        <div className='text-center p-4'>
          <h1 style={{ color: '#6b6b6b', fontSize: 25, padding: 20, fontWeight: 'bold' }}>Error, Location not Found</h1>
          <img src={notfound} className='w-[250px] ml-8 ' alt="" />
        </div>
      }

    </div>
  )
}

export default App
