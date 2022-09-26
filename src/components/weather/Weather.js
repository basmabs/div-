
import { useState } from 'react';
import axios from 'axios';

const Weather = () => {

  const [temperatur, settemperature] = useState('');
  const [location, setlocation] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handeleclick = async () => {
    setIsLoading(true);
    const response = await axios.get(`http://api.weatherstack.com/forecast?access_key=6c14a42ba6fa4955885193e967d6038c&query=${location}`)
    console.log(response);
  }
  return (
    <div>
      <h1 className='text-center'>Cliquer ici pour obtenir la temperature</h1>

      <label className='mt-6'>Ecrivez la localisation: </label>
      <input value={location} type="text" className='form-control' onChange={(e) => setlocation(e.target.value)} /><br />

      <button onClick={handeleclick} className='btn btn-secondary'>Voir Détails</button>
      {isLoading===false ? <div>Loading...</div> :
        <div>
          <div>
            <p  >Pays : {location}</p>
            <p >Temperature : {temperatur.temperature}</p>
          </div>
        </div>}
    </div>
  );
}
export default Weather;