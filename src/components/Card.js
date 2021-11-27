import React from "react";

const Card = ({card, onCardClick}) => {
  
  const handleClick = () =>{
    onCardClick(card);
  }

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button type="button" className="card__delete-button"></button>
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like-group">
        <button type="button" className="card__like-button"></button>
        <h3 className="card__sum-like">{card.likes.length}</h3>
      </div>
    </li>
  )
}

export default Card;