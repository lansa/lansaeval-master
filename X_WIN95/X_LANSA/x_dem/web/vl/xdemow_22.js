﻿LANSA.addComponent({id:"XDEMOW_22",nm:"xDemoWebGoogleMap",ot:"wp",tp:"Web Page",de:"Using Google Map",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.87");var Fd={F1:{nm:"XDEMODECI",an:"xDemoDecimal",ft:"P",ln:30,dc:9,ec:"J",lb:"Decimal",h1:"Decimal",h2:"",h3:"",de:"Decimal",dv:0}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{AddMarker:{ps:{"Latitude":{pt:"i"},"Longitude":{pt:"i"},"Location":{pt:"i"}}}},co:function(){cO.aN.call(this);
this.aF("XDEMOW_22",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");
var C11=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C12=this.cR("MAP","XGOOGLE03");var C13=this.cR("IMAGE1","PRIM_IMAG");var C14=this.cR("HYBRID","PRIM_SPBN");var C15=this.cR("HYBRID1","PRIM_SPBN");var C16=this.cR("ROADMAP","PRIM_SPBN");var C17=this.cR("SATELLITE","PRIM_SPBN");var C18=this.cR("TERRAIN","PRIM_SPBN");var C19=this.cR("LOCATIONPOPUP","PRIM_PPNL");var C20=this.cR("LOCATIONNAME","PRIM_EDIT");var C21=this.cR("OK","PRIM_PHBN");var C22=this.cR("LABEL1","PRIM_LABL");var C23=this.cR("GEOLOCATION","PRIM_WEB","Geolocation");
var C24=this.cR("ESCAPE","PRIM_STPG");var C25=this.cF("CURRENTLONGITUDE",Fd.F1.Dc);var C26=this.cF("CURRENTLATITUDE",Fd.F1.Dc);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(52);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setColumn(C1);C4.setManage(C12);C4.setParent(C0);C4.setRow(C3);C4.iC();C5.setColumn(C1);C5.setManage(C13);C5.setParent(C0);C5.setRow(C2);C5.iC();C6.setColumn(C1);
C6.setManage(C14);C6.setParent(C0);C6.setRow(C2);C6.setSizing("FITTOHEIGHT");C6.setAlignment("CENTERLEFT");C6.iC();C7.setColumn(C1);C7.setManage(C15);C7.setParent(C0);C7.setRow(C2);C7.setSizing("NONE");C7.setAlignment("CENTERLEFT");C7.setFlow("RIGHT");C7.iC();C8.setColumn(C1);C8.setManage(C16);C8.setParent(C0);C8.setRow(C2);C8.setSizing("FITTOHEIGHT");C8.setAlignment("CENTERLEFT");C8.setFlow("RIGHT");C8.iC();C9.setColumn(C1);C9.setManage(C17);C9.setParent(C0);C9.setRow(C2);C9.setSizing("FITTOHEIGHT");
C9.setFlow("RIGHT");C9.setAlignment("CENTERLEFT");C9.iC();C10.setColumn(C1);C10.setManage(C18);C10.setParent(C0);C10.setRow(C2);C10.setSizing("FITTOHEIGHT");C10.setAlignment("CENTERLEFT");C10.setFlow("RIGHT");C10.iC();C11.setColumn(C1);C11.setManage(C22);C11.setParent(C0);C11.setRow(C2);C11.setSizing("FITTOHEIGHT");C11.setAlignment("CENTERRIGHT");C11.iC();C12.setDisplayPosition(3);C12.setHeight(748);C12.setLeft(0);C12.setParent(this);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(52);C12.setWidth(1200);
C12.iC();C13.setDisplayPosition(8);C13.setLeft(0);C13.setParent(this);C13.setTabPosition(2);C13.setTabStop(false);C13.setTop(0);C13.setHeight(52);C13.setWidth(1200);C13.setThemeDrawStyle("DarkTitle");C13.iC();C14.setAutoSize(false);C14.setButtonStyle("FLATBUTTON");C14.setComponentVersion(1);C14.setDisplayPosition(2);C14.setLeft(0);C14.setParent(this);C14.setTabPosition(7);C14.setTop(0);C14.setWidth(111);C14.setCaption("Hybrid");C14.setHeight(52);C14.setThemeDrawStyle("DarkTitle");C14.iC();C15.setAutoSize(false);
C15.setButtonStyle("FLATBUTTON");C15.setComponentVersion(1);C15.setDisplayPosition(4);C15.setLeft(0);C15.setParent(this);C15.setTabPosition(6);C15.setTop(12);C15.setWidth(111);C15.setCaption("Hybrid");C15.iC();C16.setAutoSize(false);C16.setButtonStyle("FLATBUTTON");C16.setComponentVersion(1);C16.setDisplayPosition(5);C16.setLeft(111);C16.setParent(this);C16.setTabPosition(5);C16.setTop(0);C16.setWidth(111);C16.setCaption("Road Map");C16.setHeight(52);C16.setThemeDrawStyle("DarkTitle");C16.iC();C17.setAutoSize(false);
C17.setButtonStyle("FLATBUTTON");C17.setComponentVersion(1);C17.setDisplayPosition(6);C17.setLeft(222);C17.setParent(this);C17.setTabPosition(4);C17.setTop(0);C17.setWidth(111);C17.setCaption("Satellite");C17.setHeight(52);C17.setThemeDrawStyle("DarkTitle");C17.iC();C18.setAutoSize(false);C18.setButtonStyle("FLATBUTTON");C18.setComponentVersion(1);C18.setDisplayPosition(7);C18.setLeft(333);C18.setParent(this);C18.setTabPosition(3);C18.setTop(0);C18.setWidth(111);C18.setCaption("Terrain");C18.setHeight(52);
C18.setThemeDrawStyle("DarkTitle");C18.iC();C19.setCloseButton(true);C19.setTitleBar(true);C19.setHeight(93);C19.setAutoClose(false);C19.iC();C20.setDisplayPosition(1);C20.setLeft(4);C20.setParent(C19);C20.setShowSelection(false);C20.setShowSelectionHilight(false);C20.setTabPosition(1);C20.setTop(32);C20.setHeight(29);C20.setWidth(272);C20.iC();C21.setCaption("OK");C21.setDisplayPosition(2);C21.setLeft(196);C21.setParent(C19);C21.setTabPosition(3);C21.setTop(64);C21.setButtonDefault(true);C21.iC();
C22.setCaption("Right click to add location markers");C22.setDisplayPosition(1);C22.setEllipses("WORD");C22.setHeight(52);C22.setLeft(936);C22.setParent(this);C22.setTabPosition(8);C22.setTabStop(false);C22.setTop(0);C22.setVerticalAlignment("CENTER");C22.setWidth(264);C22.setAlignment("RIGHT");C22.setMarginRight(4);C22.setThemeDrawStyle("DarkTitle");C22.iC();C23.iC();C24.setParent(C19);C24.setShortCut("ESCAPE");C24.iC();C25.aD();C25.iC();C26.aD();C26.iC();C12.aH("INITIALIZE",this,e1);C12.aH("RIGHTCLICK",this,e7);
C14.aH("CLICK",this,e3);C16.aH("CLICK",this,e4);C17.aH("CLICK",this,e5);C18.aH("CLICK",this,e6);C19.aH("PREPARE",this,e8);C21.aH("CLICK",this,e10);C23.aH("REFRESHED",this,e2);C24.aH("PRESSED",this,e9);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015LIGHTGREEN"));}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Map.Initialize",36);r.ln=36;{r.ln=38;m.MAP.setMAPTYPE("HYBRID");r.ln=39;m.MAP.setZOOM(10);r.ln=41;m.GEOLOCATION.mthREFRESH();}r.ln=43;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Geolocation.Refreshed",45);
r.ln=45;{r.ln=47;cO.mthADDMARKER.call(this,m.GEOLOCATION.getLatitude(),m.GEOLOCATION.getLongitude(),"You are here");r.ln=49;m.MAP.mthCENTER(m.GEOLOCATION.getLatitude(),m.GEOLOCATION.getLongitude());}r.ln=51;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Hybrid.Click",53);r.ln=53;{r.ln=55;m.MAP.setMAPTYPE("HYBRID");}r.ln=57;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RoadMap.Click",59);r.ln=59;{r.ln=61;m.MAP.setMAPTYPE("ROADMAP");}r.ln=63;r.e();};function e5(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Satellite.Click",65);r.ln=65;{r.ln=67;m.MAP.setMAPTYPE("SATELLITE");}r.ln=69;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Terrain.Click",71);r.ln=71;{r.ln=73;m.MAP.setMAPTYPE("TERRAIN");}r.ln=75;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Map.RightClick",77);var P0=Ps.r("LATITUDE");var P1=Ps.r("LONGITUDE");r.ln=77;{r.ln=79;m.CURRENTLATITUDE.set(P0.get());r.ln=80;m.CURRENTLONGITUDE.set(P1.get());r.ln=82;m.LOCATIONPOPUP.mthSHOWPOPUP(u,u,u,"FADEINANDSCALE",u);
}r.ln=84;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LocationPopup.Prepare",86);var P0=Ps.r("LEFT");var P1=Ps.r("TOP");r.ln=86;{r.ln=88;m.LOCATIONNAME.set("");r.ln=90;P0.set(l.sub(P0.get(),l.div(m.LOCATIONPOPUP.getWidth(),2)));r.ln=91;P1.set(l.sub(P1.get(),l.div(m.LOCATIONPOPUP.getHeight(),2)));}r.ln=93;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Escape.Pressed",95);r.ln=95;{r.ln=97;m.LOCATIONPOPUP.mthCLOSEPOPUP();}r.ln=99;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#OK.Click",101);
r.ln=101;{r.ln=103;cO.mthADDMARKER.call(this,m.CURRENTLATITUDE.get(),m.CURRENTLONGITUDE.get(),m.LOCATIONNAME.get());r.ln=105;m.LOCATIONPOPUP.mthCLOSEPOPUP();}r.ln=107;r.e();};cO.mthADDMARKER=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"AddMarker",109);var P0=r.cPF("LATITUDE",Fd.F1.Dc);var P1=r.cPF("LONGITUDE",Fd.F1.Dc);var P2=r.cP("LOCATION","PRIM_STR");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=109;{r.ln=114;m.MAP.mthADDMARKER(P0.get(),P1.get(),l.s.Substitute("&1 (Lat. &2, Long. &3)",P2.get(),l.n.AsString(P0.get()),l.n.AsString(P1.get())));
}r.ln=116;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMODECI"});}},{rc:["XGOOGLE03"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_SPBN","PRIM_PPNL","PRIM_EDIT","PRIM_PHBN","PRIM_LABL","PRIM_WEB.Geolocation","PRIM_STPG","PRIM_FLD"]});