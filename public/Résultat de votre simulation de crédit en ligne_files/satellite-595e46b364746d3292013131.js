s.eVar10 = _satellite.getVar('MensuCrActuelle');
s.eVar40 = _satellite.getVar('environment');
s.eVar48 = _satellite.getVar('AtosId');
s.eVar53 = _satellite.getVar('geoLocation');
s.eVar56 = (typeof _satellite.getVar('ModuleName') !== "undefined") ? _satellite.getVar('ModuleName') : "No Module";
s.products = (typeof _satellite.getVar('GoodsCode')!='undefined')?";"+_satellite.getVar('GoodsCode'):"";
if(_satellite.getVar('CreditType') == "REV"){
  s.products = ";cr";
}
if (/Formulaire/i.test(_satellite.getVar('pageName'))) {
  s.eVar79 = _satellite.getVar('CreditType')
}
s.eVar89 = _satellite.readCookie('code_origine');

// eVar24
if (/Credit : Simulation : P0 Box/.test(_satellite.getVar('pageName'))) {
    s.eVar24 = (typeof _satellite.getVar('ContributorCode') !== 'undefined') ? _satellite.getVar('ContributorCode') : '';

    s.eVar78 = (_satellite.getVar('ContributorCode') === "1001989870") ? "P0 Cetelem" : "P0 Epartner";
    s.eVar86 = _satellite.getVar('origin');

    // events 155, 156, 157
    s.events = s.apl(s.events, "event157", ",", 1);
}

if (_satellite.getVar('Term') && /Simulation : Resultat simulation/i.test(_satellite.getVar('pageName')) || /Credit : Simulation : P0 Box full/i.test(_satellite.getVar('pageName'))) {
    s.events = s.apl(s.events, "event15=" + _satellite.getVar('Term'), ",", 1);
}
if (_satellite.getVar('MonthlyPayment') && /Simulation : Resultat simulation/i.test(_satellite.getVar('pageName')) || /Credit : Simulation : P0 Box full/i.test(_satellite.getVar('pageName'))) {
    s.events = s.apl(s.events, "event111=" + _satellite.getVar('MonthlyPayment'), ",", 1);
}

if (/Simulation : Resultat simulation/.test(_satellite.getVar('pageName'))) {
    s.eVar16 = _satellite.getVar('Rate');
    s.eVar24 = (typeof _satellite.getVar('ContributorCode') !== 'undefined') ? _satellite.getVar('ContributorCode') : '';
    s.eVar27 = _satellite.getVar('NumberOfSimulations');
    s.eVar29 = _satellite.getVar('TypeOfOffer');

    // Concatenation eVar42
    s.eVar42 = (!(!_satellite.getVar('CreditType') && !_satellite.getVar('GoodsCode') && !_satellite.getVar('Amount') && !_satellite.getVar('Term') && !_satellite.getVar('Rate'))) ? _satellite.getVar('CreditType') + "|" + _satellite.getVar('TypeOfProject') + "|" + _satellite.getVar('GoodsCode') + "|" + _satellite.getVar('Amount') + "|" + _satellite.getVar('Term') + "|" + _satellite.getVar('Rate') : "";
    s.eVar99 = _satellite.getVar('optionSelectionnee');
  	s.eVar101 = _satellite.getVar('optionSelectionnee');
    s.eVar106 = _satellite.getVar('methodeSimulation');
    s.eVar107 = _satellite.getVar('typeResultatSimu');
  	s.events = s.apl(s.events, "event7", ",", 1);
    s.events = s.apl(s.events, "event10=" + _satellite.getVar('Amount'), ",", 1);
  
    // Détection du type d'AB test sur la page de résultats
    if(/^eligible/.test(_satellite.readCookie('55_PP4000'))){
      if(/testing/.test(document.location.pathname)){
        s.eVar93 = "Experience B";
      }else{
        s.eVar93 = "Experience A";
      }
    }
  
  	//Modification de la simulation
    s.eVarH = _satellite.getVar('optionSelectionnee');
    s.eVarK = _satellite.getVar('typeResultatSimu');
    s.eVarL = _satellite.getVar('methodeSimulation');
}

