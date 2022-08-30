import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Redirect = () => {
    const params = useParams();

    const [status, setStatus] = useState('Redirecting...');

    useEffect(() => {
      // get longUrl from api
      const code = params.id;
      const endpoint = `https://api.breve.club/v1/short?code=${code}`;
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
          console.log(res);
          window.location = res;
        }
        setStatus('Not found :(');
      })
    }, [])

  return ( 
      <div className='Redirect'>
          <h3>{status}</h3>
      </div>
  )
}

export default Redirect