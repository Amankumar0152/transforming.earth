document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.transition-image');
    image.style.opacity = 1;

    const pageNumbers = document.querySelectorAll('.page-numbers span');
    pageNumbers.forEach(page => {
        page.addEventListener('click', () => {
            pageNumbers.forEach(p => p.classList.remove('active'));
            page.classList.add('active');
        });
    });

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentPage = 1;

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < 10) {
            currentPage++;
            updatePage();
        }
    });

    function updatePage() {
        pageNumbers.forEach(p => p.classList.remove('active'));
        pageNumbers[currentPage - 1].classList.add('active');
    }
});
