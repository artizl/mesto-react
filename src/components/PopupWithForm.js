const PopupWithForm = ({title, name, buttonTitle = 'Сохранить', isOpen, onClose, children, onPopupClick}) => {
  return (
    <div className={`popup popup${name} ${isOpen ? 'popup_is-opened' : ''}`} onClick={onPopupClick}>
      <div className="popup__container">
        <form className="popup__form" name={name} noValidate>
          <button type="button" className="popup__close-button" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__submit-button">{buttonTitle}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;