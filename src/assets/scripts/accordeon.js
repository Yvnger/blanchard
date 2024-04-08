const categories = document.querySelectorAll('.category');
const categoryActiveClass = 'category--opened';
let openedCategory;

categories.forEach(cat => {
    const heading = cat.querySelector('.category__heading');

    heading.addEventListener('click', () => {
        toggleCat(cat);
    })
});

function toggleCat(category) {
    let current = category === openedCategory;

    if (openedCategory) {
        if (current) {
            closeCat(openedCategory);
        } else {
            closeCat(openedCategory);
            openCat(category);
        }
    } else {
        openCat(category);
    }
}

function openCat(category) {
    category.classList.add(categoryActiveClass);
    openedCategory = category;
}

function closeCat(category) {
    category.classList.remove(categoryActiveClass);
    openedCategory = null;
}