if (/Epargne : Simulation : Resultat simulation/.test(_satellite.getVar('pageName'))) {
    // Concatenation eVar42
    s.eVar42 = (!(!_satellite.getVar('CreditType') && !_satellite.getVar('GoodsCode') && !_satellite.getVar('Amount') && !_satellite.getVar('Term') && !_satellite.getVar('Rate'))) ? _satellite.getVar('CreditType') + "|" + _satellite.getVar('TypeOfProject') + "|" + _satellite.getVar('GoodsCode') + "|" + _satellite.getVar('Amount') + "|" + _satellite.getVar('Term') + "|" + _satellite.getVar('Rate') : "";
    s.products = ";Compte Epargne";
    s.events = s.apl(s.events, "event82", ",", 1);
}

/*Moved eVar21 out of the stepNumber condition as stepNumber is not pushed in the pageLoaded push on first page of the funnel. */
if (/Mon projet/i.test(_satellite.getVar('pageName'))) {
    s.eVar21 = "Mon projet";
}

if (typeof _satellite.getVar('stepNumber') !== 'undefined') {
    s.eVar64 = _satellite.getVar('stepNumber');
    if (_satellite.getVar('stepNumber') === '0') {
        s.events = s.apl(s.events, "event155,event156", ",", 1);
    }
    if (_satellite.getVar('stepNumber') === "1") {
        if (!/FR : B2C : C Mon Projet : Une idee du prix : travaux : Chiffrez vos travaux/.test(_satellite.getVar('pageName'))) { //PDM UIDP 31.05 ERREUR changement du pagename
            s.events = s.apl(s.events, "event8", ",", 1);
        }

        s.events = s.apl(s.events, "event36", ",", 1);
        s.events = s.apl(s.events, "event90", ",", 1);

        s.events = (typeof _satellite.getVar('Amount') != 'undefined') ? s.apl(s.events, "event11=" + _satellite.getVar('Amount'), ",", 1) : s.events;
        s.events = (typeof _satellite.getVar('Term') != 'undefined') ? s.apl(s.events, "event16=" + _satellite.getVar('Term'), ",", 1) : s.events;
        s.events = (typeof _satellite.getVar('MonthlyPayment') != 'undefined') ? s.apl(s.events, "event112=" + _satellite.getVar('MonthlyPayment'), ",", 1) : s.events;
        s.eVar24 = _satellite.getVar('ContributorCode');
    }

    if (_satellite.getVar('stepNumber') === "1") {
        if (/Formulaire : Identite titulaire/i.test(_satellite.getVar('pageName'))) {
        s.eVar106 = _satellite.getVar('methodeSimulation');
        s.eVar113 = _satellite.getVar('typeCarte');
        s.eVar73 = _satellite.getVar('TypeOfProject');
        s.eVar29 = _satellite.getVar('TypeOfOffer');
            s.eVar42 = (!(!_satellite.getVar('CreditType') && !_satellite.getVar('GoodsCode') && !_satellite.getVar('Amount') && !_satellite.getVar('Term') && !_satellite.getVar('Rate'))) ? _satellite.getVar('CreditType') + "|" + _satellite.getVar('TypeOfProject') + "|" + _satellite.getVar('GoodsCode') + "|" + _satellite.getVar('Amount') + "|" + _satellite.getVar('Term') + "|" + _satellite.getVar('Rate') : "";
        }
    }

    if (_satellite.getVar('stepNumber') === "2") {
        s.events = s.apl(s.events, "event37,event91", ",", 1);
        s.eVar73 = _satellite.getVar('TypeOfProject');
    }

    if (_satellite.getVar('stepNumber') === "3") {
        s.events = s.apl(s.events, "event38,event92", ",", 1);
    }

    if (_satellite.getVar('stepNumber') === "4") {
        s.events = s.apl(s.events, "event39,event93", ",", 1);
        s.events = s.apl(s.events, "event173=" + _satellite.getVar('montantProjetCMP'), ",", 1);
        s.events = s.apl(s.events, "event174=" + _satellite.getVar('montantApportCMP'), ",", 1);
    }
    //Ajout PDM 03.05
    if (_satellite.getVar('stepNumber') === "5") { 
        s.events = s.apl(s.events, "event40,event94", ",", 1);
        s.events = s.apl(s.events, "event173=" + _satellite.getVar('montantProjetCMP'), ",", 1);
        s.events = s.apl(s.events, "event174=" + _satellite.getVar('montantApportCMP'), ",", 1);
    }
        
    if (_satellite.getVar('stepNumber') === "6") { 
        s.events = s.apl(s.events, "event41,event95", ",", 1);
        s.events = s.apl(s.events, "event173=" + _satellite.getVar('montantProjetCMP'), ",", 1);
        s.events = s.apl(s.events, "event174=" + _satellite.getVar('montantApportCMP'), ",", 1);
        }
        
    if (_satellite.getVar('stepNumber') === "7.3") {
        s.events = s.apl(s.events, "event130,event140:" + _satellite.getVar('AtosId'), ",", 1);
    }

    if (_satellite.getVar('stepNumber') === "8.1") {
        s.events = s.apl(s.events, "event131,event141:" + _satellite.getVar('AtosId'), ",", 1);
        if (_satellite.getVar('dematOrigine')== 'Tel2Sign'){
      s.events = s.apl(s.events, "event243", ",", 1);
        }
    if (_satellite.getVar('dematOrigine')== 'Web'){
      s.events = s.apl(s.events, "event244", ",", 1);
        }
    }
    if (_satellite.getVar('stepNumber') === "8.2") {
        s.events = s.apl(s.events, "event132,event142:" + _satellite.getVar('AtosId'), ",", 1);
    }
    if (_satellite.getVar('stepNumber') === "8.3") {
        s.events = s.apl(s.events, "event133,event143:" + _satellite.getVar('AtosId'), ",", 1);
    }
    if (_satellite.getVar('stepNumber') === "9.1") {
        s.events = s.apl(s.events, "event134,event144:" + _satellite.getVar('AtosId'), ",", 1);
                if (_satellite.getVar('dematOrigine')== 'Tel2Sign'){
      s.events = s.apl(s.events, "event243", ",", 1);
        }
    if (_satellite.getVar('dematOrigine')== 'Web'){
      s.events = s.apl(s.events, "event244", ",", 1);
        }
    }
    if (_satellite.getVar('stepNumber') === "9.2") {
        s.events = s.apl(s.events, "event135,event145:" + _satellite.getVar('AtosId'), ",", 1);
                if (_satellite.getVar('dematOrigine')== 'Tel2Sign'){
      s.events = s.apl(s.events, "event243", ",", 1);
        }
    if (_satellite.getVar('dematOrigine')== 'Web'){
      s.events = s.apl(s.events, "event244", ",", 1);
        }
    }
    if (_satellite.getVar('stepNumber') === "9.3") {
        s.events = s.apl(s.events, "event136,event146:" + _satellite.getVar('AtosId'), ",", 1);
    }
    if (_satellite.getVar('stepNumber') === "11") {
        s.events = s.apl(s.events, "event182,event183", ",", 1);
    }

    var log55 = "";
   
    if (/PP/i.test(_satellite.getVar('pageName'))) {
        s.eVar21 = "Demande Crédit" + log55 + " PP";
    }
    if (/RAC/i.test(_satellite.getVar('pageName'))) {
        s.eVar21 = "Demande Crédit" + log55 + " RAC";
    }
    if (/CRL/i.test(_satellite.getVar('pageName'))) {
        s.eVar21 = "Demande Crédit" + log55 + " CRL";
    }
    if (/idee du prix/i.test(_satellite.getVar('pageName'))) {
        s.eVar21 = "une idee du prix";
    }

    if (/PP|CRL/i.test(_satellite.getVar('pageName')) && !/8.1|8.2|8.3/.test(_satellite.getVar('stepNumber'))) {
        s.events = s.apl(s.events, "event119", ",", 1)
    }
    if (/FR : B2C : Credit : Mon projet : Bienvenue/i.test(_satellite.getVar('pageName'))) {
        s.events = s.apl(s.events, "event155,event156", ",", 1);
    }
}

