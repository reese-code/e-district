function showSidebar() {
    const fullMenu = document.querySelector('.expanded-nav');

    if(fullMenu.style.display === 'flex') {
        fullMenu.style.display = 'none'
    } else {
        fullMenu.style.display = 'flex';
    }
}