import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h3 className="taCenter">
      Follow me{' '}
      <a href="https://www.instagram.com/creativ_ely_io/">insta</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://ely.io/">ely kahn</a>.
        </span>
      </div>
    </footer>
  </div>
)