if (typeof _satellite.getVar('TypeOfProject') !== 'undefined' && /Simulation : Resultat simulation/i.test(_satellite.getVar('pageName'))) {
    s.eVar73 = _satellite.getVar('TypeOfProject');
}

if (typeof _satellite.getVar('CreditType') !== 'undefined' && /Simulation : Resultat simulation/i.test(_satellite.getVar('pageName'))) {
    s.eVar79 = _satellite.getVar('CreditType');
}

if (/FR : B2C : Credit : Digital Me : Accueil/.test(_satellite.getVar('pageName'))) {
    s.eVar19 = (typeof _satellite.getVar('AuthorizationNumber') != 'undefined') ? _satellite.getVar('AuthorizationNumber') : "";
    s.eVar45 = "hors speed";
}

if (/FR : B2C : Credit : Rachat de credits/.test(_satellite.getVar('pageName'))) {
    s.events = s.apl(s.events, "event155,event156", ",", 1);
}

s.eVar77 = _satellite.getVar('customerProfile');
s.eVar87 = _satellite.getVar('numberOfPiece');

if (/EC : Demande nouveau code : Confirmation/.test(_satellite.getVar('pageName'))) {
    s.events = s.apl(s.events, "event194", ",", 1);
    s.eVar58 = _satellite.getVar('SendingChannel');
}

