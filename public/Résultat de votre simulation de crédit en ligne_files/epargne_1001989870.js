var BNPPPFSaving = (function(my) {
   var savings={
   "H": {
        "TX": 0.5,
        "DD": 20160916,
        "DF": 20990916,
        "MinI": 10,
        "MaxI": 500000,
        "MinR": 0,
        "MaxR": 5000,
        "MinD": 2,
        "MaxD": 120
    },
    "P12": {
        "TI": 1.2,
        "TR": 1.2,
        "DD": 20160916,
        "DF": 20161130,
        "MinI": 1,
        "MaxI": 53000,
        "MinR": 1,
        "MaxR": 2000,
        "DurTX": 12,
        "NbVR": 11
    },
    "PVR": {
        "TR": 2,
        "DD": 20150701,
        "DF": 20150831,
        "MinR": 1,
        "MaxR": 2000,
        "DurTX": 6,
        "NbVR": 6
    },
    "PVI": {
        "TI": 2.5,
        "DD": 20150101,
        "DF": 20150431,
        "MinI": 1,
        "MaxI": 30000,
        "DurTX": 4
    },
    "PB": {
        "DD": 20150201,
        "DF": 20150430,
        "MinI": 1000,
        "MaxI": 2000,
        "MtB": 500,
        "DurB": 6
    }
	};

	if(typeof my.saving == 'undefined'){
    		my.saving={};
    	}
	my.saving["1001989870"]=savings;
  return my;
})(BNPPPFSaving || {});