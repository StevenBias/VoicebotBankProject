if(window.parent==window&&document.location.hostname!="bnpp-pf-se-web.worldline.com"){
  
		var wording={
             bar: {
                title: "Ce site utilise des cookies.",
                copy: {
                    start: "En poursuivant votre navigation sur notre site internet, vous acceptez que des cookies soient placés sur votre terminal. Ces cookies sont utilisés pour sécuriser votre connexion, faciliter votre navigation et permettre l'élaboration de statistiques et proposer des offres personnalisées. Pour obtenir plus d'information sur les cookies et vous y opposer, vous pouvez consulter notre politique des cookies et ",
                    modify: "modifier les réglages",
                    end: "."
                },
                legal: {
                    label: "Politique des cookies"
                },
                sep: "|",
                close: {
                    label: "Fermer",
                    icon: "X"
                }
            },
            // Ici, on définie les familles de cookies
            items: [{
                bit: 0x1,
                configurable: 0,
                group: "functional",
                name: "Fonctionnement",
                abbr: "F",
                help: "Cette catégorie de cookies ne peut être désactivée car cela empêcherait le fonctionnement correct et optimal du site.",
                description: "Ces cookies garantissent le bon fonctionnement du site et permettent son optimisation."
            }, {
                bit: 0x8,
                configurable: 1,
                group: "webAnalytics",
                name: "Cookies de statistiques et de mesure d'audience",
                abbr: "W",
                help: "La désactivation de cette catégorie de cookies empêche l'établissement de statistiques d'analyse sur la fréquentation de notre site.",
                description: "Ces cookies permettent d'établir des statistiques d'analyse de la fréquentation à partir desquels les contenus de notre site sont améliorés."
            }, {
                bit: 0x2,
                configurable: 1,
                group: "social",
                name: "Cookies des réseaux sociaux",
                abbr: "S",
                help: "La désactivation de cette catégorie de cookies empêche toute interaction avec les réseaux sociaux.",
                description: "Ces cookies permettent d'interagir avec les boutons des réseaux sociaux présents sur notre site."
            }, {
                bit: 0x4,
                configurable: 1,
                group: "advertising",
                name: "Cookies de publicité",
                abbr: "A",
                help: "La désactivation de cette catégorie de cookies empêche la collecte d'informations permettant de mieux connaître vos centres d'intérêt et de vous adresser des publicités personnalisées.",
                description: "Ces cookies permettent de mieux connaître vos centres d'intérêt et de vous proposer des publicités personnalisées adaptées à vos attentes."
            }],
            help: {
                abbr: "i",
                text: "Cliquez sur chaque catégorie pour activer ou désactiver l'utilisation des cookies. le bandeau de couleur indique si les cookies sont actifs (vert, sur la gauche) ou inactifs (rouge, sur la droite)."
            }
        };
  if(_satellite.getVar('isMobile')!='true'){
  	CookieConsent.defaults["fr"] = wording;
  }
// Additionnal code to use cookie consent on mobile device for "en" webSites
CookieConsent.defaults["fr"].bar.copy.label = wording.bar.copy.start;

}
//CookieConsent.defaults.styles.configurable.position = _satellite.getVar('55_ccPosition');

