import { useState, useEffect, useRef } from 'react';
import { useEscapeKey } from './useEscapeKey';
import { useClickOutside } from './useClickOutside';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalRef = useRef(null);

  useClickOutside(closeModal, modalRef);

  useEscapeKey(closeModal);

  return (
    isOpen && (
      <div className="backdrop">
        <div className="modal" ref={modalRef}>
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          <p>Choose who goes first:</p>
          <div className="modal-choice">
            <input
              type="radio"
              name="player"
              id="x"
              value={true}
              defaultChecked
              onChange={handleChange}
              onClick={closeModal}
            />
            <label htmlFor="x">X</label>
            <input
              type="radio"
              name="player"
              id="o"
              value={false}
              onChange={handleChange}
              onClick={closeModal}
            />
            <label htmlFor="o">O</label>
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Modal;
