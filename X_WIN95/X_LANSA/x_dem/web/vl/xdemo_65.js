﻿LANSA.addComponent({id:"XDEMO_65",nm:"xDemoWebGoogleIconTileDesign",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Google Icon Panel",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.23"),c2=l.cDec(".77");var Fd={F1:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TILE.ITileDesign"],fd:Fd,
pt:{IconStyle:{da:"na"}},mt:{OnAdd:{ps:{"TileItem":{pt:"i"}}},OnDelete:{ps:{"TileItem":{pt:"i"}}},OnFind:{ps:{"TileItem":{pt:"i"},"Key":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_65",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("GICONNAME","PRIM_LABL");
var C7=this.cR("GOOGLEICON","XDEMOW_86");this.cD("GTILEITEM");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(c1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c2);C3.iC();C4.setColumn(C1);C4.setManage(C6);C4.setParent(C0);C4.setRow(C3);C4.iC();C5.setColumn(C1);C5.setManage(C7);C5.setParent(C0);C5.setRow(C2);C5.iC();C6.setCaption("Icon Name");C6.setDisplayPosition(1);C6.setEllipses("WORD");C6.setHeight(49);C6.setLeft(0);
C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(80);C6.setVerticalAlignment("CENTER");C6.setWidth(185);C6.setMarginLeft(2);C6.setAlignment("CENTER");C6.setThemeDrawStyle("AlternateItem");C6.setSelectable(true);C6.iC();C7.setDisplayPosition(2);C7.setHeight(80);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(0);C7.setWidth(185);C7.iC();this.setDisplayPosition(1);this.setHeight(129);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(185);
this.setLayoutManager(C0);this.setThemeDrawStyle("ToolbarButton");this.aLF({"XDEMOUNIC":f.F1});}});cO.mthSETICONSTYLE=function(p0){var m=this.REF,r=l.pR(this,cO,"SetIconStyle",21);var P0=r.cPD("PROPERTY");P0=r.sR("PROPERTY",p0);r.ln=21;{r.ln=24;m.GOOGLEICON.setStyle(P0);}r.ln=26;r.e();};cO.mthONADD=function(p0){var f=this.FLD.XDEMO_65,m=this.REF,r=l.mR(this,cO,"OnAdd",28);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=28;{r.ln=30;this.setrefGTILEITEM(P0);r.ln=32;m.GICONNAME.set(f.F1.get());
m.GICONNAME.setHint(f.F1.get());m.GOOGLEICON.setICONNAME(f.F1.get());}r.ln=34;r.e();};cO.mthONDELETE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnDelete",36);var P0=r.cPD("TILEITEM");P0=r.sR("TILEITEM",p0);r.ln=36;{r.ln=38;this.setrefGTILEITEM(null);}r.ln=40;r.e();};cO.mthONFIND=function(p1,p2){var m=this.REF,r=l.mR(this,cO,"OnFind",42);var P0=r.cPb("RESULT");var P1=r.cPD("TILEITEM");var P2=r.cPD("KEY");P1=r.sR("TILEITEM",p1);P2=r.sR("KEY",p2);var C0=r.cR("SEARCHKEY","PRIM_STR");C0.iC();r.ln=42;
{r.ln=46;C0.set(P2.get());r.ln=48;m.GTILEITEM.setVisible(l.or(l.s.eq(P2.get(),""),l.s.Contains(l.s.LowerCase(m.GICONNAME.getCaption()),l.s.LowerCase(C0.get()))));}r.ln=50;return r.rV(P0.get());};cO.setICONSTYLE=function(v){this.mthSETICONSTYLE(v);};cO.setrefGTILEITEM=function(rn){this.sR("GTILEITEM",rn);};},{rc:["XDEMOW_86"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_FLD","PRIM_HINT"],dp:["PRIM_TILE.TileItem","PRIM_STR"]});