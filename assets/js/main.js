const truncate = el => {
    const truncateItem = el.querySelector('.comment__store-name');

    el.classList.remove('comment__store--cutted');

    if (!el.truncateText) {
        el.truncateText = truncateItem.textContent;
    } else {
        truncateItem.textContent = el.truncateText;
    }

    const elHeigth = el.clientHeight;

    el.classList.add('comment__store--cutted');
    while (el.clientHeight > elHeigth) {
        truncateItem.textContent = truncateItem.textContent.replace(/\.\.\.$/, '').replace(/[\.\s,][^\.\s,]*$/, '') + '...';
    }
}

const storeBlockFunc = () => {
    const storeBlockItems = document.querySelectorAll('.comment__store');

    return () => storeBlockItems.forEach(e => truncate(e));
}

const storeBlock = storeBlockFunc();

document.addEventListener("DOMContentLoaded", storeBlock);
window.addEventListener("resize", storeBlock);
window.addEventListener("load", storeBlock);