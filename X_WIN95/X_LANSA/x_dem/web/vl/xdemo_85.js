﻿LANSA.addComponent({id:"XDEMO_85",nm:"xDemoWebHandlingMultipleServerRequestsMonitor",ot:"rp",tp:"Reusable Part",de:"Multiple Server Request Monitor",tl:14020003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{RequestsPending:{da:"r"},RequestsFailed:{da:"r"},RequestsSuccessful:{da:"r"}},mt:{Reset:{},Add:{ps:{"Request":{pt:"i"}}},CompletedRequest:{ps:{"Request":{pt:"i"}}}},ev:{RequestAdded:{},RequestsCompleted:{}},co:function(){cO.aN.call(this);var C0=this.cR("DATAREQUESTSPENDING","PRIM_ACOL");
var C1=this.cR("DATAREQUESTSSUCCESSFUL","PRIM_ACOL");var C2=this.cR("DATAREQUESTSFAILED","PRIM_ACOL");C0.setCollects("PRIM_WEB.DataRequest");C0.iC();C1.setCollects("PRIM_WEB.DataRequest");C1.iC();C2.setCollects("PRIM_WEB.DataRequest");C2.iC();C0.aH("COMPLETED",this,e1);C0.aH("FAILED",this,e2);}});cO.mthRESET=function(){var m=this.REF,r=l.mR(this,cO,"Reset",19);r.ln=19;{r.ln=22;m.DATAREQUESTSFAILED.mthREMOVEALL();r.ln=23;m.DATAREQUESTSPENDING.mthREMOVEALL();r.ln=24;m.DATAREQUESTSSUCCESSFUL.mthREMOVEALL();
}r.ln=26;r.e();};cO.mthADD=function(p0){var m=this.REF,r=l.mR(this,cO,"Add",28);var P0=r.cPD("REQUEST");P0=p0;r.ln=28;{r.ln=32;m.DATAREQUESTSPENDING.mthINSERT(P0);r.ln=35;this.fE("REQUESTADDED");}r.ln=37;r.e();};function e1(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#DataRequestsPending<>.Completed",39);r.ln=39;{r.ln=42;m.DATAREQUESTSSUCCESSFUL.mthINSERT(SENDER);r.ln=43;cO.mthCOMPLETEDREQUEST.call(this,SENDER);}r.ln=45;r.e();};function e2(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#DataRequestsPending<>.Failed",47);
r.ln=47;{r.ln=50;m.DATAREQUESTSFAILED.mthINSERT(SENDER);r.ln=51;cO.mthCOMPLETEDREQUEST.call(this,SENDER);}r.ln=53;r.e();};cO.mthCOMPLETEDREQUEST=function(p0){var m=this.REF,r=l.mR(this,cO,"CompletedRequest",55);var P0=r.cPD("REQUEST");P0=p0;r.ln=55;{r.ln=59;m.DATAREQUESTSPENDING.mthREMOVE(P0);r.ln=61;if(m.DATAREQUESTSPENDING.getIsEmpty()){r.ln=63;this.fE("REQUESTSCOMPLETED");}}r.ln=67;r.e();};cO.getREQUESTSPENDING=function(){return this.REF.DATAREQUESTSPENDING;};cO.getREQUESTSFAILED=function(){return this.REF.DATAREQUESTSFAILED;
};cO.getREQUESTSSUCCESSFUL=function(){return this.REF.DATAREQUESTSSUCCESSFUL;};},{rp:["PRIM_OBJT","PRIM_ACOL"]});