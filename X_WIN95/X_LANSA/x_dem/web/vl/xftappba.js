﻿LANSA.addComponent({id:"XFTAPPBA",nm:"xFtAppbarFlight",ot:"rp",tp:"Reusable Part",de:"Appbar Flight",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XFLTFLD03",an:"xFlightTrackerAirportCode",ft:"NV",ln:512,dc:0,lb:"Airport Code",h1:"Airport",h2:"Code",h3:"",de:"Airport Code",dv:"",ia:["FE","LC"]},F2:{nm:"XFLTFLD04",an:"xFlightTrackerAirportName",ft:"NV",ln:512,dc:0,lb:"Airport Name",h1:"Airport",h2:"Name",h3:"",de:"Airport Name",
dv:"",ia:["FE","LC"]},F3:{nm:"XFLTFLD12",an:"xFlightTrackerCountry",ft:"NV",ln:512,dc:0,lb:"Country",h1:"Country",h2:"",h3:"",de:"Country",dv:"",ia:["FE","LC"]},F4:{nm:"XFLTFLD13",an:"xFlightTrackerRegion",ft:"NV",ln:512,dc:0,lb:"Region",h1:"Region",h2:"",h3:"",de:"Region",dv:"",ia:["FE","LC"]},F5:{nm:"STD_DTIMX",ft:"DT",ln:26,dc:0,lb:{"ENG":"Std RDMLX Datim","FRA":"?","JPN":"?","LLL":"Std RDMLX Datim"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"RDMLX","FRA":"?","JPN":"?","LLL":"RDMLX"}[cL],
h3:{"ENG":"Datetime","FRA":"?","JPN":"?","LLL":"Datetime"}[cL],de:{"ENG":"Standard RDMLX Datetime","FRA":"?","JPN":"?","LLL":"Standard RDMLX Datetime"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,rm:["dt"],mt:{AddAirport:{ps:{"XFLIGHTTRACKERAIRPORTCODE":{pt:"i"},"XFLIGHTTRACKERAIRPORTNAME":{pt:"i"},"XFLIGHTTRACKERCOUNTRY":{pt:"i"},"XFLIGHTTRACKERREGION":{pt:"i"}}},FindFlight:{},UpdateForDevice:{}},ev:{LoadFlight:{ps:{"Departs":{pt:"i"},"Arrives":{pt:"i"},
"DepartsDate":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XFTAPPBA",Fd);var C0=this.cR("STYLEBORDER11","PRIM_VS","Style");var C1=this.cR("LAYOUTMOBILE","PRIM_TBLO");var C2=this.cR("LAYOUTMOBILECOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMOBILECOLUMN2","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMOBILECOLUMN3","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMOBILECOLUMN4","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMOBILEROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTMOBILEITEM1","PRIM_TBLO","Item");
var C8=this.cR("LAYOUTMOBILEITEM2","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMOBILEITEM3","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMOBILEITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C12=this.cR("LAYOUTDESKTOPCOLUMN1","PRIM_TBLO","Column");var C13=this.cR("LAYOUTDESKTOPCOLUMN2","PRIM_TBLO","Column");var C14=this.cR("LAYOUTDESKTOPCOLUMN3","PRIM_TBLO","Column");var C15=this.cR("LAYOUTDESKTOPROW1","PRIM_TBLO","Row");var C16=this.cR("LAYOUTDESKTOPITEM1","PRIM_TBLO","Item");
var C17=this.cR("LAYOUTDESKTOPITEM2","PRIM_TBLO","Item");var C18=this.cR("LAYOUTDESKTOPITEM3","PRIM_TBLO","Item");var C19=this.cR("LAYOUTDESKTOPITEM4","PRIM_TBLO","Item");var C20=this.cR("FLIGHTDEPARTEDIT","PRIM_MD","Dropdown");var C21=this.cR("FLIGHTARRIVEEDIT","PRIM_MD","Dropdown");var C22=this.cR("FLIGHTDEPARTDATE","PRIM_MD","DateTime");var C23=this.cR("BUTTON","PRIM_MD","RaisedButton");C0.setBorderBottom(1);C0.setBorderLeft(1);C0.setBorderRight(1);C0.setBorderTop(1);C0.iC();C1.setMarginBottom(16);
C1.setSizing("CONTENTHEIGHT");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setWidth(250);C3.setUnits("CONTENT");C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setWidth(258);C4.setUnits("CONTENT");C4.iC();C5.setDisplayPosition(4);C5.setParent(C1);C5.iC();C6.setDisplayPosition(1);C6.setParent(C1);C6.iC();C7.setManage(C20);C7.setParent(C1);C7.setRow(C6);C7.setSizing("NONE");C7.setColumn(C3);C7.setFlow("DOWN");C7.setAlignment("TOPLEFT");
C7.setMarginTop(8);C7.iC();C8.setManage(C21);C8.setParent(C1);C8.setRow(C6);C8.setSizing("NONE");C8.setColumn(C4);C8.setFlow("DOWN");C8.setAlignment("TOPLEFT");C8.setMarginTop(8);C8.setMarginLeft(8);C8.iC();C9.setManage(C22);C9.setParent(C1);C9.setRow(C6);C9.setSizing("NONE");C9.setColumn(C3);C9.setFlow("DOWN");C9.setAlignment("TOPLEFT");C9.setMarginTop(8);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C4);C10.setManage(C23);C10.setParent(C1);C10.setRow(C6);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");
C10.setMarginTop(8);C10.setMarginLeft(8);C10.setMarginRight(8);C10.iC();C11.setMarginBottom(16);C11.setSizing("CONTENTHEIGHT");C11.iC();C12.setDisplayPosition(1);C12.setParent(C11);C12.iC();C13.setDisplayPosition(2);C13.setParent(C11);C13.setWidth(12);C13.setMaxWidth(1200);C13.iC();C14.setDisplayPosition(3);C14.setParent(C11);C14.iC();C15.setDisplayPosition(1);C15.setParent(C11);C15.iC();C16.setManage(C20);C16.setParent(C11);C16.setRow(C15);C16.setSizing("NONE");C16.setColumn(C13);C16.setFlow("RIGHT");
C16.setAlignment("TOPLEFT");C16.setMarginTop(8);C16.setMarginLeft(16);C16.iC();C17.setManage(C21);C17.setParent(C11);C17.setRow(C15);C17.setSizing("NONE");C17.setColumn(C13);C17.setFlow("RIGHT");C17.setAlignment("TOPLEFT");C17.setMarginTop(8);C17.setMarginLeft(16);C17.iC();C18.setManage(C22);C18.setParent(C11);C18.setRow(C15);C18.setSizing("NONE");C18.setColumn(C13);C18.setFlow("RIGHT");C18.setAlignment("TOPLEFT");C18.setMarginTop(8);C18.setMarginLeft(16);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C13);
C19.setManage(C23);C19.setParent(C11);C19.setRow(C15);C19.setSizing("NONE");C19.setFlow("RIGHT");C19.setMarginTop(8);C19.setMarginLeft(16);C19.iC();C20.setDisplayPosition(1);C20.setLeft(279);C20.setParent(this);C20.setTabPosition(1);C20.setTop(8);C20.setThemeDrawStyle("Rounded");C20.setAppearance("NONE");C20.setHelperPosition("NONE");C20.setHeight(35);C20.setIcon("flight_takeoff");C20.setCaptionPosition("NONE");C20.setStyle(C0);C20.setPlaceholder("Departs");C20.setWidth(250);C20.setPlaceholderColor("WHITE");
C20.setPromptOnly(false);C20.setPromptPosition("BOTTOM");C20.iC();C21.setDisplayPosition(2);C21.setLeft(537);C21.setParent(this);C21.setTabPosition(2);C21.setTop(8);C21.setThemeDrawStyle("Rounded");C21.setAppearance("NONE");C21.setHelperPosition("NONE");C21.setHeight(35);C21.setIcon("flight_land");C21.setCaptionPosition("NONE");C21.setStyle(C0);C21.setPlaceholder("Arrives");C21.setWidth(250);C21.setPlaceholderColor("WHITE");C21.setPromptOnly(false);C21.setPromptPosition("BOTTOM");C21.iC();C22.setDisplayPosition(3);
C22.setIcon("date_range");C22.setLeft(279);C22.setParent(this);C22.setTabPosition(3);C22.setTop(51);C22.setWidth(250);C22.setCaptionPosition("NONE");C22.setHeight(35);C22.setHelperPosition("NONE");C22.setAppearance("NONE");C22.setThemeDrawStyle("Rounded");C22.setStyle(C0);C22.setDateFormat("LONG");C22.iC();C23.setCaption("FIND FLIGHTS");C23.setDisplayPosition(4);C23.setLeft(537);C23.setParent(this);C23.setTabPosition(4);C23.setThemeDrawStyle("MediumAccent");C23.setTop(51);C23.setThemeBackground("DARK");
C23.setWidth(242);C23.iC();l.WEB().aH("DEVICECHANGED",this,e2);C20.aH("ENTER",this,e5);C21.aH("ENTER",this,e4);C23.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setWidth(1065);this.setThemeDrawStyle("DarkTitle");this.setHeight(103);this.setLayoutManager(C1);this.aH("INITIALIZE",this,e1);}});cO.mthADDAIRPORT=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"AddAirport",44);var P0=r.cPF("XFLIGHTTRACKERAIRPORTCODE",Fd.F1.Dc);var P1=r.cPF("XFLIGHTTRACKERAIRPORTNAME",Fd.F2.Dc);
var P2=r.cPF("XFLIGHTTRACKERCOUNTRY",Fd.F3.Dc);var P3=r.cPF("XFLIGHTTRACKERREGION",Fd.F4.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);r.ln=44;{r.ln=50;m.FLIGHTDEPARTEDIT.getItems().mthADD(P1.get());r.ln=52;m.FLIGHTARRIVEEDIT.getItems().mthADD(P1.get());}r.ln=54;r.e();};cO.mthFINDFLIGHT=function(){var m=this.REF,r=l.mR(this,cO,"FindFlight",56);var C0=r.cR("DEPARTS","PRIM_STR");var C1=r.cR("ARRIVES","PRIM_STR");C0.iC();C1.iC();r.ln=56;{r.ln=60;if(l.and((m.FLIGHTDEPARTEDIT.getFocusItem()!=null),(m.FLIGHTARRIVEEDIT.getFocusItem()!=null)))
{r.ln=62;C0.set(m.FLIGHTDEPARTEDIT.getFocusItem().getValue());r.ln=64;C1.set(m.FLIGHTARRIVEEDIT.getFocusItem().getValue());r.ln=66;{var eP=l.ePs();eP.cR("DEPARTS","PRIM_STR");eP.cR("ARRIVES","PRIM_STR");eP.cR("DEPARTSDATE","PRIM_DATE");eP.r("DEPARTS").set(C0.get());eP.r("ARRIVES").set(C1.getValue());eP.r("DEPARTSDATE").set(m.FLIGHTDEPARTDATE.getValue());this.fE("LOADFLIGHT",eP);eP.e();}}}r.ln=70;r.e();};cO.mthUPDATEFORDEVICE=function(){var m=this.REF,r=l.mR(this,cO,"UpdateForDevice",72);r.ln=72;{
r.ln=74;{var v1=l.WEB().getDevice();if(r.ln=76,l.s.eq(v1,"MOBILE")){r.ln=78;this.setLayoutManager(m.LAYOUTMOBILE);r.ln=80;m.FLIGHTDEPARTDATE.setDateFormat("SHORT");r.ln=81;m.FLIGHTDEPARTDATE.setPromptPosition("SCREENCENTER");r.ln=82;m.FLIGHTDEPARTDATE.setWidth(150);r.ln=83;m.FLIGHTDEPARTEDIT.setWidth(150);r.ln=84;m.FLIGHTARRIVEEDIT.setWidth(150);}else if(r.ln=86,l.s.eq(v1,"TABLET")){r.ln=88;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=90;m.LAYOUTDESKTOPCOLUMN1.setUnits("PIXELS");r.ln=91;m.LAYOUTDESKTOPCOLUMN1.setWidth(0);
r.ln=93;m.LAYOUTDESKTOPCOLUMN3.setUnits("PIXELS");r.ln=94;m.LAYOUTDESKTOPCOLUMN3.setWidth(0);r.ln=96;m.FLIGHTDEPARTDATE.setDateFormat("SHORT");r.ln=97;m.FLIGHTDEPARTDATE.setPromptPosition("BOTTOM");r.ln=98;m.FLIGHTDEPARTDATE.setWidth(200);r.ln=99;m.FLIGHTDEPARTEDIT.setWidth(200);r.ln=100;m.FLIGHTARRIVEEDIT.setWidth(200);}else if(r.ln=102,l.s.eq(v1,"DESKTOP")){r.ln=104;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=106;m.LAYOUTDESKTOPCOLUMN1.setUnits("PROPORTION");r.ln=107;m.LAYOUTDESKTOPCOLUMN1.setWidth(1);
r.ln=109;m.LAYOUTDESKTOPCOLUMN3.setUnits("PROPORTION");r.ln=110;m.LAYOUTDESKTOPCOLUMN3.setWidth(1);r.ln=112;m.FLIGHTDEPARTDATE.setDateFormat("LONG");r.ln=113;m.FLIGHTDEPARTDATE.setPromptPosition("BOTTOM");r.ln=114;m.FLIGHTDEPARTDATE.setWidth(250);r.ln=115;m.FLIGHTDEPARTEDIT.setWidth(250);r.ln=116;m.FLIGHTARRIVEEDIT.setWidth(250);}r.ln=118;}}r.ln=120;r.e();};function e1(sender,Ps){var f=this.FLD.XFTAPPBA,m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",126);r.ln=126;{r.ln=128;m.FLIGHTDEPARTDATE.setValue(l.dt.Now(f.F5.get()));
}r.ln=130;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Sys_Web.DeviceChanged",132);r.ln=132;{r.ln=134;this.mthUPDATEFORDEVICE();}r.ln=136;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Button.Click",138);r.ln=138;{r.ln=140;this.mthFINDFLIGHT();}r.ln=142;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#FlightArriveEdit.Enter",144);r.ln=144;{r.ln=146;this.mthFINDFLIGHT();}r.ln=148;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#FlightDepartEdit.Enter",150);r.ln=150;{r.ln=152;this.mthFINDFLIGHT();
}r.ln=154;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XFLTFLD03"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XFLTFLD04"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XFLTFLD12"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XFLTFLD13"});}},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Dropdown","PRIM_MD.DateTime","PRIM_MD.RaisedButton","PRIM_FLD","PRIM_DTIM"],
dp:["PRIM_STR"]});