import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {isOpen: false}
    }
  }

  handleEditAvatarClick = () => {
    this.setState({
      isEditAvatarPopupOpen: true
    });
  }

  handleEditProfileClick = () => {
    this.setState({
      isEditProfilePopupOpen: true
    });
  }
  
  handleAddPlaceClick = () => {
    this.setState({
      isAddPlacePopupOpen: true
    });
  }

  handleCardClick = _ => {
    this.setState({
      selectedCard: {
        link: _.link,
        name: _.name,
        isOpen: true
      }
    });
  }

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {isOpen: false}
    })
  }
  
  render() {
    return (
      <div className="page">

        <Header />
        
        <Main 
          onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
          onEditAvatar={this.handleEditAvatarClick}
          onCardClick={this.handleCardClick}
        />
        
        <Footer />

        <PopupWithForm
          name={'edit-profile'}
          title={'Редактировать профиль'}
          onClose={this.closeAllPopups}
          isOpen={this.state.isEditProfilePopupOpen}>
            <label className="popup__form-field">
              <input id="username-input" className="popup__input-field" required type="text" name="username" minLength="2" maxLength="40" />
              <span className="popup__input-error username-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="job-input" className="popup__input-field" required type="text" name="about" minLength="2" maxLength="200" />
              <span className="popup__input-error job-input-error"></span>
            </label>
            <button className="popup__submit-button" type="submit" name="save">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm
          name={'add-place'}
          title={'Новое место'}
          onClose={this.closeAllPopups}
          isOpen={this.state.isAddPlacePopupOpen}>
            <label className="popup__form-field">
              <input id="place-title-input" className="popup__input-field" required type="text" name="name" placeholder="Название" minLength="2" maxLength="30" />
              <span className="popup__input-error place-title-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="place-link-input" className="popup__input-field" required type="url" name="link" placeholder="Ссылка на картинку" />
              <span className="popup__input-error place-link-input-error"></span>
            </label>
            <button className="popup__submit-button" type="submit" name="create">Создать</button>
        </PopupWithForm>

        <PopupWithForm
          name={'change-avatar'}
          title={'Обновить аватар'}
          onClose={this.closeAllPopups}
          isOpen={this.state.isEditAvatarPopupOpen}>
            <label className="popup__form-field">
              <input id="avatar-link-input" className="popup__input-field" required type="url" name="avatarLink" placeholder="Ссылка на аватар" />
              <span className="popup__input-error avatar-link-input-error"></span>
            </label>
            <button className="popup__submit-button popup__submit-button_place_change-avatar" type="submit" name="save">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm name={'card-delete-confirm'} title={'Вы уверены?'}>
          <button className="popup__submit-button popup__submit-button_place_card-delete-confirm" type="submit" name="confirm">Да</button>
        </PopupWithForm>

        <ImagePopup
          card={this.state.selectedCard}
          onClose={this.closeAllPopups}
        />

      </div>    
    );
  }
}

export default App;