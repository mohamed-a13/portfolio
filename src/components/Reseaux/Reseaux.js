import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-brands-svg-icons";

const Reseaux = () => {
  return (
    <div>
      <div className="socialNetwork">
          <ul className="menuReseaux">
            <li>
              <a href="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={Icons.faGithub} /></a>
            </li>
            <li>
              <a href="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={Icons.faFacebookF} /></a>
            </li>
            <li>
              <a href="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={Icons.faLinkedin} /></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Reseaux
