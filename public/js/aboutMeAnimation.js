const aboutMeInfoContainer = document.querySelector('.aboutMeInfoContainer');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutMeInfoContainer.classList.add('aboutMeAnimation');
        }
    });
});

observer.observe(aboutMeInfoContainer);