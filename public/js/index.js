"use strict";var btnOpenModal=document.querySelector(".btn-modal"),btnCloseModal=document.querySelector(".modal-close"),modal=document.querySelector(".custom-modal"),modalContent=document.querySelector(".modal-content");console.log(modal);var addClass=function(o,e){return o.classList.add(e)},removeClass=function(o,e){return o.classList.remove(e)},showModal=function(){addClass(modal,"custom-modal-open"),addClass(modalContent,"show"),removeClass(modalContent,"hide")},closeModal=function(){removeClass(modal,"custom-modal-open"),addClass(modalContent,"hide"),removeClass(modalContent,"show")};btnOpenModal.addEventListener("click",function(){showModal()}),modal.addEventListener("click",function(o){"modal"!==o.target.getAttribute("data-id")&&o.target!==btnCloseModal||closeModal()});