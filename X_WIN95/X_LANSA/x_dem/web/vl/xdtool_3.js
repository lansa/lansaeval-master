﻿LANSA.addComponent({id:"XDTOOL_3",nm:"xDToolsDataEventNotification",ot:"rp",tp:"Reusable Part",de:"Event Notifcation",tl:14020003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{Origin:{da:"na"},Part:{da:"r"},Property:{da:"r"},Reason:{da:"r"}},co:function(){cO.aN.call(this);this.cD("GPART");var C1=this.cR("GREASON","PRIM_ALPH");var C2=this.cR("GPROPERTY","PRIM_ALPH");this.cD("GORIGIN");C1.iC();C2.iC();}});cO.mthGETORIGIN=function(){var m=this.REF,r=l.pR(this,cO,"GetOrigin",13);var P0=r.cPD("PROPERTY");
r.ln=13;{r.ln=16;if((m.GORIGIN==null)){r.ln=18;P0=r.sR("P0",this);}else{r.ln=22;P0=r.sR("P0",m.GORIGIN);}}r.ln=26;return r.rR(P0);};cO.mthCONSTRUCTOR=function(p0,p1,p2,p3){var m=this.REF,r=l.cR(this,cO,"Constructor");var P0=r.cP("PROPERTY","PRIM_ALPH");var P1=r.cP("REASON","PRIM_ALPH");var P2=r.cPD("PART");var P3=r.cPD("ORIGIN");P0.set(p0);P1.set(p1);P2=p2;P3=(p3===u)?(null):(p3);{r.ln=34;this.srGPART(P2);r.ln=35;m.GPROPERTY.set(P0.get());r.ln=36;m.GREASON.set(P1.get());r.ln=37;this.srGORIGIN(P3);
}r.ln=39;return r.rN(this);};cO.getORIGIN=function(){return this.mthGETORIGIN();};cO.getPART=function(){return this.REF.GPART;};cO.getPROPERTY=function(){return this.REF.GPROPERTY.get();};cO.getREASON=function(){return this.REF.GREASON.get();};cO.srGPART=function(rn){this.sR("GPART",rn);};cO.srGORIGIN=function(rn){this.sR("GORIGIN",rn);};},{rp:["PRIM_OBJT","PRIM_ALPH"],dc:["XDTOOL_3"],dp:["PRIM_OBJT"]});