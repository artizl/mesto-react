const ImagePopup = ({card, onClose, onPopupClick}) => {

  return (
    <div className={`popup popup-viewing ${card ? 'popup_is-opened' : ''}`} onClick={onPopupClick}>
      <div className="popup-viewing__conteiner">
        <button type="button" className="popup__close-button popup-viewing__close-button" onClick={onClose}></button>
        <img className="popup-viewing__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
        <p className="popup-viewing__title">{card ? card.name : ''}</p>
      </div>
    </div>
  )
}

export default ImagePopup;