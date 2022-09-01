import './index.css'

import isURL from 'validator/lib/isURL'

import { useState } from 'react'

const Request = () => {

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

    const handleClickSubmit = async (e) => {
        e.preventDefault();
        // validate if longUrl is a valid URL
        if (!isURL(longUrl)) {
            return;
        }
    }

    return (
        <div className='Request'>
            <form className='Request__form'>
                <input type="text" id='txtLongUrl' name='longUrl' placeholder='Enter a link...' value={longUrl} onChange={handleChangeUrl}/>
                <input type="text" id='txtCustomCode' name='customCode' placeholder='Enter a custom code' value={customCode} onChange={handleChangeCode}/>
                <input type="button" id='btnPaste' value='Paste URL from clipboard' onClick={handleClickPaste}/>
                <input type="submit" id='btnSubmit' value='Submit' onClick={handleClickSubmit}/>
            </form>
        </div>
    )
}

export default Request