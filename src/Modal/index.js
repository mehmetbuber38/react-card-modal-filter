import './index.scss';

function Modal(props) {
  const { isActive, closeModal, data } = props;
  const handleClose = () => {
    closeModal && closeModal();
  };

  let close = () => {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.707.293 8 6.585 14.293.293a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L9.415 8l6.292 6.293a1 1 0 0 1-1.414 1.414L8 9.415l-6.293 6.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L6.585 8 .293 1.707A1 1 0 0 1 1.707.293z" fill="#283341" fillRule="nonzero" />
      </svg>
    )
  }
  return (
    <div className={`modal ${isActive ? 'modal-active' : ''}`}>
      <div className='modal-content'>
        <button className='modal-close' onClick={handleClose}>{close()}</button>
        {data && (
          <div>
            <h3>{data?.title}</h3>
            <p>{data?.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal;