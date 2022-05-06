import React from 'react'
import Card from './Card'
import { api } from '../utils/Api.js'

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: []
    }
  }

  componentDidMount() {
    api.getUserInfo()
    .then(_ => {
      this.setState({
        userName: _.name,
        userDescription: _.about,
        userAvatar: _.avatar
      })
    })
    .catch(err => { 
      console.log(err)
    })
    api.getCards()
    .then(_ => {
      this.setState({
        cards: _
      })
    })
    .catch(err => { 
      console.log(err)
    })  
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <div className="profile__avatar-overlay" onClick={this.props.onEditAvatar}></div>
            <img className="profile__avatar" src={this.state.userAvatar} alt="Аватар пользователя" />
          </div>
          <div className="profile__info">
            <div className="profile__info-line">
              <h1 className="profile__username">
                {this.state.userName}
              </h1>
              <button className="profile__edit-button" type="button" onClick={this.props.onEditProfile}></button>
            </div>
            <div className="profile__info-line">
              <p className="profile__user-bio">
                {this.state.userDescription}
              </p>
            </div>
          </div>
          <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
        </section>

        <section className="elements">
          <ul className="elements__grid">
            {this.state.cards.map(card => (
              <Card
                card={card}
                key={card._id}
                onCardClick={this.props.onCardClick}
              />
            ))}
          </ul>
        </section>
      </main>
    )
  }
}

export default Main