const tierData = [
    {
        "tier": "S",
        "items": ["MX Linux", "Linux Mint", "Pop!_OS", "Ubuntu", "Linux Mint Debian Edition (LMDE)", "Zorin OS", "Linux Lite", "Elementary OS", "Xubuntu", "Kubuntu", "Fedora", "Kubuntu", "Fedora", "Rocky Linux", "AlmaLinux", "ClearOS", "PCLinuxOS", "OpenSUSE", "SUSE Linux Enterprise Desktop", "GeckoLinux", "Manjaro", "SystemRescue", "Puppy", "VoidLinux", "Alpine Linux", "LibreELEC", "Solus"]
    },
    {
        "tier": "A",
        "items": ["S.u.S.E","Salix", "Zorin OS", "Endless OS", "ParrotOS", "Q4OS", "Ubuntu Budgie", "KDE Neon", "Ubuntu MATE", "Tails", "Ubuntu Kylin", "Lubuntu", "Peppermint OS", "Pinguy OS", "LXLE", "Voyager", "GalliumOS", "Oracle Linux", "NethServer", "BlueOnyx", "OpenMandriva Lx", "Mageia", "Berry", "ALT", "EasyNAS", "Daphile", "ArcoLinux", "Bluestar Linux", "Netrunner Rolling", "Hyperbola", "SmoothWall Express", "IPFire", "NuTyx", "SliTaz", "Lakka", "Clear Linux", "Batocera", "GrapheneOS", "LineageOS"]
    },
    {
        "tier": "B",
        "items": ["Slackel", "Absolute linux", "Zwalk", "Pteus", "Wislax", "Dpin", "SrkyLinux", "OnMediaVault", "Eve", "Tsquel", "Wconverger", "Skeoil OS", "Untu Touch", "Bhi", "Untu-Pack", "BkBox", "VUX", "Stoku", "Untu-Pack", "DianEdu", "AiX", "Kppix", "Rtu", "CtOS Stream", "Singdale Linux", "Sentific Linux", "Estix", "Ahi", "Macle", "Vi", "SMServer", "Rostor", "Caulate Linux", "CldReady", "Poeus Kiosk", "GeoLinux", "Arx", "Pabola", "BBinux", "GrnBang", "OpWRT", "KaPux", "ArLinux", "LixConsole", "Pal", "TinCore", "Ophack", "PosarketOS", "OviO", "AOSC ", "Superrub2 Disk", "Pisi nux", "OmniRO"]
    },
    {
        "tier": "C",
        "items": ["NimbleX", "Frugalware", "Slax", "Kwort", "Debian", "MX Linux", "Netrunner", "RoboLinux", "Volumio", "Moode", "Raspberry Pi OS", "Canaima", "LiureX", "BOSS", "BlankOn", "OSGeo-Live", "CAINE", "Linkat", "LuminuX OS", "Whonix", "MAX", "Lihuen", "Clonezilla Live", "CERN Linux", "Endians", "Baruwa", "Moblin 2", "BlackPanther", "Jasmine", "Red Flag", "Fermi", "Chromium OS", "Arch Linux 32", "Arch Linux ARM", "LEAF", "T2", "CRUX", "Lunar Linux", "BrazilFW", "Openmamba", "Dragora", "dCore", "Minimal Linux Live", "Bedrock", "Asteroid OS", "SlaXBMC"]
    },
    {
        "tier": "D",
        "items": ["Slackware Linux","Slackware ARM", "SL4P", "NetSecL", "Kali", "Devuan", "AVLinux", "ToriOS", "Univention Corporate Server", "Finnix", "CALPon MiniNo", "Metamorphose", "Bunsen Labs", "CrunchBang plus plus", "Ultimate Edition", "Grml", "Kanotix", "Omoikane Arma", "Rockstor", "Qubes OS", "Tizen", "Mer", "NST", "BU Linux", "Mandriva", "Asianux", "NayuOS", "Obarun", "BlackArch", "LinHES", "KaOS", "Linux Router Project", "uClinux", "Openwall", "Thinstation", "NetStation", "ZeroShell", "Tiny SliTaz", "Ångström", "4M", "noop", "AOSP", "Android-x86", "Wifiway", "Armbian", "Plamo", "Parted Magic", "Austrumi Linux", "Arch linux", "Linux From Scratch", "PrimTux", "Refracta", "SELKS", "OSMC", "ToriOS", "YunoHost", "Turnkey", "Untangle", "VyOS", "siduction", "Proxmox", "PelicanHPC", "Greenie", "Leeenux", "Zentryal", "Ubuntu Studio", "gNewSense", "Peach OSI", "EuroLinux", "Red Hat Enterprise Linux", "DRBL", "CentOS", "MeeGo", "Sailfish OS", "Ojuba", "SuliX", "Linpus", "AnNyUng", "Gentoo", "Sabayon", "Pentoo", "PLD", "Funtoo", "Jurix", "Wtfplay-live", "Chromium OS", "Flatcar Container Linux", "ARCHLabs", "Audiophile Linux", "ROCK", "EPCop", "Sorcerer", "Source Mage", "GoboLinux", "Linux From Scratch", "NixOS", "Guix System", "NixOS", "Slimplicity", "PLoP", "Exherbo", "webOS", "piCorePlayer", "OpenELEC", "CyanogenMod", "LuneOS"]
    }
];

const tierListsContainer = document.getElementById('tier-lists');

tierData.forEach(tier => {
    const tierDiv = document.createElement('div');
    tierDiv.classList.add('tier');

    const tierHeader = document.createElement('h2');
    tierHeader.textContent = `Tier ${tier.tier}`;
    
    const tierList = document.createElement('div');
    tierList.classList.add('tier-list');
    tierList.textContent = tier.items.length > 0 ? tier.items.join(', ') : 'No items';

    tierDiv.appendChild(tierHeader);
    tierDiv.appendChild(tierList);
    tierListsContainer.appendChild(tierDiv);
});

