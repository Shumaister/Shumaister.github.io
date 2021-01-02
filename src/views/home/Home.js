import React from 'react'
import Logo from './profilePic.png'
import './App.css'

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>

                <a style="font-size:20px;font-family:Helvetica,Arial,sans-serif;color:#ffffff;text-decoration:none;color:#ffffff;text-decoration:none;padding:15px 25px;border-radius:2px;border:1px solid #7c72dc;display:inline-block">Acceder</a>

                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/gabriel-maiori-646801170/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mi Linkedin!
        </a>
            </header>
        </div>
    )
}

export default Home
