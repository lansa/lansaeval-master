﻿LANSA.addComponent({id:"XDEMOONO",nm:"xDemoOnOff",ot:"rp",tp:"Reusable Part",de:"On/Off button",tl:14020003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{On:{da:"r"}},ev:{Changed:{ps:{"On":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("COLUMN","PRIM_TBLO","Column");var C3=this.cR("COLUMN_2","PRIM_TBLO","Column");var C4=this.cR("COLUMN_3","PRIM_TBLO","Column");var C5=this.cR("SWITCH","PRIM_PANL");var C6=this.cR("SWITCHLAYOUT","PRIM_TBLO","Item");
var C7=this.cR("BACKGROUNDSTYLE","PRIM_VS","Style");var C8=this.cR("BACKGROUNDBRUSH","PRIM_VS","SolidBrush");var C9=this.cR("BACKGROUNDBRUSHBORDERS","PRIM_VS","SolidBrush");var C10=this.cR("SWITCHSTYLE","PRIM_VS","Style");var C11=this.cR("SWITCHBRUSH","PRIM_VS","SolidBrush");var C12=this.cR("GON","PRIM_BOLN");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.iC();C4.setDisplayPosition(3);C4.setParent(C0);
C4.iC();C5.setDisplayPosition(1);C5.setLeft(0);C5.setParent(this);C5.setTabPosition(1);C5.setTabStop(false);C5.setTop(0);C5.setWidth(20);C5.setStyle(C10);C5.setHeight(23);C5.iC();C6.setColumn(C2);C6.setManage(C5);C6.setParent(C0);C6.setRow(C1);C6.iC();C7.setBackgroundBrush(C8);C7.setBorderTop(1);C7.setBorderBottom(1);C7.setBorderLeft(1);C7.setBorderRight(1);C7.setBorderBrush(C9);C7.setCursor("HAND");C7.iC();C8.setColor("224:224:224");C8.iC();C9.setColor("201:201:201");C9.iC();C10.setBackgroundBrush(C11);
C10.iC();C11.setColor("255:255:255");C11.iC();C12.iC();this.setDisplayPosition(1);this.setHeight(25);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(60);this.setLayoutManager(C0);this.setStyle(C7);this.aH("CLICK",this,e1);}});cO.mthSETON=function(p0){var m=this.REF,r=l.pR(this,cO,"SetOn",47);var P0=r.cP("PROPERTY","PRIM_BOLN");P0.set(p0);r.ln=47;{r.ln=50;m.GON.set(P0.get());r.ln=52;if(l.tB(m.GON.get())){r.ln=54;m.SWITCHLAYOUT.setColumn(m.COLUMN_3);r.ln=55;m.BACKGROUNDBRUSH.setColor("245:90:14");
}else{r.ln=59;m.SWITCHLAYOUT.setColumn(m.COLUMN);r.ln=60;m.BACKGROUNDBRUSH.setColor("224:224:224");}}r.ln=64;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Com_Owner.Click",66);r.ln=66;{r.ln=68;this.setON(l.not(this.getON()));r.ln=70;{var eP=l.ePs();eP.cR("ON","PRIM_BOLN");eP.r("ON").set(this.getON());this.fE("CHANGED",eP);eP.e();}}r.ln=72;r.e();};cO.getON=function(){return this.REF.GON.get();};cO.setON=function(v){this.mthSETON(v);};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_BOLN"]
});