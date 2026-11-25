import './ShortenForm.css';
import { useState } from 'react'

export default function ShortenForm() {
    const [url, setUrl] = useState('');

    function onFormSubmit(e) {
        e.preventDefault()
        console.log("submitted", url)
        setUrl('')
    }

    return (
        <section className="link_box">
            <h1>Sisesta link mida lühendada</h1>
            <form className="urlForm" onSubmit={onFormSubmit}>
              <input type='url' required className="urlInput" value={url} onChange={(e) => setUrl(e.target.value)}/> 
              <button className="urlFormSubmit">Lühenda</button>
            </form>
        </section>
    )
}