import './ShortenForm.css';
import { useState } from 'react'

export default function ShortenForm() {
    const [url, setUrl] = useState('');

    function handleSubmit(e) {
        e.preventDefault() // Vajalik, et terve leht ei reloadiks peale 'lühenda' nupu vajutamist
        console.log("submitted", url)
        setUrl('')
    }

    return (
        <section className="link_box">
            <h2>Sisesta link mida lühendada</h2>
            <form className="urlForm" onSubmit={handleSubmit}>
              <input type='url' required className="urlInput" value={url} onChange={(e) => setUrl(e.target.value)}/> {/*e.target.value annab meile inputi hetkeväärtuse*/}
              <button className="urlFormSubmit" type="submit">Lühenda</button>
            </form>
        </section>
    )
}