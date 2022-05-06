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
          buttonText={'Сохранить'}
          onClose={this.closeAllPopups}
          isOpen={this.state.isEditProfilePopupOpen}>
            <label className="popup__form-field">
              <input id="username-input" className="popup__input-field" required type="text" name="username" placeholder="Имя пользователя" minLength="2" maxLength="40" />
              <span className="popup__input-error username-input-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="job-input" className="popup__input-field" required type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" />
              <span className="popup__input-error job-input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm
          name={'add-place'}
          title={'Новое место'}
          buttonText={'Создать'}
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
        </PopupWithForm>

        <PopupWithForm
          name={'change-avatar'}
          title={'Обновить аватар'}
          buttonText={'Сохранить'}
          onClose={this.closeAllPopups}
          isOpen={this.state.isEditAvatarPopupOpen}>
            <label className="popup__form-field popup__form-field_place_change-avatar">
              <input id="avatar-link-input" className="popup__input-field" required type="url" name="avatarLink" placeholder="Ссылка на аватар" />
              <span className="popup__input-error avatar-link-input-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm
          name={'card-delete-confirm'}
          title={'Вы уверены?'}
          buttonText={'Да'}>
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