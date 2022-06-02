import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="content-wrapper">
          <ul>
            <li>
              <a href="https://www.facebook.com/"><BsFacebook /></a>
            </li>
            <li>
              <a href="https://www.twitter.com/"><BsTwitter /></a>
            </li>
            <li>
              <a href="https://www.github.com/"><BsGithub /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/"><BsInstagram /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
