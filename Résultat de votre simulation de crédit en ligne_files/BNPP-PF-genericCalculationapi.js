/**
 * Main module to provide simulation functions.
 * @module BNPPPF
 * @main BNPPPF
 * @class BNPPPF
 * @static
 */
var BNPPPF = (function(my) {
    "use strict";
    var dfraData; //Stores the data retrieved from DFRA.SEQ file
	var EMISection = "AUPC";
    //To validate the input parameters.
    function checkArgs(value, name, err) {
        if (value == '') {
            err.push(name);
        }
        return err;
    }
    //Integer check
    function isInt(value) {
        return !(!isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10)));
    }
    //To check error scenario for amt and duration
    function checkError(tarifs, obj, amount, duration, materialCode, err, type) {
        duration = Number(duration);
        var arr = tarifs.map(function(row) {
            return parseFloat(row.pur, 10);
        });
        if (type === 'consolidate') {
            if (obj.creditAmount === '' || (isNaN(obj.creditAmount))) {
                err.push("Erreur Montant");
            }
        } else {
            if ((isInt(amount)) || (arr.indexOf(Number(materialCode)) > -1 && (!amount || amount < obj.minAmount || amount > obj.maxAmount))) {
                err.push("Merci de saisir un montant compris entre " + obj.minAmount + " &euro; et " + obj.maxAmount + " &euro;");
            }
        }
        //added as per comment for the defect 2211
        /* if(obj.newProjectAmount && (isNaN(Number(obj.newProjectAmount)) || (obj.newMin > obj.newProjectAmount || obj.newMax < obj.newProjectAmount ))){
        	err.push("Merci de saisir un montant nouveau projet compris entre "+ obj.newMin + " et " + obj.newMax);
        } */
        if (obj.newProjectAmount !== '' && obj.newProjectAmount !== 0 && typeof(obj.newProjectAmount) !== "undefined") {
            if ((isNaN(Number(obj.newProjectAmount)))) {
                err.push("Erreur Montant");
            }
        }
        if (type === 'emiCheck') {

            if ((isInt(obj.duration)) || arr.indexOf(Number(materialCode)) > -1 && ((duration !== 0 && (duration < obj.durationMin || duration > obj.durationMax)))) {
                /*Fix for Defect 2205.Only consider throwing error for duration if its not having a valid emi entered*/
                if (obj.emi == '' || isNaN(Number(obj.emi)))
                    err.push("Merci de saisir une dur\u00E9e comprise entre " + obj.durationMin + " mois et " + obj.durationMax + " mois");
            } else if (arr.indexOf(Number(materialCode)) > -1 && (!obj.duration && !obj.emi)) {
                err.push("Merci de choisir soit une dur\u00E9e ou une mensualit\u00E9");
            }

        } else {
            if ((obj.duration && isInt(obj.duration)) || ((arr.indexOf(Number(materialCode)) > -1) && (!duration || duration < obj.durationMin || duration > obj.durationMax))) {
                err.push("Merci de saisir une dur\u00E9e comprise entre " + obj.durationMin + " mois et " + obj.durationMax + " mois");
            }
        }

        return err;
    }

    //To validate the parameters in the tarification data.
    function checkTarifArgs(value, name, err) {
        if (!value.pur || !value.mio || !value.mao || !value.prt || !value.tnc || !value.asc || !value.ast) {
            err.push(name);
        }
        return err;
    }
    //To format the result after calculation.
    function format(value) {
        value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        value = value.replace(/\./g, ',');
        if (value.toString().indexOf(',') === -1) {
            value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            value = value + ",00";
        }
        return value;
    }
    //To choose the eligible tarification file based on the input parameters.
    function selectRate(rates, duration, materialCode, vendorCode, amount) {
        var theRate = rates.filter(function(currentValue, index, arr) {
            var minAmount = currentValue.mio;
            var maxAmount = currentValue.mao;
            var amountFlag = true;
            var durationFlag = true;
            if (amount != 0) { //only enabled if amount is present
                amountFlag = (amount >= currentValue.mio && amount <= currentValue.mao);
            }
            if (duration != 0) { //only enabled if duration is present
                durationFlag = (Number(duration) >= Number(currentValue.mit) && Number(duration) <= Number(currentValue.mat));
            }
            return (Number(currentValue.pur) === Number(materialCode) || currentValue.pur === "") && amountFlag && durationFlag && index == arr.indexOf(currentValue);
        });
        return theRate;
    }
    //To choose the final eligible tarification list for promocode consideration
    function selectRatePromo(rates, duration, materialCode, vendorCode, amount, promotion) {
        var theRate = rates.filter(function(currentValue) {
            var minAmount = currentValue.mio;
            var maxAmount = currentValue.mao;
            var amountFlag = true;
            var durationFlag = true;
            if (amount != 0) { //only enabled if amount is present
                amountFlag = (amount >= currentValue.mio && amount <= currentValue.mao);
            }
            if (duration != 0) { //only enabled if duration is present
                durationFlag = (Number(duration) >= Number(currentValue.mit) && Number(duration) <= Number(currentValue.mat));
            }
            return (Number(currentValue.pur) === Number(materialCode) || currentValue.pur === "") && amountFlag && durationFlag && convertToUpperCase(currentValue.prt) === convertToUpperCase(promotion);
        });
        return theRate;
    }
    //function to convert to uppercase it it exsists
    function convertToUpperCase(value) {
        if (value) {
            value = value + '';
            return value.toUpperCase();
        }
    };
	
	function selectFinalTarif(tarif) {
        
		var matchedTariffs = tarif;
		var finalList = matchedTariffs[0];
        var resultJSON = []; //is an array since method get result expects array in validate.js
        /*  Old Logic
        var arr = matchedTariffs.map(function(item) {
            return item.tnc;
        });
		
		if (matchedTariffs && matchedTariffs.length > 1) {
            var lowestTNC = Math.min.apply(Math, arr);
            var list = matchedTariffs.filter(function(row) {
                return (parseFloat(row.tnc) === parseFloat(lowestTNC));
            });
            finalList = list[0];
        }
		*/

        var arrPrt = matchedTariffs.map(function(item) {            
			return (item.prt !== 'N' ? item.prt : '');
        });
		
        arrPrt = arrPrt.filter(function(e) {
            
			return e === 0 || e
        });
		
        if (matchedTariffs && matchedTariffs.length > 1 && arrPrt.length > 0) {
            matchedTariffs.filter(function(row) {
                arrPrt.forEach(function(prtValue) {
                    if ((row.prt) === prtValue) {
                        
						resultJSON.push(row);
                    }
                });

            });
            finalList = resultJSON[0];
        }

        return finalList;
    }
	
	// Mantis 5039 sélection with promotion
	function selectFinalTarifPromoPriority(tarif) {
        
		var matchedTariffs = tarif;
		
		var arrPrt = matchedTariffs.filter
		(
			function(item) 
			{            
				return (item.prt === 'P' ? item.prt : '');
			}
		);
		if(arrPrt.length > 0){ tarif = arrPrt; } 
		
		
		return selectFinalTarif(tarif);
	}
	// End of Mantis 5039 sélection with promotion
	
    //To choose the final highest eligible tarification list 
    function selectFinalTarifHigh(tarif) {
        
		var matchedTariffs = tarif;
		
		var tarifRef = matchedTariffs[0];
		for(var tarifIndex in matchedTariffs)
		{
			if(matchedTariffs[tarifIndex].tnc > tarifRef.tnc)
			{
				tarifRef = matchedTariffs[tarifIndex]
			}
		}		
		
        var finalList = tarifRef;
        var resultJSON = []; //is an array since method get result expects array in validate.js
        /*  Old Logic
        var arr = matchedTariffs.map(function(item) {
            return item.tnc;
        });
		
		if (matchedTariffs && matchedTariffs.length > 1) {
            var lowestTNC = Math.min.apply(Math, arr);
            var list = matchedTariffs.filter(function(row) {
                return (parseFloat(row.tnc) === parseFloat(lowestTNC));
            });
            finalList = list[0];
        }
		*/

        var arrPrt = matchedTariffs.map(function(item) {            
			return (item.prt !== 'N' ? item.prt : '');
        });
		
        arrPrt = arrPrt.filter(function(e) {
            
			return e === 0 || e
        });
		
        if (matchedTariffs && matchedTariffs.length > 1 && arrPrt.length > 0) {
            matchedTariffs.filter(function(row) {
                arrPrt.forEach(function(prtValue) {
                    if ((row.prt) === prtValue) {
                        
						resultJSON.push(row);
                    }
                });

            });
            finalList = resultJSON[0];
        }

        return finalList;
    }
    //To choose the final eligible tarification list for promocode consideration
    function calculateData(obj, tarif, type) {
        var simResult = {};
        var tnc, tncIncrement, tncPercentage, emi, emiNew, emiWithInsurance, taeg, taegOriginal, totalDueAmount, interestAmount, insuranceType, insuranceAmount, totalInsuranceAmount, taea, emiDifference, iteratorLimit, monthlyInsuranceAmount, totInsCalcAmt1, totInsCalcAmt2, totalDueAmountWithInsurance, totalAdditionalCostWithInsurance;
        taea = '';
        iteratorLimit = 0;
        tncPercentage = parseFloat(obj.tnc);
        tnc = (tncPercentage / 100).toFixed(4);

        taeg = ((Math.pow((1 + tnc / 12), 12) - 1) * 100).toFixed(2);
        taegOriginal = taeg;
        interestAmount = (((parseFloat(obj.amount) * (tnc / 12)) / (1 - Math.pow((1 + tnc / 12), (-parseInt(obj.duration))))).toFixed(2) * (parseInt(obj.duration))) - parseFloat(obj.amount);
        interestAmount = interestAmount.toFixed(2);
        if (obj.emi) {
            emi = obj.emi;
            if (!isNaN(interestAmount)) {
                totalDueAmount = ((parseFloat(obj.amount) + parseFloat(interestAmount))).toFixed(2);
            }
        } else {
            emi = ((parseFloat(obj.amount) * (tnc / 12)) / (1 - Math.pow((1 + tnc / 12), (-parseInt(obj.duration))))).toFixed(2);
            totalDueAmount = (emi * parseInt(obj.duration)).toFixed(2);
        }
        insuranceType = tarif.ast + tarif.asv;
        insuranceType = parseFloat(insuranceType.substring(1)) * 10000;
        insuranceType = insuranceType / 10000;
        if ((tarif.ast + tarif.asv).indexOf("T") === 0) {
            //  ORIGINAL (VALIDATED) totalInsuranceAmount = (((parseFloat(insuranceType / 100) * emi).toFixed(2)) * obj.duration).toFixed(2);
            totInsCalcAmt1 = (parseFloat(insuranceType / 100) * emi);
            totInsCalcAmt1 = Math.floor(parseFloat(totInsCalcAmt1) * 100) / 100;

            totInsCalcAmt2 = Math.floor(obj.duration * 100) / 100;
            totalInsuranceAmount = (totInsCalcAmt1 * totInsCalcAmt2);
            totalInsuranceAmount = Math.floor(totalInsuranceAmount * 100) / 100;
        }
        if ((tarif.ast + tarif.asv).indexOf("F") === 0) {
            totalInsuranceAmount = parseFloat(insuranceType).toFixed(2);
        }
        if ((tarif.ast + tarif.asv).indexOf("T") === 0) {
            // ORIGINAL (VALIDATED) monthlyInsuranceAmount = (parseFloat(insuranceType / 100) * emi).toFixed(2); 
            monthlyInsuranceAmount = (parseFloat(insuranceType / 100) * emi);
            monthlyInsuranceAmount = Math.floor(parseFloat(monthlyInsuranceAmount) * 100) / 100;
        }
        if ((tarif.ast + tarif.asv).indexOf("F") === 0) {
            //  ORIGINAL monthlyInsuranceAmount = (parseFloat(insuranceType / parseInt(obj.duration))).toFixed(2);
            monthlyInsuranceAmount = (parseFloat(insuranceType / parseInt(obj.duration)));
            monthlyInsuranceAmount = Math.floor(parseFloat(monthlyInsuranceAmount) * 100) / 100;
        }

        insuranceAmount = (parseFloat(totalInsuranceAmount) / parseInt(obj.duration)).toFixed(2);
        emiWithInsurance = (parseFloat(emi) + parseFloat(insuranceAmount)).toFixed(2);
        totalDueAmountWithInsurance = (parseFloat(totalDueAmount) + parseFloat(totalInsuranceAmount)).toFixed(2);
        totalAdditionalCostWithInsurance = (parseFloat(interestAmount) + parseFloat(totalInsuranceAmount)).toFixed(2);
		
		//Calculate the insuranceRate
		
		obj.insuranceRate = (100 * totalInsuranceAmount / obj.amount).toFixed(2);
		
		
        do {
            iteratorLimit++;
            tncPercentage++;
            tnc = (tncPercentage / 100).toFixed(13);
            emiNew = ((parseFloat(obj.amount) * (tnc / 12)) / (1 - Math.pow((1 + tnc / 12), (-parseInt(obj.duration))))).toFixed(2);
            if (iteratorLimit >= 10000)
                break;
        } while (emiNew < emiWithInsurance);
        tncIncrement = parseFloat(1 / 1.01).toFixed(9);
        do {
            iteratorLimit++;
            if (parseFloat(emiNew) > parseFloat(emiWithInsurance)) {
                tncPercentage = parseFloat(tncPercentage) - parseFloat(tncIncrement);
                tnc = (tncPercentage / 100).toFixed(13);
            } else {
                tncPercentage = parseFloat(tncPercentage) + parseFloat(tncIncrement);
                tnc = (tncPercentage / 100).toFixed(13);
            }

            emiNew = ((parseFloat(obj.amount) * (tnc / 12)) / (1 - Math.pow((1 + tnc / 12), (-parseInt(obj.duration))))).toFixed(2);
            tncIncrement = (parseFloat(tncIncrement) / 1.01).toFixed(9);
            emiDifference = Math.abs((parseFloat(emiNew) - parseFloat(emiWithInsurance)).toFixed(3));
            if (iteratorLimit >= 10000)
                break;
        } while (parseFloat(emiDifference).toFixed(3) >= parseFloat(0.005));
        taeg = ((Math.pow((1 + tnc / 12), 12) - 1) * 100).toFixed(2);
        taea = (taeg - taegOriginal).toFixed(2);
        obj.emi = emi;

        //For F01-012B
        if (type === 'consolidate' || type === 'consolidateNewProject') {
            if (obj.redemption) {
                obj.redemption = parseFloat(changeDelimiter(obj.redemption));
                obj.redemption = Number(obj.redemption).toFixed(2);
                obj.reduction = (obj.redemption - obj.emi).toFixed(2); //SPDAT_0139
                obj.reductionPercent = ((100 * obj.reduction) / obj.redemption).toFixed(2); //SPDAT_0140
                obj.totalMonthlypayment = (Number(obj.redemption) + Number(obj.emi)).toFixed(2); //SPDAT_0154
                obj.gain = (((obj.totalMonthlypayment - Number(obj.redemption)) / obj.totalMonthlypayment) * 100).toFixed(2);
                if (obj.earnings) {
                    obj.earnings = Number(obj.earnings);
                    obj.indebtednessBefore = (obj.redemption / obj.earnings) * 100;
                    obj.indebtednessBefore = Math.ceil(obj.indebtednessBefore);
                    if (type === 'consolidate') {
                        obj.indebtednessAfter = (obj.totalMonthlypayment / obj.earnings) * 100; //SPDAT_0142
                    } else {
                        obj.indebtednessAfter = (obj.emi / obj.earnings) * 100; //SPDAT_0142
                    }
                    obj.indebtednessAfter = Math.ceil(obj.indebtednessAfter);
                }
            }
        }
		
		
		
        obj.monthlyInsuranceAmount = format(monthlyInsuranceAmount);
        obj.emiWithInsurance = format(emiWithInsurance);
        obj.totalInsuranceAmount = format(totalInsuranceAmount);
        obj.totalDueAmountWithInsurance = format(totalDueAmountWithInsurance);
        obj.interestAmount = format(interestAmount);
        obj.totalAdditionalCostWithInsurance = format(totalAdditionalCostWithInsurance);
        obj.totalDueAmount = format(totalDueAmount);
        obj.taegOriginal = format(taegOriginal);
        obj.taea = format(taea);
        obj.emi = format(emi);
        obj.amount = format(obj.amount);
        obj.numberOfTerms = obj.duration;
        obj.tnc = format(obj.tnc);
        obj.redemption = obj.redemption ? format(obj.redemption) : '';
        obj.reduction = obj.reduction ? format(obj.reduction) : '';
        obj.reductionPercent = obj.reductionPercent ? format(obj.reductionPercent) : '';
        obj.totalMonthlypayment = obj.totalMonthlypayment ? format(obj.totalMonthlypayment) : '';
        obj.indebtednessBefore = obj.indebtednessBefore ? format(obj.indebtednessBefore) : '';
        obj.indebtednessAfter = obj.indebtednessAfter ? format(obj.indebtednessAfter) : '';
        obj.gain = obj.gain ? format(obj.gain) : '';
        obj.newProjectAmount = obj.newProjectAmount ? format(obj.newProjectAmount) : '';
        obj.creditAmount = obj.creditAmount ? format(obj.creditAmount) : '';

        /* Start of CR 148 */
        obj.minAmount = format(obj.minAmount);
        obj.maxAmount = format(obj.maxAmount);
        obj.minDuration = obj.durationMin;
        obj.maxDuration = obj.durationMax;
        obj.minTaeg = format(obj.minTaeg);
        obj.maxTaeg = format(obj.maxTaeg);		
        /*  End of CR 148 */
		
		/* Mantis 5039 : addition of prt value */
		obj.prt = tarif.prt;
		obj.fcf = obj.fcf;
		obj.tarifDiff =obj.tarifDiff;
		/*enf of Mantis 5039 : addition of prt value */
		
		
		
		
        return obj;
    }
    //to calculate emiList with amount and min, max duration
    function getEmiList(tarif, obj) {
        var eligibleCount = 0;
        var eligibleList = [];
        for (var limit = obj.durationMin; limit < obj.durationMax + 1; limit++) {
            eligibleList[eligibleCount] = {
                duration: limit,
                emi: getEmi(obj.amount, limit, obj.tnc).toFixed(2)
            };
            eligibleCount++;
        }
        return eligibleList;
    }
    //to get duration if user gives emi
    function getDuration(tarif, obj) {
        var eligibleList = getEmiList(tarif, obj);

        return getClosest(eligibleList, obj.emi);
    }

    function getEmi(goodAmount, duration, tncPercentage) {
        var tnc = (tncPercentage / 100).toFixed(4);
        return ((((goodAmount) * (tnc / 12)) / (1 - Math.pow((1 + tnc / 12), (-parseInt(duration))))))
    }
    //to get closest value from the array
    function getClosest(arr, value) {
        var closest, mindiff = null;

        for (var i = 0; i < arr.length; ++i) {
            var diff = Math.abs(arr[i].emi - value);

            if (mindiff === null || diff <= mindiff) {
                closest = i;
                mindiff = diff;
            }
        }
        return arr[closest].duration;
    }
    //to get min or max form the eligible list
    function getPeerValues(valueType, attributeName, data) {
        var arr = data.map(function(row) {
            return parseFloat(row[attributeName], 10);
        });
        valueType = valueType || "max";
        if (valueType == "max") {
            return Math.max.apply(this, arr); //returns max value of the given attribute
        } else {
            return Math.min.apply(this, arr); //returns the minimun value of the given attribute
        }
    };
    //call back method - PPWithoutPromotion
    function calculVAT(obj, callback) {
        var err, emi, amount, duration, materialCode, vendorCode, tarif, tarifs, legal, TNC;
        err = [];
        amount = duration = materialCode = vendorCode = '';
        tarifs = [];
        tarif = [];
        amount = obj.amount || '';
        duration = Number(obj.duration) || '';
        materialCode = obj.material || '';
        vendorCode = obj.merchant || '';
        amount = parseFloat(changeDelimiter(amount));
        if (materialCode === '' || vendorCode === '') {
            err.push("Merci de choisir un projet existant");
        }
        if (obj.product !== productCode_CLA) {
            err.push("Erreur type produit");
        }

        if (typeof(BNPPPF.vendorRates) === 'undefined' || !BNPPPF.vendorRates[vendorCode]) {
            err.push("Fichier introuvable");
        }
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        amount = parseFloat(changeDelimiter(amount));
        tarif.length = 0;
        tarifs = BNPPPF.vendorRates[vendorCode];


        if (tarifs !== undefined) {

            tarif = selectRate(tarifs, duration, materialCode, vendorCode, amount);

            if (tarif.length === 0) {
                tarif = selectRate(tarifs, duration, materialCode, vendorCode, 0);
				//  If Still tarif file lentgth is zero due to duration mismatch then process w/o duration as below.
				if (tarif.length === 0) {
					tarif = selectRate(tarifs, 0, materialCode, vendorCode, 0);
				}
				
            }
            var matchedTariffs = tarif;
			
            obj.minAmount = getPeerValues("min", "mio", matchedTariffs);
            obj.maxAmount = getPeerValues("max", "mao", matchedTariffs);
            obj.durationMin = getPeerValues("min", "mit", matchedTariffs);
            obj.durationMax = getPeerValues("max", "mat", matchedTariffs);

            var lowestTNC = getPeerValues("min", "tnc", matchedTariffs);
            var lowestTNCPercentage = (lowestTNC / 100).toFixed(4);

            var highestTNC = getPeerValues("max", "tnc", matchedTariffs);
            var highestTNCPercentage = (highestTNC / 100).toFixed(4);

            obj.minTnc = format(lowestTNC);
            obj.maxTnc = format(highestTNC);
            obj.minTaeg = format(((Math.pow((1 + lowestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.maxTaeg = format(((Math.pow((1 + highestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
			
            var arr = tarifs.map(function(row) {
                return parseFloat(row.pur, 10);
            });

            checkError(tarifs, obj, amount, duration, materialCode, err, 'emiCheck');
            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }


            tarif = selectFinalTarif(tarif);
        } else {
            tarif = [];
        }

        if (!tarif || tarif.length === 0)
            err.push("Pas de r\u00E9sultat pour votre recherche");
        else {
            var tarifValue = (tarif.length > 1) ? tarif[0] : tarif;
            checkTarifArgs(tarifValue, "erreur technique", err);
        }
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        obj.tnc = tarif.tnc;
        if (obj.emi && !obj.duration) {
            emi = parseFloat(changeDelimiter(obj.emi));
            var emiList = getEmiList(tarif, obj);
            var maxEmi = emiList[0].emi;
            var minEmi = emiList[(emiList.length) - 1].emi;
            if ((!emi && isNaN(emi)) || arr.indexOf(Number(materialCode)) > -1 && ((obj.emi !== '' && (emi < minEmi || emi > maxEmi)))) {
                err.push("Merci de saisir une mensualit\u00E9 comprise entre " + format(minEmi) + " &euro; et " + format(maxEmi) + " &euro;");
            }

        }

        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }

        //if both duration and emi is given duration is given as highest priority
        if (obj.duration && obj.emi) {
            obj.emi = '';
        }
        //if emi is given then duration is calculated
        if (!obj.duration && obj.emi) {
            obj.duration = getDuration(tarif, obj);
        }
        if(tarif.fcf)
        	obj.fcf=tarif.fcf
        var obj = calculateData(obj, tarif);

        var output = calculateOutputJson(obj, 'PPWithoutPromotion');
		
        if (callback) {
            callback(output);
        }

        return output;
    }
	
	/**
	  *	
	  * Call back method - PP Mentions Mantis 5039
	  * @access public
	  * @name calculresultPPBlock
	  * @param objInput required
      * obj = 
	  * {
	  * 	'amount'	:	'5000'			,
	  *		'duration'	:	'24'			,
	  *		'material'	:	'501'			,
	  *		'merchant'	:	'1001989870'	,
	  *		'product'	:	'CLA'
	  * };
	  * @param CallBack function optional
	  *
	  **/
    
	function calculresultPPBlock(obj, callback) 
	{
		
		var err, emi, amount, duration, materialCode, vendorCode, tarif, tarifs, legal, TNC;
        err = [];
        amount = duration = materialCode = vendorCode = '';
        tarifs = [];
        tarif = [];
        amount = obj.amount || '';
        duration = Number(obj.duration) || '';
        materialCode = obj.material || '';
        vendorCode = obj.merchant || '';
        amount = parseFloat(changeDelimiter(amount));
        if (materialCode === '' || vendorCode === '') {
            err.push("Merci de choisir un projet existant");
        }
        if (obj.product !== productCode_CLA) {
            err.push("Erreur type produit");
        }

        if (typeof(BNPPPF.vendorRates) === 'undefined' || !BNPPPF.vendorRates[vendorCode]) {
            err.push("Fichier introuvable");
        }
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        amount = parseFloat(changeDelimiter(amount));
        tarif.length = 0;
        tarifs = BNPPPF.vendorRates[vendorCode];


        if (tarifs !== undefined) {

            tarif = selectRate(tarifs, duration, materialCode, vendorCode, amount);

            if (tarif.length === 0) {
                tarif = selectRate(tarifs, duration, materialCode, vendorCode, 0);
				//  If Still tarif file lentgth is zero due to duration mismatch then process w/o duration as below.
				if (tarif.length === 0) {
					tarif = selectRate(tarifs, 0, materialCode, vendorCode, 0);
				}
				
            }
            var matchedTariffs = tarif;
			
            obj.minAmount = getPeerValues("min", "mio", matchedTariffs);
            obj.maxAmount = getPeerValues("max", "mao", matchedTariffs);
            obj.durationMin = getPeerValues("min", "mit", matchedTariffs);
            obj.durationMax = getPeerValues("max", "mat", matchedTariffs);

            var lowestTNC = getPeerValues("min", "tnc", matchedTariffs);
            var lowestTNCPercentage = (lowestTNC / 100).toFixed(4);

            var highestTNC = getPeerValues("max", "tnc", matchedTariffs);
            var highestTNCPercentage = (highestTNC / 100).toFixed(4);

            obj.minTnc = format(lowestTNC);
            obj.maxTnc = format(highestTNC);
            obj.minTaeg = format(((Math.pow((1 + lowestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.maxTaeg = format(((Math.pow((1 + highestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
			
            var arr = tarifs.map(function(row) {
                return parseFloat(row.pur, 10);
            });
			
            checkError(tarifs, obj, amount, duration, materialCode, err, 'emiCheck');
            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }

			
            tarif = selectFinalTarifPromoPriority(tarif);			
            //tarif = selectFinalTarif(tarif);
			
        } else {
            tarif = [];
        }

        if (!tarif || tarif.length === 0)
            err.push("Pas de r\u00E9sultat pour votre recherche");
        else {
            var tarifValue = (tarif.length > 1) ? tarif[0] : tarif;
            checkTarifArgs(tarifValue, "erreur technique", err);
        }
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        if(matchedTariffs && matchedTariffs.length > 1){
        	var tarifReference = matchedTariffs[0];
        	for(var tarifIndex in matchedTariffs) {
        		if(matchedTariffs[tarifIndex].tnc !== tarifReference.tnc) {
        			obj.tarifDiff = true;
        		}
        	}
			for(var tarifIndex in matchedTariffs){
        		if(matchedTariffs[tarifIndex].prt === "P" && obj.tarifDiff) {
        			obj.tarifDiff = false;
					//return;
        		}
        	} 				
        } else {
        	obj.tarifDiff = false;
        }
        obj.tarifDiff =(obj.tarifDiff)?obj.tarifDiff:false;
        
        obj.tnc = tarif.tnc;
        if (obj.emi && !obj.duration) {
            emi = parseFloat(changeDelimiter(obj.emi));
            var emiList = getEmiList(tarif, obj);
            var maxEmi = emiList[0].emi;
            var minEmi = emiList[(emiList.length) - 1].emi;
            if ((!emi && isNaN(emi)) || arr.indexOf(Number(materialCode)) > -1 && ((obj.emi !== '' && (emi < minEmi || emi > maxEmi)))) {
                err.push("Merci de saisir une mensualit\u00E9 comprise entre " + format(minEmi) + " &euro; et " + format(maxEmi) + " &euro;");
            }

        }

        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }

        //if both duration and emi is given duration is given as highest priority
        if (obj.duration && obj.emi) {
            obj.emi = '';
        }
        //if emi is given then duration is calculated
        if (!obj.duration && obj.emi) {
            obj.duration = getDuration(tarif, obj);
        }
        if(tarif.fcf)
        	obj.fcf=tarif.fcf
        var obj = calculateData(obj, tarif);
		
        var output = calculateOutputJson(obj, 'PPWithoutPromotion');
		
        if (callback) {
            callback(output);
        }

        return output;
	}
	
	
	
	/**
	  *	
	  * Call back method - PP Mentions
	  * @access public
	  * @name calculVATHigh
	  * @param objInput required
      * obj = 
	  * {
	  * 	'amount'	:	'5000'			,
	  *		'duration'	:	'24'			,
	  *		'material'	:	'501'			,
	  *		'merchant'	:	'1001989870'	,
	  *		'product'	:	'CLA'
	  * };
	  * @param CallBack function optional
	  *
	  **/
    
	function calculVATHigh(obj, callback) {
        var err, emi, amount, duration, materialCode, vendorCode, tarif, tarifs, legal, TNC;
        err = [];
        amount = duration = materialCode = vendorCode = '';
        tarifs = [];
        tarif = [];
        amount = obj.amount || '';
        duration = Number(obj.duration) || '';
        materialCode = obj.material || '';
        vendorCode = obj.merchant || '';
        amount = parseFloat(changeDelimiter(amount));
        if (materialCode === '' || vendorCode === '') {
            err.push("Merci de choisir un projet existant");
        }
        if (obj.product !== productCode_CLA) {
            err.push("Erreur type produit");
        }

        if (typeof(BNPPPF.vendorRates) === 'undefined' || !BNPPPF.vendorRates[vendorCode]) {
            err.push("Fichier introuvable");
        }
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        amount = parseFloat(changeDelimiter(amount));
        tarif.length = 0;
        tarifs = BNPPPF.vendorRates[vendorCode];
		

        if (tarifs !== undefined) {

            tarif = selectRate(tarifs, duration, materialCode, vendorCode, amount);
			
            if (tarif.length === 0) {
                tarif = selectRate(tarifs, duration, materialCode, vendorCode, 0);
				//  If Still tarif file lentgth is zero due to duration mismatch then process w/o duration as below.
				if (tarif.length === 0) {
					tarif = selectRate(tarifs, 0, materialCode, vendorCode, 0);
				}
				
            }
            var matchedTariffs = tarif;
			
            obj.minAmount = getPeerValues("min", "mio", matchedTariffs);
            obj.maxAmount = getPeerValues("max", "mao", matchedTariffs);
            obj.durationMin = getPeerValues("min", "mit", matchedTariffs);
            obj.durationMax = getPeerValues("max", "mat", matchedTariffs);

            var lowestTNC = getPeerValues("min", "tnc", matchedTariffs);
            var lowestTNCPercentage = (lowestTNC / 100).toFixed(4);

            var highestTNC = getPeerValues("max", "tnc", matchedTariffs);
            var highestTNCPercentage = (highestTNC / 100).toFixed(4);

            obj.minTnc = format(lowestTNC);
            obj.maxTnc = format(highestTNC);
            obj.minTaeg = format(((Math.pow((1 + lowestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.maxTaeg = format(((Math.pow((1 + highestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
			
            var arr = tarifs.map(function(row) {
                return parseFloat(row.pur, 10);
            });

            checkError(tarifs, obj, amount, duration, materialCode, err, 'emiCheck');
            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }

			
            tarif = selectFinalTarifHigh(tarif);
        } else {
            tarif = [];
        }

        if (!tarif || tarif.length === 0)
            err.push("Pas de r\u00E9sultat pour votre recherche");
        else {
            var tarifValue = (tarif.length > 1) ? tarif[0] : tarif;
            checkTarifArgs(tarifValue, "erreur technique", err);
        }
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        if(matchedTariffs && matchedTariffs.length > 1){
        	var tarifReference = matchedTariffs[0];
        	for(var tarifIndex in matchedTariffs) {
        		if(matchedTariffs[tarifIndex].tnc !== tarifReference.tnc) {
        			obj.tarifDiff = true;
        		}
        	}
			for(var tarifIndex in matchedTariffs){
        		if(matchedTariffs[tarifIndex].prt === "P" && obj.tarifDiff) {
        			obj.tarifDiff = false;
					//return;
        		}
        	} 				
        } else {
        	obj.tarifDiff = false;
        }
        obj.tarifDiff =(obj.tarifDiff)?obj.tarifDiff:false;
        obj.tnc = tarif.tnc;
        if (obj.emi && !obj.duration) {
            emi = parseFloat(changeDelimiter(obj.emi));
            var emiList = getEmiList(tarif, obj);
            var maxEmi = emiList[0].emi;
            var minEmi = emiList[(emiList.length) - 1].emi;
            if ((!emi && isNaN(emi)) || arr.indexOf(Number(materialCode)) > -1 && ((obj.emi !== '' && (emi < minEmi || emi > maxEmi)))) {
                err.push("Merci de saisir une mensualit\u00E9 comprise entre " + format(minEmi) + " &euro; et " + format(maxEmi) + " &euro;");
            }

        }

        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }

        //if both duration and emi is given duration is given as highest priority
        if (obj.duration && obj.emi) {
            obj.emi = '';
        }
        //if emi is given then duration is calculated
        if (!obj.duration && obj.emi) {
            obj.duration = getDuration(tarif, obj);
        }
		
        if(tarif.fcf)
        	obj.fcf=tarif.fcf
		
        var obj = calculateData(obj, tarif);
		
		
        var output = calculateOutputJson(obj, 'PPWithoutPromotion');
		
if (callback) {
            callback(output);
        }

        return output;
    }
	
	/**
	* call back method -  recuperation of bounds PP
	* DO NOT REMOVE THE FUNCTION BECAUSE USED BY PARTNER CUSTOMERS
	*/
    function calculRecuperationOfBounds(obj, callback) {
        var err, emi, amount, duration, materialCode, vendorCode, tarif, tarifs, legal, TNC,promotion,tarifValue;
        err = [];
        amount = duration = materialCode = vendorCode = '';
        tarifs = [];
        tarif = [];
        amount = obj.amount ||'';
        duration = obj.duration||'';
        materialCode = obj.material||'';
        promotion = obj.promotion||'';
        vendorCode = obj.merchant||'';
        if(materialCode==='' || vendorCode===''){
        	err.push("Merci de choisir un projet existant");
        }
        if(obj.product!==productCode_CLA){
        	err.push("Erreur type produit");
        }
        if (typeof(BNPPPF.vendorRates) === 'undefined' || !BNPPPF.vendorRates[vendorCode]) {
            err.push("Fichier introuvable");
        }
		

        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        amount = parseFloat(changeDelimiter(amount));
        tarif.length = 0;
        tarifs = BNPPPF.vendorRates[vendorCode];
        if (tarifs !== undefined) {
        	if(promotion){
        		tarif = selectRatePromo(tarifs, duration, materialCode, vendorCode, amount,promotion);
        	}else{
        		tarif = selectRate(tarifs, duration, materialCode, vendorCode, amount);
        	}
            var matchedTariffs = tarif;
            //tarif = selectFinalTarif(tarif);
        } else {
            tarif = [];
        }
		
        if (tarif.length !== 0) {
		for (var i=0;i<tarif.length;i++) {
  

		 if(!tarif[i].pur || !tarif[i].mio || !tarif[i].mao  || !tarif[i].tnc){
			err.push("erreur technique");
		}else{
		if(promotion && !tarif[i].prt){
			err.push("erreur technique");
		}
		
			}
			if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            } 
		}	
		
            var matchedTariffs = tarif;
            var lowestTNC = getPeerValues("min", "tnc", matchedTariffs);
            var lowestTNCPercentage = (lowestTNC / 100).toFixed(4);
            var highestTNC = getPeerValues("max", "tnc", matchedTariffs);
            var highestTNCPercentage = (highestTNC / 100).toFixed(4);
            obj.minAmount = format(getPeerValues("min", "mio", matchedTariffs));
            obj.maxAmount = format(getPeerValues("max", "mao", matchedTariffs));
            obj.durationMin = getPeerValues("min", "mit", matchedTariffs);
            obj.durationMax = getPeerValues("max", "mat", matchedTariffs);
            obj.minTaeg = format(((Math.pow((1 + lowestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.maxTaeg = format(((Math.pow((1 + highestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.minTnc = format(lowestTNC);
            obj.maxTnc = format(highestTNC);
        } else if (!tarif || tarif.length === 0) {
            if (tarif.length === 0) {
                if(promotion){
            		tarif = selectRatePromo(tarifs, duration, materialCode, vendorCode, 0,promotion);
            	}else{
            		tarif = selectRate(tarifs, duration, materialCode, vendorCode, 0);
            	}
            }
            if (tarif.length === 0) {
            	err.push("Merci de choisir un projet existant");
            } else{
            	var tarifValue = (tarif.length>=1) ? tarif[0] : tarif;
    			//checkTarifArgs(tarifValue, "erreur technique", err);
				if(!tarifValue.pur || !tarifValue.mio || !tarifValue.mao || !tarifValue.prt || !tarifValue.tnc){
			err.push("erreur technique");
		}
		if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }
    		} 
            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }
            var matchedTariffs = tarif;
            obj.minAmount = getPeerValues("min", "mio", matchedTariffs);
            obj.maxAmount = getPeerValues("max", "mao", matchedTariffs);
            var arr = tarifs.map(function(row) {
                return parseFloat(row.pur, 10);
            });
            if((isInt(amount))|| (arr.indexOf(Number(materialCode)) > -1  && (!amount || amount < obj.minAmount || amount > obj.maxAmount))){
                err.push("Merci de saisir un montant compris entre " + obj.minAmount + " &euro; et " + obj.maxAmount + " &euro;");
            } else {
                err.push("Merci de choisir un projet existant");
            }

            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }
        }
        var output = calculateOutputJson(obj,'PPRecuperation');
        if (callback) {
            callback(output);
        }
        
        return output;
    }
	
    //CRL calculation
    /*****Constants*******/
     var filePath = "/rsc/sys/ia/dfra";
    var file = filePath,
        errorMessage = "Fichier introuvable..",
        error_tech = "technical error",
        productCode_REV = "REV",
        productCode_CLA = "CLA",
        productCode_RAC = "RAC",
        CONSTANT_A = "A",
        CONSTANT_B = "B",
        CONSTANT_C = "C",
        AMOUNT = "amount",
        DURATION = "duration",
        EMI = "monthlyInstalment";
    /*****Constants*******/
    var globalCallBack;
    var error = '';
    var inputData;
    var resultJSON = {};
    var CRLJson = {};
    var position = 0;
    var durationDefault = '';
    var freeFlag;
    var eligibleList = [];
    var simulationResult = {};
    var result = [];
    var i = 0;
    var j = 0;
    var EMI = '';
    var tncList = [];
    var formulaList = [];
    var sourceLists;
    var goodAmount,
        durationOriginal,
        interest,
        lastEmi,
        taegOriginal,
        tncOriginal,
        monthlyInsuranceAmount,
        emiWithInsurance,
        totalDueAmount,
        taea,
        lastEmi,
        taegOriginal,
        tncOriginal,
        data;
    var materialId,
        merchantId,
        productCode,
        amount,
        duration,
        emi,
        formula;

    /**Fetch File**/
    var initiateFileFetch = function(type) {
        //so that file fetch only happens once
        if (!dfraData) {
			if(file.indexOf("DFRA")<0){
				file = file + "/DFRA_" + vendorDFRANo + ".SEQ";
			}
            var fileHandler = new XMLHttpRequest();
            fileHandler.open("GET", file, false);
            fileHandler.onreadystatechange = function() {
                if (fileHandler.readyState === 4 && (fileHandler.status === 200 || fileHandler.status === 0)) {
                    dfraData = fileHandler.responseText;
                    if (inputData.product !== productCode_REV) {
                        throwError("Erreur type produit");
                        return;
                    }
                    performCalculation();
                } else if (fileHandler.readyState !== 1 && fileHandler.readyState !== 2 && fileHandler.readyState !== 3) { //bug fix 2025
                    throwError("Fichier introuvable..");
                }
            } /*end of file handler*/
            fileHandler.send(null);
        }
        //direclty do the calculation
        else {
            performCalculation();
        }
        //calculation Function
        function performCalculation() {
            data = dfraData;
            if (inputData.product !== productCode_REV) {
                throwError("Erreur type produit");
                return;
            }		



            if(type === 'File') {
				var DTSData, fileData;
				fileData = data;
				console.log(EMISection);
				 if((fileData.match(new RegExp("A;", "g")) || []).length === 2){
						data = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(0, fileData.lastIndexOf("A;"))).trim() : (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim());
						
						DTSData = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim() : (fileData.substring(0, fileData.lastIndexOf("A;"))).trim());
				} else {
					data = fileData;
				}
                globalCallBack(getProcessedArray(data));
			} else if (type === 'list') {             

				simulationResult = getListData(getProcessedArray(data))[1];
                var formulaList = [];
                simulationResult.forEach(function(row) {
                    formulaList.push(row.formula);
                });
                formulaList = formulaList.filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                var minAmount = simulationResult.map(function(item) {
                    return item.minAmount;
                });
                var maxAmount = simulationResult.map(function(item) {
                    return item.maxAmount;
                });
                var tncList = simulationResult.map(function(item) {
                    return item.tnc;
                });
                var taegList = simulationResult.map(function(item) {
                    return item.teg;
                });

                simulationResult = {
                    simulationResult: simulationResult,
                    formulaList: formulaList,
                    minAmount: minAmount,
                    maxAmount: maxAmount,
                    tncList: tncList,
                    taegList: taegList
                };
                globalCallBack(simulationResult);
            } else if (type === 'bounds') {
                simulationResult = getListData(getProcessedArray(data))[1];
                var simulationResultValue = getListData(getProcessedArray(data))[0];
                var amount = +inputData.amount; //conversion to integer with +
                var minAmount = +(getPeerValues("min", "minAmount", simulationResult)); //conversion to integer with +
                var maxAmount = +(getPeerValues("max", "maxAmount", simulationResult)); //conversion to integer with +
                if (amount && (amount < minAmount || amount > maxAmount)) {
                    throwError("Merci de saisir un montant compris entre " + format(minAmount) + " &euro; et " + format(maxAmount) + " &euro;");
                    return;
                }

                amount = inputData.amount;
                var simulationResultList = [];
                if (amount) {
                    simulationResult.forEach(function(item) {
                        if ((parseFloat(amount) >= parseFloat(item.minAmount)) && (parseFloat(amount) <= parseFloat(item.maxAmount))) {
                            simulationResultList.push(item);
                        }
                    });
                } else {
                    simulationResultList = simulationResult;
                }
                var lowestTNC = format(getPeerValues("min", "tnc", simulationResultList).toFixed(2));
                var highestTNC = format(getPeerValues("max", "tnc", simulationResultList).toFixed(2));
                var lowestTAEG = format(getPeerValues("min", "teg", simulationResultList).toFixed(2));
                var highestTAEG = format(getPeerValues("max", "teg", simulationResultList).toFixed(2));
                var minAmount = format(getPeerValues("min", "minAmount", simulationResultList).toFixed(2));
                var maxAmount = format(getPeerValues("max", "maxAmount", simulationResultList).toFixed(2));
                var formulaList = [];
                simulationResultList.forEach(function(row) {
                    formulaList.push(row.formula);
                });
                formulaList = formulaList.filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                var formulaArray;
                formulaList.forEach(function(row) {
                    if (!formulaArray) {
                        formulaArray = row
                    } else {
                        formulaArray = formulaArray + ',' + row
                    }
                });
                var result = {
                    formulaArray: formulaArray,
                    lowestTNC: lowestTNC,
                    highestTNC: highestTNC,
                    lowestTAEG: lowestTAEG,
                    highestTAEG: highestTAEG,
                    minAmount: minAmount,
                    maxAmount: maxAmount,
                    error: error
                };
                globalCallBack(result);
            } else if(type === "DTS") {
					var CRLData, fileData;
			 //simulationResult = getListData(getProcessedArray(data))[1];
				fileData = data;
				 if((fileData.match(new RegExp("A;", "g")) || []).length === 2){
						CRLData = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(0, fileData.lastIndexOf("A;"))).trim() : (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim());
						
						data = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim() : (fileData.substring(0, fileData.lastIndexOf("A;"))).trim());
				} else {
					data = fileData;

				}
			 //simulationResult = getListData(getProcessedArray(DTSData, true))[1];
			 computeCalculationResults(getProcessedArray(data, true), true);
			} else if(type === "EMI") {
					var DTSData, fileData;
			 //simulationResult = getListData(getProcessedArray(data))[1];
				fileData = data;
				 if((fileData.match(new RegExp("A;", "g")) || []).length === 2){
						data = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(0, fileData.lastIndexOf("A;"))).trim() : (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim());


						
						DTSData = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim() : (fileData.substring(0, fileData.lastIndexOf("A;"))).trim());
















































				} else {
					data = fileData;

				}
			 //simulationResult = getListData(getProcessedArray(DTSData, true))[1];
			 computeCalculationResults(getProcessedArray(data, true), true);
			}else if (type === 'DTSlist') {             
				var CRLData, fileData;
				//simulationResult = getListData(getProcessedArray(data))[1];
				fileData = data;
				 if((fileData.match(new RegExp("A;", "g")) || []).length === 2){
						CRLData = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(0, fileData.lastIndexOf("A;"))).trim() : (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim());





						
						data = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim() : (fileData.substring(0, fileData.lastIndexOf("A;"))).trim());






				} else {
					data = fileData;


				}
				simulationResult = getListData(getProcessedArray(data))[1];
                var formulaList = [];
                simulationResult.forEach(function(row) {
                    formulaList.push(row.formula);
                });
                formulaList = formulaList.filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                var minAmount = simulationResult.map(function(item) {
                    return item.minAmount;
                });
                var maxAmount = simulationResult.map(function(item) {
                    return item.maxAmount;
                });
                var tncList = simulationResult.map(function(item) {
                    return item.tnc;
                });
                var taegList = simulationResult.map(function(item) {
                    return item.teg;
                });

                simulationResult = {
                    simulationResult: simulationResult,
                    formulaList: formulaList,
                    minAmount: minAmount,
                    maxAmount: maxAmount,
                    tncList: tncList,
                    taegList: taegList
                };
                globalCallBack(simulationResult);
            } else if (type === 'EMIlist') {             
				var DTSData, fileData;
				//simulationResult = getListData(getProcessedArray(data))[1];
				fileData = data;
				 if((fileData.match(new RegExp("A;", "g")) || []).length === 2){
						data = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(0, fileData.lastIndexOf("A;"))).trim() : (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim());









						
						DTSData = ((fileData.substring(0, fileData.lastIndexOf("A;"))).indexOf("AUPC") > 0 ? (fileData.substring(fileData.lastIndexOf("A;"), fileData.length)).trim() : (fileData.substring(0, fileData.lastIndexOf("A;"))).trim());

















				} else {
					data = fileData;

				}
				simulationResult = getListData(getProcessedArray(data))[1];
                var formulaList = [];
                simulationResult.forEach(function(row) {
                    formulaList.push(row.formula);
                });
                formulaList = formulaList.filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                var minAmount = simulationResult.map(function(item) {
                    return item.minAmount;
                });
                var maxAmount = simulationResult.map(function(item) {
                    return item.maxAmount;
                });
                var tncList = simulationResult.map(function(item) {
                    return item.tnc;
                });
                var taegList = simulationResult.map(function(item) {
                    return item.teg;





























                });






                simulationResult = {
                    simulationResult: simulationResult,
                    formulaList: formulaList,
                    minAmount: minAmount,
                    maxAmount: maxAmount,
                    tncList: tncList,
                    taegList: taegList
                };
                globalCallBack(simulationResult);




            }
			else {
                computeCalculationResults(getProcessedArray(data));

            }
        }; /*End of Perform Calculation Function*/
    }; /*end of init file fetch*/

	function changeDelimiter(obj, callback) {
        var err, emi, amount, duration, materialCode, vendorCode, tarif, tarifs, legal, TNC,promotion,tarifValue;
        err = [];
        amount = duration = materialCode = vendorCode = '';
        tarifs = [];
        tarif = [];
        amount = obj.amount ||'';
        duration = obj.duration||'';
        materialCode = obj.material||'';
        promotion = obj.promotion||'';
        vendorCode = obj.merchant||'';
        if(materialCode==='' || vendorCode===''){
        	err.push("Merci de choisir un projet existant");
        }
        if(obj.product!==productCode_CLA){
        	err.push("Erreur type produit");
        }
        if (typeof(BNPPPF.vendorRates) === 'undefined' || !BNPPPF.vendorRates[vendorCode]) {
            err.push("Fichier introuvable");
        }
		
		
		if(promotion!=='P' && promotion!=='N'){
        		err.push("Merci de renseigner le code promo");
        	}
		
		
		
        /* // if(!promotion){
        	 //changed as per defect 2080 and the response for JIRA associated with it
        	//if(promotion!=='P' && promotion!=='N'){
        		err.push("Merci de renseigner le code promo");
        	//}
        	
        //}  */
        if (err.length) {
            obj.err = err;
            if (callback) {
                callback(obj);
            }
            return obj;
        }
        amount = parseFloat(changeDelimiter(amount));
        tarif.length = 0;
        tarifs = BNPPPF.vendorRates[vendorCode];
        if (tarifs !== undefined) {
        	if(promotion){
        		tarif = selectRatePromo(tarifs, duration, materialCode, vendorCode, amount,promotion);
        	}else{
        		tarif = selectRate(tarifs, duration, materialCode, vendorCode, amount);
        	}
            var matchedTariffs = tarif;
            //tarif = selectFinalTarif(tarif);
        } else {
            tarif = [];
        }
		
        if (tarif.length !== 0) {
		for (var i=0;i<tarif.length;i++) {
  

		 if(!tarif[i].pur || !tarif[i].mio || !tarif[i].mao  || !tarif[i].tnc){
			err.push("erreur technique");
		}else{
		if(promotion && !tarif[i].prt){
			err.push("erreur technique");
		}
		
			}
			if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            } 
		}	
		
            var matchedTariffs = tarif;
            var lowestTNC = getPeerValues("min", "tnc", matchedTariffs);
            var lowestTNCPercentage = (lowestTNC / 100).toFixed(4);
            var highestTNC = getPeerValues("max", "tnc", matchedTariffs);
            var highestTNCPercentage = (highestTNC / 100).toFixed(4);
            obj.minAmount = format(getPeerValues("min", "mio", matchedTariffs));
            obj.maxAmount = format(getPeerValues("max", "mao", matchedTariffs));
            obj.durationMin = getPeerValues("min", "mit", matchedTariffs);
            obj.durationMax = getPeerValues("max", "mat", matchedTariffs);
            obj.minTaeg = format(((Math.pow((1 + lowestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.maxTaeg = format(((Math.pow((1 + highestTNCPercentage / 12), 12) - 1) * 100).toFixed(2));
            obj.minTnc = format(lowestTNC);
            obj.maxTnc = format(highestTNC);
        } else if (!tarif || tarif.length === 0) {
            if (tarif.length === 0) {
                if(promotion){
            		tarif = selectRatePromo(tarifs, duration, materialCode, vendorCode, 0,promotion);
            	}else{
            		tarif = selectRate(tarifs, duration, materialCode, vendorCode, 0);
            	}
            }
            if (tarif.length === 0) {
            	err.push("Merci de choisir un projet existant");
            } else{
            	var tarifValue = (tarif.length>=1) ? tarif[0] : tarif;
    			//checkTarifArgs(tarifValue, "erreur technique", err);
				if(!tarifValue.pur || !tarifValue.mio || !tarifValue.mao || !tarifValue.prt || !tarifValue.tnc){
			err.push("erreur technique");
		}
		if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }
    		} 
            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }
            var matchedTariffs = tarif;
            obj.minAmount = getPeerValues("min", "mio", matchedTariffs);
            obj.maxAmount = getPeerValues("max", "mao", matchedTariffs);
            var arr = tarifs.map(function(row) {
                return parseFloat(row.pur, 10);
            });
            if((isInt(amount))|| (arr.indexOf(Number(materialCode)) > -1  && (!amount || amount < obj.minAmount || amount > obj.maxAmount))){
                err.push("Merci de saisir un montant compris entre " + obj.minAmount + " &euro; et " + obj.maxAmount + " &euro;");
            } else {
                err.push("Merci de choisir un projet existant");
            }

            if (err.length) {
                obj.err = err;
                if (callback) {
                    callback(obj);
                }
                return obj;
            }
        }
        var output = calculateOutputJson(obj,'PPRecuperation');
        if (callback) {
            callback(output);
        }
        
        return output;
    }



    /*gets processed array.Converts DFRA file to json*/
    var getProcessedArray = function(fileData, DTSFlow) {
		var simulations;
		//if(!DTSFlow)
		if(!DTSFlow && !(fileData.indexOf("AUPC") > 0))
			simulations = fileData ? fileData.split("\n") : {};
		else 
            simulations = fileData ? fileData.split("\n") : {};
        var processedJson = {}, ele;
        processedJson = simulations.map(function(simulation) {
			if(simulation) {
				simulation = simulation.trim();
				ele = simulation.split(';');
			} else {
				ele = "";
			}
            //var ele = simulation ? simulation.split(';') : " ";
            if (ele) {
                if (ele[0] === CONSTANT_C) {
                    return {

                        "category": ele[0],
                        "formula": spaceCommaRemover(ele[1]),
                        "amount": spaceCommaRemover(ele[2]),
                        "duration": spaceCommaRemover(ele[3]),
                        "emi": spaceCommaRemover(ele[4]),
                        "interest": spaceCommaRemover(ele[5]),
                        "lastEmi": spaceCommaRemover(ele[6]),
                        "emiWithInsurance": spaceCommaRemover(ele[7]),
                        "amountOfInterestWithIns": spaceCommaRemover(ele[8]),
                        "totalInsurance": spaceCommaRemover(ele[9]),
                        "lastEmiWithInsurance": spaceCommaRemover(ele[10]),
                        "monthlyCostOfIns": spaceCommaRemover(ele[11]),
                        "taea": spaceCommaRemover(ele[12])
                    };
                } else if (ele[0] === CONSTANT_B) {
                    return {
                        "category": ele[0],
                        "formula": spaceCommaRemover(ele[1]),
                        "minAmount": spaceCommaRemover(ele[2]),
                        "maxAmount": spaceCommaRemover(ele[3]),
                        "tnc": spaceCommaRemover(ele[4]),
                        "teg": spaceCommaRemover(ele[5])
                    };
                } else if (ele[0] === CONSTANT_A) {
                    return {
                        "category": ele[0],
                        "partnerCode": spaceCommaRemover(ele[1]),
                        "applicationCode": spaceCommaRemover(ele[2]),
                        "processingDate1": spaceCommaRemover(ele[3]),
                        "dataGenerationIndicator": spaceCommaRemover(ele[4]),
                        "processingDate2": spaceCommaRemover(ele[5]),
                        "insuranceRates": spaceCommaRemover(ele[6]),
                        "postPonementNumber": spaceCommaRemover(ele[7])
                    };
                } /*end of one row process*/
            } /*end of if which checks for empty lines*/
        });
		if(processedJson) {
			processedJson = processedJson.filter(function( element ) {
			   return element !== undefined;
			});
		}
        return processedJson;
    };
    //to convert date to string
    function dateToString(today) {
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        var date = dd + "/" + mm + "/" + today.getFullYear();
        return date;
    }
    /*performs the actual calculation*/
    var computeCalculationResults = function(processedJson, DTSFlow) {
        var CRLJson = processedJson;
        merchantId = inputData.merchant;
        productCode = inputData.product;
        amount = inputData.amount || '';
        duration = inputData.duration || '';
        emi = changeDelimiterCRL(String(inputData.emi || ''));
        formula = inputData.formula;
        //Date fetch
        var startingDate = new Date();
		startingDate.setDate('05');		
        var endDate = new Date();
		endDate.setDate('05');	
		endDate.setMonth(endDate.getMonth() + 1);
					
        startingDate = dateToString(startingDate);
		endDate = dateToString(endDate);
		var amountOfInterestWithIns;
        if (CRLJson) {
            j = 0;
            EMI = '';
            tncList = [];
            formulaList = [];
            sourceLists = getListData(CRLJson);

            simulationResult = getListData(getProcessedArray(data, DTSFlow))[0];
            var minAmount = (getPeerValues("min", "amount", simulationResult));
            var maxAmount = (getPeerValues("max", "amount", simulationResult));
            var minDuration = (getPeerValues("min", "duration", simulationResult));
            var maxDuration = (getPeerValues("max", "duration", simulationResult));
            var minEmi = (getPeerValues("min", "emi", simulationResult));
            var maxEmi = (getPeerValues("max", "emi", simulationResult));
            var minTeg = (getPeerValues("min", "teg", sourceLists[1]));
            var maxTeg = (getPeerValues("max", "teg", sourceLists[1]));
            if ((!inputData.amount) || (isInt(Number(amount)) || amount < minAmount || amount > maxAmount)) {
                throwError("Merci de saisir un montant compris entre " + format(minAmount) + " &euro; et " + format(maxAmount) + " &euro;");
                return;
            }

            if ((duration && isInt(duration)) || (duration && (duration < minDuration || duration > maxDuration))) {
                throwError("Merci de saisir une dur\u00E9e comprise entre " + minDuration + " mois et " + maxDuration + " mois");
                return;
            } else if ((emi && !duration && isNaN(emi)) || (emi && (emi < minEmi || emi > maxEmi))) {
                throwError("Merci de saisir une mensualit\u00E9 comprise entre " + format(minEmi) + " &euro; et " + format(maxEmi) + " &euro;");
                return;
            } else if (!duration && !emi) {
                throwError("Merci de choisir soit une dur\u00E9e ou une mensualit\u00E9");
                return;
            }
            amount = parseFloat(changeDelimiter(amount));

            if (emi) {
                emi = parseFloat(changeDelimiter(emi));
            }
            if (amount && amount !== 0 && duration && duration !== 0) {
                var closestAmountList = getClosestFromEligibleList(sourceLists[0], amount, AMOUNT);
                var closestDurationList = getClosestFromEligibleList(closestAmountList, duration, DURATION);
                var resultData = getLeastFilteredData(closestDurationList, sourceLists[1]);
                while (resultData.emi === '0.00') {
                    duration = parseFloat(duration) - 1;
                    var closestDurationList = getClosestFromEligibleList(closestAmountList, duration, DURATION);
                    resultData = getLeastFilteredData(closestDurationList, sourceLists[1]);

                }
					formula = resultData.formula;
                	goodAmount = formatAmount(resultData.amount);
                	durationOriginal = resultData.duration;
                	emi = formatAmount(resultData.emi);
                	interest = formatAmount(resultData.interests);
                	lastEmi = resultData.lastEmi;
                	taegOriginal = formatAmount(resultData.taeg);
                	tncOriginal = formatAmount(resultData.tnc);
                	amountOfInterestWithIns = formatAmount(resultData.amountOfInterestWithIns);
                	while (resultData.emiWithInsurance === "0.00" || resultData.amountOfInterestWithIns === "0.00" || resultData.totalInsurance === "0.00" || resultData.lastEmiWithInsurance === "0.00" || resultData.monthlyCostOfIns === "0.00" || resultData.emi === '0.00') {
                    	duration = parseFloat(resultData.duration) - 1;
                    	var closestDurationList = getClosestFromEligibleList(closestAmountList, duration, DURATION);
                    	resultData = getLeastFilteredData(closestDurationList, sourceLists[1]);
                	}
            } else if (emi && duration && duration !== 0) {
                var closestDurationList = getClosestFromEligibleList(sourceLists[0], duration, DURATION);
                var closestEmiList = getClosestFromEligibleList(closestDurationList, parseFloat(emi), EMI);
                var resultData = getLeastFilteredData(closestEmiList, sourceLists[1]);
                while (resultData.emi === '0.00') {
                    duration = parseFloat(duration) - 1;
                    var closestDurationList = getClosestFromEligibleList(sourceLists[0], duration, DURATION);
                    var closestEmiList = getClosestFromEligibleList(closestDurationList, parseFloat(emi), EMI);
                    resultData = getLeastFilteredData(closestEmiList, sourceLists[1]);

                }
                formula = resultData.formula;
                goodAmount = formatAmount(resultData.amount);
                durationOriginal = resultData.duration;
                emi = formatAmount(resultData.emi);
                interest = formatAmount(resultData.interests);
                lastEmi = resultData.lastEmi;
                taegOriginal = formatAmount(resultData.taeg);
                tncOriginal = formatAmount(resultData.tnc);
                amountOfInterestWithIns = formatAmount(resultData.amountOfInterestWithIns);
                while (resultData.emiWithInsurance === "0.00" || resultData.amountOfInterestWithIns === "0.00" || resultData.totalInsurance === "0.00" || resultData.lastEmiWithInsurance === "0.00" || resultData.monthlyCostOfIns === "0.00" || resultData.emi === '0.00') {
                    duration = parseFloat(resultData.duration) - 1;
                    var closestDurationList = getClosestFromEligibleList(sourceLists[0], duration, DURATION);
                    var closestEmiList = getClosestFromEligibleList(closestDurationList, parseFloat(resultData.emi), EMI);
                    resultData = getLeastFilteredData(closestEmiList, sourceLists[1]);

                }
            } else if (amount && amount !== 0 && inputData.emi !== '') {
                var closestAmountList = getClosestFromEligibleList(sourceLists[0], amount, AMOUNT);
                var closestEmiList = getClosestFromEligibleList(closestAmountList, emi, EMI);
                var resultData = getLeastFilteredData(closestEmiList, sourceLists[1]);
                formula = resultData.formula;
                goodAmount = formatAmount(resultData.amount);
                durationOriginal = resultData.duration;
                emi = formatAmount(resultData.emi);
                interest = formatAmount(resultData.interests);
                lastEmi = resultData.lastEmi;
                taegOriginal = formatAmount(resultData.taeg);
                tncOriginal = formatAmount(resultData.tnc);
                amountOfInterestWithIns = formatAmount(resultData.amountOfInterestWithIns);
                while (resultData.emiWithInsurance === "0.00" || resultData.amountOfInterestWithIns === "0.00" || resultData.totalInsurance === "0.00" || resultData.lastEmiWithInsurance === "0.00" || resultData.monthlyCostOfIns === "0.00" || resultData.emi === '0.00') {
					duration = parseFloat(resultData.duration) - 1;
                    var closestDurationList = getClosestFromEligibleList(closestAmountList, duration, DURATION);
                    resultData = getLeastFilteredData(closestDurationList, sourceLists[1]);

                }
            } else {

                if (!inputData.amount) {
                    throwError("Merci de saisir un montant compris entre " + format(minAmount) + " &euro; et " + format(maxAmount) + " &euro;");
                } else if (!inputData.duration && !inputData.emi) {
                    throwError("Merci de choisir soit une dur\u00E9e ou une mensualit\u00E9");
                }
                return;
            }
				lastEmi = resultData.lastEmi;
				var totalDueAmtWithIns = (((parseFloat(resultData.emi) * (parseInt(durationOriginal) - 1))) + parseFloat(lastEmi)).toFixed(2);
				monthlyInsuranceAmount = formatAmount(resultData.monthlyCostOfIns);
				emiWithInsurance = formatAmount(resultData.emiWithInsurance);
				totalDueAmount = formatAmount(totalDueAmtWithIns);
				taea = formatAmount(resultData.taea);
                amountOfInterestWithIns = formatAmount(resultData.amountOfInterestWithIns);
				var totalInsurance = formatAmount(resultData.totalInsurance);
				var lastEmiWithInsurance = formatAmount(resultData.lastEmiWithInsurance);
				var interest = formatAmount(resultData.interests);
				lastEmi = formatAmount(lastEmi);
				
            simulationResult = {
                amount: goodAmount, //SPDAT_0004
                duration: durationOriginal, //SPDAT_0006
                emi: emi, //SPDAT_0008
                formula: formula, //SPDAT_0033
                monthlyInsuranceAmount: monthlyInsuranceAmount, //SPDAT_0012
                totalInsuranceAmount: totalInsurance, //SPDAT_0013
                emiWithInsurance: emiWithInsurance, //SPDAT_0016
                totalDueAmount: totalDueAmount, //SPDAT_0017
                tnc: tncOriginal, //SPDAT_0027
                taeg: taegOriginal, //SPDAT_0106
                taea: taea, //SPDAT_0014
                lastEmi: lastEmi, //SPDAT_0104
                startDate: startingDate, //SPDAT_0158
                interestAmount: interest, //SPDAT_0155
                endDate: endDate, //SPDAT_0159
                numberOfTerms: durationOriginal, //SPDAT_0122
                nbPremMens: Number(durationOriginal) - 1, //SPDAT_0144
				amountOfInterestWithIns:amountOfInterestWithIns,
				lastEmiWithInsurance:lastEmiWithInsurance,
                error: error,
                minTeg:minTeg,
                maxTeg:maxTeg
            };
            globalCallBack(simulationResult);
        } /*end of CRL Json if*/
        else {
            //empty CRL json
            throwError();
            return;
        }
    }; /*end of compute calculation results*/
    var getClosestFromEligibleList = function(preCalculatedList, value, type, range) {
        var typeNew;
        var eligibleList = [],
            diffArr = [],
            closestDataList = [];
        var closest = 0,
            diff = 0,
            minDiff = 0,
            iterator = 0,
            minDiffiterator = 0;
        var valueList = [];
        for (var i = 0; i < preCalculatedList.length; i++) {
            if (type === AMOUNT) {
                diff = Math.abs(preCalculatedList[i].amount - value);
                closest = i;
                diffArr[i] = diff;
            } else if (type === DURATION) {
                diff = Math.abs(preCalculatedList[i].duration - value);
                closest = i;
                diffArr[i] = diff;
            } else if (type === EMI) {
                diff = Math.abs(preCalculatedList[i].emi - value);
                closest = i;
                diffArr[i] = diff;
            }

            eligibleList[iterator] = {
                formula: preCalculatedList[closest].formula,
                amount: preCalculatedList[closest].amount,
                duration: preCalculatedList[closest].duration,
                emi: preCalculatedList[closest].emi,
                interests: preCalculatedList[closest].interests,
                lastEmi: preCalculatedList[closest].lastEmi,
                emiWithInsurance: preCalculatedList[closest].emiWithInsurance,
                amountOfInterestWithIns: preCalculatedList[closest].amountOfInterestWithIns,
                totalInsurance: preCalculatedList[closest].totalInsurance,
                lastEmiWithInsurance: preCalculatedList[closest].lastEmiWithInsurance,
                monthlyCostOfIns: preCalculatedList[closest].monthlyCostOfIns,
                taea: preCalculatedList[closest].taea,
                index: i,
                difference: diff
            };
            iterator++;
        }
        minDiff = Math.min.apply(Math, diffArr);
        closestDataList = eligibleList.filter(function(item) {
            typeNew = (type === EMI) ? 'emi' : type;
            if (item.difference === minDiff) {
                valueList.push(parseFloat(item[typeNew]));
            }

        });
        closestDataList = eligibleList.filter(function(item) {
            typeNew = (type === EMI) ? 'emi' : type;

            if (range === 'highest') {
                return item.difference === minDiff && parseFloat(item[typeNew]) === Math.max.apply(Math, valueList);
            } else {
                return item.difference === minDiff && parseFloat(item[typeNew]) === Math.min.apply(Math, valueList);
            }
        });
        return closestDataList;
    }; /*end of getClosestFromEligibleList*/
    /*get list from the file*/
    var getListData = function(data) {
        var listA = [];
        var listB = [];
        var listC = [];
        var list = [];
        data.forEach(function(item, index) {
            if (item.category === CONSTANT_C) {
                listC[index] = {
                    formula: item.formula,
                    amount: (Number(item.amount) / 100).toFixed(2),
                    duration: item.duration,
                    emi: (Number(item.emi) / 100).toFixed(2),
                    interests: (Number(item.interest) / 100).toFixed(2),
                    lastEmi: (Number(item.lastEmi) / 100).toFixed(2),
                    emiWithInsurance: (Number(item.emiWithInsurance) / 100).toFixed(2),
                    amountOfInterestWithIns: (Number(item.amountOfInterestWithIns) / 100).toFixed(2),
                    totalInsurance: (Number(item.totalInsurance) / 100).toFixed(2),
                    lastEmiWithInsurance: (Number(item.lastEmiWithInsurance) / 100).toFixed(2),
                    monthlyCostOfIns: (Number(item.monthlyCostOfIns) / 100).toFixed(2),
                    taea: (Number(item.taea) / 100).toFixed(2)

                };
            } else if (item.category === CONSTANT_B) {
                listB[index] = {
                    formula: item.formula,
                    minAmount: (Number(item.minAmount) / 100).toFixed(2),
                    maxAmount: (Number(item.maxAmount) / 100).toFixed(2),
                    tnc: (Number(item.tnc) / 100).toFixed(2),
                    teg: (Number(item.teg) / 100).toFixed(2)
                };
            } else if (item.category === CONSTANT_A) {
                listA[index] = {
                    partnerCode: item.partnerCode,
                    applicationCode: item.applicationCode,
                    processingDate1: item.processingDate1,
                    processingDate2: item.processingDate2,
                    dataGenerationIndicator: item.dataGenerationIndicator,
                    insuranceRates: (Number(item.insuranceRates) / 100).toFixed(2),
                    postPonementNumber: item.postPonementNumber
                };
            }

        });
        listC = listC.filter(Boolean);
        listB = listB.filter(Boolean);
        listA = listA.filter(Boolean);

        list = [listC, listB, listA];
        return list;

    };
	function getMin(list) {
        
        list.sort()
        return list[0];

    };
    /*end of getListData*/
    /*get filtered data*/
    var getLeastFilteredData = function(eligibleList, listTypeB) {
        var tnc, teg, selectedBListRecord, selectedEmi, selectedDuration, selectedLastEmi, selectedAmountOfInterestWithIns, selectedTotalInsurance, selectedTotalFormula, selectedTotalTaea;
        var filteredList = {};
        for (var eligibleListIterator = 0; eligibleListIterator < eligibleList.length; eligibleListIterator++) {
            formulaList.push(eligibleList[eligibleListIterator].formula);
        }

        var leastFormulaFilteredItem = eligibleList.filter(function(a) {
            return Number(a.formula) === Number(Math.min.apply(Math, formulaList));
        });
        leastFormulaFilteredItem = leastFormulaFilteredItem[0];

        var listBFormulaFiltered = listTypeB.filter(function(item) {
            return Number(item.formula) === Number(leastFormulaFilteredItem.formula);
        });
        listBFormulaFiltered.forEach(function(item) {
            if ((parseFloat(leastFormulaFilteredItem.amount) >= parseFloat(item.minAmount)) && (parseFloat(leastFormulaFilteredItem.amount) <= parseFloat(item.maxAmount))) {
                selectedBListRecord = item;
                tnc = selectedBListRecord.tnc;
                teg = selectedBListRecord.teg;
            }
        });
        filteredList = {
            formula: leastFormulaFilteredItem.formula,
            amount: leastFormulaFilteredItem.amount,
            emi: leastFormulaFilteredItem.emi,
            duration: leastFormulaFilteredItem.duration,
            amountOfInterestWithIns: leastFormulaFilteredItem.amountOfInterestWithIns,
            tnc: tnc,
            taeg: teg,
            taea: leastFormulaFilteredItem.taea,
            interests: leastFormulaFilteredItem.interests,
            lastEmi: leastFormulaFilteredItem.lastEmi,
            emiWithInsurance: leastFormulaFilteredItem.emiWithInsurance,
            totalInsurance: leastFormulaFilteredItem.totalInsurance,
            lastEmiWithInsurance: leastFormulaFilteredItem.lastEmiWithInsurance,
            monthlyCostOfIns: leastFormulaFilteredItem.monthlyCostOfIns,
        };
        return filteredList;

    };
    var throwError = function(message) {
        resultJSON.error = message || errorMessage;
        if (globalCallBack) {
            globalCallBack(resultJSON);
        }
    };
    /*utility methods*/

    /*remove space and comma*/
    var spaceCommaRemover = function(value) {
        if (value) {
            value = value.replace(/ /g, '').replace(/€|,|\./g, '');
            return value;
        }
    };
    /*format Amount*/
    var formatAmount = function(value) {
        if (value) {
            value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            value = value.replace(/\./g, ',');
            return value;
        }

    };
    /*Change Delimer Method*/
    var changeDelimiter = function(goodAmount) {
        goodAmount = goodAmount.toString();
        if (goodAmount.indexOf(',') > -1 && (goodAmount.split(',').length - 1) < 2) {
            goodAmount = (goodAmount.replace(/,/g, '.'));
        }
        return Number(goodAmount);
    };
    var changeDelimiterCRL = function(goodAmount) {
        goodAmount = goodAmount.toString();
        if (goodAmount.indexOf(',') > -1 && (goodAmount.split(',').length - 1) < 2) {
            goodAmount = (goodAmount.replace(/,/g, '.'));
        }
        return goodAmount;
    };
    /*exposed method*/
	function getCRLdetails(obj, callBack) {    
        inputData = obj;    
        globalCallBack = callBack;
        initiateFileFetch("File"); /*fetches file*/
    };
    function calculCRLResult(obj, callBack) {
        inputData = obj;
        globalCallBack = callBack;
        initiateFileFetch(); /*fetches file*/


    };
	//calculDTSCRLResult
    function calculDTSCRLResult(obj, callBack) {
        inputData = obj;
        globalCallBack = callBack;
        initiateFileFetch("DTS");
    }; 
	
	
	//calculDTSCRLResult
    function calculEMICRLResult(obj, callBack) {
        inputData = obj;
        globalCallBack = callBack;
        initiateFileFetch("EMI");
    }; 
	
	/*exposed method*/
    function calculFormulaSlices(obj, callBack) {
        inputData = obj;
        globalCallBack = callBack;
        initiateFileFetch('list'); /*fetches file*/
    };
	function calculFormulaSlicesNewCR(obj, callBack) {
        inputData = obj;
        globalCallBack = callBack;
		if(inputData.newCRBlock == "DTS") {
			initiateFileFetch('DTSlist');
		} else if (inputData.newCRBlock == "EMI") {
			 initiateFileFetch('EMIlist'); /*fetches file*/
		}
       
    };


    /*exposed method*/
    function calculCRLBounds(obj, callBack) {
        inputData = obj;
        globalCallBack = callBack;
        initiateFileFetch('bounds'); /*fetches file*/


    };
    //to assign output parameter that are given in document
    function calculateOutputJson(obj, type) {
        var sim = {};
        if (type === "PPRecuperation") {
            sim.minTnc = obj.minTnc; //SPDAT_0124
            sim.maxTnc = obj.maxTnc; //SPDAT_0125
            sim.minTaeg = obj.minTaeg; //SPDAT_0126
            sim.maxTaeg = obj.maxTaeg; //SPDAT_0127
        }
        if (type === "PPRecuperation" || type === "PPWithPromotion") {
            sim.minAmount = obj.minAmount; //SPDAT_0051
            sim.maxAmount = obj.maxAmount; //SPDAT_0052
            sim.durationMin = obj.durationMin; //SPDAT_0056
            sim.durationMax = obj.durationMax; //SPDAT_0057
        }
        if (type === "PPWithoutPromotion" || type === "PPWithPromotion" || type === "consolidation" || type === "consolidationNewProject") {
            sim.amount = obj.amount; //SPDAT_0004,//SPDAT_0156
            sim.duration = obj.duration; //SPDAT_0006,//SPDAT_0157
            sim.numberOfTerms = obj.numberOfTerms; //SPDAT_0122/
            sim.monthlyInsuranceAmount = obj.monthlyInsuranceAmount; //SPDAT_0012
            sim.emiWithInsurance = obj.emiWithInsurance; //SPDAT_0016
            sim.totalInsuranceAmount = obj.totalInsuranceAmount; //SPDAT_0013
            sim.interestAmount = obj.interestAmount; //SPDAT_0011
            sim.totalDueAmount = obj.totalDueAmount; // OLD SPDAT_0010 
            sim.totalDueAmountWithInsurance = obj.totalDueAmountWithInsurance; // NEW SPDAT_0010
            sim.totalAdditionalCostWithInsurance = obj.totalAdditionalCostWithInsurance //  WHAT SPDAT_  ??
            sim.taeg = obj.taegOriginal; //SPDAT_0009
            sim.taea = obj.taea; //SPDAT_0014
            sim.emi = obj.emi; //SPDAT_0008/
            sim.tnc = obj.tnc; //SPDAT_0027
			

            /*  Start of CR 148 */
            sim.minAmount = obj.minAmount; //SPDAT_0051
            sim.maxAmount = obj.maxAmount; //SPDAT_0052
            sim.durationMin = obj.durationMin; //SPDAT_0056
            sim.durationMax = obj.durationMax; //SPDAT_0057
            sim.minTnc = obj.minTnc; //SPDAT_0124
            sim.maxTnc = obj.maxTnc; //SPDAT_0125
            sim.minTaeg = obj.minTaeg; //SPDAT_0126
            sim.maxTaeg = obj.maxTaeg; //SPDAT_0127
            /*  End of CR 148 */
			
			//get the insuranceRate
			sim.insuranceRate = obj.insuranceRate;
        }
        if (type === "consolidation" || type === "consolidationNewProject") {
            sim.redemption = obj.redemption; //SPDAT_0138
            sim.reduction = obj.reduction; //SPDAT_0139
            sim.reductionPercent = obj.reductionPercent; //SPDAT_0140
            sim.indebtednessBefore = obj.indebtednessBefore; //SPDAT_0141
            sim.indebtednessAfter = obj.indebtednessAfter; //SPDAT_0142

        }
        if (type === "consolidationNewProject") {
            sim.gain = obj.gain; //SPDAT_0143
            sim.newProjectAmount = obj.newProjectAmount; //SPDAT_0110
            sim.creditAmount = obj.creditAmount; //SPDAT_0109
        }
        if (type === "consolidation") {
            sim.totalMonthlyPayment = obj.totalMonthlypayment; //SPDAT_0154
        }

        //Mantis 5039
		sim.prt = obj.prt;
		sim.fcf = obj.fcf;
		sim.tarifDiff =obj.tarifDiff;
		//End of Mantis 5039		
		
		return sim;
    };
    my.calculatePP 			= 	calculVAT;
	//Calculate mention with High Tarification
	my.calculatePPMention	=	calculVATHigh;
	//Calculate simulation with P,N tag Mantis 5039
	my.calculresultBlockPP	=	calculresultPPBlock;
	/* DO NOT REMOVE calculRecuperationOfBounds */
    my.readBoundsPP = calculRecuperationOfBounds;

    // my.calculatePPPromo = calculSimulationWithPromotion;
    // my.calculateRAC = calculSimulationWithoutConsolidation;
    // my.calculateRACWithNewProject = calculConsolidationWithNewProject;
    my.calculateCRL = calculCRLResult;
    my.calculateDTSCRL = calculDTSCRLResult;
    my.calculateEMICRL = calculEMICRLResult;
    my.readFormula = calculFormulaSlices;
	my.readFormulaNewCR = calculFormulaSlicesNewCR;
    my.readBoundsCRL = calculCRLBounds;
	my.readCRLDetails = getCRLdetails;
    return my;
})(BNPPPF || {});