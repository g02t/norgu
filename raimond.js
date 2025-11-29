const tierData = [
    {
        "tier": "S",
        "items": [{"name": "MX Linux", "url": "https://mxlinux.org/"},{"name":  "Zorin OS", "url": "https://zorin.com/os/"},{"name":  "Linux Lite", "url": "https://www.linuxliteos.com/"},{"name":  "Elementary OS", "url": "https://elementary.io/"},{"name":  "Rocky Linux", "url": "https://rockylinux.org/"},{"name":  "AlmaLinux", "url": "https://almalinux.org/"},{"name":  "ClearOS", "url": "https://clearos.com/"},{"name":  "PCLinuxOS", "url": "https://pclinuxos.com/"},{"name":  "GeckoLinux", "url": "https://geckolinux.github.io/"},{"name":  "Puppy", "url": "https://puppylinux-woof-ce.github.io/"},{"name":  "VoidLinux", "url": "https://voidlinux.org/"},{"name":  "Solus", "url": "https://getsol.us/"}]
    },
    {
        "tier": "A",
            "items": [{"name":  "ParrotOS", "url": "https://www.parrotsec.org/"},{"name":  "Q4OS", "url": "https://www.q4os.org/"},{"name":  "Tails", "url": "https://tails.net/"},{"name":  "Peppermint OS", "url": "https://peppermintos.com/"},{"name":  "Pinguy OS", "url": "https://pinguy-os.sourceforge.net/"},{"name":  "GalliumOS", "url": "https://galliumos.org/"},{"name":  "BlueOnyx", "url": "https://www.blueonyx.it/"},{"name":  "OpenMandriva Lx", "url": "https://www.openmandriva.org/"},{"name":  "Daphile", "url": "https://www.daphile.com/index.html"},{"name":  "Bluestar Linux", "url": "https://sourceforge.net/projects/bluestarlinux/"},{"name":  "Hyperbola", "url": "https://www.hyperbola.info/"}]
    },
    {
        "tier": "B",
        "items": [{"name":  "Deepin", "url": "https://www.deepin.org/index/en"},{"name":  "SparkyLinux", "url": "https://sparkylinux.org/"},{"name":  "Trisquel", "url": "https://trisquel.info/"},{"name":  "Snakeoil OS", "url": "https://www.snakeoil-os.net/"},{"name":  "Bodhi", "url": "https://www.bodhilinux.com/"},{"name":  "BackBox", "url": "https://linux.backbox.org/"},{"name":  "ArtiX", "url": "https://artixlinux.org/"},{"name":  "Miracle", "url": "https://www.miraclelinux.com/"},{"name":  "GeckoLinux", "url": "https://geckolinux.github.io/"},{"name":  "Parabola", "url": "https://www.parabola.nu/"},{"name":  "ArchBang", "url": "https://archbang.org/"},{"name":  "Tiny Core", "url": "http://tinycorelinux.net/"}]
    },
    {
        "tier": "C",
        "items": [{"name":  "Volumio", "url": "https://volumio.com/"},{"name":  "Canaima", "url": "https://canaima.softwarelibre.gob.ve/"},{"name":  "LiureX", "url": "https://portal.edu.gva.es/lliurex/va/"},{"name":  "BOSS", "url": "https://bosslinux.in/"},{"name":  "BlankOn", "url": "https://blankon.id/"},{"name":  "CAINE", "url": "https://www.caine-live.net/"},{"name":  "Whonix", "url": "https://www.whonix.org/"},{"name":  "Lihuen", "url": "https://lihuen.linti.unlp.edu.ar/index.php/"},{"name":  "BlackPanther", "url": "https://www.blackpantheros.eu/"},{"name":  "Dragora", "url": "http://www.dragora.org/"},{"name":  "Bedrock", "url": "https://bedrocklinux.org/"},{"name":  "Asteroid OS", "url": "https://asteroidos.org/"}]
    },
    {
        "tier": "D",
        "items": [{"name":  "ToriOS", "url": "https://torios.top/"},{"name":  "CrunchBang plus plus", "url": "https://www.crunchbangplusplus.org/"},{"name":  "Qubes OS", "url": "https://www.qubes-os.org/"},{"name":  "Mer", "url": "https://wiki.merproject.org/wiki/Main_Page"},{"name":  "Obarun", "url": "https://web.obarun.org/"},{"name":  "BlackArch", "url": "https://www.blackarch.org/"},{"name":  "4M", "url": "https://4mlinux.com/index.php?page=home"},{"name":  "Plamo", "url": "https://plamolinux.org/"},{"name":  "Austrumi Linux", "url": "http://cyti.latgola.lv/ruuni/"},{"name":  "Linux From Scratch", "url": "https://www.linuxfromscratch.org/"},{"name":  "Refracta", "url": "https://www.refracta.org/"}] } ]; const tierListsContainer = document.getElementById('tier-lists');

tierData.forEach(tier => { // Tee list ja pane need erinevatesse hinnangutesse ja lisa nendele ka link
    const tierDiv = document.createElement('div');
    tierDiv.classList.add('tier', `tier-${tier.tier}`);

    const tierHeader = document.createElement('h2');
    tierHeader.textContent = `${tier.tier}`;
    
    const tierList = document.createElement('div');
    tierList.classList.add('tier-list');

    if (tier.items.length > 0) {
        const itemLinks = tier.items.map(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.name;
            link.target = "_blank";  // Ava link uues Tabis
            link.classList.add('lingistiil')
            return link.outerHTML; // Saab Lingi sellest
        });
        tierList.innerHTML = itemLinks.join(', ');
    } else {
        tierList.textContent = 'No items';
    }

    tierDiv.appendChild(tierHeader);
    tierDiv.appendChild(tierList);
    tierListsContainer.appendChild(tierDiv);
});

