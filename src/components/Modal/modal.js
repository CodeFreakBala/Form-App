import classes from './modal.module.scss'

const Modal = (props) => {
  const { closeModal } = props

  return (
    <>
      <div className={classes.overlay} onClick={closeModal}></div>
      <div className={classes.content}>
        <div className={classes.close_btn}>
          <div className="icon-close" onClick={closeModal}></div>
        </div>
        {props.children}
      </div>
    </>
  )
}

export default Modal
