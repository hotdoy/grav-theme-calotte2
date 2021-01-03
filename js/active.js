const Active = {

    Init: function() {
        const scope = document.getElementById('header');
        const links = scope.querySelectorAll('a');
        for (let link of links) {

            const href = link.getAttribute('href');

            if (!!href) {
                const currentUrl = window.location.href.split(window.location.hostname).pop();
                if (href === currentUrl) {
                    link.classList.add('active');

                    // SUB MENUS
                    const group = link.closest('.group');
                    if (!!group) {
                        group.classList.add('active');
                    }
                }                
            }
        }
    },
};

Active.Init();
