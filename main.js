const themeToggle = document.getElementById('theme-toggle');

    
    themeToggle.addEventListener('click', () => {
       
        const currentTheme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';

       
        document.documentElement.classList.toggle('dark-theme');
        document.documentElement.classList.toggle('light-theme');

       
        if (currentTheme === 'dark') {
            themeToggle.innerText = '☀️'; 
        } else {
            themeToggle.innerText = '🌙'; 
        }
    });