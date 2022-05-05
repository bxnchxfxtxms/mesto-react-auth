import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card)
  }
  
  render() {
    return(
      <li className="element">
        <img className="element__image" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleClick}/>
        <button className="element__delete-button" type="button"></button>
        <div className="element__bottom-bar">
          <h2 className="element__title">{this.props.card.name}</h2>
          <button className="element__like-button" type="button"></button>
          <span className="element__like-counter">{this.props.card.likes.length}</span>
        </div>
      </li>
    )
  }
}

export default Card