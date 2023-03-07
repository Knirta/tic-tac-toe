import { useState, useEffect } from "react";
import './Modal.scss';

const Modal = ({ onChange }) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        document.body.classList.add('modal-open');
    }, []);

    const onClick = () => {
        setIsOpen(false);
        document.body.classList.remove('modal-open');
    }
    
    return (
        isOpen &&
        <div className='backdrop'>
            <div className='modal'>
                <button className='modal-close' onClick={onClick}>X</button> 
                <p>Choose who goes first:</p>
                <div className='modal-choice'>
                    <input type="radio" name="player" id="x" value={true} defaultChecked onChange={onChange}/>
                    <label htmlFor="x">X</label>
                    <input type="radio" name="player" id="o" value={false} onChange={onChange} />
                    <label htmlFor="o">O</label>
                </div>
            </div>
        </div>

    );
};

export default Modal;