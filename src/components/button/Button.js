import React, { useEffect, useState } from 'react';
import './button.scss';
import resume from '../../assets/Brianna_Workman_Resume.pdf';

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
      {showToast && <div className='snackbar'>{toastText}</div>}
    </div>
  );
}

export default Button;
