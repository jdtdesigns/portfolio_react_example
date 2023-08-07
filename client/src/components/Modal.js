function Modal(props) {
  return (
    <div className={`modal ${props.showModal ? 'show' : ''}`}>
      <h1>Student Name Added!</h1>
    </div>
  )
}

export default Modal;