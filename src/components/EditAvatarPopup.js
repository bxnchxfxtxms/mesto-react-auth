import React, { useState, useCallback, useRef } from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

  const inputRef = useRef()

  const [formValues, setFormValues] = useState({
    avatar: ''
  })

  const handleChange = useCallback(() => {
    setFormValues({
      avatar: inputRef.current.value
    })
  }, [setFormValues])

  function handleSubmit(event) {
    event.preventDefault();

    console.log(inputRef.current.value)
  
    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name={props.name}
      title={props.title}
      buttonText={props.buttonText}
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}>
        <label className="popup__form-field popup__form-field_place_change-avatar">
        <input
          onChange={handleChange}
          ref={inputRef}
          id="avatar-link-input"
          className="popup__input-field"
          required
          type="url"
          name="avatarLink"
          placeholder="Ссылка на аватар" />
        <span className="popup__input-error avatar-link-input-error"></span>
        </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;