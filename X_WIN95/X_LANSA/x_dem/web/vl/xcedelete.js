﻿LANSA.addComponent({id:"XCEDELETE",nm:"xCEDeleteJob",ot:"wv",tp:"Dialog",de:"Delete Job",tl:14020004},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",mt:{DeleteJob:{ps:{"sEntry":{pt:"i"}}}},ev:{YesClick:{ps:{"Entry":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");
var C5=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C6=this.cR("TEXT","PRIM_MD","Label");var C7=this.cR("BUTTONNO","PRIM_MD","RaisedButton");var C8=this.cR("BUTTONYES","PRIM_MD","RaisedButton");var C9=this.cR("ENTRY","PRIM_NMBR");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C2);C3.setManage(C6);C3.setParent(C0);C3.setRow(C1);C3.setSizing("CONTENTHEIGHTFITTOWIDTH");C3.setMarginTop(-100);C3.iC();C4.setColumn(C2);C4.setManage(C7);
C4.setParent(C0);C4.setRow(C1);C4.setSizing("NONE");C4.setFlow("CENTERHORIZONTAL");C4.setMarginBottom(20);C4.setMarginLeft(20);C4.setMarginRight(20);C4.setMarginTop(20);C4.iC();C5.setColumn(C2);C5.setManage(C8);C5.setParent(C0);C5.setRow(C1);C5.setSizing("NONE");C5.setFlow("CENTERHORIZONTAL");C5.setMarginBottom(20);C5.setMarginLeft(20);C5.setMarginRight(20);C5.setMarginTop(20);C5.iC();C6.setCaption("Are you sure you want to delete this job?");C6.setDisplayPosition(1);C6.setLeft(0);C6.setParent(this);
C6.setTabPosition(1);C6.setThemeDrawStyle("Heading1");C6.setTop(204);C6.setHeight(31);C6.setWidth(638);C6.setCaptionAlignment("CENTER");C6.setWordWrap(true);C6.iC();C7.setCaption("NO");C7.setDisplayPosition(2);C7.setLeft(149);C7.setParent(this);C7.setTabPosition(2);C7.setThemeDrawStyle("MediumTitle");C7.setTop(294);C7.setHeight(50);C7.setWidth(150);C7.iC();C8.setCaption("YES");C8.setDisplayPosition(3);C8.setLeft(339);C8.setParent(this);C8.setTabPosition(3);C8.setThemeDrawStyle("MediumTitle");C8.setTop(294);
C8.setHeight(50);C8.setWidth(150);C8.iC();C9.iC();C7.aH("CLICK",this,e2);C8.aH("CLICK",this,e1);this.setHeight(641);this.setThemeDrawStyle("MediumTitle+Background2");this.setLayoutManager(C0);this.setPlacement("FULLSCREEN");this.setWidth(640);this.setThemeBackground("DARK");}});cO.mthDELETEJOB=function(p0){var m=this.REF,r=l.mR(this,cO,"DeleteJob",24);var P0=r.cP("SENTRY","PRIM_NMBR");P0.set(p0);r.ln=24;{r.ln=27;m.ENTRY.set(P0.get());r.ln=29;this.mthSHOW();}r.ln=31;r.e();};function e1(sender,Ps){
var m=this.REF,r=l.eR(this,cO,"#ButtonYes.Click",35);r.ln=35;{r.ln=37;{var eP=l.ePs();eP.cR("ENTRY","PRIM_NMBR");eP.r("ENTRY").set(m.ENTRY.get());this.fE("YESCLICK",eP);eP.e();}r.ln=39;this.mthCLOSE();}r.ln=41;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonNo.Click",43);r.ln=43;{r.ln=45;this.mthCLOSE();}r.ln=47;r.e();};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.RaisedButton","PRIM_NMBR"]});