if (/EC : panorama/.test(_satellite.getVar('pageName'))) {
    s.events = s.apl(s.events, "event35", ",", 1);
}

if (!!_satellite.getVar('TypeOfParcours')) {
    s.eVar96 = _satellite.getVar('TypeOfParcours');
}

//PCBF 
if (/FR : B2C : CPAY : Formulaire : [1-9]/.test(_satellite.getVar('pageName')))  {
  s.events = s.apl(s.events, "event252:" + _satellite.getVar('purchaseAmount'), ",", 1);
}

if (/FR : B2C : CPAY : Formulaire : Erreur/.test(_satellite.getVar('pageName'))) {
  s.events = s.apl(s.events, "event221", ",", 1);
}


// Paramétrage Demat
if (typeof _satellite.getVar('dematOrigine') !== undefined){
  s.eVar85 = _satellite.getVar('dematOrigine');
}

if (/Tel2Sign/.test(_satellite.getVar('dematOrigine'))){
  s.events = s.apl(s.events, "event243", ",", 1);
} 

if (/Web/.test(_satellite.getVar('dematOrigine'))){
  s.events = s.apl(s.events, "event244", ",", 1);
}
// Configuration de l'event de Time Out
if (/Time Out/.test(_satellite.getVar('pageName'))){
  s.events = s.apl(s.events, "event247", ",", 1);
}

