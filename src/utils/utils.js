export const renderLoading = (popupSelector, isLoading = false, title = 'Сохранить', loadingTitle = 'Загрузка...') => {
    const popup = document.querySelector(popupSelector);

    const button = popup.querySelector('.popup__submit-button');

    button.textContent = isLoading ? loadingTitle : title;
}
