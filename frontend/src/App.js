import React from "react";

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/8459716?s=460&v=4"
                alt="Afonso Amaro"
                className="src"
              />
              <div className="user-info">
                <strong>Afonso Amaro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software Engineer</p>
            <a href="https://github.com/doominating">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/8459716?s=460&v=4"
                alt="Afonso Amaro"
                className="src"
              />
              <div className="user-info">
                <strong>Afonso Amaro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software Engineer</p>
            <a href="https://github.com/doominating">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/8459716?s=460&v=4"
                alt="Afonso Amaro"
                className="src"
              />
              <div className="user-info">
                <strong>Afonso Amaro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software Engineer</p>
            <a href="https://github.com/doominating">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/8459716?s=460&v=4"
                alt="Afonso Amaro"
                className="src"
              />
              <div className="user-info">
                <strong>Afonso Amaro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software Engineer</p>
            <a href="https://github.com/doominating">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;