//import { useState } from 'react'
import './App.css';
import ShortenForm from './components//ShortenForm'

function App() {

  return (
      <>
        <header className="page_header">
          <a href="#"><h1>URL Lühendaja</h1></a>
          <nav className="nav_list">
            <ul className = "nav_links">
              <li><a href="#">Klikkide edetabel</a></li>
              <li><a href="#">Vaata mitu klikki lingil on</a></li>
              <li><a href="#">Muuda link tagasi</a></li>
              <li><a href="#">Teata ebasobivast lingist</a></li>
            </ul>
          </nav>
        </header>

        <main className="main_content">
          <ShortenForm />
          <section className="overview">

          </section>
        </main>

        <footer className="page_footer">
          <p>2026</p>
        </footer>

      </>
  )
}

export default App
