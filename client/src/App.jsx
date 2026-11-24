//import { useState } from 'react'
import './App.css';

function App() {

  return (
      <>
        <header class="page_header">
          <a href="#"><h1>URL Lühendaja</h1></a>
          <nav class="nav_list">
            <ul class = "nav_links">
              <li><a href="#">Klikkide edetabel</a></li>
              <li><a href="#">Vaata mitu klikki lingil on</a></li>
              <li><a href="#">Muuda link tagasi</a></li>
              <li><a href="#">Teata ebasobivast lingist</a></li>
            </ul>
          </nav>
        </header>

        <main class="main_content">
          <section class="link_box">
            
          </section>
          <section class="overview">

          </section>
        </main>

        <footer class="page_footer">
          <p>2026</p>
        </footer>

      </>
  )
}

export default App
