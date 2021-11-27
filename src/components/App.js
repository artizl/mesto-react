import '../index.css';
import '../vendor/fonts.css';
import React, { useEffect, useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

const App = () => {
  //стейт переменные
  const [isProfilePopupOpened, setIsProfilePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  const [isAddCardPopupOpened, setIsAddCardPopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //функция закрытия попапов
  const closeAllPopups = () => {
    setIsProfilePopupOpened(false)
    setIsEditAvatarPopupOpened(false)
    setIsAddCardPopupOpened(false)
    setSelectedCard(null)
  };

  const handleEsc = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups()
    }
  }

  const handlePopupClickClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeAllPopups()
    }
  }

  useEffect(() => {
    if (isProfilePopupOpened || isEditAvatarPopupOpened
        || isAddCardPopupOpened || selectedCard) {
          document.addEventListener("keydown", handleEsc)
        } else {
          return () => {
            document.removeEventListener("keydown", handleEsc)
          }
        }
  })

  //функции открытия попапов
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpened(true)
  };

  const handleEditProfileClick = () => {
    setIsProfilePopupOpened(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddCardPopupOpened(true)
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
  };

  return (
    <div className="page">

      <Header />

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      
      <Footer />

      <PopupWithForm 
        title="Редактировать профиль"
        name="_edit-profile"
        isOpen={isProfilePopupOpened}
        onClose={closeAllPopups}
        onPopupClick={handlePopupClickClose}
      >
        <input type="text" id="name-profile" name="name" className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="40" />
        <span id="name-profile-error" className="error"></span>
        <input type="text" id="job-profile" name="about" className="popup__input popup__input_type_job" placeholder="Профессиональная деятельность" required minLength="2" maxLength="200" />
        <span id="job-profile-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm 
        title="Новое место"
        name="_add-card"
        isOpen={isAddCardPopupOpened}
        onClose={closeAllPopups}
        onPopupClick={handlePopupClickClose}
      >
        <input type="text" id="name-mesto" name="name" className="popup__input popup__input_type_title" placeholder="Название" required minLength="2" maxLength="30" />
        <span id="name-mesto-error" className="error"></span>
        <input type="url" id="link-mesto" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
        <span id="link-mesto-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm 
        title="Обновить аватар"
        name="_edit-avatar"
        isOpen={isEditAvatarPopupOpened}
        onClose={closeAllPopups}
        onPopupClick={handlePopupClickClose}
      >
        <input id="edit-avatar-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_edit-avatar_link" name="link" required />
        <span id="edit-avatar-input-error" className="error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onPopupClick={handlePopupClickClose}
      />

    </div>
  );
}

export default App;