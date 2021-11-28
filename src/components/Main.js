import React, { useEffect ,useState } from "react";
import api  from "../utils/Api";
import Card from "./Card";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {

  const [userName, setUSerName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUSerName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch(err => console.log(`Ошибка загрузки данных профиля: ${err}`))
  }, [])

  useEffect(() => {
    api
      .getCardList()
      .then((data) => {
        setCards(data)
      })
      .catch(err => console.log(`Ошибка загрузки данных карточек: ${err}`))
  }, [])

  return(
    <main>

      <section className="profile">
        <div className="profile__avatar-box">
          <img src={userAvatar} alt="аватарка" className="profile__avatar" />
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map(item =>
            <Card
              card={item}
              key={item._id}
              onCardClick={onCardClick} 
            />
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;