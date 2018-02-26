﻿LANSA.addComponent({id:"XDEMOW_16",nm:"xDemoWebLocalStorage",ot:"wp",tp:"Web Page",de:"Using the browser's local storage",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.46");var Fd={F1:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",
h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{RestoreValues:{},SaveValues:{},AddEntry:{ps:{"Name":{pt:"i"},"Value":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_16",Fd);var C0=this.cR("LIST","PRIM_LIST");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("ITEM","PRIM_TBLO","Item");var C6=this.cR("COLUMNXDXALPHA","PRIM_LIST","String");
var C7=this.cR("COLUMNXDXCAPTIO","PRIM_LIST","String");var C8=this.cR("LABEL","PRIM_LABL");var C9=this.cR("LAYOUTITEM","PRIM_TBLO","Item");C0.setDisplayPosition(1);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTop(61);C0.setHeight(739);C0.setWidth(1200);C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setHeight(61);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setHeight(c1);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.iC();C5.setColumn(C4);
C5.setManage(C0);C5.setParent(C1);C5.setRow(C3);C5.iC();C6.setDisplayPosition(1);C6.setParent(C0);C6.setSource(f.F1);C6.setColumnWidth(353);C6.setColumnCaption("Key");C6.setColumnCaptionType("CAPTION");C6.setColumnReadOnly(false);C6.iC();C7.setDisplayPosition(2);C7.setParent(C0);C7.setSource(f.F2);C7.setColumnWidth(541);C7.setColumnCaption("Value");C7.setColumnCaptionType("CAPTION");C7.setColumnReadOnly(false);C7.iC();C8.setCaption("Enter a key and value for each item.  Click here to save. Refresh to see saved data");
C8.setDisplayPosition(2);C8.setEllipses("WORD");C8.setLeft(0);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(0);C8.setVerticalAlignment("CENTER");C8.setHeight(61);C8.setWidth(1200);C8.setMarginLeft(2);C8.setThemeDrawStyle("Heading1+DarkTitle");C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C4);C9.setFlow("DOWN");C9.setManage(C8);C9.setParent(C1);C9.setRow(C2);C9.iC();C8.aH("CLICK",this,e2);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);
}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",21);r.ln=21;{r.ln=23;this.mthRESTOREVALUES();}r.ln=25;r.e();};cO.mthRESTOREVALUES=function(){var m=this.REF,r=l.mR(this,cO,"RestoreValues",27);r.ln=27;{r.ln=29;{var l1=l.WEB().getLocalStorage().cI();while(l1.step()){var STORAGEITEM=r.sR("STORAGEITEM",l1.item());r.ln=31;cO.mthADDENTRY.call(this,STORAGEITEM.getName(),STORAGEITEM.getValue());r.ln=33;}l1.end();r.dR("STORAGEITEM");}r.ln=35;for(var i1=1,s1=1,t1=9999999;(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=37;this.mthADDENTRY(u,u);r.ln=39;if(l.n.gt(m.LIST.getItems().getItemCount(),20)){break;}}}r.ln=43;r.e();};cO.mthSAVEVALUES=function(){var f=this.FLD.XDEMOW_16,m=this.REF,r=l.mR(this,cO,"SaveValues",45);r.ln=45;{r.ln=47;l.WEB().getLocalStorage().mthCLEAR();r.ln=49;{var l1=m.LIST.selectList();while(l1.step()){r.ln=51;if(l.tB(l.s.eq(f.F1.get(),""))){continue;}r.ln=53;l.WEB().getLocalStorage().mthADD(f.F1.get(),f.F2.get());r.ln=55;}l1.end();}}r.ln=57;r.e();};cO.mthADDENTRY=function(p0,p1){var f=this.FLD.XDEMOW_16,m=this.REF,r=l.mR(this,cO,"AddEntry",59);
var P0=r.cP("NAME","PRIM_STR");var P1=r.cP("VALUE","PRIM_STR");P0.set((p0===u)?(""):(p0));P1.set((p1===u)?(""):(p1));r.ln=59;{r.ln=63;f.F1.set(P0.get());r.ln=64;f.F2.set(P1.get());r.ln=66;m.LIST.addEntry();}r.ln=68;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Label.Click",70);r.ln=70;{r.ln=72;this.mthSAVEVALUES();}r.ln=74;r.e();};},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_LIST","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LIST.String","PRIM_LABL"]});