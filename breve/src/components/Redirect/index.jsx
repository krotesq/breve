import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Redirect = () => {

    const [longUrl, setLongUrl] = useState('n/a');

    const params = useParams();

    useEffect(() => {
      // get longUrl from api
      const code = params.id;
      const endpoint = `http://127.0.0.1:3001/v1/short?code=${code}`;
      fetch(
        endpoint,
        {
          method: 'GET',
          headers: {'Content-type': 'application/json; charset=UTF-8'}
        }
      )
      .then(res => res.json())
      .then(res => res.data.longUrl)
      .then(res => window.location.replace(res))
    }, [])

  return ( 
      <div className='Redirect'>
          <h3>Redirecting...</h3>
      </div>
  )
}

export default Redirect