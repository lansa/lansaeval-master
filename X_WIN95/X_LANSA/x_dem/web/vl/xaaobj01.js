﻿LANSA.addComponent({id:"XAAOBJ01",nm:"xAccAssessorApplicationData",ot:"rp",tp:"Reusable Part",de:"Assessor Data",tl:14020004},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOBLOB",an:"xDemoBlob",ft:"BL",ln:0,dc:0,lb:"Blob",h1:"Blob",h2:" ",h3:" ",de:"Blob",dv:l.SqlNull,ia:["ASQN","LC"]},F2:{nm:"XAAFLD21",an:"xAccAssessorAssesmentNumber",ft:"N",ln:24,dc:0,lb:"Acciedent Asses",h1:"Acciedent",h2:"Assessment",h3:"Claim",de:"Acciedent Assessment Claim Number",
dv:"",ia:["FE","RB"]},F3:{nm:"XAAFLD34",an:"xAccAssessorAssessmentStatus",ft:"N",ln:1,dc:0,lb:"AssessmentStatu",h1:"AssessmentStatus",h2:"",h3:"",de:"AssessmentStatus",dv:"",ia:["FE"]},F4:{nm:"XAAFLD22",an:"xAccAssessorDriverSurname",ft:"N",ln:25,dc:0,lb:"Driver Surname",h1:"Driver",h2:"Surname",h3:"",de:"Driver Surname",dv:"",ia:["FE"]},F5:{nm:"XAAFLD23",an:"xAccAssessorDriverGivenName",ft:"N",ln:25,dc:0,lb:"Driver Given Na",h1:"Driver",h2:"Given",h3:"Name",de:"Driver Given Name",dv:"",ia:["FE"]
},F6:{nm:"XAAFLD24",an:"xAccAssessorVehicleReg",ft:"N",ln:10,dc:0,lb:"Vehicle Registr",h1:"Vehicle",h2:"Registration",h3:"",de:"Vehicle Registration",dv:"",ia:["FE"]},F7:{nm:"XAAFLD25",an:"xAccAssessorVehicleMakeModel",ft:"N",ln:128,dc:0,lb:"Vehicle Make/Mo",h1:"Vehicle",h2:"Make/Model",h3:"",de:"Vehicle Make/Model",dv:"",ia:["FE"]},F8:{nm:"XAAFLD35",an:"xAccAssessorVehicleVIN",ft:"N",ln:17,dc:0,lb:"Vehicle Identif",h1:"Vehicle",h2:"Identification",h3:"Number",de:"Vehicle Identification Number",dv:"",
ia:["FE","LC"]},F9:{nm:"XAAFLD26",an:"xAccAssessorAccidentDateTime",ft:"DT",ln:26,dc:0,lb:"Accident DateTi",h1:"Accident",h2:"DateTime",h3:"",de:"Accident DateTime",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F10:{nm:"XAAFLD29",an:"xAccAssessorAccidentLongitude",ft:"P",ln:12,dc:9,lb:"Accident Longit",h1:"Accident",h2:"Longitude",h3:"",de:"Accident Longitude",dv:0,ia:["FE","RB"]},F11:{nm:"XAAFLD30",an:"xAccAssessorAccidentLatitude",ft:"P",ln:12,dc:9,lb:"Accident Latitu",h1:"Accident",h2:"Latitude",
h3:"",de:"Accident Latitude",dv:0,ia:["FE","RB"]},F12:{nm:"XAAFLD28",an:"xAccAssessorAudioNotes",ft:"BL",ln:0,dc:0,lb:"Audio Notes",h1:"Audio",h2:"Notes",h3:"",de:"Audio Notes",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F13:{nm:"XAAFLD20",an:"xAccAssessorAccidentNotes",ft:"VC",ln:8192,dc:0,lb:"Assessor Accide",h1:"Assessor",h2:"Accident",h3:"Notes",de:"Assessor Accident Notes",dv:"",ia:["FE","LC"]},F14:{nm:"XAAFLD37",an:"xAccAssessorFileNameAudio",ft:"N",ln:256,dc:0,lb:"File Name",h1:"File",h2:"Name",h3:"",
de:"File Name",dv:"",ia:["FE","LC"]},F15:{nm:"XAAFLD32",an:"xAccAssessorImageNumber",ft:"P",ln:4,dc:0,lb:"Image Sequence",h1:"Image",h2:"Sequence",h3:"",de:"Image Sequence",dv:0,ia:["FE","RB"]},F16:{nm:"XAAFLD27",an:"xAccAssessorDamageImage",ft:"BL",ln:0,dc:0,lb:"Damage Image",h1:"Damage",h2:"Image",h3:"",de:"Damage Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F17:{nm:"XAAFLD38",an:"xAccAssessorFileNameImage",ft:"N",ln:256,dc:0,lb:"File Name",h1:"File",h2:"Name",h3:"",de:"File Name",dv:"",ia:["FE","LC"]
}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{AssessmentData:{da:"r"},AssessmentImages:{da:"r"},AssessmentImagesToSubmit:{da:"r"},CurrentAssessment:{da:"rw"},CompletedAssessment:{da:"rw"},CurrentImage:{da:"rw"}},mt:{GetAssessments:{},SubmitAssessment:{},AudioFileRecieved:{ps:{"Base64":{pt:"i"},"MimeType":{pt:"i"},"AudioFile":{pt:"i"}}},ImageRecieved:{},CreateBlob:{ps:{"Base64":{pt:"i"},"MimeType":{pt:"i"}}},GetCompleted:{ps:{"ViewCompleted":{pt:"i"}}}},ev:{InitialDataRecieved:{},Submitted:{}},co:function()
{cO.aN.call(this);var f=this.aF("XAAOBJ01",Fd);var C0=this.cR("ASSESSMENTS","PRIM_ACOL");var C1=this.cR("ASSESSMENTIMAGES","PRIM_ACOL");var C2=this.cR("ASSESSMENTIMAGESTOSUBMIT","PRIM_ACOL");this.cD("CURRENTASSESSMENT");this.cD("CURRENTIMAGE");this.cD("COMPLETEDASSESSMENT");var C6=this.cA("APPLICATIONCONTROL","XAAOBJ02");var C7=this.cA("APPLICATIONSETTINGS","XAAOBJ08");C0.setCollects("XAAOBJ03");C0.iC();C1.setCollects("XAAOBJ05");C1.iC();C2.setCollects("XAAOBJ05");C2.iC();if((C6!=null)&&(C6.iI()==false))
{C6.iC();}if((C7!=null)&&(C7.iI()==false)){C7.iC();}C0.aLF({"XAAFLD21":f.F2,"XAAFLD34":f.F3,"XAAFLD22":f.F4,"XAAFLD23":f.F5,"XAAFLD24":f.F6,"XAAFLD25":f.F7,"XAAFLD35":f.F8,"XAAFLD26":f.F9,"XAAFLD29":f.F10,"XAAFLD30":f.F11,"XAAFLD28":f.F12,"XAAFLD20":f.F13,"XAAFLD37":f.F14});C1.aLF({"XAAFLD21":f.F2,"XAAFLD32":f.F15,"XAAFLD27":f.F16,"XAAFLD38":f.F17});C2.aLF({"XAAFLD21":f.F2,"XAAFLD32":f.F15,"XAAFLD27":f.F16,"XAAFLD38":f.F17});}});cO.mthGETASSESSMENTS=function(){var m=this.REF,r=l.mR(this,cO,"GetAssessments",44),mth=r;
var C0=r.cDR("GETTODAYSASSESSMENTS","XAASRV01","GETASSESSMENTS");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=44;{r.ln=48;C0.mthEXECUTE({},{LIST:{"ASSESMENTSLIST":m.ASSESSMENTS}});}r.ln=56;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#GetTodaysAssessments.Completed",50,mth);r.ln=50;{r.ln=52;this.fE("INITIALDATARECIEVED");}r.ln=54;r.e();}};cO.mthSUBMITASSESSMENT=function(){var f=this.FLD.XAAOBJ01,m=this.REF,r=l.mR(this,cO,"SubmitAssessment",59),mth=r;var C0=r.cDR("SUBMIT","XAASRV01","SUBMITASSESSMENT");
C0.iC();C0.aH("COMPLETED",this,e2);r.ln=59;{r.ln=63;{var l1=m.ASSESSMENTS.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=65;if(l.ne(m.CURRENTASSESSMENT.getASSESSMENTNUMBER(),ITEM.getASSESSMENTNUMBER())){continue;}r.ln=67;ITEM.setASSESSMENTSTATUS("C");f.F3.set("C");r.ln=68;f.F2.set(ITEM.getASSESSMENTNUMBER());r.ln=69;f.F4.set(ITEM.getDRIVERSURNAME());r.ln=70;f.F5.set(ITEM.getDRIVERGIVENNAME());r.ln=71;f.F6.set(ITEM.getVEHICLEREG());r.ln=72;f.F7.set(ITEM.getVEHICLEMAKEMODEL());r.ln=73;f.F9.set(ITEM.getACCIDENTDATETIME());
r.ln=74;f.F8.set(ITEM.getVEHICLEVIN());r.ln=75;f.F10.set(ITEM.getACCIDENTLONGITUDE());r.ln=76;f.F11.set(ITEM.getACCIDENTLATITUDE());r.ln=77;ITEM.setACCIDENTNOTES(m.CURRENTASSESSMENT.getACCIDENTNOTES());f.F13.set(m.CURRENTASSESSMENT.getACCIDENTNOTES());r.ln=78;ITEM.setAUDIOBLOB(m.CURRENTASSESSMENT.getAUDIOBLOB());f.F12.set(m.CURRENTASSESSMENT.getAUDIOBLOB());r.ln=80;break;r.ln=82;}l1.end();r.dR("ITEM");}r.ln=84;{var l1=m.ASSESSMENTIMAGES.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=86;
if(l.ne(m.CURRENTASSESSMENT.getASSESSMENTNUMBER(),ITEM.getASSESSMENTNUMBER())){continue;}r.ln=88;m.ASSESSMENTIMAGESTOSUBMIT.mthINSERT(ITEM);r.ln=90;}l1.end();r.dR("ITEM");}r.ln=92;C0.mthEXECUTE({FLD:{"XAAFLD21":f.F2.get(),"XAAFLD34":f.F3.get(),"XAAFLD22":f.F4.get(),"XAAFLD23":f.F5.get(),"XAAFLD24":f.F6.get(),"XAAFLD25":f.F7.get(),"XAAFLD35":f.F8.get(),"XAAFLD26":f.F9.get(),"XAAFLD29":f.F10.get(),"XAAFLD30":f.F11.get(),"XAAFLD28":f.F12.get(),"XAAFLD20":f.F13.get()},LIST:{"ASSESSMENTIMAGES":m.ASSESSMENTIMAGES},sm:"M"},{});
}r.ln=104;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#Submit.Completed",94,mth);r.ln=94;{r.ln=96;m.ASSESSMENTIMAGESTOSUBMIT.mthREMOVEALL();r.ln=98;this.fE("SUBMITTED");r.ln=100;this.srCURRENTASSESSMENT(null);}r.ln=102;r.e();}};cO.mthAUDIOFILERECIEVED=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"AudioFileRecieved",107);var P0=r.cP("BASE64","PRIM_ALPH");var P1=r.cP("MIMETYPE","PRIM_ALPH");var P2=r.cP("AUDIOFILE","PRIM_ALPH");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=107;{r.ln=112;m.CURRENTASSESSMENT.setFILENAMEAUDIO(P2.get());
r.ln=114;m.CURRENTASSESSMENT.setAUDIOBLOB(cO.mthCREATEBLOB.call(this,P0.get(),P1.get()));}r.ln=116;r.e();};cO.mthIMAGERECIEVED=function(){var m=this.REF,r=l.mR(this,cO,"ImageRecieved",119);var C0=r.cR("ITEMFOUND","PRIM_BOLN");C0.iC();r.ln=119;{r.ln=123;{var l1=m.ASSESSMENTIMAGES.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=125;if(l.or(l.ne(m.CURRENTASSESSMENT.getASSESSMENTNUMBER(),ITEM.getASSESSMENTNUMBER()),l.n.ne(ITEM.getIMAGENUMBER(),m.CURRENTIMAGE.getIMAGENUMBER()))){continue;}r.ln=127;
C0.set(true);r.ln=129;ITEM.setFILENAMEIMAGE(m.CURRENTIMAGE.getFILENAMEIMAGE());r.ln=131;ITEM.setIMAGEBLOB(m.CURRENTIMAGE.getIMAGEBLOB());r.ln=133;}l1.end();r.dR("ITEM");}r.ln=135;if(l.tB(l.not(C0.get()))){r.ln=137;m.ASSESSMENTIMAGES.mthINSERT(m.CURRENTIMAGE);}r.ln=141;this.srCURRENTIMAGE(null);}r.ln=143;r.e();};cO.mthCREATEBLOB=function(p0,p1){var r=l.mR(this,cO,"CreateBlob",146);var P0=r.cP("BASE64","PRIM_ALPH");var P1=r.cP("MIMETYPE","PRIM_ALPH");var P2=r.cPF("RESULT",Fd.F1.Dc);P0.set(p0);P1.set(p1);
r.ln=146;{r.ln=151;P2.set(l.WEB().mthCREATEBLOB(P0.get(),P1.get()));}r.ln=153;return r.rV(P2.get());};cO.mthGETCOMPLETED=function(p0){var f=this.FLD.XAAOBJ01,m=this.REF,r=l.mR(this,cO,"GetCompleted",156),mth=r;var P0=r.cPD("VIEWCOMPLETED");P0=p0;var C0=r.cDR("GETDETAILS","XAASRV01","GETACCIDENTDETAILS");C0.iC();C0.aH("COMPLETED",this,e3);r.ln=156;{r.ln=161;this.srCOMPLETEDASSESSMENT(P0);r.ln=163;C0.mthEXECUTE({FLD:{"XAAFLD21":m.COMPLETEDASSESSMENT.getASSESSMENTNUMBER()}},{FLD:{"XAAFLD20":f.F13,"XAAFLD28":f.F12},LIST:{"ASSESSMENTIMAGES":m.ASSESSMENTIMAGES}});
}r.ln=175;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#GetDetails.Completed",165,mth);r.ln=165;{r.ln=167;m.COMPLETEDASSESSMENT.setACCIDENTNOTES(f.F13.get());r.ln=169;m.COMPLETEDASSESSMENT.setAUDIOBLOB(f.F12.get());r.ln=171;m.APPLICATIONCONTROL.ref.mthSHOWCOMPLETED();}r.ln=173;r.e();}};cO.getASSESSMENTDATA=function(){return this.REF.ASSESSMENTS;};cO.getASSESSMENTIMAGES=function(){return this.REF.ASSESSMENTIMAGES;};cO.getASSESSMENTIMAGESTOSUBMIT=function(){return this.REF.ASSESSMENTIMAGESTOSUBMIT;
};cO.getCURRENTASSESSMENT=function(){return this.REF.CURRENTASSESSMENT;};cO.setCURRENTASSESSMENT=function(v){this.srCURRENTASSESSMENT(v);};cO.getCOMPLETEDASSESSMENT=function(){return this.REF.COMPLETEDASSESSMENT;};cO.setCOMPLETEDASSESSMENT=function(v){this.srCOMPLETEDASSESSMENT(v);};cO.getCURRENTIMAGE=function(){return this.REF.CURRENTIMAGE;};cO.setCURRENTIMAGE=function(v){this.srCURRENTIMAGE(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOBLOB"});}cO.srCURRENTASSESSMENT=function(rn)
{this.sR("CURRENTASSESSMENT",rn);};cO.srCURRENTIMAGE=function(rn){this.sR("CURRENTIMAGE",rn);};cO.srCOMPLETEDASSESSMENT=function(rn){this.sR("COMPLETEDASSESSMENT",rn);};},{rc:["XAAOBJ02","XAAOBJ08"],rp:["PRIM_OBJT","PRIM_ACOL","PRIM_WEB.DataRequest","PRIM_FLD"],dc:["XAAOBJ03","XAAOBJ05"],dp:["PRIM_BOLN"]});