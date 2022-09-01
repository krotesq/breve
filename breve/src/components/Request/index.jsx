import './index.css'
import isURL from 'validator/lib/isURL'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import config from '../../config/app.config'
import { post } from '../../util/asyncfetch'

const Request = () => {

    const navigate = useNavigate();

    const [longUrl, setLongUrl] = useState('');
    const [customCode, setCustomCode] = useState('');

    const handleChangeUrl = (e) => {
        setLongUrl(e.target.value);
    }

    const handleChangeCode = (e) => {
        setCustomCode(e.target.value);
    }

    const handleClickPaste = async (e) => {
        e.preventDefault();
        setLongUrl(await navigator.clipboard.readText());
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!isURL(longUrl)) {
            return;
        }
        const response = await post(`https://${config.API_BASE}/v1/short`, {url: longUrl, cid: customCode})
        if (!response.success) {
            return;
        }
        console.log(response);
        navigate('/response', {state: {shortUrl: response.data.shortUrl}});
    }

    return (
        <div className='Request'>
            <form className='Request__form' onSubmit={handleFormSubmit}>
                <input type="text" id='txtLongUrl' name='longUrl' placeholder='Enter a link...' value={longUrl} onChange={handleChangeUrl} required autoComplete='off'/>
                <input type="text" id='txtCustomCode' name='customCode' placeholder='Enter a custom code' value={customCode} onChange={handleChangeCode} autoComplete='off'/>
                <input type="button" id='btnPaste' value='Paste URL from clipboard' onClick={handleClickPaste}/>
                <input type="submit" id='btnSubmit' value='Submit'/>
            </form>
        </div>
    )
}

export default Request