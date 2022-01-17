import React, { useState } from 'react'
import Card from '../../components/UI/Card/Card'
import Modal from '../../components/Modal/modal'
import classes from './Create.module.scss'
import Form from '../../components/Form/form'

function CreateComponent() {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [formName, setFormName] = useState('');

  const openAddForm = () => {
    setShouldOpenModal(true)
  }
  const closeModal = () => {
    setShouldOpenModal(false)
  }

  const clearFormName = () => {
    setFormName('')
  }

  return (
    <>
      <div className="container content-space">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <input type="text" className={classes.input}
              placeholder='Enter Form Name'
              value={formName}
              onChange={(event) => { setFormName(event.target.value)}}/>
            <button type="button" className="btn btn-success" onClick={openAddForm}>Create Form</button>
            {/* <Card></Card> */}
          </div>
        </div>
      </div>
      {shouldOpenModal && (
        <Modal closeModal={closeModal}>
          <Form closeModal={closeModal} clearFormName={clearFormName} formName={formName} />
        </Modal>
      )}
    </>
  )
}

export default CreateComponent
