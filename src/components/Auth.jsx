import React from 'react'
import '../css/Auth.css';

export default function Auth() {
  return (
    <main>

      <div className="container">
        <h1>Бот отчётов</h1>
      </div>

      <div className="form">

        <div className="login-form">

          <div>
            <input type="text" placeholder="Ваш телеграм токен" />
          </div>


          <div>
            <button>
              <svg width="6vh" height="6vh" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.25 13L24.7 17.55L33.15 26H0V32.5H33.15L24.7 40.95L29.25 45.5L45.5 29.25L29.25 13ZM58.5 52H32.5V58.5H58.5C62.075 58.5 65 55.575 65 52V6.5C65 2.925 62.075 0 58.5 0H32.5V6.5H58.5V52Z" fill="white" />
              </svg>
            </button>
          </div>

        </div>

      </div>

    </main>
  )
}