// Paramétrages new CR
if(/EC : Financement : New CR : Montant$|EC : Financement : Hors New CR : Montant$|EC : Dashboard CR|EC : Modification prochain remboursement :  Choix operations|EC : Ajustement mensualite : Montant|EC : Remboursement par anticipation : Choix operations|EC : Mensualite alerte : Activer : Montant|EC : Mensualite alerte : Modifier : Montant/.test(_satellite.getVar('pageName'))){
    s.eVar20 = _satellite.getVar('loginID');
 //Set up the variable at "none" if they are empty
if ( _satellite.getVar('typeProduit') == '' ||  _satellite.getVar('typeProduit') == undefined){
    _satellite.setVar('typeProduit', 'none');
		}
 else if (_satellite.getVar('typeProduit') == '0'){
      _satellite.setVar('typeProduit', '0.0');
    }
 else if (typeof _satellite.getVar('typeProduit') !== undefined && _satellite.getVar('typeProduit') !== ''){
   		_satellite.getVar('typeProduit');
    }

if (_satellite.getVar('typeContrat') === '' ||  _satellite.getVar('typeContrat') === undefined){
    _satellite.setVar('typeContrat', 'none');
    }

 else if (_satellite.getVar('typeContrat') == '0'){
      _satellite.setVar('typeContrat', '0.0');
    }
 else if (typeof _satellite.getVar('typeContrat') !== undefined && _satellite.getVar('typeContrat') !== ''){
      _satellite.getVar('typeContrat');
    }

if (_satellite.getVar('etatCont') === '' ||  _satellite.getVar('etatCont') === undefined){
    _satellite.setVar('etatCont', 'none');
}
 else if (_satellite.getVar('etatCont') == '0'){
      _satellite.setVar('etatCont', '0.0');
    }
 else if (typeof _satellite.getVar('etatCont') !== undefined && _satellite.getVar('etatCont') !== ''){
      _satellite.getVar('etatCont');
    }

if (_satellite.getVar('typeCarte') === '' ||  _satellite.getVar('typeCarte') === undefined){
    _satellite.setVar('typeCarte', 'none');
}
    else if (_satellite.getVar('typeCarte') == '0'){
      _satellite.setVar('typeCarte', '0.0');
    }
 else if (typeof _satellite.getVar('typeCarte') !== undefined && _satellite.getVar('typeCarte') !== ''){
      _satellite.getVar('typeCarte');
    }

if (_satellite.getVar('enseigne') === '' ||  _satellite.getVar('enseigne') === undefined){
    _satellite.setVar('enseigne', 'none');
}
 else if (_satellite.getVar('enseigne') == '0'){
      _satellite.setVar('enseigne', '0.0');
    }
 else if (typeof _satellite.getVar('enseigne') !== undefined && _satellite.getVar('enseigne') !== ''){
      _satellite.getVar('enseigne');
    }

if (_satellite.getVar('nbImpaye') === '' ||  _satellite.getVar('nbImpaye') === undefined){
    _satellite.setVar('nbImpaye', 'none');
}
  else if (_satellite.getVar('nbImpaye') == '0'){
      _satellite.setVar('nbImpaye', '0.0');
    }
 else if (typeof _satellite.getVar('nbImpaye') !== undefined && _satellite.getVar('nbImpaye') !== ''){
      _satellite.getVar('nbImpaye');
    }

if (_satellite.getVar('mntRestantdu') === '' ||  _satellite.getVar('mntRestantdu') === undefined){
    _satellite.setVar('mntRestantdu', 'none');
}
 else if (_satellite.getVar('mntRestantdu') == '0'){
      _satellite.setVar('mntRestantdu', '0.0');
    }
 else if (typeof _satellite.getVar('mntRestantdu') !== undefined && _satellite.getVar('mntRestantdu') !== ''){
      _satellite.getVar('mntRestantdu');
    }

if (_satellite.getVar('nbMensurestant') === '' ||  _satellite.getVar('nbMensurestant') === undefined){
    _satellite.setVar('nbMensurestant', 'none');
}
  else if (_satellite.getVar('nbMensurestant') == '0'){
      _satellite.setVar('nbMensurestant', '0.0');
    }
 else if (typeof _satellite.getVar('nbMensurestant') !== undefined && _satellite.getVar('nbMensurestant') !== ''){
      _satellite.getVar('nbMensurestant');
    }

if (_satellite.getVar('mntDispo') === '' ||  _satellite.getVar('mntDispo') === undefined){
    _satellite.setVar('mntDispo', 'none');
}
 else if (_satellite.getVar('mntDispo') == '0'){
      _satellite.setVar('mntDispo', '0.0');
    }
 else if (typeof _satellite.getVar('mntDispo') !== undefined && _satellite.getVar('mntDispo') !== ''){
      _satellite.getVar('mntDispo');
    }

if (_satellite.getVar('eligibOR') === '' ||  _satellite.getVar('eligibOR') === undefined){
    _satellite.setVar('eligibOR', 'none');
}
 else if (_satellite.getVar('eligibOR') == '0'){
      _satellite.setVar('eligibOR', '0.0');
    }
 else if (typeof _satellite.getVar('eligibOR') !== undefined && _satellite.getVar('eligibOR') !== ''){
      _satellite.getVar('eligibOR');
    }

if (_satellite.getVar('eligibAugdma') === '' ||  _satellite.getVar('eligibAugdma') === undefined){
    _satellite.setVar('eligibAugdma', 'none');
}
 else if (_satellite.getVar('eligibAugdma') == '0'){
      _satellite.setVar('eligibAugdma', '0.0');
    }
 else if (typeof _satellite.getVar('eligibAugdma') !== undefined && _satellite.getVar('eligibAugdma') !== ''){
      _satellite.getVar('eligibAugdma');
    }

if (_satellite.getVar('displayIA') === '' ||  _satellite.getVar('displayIA') === undefined){
    _satellite.setVar('displayIA', 'none');
}
 else if (_satellite.getVar('displayIA') == '0'){
      _satellite.setVar('displayIA', '0.0');
    }
 else if (typeof _satellite.getVar('displayIA') !== undefined && _satellite.getVar('displayIA') !== ''){
      _satellite.getVar('displayIA');
    }

//concatenation of all the variables with a pipe
s.eVar108 = _satellite.getVar('typeProduit') + "|" + _satellite.getVar('typeContrat') + "|" + _satellite.getVar('etatCont') + "|" + _satellite.getVar('typeCarte') + "|" + _satellite.getVar('enseigne') + "|" + _satellite.getVar('nbImpaye') + "|" + _satellite.getVar('mntRestantdu') + "|" + _satellite.getVar('nbMensurestant') + "|" + _satellite.getVar('mntDispo') + "|" + _satellite.getVar('eligibOR') + "|" + _satellite.getVar('eligibAugdma') + "|" + _satellite.getVar('displayIA');
	}


if(/EC : Financement : New CR : Montant : Erreur/.test(_satellite.getVar('pageName'))){
    s.eVar20 = _satellite.getVar('loginID');
    s.events = s.apl(s.events, "event257", ",", 1);
}
_satellite.setVar('stepNumber', '')
s.t();
