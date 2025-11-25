// Andmebaas distrode infoga
const distrod = {
    // S-TIER
    nobara: {
        nimi: "Nobara Project",
        tekst: "S-Tier: See on Fedora versioon, mida arendab GloriousEggroll (Proton-GE looja). See sisaldab kõiki vajalikke parandusi kernelis, mis teevad mängimise ülimalt sujuvaks.",
        link: "https://nobaraproject.org/",
        draiveriTugi: "Sisaldab spetsiaalseid kernelitugevdusi ja paigaldab Nvidia/AMD draiverid automaatselt."
    },
    bazzite: {
        nimi: "Bazzite",
        tekst: "S-Tier: Põhineb Fedora Atomicul. See on loodud pakkuma täpselt samasugust kogemust nagu Steam Deck, aga sinu lauaarvutis. Ideaalne pultidega mängimiseks ja HDR toega.",
        link: "https://bazzite.gg/",
        draiveriTugi: "Disainitud Valve'i riistvarale sarnaselt, tagades uusima ja stabiilse draiveritugi (Nvidia/AMD)."
    },
    garuda: {
        nimi: "Garuda Linux",
        tekst: "S-Tier: Arch-põhine distro, mis on optimeeritud jõudluseks. Kasutab Zen kernelit ja Btrfs failisüsteemi. Väga silmapaistva 'Dragonized' disainiga.",
        link: "https://garudalinux.org/",
        draiveriTugi: "Arch-põhine (rolling-release) tagab koheselt uusimad Mesa/Nvidia draiverid ja Zen kernel on optimeeritud jõudlusele."
    },
    steamos: {
        nimi: "SteamOS (Holo)",
        tekst: "S-Tier: Valve'i ametlik operatsioonisüsteem Steam Deckile. See on teinud revolutsiooni Linuxi mängumaailmas. Arvutis kasutamiseks on soovitatav kasutada Bazzite'i või HoloISO-d.",
        link: "https://store.steampowered.com/steamos",
        draiveriTugi: "Disainitud ainult Steam Decki jaoks, draiverid on eelnevalt Valve'i poolt testitud ja paigaldatud."
    },
    chimera: {
        nimi: "ChimeraOS",
        tekst: "S-Tier: Muudab sinu arvuti sisuliselt mängukonsooliks. Käivitub otse Steam Big Picture režiimi. Väga lihtne ja hooldusvaba.",
        link: "https://chimeraos.org/",
        draiveriTugi: "Kasutab 'Immutable' süsteemi, kus draiverid on pakitud ja eeltestitud."
    },

    // A-TIER
    popos: {
        nimi: "Pop!_OS",
        tekst: "A-Tier: Põhineb Ubuntul. Üks parimaid valikuid algajatele, eriti kui sul on Nvidia kaart, sest draiverid on juba ISO-sse sisse ehitatud.",
        link: "https://pop.system76.com/",
        draiveriTugi: "Saadaval on spetsiaalne Nvidia ISO, mis teeb paigalduse erakordselt lihtsaks. Kernel on kaasaegsem kui Ubuntul."
    },
    endeavour: {
        nimi: "EndeavourOS",
        tekst: "A-Tier: 'Arch Linux, mida on lihtne paigaldada'. Annab sulle ligipääsu AUR-ile ja uusimale tarkvarale ilma keerulise seadistuseta.",
        link: "https://endeavouros.com/",
        draiveriTugi: "Arch-i eelis - uusimad Mesa ja Nvidia draiverid on kergesti saadaval. Nõuab paigaldamisel ühekordset tegevust."
    },
    arch: {
        nimi: "Arch Linux",
        tekst: "A-Tier: Edasijõudnutele. Sa ehitad süsteemi ise nullist üles. Eeliseks on see, et sul on alati kõige uuemad paketid ja draiverid.",
        link: "https://archlinux.org/",
        draiveriTugi: "Saad alati uusimad draiverid. Nõuab manuaalset paigaldust ja hooldust, aga tagab parima jõudluse."
    },
    fedora: {
        nimi: "Fedora Workstation",
        tekst: "A-Tier: Kasutab väga uut tehnoloogiat (Pipewire, Wayland). Väga stabiilne, kuid vajab alguses natuke seadistamist, et kõik mängud tööle saada.",
        link: "https://getfedora.org/",
        draiveriTugi: "AMD (Mesa) tugi on suurepärane. Nvidia tugi nõuab RPM Fusion repositooriumi lisamist."
    },
    cachy: {
        nimi: "CachyOS",
        tekst: "A-Tier: Arch-põhine distro, mis on äärmuslikult optimeeritud kiiruse jaoks. Kasutab spetsiaalseid CPU instruktsioone, et võita mängudes paar lisakaadrit (FPS).",
        link: "https://cachyos.org/",
        draiveriTugi: "Lisaks uusimatele draiveritele pakub ka spetsiaalseid kernelitugevdusi parima FPS-i saavutamiseks."
    },

    // B-TIER
    mint: {
        nimi: "Linux Mint",
        tekst: "B-Tier: Maailma kõige algajasõbralikum Linux. See on väga stabiilne. Miinuseks on vanemad paketid, mis võivad uuemate mängude puhul probleeme tekitada.",
        link: "https://www.linuxmint.com/",
        draiveriTugi: "Kasutab vanemat Ubuntu baasi, mis tähendab, et Mesa ja Kernel on vanemad. Mängimiseks võib vajada PPA-de lisamist."
    },
    ubuntu: {
        nimi: "Ubuntu",
        tekst: "B-Tier: Kõige tuntum Linux. Hea tugi, aga kasutab 'Snap' pakette, mis võivad olla aeglased. Mängimiseks täiesti sobiv.",
        link: "https://ubuntu.com/",
        draiveriTugi: "Nvidia draiverite paigaldus on lihtne, kuid uuendused on harvad, mis jätab uuemad mängud ilma viimastest parandustest."
    },
    manjaro: {
        nimi: "Manjaro",
        tekst: "B-Tier: Populaarne Arch-põhine distro. Lihtne kasutada, kuid uuendused viibivad vahel.",
        link: "https://manjaro.org/",
        draiveriTugi: "Üldiselt väga head draiverid (Arch), aga nende hilisem avaldamine võib uutele graafikakaartidele tuge pakkuda viivitusega."
    },
    opensuse: {
        nimi: "openSUSE Tumbleweed",
        tekst: "B-Tier: Rolling-release nagu Arch, aga testitakse automaatselt enne väljastamist. Väga stabiilne.",
        link: "https://www.opensuse.org/",
        draiveriTugi: "Rolling-release annab ligipääsu uusimatele draiveritele, kuid Zypper pakihaldus on spetsiifiline."
    },
    zorin: {
        nimi: "Zorin OS",
        tekst: "B-Tier: Disainitud välja nägema täpselt nagu Windows 10/11. Väga ilus, aga põhineb vanemal Ubuntu versioonil.",
        link: "https://zorin.com/os/",
        draiveriTugi: "Baseerub stabiilsel (vanemal) Ubuntu versioonil, seega draiverid ja kernel võivad olla aegunud. Mängimiseks soovitatav 'Core' versioon."
    },

    // C-TIER
    debian: {
        nimi: "Debian Stable",
        tekst: "C-Tier: Linuxi vanaisa. Kaljukindel stabiilsus serverite jaoks, kuid mängimiseks on tarkvara liiga vana.",
        link: "https://www.debian.org/",
        draiveriTugi: "Mängude jaoks kriitilised draiverid ja kernel on väga vanad, nõudes manuaalset backportingut 'non-free' repositooriumitest."
    },
    elementary: {
        nimi: "Elementary OS",
        tekst: "C-Tier: Meenutab macOS-i. Väga ilus, kuid väga suletud ökosüsteem ja piiratud seadistamisvõimalused teevad mängimise tülikaks.",
        link: "https://elementary.io/",
        draiveriTugi: "Baseerub Ubuntul ja on konservatiivne. Draiverite uuendamine on raske ja vastuolus süsteemi filosoofiaga."
    },
    solus: {
        nimi: "Solus",
        tekst: "C-Tier: Sõltumatu distro. Arendus on aeglustunud ja tarkvara valik on väiksem kui teistel.",
        link: "https://getsol.us/",
        draiveriTugi: "Arenduse aeglustumise tõttu ei pruugi uusimad draiverid alati koheselt saadaval olla."
    },
    deepin: {
        nimi: "Deepin",
        tekst: "C-Tier: Hiina päritolu distro, millel on väga ilus kasutajaliides, kuid draiverite tugi ja serverite kiirus võivad olla probleemiks.",
        link: "https://www.deepin.org/",
        draiveriTugi: "Kuigi põhineb Debianil (uusimal), võib draiverite ja riistvara tuvastamisega esineda probleeme."
    },

    // D-TIER
    kali: {
        nimi: "Kali Linux",
        tekst: "D-Tier: ÄRA KASUTA SEDA MÄNGIMISEKS! See on tööriist küberturvalisuse ekspertidele ja häkkeritele.",
        link: "https://www.kali.org/",
        draiveriTugi: "Sisaldab tihti vanemaid Kerneli versioone ja on seadistatud pentestinguks, mitte mängude jõudluseks."
    },
    gentoo: {
        nimi: "Gentoo",
        tekst: "D-Tier: Ainult fanaatikutele. Iga programm tuleb ise lähtekoodist kompileerida. Mängu installimine võib võtta tunde.",
        link: "https://www.gentoo.org/",
        draiveriTugi: "Draiverid tuleb tihti ise kompileerida, mis annab täieliku kontrolli, aga on tohutult aeganõudev ja keeruline."
    }
};

function avaInfo(distroKey) {
    const pealkiri = document.getElementById("info-title");
    const kirjeldus = document.getElementById("info-desc");
    const kast = document.getElementById("info-box");

    if (distrod[distroKey]) {
        const data = distrod[distroKey];
        
        pealkiri.innerText = data.nimi;

        kirjeldus.innerHTML = `
            <p>${data.tekst}</p>
            <p>
                <strong>Draiverite tugi:</strong> ${data.draiveriTugi}
            </p>
            <p style="margin-top: 15px;">
                <a href="${data.link}" target="_blank" style="color: #CC6666; font-weight: bold; text-decoration: none;">
                    Link distro ametlikule kodulehele 🔗
                </a>
            </p>
        `;

        // Animatsioon
        kast.style.backgroundColor = "#343e4f";
        setTimeout(() => {
            kast.style.backgroundColor = "#343e4f";
        }, 300);
    }
}
