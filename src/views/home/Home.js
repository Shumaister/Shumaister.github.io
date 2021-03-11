import React from 'react'
import Logo from './profilePic.png'
import './App.css'

function Home() {
    return (
        <div className="App">

            <header className="App-header">
                <h1>Bienvenidx!</h1>
                <p>Esta pagina esta en contruccion! Pero te invito a ir a mi linkedin :)</p>
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/gabriel-maiori-646801170/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Mi Linkedin!
                </a>
                <br></br>
                <br></br>
                <br></br>
                <img src={Logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Home
