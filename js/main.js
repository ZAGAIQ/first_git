// document.getElementById('backs').hidden = true
document.getElementById('hometxt').hidden = true;




let menus = [...document.querySelectorAll(".circular-menu")];

menus.map((menu) => {
    let items = menu.querySelectorAll(".circular-menu_item");
    let button = menu.querySelector(".circular-menu_button");

    let active = false;

    const length = items.length;
    const arc = 2 * Math.PI * (1/length);
    const radius = 40;

    button.addEventListener('click', (e) => {
        e.preventDefault();

        active= !active;

        if (active) {

            button.classList.add('circular-menu_button_active');

            for (let i = 0; i<length; i++) {
                const angle = i * arc;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                items[i].style.left = 50 + x + '%';
                items[i].style.top = 50 + y + '%';

            }

        } else {
            button.classList.remove('circular-menu_button_active');

            for (let i = 0; 1 <length; i++) {
                items[i].removeAttribute('style');
            }
        }

    });

});






document.getElementById('home').onclick = function() {
    document.getElementById('menu').style.cssText='transition: 0.5s ease; opacity:0;';
    document.getElementById('backs').style.cssText='transition: 0.5s ease; opacity:1;';
    setTimeout(udalitel,400);
    function udalitel() {
        document.getElementById('menu').hidden = true;
        document.getElementById('hometxt').hidden = false;
        
    }
    setTimeout(poyav,600);
    function poyav() {
    document.getElementById('hometxt').style.cssText='transition: 0.5s ease; opacity:1;';
    }
}

document.getElementById('backs').onclick = function() {
    document.getElementById('hometxt').style.cssText='transition: 0.5s ease; opacity:0;';
    document.getElementById('backs').style.cssText='transition: 0.5s ease; opacity:0;';
    setTimeout(udalitel,400);
    function udalitel() {
        document.getElementById('menu').hidden = false;
        document.getElementById('hometxt').hidden = true;
        
    }
    setTimeout(poyav,600);
    function poyav() {
        document.getElementById('menu').style.cssText='transition: 0.5s ease; opacity:1;';
    }
}