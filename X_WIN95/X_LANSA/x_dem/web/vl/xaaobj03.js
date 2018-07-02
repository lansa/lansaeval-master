﻿LANSA.addComponent({id:"XAAOBJ03",nm:"xAccAssessorAssessmentData",ot:"rp",tp:"Reusable Part",de:"Assessments",tl:14020004},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XAAFLD21",an:"xAccAssessorAssesmentNumber",ft:"N",ln:24,dc:0,lb:"Acciedent Asses",h1:"Acciedent",h2:"Assessment",h3:"Claim",de:"Acciedent Assessment Claim Number",dv:"",ia:["FE","RB"]},F2:{nm:"XAAFLD34",an:"xAccAssessorAssessmentStatus",ft:"N",ln:1,dc:0,lb:"AssessmentStatu",
h1:"AssessmentStatus",h2:"",h3:"",de:"AssessmentStatus",dv:"",ia:["FE"]},F3:{nm:"XAAFLD22",an:"xAccAssessorDriverSurname",ft:"N",ln:25,dc:0,lb:"Driver Surname",h1:"Driver",h2:"Surname",h3:"",de:"Driver Surname",dv:"",ia:["FE"]},F4:{nm:"XAAFLD23",an:"xAccAssessorDriverGivenName",ft:"N",ln:25,dc:0,lb:"Driver Given Na",h1:"Driver",h2:"Given",h3:"Name",de:"Driver Given Name",dv:"",ia:["FE"]},F5:{nm:"XAAFLD24",an:"xAccAssessorVehicleReg",ft:"N",ln:10,dc:0,lb:"Vehicle Registr",h1:"Vehicle",h2:"Registration",
h3:"",de:"Vehicle Registration",dv:"",ia:["FE"]},F6:{nm:"XAAFLD25",an:"xAccAssessorVehicleMakeModel",ft:"N",ln:128,dc:0,lb:"Vehicle Make/Mo",h1:"Vehicle",h2:"Make/Model",h3:"",de:"Vehicle Make/Model",dv:"",ia:["FE"]},F7:{nm:"XAAFLD35",an:"xAccAssessorVehicleVIN",ft:"N",ln:17,dc:0,lb:"Vehicle Identif",h1:"Vehicle",h2:"Identification",h3:"Number",de:"Vehicle Identification Number",dv:"",ia:["FE","LC"]},F8:{nm:"XAAFLD26",an:"xAccAssessorAccidentDateTime",ft:"DT",ln:26,dc:0,lb:"Accident DateTi",h1:"Accident",
h2:"DateTime",h3:"",de:"Accident DateTime",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F9:{nm:"XAAFLD29",an:"xAccAssessorAccidentLongitude",ft:"P",ln:12,dc:9,lb:"Accident Longit",h1:"Accident",h2:"Longitude",h3:"",de:"Accident Longitude",dv:0,ia:["FE","RB"]},F10:{nm:"XAAFLD30",an:"xAccAssessorAccidentLatitude",ft:"P",ln:12,dc:9,lb:"Accident Latitu",h1:"Accident",h2:"Latitude",h3:"",de:"Accident Latitude",dv:0,ia:["FE","RB"]},F11:{nm:"XAAFLD28",an:"xAccAssessorAudioNotes",ft:"BL",ln:0,dc:0,lb:"Audio Notes",
h1:"Audio",h2:"Notes",h3:"",de:"Audio Notes",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F12:{nm:"XAAFLD20",an:"xAccAssessorAccidentNotes",ft:"VC",ln:8192,dc:0,lb:"Assessor Accide",h1:"Assessor",h2:"Accident",h3:"Notes",de:"Assessor Accident Notes",dv:"",ia:["FE","LC"]},F13:{nm:"XAAFLD37",an:"xAccAssessorFileNameAudio",ft:"N",ln:256,dc:0,lb:"File Name",h1:"File",h2:"Name",h3:"",de:"File Name",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{AssessmentNumber:{da:"rw"},AssessmentStatus:{da:"rw"
},DriverSurname:{da:"rw"},DriverGivenName:{da:"rw"},VehicleReg:{da:"rw"},VehicleVin:{da:"rw"},VehicleMakeModel:{da:"rw"},AccidentDateTime:{da:"rw"},AccidentLongitude:{da:"rw"},AccidentLatitude:{da:"rw"},FileNameAudio:{da:"rw"},AudioBlob:{da:"rw"},AccidentNotes:{da:"rw"},AccidentCordinates:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("XAAOBJ03",Fd);this.aLF({"XAAFLD21":f.F1,"XAAFLD34":f.F2,"XAAFLD22":f.F3,"XAAFLD23":f.F4,"XAAFLD24":f.F5,"XAAFLD25":f.F6,"XAAFLD35":f.F7,"XAAFLD26":f.F8,"XAAFLD29":f.F9,"XAAFLD30":f.F10,"XAAFLD28":f.F11,"XAAFLD20":f.F12,"XAAFLD37":f.F13});
var li=this.aL("XAAOBJ03");li.ASSESMENTSLIST=l.cLT({"XAAFLD21":f.F1,"XAAFLD34":f.F2,"XAAFLD22":f.F3,"XAAFLD23":f.F4,"XAAFLD24":f.F5,"XAAFLD25":f.F6,"XAAFLD35":f.F7,"XAAFLD26":f.F8,"XAAFLD29":f.F9,"XAAFLD30":f.F10,"XAAFLD28":f.F11,"XAAFLD20":f.F12,"XAAFLD37":f.F13},null);}});cO.mthGETCORDINATE=function(){var r=l.pR(this,cO,"GetCordinate",27);var P0=r.cP("OCORDINATES","PRIM_ALPH");r.ln=27;{r.ln=30;P0.set(l.cat(l.cat(l.cat(l.n.AsString(this.getACCIDENTLATITUDE()),"N "),l.n.AsString(this.getACCIDENTLONGITUDE())),"W"));
}r.ln=32;return r.rV(P0.get());};cO.getASSESSMENTNUMBER=function(){var f=this.FLD.XAAOBJ03;return f.F1.get();};cO.setASSESSMENTNUMBER=function(v){var f=this.FLD.XAAOBJ03;f.F1.set(v);};cO.getASSESSMENTSTATUS=function(){var f=this.FLD.XAAOBJ03;return f.F2.get();};cO.setASSESSMENTSTATUS=function(v){var f=this.FLD.XAAOBJ03;f.F2.set(v);};cO.getDRIVERSURNAME=function(){var f=this.FLD.XAAOBJ03;return f.F3.get();};cO.setDRIVERSURNAME=function(v){var f=this.FLD.XAAOBJ03;f.F3.set(v);};cO.getDRIVERGIVENNAME=function()
{var f=this.FLD.XAAOBJ03;return f.F4.get();};cO.setDRIVERGIVENNAME=function(v){var f=this.FLD.XAAOBJ03;f.F4.set(v);};cO.getVEHICLEREG=function(){var f=this.FLD.XAAOBJ03;return f.F5.get();};cO.setVEHICLEREG=function(v){var f=this.FLD.XAAOBJ03;f.F5.set(v);};cO.getVEHICLEVIN=function(){var f=this.FLD.XAAOBJ03;return f.F7.get();};cO.setVEHICLEVIN=function(v){var f=this.FLD.XAAOBJ03;f.F7.set(v);};cO.getVEHICLEMAKEMODEL=function(){var f=this.FLD.XAAOBJ03;return f.F6.get();};cO.setVEHICLEMAKEMODEL=function(v)
{var f=this.FLD.XAAOBJ03;f.F6.set(v);};cO.getACCIDENTDATETIME=function(){var f=this.FLD.XAAOBJ03;return f.F8.get();};cO.setACCIDENTDATETIME=function(v){var f=this.FLD.XAAOBJ03;f.F8.set(v);};cO.getACCIDENTLONGITUDE=function(){var f=this.FLD.XAAOBJ03;return f.F9.get();};cO.setACCIDENTLONGITUDE=function(v){var f=this.FLD.XAAOBJ03;f.F9.set(v);};cO.getACCIDENTLATITUDE=function(){var f=this.FLD.XAAOBJ03;return f.F10.get();};cO.setACCIDENTLATITUDE=function(v){var f=this.FLD.XAAOBJ03;f.F10.set(v);};cO.getFILENAMEAUDIO=function()
{var f=this.FLD.XAAOBJ03;return f.F13.get();};cO.setFILENAMEAUDIO=function(v){var f=this.FLD.XAAOBJ03;f.F13.set(v);};cO.getAUDIOBLOB=function(){var f=this.FLD.XAAOBJ03;return f.F11.get();};cO.setAUDIOBLOB=function(v){var f=this.FLD.XAAOBJ03;f.F11.set(v);};cO.getACCIDENTNOTES=function(){var f=this.FLD.XAAOBJ03;return f.F12.get();};cO.setACCIDENTNOTES=function(v){var f=this.FLD.XAAOBJ03;f.F12.set(v);};cO.getACCIDENTCORDINATES=function(){return this.mthGETCORDINATE();};},{rp:["PRIM_OBJT"]});