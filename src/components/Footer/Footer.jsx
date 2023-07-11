import React, { useEffect, useState } from 'react';
import './Footer.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));


function Footer() {
  // create state to control Modal
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='footer-container'>
        <button className='contact-btn' onClick={() => setIsOpen(true)}>Contact Us</button>
        <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
        >
        <div className='modal-header'>
        <h2>Contact Us</h2>
        </div>
        <form>
          <label htmlFor="first-name"></label>
          <input type="text" id="firstName" placeholder='First Name'/>
          <label htmlFor="last-name"></label>
          <input type="text" id="lastName" placeholder='Last Name'/>
          <label htmlFor="message"></label>
          <textarea id="message" rows="4" placeholder='Write your message here'></textarea>
          <button type="submit">Submit</button>
        </form>
        </Modal>
        <p className='footer-text'>Made with &hearts; by mimo</p>
    </div>
  )
}

export default Footer