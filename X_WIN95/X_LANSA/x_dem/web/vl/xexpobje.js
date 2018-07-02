﻿LANSA.addComponent({id:"XEXPOBJE",nm:"xEXPobject",ot:"rp",tp:"Reusable Part",de:"Expense Object",tl:14020004},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDA("1900-01-01");var Fd={F1:{nm:"XEXPHID",an:"xExpenseID",ft:"I",ln:4,dc:0,lb:"Expense Identif",h1:"Expense",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Expense Identification",dv:0,ia:["FE","RB"]},F2:{nm:"XEXPSTS",an:"xExpenseStatus",ft:"A",ln:10,dc:0,lb:"Status",
h1:"Status",h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Status",dv:"",ia:["FE","LC"]},F3:{nm:"XEXPENSET",an:"xExpenseTotal",ft:"P",ln:7,dc:2,ec:"1",lb:{"ENG":"Expense Total","FRA":"Unit Price","JPN":"Expense Total","LLL":"Expense Total"}[cL],h1:{"ENG":"Expense Total","FRA":"Unit","JPN":"Expense Total","LLL":"Expense Total"}[cL],h2:{"ENG":" ","FRA":"Price","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:{"ENG":"Expense Total","FRA":"Unit Price","JPN":"Expense Total","LLL":"Expense Total"}[cL],
dv:0,ia:["FE","RB"]},F4:{nm:"XEXPDATE",an:"xExpenseDate",ft:"D",ln:10,dc:0,lb:"Date",h1:"Date",h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Date",dv:c1,ia:["ASQN","FE","ISO"]},F5:{nm:"XMERCNAME",an:"xMerchantName",ft:"NV",ln:100,dc:0,lb:"Name",h1:"Name",h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Name",dv:"",ia:["FE","LC"]},F6:{nm:"XCATEDESC",an:"xCategoryDescription",ft:"NV",ln:100,dc:0,lb:"Description",
h1:"Description",h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Description",dv:"",ia:["FE","LC"]},F7:{nm:"XEXPITMID",an:"xExpenseItemID",ft:"I",ln:4,dc:0,lb:"Item ID",h1:"Item",h2:"ID",h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Item ID",dv:0,ia:["FE","RB"]},F8:{nm:"STD_AMNT",ft:"P",ln:9,dc:2,ec:"A",lb:{"ENG":"Amount","FRA":"Montant","JPN":"Amount","LLL":"Amount"}[cL],h1:{"ENG":"Amount","FRA":"Montant","JPN":"Amount","LLL":"Amount"}[cL],h2:" ",
h3:" ",de:{"ENG":"Standard AMOUNT","FRA":"Montant Standard","JPN":"Standard AMOUNT","LLL":"Standard AMOUNT"}[cL],dv:0,ia:["FE","RB"]},F9:{nm:"XEXPNOTES",an:"xExpenseItemNotes",ft:"NV",ln:2000,dc:0,lb:"Notes",h1:"Notes",h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:"Notes",dv:"",ia:["FE","LC"]},F10:{nm:"XEXPENSED",an:"xExpenseDateSubmitted",ft:"DT",ln:26,dc:0,lb:{"ENG":"Date Submitted","FRA":"Date","JPN":"Date Submitted","LLL":"Date Submitted"}[cL],
h1:{"ENG":"Date Submitted","FRA":"Date","JPN":"Date Submitted","LLL":"Date Submitted"}[cL],h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:{"ENG":"Date Submitted","FRA":"Date","JPN":"Date Submitted","LLL":"Date Submitted"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F11:{nm:"XEXPENSEA",an:"xExpenseDateApproved",ft:"DT",ln:26,dc:0,lb:{"ENG":"Date Approved","FRA":"Date","JPN":"Date Approved","LLL":"Date Approved"}[cL],h1:{"ENG":"Date Approved","FRA":"Date","JPN":"Date Approved","LLL":"Date Approved"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:{"ENG":"Date Approved","FRA":"Date","JPN":"Date Approved","LLL":"Date Approved"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F12:{nm:"XEXPDESC",an:"xExpenseDescription",ft:"NV",ln:50,dc:0,lb:{"ENG":"Description","FRA":"Notes","JPN":"Description","LLL":"Description"}[cL],h1:{"ENG":"Description","FRA":"Notes","JPN":"Description","LLL":"Description"}[cL],h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],de:{"ENG":"Description","FRA":"Notes","JPN":"Description","LLL":"Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{uDate:{da:"r"},uDateSubmitted:{da:"r"},uDateApproved:{da:"r"},uMerchant:{da:"r"},uNotes:{da:"r"},uCategoryDescription:{da:"r"},uExpenseDescription:{da:"r"},uExpenseItemId:{da:"r"},uExpenseId:{da:"r"},uExpenseStatus:{da:"r"},uExpenseTotal:{da:"r"},uLineTotal:{da:"r"},uDisplayAmount:{da:"na"},uShowCategory:{
da:"rw"}},mt:{ContainsText:{ps:{"Text":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XEXPOBJE",Fd);var C0=this.cR("SHOWCATEGORY","PRIM_BOLN");C0.iC();this.aLF({"XEXPHID":f.F1,"XEXPSTS":f.F2,"XEXPENSET":f.F3,"XEXPDATE":f.F4,"XMERCNAME":f.F5,"XCATEDESC":f.F6,"XEXPITMID":f.F7,"STD_AMNT":f.F8,"XEXPNOTES":f.F9,"XEXPENSED":f.F10,"XEXPENSEA":f.F11,"XEXPDESC":f.F12});}});cO.mthGETDISPLAYAMOUNT=function(){var f=this.FLD.XEXPOBJE,r=l.pR(this,cO,"GetDisplayAmount",28);var P0=r.cP("RESULT","PRIM_ALPH");
r.ln=28;{r.ln=31;P0.set(l.cat("$",l.n.AsDisplayString(f.F8.get(),9,2)));}r.ln=33;return r.rV(P0.get());};cO.mthCONTAINSTEXT=function(p0){var f=this.FLD.XEXPOBJE,r=l.mR(this,cO,"ContainsText",39);var P0=r.cP("TEXT","PRIM_DC","UnicodeString");var P1=r.cP("RESULT","PRIM_BOLN");P0.set(p0);r.ln=39;{r.ln=43;P1.set(true);r.ln=45;if(l.s.Contains(f.F5.get(),P0.get())){return r.rV(P1.get());}r.ln=51;if(l.s.Contains(f.F9.get(),P0.get())){return r.rV(P1.get());}r.ln=57;if(l.s.Contains(this.getUDISPLAYAMOUNT(),P0.get()))
{return r.rV(P1.get());}r.ln=63;P1.set(false);}r.ln=65;return r.rV(P1.get());};cO.getUDATE=function(){var f=this.FLD.XEXPOBJE;return f.F4.get();};cO.getUDATESUBMITTED=function(){var f=this.FLD.XEXPOBJE;return f.F10.get();};cO.getUDATEAPPROVED=function(){var f=this.FLD.XEXPOBJE;return f.F11.get();};cO.getUMERCHANT=function(){var f=this.FLD.XEXPOBJE;return f.F5.get();};cO.getUNOTES=function(){var f=this.FLD.XEXPOBJE;return f.F9.get();};cO.getUCATEGORYDESCRIPTION=function(){var f=this.FLD.XEXPOBJE;return f.F6.get();
};cO.getUEXPENSEDESCRIPTION=function(){var f=this.FLD.XEXPOBJE;return f.F12.get();};cO.getUEXPENSEITEMID=function(){var f=this.FLD.XEXPOBJE;return f.F7.get();};cO.getUEXPENSEID=function(){var f=this.FLD.XEXPOBJE;return f.F1.get();};cO.getUEXPENSESTATUS=function(){var f=this.FLD.XEXPOBJE;return f.F2.get();};cO.getUEXPENSETOTAL=function(){var f=this.FLD.XEXPOBJE;return f.F3.get();};cO.getULINETOTAL=function(){var f=this.FLD.XEXPOBJE;return f.F8.get();};cO.getUDISPLAYAMOUNT=function(){return this.mthGETDISPLAYAMOUNT();
};cO.getUSHOWCATEGORY=function(){return this.REF.SHOWCATEGORY.get();};cO.setUSHOWCATEGORY=function(v){this.REF.SHOWCATEGORY.set(v);};},{rp:["PRIM_OBJT","PRIM_BOLN"]});