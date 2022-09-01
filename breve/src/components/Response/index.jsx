import './index.css'

import {useLocation, useNavigate} from 'react-router-dom'

const Response = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const handleClickCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(data.shortUrl);
      }

      const handleClickNew = (e) => {
        e.preventDefault();
        navigate('/');
      }
    

    return (
        <div className='Response'>
            <form className='Response__form'>
                <input type="text" id='txtShortUrl' placeholder='No short URL available' readOnly value={data.shortUrl} />
                <input type="button" id='btnCopy' value='Copy URL to clipboard' onClick={handleClickCopy}/>
                <input type="button" id='btnNew' value='Short another link' onClick={handleClickNew}/>
            </form>
        </div>
    )
}

export default Response