import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Redirect = () => {
    const params = useParams();

    const [status, setStatus] = useState('Redirecting...');

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
      .then((res) => res.json())
      .then(res => res.data.longUrl)
      .then((res) => {
        if (res) {
          window.location.replace(res);
        }
        setStatus('Not found!');
      })
    }, [])

  return ( 
      <div className='Redirect'>
          <h3>{status}</h3>
      </div>
  )
}

export default Redirect