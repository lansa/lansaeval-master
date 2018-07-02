﻿LANSA.addComponent({id:"XFLTOBJ01",nm:"xFlightTrackerDataObject",ot:"rp",tp:"Reusable Part",de:"Flight Tracker Data Object",tl:14020006},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XFLTFLD21",an:"xFlightTrackerSearchType",ft:"NV",ln:15,dc:0,lb:"Search Type",h1:"Search",h2:"Type",h3:"",de:"Search Type",dv:"",ia:["FE","LC"]},F2:{nm:"XFLTFLD08",an:"xFlightTrackerCarrier",ft:"NV",ln:512,dc:0,lb:"AirlineCode",h1:"AirlineCode",
h2:"",h3:"",de:"AirlineCode",dv:"",ia:["FE","LC"]},F3:{nm:"XFLTFLD02",an:"xFlightTrackerAirlineName",ft:"NV",ln:512,dc:0,lb:"Airline Name",h1:"Airline",h2:"Name",h3:"",de:"Airline Name",dv:"",ia:["FE","LC"]},F4:{nm:"XFLTFLD06",an:"xFlightTrackerDepatureTime",ft:"NV",ln:512,dc:0,lb:"Departure Time",h1:"Departure",h2:"Time",h3:"",de:"Departure Time",dv:"",ia:["ASQN","FE"]},F5:{nm:"DATEX",ft:"D",ln:10,dc:0,lb:{"ENG":"Date","FRA":"?","JPN":"?","LLL":"Date"}[cL],h1:{"ENG":"DATE","FRA":"?","JPN":"?","LLL":"DATE"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"DATE in installation format (RDMLX)","FRA":"?","JPN":"?","LLL":"DATE in installation format (RDMLX)"}[cL],dv:l.n.AsDate(l.eSV("*DATE8"),"SYSFMT8"),ia:["ASQN","FE","ISO"]},F6:{nm:"TIMEX",ft:"T",ln:8,dc:0,lb:{"ENG":"Time","FRA":"?","JPN":"?","LLL":"Time"}[cL],h1:{"ENG":"Time","FRA":"?","JPN":"?","LLL":"Time"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Current time (RDMLX)","FRA":"?","JPN":"?","LLL":"Current time (RDMLX)"}[cL],dv:l.n.AsTime(l.eSV("*TIME"),"HHMMSS"),ia:["ASQN","FE","ISO"]},F7:{nm:"XFLTFLD01",an:"xFlightTrackerAirlineCode",ft:"NV",ln:512,dc:0,lb:"AirlineCode",h1:"AirlineCode",h2:"",h3:"",de:"AirlineCode",dv:"",ia:["FE","LC"]},F8:{nm:"XFLTFLD22",an:"xFlightTrackerAirlineLogo",ft:"NV",ln:512,dc:0,lb:"AirlineLogo",h1:"AirlineLogo",h2:"",h3:"",de:"AirlineLogo",dv:"",ia:["FE","LC"]},F9:{nm:"XFLTFLD17",an:"xFlightTrackerAircraftCode",
ft:"NV",ln:512,dc:0,lb:"Aircraft Code",h1:"Aircraft",h2:"Code",h3:"",de:"Aircraft Code",dv:"",ia:["FE","LC"]},F10:{nm:"XFLTFLD18",an:"xFlightTrackerAircraftName",ft:"NV",ln:512,dc:0,lb:"Aircraft Code",h1:"Aircraft",h2:"Code",h3:"",de:{"ENG":"Aircraft","FRA":"Aircraft Code","JPN":"Aircraft Code","LLL":"Aircraft Code"}[cL],dv:"",ia:["FE","LC"]},F11:{nm:"XFLTFLD05",an:"xFlightTrackerFlightNumber",ft:"NV",ln:512,dc:0,lb:"Flight Number",h1:"Flight",h2:"Number",h3:"",de:"Flight Number",dv:"",ia:["FE","LC"]
},F12:{nm:"XFLTFLD07",an:"xFlightTrackerArrivalTime",ft:"NV",ln:512,dc:0,lb:"Arrival Time",h1:"Arrival",h2:"Time",h3:"",de:"Arrival Time",dv:"",ia:["FE"]},F13:{nm:"XFLTFLD15",an:"xFlightTrackerArrivalTerminal",ft:"NV",ln:512,dc:0,lb:"Arrival Termina",h1:"Arrival",h2:"Terminal",h3:"",de:"Arrival Terminal",dv:"",ia:["FE","LC"]},F14:{nm:"XFLTFLD14",an:"xFlightTrackerDepartureTerminal",ft:"NV",ln:512,dc:0,lb:"Departure Termi",h1:"Departure",h2:"Terminal",h3:"",de:"Departure Terminal",dv:"",ia:["FE","LC"]
},F15:{nm:"XFLTFLD16",an:"xFlightTrackerCarrierCode",ft:"NV",ln:10,dc:0,lb:"Carrier Code",h1:"Carrier",h2:"Code",h3:"",de:"Carrier Code",dv:"",ia:["FE"]},F16:{nm:"XFLTFLD25",an:"xFlightTrackerOriginCity",ft:"NV",ln:512,dc:0,lb:"Origin City",h1:"Origin",h2:"City",h3:"",de:"Origin City",dv:"",ia:["FE","LC"]},F17:{nm:"XFLTFLD23",an:"xFlightTrackerComments",ft:"NV",ln:512,dc:0,lb:"Comments",h1:"Comments",h2:"",h3:"",de:"Comments",dv:"",ia:["FE","LC"]},F18:{nm:"XFLTFLD24",an:"xFlightTrackerGate",ft:"NV",
ln:512,dc:0,lb:"Gate",h1:"Gate",h2:"",h3:"",de:"Gate",dv:"",ia:["FE","LC"]},F19:{nm:"XFLTFLD20",an:"xFlightTrackerDate",ft:"D",ln:10,dc:0,lb:"Flight Date",h1:"Flight",h2:"Date",h3:"",de:"Flight Date",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F20:{nm:"XFLTFLD03",an:"xFlightTrackerAirportCode",ft:"NV",ln:512,dc:0,lb:"Airport Code",h1:"Airport",h2:"Code",h3:"",de:"Airport Code",dv:"",ia:["FE","LC"]},F21:{nm:"XFLTFLD04",an:"xFlightTrackerAirportName",ft:"NV",ln:512,dc:0,lb:"Airport Name",h1:"Airport",h2:"Name",
h3:"",de:"Airport Name",dv:"",ia:["FE","LC"]},F22:{nm:"XFLTFLD12",an:"xFlightTrackerCountry",ft:"NV",ln:512,dc:0,lb:"Country",h1:"Country",h2:"",h3:"",de:"Country",dv:"",ia:["FE","LC"]},F23:{nm:"XFLTFLD13",an:"xFlightTrackerRegion",ft:"NV",ln:512,dc:0,lb:"Region",h1:"Region",h2:"",h3:"",de:"Region",dv:"",ia:["FE","LC"]},F24:{nm:"ARRIVALSORDEPARTURES",ft:"NV",ln:256,dc:0,lb:"ArrivalsorDepartures",h1:"ArrivalsorDepartures",h2:"",h3:"",de:"ArrivalsorDepartures",dv:""},F25:{nm:"XFLTFLD09",an:"xFlightTrackerStatus",
ft:"B",ln:1,dc:0,lb:"Status",h1:"Status",h2:"",h3:"",de:"Status",dv:false,ia:["ASQN"]},F26:{nm:"XFLTFLD11",an:"xFlightTrackerMessage",ft:"NV",ln:512,dc:0,lb:"Message",h1:"Message",h2:"",h3:"",de:"Message",dv:"",ia:["FE","LC"]},F27:{nm:"XDEMONUMB",an:"xDemoNumber",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Number","FRA":"Nombre","JPN":"??","LLL":"Number"}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],h2:" ",h3:" ",de:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],dv:0,
ia:["FE","RB"]},F28:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",
fd:Fd,rm:["dt"],pt:{Airlines:{da:"r"},Airports:{da:"r"},Aircraft:{da:"r"},Flights:{da:"r"},AirportFlightBoard:{da:"r"},AirportArrival:{da:"rw"},FlightDetail:{da:"rw"},AirportDeparture:{da:"rw"},AirportBoard:{da:"rw"},FlightDate:{da:"rw"},TypeofSearch:{da:"rw"},ArrivalsorDepartures:{da:"na"}},mt:{FlightSearchType:{ps:{"SearchType":{pt:"i"}}},FlightInformationSystem:{},GetData:{},RetrieveFlights:{},RetrieveAirportFlightBoards:{},GetAirlinesAvialble:{ps:{"AirlineCode":{pt:"i"}}},ShowDetails:{ps:{"Details":
{pt:"i"}}},FormatDateAndTime:{ps:{"iDateTime":{pt:"i"}}},GetAirliner:{ps:{"AirlineCode":{pt:"i"}}},GetAirlineLogo:{ps:{"AirlineCode":{pt:"i"}}},GetAircraftType:{ps:{"AircraftCode":{pt:"i"}}},UpdateAirlines:{}},ev:{SessionStarted:{},ShowFlights:{},SearchForFlights:{},SearchForFlightInformationSystem:{},ShowForFlightInformationSystem:{},ShowFlightDetail:{}},co:function(){cO.aN.call(this);var f=this.aF("XFLTOBJ01",Fd);var C0=this.cR("AIRLINES","PRIM_ACOL");var C1=this.cR("AIRPORTS","PRIM_ACOL");var C2=this.cR("FLIGHTDETAILS","PRIM_ACOL");
var C3=this.cR("AIRCRAFT","PRIM_ACOL");var C4=this.cR("AIRPORTFLIGHTSBOARD","PRIM_ACOL");this.cD("AIRPORTARRIVAL");this.cD("AIRPORTDEPARTURE");this.cD("FLIGHTDETAIL");C0.setCollects("XFLTOBJ02");C0.iC();C1.setCollects("XFLTOBJ03");C1.iC();C2.setCollects("XFLTOBJ04");C2.iC();C3.setCollects("XFLTOBJ06");C3.iC();C4.setCollects("XFLTOBJ05");C4.iC();C0.aLF({"XFLTFLD01":f.F7,"XFLTFLD02":f.F3,"XFLTFLD22":f.F8});C1.aLF({"XFLTFLD03":f.F20,"XFLTFLD04":f.F21,"XFLTFLD12":f.F22,"XFLTFLD13":f.F23});C2.aLF({"XFLTFLD08":f.F2,"XFLTFLD05":f.F11,"XFLTFLD06":f.F4,"XFLTFLD07":f.F12,"XFLTFLD15":f.F13,"XFLTFLD14":f.F14,"XFLTFLD16":f.F15,"XFLTFLD17":f.F9});
C3.aLF({"XFLTFLD17":f.F9,"XFLTFLD18":f.F10});C4.aLF({"XFLTFLD08":f.F2,"XFLTFLD05":f.F11,"XFLTFLD25":f.F16,"XFLTFLD06":f.F4,"XFLTFLD23":f.F17,"XFLTFLD14":f.F14,"XFLTFLD24":f.F18});var li=this.aL("XFLTOBJ01");li.FLIGHTS=l.cLT({"XFLTFLD08":f.F2,"XFLTFLD05":f.F11,"XFLTFLD06":f.F4,"XFLTFLD07":f.F12,"XFLTFLD15":f.F13,"XFLTFLD14":f.F14,"XFLTFLD16":f.F15,"XFLTFLD17":f.F9},null);li.FLIGHTSBOARD=l.cLT({"XFLTFLD08":f.F2,"XFLTFLD05":f.F11,"XFLTFLD25":f.F16,"XFLTFLD06":f.F4,"XFLTFLD23":f.F17,"XFLTFLD14":f.F14,"XFLTFLD24":f.F18},null);
}});cO.mthGETARRIVALORDEPARTURES=function(){var f=this.FLD.XFLTOBJ01,r=l.pR(this,cO,"GetArrivalorDepartures",54);var P0=r.cP("ARRIVALORDEPARTUREBOARD","PRIM_DC","UnicodeString");r.ln=54;{r.ln=57;P0.set(f.F24.get());}r.ln=59;return r.rV(P0.get());};cO.mthSETARRIVALORDEPARTURES=function(p0){var f=this.FLD.XFLTOBJ01,r=l.pR(this,cO,"SetArrivalorDepartures",61);var P0=r.cP("ARRIVALORDEPARTUREBOARD","PRIM_DC","UnicodeString");P0.set(p0);r.ln=61;{r.ln=64;f.F24.set(P0.get());}r.ln=66;r.e();};cO.mthFLIGHTSEARCHTYPE=function(p0)
{var r=l.mR(this,cO,"FlightSearchType",72);var P0=r.cPF("SEARCHTYPE",Fd.F1.Dc);P0.set(p0);r.ln=72;{r.ln=75;this.setTYPEOFSEARCH(P0.get());r.ln=77;this.fE("SEARCHFORFLIGHTS");}r.ln=79;r.e();};cO.mthFLIGHTINFORMATIONSYSTEM=function(){var r=l.mR(this,cO,"FlightInformationSystem",82);r.ln=82;{r.ln=84;this.fE("SEARCHFORFLIGHTINFORMATIONSYSTEM");}r.ln=86;r.e();};cO.mthGETDATA=function(){var m=this.REF,r=l.mR(this,cO,"GetData",89),mth=r;var C0=r.cDR("BEGIN","XFLTSRVMD","BEGINSESSION");C0.iC();C0.aH("COMPLETED",this,e1);
C0.aH("FAILED",this,e2);r.ln=89;{r.ln=93;C0.mthEXECUTEASYNC({},{LIST:{"XAIRLINENAMES":m.AIRLINES,"XAIRPORTNAMES":m.AIRPORTS,"AIRCRAFTLIST":m.AIRCRAFT}});}r.ln=107;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Begin.Completed",95,mth);r.ln=95;{r.ln=97;this.fE("SESSIONSTARTED");}r.ln=99;r.e();}function e2(sender,Ps){var r=l.eR(this,cO,"#Begin.Failed",101,mth);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");r.ln=101;{r.ln=103;l.WEB().mthALERT(P1.get());}r.ln=105;r.e();}};cO.mthRETRIEVEFLIGHTS=function()
{var li=this.LIST.XFLTOBJ01,f=this.FLD.XFLTOBJ01,m=this.REF,r=l.mR(this,cO,"RetrieveFlights",110),mth=r;var C0=r.cD("C0");var C1=r.cDR("GETFLIGHTS","XFLTSRVMD","GETFLIGHTS");C1.iC();C1.aH("COMPLETED",this,e3);r.ln=110;{r.ln=116;m.FLIGHTDETAILS.clearList();r.ln=118;C1.mthEXECUTE({FLD:{"XFLIGHTDATEDAY":l.d.Day(this.getFLIGHTDATE()),"XFLIGHTDATEMONTH":l.d.Month(this.getFLIGHTDATE()),"XFLIGHTDATEYEAR":l.d.Year(this.getFLIGHTDATE()),"XFLIGHTAIRPORTFROM":m.AIRPORTDEPARTURE.getAIRPORTCODE(),"XFLIGHTAIRPORTTO":m.AIRPORTARRIVAL.getAIRPORTCODE(),"SEARCHTYPE":this.getTYPEOFSEARCH()}},{FLD:{"XFLTFLD11":f.F26,"XFLTFLD09":f.F25,"XDEMONUMB":f.F27},LIST:{"XFLIGHTDETAILS":li.FLIGHTS}});
}r.ln=135;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#GetFlights.Completed",120,mth);r.ln=120;{r.ln=123;{var l1=li.FLIGHTS.selectList();while(l1.step()){r.ln=125;if(l.s.eq(cO.mthGETAIRLINESAVIALBLE.call(this,f.F2.get()),"")){continue;}r.ln=127;m.FLIGHTDETAILS.addEntry();r.ln=129;}l1.end();}r.ln=131;this.fE("SHOWFLIGHTS");}r.ln=133;r.e();}};cO.mthRETRIEVEAIRPORTFLIGHTBOARDS=function(){var li=this.LIST.XFLTOBJ01,f=this.FLD.XFLTOBJ01,m=this.REF,r=l.mR(this,cO,"RetrieveAirportFlightBoards",137),mth=r;
var C0=r.cDR("FLIGHTBOARDS","XFLTSRVMD","FLIGHTBOARDS");C0.iC();C0.aH("COMPLETED",this,e4);r.ln=137;{r.ln=141;m.AIRPORTFLIGHTSBOARD.clearList();r.ln=143;li.FLIGHTSBOARD.clearList();r.ln=145;C0.mthEXECUTE({FLD:{"XFLTFLD03":this.getAIRPORTBOARD().getAIRPORTCODE(),"XFLTFLD21":this.getARRIVALSORDEPARTURES()}},{LIST:{"AIRPORTFLIGHTSBOARD":li.FLIGHTSBOARD}});}r.ln=162;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#FlightBoards.Completed",147,mth);r.ln=147;{r.ln=149;{var l1=li.FLIGHTSBOARD.selectList();
while(l1.step()){r.ln=151;if(l.s.eq(cO.mthGETAIRLINER.call(this,f.F2.get()),"")){continue;}r.ln=153;m.AIRPORTFLIGHTSBOARD.addEntry();r.ln=155;}l1.end();}r.ln=157;this.fE("SHOWFORFLIGHTINFORMATIONSYSTEM");}r.ln=159;r.e();}};cO.mthGETAIRLINESAVIALBLE=function(p0){var f=this.FLD.XFLTOBJ01,m=this.REF,r=l.mR(this,cO,"GetAirlinesAvialble",166);var P0=r.cPF("AIRLINECODE",Fd.F2.Dc);var P1=r.cPF("AIRLINENAME",Fd.F3.Dc);P0.set(p0);r.ln=166;{r.ln=170;f.F28.set(lIO=m.AIRLINES.locateEntry(function(e){return l.eq(((e["XFLTFLD01"]!==u)?e["XFLTFLD01"]:f.F7.get()),((e["AIRLINECODE"]!==u)?e["AIRLINECODE"]:P0.get()))},null,true));
r.ln=172;if(lIO=="OK"){r.ln=174;P1.set(f.F3.get());}else{r.ln=178;P1.set("");}}r.ln=182;return r.rV(P1.get());};cO.mthSHOWDETAILS=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowDetails",185);var P0=r.cPD("DETAILS");P0=p0;r.ln=185;{r.ln=188;this.srFLIGHTDETAIL(l.cast(P0,"XFLTOBJ04"));r.ln=190;this.fE("SHOWFLIGHTDETAIL");}r.ln=192;r.e();};cO.mthFORMATDATEANDTIME=function(p0){var r=l.mR(this,cO,"FormatDateAndTime",195);var P0=r.cPF("IDATETIME",Fd.F4.Dc);var P1=r.cPF("RESULT",Fd.F4.Dc);P0.set(p0);var C0=r.cF("LFLIGHTDATE",Fd.F5.Dc);
var C1=r.cF("LFLIGHTTIME",Fd.F6.Dc);C0.iC();C1.iC();r.ln=195;{r.ln=203;C0.set(l.s.AsDate(l.s.RemoveAll(l.s.Substring(P0.get(),1,10),"-"),"CCYYMMDD"));r.ln=205;C1.set(l.s.AsTime(l.s.Substring(P0.get(),12,8),"HHSMMSSS"));r.ln=207;P1.set(l.s.Substitute("&1 &2",l.d.AsDisplayString(C0.get(),"DDXXBMMMMMMMMMBCCYY"),l.t.AsDisplayString(C1.get(),"HHSMMSSS")));}r.ln=209;return r.rV(P1.get());};cO.mthGETAIRLINER=function(p0){var f=this.FLD.XFLTOBJ01,m=this.REF,r=l.mR(this,cO,"GetAirliner",212);var P0=r.cPF("AIRLINECODE",Fd.F7.Dc);
var P1=r.cPF("AIRLINENAME",Fd.F3.Dc);P0.set(p0);r.ln=212;{r.ln=216;f.F28.set(lIO=m.AIRLINES.locateEntry(function(e){return l.eq(((e["AIRLINECODE"]!==u)?e["AIRLINECODE"]:P0.get()),((e["XFLTFLD01"]!==u)?e["XFLTFLD01"]:f.F7.get()))},null,true));r.ln=218;if(lIO=="OK"){r.ln=220;P1.set(f.F3.get());}else{r.ln=224;P1.set("");}}r.ln=228;return r.rV(P1.get());};cO.mthGETAIRLINELOGO=function(p0){var f=this.FLD.XFLTOBJ01,m=this.REF,r=l.mR(this,cO,"GetAirlineLogo",231);var P0=r.cPF("AIRLINECODE",Fd.F7.Dc);var P1=r.cPF("AIRLINELOGO",Fd.F8.Dc);
P0.set(p0);r.ln=231;{r.ln=235;f.F28.set(lIO=m.AIRLINES.locateEntry(function(e){return l.eq(((e["AIRLINECODE"]!==u)?e["AIRLINECODE"]:P0.get()),((e["XFLTFLD01"]!==u)?e["XFLTFLD01"]:f.F7.get()))},null,true));r.ln=237;P1.set(f.F8.get());}r.ln=239;return r.rV(P1.get());};cO.mthGETAIRCRAFTTYPE=function(p0){var f=this.FLD.XFLTOBJ01,m=this.REF,r=l.mR(this,cO,"GetAircraftType",242);var P0=r.cPF("AIRCRAFTCODE",Fd.F9.Dc);var P1=r.cPF("AIRCRAFTNAME",Fd.F10.Dc);P0.set(p0);r.ln=242;{r.ln=246;f.F28.set(lIO=m.AIRCRAFT.locateEntry(function(e){return l.eq(((e["AIRCRAFTCODE"]!==u)?e["AIRCRAFTCODE"]:P0.get()),((e["XFLTFLD17"]!==u)?e["XFLTFLD17"]:f.F9.get()))},null,true));
r.ln=248;P1.set(f.F10.get());}r.ln=250;return r.rV(P1.get());};cO.mthUPDATEAIRLINES=function(){var r=l.mR(this,cO,"UpdateAirlines",253);r.ln=253;{r.ln=255;this.fE("SHOWFLIGHTS");}r.ln=257;r.e();};cO.getAIRLINES=function(){return this.REF.AIRLINES;};cO.getAIRPORTS=function(){return this.REF.AIRPORTS;};cO.getAIRCRAFT=function(){return this.REF.AIRCRAFT;};cO.getFLIGHTS=function(){return this.REF.FLIGHTDETAILS;};cO.getAIRPORTFLIGHTBOARD=function(){return this.REF.AIRPORTFLIGHTSBOARD;};cO.getAIRPORTARRIVAL=function()
{return this.REF.AIRPORTARRIVAL;};cO.setAIRPORTARRIVAL=function(v){this.srAIRPORTARRIVAL(v);};cO.getFLIGHTDETAIL=function(){return this.REF.FLIGHTDETAIL;};cO.setFLIGHTDETAIL=function(v){this.srFLIGHTDETAIL(v);};cO.getAIRPORTDEPARTURE=function(){return this.REF.AIRPORTDEPARTURE;};cO.setAIRPORTDEPARTURE=function(v){this.srAIRPORTDEPARTURE(v);};cO.getAIRPORTBOARD=function(){return this.REF.AIRPORTDEPARTURE;};cO.setAIRPORTBOARD=function(v){this.srAIRPORTDEPARTURE(v);};cO.getFLIGHTDATE=function(){var f=this.FLD.XFLTOBJ01;
return f.F19.get();};cO.setFLIGHTDATE=function(v){var f=this.FLD.XFLTOBJ01;f.F19.set(v);};cO.getTYPEOFSEARCH=function(){var f=this.FLD.XFLTOBJ01;return f.F1.get();};cO.setTYPEOFSEARCH=function(v){var f=this.FLD.XFLTOBJ01;f.F1.set(v);};cO.getARRIVALSORDEPARTURES=function(){return this.mthGETARRIVALORDEPARTURES();};cO.setARRIVALSORDEPARTURES=function(v){this.mthSETARRIVALORDEPARTURES(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XFLTFLD21"});}{Fd.F2.Dc=function()
{this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XFLTFLD08"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XFLTFLD02"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XFLTFLD06"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"DATEX"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"TIMEX"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);
};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XFLTFLD01"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XFLTFLD22"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XFLTFLD17"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XFLTFLD18"});}{Fd.F25.Dc=function(){this.aN.call(this,Fd.F25);};l.cFC({co:Fd.F25.Dc,an:"PRIM_FLD",fn:"XFLTFLD09"});Fd.F25.pl=function(){this.aN.call(this);var C0=this.cR("FALSE","PRIM_PKIT");
var C1=this.cR("TRUE","PRIM_PKIT");C0.setCaption("False");C0.setDefault(true);C0.setParent(this);C0.setValue("False");C0.iC();C1.setCaption("True");C1.setParent(this);C1.setValue("True");C1.iC();};l.cFC({co:Fd.F25.pl,an:"PRIM_PKLT",fn:"XFLTFLD09",cn:"Picklist"});}cO.srAIRPORTARRIVAL=function(rn){this.sR("AIRPORTARRIVAL",rn);};cO.srAIRPORTDEPARTURE=function(rn){this.sR("AIRPORTDEPARTURE",rn);};cO.srFLIGHTDETAIL=function(rn){this.sR("FLIGHTDETAIL",rn);};},{rp:["PRIM_OBJT","PRIM_ACOL","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_DTIM","PRIM_PKLT"],
dc:["XFLTOBJ03","XFLTOBJ04","XFLTOBJ02","XFLTOBJ06","XFLTOBJ05"]});