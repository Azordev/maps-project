import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer, FormButtonPrimary, FormButtonDanger, FormContainer } from './Form.styled'

const FormContext = React.createContext({
  /** @type {Object} */
  form: {},
  /** @type {Function} */
  handleFormChange: () => {},
})

const Form = ({ children, onSubmit, formData = e => e, FormButtonConfirm = 'Confirmar', FormButtonReport = 'Reportar' }) => {
  const [form, setForm] = useState({})

  /** @param {React.ChangeEvent<HTMLInputElement>} event */
  const handleFormChange = event => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value
    formData(updatedForm)
    setForm(updatedForm)
  }

  /** @param {React.FormEvent<HTMLFormElement>} event */
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        <FormContext.Consumer>{children}</FormContext.Consumer>
      </FormContext.Provider>
      <ButtonContainer>
      <FormButtonDanger type="submit">{FormButtonReport}</FormButtonDanger>
      <FormButtonPrimary type="submit">{FormButtonConfirm}</FormButtonPrimary>
      </ButtonContainer>
    </FormContainer>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onSubmit: PropTypes.func,
  formData: PropTypes.func,
  FormButtonConfirm: PropTypes.string,
  FormButtonReport: PropTypes.string,
}

export default Form
