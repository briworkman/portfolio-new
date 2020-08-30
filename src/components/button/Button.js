import React, { useEffect, useState } from 'react';
import './button.scss';
import resume from '../../assets/Brianna_Workman_Resume.pdf';

import styled from 'styled-components';

const Snackbar = styled('div')`
  min-width: 20vw;
  background-color: #ffff;
  color: #000;
  text-align: center;
  border-radius: 2px;
  padding: 20px;
  position: fixed;
  z-index: 1;
  left: 95%;
  transform: translateX(-100%);
  bottom: 2vh;
  font-size: 1rem;
  line-height: 1.5rem;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 2vh;
      opacity: 1;
    }
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 2vh;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeout {
    from {
      bottom: 2vh;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 2vh;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

function Button(props) {
  const [email] = useState('brianna-workman@lambdastudents.com');
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');

  const copyText = (value) => {
    window.navigator.clipboard.writeText(value);
    setShowToast(true);
    setToastText(`${value} copied to the clipboard.`);
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 2500);
    }
  }, [showToast, setShowToast]);

  return (
    <div>
      {props.class === 'dark' ? (
        <a href={resume} download>
          <button className='btn-dark'>Resume</button>
        </a>
      ) : (
        <button className='btn-light' onClick={() => copyText(email)}>
          Get in Touch
        </button>
      )}
      {showToast && <Snackbar>{toastText}</Snackbar>}
    </div>
  );
}

export default Button;
