﻿LANSA.addComponent({id:"XDEMOEDI",nm:"xDemoEditTimer",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Edit timer supporting delayed entry",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{ActiveControl:{da:"r"}},mt:{Stop:{},Start:{},Restart:{},Tick:{}},ev:{Ticked:{ps:{"Control":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("GTIMER","PRIM_TIMR");this.cD("GACTIVECONTROL");C0.setInterval(300);C0.setStartup("MANUAL");C0.iC();C0.aH("TICK",this,e1);}});cO.mthSETACTIVECONTROL=function(p0)
{var m=this.REF,r=l.pR(this,cO,"SetActiveControl",13);var P0=r.cPD("CONTROL");P0=r.sR("CONTROL",p0);r.ln=13;{r.ln=16;if((m.GACTIVECONTROL!==P0)){r.ln=18;if(m.GTIMER.getIsStarted()){r.ln=21;this.mthTICK();r.ln=24;this.mthRESTART();}r.ln=29;this.setrefGACTIVECONTROL(P0);}}r.ln=33;r.e();};cO.mthSTOP=function(){var m=this.REF,r=l.mR(this,cO,"Stop",35);r.ln=35;{r.ln=37;m.GTIMER.mthSTOP();}r.ln=39;r.e();};cO.mthSTART=function(){var m=this.REF,r=l.mR(this,cO,"Start",41);r.ln=41;{r.ln=43;m.GTIMER.mthSTART();
}r.ln=45;r.e();};cO.mthRESTART=function(){var m=this.REF,r=l.mR(this,cO,"Restart",47);r.ln=47;{r.ln=49;m.GTIMER.mthSTOP();r.ln=50;m.GTIMER.mthSTART();}r.ln=52;r.e();};cO.mthTICK=function(){var m=this.REF,r=l.mR(this,cO,"Tick",54);r.ln=54;{r.ln=57;m.GTIMER.mthSTOP();r.ln=60;{var eP=l.ePs();eP.cD("CONTROL");eP.sR("CONTROL",m.GACTIVECONTROL);this.fE("TICKED",eP);eP.e();}}r.ln=62;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#gTimer.Tick",64);r.ln=64;{r.ln=66;this.mthTICK();}r.ln=68;r.e();};cO.getACTIVECONTROL=function()
{return this.REF.GACTIVECONTROL;};cO.setACTIVECONTROL=function(v){this.mthSETACTIVECONTROL(v);};cO.setrefGACTIVECONTROL=function(rn){this.sR("GACTIVECONTROL",rn);};},{rp:["PRIM_OBJT","PRIM_TIMR"],dp:["PRIM_OBJT"]});