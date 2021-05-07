console.clear();

const btnOpenModal = document.querySelector('.btn-modal');
const btnCloseModal = document.querySelector('.modal-close');
const modal = document.querySelector('.custom-modal');
const modalContent = document.querySelector('.modal-content');

const addClass = (ele, className) => ele.classList.add(className);

const removeClass = (ele, className) => ele.classList.remove(className);



const showModal = () => {
    addClass(modal, 'custom-modal-open');
    addClass(modalContent, 'show');
    removeClass(modalContent, 'hide');
};

const closeModal = () => {
    removeClass(modal, 'custom-modal-open');
    addClass(modalContent, 'hide');
    removeClass(modalContent, 'show');
}

btnOpenModal.addEventListener('click', () => {
    showModal();
});

modal.addEventListener('click', (e) => {
    if(e.target.getAttribute('data-id') === 'modal' || e.target === btnCloseModal){
        closeModal();
    }
    else{
        return
    }
    
})