	/*
	 *Global Require for minification 
	 */
	try {
	    var globalBnppRequire = require;
	    var globalBnppDefine = define;
	    var bnpp = {
	        require: require,
	        define: define
	    };

	    /*
	     * Mediator configuration
	     */
	    var variation = "/" + sfAxes1 + "/";


	    var newCrBlk = "";




	    var sfIaTargetList = {
	        "cetelem": {

	            //a or 41
	            "target.ia.frpfsubscriptionpe_subscribeCetelemController": "#",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_cla": variation + "integration/souscription-a",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_rev": variation + "integration/souscription-a",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_rac": variation + "integration/souscription-a",

	            //b or 40
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB": "#",
	            "target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_cla": variation + "credit/resultat-simulation-old",
	            "target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_rac": variation + "credit/resultat-simulation-old",
	            "target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_rev": variation + "credit/resultat-simulation-old",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect": variation + "credit/souscription-credit",

	            // Opti S40 Result Block 
	            "target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_cla": variation + "credit/resultat-simulation",
	            //"target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_rac" : variation + "credit/resultat-simulation",
	            //"target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_rev" : variation + "credit/resultat-simulation",

	            "target.ia.frpfsimulationpe_optiResultBlock.simulationResultBlocknewCr_cla": variation + "credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemControllernewCr_rac": variation + "credit/resultat-simulation",
	            "target.ia.frpfsimulationpe_optiResultBlock.simulationResultBlocknewCr_rev": variation + "credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerrev": variation + "credit/resultat-simulation",

	            "target.ia.frpfsimulationpe_subscribeCetelemControllerRunB.formnewCr_redirect": variation + "credit/souscription-credit",
	            "target.ia.frpfsimulationpe_simulationGeneric.modifier": variation + "accueil",
	            "target.ia.frpfsimulationpe_simulationBoxCR": "#",
	            "target.ia.frpfsimulationpe_simulation_ko": "#",
	            "target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemControllernewCr_cla": variation + "credit/resultat-simulation",




	            //EA 
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunBcla.subscription_cla_redirect_epartner": variation + "credit/souscription-epartner",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunBrev.subscription_rev_redirect_epartner": variation + "credit/souscription-epartner",
	            //"target.ia.frpfsubscriptionpe_epartner.redirect" : variation + "integration/simulation-epartner",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_epartner": variation + "partner/epartner-souscription-forms",
	            "target.ia.frpfsubscriptionpe_epartner.redirect": variation + "partner/partnare",
	            "target.ia.frpfsimulationpe_epartnerSlider": "#",
	            "target.ia.frpfsimulationpe_newEpartnerSlider": "#",
	            "target.ia.frpfsimulationpe_newCREpartnerSlider": "#",
	            //"target.ia.frpfsimulationpe_epartnerSlider.epartner_update" : "#",


	            //EB
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunAcla.subscription_cla_redirect_epartner": variation + "partner/epartner-forms",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunArev.subscription_rev_redirect_epartner": variation + "partner/epartner-forms",
	            //"target.ia.frpfsubscriptionpe_epartner.redirect_a" : variation + "integration/simulation-epartner-a",		

	            "target.ia.frpfsubscriptionpe_subscribeCetelemBlockSummary": "#",
	            "target.ia.frpfsubscriptionpe_resultBlock": "#",
	            "target.ia.frpfsubscriptionpe_optiResultBlock": "#",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemProgressBarRunB": "#",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunBclose": "#",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunBclose.subscription_close": variation + "accueil",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunBdemat": "#",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerclose.subscription_close": variation + "accueil",

	            "target.ia.frpfsubscriptionpe_simulationSavingsResult.simulation_result_redirect": variation + "epargne/souscription-epargne",
	            "target.ia.frpfsubscriptionpe_subscriptionSavings.subscription_redirect": variation + "epargne/resultat-epargne",
	            "target.ia.frpfsubscriptionpe_simulationSavingsResultReload.subscription_redirect": variation + "epargne/souscription-epargne",
	            "target.ia.frpfsimulationpe_simulationSaving.simulation_redirect": "#",

	            "target.ia.frpfsimulationpe_simulationGeneric": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice.ko": "#",
	            "target.ia.frpfsimulationpe_simulationSaving": "#",
	            "target.ia.frpfsimulationpe_newProjectSimulator": "#",
	            "target.ia.frpfsimulationpe_newProjectSimulationResultReload.simulation_result_redirect": variation + "integration/nouveau-projet/resultat",
	            "target.ia.frpfsimulationpe_simulationRealize_close.simulation_close": variation + "integration/simulation",
	            "target.ia.frpfsimulationpe_simulationRealize": variation + "integration/nouveau-projet/realisation",
	            "target.ia.frpfsimulationpe_simulationRealize.simulation_realize_redirect": variation + "integration/nouveau-projet/realisation",
	            "target.ia.frpfsimulationpe_simulationGeneric.activpanel": "#",
	            "target.ia.frpfsimulationpe_simulationRealize.subscription_close": variation + "accueil",
	            "target.ia.racwithImmo_redirect": variation + "credit/rachats-credits",
	            "target.ia.racwithoutImmo_redirect": variation + "credit/rachats-credits",
	            "target.ia.projetImmo_redirect": variation + "credit/credit-immobilier/souscription-immobilier",
	            "target.ia.search_result": variation + "projet/articles/search",
	            "target.ia.frpfclientpe_mobile_redirect": variation + "espace-client/tableau-de-bord",

	            //RCSI 

	            "target.ia.frpfsubscriptionpe_subscribeRCSI.subscibe_to_cetelem": variation + "credit/rachats-credits/souscription-rachat",




	            "target.ia.frpfpciaaape_fullAuthentication.activAuthent": "#",
	            "target.ia.frpfpciaaape_lostPassword": "#",
	            "target.ia.frpfpciaaape_lostPassword.lostpassword_redirect": variation + "perte-mdp",
	            "target.ia.frpfpciaaape_fullAuthentication.fullauthentication_redirect": "#",
	            "target.ia.frpfpciaaape_fullAuthentication": "#",
	            "target.ia.frpfpciaaape_fullAuthenticationSub.subscription_redirect": "#",
	            "target.ia.frpfclientnape_esignature_subscriptionRedirect": variation + "esign",


	            "target.ia.frpfclientpe_accountMgmtMySituation.dashboard_redirect": variation + "espace-client/tableau-de-bord",

	            "target.ia.frpfpciaaape_fullAuthentication_redirect": variation + "accueil",

	            "target.ia.frpfcommunicationpe_geoLocation": "#",
	            "target.ia.frpfcommunicationpe_insurance": "#",

	            "target.ia.frpfcommunicationpe_oops": "#",



	            "target.ia.frpfcommunicationpe_savings": "#",



	            "target.ia.frpfcommunicationpe_customerService": "#",
	            "target.ia.frpfcommunicationpe_customerService.close": "#",
	            "target.ia.frpfcommunicationpe_customerService.confirm": "#",

	            "target.ia.frpfcommunicationpe_credit": "#",




	            "target.ia.frpfclientpe_accountMgmtAlerte": "#",
	            "target.ia.frpfclientpe_accountMgmtAmountOutstanding": "#",
	            "target.ia.frpfclientpe_accountMgmtAmountOutstanding.retardPaiement_redirect": variation + "espace-client/Paiement-en-ligne",
	            "target.ia.frpfclientpe_accountMgmtContractMonthly": "#",
	            "target.ia.frpfclientpe_accountMgmtDateCompensatory": "#",
	            "target.ia.frpfclientpe_accountMgmtEBilling": "#",
	            "target.ia.frpfclientpe_accountMgmtEBilling.homepage": variation + "accueil",
	            "target.ia.frpfclientpe_accountMgmtFromAccount": "#",
	            "target.ia.frpfclientpe_accountMgmtLoyaltyPoints": "#",
	            "target.ia.frpfclientpe_accountMgmtModifyFMRB": "#",
	            "target.ia.frpfclientpe_accountMgmtMySituation": "#",
	            "target.ia.frpfclientpe_accountMgmtMySituation_dts.detail_DTS_redirect": variation + "espace-client/comptes/operation-fractionnee",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_INSURANCE_redirect": variation + "espace-client/comptes/assurance-detail",



	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_PP_redirect": variation + "espace-client/comptes/pret-personnel",
	            "target.ia.frpfclientpe_accountMgmtNextMonthly": "#",
	            "target.ia.frpfclientpe_accountMgmtOnlinePayment": "#",
	            "target.ia.frpfclientpe_accountMgmtOnlinePayment.retardPaiement_redirect": variation + "espace-client/Paiement-en-ligne",
	            "target.ia.frpfclientpe_accountMgmtOptionalInsurance": "#",
	            "target.ia.frpfclientpe_accountMgmtOptionalInsuranceretard.retardPaiement_redirect": variation + "espace-client/optional-insurance",
	            "target.ia.frpfclientpe_accountMgmtAmountOutstandingretard.retardPaiement_redirect": variation + "espace-client/lettre-de-solde",
	            "target.ia.frpfclientpe_accountMgmtMonthlyPayment.paiment_redirect": variation + "espace-client/change-monthly",
	            "target.ia.frpfclientpe_accountMgmtPicto": "#",
	            "target.ia.frpfclientpe_accountMgmtTAEG": "#",
	            "target.ia.frpfclientpe_accountSav": "#",
	            "target.ia.frpfclientpe_accountSav.detail_SAVINGS_redirect": variation + "espace-client/comptes/compte-epargne",
	            "target.ia.frpfclientpe_accountSavAmount": "#",
	            "target.ia.frpfclientpe_accountSavHeader": "#",
	            "target.ia.frpfclientpe_accountSavTransferAmount": "#",
	            "target.ia.frpfclientpe_advertizingBanner": "#",
	            "target.ia.frpfclientpe_amountOfSpecialUse": "#",
	            "target.ia.frpfclientpe_closeCard": "#",
	            "target.ia.frpfclientpe_creditAccounts": "#",
	            "target.ia.frpfclientpe_creditCard": "#",
	            "target.ia.frpfclientpe_creditRequestList": variation + "espace-client/credit-request-list",
	            "target.ia.frpfclientpe_dateOfFunding": "#",
	            "target.ia.frpfclientpe_generalDashboard": "#",
	            "target.ia.frpfclientpe_generalDashboard.dashboard_redirect": variation + "espace-client/tableau-de-bord",
	            "target.ia.frpfclientpe_inbox": "#",
	            "target.ia.frpfclientpe_initialDuration": "#",
	            "target.ia.frpfclientpe_insuranceAccounts": "#",
	            "target.ia.frpfclientpe_insuranceDetails": "#",
	            "target.ia.frpfclientpe_insuranceDetails.capital_redirect": "#",
	            "target.ia.frpfclientpe_insuranceDetails.clause_redirect": "#",
	            "target.ia.frpfclientpe_insuranceHeader": "#",

	            "target.ia.frpfclientpe_lastConnection": "#",
	            "target.ia.frpfclientpe_loyaltyConsultation": "#",
	            "target.ia.frpfclientpe_loyaltyConsultation_re.loyaltyTransfo_redirect": variation + "espace-client/transformation-fidelite",
	            "target.ia.frpfclientpe_loyaltyConsultation_re.loyaltyHistory_redirect": variation + "espace-client/history-fidelite",
	            "target.ia.frpfclientpe_loyaltyHistory": "#",
	            "target.ia.frpfclientpe_loyaltyHistory.loyalty_redirect": variation + "espace-client/points-fidelite",
	            "target.ia.frpfclientpe_loyaltyTransformation": "#",
	            "target.ia.frpfclientpe_modifyBankInfo": "#",
	            "target.ia.frpfclientpe_modifyBankInfo.modifyBankInfo_redirect": variation + "espace-client/informations-personnelles",
	            "target.ia.frpfclientpe_modifyCivilStatus": "#",
	            "target.ia.frpfclientpe_modifyEmail": "#",
	            "target.ia.frpfclientpe_modifyEmail.modifyEmail_redirect": "#",
	            "target.ia.frpfclientpe_modifyEmail.email_update": "#",
	            "target.ia.frpfclientpe_modifyPostalAddress.modifyPostalAddress_update": "#",
	            "target.ia.frpfclientpe_modifyFormulaCRL": "#",
	            "target.ia.frpfclientpe_modifyOptin": "#",
	            "target.ia.frpfclientpe_modifyPassword": "#",
	            "target.ia.frpfclientpe_modifyPostalAddress": "#",
	            "target.ia.frpfclientpe_modifyPostalAddress.modifyPostalAddress_redirect": variation + "espace-client/informations-personnelles",
	            "target.ia.frpfclientpe_modifyTelephone": "#",
	            "target.ia.frpfclientpe_monthlyAlert": "#",
	            "target.ia.frpfclientpe_nonAuthenticatedUser": "#",
	            "target.ia.frpfclientpe_partialAuthentication": "#",
	            "target.ia.frpfclientpe_partialAuthentication.homepage": variation + "accueil",
	            "target.ia.frpfclientpe_requestForFunding": "#",
	            "target.ia.frpfclientpe_savingsAccounts": "#",
	            "target.ia.frpfclientpe_statementOfOperations": "#",
	            "target.ia.frpfclientpe_yourSpecialUse": "#",

	            "target.ia.frpfclientpe_mobile_redirect": variation + "espace-client/comptes",
	            "target.ia.frpfclientpe_accountMgmtMySituation.modifyMensulate_redirect": variation + "espace-client/new-modify-mensualite",
	            "target.ia.frpfsubscriptionpe_subscribeEsign": variation + "esign",

	            "target.ia.frpfclientpe_accountMgmtMySituation.newCR_redirect": variation + "espace-client/comptes/new-credit-renouvelable",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_CR_redirect": variation + "espace-client/comptes/credit-renouvelable",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCR_redirect": variation + "espace-client/comptes/credit-renouvelable-cr",




	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_EB_redirect": variation + "espace-client/comptes/credit-renouvelable?to=panel3&ciid=pano",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWEB_redirect": variation + "espace-client/comptes/credit-renouvelable?to=panel3&ciid=dash",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCR_redirect": variation + "espace-client/comptes/credit-renouvelable-cr",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCREB_redirect": variation + "espace-client/comptes/credit-renouvelable-cr?to=panel3&ciid=pano",
	            "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCRNEWEB_redirect": variation + "espace-client/comptes/credit-renouvelable-cr?to=panel3&ciid=dash",




	            "target.ia.frpfclientpe_accountMgmtModifyMensulate.detail_mensulate": variation + "espace-client/comptes/new-modify-mensualite",
	            "target.ia.frpfclientpe_accountMgmtMySituation.demanderUnFinancement_redirect": variation + "espace-client/comptes/demander-un-financement",
	            "target.ia.frpfclientpe_accountMgmtRemboursement.reimbourse_redirect": variation + "espace-client/comptes/sav-remboursement",


	        },
	        "webmarchand": {
	            "target.ia.frpfsubscriptionpe_prestoController": "#",
	            "target.ia.frpfsubscriptionpe_prestoController.GDF": "#",
	            "target.ia.frpfsubscriptionpe_simulationPanel": "#",
	            "target.ia.frpfsubscriptionpe_simulationPanel.simulation_update": "#",
	            "target.ia.frpfsubscriptionpe_progressBar": "#",
	            "target.ia.frpfsubscriptionpe_imposedGDF": "#",
	            "target.ia.frpfsubscriptionpe_prestoController.workflow_update": "#",
	            "target.ia.frpfsubscriptionpe_prestoController.updateStep": "#",
	            "target.ia.frpfsubscriptionpe_projectPanel": "#",
	            "target.ia.frpfsubscriptionpe_projectPanel.calcul_update": "#",
	            "target.ia.frpfsubscriptionpe_subscriptionSummary.summary_update": "#",
	            "target.ia.frpfsubscriptionpe_subscriptionSummary.form_update": "#",
	            "target.ia.frpfsubscriptionpe_subscriptionSummary": "#",
	            "target.ia.frpfsubscriptionpe_prestoController.updateStep.subscription_update": "#",
	            "target.ia.frpfsubscriptionpe_prestoController.updateStepA.subscription_update": "#",
	            "target.ia.frpfsubscriptionpe_imposedGDF.imposedGDF_update": "#",
	            "target.ia.frpfsimulationpe_presto": "#",
	            "target.ia.frpfsimulationpe_prestoLegal": "#",
	            "target.ia.frpfsimulationpe_prestoLegal.simulation_legal_update": "#",

	            //R178
	            "target.ia.frpfsubscriptionpe_optiPrestoController": "#",
	            "target.ia.frpfsubscriptionpe_optiPrestoController.workflow_update": "#",
	            "target.ia.frpfsubscriptionpe_optiPrestoController.updateStep": "#",
	        },
	        "sample": {
	            "target.ia.overview": "overview.page",
	            "target.ia.statements.account1": "/en/PC/world/prof/pe-html5-ia2-hide53b",
	            "target.ia.fundtransfer": "fundtransfer"
	        },
	        "blueprint": {
	            "target.ia.overview": "overview.page",
	            "target.ia.statements.account1": "/en/PC/world/prof/pe-html5-ia2-hide53bblueprint",
	            "target.ia.fundtransfer": "fundtransfer"
	        },
	        "devcetelem": {
	            "target.ia.frpfsimulationpe_simulationGeneric": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice.ko": "#",
	            "target.ia.frpfsimulationpe_simulationSaving": "#",
	            "target.ia.frpfsimulationpe_newProjectSimulator": "#",
	            "target.ia.TU1PCIAAAPEW_requestForFunding": "#",
	            "target.ia.TU1PCIAAAPEW_creditRequestList": "#",
	            "target.ia.frpfpciaaape_fullAuthentication.activAuthent": "#",
	            "target.ia.frpfpciaaape_lostPassword": "#",
	            "target.ia.frpfpciaaape_lostPassword.lostpassword_redirect": variation + "integration/perte-mdp",
	            "target.ia.frpfpciaaape_fullAuthentication.fullauthentication_redirect": "#",
	            "target.ia.frpfpciaaape_fullAuthentication": "#",
	            "target.ia.frpfpciaaape_fullAuthentication.subscription_redirect": "#"
	        },
	        "creditmoderne": {
	            //CreditModerne
	            "target.ia.frpfsimulationpe_simulationGeneric_guyane": "#",

	            "target.ia.frpfsubscriptionpe_optiResultBlock_guyane.subscribeCetelemController_cla": variation + "guyane/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_guyane.subscribeCetelemController_rac": variation + "guyane/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_guyane.subscribeCetelemController_rev": variation + "guyane/credit/resultat-simulation",




	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB_guyane.form_redirect": variation + "guyane/credit/souscription-credit",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_guyane.ko": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_guyane": "#",

	            "target.ia.frpfsimulationpe_simulationGeneric_reunion": "#",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_reunion.subscribeCetelemController_cla": variation + "reunion/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_reunion.subscribeCetelemController_rac": variation + "reunion/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_reunion.subscribeCetelemController_rev": variation + "reunion/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB_reunion.form_redirect": variation + "reunion/credit/souscription-credit",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_reunion.ko": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_reunion": "#",

	            "target.ia.frpfsimulationpe_simulationGeneric_martinique": "#",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_martinique.subscribeCetelemController_cla": variation + "martinique/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_martinique.subscribeCetelemController_rac": variation + "martinique/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_martinique.subscribeCetelemController_rev": variation + "martinique/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB_martinique.form_redirect": variation + "martinique/credit/souscription-credit",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_martinique.ko": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_martinique": "#",

	            "target.ia.frpfsimulationpe_simulationGeneric_guadeloupe": "#",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_guadeloupe.subscribeCetelemController_cla": variation + "guadeloupe/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_guadeloupe.subscribeCetelemController_rac": variation + "guadeloupe/credit/resultat-simulation",
	            "target.ia.frpfsubscriptionpe_optiResultBlock_guadeloupe.subscribeCetelemController_rev": variation + "guadeloupe/credit/resultat-simulation",

	            "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB_guadeloupe.form_redirect": variation + "guadeloupe/credit/souscription-credit",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_guadeloupe.ko": "#",
	            "target.ia.frpfsimulationpe_simulationCRLChoice_guadeloupe": "#",




	        }
	    };

	    function wcm_debug() {
	        if (sessionStorage.getItem("debug") !== null) {
	            console.log.apply(console, ['DEBUG: '].concat(Array.prototype.slice.call(arguments)));
	        }
	    }

	    function wcm_debug_wa() {
	        if (sessionStorage.getItem("debug_wa") == 'true') {
	            console.log.apply(console, ['DEBUG_WA: '].concat(Array.prototype.slice.call(arguments)));
	        }
	    }

	    var subscrIdRedirect = window.PageBus.subscribe("target.ia.frpfpciaaape_fullAuthentication_redirect", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfpciaaape_fullAuthentication_redirect');
	        //$('.connection > li.accesClient > a').trigger('click');
	        // $('.mobileRow > .logo > img').trigger('click');
	    });


	    window.PageBus.subscribe("target.ia.frpfsimulationpe_simulationGeneric.simulation_update", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfsimulationpe_simulationGeneric.simulation_update');
	        msg.Json.URL_materialCode = (msg.Json.URL_materialCode === '919a') ? '919' : msg.Json.URL_materialCode;
	        if (typeof msg.ModuleName !== 'undefined' && msg.ModuleName === "WCM" && typeof msg.Json !== 'undefined' && typeof msg.Json.URL_materialCode !== 'undefined') {
	            if (msg.Json.URL_productCode === "RAC") {
	                if (msg.Json.URL_materialCode === "897") {
	                    //hide simulation and show button RAC without immo
	                    racWithoutImmo();
	                } else if (msg.Json.URL_materialCode === "897hypo") {
	                    //hide simulation and show button RAC with immo
	                    racWithImmo();
	                }
	            } else if (msg.Json.URL_productCode === "IMMO") {
	                if (msg.Json.URL_materialCode === "ImmoItem3") {
	                    //hide simulation + show loader
	                    $("#panel-1").removeClass("iaInit");
	                    document.location.href = "/fr/credit/credit-immobilier/achat-revente-bien-actuel";
	                } else {
	                    Immo();
	                    //hide simulation and show button immo
	                }
	            } else if (msg.Json.URL_materialCode === "919GTX") {
	                //show phone number
	                traVexDisplay();

	            } else {
	                resetSimulateDisplay();
	            }

	        }


	    });




	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_epartner.redirect_a", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfsubscriptionpe_epartner.redirect_a');

	        if (typeof msg.ModuleName !== 'undefined' && msg.ModuleName === "WCM" && typeof msg.Json !== 'undefined' && typeof msg.Json.URL_materialCode !== 'undefined') {
	            if (msg.Json.URL_productCode === "RAC") {
	                if (msg.Json.URL_materialCode === "897") {
	                    //hide simulation and show button RAC without immo
	                    racWithoutImmo();
	                } else if (msg.Json.URL_materialCode === "897hypo") {
	                    //hide simulation and show button RAC with immo
	                    racWithImmo();
	                }
	            } else if (msg.Json.URL_productCode === "IMMO") {
	                if (msg.Json.URL_materialCode === "ImmoItem3") {
	                    //hide simulation + show loader
	                    $("#panel-1").removeClass("iaInit");
	                    document.location.href = "/fr/credit/credit-immobilier/achat-revente-bien-actuel";
	                } else {
	                    Immo();
	                    //hide simulation and show button immo
	                }
	            } else if (msg.Json.URL_materialCode === "919GTX") {
	                //show phone number
	                traVexDisplay();

	            } else {
	                resetSimulateDisplay();
	            }

	        }


	    });




	    var configPanels_json;

	    function wcm_initIa(moduleName, jsonIa, topicIa, hideIa) {
	        simulationRunACustom(jsonIa, topicIa);
	        simulationRunBCustom(jsonIa, topicIa);
	        pushContollerEbilling(jsonIa, topicIa);

	        if (typeof moduleName !== 'undefined' && moduleName !== "" && typeof jsonIa !== 'undefined' && typeof topicIa !== 'undefined' && hideIa !== 'undefined' && typeof hideIa === 'boolean') {
	            if (window.PageBus.query('target.ia.frpfclientpe_modifyBankInfo.modifyBankInfo_redirect').length > 0) jsonIa.savModifier = "Modify_Bank";
	            if (window.PageBus.query('target.ia.frpfclientpe_modifyPostalAddress.modifyPostalAddress_redirect').length > 0) jsonIa.savModifier = "Modify_PostalAddress";
	            if (window.PageBus.query('target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_epartner').length > 0)
	                jsonIa.homeRedirection = jsonIa.homeRedirection + jsonIa.URL_numberDuVendeur + "&produit=" + jsonIa.URL_productCode;
	            if (topicIa[moduleName]) {

	                var topicName = topicIa[moduleName];
	                var iaId = Mediator.getIaIdFromTopic(topicName);
	                wcm_debug("wcm_initIa : call register ia : " + iaId + ", topic : " + topicName);
	                Mediator.registerIa(iaId, hideIa);



	                if (hideIa === true && Mediator.checkQuery(topicName) === false) {
	                    Mediator.subscribeToTopic("mediator.load.ia." + iaId, function(topic, data) {
	                        wcm_debug("wcm_initIa : require " + moduleName + " (hide)");
	                        wcm_debug("wcm_initIa : json require : ");
	                        wcm_debug(jsonIa);
	                        wcm_debug("wcm_initIa : topic require : ");
	                        wcm_debug(topicIa);
	                        if (moduleName === "simulationCRLChoice") {
	                            if (jsonIa.URL_entry == "Amount") {
	                                jsonIa.goodsCodeInitial = jsonIa.goodsCodeInitial + " - montant";
	                                if (sfCustomerDacLevel === "3") jsonIa.URL_numberDuVendeur = "1004822995";
	                            } else {
	                                jsonIa.goodsCodeInitial = jsonIa.goodsCodeInitial + " - mensualites ";
	                                if (sfCustomerDacLevel === "3") jsonIa.URL_numberDuVendeur = "1004822995";
	                            }

	                        }
	                        if (moduleName === "simulationBoxCR") {
	                            if (jsonIa.URL_entry == "Amount") {
	                                jsonIa.goodsCodeInitial = jsonIa.goodsCodeInitial + " - montant";
	                                if (sfCustomerDacLevel === "3") jsonIa.URL_numberDuVendeur = "1004822995";
	                            } else {
	                                jsonIa.goodsCodeInitial = jsonIa.goodsCodeInitial + " - mensualites ";
	                                if (sfCustomerDacLevel === "3") jsonIa.URL_numberDuVendeur = "1004822995";
	                            }

	                        }
	                        if (moduleName == "simulationGeneric" && jsonIa.URL_materialCode == "897") {
	                            require(["jquery", "app"], function($, app) {
	                                $('#panel-1').addClass('iaInit');
	                                require([moduleName], function(appli) {
	                                    if (typeof appli !== "undefined") {
	                                        new appli('.' + moduleName + '_ia', jsonIa, topicIa);
	                                    }
	                                }, function(errObject) {
	                                    errorBlock(errObject);
	                                });
	                            });
	                        } else {
	                            require([moduleName], function(appli) {
	                                if (typeof appli !== "undefined") {
	                                    new appli('.' + moduleName + '_ia', jsonIa, topicIa);
	                                }
	                            }, function(errObject) {
	                                errorBlock(errObject);
	                            });
	                        }

	                    });
	                } else {
	                    wcm_debug("wcm_initIa : require " + moduleName + " (visible)");
	                    wcm_debug("wcm_initIa : json require : ");
	                    wcm_debug(jsonIa);
	                    wcm_debug("wcm_initIa : topic require : ");
	                    wcm_debug(topicIa);
	                    if (moduleName == "accountMgmtNewCR") {
	                        google.charts.load('visualization', {
	                            'packages': ['corechart']
	                        });
	                    }
	                    if (moduleName == "accountSavHeader")
	                        accountSavHeader_json.Message_Aide = "Service  Momentanément indisponible. Merci de contacter de contacter votre Centre de Relation Client au <div class='cortal-error-img'></div> De 8h30 á 19h du lundi au vendredi et de 8h30 á 13h et de 14h á 16h le samedi";
	                    if (moduleName == "accountSavAmount")
	                        accountSavAmount_json.Message_Aide = "Service  Momentanément indisponible. Merci de contacter de contacter votre Centre de Relation Client au <div class='cortal-error-img'></div> De 8h30 á 19h du lundi au vendredi et de 8h30 á 13h et de 14h á 16h le samedi";
	                    if (moduleName == "accountSavTransferAmount")
	                        accountSavTransferAmount_json.Message_Aide = "Service  Momentanément indisponible. Merci de contacter de contacter votre Centre de Relation Client au <div class='cortal-error-img'></div> De 8h30 á 19h du lundi au vendredi et de 8h30 á 13h et de 14h á 16h le samedi";
	                    if (moduleName == "accountSav")
	                        accountSav_json.Message_Aide = "Service  Momentanément indisponible. Merci de contacter de contacter votre Centre de Relation Client au <div class='cortal-error-img'></div> De 8h30 á 19h du lundi au vendredi et de 8h30 á 13h et de 14h á 16h le samedi";

	                    require([moduleName], function(appli) {
	                        if (typeof appli !== "undefined") {
	                            new appli('.' + moduleName + '_ia', jsonIa, topicIa);
	                        }
	                    }, function(errObject) {
	                        errorBlock(errObject);
	                    });
	                }

	                if (moduleName === "newEpartnerSlider") {
	                    var code = jsonIa.URL_materialCode;
	                    if (code === "919GTX") {
	                        traVexDisplay();
	                    } else if (code === "897hypo") {
	                        racWithImmo();
	                    } else if (code === "897") {
	                        racWithoutImmo();
	                    } else if (code == "ImmoItem1") {
	                        Immo();
	                    } else {
	                        var updateEpartnerTopic = topicIa["newCREpartnerSlider"];
	                        var updateJson = {
	                            "ModuleName": "WCM",
	                            "Code": "UPDATE",
	                            "Label": "maj selecteur",
	                            "Json": {
	                                "URL_numberDuVendeur": "",
	                                "URL_materialCode": "",
	                                "URL_productCode": "",
	                                "goodsCodeInitial": ""
	                            }
	                        };
	                        window.PageBus.publish(updateEpartnerTopic, updateJson);
	                    }

	                }
	                if (moduleName === "newCREpartnerSlider") {
	                    var code = jsonIa.URL_materialCode;
	                    if (code === "919GTX") {
	                        traVexDisplay();
	                    } else if (code === "897hypo") {
	                        racWithImmo();
	                    } else if (code === "897") {
	                        racWithoutImmo();
	                    } else if (code == "ImmoItem1") {
	                        Immo();
	                    } else {
	                        var updateEpartnerTopic = topicIa["newCREpartnerSlider"];
	                        var updateJson = {
	                            "ModuleName": "WCM",
	                            "Code": "UPDATE",
	                            "Label": "maj selecteur",
	                            "Json": {
	                                "URL_numberDuVendeur": "",
	                                "URL_materialCode": "",
	                                "URL_productCode": "",
	                                "goodsCodeInitial": ""
	                            }
	                        };
	                        window.PageBus.publish(updateEpartnerTopic, updateJson);
	                    }

	                }
	            } else {
	                wcm_debug("wcm_initIa : Topic IA manquant");
	                wcm_debug("wcm_initIa : require " + moduleName + " old school (sans topic)");
	                require([moduleName], function(appli) {
	                    new appli('.' + moduleName + '_ia', jsonIa);
	                }, function(errObject) {
	                    errorBlock(errObject);
	                });
	            }
	        } else {
	            wcm_debug("wcm_initIa : parametre manquant");
	        }


	    }

	    function wcm_getSiteId() {
	        var metas = document.getElementsByTagName("meta");
	        for (i = 0; i < metas.length; i++) {
	            if (metas[i].getAttribute("name") === 'siteid') {
	                return metas[i].getAttribute("content");
	            }
	        }
	        return "";
	    }


	    function activeIaAccesClient(id, callback) {

	        wcm_debug("activeIaAccesClient : debut");
	        wcm_debug("activeIaAccesClient : loading en cours");
	        unsubscribePublish(id, callback)
	        var json_empty = {};
	        wcm_debug("activeIaAccesClient : publish ( target.ia.frpfpciaaape_fullAuthentication )");
	        window.PageBus.publish("target.ia.frpfpciaaape_fullAuthentication", json_empty);
	        wcm_debug("activeIaAccesClient : fin");
	    }

	    function activeIaVirementExpress(id, callback) {

	        wcm_debug("activeIaVirementExpress  : debut");
	        wcm_debug("activeIaVirementExpress  : loading en cours");
	        unsubscribePublish(id, callback);


	        var json_empty = {};
	        var topic_virement = "";
	        if (typeof requestForFunding_topic != "undefined" && typeof requestForFunding_topic.requestForFunding != "undefined") {
	            topic_virement = requestForFunding_topic.requestForFunding;

	        } else {
	            topic_virement = "target.ia.frpfclientpe_requestForFunding";
	        }
	        wcm_debug("activeIaVirementExpress  : publish ( " + topic_virement + " )");
	        window.PageBus.publish(topic_virement, json_empty);

	        wcm_debug("activeIaVirementExpress  : fin");
	    }

	    function unsubscribePublish(id, callback) {

	        var subscrId = window.PageBus.subscribe('ia.sf.loaded', null, function(topic, msg, data) {
	            require(["jquery", "app"], function($, app) {
	                var iframeID = $('.atos').find("iframe").attr("id");
	                if (iframeID) {
	                    $("body.webmarchand").css("overflow-y", "hidden");
	                } else {
	                    $("body.webmarchand").removeAttr("style");
	                }
	            });

	            if (msg.ModuleName === "fullAuthentication") {
	                wcm_debug("activeIaAccesClient : loading OK ( " + msg.ModuleName + " )");
	                callback(id);
	                $(".fullAuthentication_ia").removeAttr("style");
	                window.PageBus.unsubscribe(subscrId);
	                $('.fullAuthentication_ia').append($('.cetelemchatbot'));
	                if ($(".fullAuthentication_ia")[0]) {
	                    $('.cetelemchatbot').removeClass('hide-for-all');
	                }
	            }
	            if (msg.ModuleName === "requestForFunding") {

	                wcm_debug("activeIaVirementExpress : loading OK ( " + msg.ModuleName + " )");
	                callback(id);
	                $(".requestForFunding_ia").removeAttr("style");
	                window.PageBus.unsubscribe(subscrId);
	            }

	            if (msg.ModuleName === "fullAuthentication") {
	                wcm_debug("activeIaAccesClient : loading OK ( " + msg.ModuleName + " )");
	                callback(id);
	                window.PageBus.unsubscribe(subscrId);
	            }




	        });

	    }

	    function registerIa(idPanel) {

	        if (configPanels_json[idPanel] && typeof configPanels_json[idPanel]["Json"] !== 'undefined' && typeof configPanels_json[idPanel]["Topic"] !== 'undefined') {
	            wcm_debug("registerIa : " + configPanels_json[idPanel]["ModuleName"]);
	            require(["jquery"], function($) {
	                if (typeof sfIaParam != "undefined") {
	                    if ("target.ia.frpfsimulationpe_simulationGeneric.modifier" === sfIaParam.topic) {
	                        if (sfIaParam.Json.originIA == configPanels_json[idPanel]["ModuleName"]) {
	                            configPanels_json[idPanel]["Json"].URL_materialCode = sfIaParam.Json.URL_materialCode;
	                            configPanels_json[idPanel]["Json"].URL_goodAmount = sfIaParam.Json.URL_goodAmount;
	                            configPanels_json[idPanel]["Json"].URL_duration = sfIaParam.Json.URL_duration;
	                            configPanels_json[idPanel]["Json"].URL_monthlyInstalment = sfIaParam.Json.URL_monthlyInstalment;
	                            configPanels_json[idPanel]["Json"].URL_productCode = sfIaParam.Json.URL_productCode;
	                            configPanels_json[idPanel]["Json"].choice = sfIaParam.Json.choice;
	                            if (configPanels_json[idPanel]["projectSelector"] !== "") {
	                                $('#' + idPanel + ' .projectSelectorContainer').data('preselect', sfIaParam.Json.URL_materialCode);
	                            }
	                        }
	                    }
	                }
	            });




	            wcm_initIa(configPanels_json[idPanel]["ModuleName"], configPanels_json[idPanel]["Json"], configPanels_json[idPanel]["Topic"], true);

	        } else {
	            wcm_debug("registerIa : parametre manquant pour " + idPanel);
	        }
	    }

	    function activeIaPanel(idPanel, callback) {

	        wcm_debug("activeIaPanel : debut");

	        if (configPanels_json[idPanel] && configPanels_json[idPanel]["Json"] !== "" && configPanels_json[idPanel]["Topic"]) {
	            wcm_debug("activeIaPanel : loading en cours ( " + configPanels_json[idPanel]["ModuleName"] + " )");
	            var subscrId = window.PageBus.subscribe('ia.sf.loaded', null, function(topic, msg, data) {
	                if (msg.ModuleName == configPanels_json[idPanel]["ModuleName"]) {
	                    wcm_debug("activeIaPanel : loading OK ( " + msg.ModuleName + " )");
	                    wcm_debug(msg);
	                    callback(idPanel);
	                    //preselectMenu(idPanel);
	                    window.PageBus.unsubscribe(subscrId);
	                } else if (msg.ModuleName == "simulationBoxCRChoice") {
	                    wcm_debug("activeIaPanel : loading OK ( " + msg.ModuleName + " )");
	                    wcm_debug(msg);
	                    callback(idPanel);
	                    //preselectMenu(idPanel);
	                    window.PageBus.unsubscribe(subscrId);
	                }




	            });

	            if (configPanels_json[idPanel]["Topic"][configPanels_json[idPanel]["ModuleName"]] && Mediator.checkQuery(configPanels_json[idPanel]["Topic"][configPanels_json[idPanel]["ModuleName"]]) === false) {
	                var json_empty = {};
	                wcm_debug("activeIaPanel : publish ( " + configPanels_json[idPanel]["Topic"][configPanels_json[idPanel]["ModuleName"]] + " )");
	                window.PageBus.publish(configPanels_json[idPanel]["Topic"][configPanels_json[idPanel]["ModuleName"]], json_empty);
	            }
	        }

	        preselectMenu(idPanel);



	        wcm_debug("activeIaPanel : fin");
	    };

	    function preselectMenu(idPanel) {

	        if (configPanels_json[idPanel].ModuleName === "simulationGeneric") {
	            if (configPanels_json[idPanel]["Json"].URL_materialCode && (configPanels_json[idPanel]["Json"].URL_goodAmount == "")) {
	                $('.projectSelectorBtn').ready(function() {
	                    $(this).trigger('click');
	                    $('#creditProjectSelectorMain li a').filter(function() {
	                        if (configPanels_json[idPanel]["Json"].URL_materialCode === '897') {
	                            if ($(this).data('sub') === 'credit-RC') {
	                                $(this).trigger('click');
	                                $('#credit-RC li a span').filter(function() {
	                                    if ($(this).data('code') && $(this).data('code').toString() === configPanels_json[idPanel]["Json"].URL_materialCode) {
	                                        $(this).trigger('click');

	                                    }
	                                });

	                            }

	                            racWithoutImmo();
	                        } else if (configPanels_json[idPanel]["Json"].URL_materialCode === '897hypo') {
	                            if ($(this).data('sub') === 'credit-RC') {
	                                $(this).trigger('click');
	                                $('#credit-RC li a span').filter(function() {
	                                    if ($(this).data('code') && $(this).data('code').toString() === configPanels_json[idPanel]["Json"].URL_materialCode) {
	                                        $(this).trigger('click');

	                                    }
	                                });

	                            }
	                            racWithImmo();
	                        } else if (configPanels_json[idPanel]["Json"].URL_materialCode === '512' || configPanels_json[idPanel]["Json"].URL_materialCode === '501' || configPanels_json[idPanel]["Json"].URL_materialCode === '502') {
	                            if ($(this).data('sub') === 'credit-VM') {
	                                $(this).trigger('click');
	                                $('#credit-VM li a span').filter(function() {
	                                    if ($(this).data('code') && $(this).data('code').toString() === configPanels_json[idPanel]["Json"].URL_materialCode) {
	                                        $(this).trigger('click');

	                                    }
	                                });

	                            }
	                        } else if (configPanels_json[idPanel]["Json"].URL_materialCode === '520' || configPanels_json[idPanel]["Json"].URL_materialCode === '520') {
	                            if ($(this).data('sub') === 'credit-VL') {
	                                $(this).trigger('click');
	                                $('#credit-VL li a span').filter(function() {
	                                    if ($(this).data('code') && $(this).data('code').toString() === configPanels_json[idPanel]["Json"].URL_materialCode) {
	                                        $(this).trigger('click');

	                                    }
	                                });

	                            }
	                        } else if (configPanels_json[idPanel]["Json"].URL_materialCode === '330' || configPanels_json[idPanel]["Json"].URL_materialCode === '919') {
	                            if ($(this).data('sub') === 'credit-TD') {
	                                $(this).trigger('click');
	                                $('#credit-TD li a span').filter(function() {
	                                    if ($(this).data('code') && $(this).data('code').toString() === configPanels_json[idPanel]["Json"].URL_materialCode) {
	                                        $(this).trigger('click');

	                                    }
	                                });

	                            }
	                        } else if (configPanels_json[idPanel]["Json"].URL_materialCode === '810' || configPanels_json[idPanel]["Json"].URL_materialCode === '660' || configPanels_json[idPanel]["Json"].URL_materialCode === '676' || configPanels_json[idPanel]["Json"].URL_materialCode === '670' || configPanels_json[idPanel]["Json"].URL_materialCode === '680') {
	                            if ($(this).data('sub') === 'credit-PD') {
	                                $(this).trigger('click');
	                                $('#credit-PD li a span').filter(function() {
	                                    if ($(this).data('code') && $(this).data('code').toString() === configPanels_json[idPanel]["Json"].URL_materialCode) {
	                                        $(this).trigger('click');

	                                    }
	                                });

	                            }
	                        }

	                    });
	                });

	            }
	        }
	    }

	    function updateIaPanel(idPanel, code, produit, type, typeOfProject) {

	        wcm_debug("updateIaPanel : debut");
	        if (configPanels_json[idPanel] && configPanels_json[idPanel]["Json"] && configPanels_json[idPanel]["Topic"] && configPanels_json[idPanel]["Topic"]["simulation_update"] !== 'undefined') {


	            if (configPanels_json[idPanel]["ModuleName"] === "newEpartnerSlider") {
	                $(".prod-btn").html('');
	                $(".prod-btn").removeClass('hide');
	                configPanels_json[idPanel]["Json"].goodsCodeInitial = typeOfProject;
	                var updateEpartnerTopic = configPanels_json[idPanel]["Topic"]["simulation_update"];
	                var numberDuVendeur = $('#' + idPanel + ' .code-vendeur .vendeur[data-produit="' + produit + '"][data-dac*="' + sfCustomerDacLevel + '"][data-type="' + type + '"]').text();

	                var newProduitCode;
	                if (code === "REV")
	                    newProduitCode = newCREpartnerSlider_json.URL_productCode;
	                else
	                    newProduitCode = produit;
	                //var newMaterialCode = newEpartnerSlider_json.URL_materialCode; 
	                var newNumberDuVendeur = newCREpartnerSlider_json.URL_numberDuVendeur;

	                /*  if(newMaterialCode =='undefined' || newMaterialCode =="") {code = "" + code;}
	                else {code = "" + newMaterialCode; } */
	                code = code.toString();
	                if (typeOfProject == 'Crédit renouvelable - Crédit renouvelable') {
	                    typeOfProject = "Crédit renouvelable";
	                }

	                if (newNumberDuVendeur !== "") {
	                    var updateJson = {
	                        "ModuleName": "WCM",
	                        "Code": "UPDATE",
	                        "Label": "maj selecteur",
	                        "Json": {
	                            "URL_numberDuVendeur": newNumberDuVendeur,
	                            "URL_materialCode": code,
	                            "URL_productCode": newProduitCode,
	                            "goodsCodeInitial": typeOfProject
	                        }
	                    };
	                    wcm_debug("updateIaEpartnerPanel : update Json sur " + updateEpartnerTopic);
	                    wcm_debug(updateJson);
	                    $(".newCREpartnerSlider_ia").removeClass("hide");
	                    if (code === "919GTX") {
	                        traVexDisplay();
	                    } else if (code === "897hypo") {
	                        racWithImmo();
	                    } else if (code === "897") {
	                        racWithoutImmo();
	                    } else if (code == "ImmoItem1") {
	                        Immo();
	                    } else if (redirecctIaFlag) {
	                        window.PageBus.publish(updateEpartnerTopic, globalPanelJson);
	                        redirecctIaFlag = false;
	                    } else {
	                        window.PageBus.publish(updateEpartnerTopic, updateJson);
	                    }
	                }
	            } else if (configPanels_json[idPanel]["ModuleName"] === "newCREpartnerSlider") {
	                $(".prod-btn").html('');
	                $(".prod-btn").removeClass('hide');
	                configPanels_json[idPanel]["Json"].goodsCodeInitial = typeOfProject;
	                var updateEpartnerTopic = configPanels_json[idPanel]["Topic"]["simulation_update"];
	                var numberDuVendeur = $('#' + idPanel + ' .code-vendeur .vendeur[data-produit="' + produit + '"][data-dac*="' + sfCustomerDacLevel + '"][data-type="' + type + '"]').text();

	                var newProduitCode;
	                if (code === "REV")
	                    newProduitCode = newCREpartnerSlider_json.URL_productCode;
	                else
	                    newProduitCode = produit;
	                //var newMaterialCode = newCREpartnerSlider_json.URL_materialCode; 
	                var newNumberDuVendeur = newCREpartnerSlider_json.URL_numberDuVendeur;

	                /*  if(newMaterialCode =='undefined' || newMaterialCode =="") {code = "" + code;}
	                else {code = "" + newMaterialCode; } */
	                code = code.toString();
	                if (typeOfProject == ' - credit renouvelable') {
	                    typeOfProject = "Crédit renouvelable";
	                }

	                if (newNumberDuVendeur !== "") {
	                    var updateJson = {
	                        "ModuleName": "WCM",
	                        "Code": "UPDATE",
	                        "Label": "maj selecteur",
	                        "Json": {
	                            "URL_numberDuVendeur": newNumberDuVendeur,
	                            "URL_materialCode": code,
	                            "URL_productCode": newProduitCode,
	                            "goodsCodeInitial": typeOfProject
	                        }
	                    };
	                    wcm_debug("updateIaEpartnerPanel : update Json sur " + updateEpartnerTopic);
	                    wcm_debug(updateJson);
	                    $(".newCREpartnerSlider_ia").removeClass("hide");
	                    if (code === "919GTX") {
	                        traVexDisplay();
	                    } else if (code === "897hypo") {
	                        racWithImmo();
	                    } else if (code === "897") {
	                        racWithoutImmo();
	                    } else if (code == "ImmoItem1") {
	                        Immo();
	                    } else if (redirecctIaFlag) {
	                        window.PageBus.publish(updateEpartnerTopic, globalPanelJson);
	                        redirecctIaFlag = false;
	                    } else {
	                        window.PageBus.publish(updateEpartnerTopic, updateJson);
	                    }
	                }
	            } else {
	                configPanels_json[idPanel]["Json"].goodsCodeInitial = typeOfProject;
	                var updateTopic = configPanels_json[idPanel]["Topic"]["simulation_update"];
	                var numberDuVendeur = $('#' + idPanel + ' .code-vendeur .vendeur[data-produit="' + produit + '"][data-dac*="' + sfCustomerDacLevel + '"][data-type="' + type + '"]').text();
	                var code = "" + code;
	                code = (code === '919a') ? '919' : code;

	                var updateJson = "";
	                if (numberDuVendeur !== "") {
	                    updateJson = {
	                        "ModuleName": "WCM",
	                        "Code": "UPDATE",
	                        "Label": "maj selecteur",
	                        "Json": {
	                            "URL_materialCode": code,
	                            "URL_productCode": produit,
	                            "URL_numberDuVendeur": numberDuVendeur,
	                            "goodsCodeInitial": typeOfProject
	                        }
	                    };
	                    wcm_debug("updateIaPanel : update Json sur " + updateTopic);
	                    wcm_debug(updateJson);
	                    if (code === "919GTX") {
	                        traVexDisplay();
	                    } else if (code === "897hypo") {
	                        racWithImmo();
	                    } else if (code === "897") {
	                        racWithoutImmo();
	                    } else if (code == "ImmoItem1") {
	                        Immo();
	                    } else if (redirecctIaFlag) {
	                        globalPanelJson.Json.goodsCodeInitial = typeOfProject;
	                        globalPanelJson.Json.URL_materialCode = code;
	                        window.PageBus.publish(updateTopic, globalPanelJson);
	                        redirecctIaFlag = false;
	                    } else {
	                        window.PageBus.publish(updateTopic, updateJson);
	                    }

	                } else {
	                    wcm_debug("updateIaPanel : Aucun vendeur d?fini pour ce projet (Panel : " + idPanel + ", Produit : " + produit + ", DAC : " + sfCustomerDacLevel + ", type : " + type + ")");
	                    updateJson = {
	                        "ModuleName": "WCM",
	                        "Code": "UPDATE",
	                        "Label": "maj selecteur",
	                        "Json": {
	                            "URL_numberDuVendeur": numberDuVendeur,
	                            "URL_materialCode": "",
	                            "URL_productCode": "",
	                            "goodsCodeInitial": typeOfProject
	                        }
	                    };
	                    wcm_debug("updateIaPanel : update Json sur " + updateTopic);
	                    wcm_debug(updateJson);
	                    window.PageBus.publish(updateTopic, updateJson);
	                }
	            }


	        } else {
	            wcm_debug("updateIaPanel : Probl?me de configuration");
	            wcm_debug(configPanels_json);
	        }
	        wcm_debug("updateIaPanel : fin");
	    }

	    function updateIASwitch(idPanel, value) {

	        wcm_debug("updateIASwitch : debut");
	        if (typeof idPanel !== 'undefined' && typeof value !== 'undefined' && configPanels_json[idPanel] && configPanels_json[idPanel]["Topic"] && configPanels_json[idPanel]["Topic"]["simulation_update"] !== 'undefined') {
	            var updateTopic = configPanels_json[idPanel]["Topic"]["simulation_update"];
	            var updateJson = {
	                "ModuleName": "WCM",
	                "Code": "UPDATE",
	                "Label": "maj switch",
	                "Json": {
	                    "URL_entry": value,
	                    "goodsCodeInitial": ""
	                }
	            };
	            wcm_debug("updateIaPanel : update Json sur " + updateTopic);
	            if (updateJson.Json.URL_entry == "Amount") {
	                updateJson.Json.goodsCodeInitial = "Credit renouvelable - montant";
	            } else {
	                updateJson.Json.goodsCodeInitial = "Credit renouvelable - mensualites ";
	            }
	            wcm_debug(updateJson);
	            window.PageBus.publish(updateTopic, updateJson);
	        }
	        wcm_debug("updateIASwitch : fin");
	    }

	    window.PageBus.subscribe('target.ia.**', null, function(topic, msg, data) {
	        wcm_debug("<mediator msg>");
	        wcm_debug(topic);
	        wcm_debug(msg);
	        wcm_debug(data);
	        wcm_debug("</mediator msg>");
	        if (topic === "target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_optiResultBlock_reunion.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_optiResultBlock_guyane.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_optiResultBlock_martinique.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_optiResultBlock_guadeloupe.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_cla" || topic === "target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemControllernewCr_cla") {

	            if (msg.Code !== "RELOAD" && msg.Json.oldData) {
	                require(["jquery", "app"], function($, app) {
	                    $('[data-panel="panel-1"]').click();
	                    RightNavManager.prototype.mobileCloseRightNav();
	                });
	            }


	        } else if (topic === "target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_rev" || topic === "target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_rev" || topic === "target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_rev") {
	            if (Mediator.getregisteredIa(topic) != undefined) {
	                require(["jquery", "app"], function($, app) {
	                    if ($(".rightNav").find(".active").length) {
	                        $($(".rightNav").find(".active")).click();
	                        //$('[data-panel="panel-2"]').click();
	                    }
	                    RightNavManager.prototype.mobileCloseRightNav();
	                });
	            }

	        } else if (topic === "target.ia.frpfsubscriptionpe_simulationSavingsResultReload.subscription_redirect") {
	            require(["jquery", "app"], function($, app) {

	                if ($(".rightNav").find(".active").length) {

	                    $('[data-panel="panel-3"]').click();
	                }
	                RightNavManager.prototype.mobileCloseRightNav();
	                //}

	            });
	        }

	    });
	    var redirecctIaFlag = false;
	    var globalPanelJson = {};

	    function RedirectIa(idPanel, message) {
	        if (message.ModuleName && (message.ModuleName === "blockUserToolkit" || message.ModuleName === "simulationResultSavings" || message.ModuleName === "subscribeCetelemController" || message.ModuleName === "subscribeCetelemControllerRunB" || message.ModuleName === "resultBlock" || message.ModuleName === "newProjectSimulationResult") && message.Code && message.Code === "REDIRECT" && configPanels_json[idPanel]) {

	            var objectButton = "";
	            if (typeof message.Json !== 'undefined') {
	                objectButton = message.Json;
	            } else {
	                objectButton = {};
	            }

	            if ($('#' + idPanel).hasClass("active") === false && configPanels_json[idPanel]["Json"] !== "") {
	                wcm_debug("RedirectIa : Active panel via subscription");

	                $.extend(configPanels_json[idPanel]['Json'], objectButton);

	                var wcm_message = {
	                    "ModuleName": "WCM",
	                    "Code": "REDIRECT",
	                    "Label": "maj panneau",
	                    "Json": objectButton
	                };

	                if ($('#' + idPanel).hasClass("iaInit") === true) {

	                    wcm_debug("RedirectIa : Update projet manager via souscription");
	                    //maj du project selecteur
	                    //if(configPanels_json[idPanel]["projectSelector"] !== undefined)
	                    //{
	                    //ProjectSelectorManager.prototype.reinit(configPanels_json[idPanel]["projectSelector"], objectButton.URL_materialCode);
	                    //}
	                    //maj IA
	                    if (configPanels_json[idPanel]["Topic"] !== "" && configPanels_json[idPanel]["Topic"]["simulation_update"] !== "") {
	                        objectButton.goodsCodeInitial = configPanels_json[idPanel]["Json"].goodsCodeInitial;
	                        wcm_message = {
	                            "ModuleName": "WCM",
	                            "Code": "REDIRECT",
	                            "Label": "maj panneau",
	                            "Json": objectButton
	                        };
	                        window.PageBus.publish(configPanels_json[idPanel]["Topic"]["simulation_update"], wcm_message);
	                        redirecctIaFlag = true;
	                        globalPanelJson = wcm_message;
	                    }

	                } else {
	                    wcm_debug("RedirectIa : Modif preselection");
	                    //modification de la preselection
	                    if (configPanels_json[idPanel]["projectSelector"] !== "") {
	                        $('#' + idPanel + ' .projectSelectorContainer').data('preselect', objectButton.URL_materialCode);
	                    }
	                }

	                wcm_debug("RedirectIa : Activation panneau ( " + idPanel + " )");
	                //activation du panneau


	                $('[data-panel="' + idPanel + '"]').click();
	            } else {
	                if ($('#' + idPanel).length > 0) {
	                    wcm_debug("RedirectIa : Update projet manager via souscription ( " + idPanel + " )");
	                    //maj du project selecteur
	                    if (configPanels_json[idPanel]["projectSelector"] !== undefined) {
	                        ProjectSelectorManager.prototype.reinit(configPanels_json[idPanel]["projectSelector"], objectButton.URL_materialCode);
	                    }
	                    //maj IA
	                    if (configPanels_json[idPanel]["Topic"] !== "" && configPanels_json[idPanel]["ModuleName"] !== "") {
	                        window.PageBus.publish(configPanels_json[idPanel]["Topic"][configPanels_json[idPanel]["ModuleName"]], wcm_message);
	                    }
	                } else {
	                    wcm_debug("RedirectIa : Panneau non trouv? ( " + idPanel + " )");
	                }
	            }
	        }
	    }
	    var panelFlag = 'REV';

	    function simulationRunACustom(jsonIa, topicIa) {

	        var queryValueS04 = window.PageBus.query('target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_rev')[0];
	        if (queryValueS04) {
	            if (queryValueS04.value.ModuleName === "simulationCRLChoice") {
	                if (jsonIa.entreeParcours) {
	                    jsonIa.entreeParcours = "Carte";
	                    //topicIa.simulation_redirect="target.ia.frpfsimulationpe_simulationCRLChoice.activpanel";
	                    panelFlag = 'CRL';
	                    console.log("Change of entreeParcours" + jsonIa.entreeParcours);
	                }
	            }
	        }

	    }

	    function simulationRunBCustom(jsonIa, topicIa) {
	        var queryValueS04B = window.PageBus.query('target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_rev')[0];
	        if (queryValueS04B) {
	            if (queryValueS04B.value.ModuleName === "simulationCRLChoice") {
	                if (jsonIa.entreeParcours) {
	                    resultBlock_json.entreeParcours = "Carte";
	                    //topicIa.simulation_redirect="target.ia.frpfsimulationpe_simulationCRLChoice.activpanel";
	                    panelFlag = 'CRL';
	                    console.log("Change of entreeParcours RunB" + jsonIa.entreeParcours);
	                }
	            }
	        }
	    }

	    /*function  epartnerRedirectionsDecision(jsonIa,topicIa){
	    	if(inSite && inSite ==="true"){
	    		topicIa.subscription_cla_redirect = "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_epartner";
	    		topicIa.subscription_rev_redirect = "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_epartner";
	    	}
	    	else if(inSite && inSite ==="false" ){
	    		topicIa.subscription_cla_redirect = "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_cetelem";
	    		topicIa.subscription_rev_redirect = "target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_cetelem";
	    	} 
	    	
	    }*/

	    function pushContollerEbilling(jsonIa, topicIa) {
	        var queryValueS23 = window.PageBus.query('target.ia.frpfclientpe_accountMgmtMySituation.detail_EB_redirect')[0];
	        if (queryValueS23 && topicIa.detail_CR_redirect) {
	            topicIa.detail_CR_redirect = "target.ia.frpfclientpe_accountMgmtMySituation.detail_EB_redirect";
	        }
	        var queryValueS23 = window.PageBus.query('target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWEB_redirect')[0];
	        if (queryValueS23 && topicIa.detail_CR_redirect) {
	            topicIa.detail_CR_redirect = "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWEB_redirect";




	        }
	        var queryValueS23 = window.PageBus.query('target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCREB_redirect')[0];
	        if (queryValueS23 && topicIa.detail_CR_redirect) {
	            topicIa.detail_CR_redirect = "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCREB_redirect";
	        }
	        var queryValueS23 = window.PageBus.query('target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCRNEWEB_redirect')[0];
	        if (queryValueS23 && topicIa.detail_CR_redirect) {
	            topicIa.detail_CR_redirect = "target.ia.frpfclientpe_accountMgmtMySituation.detail_NEWCRNEWEB_redirect";
	        }
	    }




	    window.PageBus.subscribe("ia.sf.webanalytics", "", function(topic, msg, data) {



	        $(".wcmDate").text($("#idDate").text());
	        if (localStorage.getItem("unreadMessageCount") != '0' && localStorage.getItem("unreadMessageCount") != null && msg.ModuleName !== "pushMessageController") {
	            $('.wcm-badge').removeClass('hide');
	            $('.wcm-badge').html(localStorage.getItem("unreadMessageCount"));
	        } else {
	            $('.wcm-badge').addClass('hide');
	            //localStorage.setItem("unreadMessageCount","0");
	        }
	        if (msg.ModuleName == "resultBlock") {
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.event === "simulation_altered" && msg.ModuleName === "resultBlock" && msg.URL_productCode === "REV") {
	            var className = ".subscribeCetelemSimResult";
	            $($(className + " article")[1]).find('.tableStaticHead').empty();
	            revTableDispaly(className);
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.event === "simulation_updated" && msg.ModuleName === "resultBlock" && msg.URL_productCode === "REV") {
	            var className = ".subscribeCetelemSimResult";
	            $($(className + " article")[1]).find('.tableStaticHead').empty();
	            revTableDispaly(className);
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.event === "simulation_updated" && msg.ModuleName === "resultBlock" && msg.URL_productCode === "CLA") {
	            sfIaParam.Json.URL_productCode = msg.URL_productCode;
	            sfIaParam.Json.URL_duration = msg.URL_duration;
	            sfIaParam.Json.URL_goodAmount = msg.URL_goodAmount;
	            sfIaParam.Json.URL_materialCode = msg.URL_materialCode;
	            sfIaParam.Json.URL_monthlyInstalment = msg.URL_monthlyInstalment;
	        }
	        if (msg.ModuleName === "prestoController" && (msg.stepNumber === "4" || msg.stepNumber === "5.2")) {
	            require(["jquery"], function($) {
	                $('.linkBackToWebsite').addClass('pfhide');
	            });

	        }

	        $(".mainNav .connectionContainer .clientNav .accesClient>a").css("background", "#96bf31");

	        wcm_debug_wa("webanalytics : ");
	        wcm_debug_wa(msg);
		if(typeof sfIaParam != "undefined"){
			$('.loadCRDetails').on('click', function(){			
			window.PageBus.publish('target.ia.frpfclientpe_accountMgmtMySituation.dashboard_redirect',{});			
			return; });
				
		}

	    });



	    var contolOfGoods = "";
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_epartner.redirect_a", null, function(topic, msg, data) {
	        if (msg.Json.goodsCodeInitial !== contolOfGoods) {
	            contolOfGoods = msg.Json.goodsCodeInitial;
	            $('.newEpartnerResult_ia').addClass('hide');
	            $('.epartnerBreadCrum').removeClass('hide');

	            $('.legalExample').addClass('hide');

	            $('.reroutePPHldr').addClass('hide');
	            //$('.epartnerBreadCrum').removeClass('hide');
	            //$('.legalSpecialBlockCRL').addClass('hide');
	            $('.revTableDisplay').addClass('hide');
	            $('.legalBlockPP').addClass('hide');
	            $('.legalSpecialCRL').addClass('hide');
	            $('.legalSpecialBlock').addClass('hide');
	            $('.newEpartnerSlider_ia').removeClass('hide');
	            $('.newCREpartnerSlider_ia').removeClass('hide');
	            $('.newCREpartnerResult_ia').addClass('hide');
	            msg.Json.URL_materialCode = (msg.Json.URL_materialCode === '919a') ? '919' : msg.Json.URL_materialCode;
	        }
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_subscribeCetelemControllerRunB.form_redirect_epartner", null, function(topic, msg) {
	        if (msg.Json.datacrl != undefined) {
	            msg.Json.dataCRL = msg.Json.datacrl;
	        }
	    });

	    window.PageBus.subscribe("target.ia.frpfsimulationpe_epartnerSlider.simulation_legal_update", null, function(topic, msg, data) {
	        $('.pf_loader_div').removeClass('pf_hide');
	        if (msg.Json.goodsCodeInitial === contolOfGoods) {
	            contolOfGoods = msg.Json.goodsCodeInitial;
	            $('.newEpartnerResult_ia').removeClass('hide');
	            $('.newCREpartnerResult_ia').removeClass('hide');
	            if (msg.Json.URL_productCode === "REV") {
	                $('.revTableDisplay').empty();
	                var className = ".revTableDisplay";
	                var newCRBlock = "EMI";
	                if (msg.Json.choice === "parDuree") {
	                    newCRBlock = "DTS";
	                } else {
	                    newCRBlock = "EMI";
	                }
	                revTableDispalynewCR(className, newCRBlock);
	            }
	            $('.revTableDisplay').removeClass('hide');
	            $('.legalExample').removeClass('hide');
	            //$('.legalSpecialBlockCRL').removeClass('hide');




	            $('.legalBlockPP').removeClass('hide');
	            $('.legalSpecialCRL').removeClass('hide');
	            $('.legalSpecialBlock').removeClass('hide');
	        }
	    });



	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_reunion.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_martinique.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_guadeloupe.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_guyane.subscribeCetelemController_rev", null, function(topic, msg, data) {
	        if (msg.ModuleName === "simulationCRLChoice") {
	            msg.Json.entreeParcours = 'Carte';
	            panelFlag = 'CRL';
	        } else
	            panelFlag = 'REV';
	    });
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';

	    });
	    /*test*/
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_subscribeCetelemController.subscribeCetelemControllernewCr_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';

	    });
	    /*test*/




	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_resultBlock.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_reunion.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_guyane.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_guadeloupe.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiResultBlock_martinique.subscribeCetelemController_cla", null, function(topic, msg, data) {
	        panelFlag = 'CLA';
	    });

	    window.PageBus.subscribe('target.ia.frpfpciaaape_fullAuthentication.subscription_redirect', null, function(topic, data, msg) {
	        console.log('Received event target.ia.frpfpciaaape_fullAuthentication.subscription_redirect\n=> loading /sites/cetelem/navigation-service.page');
	        $.ajax({
	            url: "/sites/cetelem/navigation-service.page"
	        }).done(function(data) {
	            console.log('navigation loaded => reflect it in the HTML');
	            $('.mainNav').html($(data).find('.mainNav').children()).append($(data).find('.subClientNav'));

	            console.log('removing the overlay opened to log in');
	            $('#mainContainer').removeClass('overlay');
	            console.log('relaunching NavigationManager');
	            new NavigationManager();
	            $(".authenticationBox").remove();
	            console.log('panel loaded => reflect it in the HTML');
	            $('#formSimulationCredit').html($(data).find('#formSimulationCredit').children());
	            $('#formSimulationCreditRenouvelable').html($(data).find('#formSimulationCreditRenouvelable').children());
	            $('#formSimulationEpargne').html($(data).find('#formSimulationEpargne').children());
	            new ContactsManager();



	            console.log('Footer loaded => reflect it in the HTML');
	            $('.socialBtn').html($(data).find('.socialBtn').children());
	            $('.phoneNumber').html($(data).find('.phoneNumber').children());
	            $('.contactBtn').html($(data).find('.contactBtn').children());


	            console.log('relaunching ContactsManager');
	            new ContactsManager();




	        });
	    });


	    function openCRLSimulate(event) {
	        simulationCRLChoice_json.URL_cardType = $(".listeCartes input:radio:checked").val();
	        activeIaPanel("panel-1", stopLoaderCallback);
	        $('[data-panel="panel-1"]').click();

	    }

	    function imageinterChange() {
	        /* for small devices */
	        /* if(window.matchMedia("screen and (max-width: 40em)").matches){
	        	$("#bannerImage").attr("src","/rsc/sys/cetelem/new-img/medias/divers/formuleRisque_small.png")
	        }else if(window.matchMedia("screen and (max-width: 64em)").matches){
	        	$("#bannerImage").attr("src","/rsc/sys/cetelem/new-img/medias/divers/formuleRisque_medium.png");
	        }else{
	        	$("#bannerImage").attr("src","/rsc/sys/cetelem/new-img/medias/divers/formuleRisque_large.png");
	        } */
	    }

	    function nextSimulationButton(ModuleName) {
	        var ipadResolution = window.matchMedia("(max-width: 1024px)").matches
	        if (ipadResolution) {
	            if (ModuleName == "resultBlock") {
	                S40mediumView();
	            } else if (ModuleName == "subscribeCetelemController") {
	                S41mediumView();
	            } else if (window.resultBlock_json !== undefined) {
	                S40mediumView();
	            } else if (window.subscribeCetelemController_json !== undefined) {
	                S41mediumView();
	            } else if (ModuleName == "simulationResultSavings") {
	                savingsMediumView();
	            } else if (window.simulationResultSavings_json) {
	                savingsMediumView();
	            }
	        } else {
	            if (window.resultBlock_json !== undefined) {
	                S40largeView();
	            } else if (window.subscribeCetelemController_json !== undefined) {
	                S41largeView();
	            } else if (window.simulationResultSavings_json) {
	                savingsLargeView();
	            }
	        }

	    }

	    function S40mediumView() {
	        /*if($(".legalExampleCRL").length){
	        	var tempdiv="<div class='text-center tempdiv spacedTop'></div>";
	        			var simulButton= $($(".nextSimulation")).add($(".nextSimulation").next());
	        			$(".legalExampleCRL").after($(tempdiv).append($(simulButton)));
	        			$(".nextSimulation").css("display","table-cell");
	        			$(".nextSimulation").removeClass("hide-for-small-only");
	        		}else if($(".legalExamplePP").length){
	        			if(!$(".newSimulation").length){
	        				$(".legalExamplePP").after($(".nextSimulation").parent().parent());
	        				$(".nextSimulation").css("display","table-cell");
	        				$(".nextSimulation").removeClass("hide-for-small-only");
	        			}else{
	        				$(".nextSimulation").css("display","table-cell");
	        				$(".nextSimulation").removeClass("hide-for-small-only");
	        			}
	        			





	        		}*/
	    }

	    function S41mediumView() {
	        /*if($(".legalExampleCRL").length){
	        			var tempdiv="<div class='text-center tempdiv spacedTop'></div>";
	        			$(".legalExampleCRL").after($(tempdiv).append($(".simResultAnalytic")));
	        			$(".simResultAnalytic").css("display","table-cell");
	        			$(".simResultAnalytic").removeClass("hide-for-small-only");
	        		}else if($(".legalExamplePP").length){
	        			if(!$(".newSimulation").length){
	        				$(".legalExamplePP").after($(".simResultAnalytic").parent().parent());
	        				$(".simResultAnalytic").css("display","table-cell");
	        				$(".simResultAnalytic").removeClass("hide-for-small-only");
	        			}else{
	        				$(".simResultAnalytic").css("display","table-cell");
	        				$(".simResultAnalytic").removeClass("hide-for-small-only");
	        			}





	        		}*/
	    }

	    function S40largeView() {
	        /*if($(".legalExamplePP").length){
	        			if(!$(".newSimulation").length){
	        				$(".resultTable").children().append($(".nextSimulation").parent().parent());
	        				//$(".nextSimulation").css("display","table-cell");
	        			}
	        		}else if($(".legalExampleCRL").length){
	        			$($(".resultTable")[0]).children().find(".recapMensu").before($(".nextSimulation"));
	        			//$(".nextSimulation").css("display","table-cell");





	        		}*/
	    }

	    function S41largeView() {
	        /*if($(".legalExamplePP").length){
	        		if(!$(".newSimulation").length){
	        			$(".resultTable").children().append($(".simResultAnalytic").parent().parent());
	        		}
	        	}else if($(".legalExampleCRL").length){
	        			$($(".resultTable")[0]).children().find(".recapMensu").before($(".nextSimulation"));
	        			//$(".nextSimulation").css("display","table-cell");





	        	}*/
	    }

	    function savingsMediumView() {
	        $(".dynamicDataBlockOne").append($(".demanderBtn").parent().parent());
	    }

	    function savingsLargeView() {
	        $(".resultTable").children().append($(".demanderBtn").parent().parent());
	    }




	    function sessionCaller(code) {

	        var urle = "";




	        switch (code) {
	            case "1004822995":
	                urle = "/fr/espace-client/dac-service";
	                break;
	            case "2574822995":
	                urle = "/fr/cora/espace-client/dac-service";
	                break;
	            case "2584999124":
	                urle = "/fr/corapap/espace-client/dac-service";
	                break;
	            case "2361987536":
	                urle = "/fr/reunion/espace-client/dac-service";
	                break;
	            case "1341987494":
	                urle = "/fr/martinique/espace-client/dac-service";
	                break;
	            case "1331987486":
	                urle = "/fr/guadeloupe/espace-client/dac-service";
	                break;
	            case "1331987528":
	                urle = "/fr/guyane/espace-client/dac-service";
	                break;
	            default:
	                urle = "/fr/espace-client/dac-service";
	        }

	        var i2session = 0;
	        var iVariableSec = setInterval(function() {
	            $.ajax({
	                url: urle
	            }).done(function(data) {
	                var dac = ($(data).find("Datum[Name='DAC']"))[0].textContent;
	                if (dac === "0" || i2session > 1) stopTimer();
	            });
	            i2session++;
	        }, 330000);

	        function stopTimer() {
	            clearInterval(iVariableSec);
	        }
	    }



		var equalflag = true;
	    var authLoaded = true;
	    //var newEpartnerLegalExampleFlag = true;
	    window.PageBus.subscribe("ia.sf.loaded", null, function(topic, msg, data) {

	        $(".wcmDate").text($("#idDate").text());

	        $(".mainNav .connectionContainer .clientNav .accesClient>a").css("background", "#96bf31");
	        //chatbot	
	        if (msg.ModuleName === "fullAuthentication") {
	            $(".fullAuthentication_ia").removeAttr("style");
	            $('.fullAuthentication_ia').append($('.cetelemchatbot'));
	            $('.cetelemchatbot').removeClass('hide-for-all');
	        }
	        //Temp fix to maintain the session
	        if (msg.ModuleName === "lostConnection") {




	            function stopTimer() {
	                clearInterval(iVariableSec);
	            }
	            var i2session = 0;
	            var iVariableSec = setInterval(function() {
	                $.ajax({




	                    url: "/fr/espace-client/dac-service"
	                }).done(function(data) {
	                    var dac = ($(data).find("Datum[Name='DAC']"))[0].textContent;
	                    if (dac === "0" || i2session > 1) stopTimer();
	                });


	                i2session++;
	            }, 330000);
	        }


	        //Comment this if there is a change in pushMessage page to Dashboard Page 
	        window.PageBus.subscribe("target.ia.frpfclientpe_accountMgmtMySituation.dashboard_redirect_pushMessage", null, function(topic, msg, data) {

	            $(".dashboard-component").show();
	            $(window).trigger('resize');
	            $(".pushMessageController_ia").hide();
	        });

	        if (msg.ModuleName === "fullAuthentication") {
	            localStorage.setItem("unreadMessageCount", "0");
	        }
	        if (localStorage.getItem("unreadMessageCount") != '0' && localStorage.getItem("unreadMessageCount") != null && msg.ModuleName !== "pushMessageController") {
	            $('.wcm-badge').removeClass('hide');
	            $('.wcm-badge').html(localStorage.getItem("unreadMessageCount"));
	        } else {
	            $('.wcm-badge').addClass('hide');
	            //localStorage.setItem("unreadMessageCount","0");
	        }

	        if (msg.ModuleName === "newEpartnerLegalExample" && msg.Label === "CRL_Legal") {
	            /* var className=".revTableDisplay"; */


	            //newEpartnerLegalExampleFlag =  false;
	            /* revTableDispaly(className); */
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.ModuleName === "simulationResultSavings") {
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.ModuleName === "subscribeCetelemController") {
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.ModuleName === "resultBlock" || msg.ModuleName === "optiResultBlock") {
	            if (msg.URL_productCode !== "REV") {
	                nextSimulationButton(msg.ModuleName);
	            }
	            if (msg.URL_productCode === "REV") {
	                var className = ".subscribeCetelemSimResult";
	                revTableDispaly(className);
	                nextSimulationButton(msg.ModuleName);
	            }
	        } else if (msg.ModuleName === "subscribeCetelemController" && msg.URL_productCode === "REV") {
	            var className = ".simulationEtSouscription";
	            revTableDispaly(className);
	            nextSimulationButton(msg.ModuleName);
	        }
	        if (msg.ModuleName === "simulationResultBlock" && msg.URL_productCode === "REV") {
	            var idName = "#ncr-simple-steps";
	            var newCRBlock = "EMI";
	            if (msg.methodeSimulation === "parDuree") {
	                newCRBlock = "DTS";
	            } else if (msg.methodeSimulation === "parMensualite") {
	                newCRBlock = "EMI";
	            }
	            revTableDispalynewCR(idName, newCRBlock);
	        }




	        if (msg.ModuleName === "accountMgmtAlerte") {
	            imageinterChange();
	        }
	        if (msg.ModuleName == "subscribeCetelemBlockSummary") {
	            $(".removeLoader").removeClass("iaLoader");
	        }

	        require(["app"], function(app) {
	            if (msg.ModuleName === "generalDashboard") {
	                EqualBoxesManager.prototype.initEvents();
	                $('div[class^="pushblock"] a').on('click', function(ele) {
	                    window.location.href = $(ele.target).attr("href");
	                });
	            }
	            if (msg.ModuleName === "insuranceDetails") {
	                EqualButtonsManager.prototype.initEvents();
	            }

	            EqualHeightUntilManager.prototype.initEvents();
	            $(".sliderContainer").on("click", function() {
	                if ($($(".sliderContainer input")[0]).attr("disabled")) {
	                    if ($('[data-panel="panel-1"]').hasClass("active")) {
	                        $("#creditProjectSelectorContent").css({
	                            display: "block"
	                        });
	                    }

	                }
	            });

	        });




	        wcm_debug_wa("loaded : ");
	        wcm_debug_wa(msg);
	        var queryObj = window.PageBus.query('target.ia.frpfpciaaape_fullAuthentication_redirect');
	        if (queryObj.length) {
	            if (queryObj[0].value.Code === "REDIRECT" && authLoaded) {
	                $('.connection > li.accesClient > a').trigger('click');
	                authLoaded = false;
	            }
	        }

	        //for simulatos for iphone and scroll to top feature

	        if (msg.ModuleName === "simulationGeneric" || msg.ModuleName === "simulationCRLChoice" || msg.ModuleName === "simulationSaving" || msg.ModuleName === "simulationBoxCR") {
	            if (navigator.userAgent.match(/(iPhone)/)) {
	                $("#rightContainer .panel .sliderContainer .noUiSlider").css("width", "75%");
	                $(".sliderContainer .stepContainer").css({
	                    "padding-left": "2rem"
	                }, {
	                    "padding-right": "2rem"
	                });
	            }
	            //if(window.location.pathname==$(".logo").attr("href")){
	            if (window.matchMedia("(max-width: 40em)").matches) {
	                if (msg.ModuleName === "simulationGeneric") {
	                    $('#panel-1').animate({
	                        scrollTop: 60
	                    });
	                } else if (msg.ModuleName === "simulationCRLChoice") {
	                    $('#panel-2').animate({
	                        scrollTop: 60
	                    });
	                } else if (msg.ModuleName === "simulationCRLChoice") {
	                    $('#panel-3').animate({
	                        scrollTop: 60
	                    });
	                } else if (msg.ModuleName === "simulationBoxCR") {
	                    $('#panel-3').animate({
	                        scrollTop: 60
	                    });




	                }
	            }
	            //}
	        }


	        if (msg.ModuleName === "newEpartnerSlider") {
	            var currentURL = window.location.toString();
	            if (newCREpartnerSlider_json.URL_productCode !== "REV" && currentURL.search('codemateriel') > 0) {
	                require(["jquery", "app", ], function($, app) {
	                    $(document).ready(function() {
	                        var mainValue = "";
	                        var subId = newCREpartnerSlider_json.URL_materialCode;
	                        newCREpartnerSlider_json.URL_productCode;
	                        subId = subId.toString();
	                        mainValue = $(".selected [data-code='" + subId + "']").data('id');
	                        $("#" + mainValue).find(".selected [data-code='" + subId + "']").trigger('change');
	                    });
	                });
	            }
	        }
	        if (msg.ModuleName === "newCREpartnerSlider") {

	            var currentURL = window.location.toString();
	            if (newCREpartnerSlider_json.URL_productCode !== "REV" && currentURL.search('codemateriel') > 0) {
	                require(["jquery", "app", ], function($, app) {
	                    $(document).ready(function() {
	                        var mainValue = "";
	                        var subId = newCREpartnerSlider_json.URL_materialCode;
	                        newCREpartnerSlider_json.URL_productCode;
	                        subId = subId.toString();
	                        mainValue = $(".selected [data-code='" + subId + "']").data('id');
	                        $("#" + mainValue).find(".selected [data-code='" + subId + "']").trigger('change');
	                    });
	                });
	            }
	        }

	        $('.connectionContainer.logoff .accesClient').on('click', function() {
	            document.cookie = "logintime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	            localStorage.setItem("newpop", "");
	            localStorage.setItem("iCount", 0);
	            localStorage.removeItem("IDPRFetched");
	            localStorage.removeItem("ConfigFetched");
	        });
	        $('.accesClientSubmit').on('click', function() {
	            document.cookie = "logintime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	            localStorage.setItem("newpop", "");
	            localStorage.setItem("iCount", 0);
	            localStorage.removeItem("IDPRFetched");
	            localStorage.removeItem("ConfigFetched");
	        });
	        $('.disconnect').on('click', function() {
	            document.cookie = "logintime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	            localStorage.setItem("newpop", "true");
	            localStorage.setItem("iCount", 0);
	            localStorage.removeItem("IDPRFetched");
	            localStorage.removeItem("ConfigFetched");
	        });

	        $('.goToBascule').on('click', function() {
	            dataLayer = dataLayer.filter(function(x) {
	                return !x.ModuleName;
	            });

	        });
		
	        $('.panelDetail1').on('click', function() {

	        if(equalflag){
 
		EqualHeightUntilManager.prototype.initEvents();
		equalflag = false;
		}
  
	        });

if(typeof sfIaParam != "undefined"){
			$('.loadCRDetails').on('click', function(){			
			window.PageBus.publish('target.ia.frpfclientpe_accountMgmtMySituation.dashboard_redirect',{});			
			return; });
				
		}

	    });




	    window.PageBus.subscribe('target.ia.frpfsimulationpe_cardPage.back_resultPage', null, function(topic, msg) {
	        /* 	var idName="#ncr-simple-steps";
		var newCRBlock="EMI";
		if(msg.methodeSimulation === "parDuree"){
			newCRBlock="DTS";
		}else if(msg.methodeSimulation === "parMensualite"){
			newCRBlock="EMI";
		}
		revTableDispalynewCR(idName,newCRBlock);   */
	    })




	    window.PageBus.subscribe("wcm.sf.displayError", null, function(topic, msg, data) {
	        $(".wcmDate").text($("#idDate").text());
	        if (msg.ModuleName === "simulationGeneric" || msg.ModuleName === "resultBlock" || msg.ModuleName === "optiResultBlock" || msg.ModuleName === "subscribeCetelemController" || msg.ModuleName === "subscribeCetelemControllerRunB" || msg.ModuleName === "simulationCRLChoice" || msg.ModuleName === "subscriptionRCSI" || msg.ModuleName === "simulationBoxCR") {
	            displayCreditPopup();
	        } else if (msg.ModuleName === "fullAuthentication") {
	            $(".loader-cont1").addClass("pf_hide");
	            $(".pf_loader_div").addClass("pf_hide");
	            Mediator.registerIa("frpfpciaaape_fullAuthentication", true);
	            displayErrorPopup();
	        } else if (msg.ModuleName === "requestForFunding") {
	            requestForFundingPopup();
	        } else if (msg.ModuleName === "simulationResultSavings" || msg.ModuleName === "openSavingAccount" || msg.ModuleName === "simulationSaving") {
	            displaySavingsPopup();
	        }

	    });

	    function revTableDispaly(className) {
	        require(["jquery", "app"], function($, app) {
	            $.ajax({
	                url: "/rsc/contrib/html/cetelem/CRLTable.html"
	            }).done(function(data) {
	                if (className === ".revTableDisplay") {
	                    $(className).html(data);
	                } else {
	                    $($(className + " article")[1]).before(data);
	                }
	                $(".wcmDate").text($("#idDate").text());
	                displayCRLTableM();
	                $('.carousel').wcmslick({
	                    "infinite": false,
	                    "dots": true,
	                    "slidesToShow": 3,
	                    "slidesToScroll": 1,
	                    "responsive": [{
	                        "breakpoint": 768,
	                        "settings": {
	                            "slidesToShow": 1
	                        }
	                    }]
	                });

	            });
	        });
	    };

	    function revTableDispalynewCR(idName, newCRBlock) {
	        require(["jquery", "app"], function($, app) {
	            $.ajax({
	                url: "/rsc/contrib/html/cetelem/newCR/CRLTable.html"
	            }).done(function(data) {
	                if (idName === ".revTableDisplay") {
	                    $('.revTableDisplay').empty();
	                    $(idName).html(data);
	                } else {
	                    $(idName).before(data);
	                }
	                $(".wcmDate").text($("#idDate").text());
	                displayNewCRLTableM(newCRBlock);
	            });
	        });
	    };




	    function urlRedirection() {

	        $(".racSans").click(function() {
	            //window.PageBus.publish(simulationCustom_topic.racwithoutImmo, {});
	            window.location.href = variation + "credit/rachats-credits";

	        });

	        $(".racAvec").click(function() {
	            //window.PageBus.publish(simulationCustom_topic.racwithImmo, {});
	            window.location.href = variation + "credit/rachats-credits";
	        });

	        $(".projImmo").click(function() {
	            //window.PageBus.publish(simulationCustom_topic.projImmo, {});
	            window.location.href = variation + "credit/credit-immobilier/souscription-immobilier";
	        });
	    }

	    function racWithoutImmo() {
	        require(["jquery"], function($) {
	            var racSans = "<div class='row racSans epartProj'><div class='columns'><a  class='button next-arrow small radius expand'>Demander ce rachat</a></div></div>";
	            $(".racAvec").remove();
	            $(".racSans").remove();
	            $(".projImmo").remove();
	            $(".phoneButton").remove()
	            $(".simulationGeneric_ia").addClass("hide");
	            $(".projectSelectorContainer").append(racSans);
	            $(".newEpartnerSlider_ia").addClass("hide");
	            $(".newCREpartnerSlider_ia").addClass("hide");
	            $(".prod-btn").html(racSans);
	            urlRedirection();
	        });
	    }

	    function racWithImmo() {
	        require(["jquery"], function($) {
	            var racAvec = "<div class='row racAvec epartProj'><div class='columns'><a  class='button next-arrow small radius expand'>Demander ce rachat</a></div></div>";
	            $(".simulationGeneric_ia").addClass("hide");
	            $(".racSans").remove();
	            $(".racAvec").remove();
	            $(".projImmo").remove();
	            $(".phoneButton").remove();
	            $(".newEpartnerSlider_ia").addClass("hide");
	            $(".newCREpartnerSlider_ia").addClass("hide");
	            if (window.matchMedia("(max-width: 40em)").matches) {
	                var phoneButton = "<div class='phoneButton' style='text-align:center;'><p>Pour vous accompagner au mieux dans votre projet, un expert est à votre disposition au : </p><a href='tel:+33969366003'><img src='/rsc/sys/cetelem/new-img/medias/divers/phoneNumberRAC.jpg'></a><p>Du lundi au vendredi de 9h à 18h30</p></div>";
	                $(".projectSelectorContainer").append(phoneButton);
	                $(".prod-btn").html(phoneButton);
	            } else {
	                $(".projectSelectorContainer").append(racAvec);
	                $(".prod-btn").html(racAvec);
	                urlRedirection();
	            }
	        });
	    }

	    function Immo() {
	        require(["jquery"], function($) {
	            var projImmo = "<div class='row projImmo epartProj'><div class='columns'><a  class='button next-arrow small radius expand'>Demander ce crédit</a></div></div>";
	            $(".simulationGeneric_ia").addClass("hide");
	            $(".projImmo").remove();
	            $(".phoneButton").remove();
	            $(".newEpartnerSlider_ia").addClass("hide");
	            $(".newCREpartnerSlider_ia").addClass("hide");
	            if (window.matchMedia("(max-width: 40em)").matches) {
	                /*var phoneButton="<div class='phoneButton' style='text-align:center;'><p>Pour vous accompagner au mieux dans votre projet, un expert est à votre disposition au : </p><a href='tel:+33240167391'><img src='/rsc/sys/cetelem/new-img/medias/divers/phoneNumberImmo.jpg'></a><p>Du lundi au vendredi de 9h à 18h30</p></div>";
		
        $(".projectSelectorContainer").append(phoneButton);
		$(".prod-btn").html(phoneButton);*/
	            } else {
	                $(".projectSelectorContainer").append(projImmo);
	                $(".prod-btn").html(projImmo);
	                urlRedirection();
	            }
	        });

	    }

	    function traVexDisplay() {
	        require(["jquery"], function($) {
	            var phoneButton = "<div class='phoneButton epartProj' style='text-align:center;'><p>Pour vous accompagner au mieux dans votre projet, un expert est à votre disposition au : </p><a href='tel:+33820009900'><img src='/rsc/sys/cetelem/new-img/medias/divers/phoneNumber.png'></a><p>Du lundi au vendredi de 9h à 19h</p></div>";
	            $(".phoneButton").remove();
	            $(".simulationGeneric_ia").addClass("hide");
	            $(".customCheckboxContainer").addClass("hide");
	            $(".newEpartnerSlider_ia").addClass("hide");
	            $(".newCREpartnerSlider_ia").addClass("hide");
	            $(".projectSelectorContainer").append(phoneButton);
	            $(".prod-btn").html(phoneButton);
	        });
	    }

	    function resetSimulateDisplay() {
	        require(["jquery"], function($) {
	            $(".simulationGeneric_ia").removeClass("hide");
	            $(".racSans").remove();
	            $(".racAvec").remove();
	            $(".projImmo").remove();
	            $(".phoneButton").remove();
	            $(".epartProj").remove();
	        });
	    }

	    function callContactform(id, start, end) {
	        var time = parseInt($("#idTime").text().split(":")[0] * 60) + parseInt($("#idTime").text().split(":")[1]);
	        if (time > end || time < start) {
	            displayContactPopup();
	        } else {
	            webVoicePop(id);
	        }



	    }

	    function displayContactPopup() {

	        var popupTag = "<div class='text-center'><a href='#' class='hasModal' data-modal='insuranceContactModal' data-modalwidth='750' data-modaldefault='open' data-hasqtip='5' aria-describedby='qtip-5'></a><div id='insuranceContactModal' data-url-context='/frpfcommunicationpe/' class='hide insuranceContactModal'></div>";
	        $('.borderedWhiteBox').append(popupTag);
	        require(["insurance", "app"], function(Insurance, app) {
	            new Insurance(".insuranceContactModal", insurance_json, insurance_topic);
	            ModalManager.prototype.initEvents();
	        });
	    }

	    function displayErrorPopup() {

	        var popupTag = "<div class='text-center'><a href='#' class='hasModal' data-modal='oopsContactModal' data-modalwidth='750' data-modaldefault='open' data-hasqtip='5' aria-describedby='qtip-5'></a><div id='oopsContactModal' data-url-context='/frpfcommunicationpe/' class='hide oopsContactModal'></div>";
	        $('#connectionContainer').append(popupTag);
	        require(["oops", "app"], function(Oops, app) {
	            new Oops(".oopsContactModal", oops_json, oops_topic);
	            ModalManager.prototype.initEvents();
	        });
	    }

	    function requestForFundingPopup() {


	        require(["jquery", "app"], function($, app) {
	            $.ajax({
	                url: "/rsc/contrib/html/cetelem/errorPopup.html"
	            }).done(function(data) {

	                $('#connectionContainer').append(data);
	                ModalManager.prototype.initEvents();
	            });
	        });
	    };

	    function displayCreditPopup() {

	        var popupTag = "<div class='text-center'><a href='#' class='hasModal' data-modal='creditPopupModal' data-modalwidth='750' data-modaldefault='open' data-hasqtip='5' aria-describedby='qtip-5'></a><div id='creditPopupModal' data-url-context='/frpfcommunicationpe/' class='hide creditPopupModal'></div>";
	        $('#connectionContainer').append(popupTag);
	        require(["credit", "app"], function(Oops, app) {
	            new Oops(".creditPopupModal", credit_json, credit_topic);
	            ModalManager.prototype.initEvents();
	        });
	    }

	    function displaySavingsPopup() {

	        var popupTag = "<div class='text-center'><a href='#' class='hasModal' data-modal='savingsPopupModal' data-modalwidth='750' data-modaldefault='open' data-hasqtip='5' aria-describedby='qtip-5'></a><div id='savingsPopupModal' data-url-context='/frpfcommunicationpe/' class='hide savingsPopupModal'></div>";
	        $('#connectionContainer').append(popupTag);
	        require(["savings", "app"], function(Oops, app) {
	            new Oops(".savingsPopupModal", savings_json, savings_topic);
	            ModalManager.prototype.initEvents();
	        });
	    }

	    function displayCRLTableM() {
	        BNPPPF.readFormula({
	            "product": "REV"
	        }, function(result) {
	            if (!result.error) {
	                require(["jquery", "app"], function($, app) {
	                    headerM(currencyFormatter(result.maxAmount[0]), currencyFormatter(result.maxAmount[1]), 1);
	                    headerM(currencyFormatter(result.maxAmount[0]), currencyFormatter(result.maxAmount[1]), 2);
	                    headerM(currencyFormatter(result.maxAmount[0]), currencyFormatter(result.maxAmount[1]), 3);
	                    var taeg = -1;
	                    var k = 0,
	                        l = 1,
	                        m = 2;
	                    for (var i = 0; i < result.formulaList.length; i++) {
	                        //rows(result.formulaList[i],currencyFormatter(result.taegList[++taeg]),currencyFormatter(result.taegList[++taeg]),currencyFormatter(result.taegList[++taeg]));
	                        firstColumnM(result.formulaList[i]);
	                    }
	                    for (var i = 0; i < result.formulaList.length; i++) {
	                        //rows(result.formulaList[i],currencyFormatter(result.taegList[++taeg]),currencyFormatter(result.taegList[++taeg]),currencyFormatter(result.taegList[++taeg]));
	                        if (i !== 0) {
	                            k = k + 3;
	                            if (k >= result.taegList.length) {

	                            } else {
	                                crlColumn1M(currencyFormatter(result.taegList[k]));
	                            }

	                        } else {
	                            crlColumn1M(currencyFormatter(result.taegList[k]));
	                        }

	                    }
	                    for (var i = 0; i < result.formulaList.length; i++) {

	                        if (i !== 0) {
	                            l = l + 3;
	                            if (l >= result.taegList.length) {

	                            } else {
	                                crlColumn2M(currencyFormatter(result.taegList[l]));
	                            }

	                        } else {
	                            crlColumn2M(currencyFormatter(result.taegList[l]));
	                        }

	                    }
	                    for (var i = 0; i < result.formulaList.length; i++) {

	                        if (i !== 0) {
	                            m = m + 3;
	                            if (m >= result.taegList.length) {

	                            } else {
	                                crlColumn3M(currencyFormatter(result.taegList[m]));
	                            }

	                        } else {
	                            crlColumn3M(currencyFormatter(result.taegList[m]));
	                        }

	                    }
	                    TableStaticHeadManager.prototype.initEvents();
	                });
	            }
	        });
	    }

	    function displayNewCRLTableM(newCRBlock) {
	        newCrBlk = newCRBlock;
	        BNPPPF.readFormulaNewCR({
	            "product": "REV",
	            "newCRBlock": newCRBlock
	        }, function(result) {
	            if (!result.error) {
	                require(["jquery", "app"], function($, app) {
	                    var taeg = -1;
	                    var k = 0,
	                        l = 1,
	                        m = 2;
	                    var ncr_table = '<div class="tbl-row" id="ncr-rev-table"><div class="tbl-cell-view newcr-tc row1"></div><div class="tbl-cell-view newcr-tc row2"><p id="ncr-revTbl-title">Montant de l\'utilisation</p></div><div class="tbl-cell-view newcr-tc row3"></div></div><div class="tbl-row"><div class="tbl-cell-view newcr-tc">Dur&eacute;e</div><div class="tbl-cell-view newcr-tc"> De 0  à <br class="show-for-small-only"/> 3 000,00 &euro; </div><div class="tbl-cell-view newcr-tc"> De  3 000,01 à <br class="show-for-small-only"/> 4 000,00 &euro;</div></div>';
	                    for (var i = 0; i < result.formulaList.length; i++) {
	                        var durVal = result.formulaList[i];
	                        var durValMin = 0;
	                        if (i != 0) {
	                            var durValMin = parseInt(result.formulaList[i - 1], 10) + 1;
	                        }
	                        var taegFirst = currencyFormatter(result.taegList[k]);
	                        k += 1;
	                        var taegSecond = currencyFormatter(result.taegList[k]);
	                        k += 2;
	                        var tempDiv = "";
	                        if (newCrBlk == "DTS") {
	                            tempDiv = '<div class="tbl-row"> <div class="tbl-cell-view newcr-tc">' + durVal + ' mois</div> <div class="tbl-cell-view newcr-tc"> ' + taegFirst + ' %</div> <div class="tbl-cell-view newcr-tc">' + taegSecond + ' %</div></div>';
	                        } else {

	                            tempDiv = '<div class="tbl-row"> <div class="tbl-cell-view newcr-tc"> De ' + durValMin + ' &agrave; ' + durVal + ' <br /><span>mois / max</span></div> <div class="tbl-cell-view newcr-tc"> ' + taegFirst + ' %</div> <div class="tbl-cell-view newcr-tc">' + taegSecond + ' %</div></div>';
	                        }
	                        ncr_table += tempDiv;
	                    }
	                    $("#rev-ncr-rst-tbl").html(ncr_table);
	                    if (newCrBlk == "EMI") {
	                        $("#ncr-revTbl-title").text("Somme restante dûe");
	                        $("#rev-ncr-rst-tbl").addClass("ncr-emi-tbl");
	                    }
	                });
	            }
	        });

	    }




	    function currencyFormatter(value) {
	        if (value) {
	            if ((value !== 0.0) && (value != 0.00)) {


	                if (value.toString().indexOf('.') !== -1) {
	                    value = parseFloat(value).toFixed(2);
	                    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	                    value = value.replace(/\./g, ',');
	                } else {
	                    if (value.toString().indexOf(',') === -1) {
	                        value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	                        value = value + ",00";
	                    }
	                }
	                return (value);
	            } else {
	                var val = 0;
	                return val;
	            }
	        } else {
	            return "0,00";
	        }
	    }




	    function headerM(minValue, maxValue, column) {
	        var minValCol2 = currencyCalculM(minValue, 0.01);
	        var minValCol3 = currencyCalculM(maxValue, 0.01);

	        if (column === 1) {
	            $(".crlheader1").append("<span><strong>Jusqu'&agrave; <br />" + minValue + "&euro;</strong></span>");
	        } else if (column === 2) {
	            $(".crlheader2").append("<span><strong>De " + minValCol2 + "&euro;<br />&agrave;&nbsp;" + maxValue + "&euro;</strong></span>");
	        } else {
	            $(".crlheader3").append("<span><strong>Au-del&agrave; de <br />" + minValCol3 + "&euro;</strong></span>");
	        }

	    }

	    function currencyCalculM(value, increment) {
	        var amount = value.replace(/\,/g, '.');
	        amount = amount.replace(/ /g, '');
	        amount = parseFloat(amount.replace(/,/g, '')) + increment;
	        amount = currencyFormatter(amount);
	        return amount;
	    }




	    function crlColumn3M(value) {

	        $(".crlColumn3").append("<div><span>" + value + "%</span></div>");

	    }

	    function crlColumn2M(value) {

	        $(".crlColumn2").append("<div><span>" + value + "%</span></div>");

	    }

	    function crlColumn1M(value) {

	        $(".crlColumn1").append("<div><span>" + value + "%</span></div>");

	    }

	    function firstColumnM(value) {

	        $(".firstColumn").append("<div><span><strong>" + value + "&nbsp;mois <br />maximum</strong></span>");

	    }

	    function webmarchandWCMWebAnalytics() {
	        var jsonObj = {
	            ModuleName: "wcm",
	            event: "Retour Webdistrib"
	        };
	        window.PageBus.publish("ia.sf.webanalytics", jsonObj);
	    }

	    //subscription_error 4 Temp pwd 
	    window.PageBus.subscribe('target.ia.frpfpciaaape_fullAuthentication.subscription_error', null, function(topic, data, msg) {
	        $.ajax({
	            url: "/rsc/contrib/html/IA/cetelem/S40-S41/subscription_error_msg.html"
	        }).done(function(data) {
	            $('#connectionContainer').append(data);
	            ModalManager.prototype.initEvents();
	        });

	    });
	    //S56 Modifier le capital souscrit - Included capital folder in path as part of CR 186
	    window.PageBus.subscribe("target.ia.frpfclientpe_insuranceDetails.capital_redirect", null, function(topic, msg, data) {
	        window.open('/rsc/contrib/documents/espace-client/assurance/' + msg.Json.URL_codeSociete + '/capital/' + msg.Json.codeCategorieProduit + '.pdf', '_blank');
	    });

	    //S56 MODIFIER LA CLAUSE BENEFICIAIRE - Included clause folder in path as part of CR 186
	    window.PageBus.subscribe("target.ia.frpfclientpe_insuranceDetails.clause_redirect", null, function(topic, msg, data) {
	        window.open('/rsc/contrib/documents/espace-client/assurance/' + msg.Json.URL_codeSociete + '/clause/' + msg.Json.codeCategorieProduit + '.pdf', '_blank');
	    });

	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_prestoController.updateStep", null, function(topic, msg, data) {
	        require(["jquery"], function($) {
	            $('.linkBackToWebsite').addClass('pfhide');
	        });
	    });
	    window.PageBus.subscribe("target.ia.frpfsubscriptionpe_optiPrestoController.updateStep", null, function(topic, msg, data) {
	        require(["jquery"], function($) {
	            $('.linkBackToWebsite').addClass('pfhide');
	        });
	    });

	    /* window.PageBus.subscribe("target.ia.frpfsimulationpe_epartnerSlider.simulation_legal_update", null, function (topic, msg, data) 
	    {

	    if(msg.Json.URL_productCode =='REV'){
	    	var className=".revTableDispaly";
	    	revTableDispaly(className);
	    	nextSimulationButton(msg.ModuleName);

	    }
	    }); */



	    function contactPopupToDisplay(DatenIntervals, idToInsert, imageStr, altStr, jsId) {
	        //Sys Time
	        if (DatenIntervals) {
	            require(["jquery", "app"], function($, app) {
	                var retDate = $("#compDatenTime").text();
	                var todayDate = new Date(retDate);
	                var currentday = dayOfWeekAsString(todayDate.getDay());
	                var nowTime = (todayDate.getHours() * 60) + todayDate.getMinutes();
	                var startLimit = DatenIntervals[currentday].Start;
	                var endLimit = DatenIntervals[currentday].End;
	                // User Entry
	                if (idToInsert && startLimit && endLimit && startLimit.trim() != '00:00' && endLimit.trim() != '00:00') {

	                    var openingHour = calculateMin(DatenIntervals[currentday].Start);
	                    var endingHour = calculateMin(DatenIntervals[currentday].End);
	                    var ida = "#" + idToInsert.toString();
	                    if (openingHour <= nowTime && nowTime <= endingHour) {
	                        $(ida).html("<a href=javascript:callContactform('Template=" + jsId + "'," + openingHour + "," + endingHour + ");> <img border=\"0\" alt=\"Click to Call\"src=\"" + imageStr + "\"></a>");
	                    } else
	                        $(ida).html("<a href=javascript:callContactform('Template=" + jsId + "'," + openingHour + "," + endingHour + ");> <img border=\"0\" alt=\"Click to Call\"src=\"" + altStr + "\">");

	                } else {}
	            });

	        }
	    }

	    function calculateMin(inputStr) {
	        var tempStr = inputStr.split(":");
	        var tempHour = tempStr[0] * 60;
	        var tempMin = tempStr[1];
	        var tempTime = parseInt(tempHour) + parseInt(tempMin);
	        return tempTime;
	    }

	    function dayOfWeekAsString(dayIndex) {
	        return ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"][dayIndex];
	    }


	    function updateRetPopup(updateRetPopupObj) {

	        $('div.hasModal').remove();
	        if (updateRetPopupObj.code == "cheque") {
	            require(['text!/rsc/contrib/html/IA/cetelem/S51/retPopup.html', 'underscore', "jquery"],
	                function(Template, _, $) {
	                    var content = _.template(Template, updateRetPopupObj);
	                    $('#connectionContainer').append(content);
	                    ModalManager.prototype.initEvents();
	                });
	        } else if (updateRetPopupObj.code == "video") {

	            require(['text!/rsc/contrib/html/cetelem/video-crs.html', 'underscore', "jquery"],
	                function(Template, _, $) {
	                    var content = _.template(Template, updateRetPopupObj);
	                    $('#connectionContainer').append(content);
	                    ModalManager.prototype.initEvents();

	                    require(["jquery", "app"], function($, app) {
	                        $("#playerd7277e1a").mediaelementplayer({
	                            startVolume: 1.0,
	                            features: ['playpause', 'volume', 'progress', 'current', 'duration', 'tracks', 'fullscreen'],
	                            defaultVideoWidth: '100%',
	                            defaultVideoHeight: '100%',
	                            videoWidth: '100%',
	                            videoHeight: '100%',
	                            enableAutoSize: true,
	                            loop: false,
	                            // force iPad's native controls
	                            iPadUseNativeControls: true,
	                            // force iPhone's native controls
	                            iPhoneUseNativeControls: true,
	                            // force Android's native controls
	                            AndroidUseNativeControls: true
	                        });
	                    });
	                });
	        } else {
	            require(['text!/rsc/contrib/html/IA/cetelem/S51/retCashPopup.html', 'underscore', "jquery"],
	                function(Template, _, $) {
	                    var content = _.template(Template, updateRetPopupObj);
	                    $('#connectionContainer').append(content);
	                    ModalManager.prototype.initEvents();
	                });
	        }




	    };
	    var activateEbillingFlag = true;
	    var activateStmtsFlag = true;

	    function activateEbilling() {
	        var json_empty = {};
	        if (activateEbillingFlag) {
	            window.PageBus.publish("target.ia.frpfclientpe_accountMgmtEBilling", json_empty);
	            activateEbillingFlag = false;
	        }
	    }

	    function activateStmts() {
	        var json_empty = {};
	        if (activateStmtsFlag) {
	            window.PageBus.publish("target.ia.frpfclientpe_statementOfOperations", json_empty);
	            activateStmtsFlag = false;
	        }

	    }


	    //Message Batch 
	    window.PageBus.subscribe('target.ia.frpfclientpe_unread_MessageCount', null, function(topic, msg, data) {

	        if (msg.unreadMessageCount != '0' && msg.unreadMessageCount != null) {
	            $('.wcm-badge').removeClass('hide');
	            $('.wcm-badge').html(msg.unreadMessageCount);
	            localStorage.setItem("unreadMessageCount", msg.unreadMessageCount);
	        } else localStorage.setItem('unreadMessageCount', '0');
	    });

	    window.PageBus.subscribe("target.ia.frpfsimulationpe_simulationGeneric_reunion.simulation_update", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfsimulationpe_simulationGeneric_reunion.simulation_update');

	        if (typeof msg.ModuleName !== 'undefined' && msg.ModuleName === "WCM" && typeof msg.Json !== 'undefined' && typeof msg.Json.URL_materialCode !== 'undefined') {
	            resetSimulateDisplay();
	        }
	    });

	    window.PageBus.subscribe("target.ia.frpfsimulationpe_simulationGeneric_guyane.simulation_update", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfsimulationpe_simulationGeneric_guyane.simulation_update');

	        if (typeof msg.ModuleName !== 'undefined' && msg.ModuleName === "WCM" && typeof msg.Json !== 'undefined' && typeof msg.Json.URL_materialCode !== 'undefined') {
	            resetSimulateDisplay();
	        }
	    });

	    window.PageBus.subscribe("target.ia.frpfsimulationpe_simulationGeneric_martinique.simulation_update", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfsimulationpe_simulationGeneric_martinique.simulation_update');

	        if (typeof msg.ModuleName !== 'undefined' && msg.ModuleName === "WCM" && typeof msg.Json !== 'undefined' && typeof msg.Json.URL_materialCode !== 'undefined') {
	            resetSimulateDisplay();
	        }
	    });

	    window.PageBus.subscribe("target.ia.frpfsimulationpe_simulationGeneric_guadeloupe.simulation_update", null, function(topic, msg, data) {
	        wcm_debug('subscribe de : target.ia.frpfsimulationpe_simulationGeneric_guadeloupe.simulation_update');

	        if (typeof msg.ModuleName !== 'undefined' && msg.ModuleName === "WCM" && typeof msg.Json !== 'undefined' && typeof msg.Json.URL_materialCode !== 'undefined') {
	            resetSimulateDisplay();
	        }
	    });

	    window.PageBus.subscribe("target.ia.frpfclientpe_insuranceHeader_descriptif.descriptif_redirect", null, function(topic, msg, data) {
	        var catCode = msg.Json.CodeCategorieProduit;
	        if (catCode) {
	            catCode = catCode.toString();
	            switch (catCode) {
	                case "ASPF":
	                    window.location.href = "/fr/assurance/vous-vos-proches/assurance-deces";
	                    break;
	                case "PFP":
	                    window.location.href = "/fr/assurance/vous-vos-proches/assurance-depenses-courantes";
	                    break;
	                case "ASGA":
	                    window.location.href = "/fr/assurance/vehicules/garantie-panne-mecanique";
	                    break;
	                case "ASVL":
	                    window.location.href = "/fr/assurance/vehicules/garantie-valeur-achat";
	                    break;
	                case "ASVI":
	                    window.location.href = "/fr/assurance/vehicules/assistance-vehicules";
	                    break;
	                case "ASE":
	                    window.location.href = "/fr/epargne/protection-epargne";
	                    break;
	                default:
	            }
	        }

	    });


	    window.PageBus.subscribe('target.ia.frpfclientpe_accountMgmtNewCR.newCR_cardpopin', null, function(topic, msg, data) {

	        require(['text!' + accountMgmtNewCR_json.popinContent + '', 'underscore', "jquery"],
	            function(Template, _, $) {
	                var content = _.template(Template, msg.Json);
	                $('#connectionContainer').append(content);
	                ModalManager.prototype.initEvents();
	                if (sfAxes2 === 'MOBILE') $('#sf-master').addClass('hide');
	            });

	    });

	    window.PageBus.subscribe('target.ia.frpfclientpe_accountMgmtRemboursement.reimboursement_PopIn_Alert', null, function(topic, msg, data) {

	        require(['text!' + accountMgmtRemboursement_json.popinContent + '', 'underscore', "jquery"],
	            function(Template, _, $) {
	                var content = _.template(Template, msg.Json);
	                $('#connectionContainer').append(content);
	                ModalManager.prototype.initEvents();
	            });

	    });


	} catch (e) {
	    console.log(e);
	    console.log(e);
	}