﻿LANSA.addComponent({id:"XLXCRYTOR",nm:"xLXCrytoRate",ot:"wv",tp:"View",pt:"ap",de:"Crypto Rate",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XLXDECIMA",an:"xLXDecimal",ft:"P",ln:15,dc:6,lb:"Decimal Field",h1:"Decimal",h2:"Field",h3:"",de:"Decimal Field",dv:0,ia:["FE","RB"]},F2:{nm:"XLXSTRING",an:"xLXString",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]},F3:
{ic:0,nm:"XLXDATE",an:"xLXDate",ft:"D",ln:10,dc:0,lb:"Date",h1:"Date",h2:"",h3:"",de:"Date",dv:l.SqlNull,ia:["ASQN","FE","ISO"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,rm:["dt"],mt:{ShowCrypto:{ps:{"iTimeFrame":{pt:"i"}}},PopulateChart:{ps:{"iTimeFrame":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XLXCRYTOR",Fd);var C0=this.cA("APPDATA","XLXAPPDA");var C1=this.cR("STYLECONVERSION","PRIM_VS","Style");var C2=this.cR("STYLEVALUE","PRIM_VS","Style");var C3=this.cR("LAYOUTMAINDESKTOP","PRIM_TBLO");
var C4=this.cR("LAYOUTMAINDESKTOPCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMAINDESKTOPCOLUMN2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMAINDESKTOPROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTMAINDESKTOPROW2","PRIM_TBLO","Row");var C8=this.cR("LAYOUTMAINDESKTOPROW3","PRIM_TBLO","Row");var C9=this.cR("LAYOUTMAINDESKTOPITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINDESKTOPITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMAINDESKTOPITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTMAINDESKTOPITEM4","PRIM_TBLO","Item");
var C13=this.cR("LAYOUTMAINDESKTOPITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMAINMOBILE","PRIM_TBLO");var C15=this.cR("LAYOUTMAINMOBILECOLUMN1","PRIM_TBLO","Column");var C16=this.cR("LAYOUTMAINMOBILEROW1","PRIM_TBLO","Row");var C17=this.cR("LAYOUTMAINMOBILEROW2","PRIM_TBLO","Row");var C18=this.cR("LAYOUTMAINMOBILEROW3","PRIM_TBLO","Row");var C19=this.cR("LAYOUTMAINMOBILEROW4","PRIM_TBLO","Row");var C20=this.cR("LAYOUTMAINMOBILEITEM1","PRIM_TBLO","Item");var C21=this.cR("LAYOUTMAINMOBILEITEM2","PRIM_TBLO","Item");
var C22=this.cR("LAYOUTMAINMOBILEITEM3","PRIM_TBLO","Item");var C23=this.cR("LAYOUTMAINMOBILEITEM4","PRIM_TBLO","Item");var C24=this.cR("LAYOUTMAINMOBILEITEM5","PRIM_TBLO","Item");var C25=this.cR("LAYOUTMAINMOBILEITEM6","PRIM_TBLO","Item");var C26=this.cR("LAYOUTMAINMOBILEITEM7","PRIM_TBLO","Item");var C27=this.cR("LAYOUTFILTERMOBILE","PRIM_TBLO");var C28=this.cR("LAYOUTFILTERMOBILEROW1","PRIM_TBLO","Row");var C29=this.cR("LAYOUTFILTERMOBILECOLUMN1","PRIM_TBLO","Column");var C30=this.cR("LAYOUTFILTERMOBILEITEM1","PRIM_TBLO","Item");
var C31=this.cR("LAYOUTFILTERMOBILEITEM4","PRIM_TBLO","Item");var C32=this.cR("LAYOUTFILTERMOBILEITEM6","PRIM_TBLO","Item");var C33=this.cR("LAYOUTFILTERMOBILEITEM8","PRIM_TBLO","Item");var C34=this.cR("LAYOUTFILTERMOBILEITEM2","PRIM_TBLO","Item");var C35=this.cR("LAYOUTFILTERDESKTOP","PRIM_TBLO");var C36=this.cR("LAYOUTFILTERDESKTOPCOLUMN","PRIM_TBLO","Column");var C37=this.cR("LAYOUTFILTERDESKTOPROW","PRIM_TBLO","Row");var C38=this.cR("LAYOUTFILTERDESKTOPITEM1","PRIM_TBLO","Item");var C39=this.cR("LAYOUTFILTERDESKTOPITEM2","PRIM_TBLO","Item");
var C40=this.cR("LAYOUTFILTERDESKTOPITEM3","PRIM_TBLO","Item");var C41=this.cR("LAYOUTFILTERDESKTOPITEM4","PRIM_TBLO","Item");var C42=this.cR("LAYOUTFILTERDESKTOPITEM5","PRIM_TBLO","Item");var C43=this.cR("LINECHART","PRIM_CHRT","LineChart");var C44=this.cR("LINECHARTCAPTION","PRIM_CHRT","LineChartCaption");var C45=this.cR("LINECHARTVALUE","PRIM_CHRT","LineChartValue");var C46=this.cR("TEXT","PRIM_MD","Label");var C47=this.cR("TEXT1","PRIM_MD","Label");var C48=this.cR("TEXT2","PRIM_MD","Label");var C49=this.cR("PANELFILTER","PRIM_PANL");
var C50=this.cR("FILTER5YEARS","PRIM_MD","TabItem");var C51=this.cR("FILTER1YEAR","PRIM_MD","TabItem");var C52=this.cR("FILTER30DAYS","PRIM_MD","TabItem");var C53=this.cR("FILTER7DAYS","PRIM_MD","TabItem");var C54=this.cR("FILTER24HOURS","PRIM_MD","TabItem");var C55=this.cF("INITIALAMOUNT",Fd.F1.Dc);var C56=this.cF("CONVERTEDAMOUNT",Fd.F1.Dc);var C57=this.cF("CURRENCYFROM",Fd.F2.Dc);var C58=this.cF("CURRENCYTO",Fd.F2.Dc);if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setFontSize(36);C1.setFontUnits("PIXEL");
C1.iC();C2.setFontSize(20);C2.setFontUnits("PIXEL");C2.iC();C3.setSizing("CONTENTHEIGHT");C3.iC();C4.setParent(C3);C4.setDisplayPosition(1);C4.iC();C5.setParent(C3);C5.setDisplayPosition(2);C5.setUnits("PIXELS");C5.setWidth(56);C5.iC();C6.setParent(C3);C6.setDisplayPosition(1);C6.setHeight(89);C6.setUnits("CONTENT");C6.iC();C7.setParent(C3);C7.setDisplayPosition(2);C7.setHeight(33);C7.setUnits("CONTENT");C7.iC();C8.setParent(C3);C8.setDisplayPosition(3);C8.setHeight(580);C8.setUnits("PIXELS");C8.iC();
C9.setAlignment("TOPLEFT");C9.setColumn(C4);C9.setManage(C46);C9.setParent(C3);C9.setRow(C6);C9.setSizing("CONTENTHEIGHTFITTOWIDTH");C9.setFlow("DOWN");C9.setColumnSpan(2);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C4);C10.setManage(C47);C10.setParent(C3);C10.setRow(C6);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setFlow("DOWN");C10.setColumnSpan(2);C10.iC();C11.setManage(C48);C11.setParent(C3);C11.setRow(C7);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");C11.setColumn(C4);C11.iC();C12.setColumn(C5);
C12.setManage(C49);C12.setParent(C3);C12.setRow(C8);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C4);C13.setManage(C43);C13.setParent(C3);C13.setRow(C8);C13.setMarginBottom(8);C13.setMarginLeft(8);C13.setMarginRight(8);C13.iC();C14.setSizing("CONTENTHEIGHT");C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.setWidth(180);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.setUnits("CONTENT");C16.setHeight(97);C16.iC();C17.setDisplayPosition(2);C17.setParent(C14);C17.setHeight(33);
C17.setUnits("CONTENT");C17.iC();C18.setDisplayPosition(3);C18.setParent(C14);C18.setHeight(300);C18.setUnits("PIXELS");C18.iC();C19.setDisplayPosition(4);C19.setParent(C14);C19.setHeight(50);C19.setUnits("CONTENT");C19.iC();C20.setColumn(C15);C20.setManage(C46);C20.setParent(C14);C20.setRow(C16);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setFlow("DOWN");C20.setAlignment("TOPCENTER");C20.setMarginLeft(8);C20.setMarginRight(8);C20.setMarginTop(8);C20.iC();C21.setAlignment("TOPCENTER");C21.setColumn(C15);
C21.setParent(C14);C21.setRow(C17);C21.setFlow("DOWN");C21.setMarginBottom(56);C21.setMarginLeft(8);C21.setMarginRight(64);C21.setMarginTop(8);C21.iC();C22.setColumn(C15);C22.setFlow("DOWN");C22.setManage(C47);C22.setParent(C14);C22.setRow(C16);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setAlignment("TOPCENTER");C22.setMarginLeft(8);C22.setMarginRight(8);C22.iC();C23.setAlignment("TOPCENTER");C23.setColumn(C15);C23.setManage(C48);C23.setParent(C14);C23.setRow(C17);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");
C23.setFlow("DOWN");C23.setMarginLeft(8);C23.setMarginRight(8);C23.iC();C24.setAlignment("BOTTOMCENTER");C24.setColumn(C15);C24.setParent(C14);C24.setRow(C17);C24.setSizing("CONTENTWIDTH");C24.setFlow("DOWN");C24.setMarginBottom(8);C24.iC();C25.setAlignment("TOPRIGHT");C25.setColumn(C15);C25.setManage(C49);C25.setParent(C14);C25.setRow(C19);C25.setSizing("CONTENTHEIGHTFITTOWIDTH");C25.iC();C26.setAlignment("TOPCENTER");C26.setColumn(C15);C26.setManage(C43);C26.setParent(C14);C26.setRow(C18);C26.setMarginTop(36);
C26.setMarginRight(8);C26.setMarginLeft(8);C26.iC();C27.iC();C28.setDisplayPosition(1);C28.setParent(C27);C28.iC();C29.setDisplayPosition(1);C29.setParent(C27);C29.iC();C30.setColumn(C29);C30.setManage(C53);C30.setParent(C27);C30.setRow(C28);C30.setSizing("NONE");C30.setFlow("CENTERHORIZONTAL");C30.iC();C31.setColumn(C29);C31.setManage(C51);C31.setParent(C27);C31.setRow(C28);C31.setSizing("NONE");C31.setFlow("CENTERHORIZONTAL");C31.iC();C32.setColumn(C29);C32.setManage(C50);C32.setParent(C27);C32.setRow(C28);
C32.setSizing("NONE");C32.setFlow("CENTERHORIZONTAL");C32.iC();C33.setColumn(C29);C33.setFlow("CENTERHORIZONTAL");C33.setManage(C52);C33.setParent(C27);C33.setRow(C28);C33.setSizing("NONE");C33.iC();C34.setColumn(C29);C34.setManage(C54);C34.setParent(C27);C34.setRow(C28);C34.setSizing("NONE");C34.setFlow("CENTERHORIZONTAL");C34.iC();C35.iC();C36.setParent(C35);C36.setDisplayPosition(1);C36.iC();C37.setParent(C35);C37.setDisplayPosition(1);C37.iC();C38.setColumn(C36);C38.setManage(C50);C38.setParent(C35);
C38.setRow(C37);C38.setSizing("FITTOWIDTH");C38.setFlow("CENTERVERTICAL");C38.iC();C39.setColumn(C36);C39.setManage(C51);C39.setParent(C35);C39.setRow(C37);C39.setSizing("FITTOWIDTH");C39.setFlow("CENTERVERTICAL");C39.iC();C40.setColumn(C36);C40.setManage(C52);C40.setParent(C35);C40.setRow(C37);C40.setSizing("FITTOWIDTH");C40.setFlow("CENTERVERTICAL");C40.iC();C41.setColumn(C36);C41.setManage(C53);C41.setParent(C35);C41.setRow(C37);C41.setSizing("FITTOWIDTH");C41.setFlow("CENTERVERTICAL");C41.iC();
C42.setColumn(C36);C42.setManage(C54);C42.setParent(C35);C42.setRow(C37);C42.setSizing("FITTOWIDTH");C42.setFlow("CENTERVERTICAL");C42.iC();C43.setDisplayPosition(3);C43.setHeight(264);C43.setLeft(8);C43.setParent(this);C43.setTabPosition(1);C43.setTabStop(false);C43.setTop(166);C43.setWidth(764);C43.setThemeDrawStyle("BorderTheme500");C43.setGridLines("HORIZONTAL");C43.setAxes("LEFT");C43.iC();C44.setParent(C43);C44.setSource(f.F2);C44.iC();C45.setDisplayPosition(1);C45.setParent(C43);C45.setThemeDrawStyle("Border(249,188,29,1)+Back(45,160,193,.6)");
C45.setDescription("Value");C45.setSource(f.F1);C45.setLineStyle("STRAIGHT");C45.setPointStyle("NONE");C45.iC();C46.setCaption("Title");C46.setDisplayPosition(4);C46.setHeight(52);C46.setLeft(8);C46.setParent(this);C46.setTabPosition(2);C46.setWidth(764);C46.setCaptionAlignment("CENTER");C46.setStyle(C1);C46.setWordWrap(true);C46.setTop(8);C46.setCaptionMarginBottom(4);C46.setCaptionMarginLeft(4);C46.setCaptionMarginRight(4);C46.setCaptionMarginTop(4);C46.iC();C47.setCaption("Heading 3");C47.setDisplayPosition(5);
C47.setLeft(8);C47.setParent(this);C47.setTabPosition(3);C47.setWidth(764);C47.setHeight(37);C47.setCaptionAlignment("CENTER");C47.setThemeDrawStyle("ForegroundSecondary");C47.setStyle(C2);C47.setWordWrap(true);C47.setTop(60);C47.setCaptionMarginBottom(8);C47.setCaptionMarginLeft(4);C47.setCaptionMarginRight(4);C47.setCaptionMarginTop(4);C47.iC();C48.setCaption("Exchange Rate History");C48.setDisplayPosition(2);C48.setLeft(8);C48.setParent(this);C48.setTabPosition(4);C48.setThemeDrawStyle("Heading1");
C48.setTop(97);C48.setWidth(764);C48.setStyle(C2);C48.setHeight(33);C48.setCaptionMarginBottom(4);C48.setCaptionMarginLeft(4);C48.setCaptionMarginRight(4);C48.setCaptionMarginTop(4);C48.iC();C49.setDisplayPosition(1);C49.setLeft(0);C49.setParent(this);C49.setTabPosition(5);C49.setTop(430);C49.setLayoutManager(C35);C49.setWidth(780);C49.iC();C50.setCaption("5Y");C50.setDisplayPosition(1);C50.setLeft(0);C50.setTabPosition(1);C50.setTabStop(true);C50.setTop(-65);C50.setWidth(780);C50.setThemeDrawStyle("ForegroundDarkPrimary");
C50.setParent(C49);C50.setIconHeight(0);C50.iC();C51.setCaption("1Y");C51.setDisplayPosition(2);C51.setLeft(0);C51.setTabPosition(2);C51.setTabStop(true);C51.setTop(-29);C51.setWidth(780);C51.setThemeDrawStyle("ForegroundDarkPrimary");C51.setParent(C49);C51.setIconHeight(0);C51.iC();C52.setCaption("30D");C52.setDisplayPosition(3);C52.setLeft(0);C52.setTabPosition(3);C52.setTabStop(true);C52.setTop(7);C52.setWidth(780);C52.setThemeDrawStyle("ForegroundDarkPrimary");C52.setButtonDefault(true);C52.setParent(C49);
C52.setIconHeight(0);C52.iC();C53.setCaption("7D");C53.setDisplayPosition(4);C53.setLeft(0);C53.setTabPosition(5);C53.setTabStop(true);C53.setTop(43);C53.setWidth(780);C53.setThemeDrawStyle("ForegroundDarkPrimary");C53.setParent(C49);C53.setIconHeight(0);C53.iC();C54.setCaption("24H");C54.setDisplayPosition(5);C54.setLeft(0);C54.setTabPosition(4);C54.setTabStop(true);C54.setTop(79);C54.setWidth(780);C54.setThemeDrawStyle("ForegroundDarkPrimary");C54.setParent(C49);C54.setIconHeight(0);C54.iC();C55.aD();
C55.iC();C56.aD();C56.iC();C57.aD();C57.iC();C58.aD();C58.iC();l.WEB().aH("DEVICECHANGED",this,e1);C50.aH("CLICK",this,e2);C51.aH("CLICK",this,e2);C52.aH("CLICK",this,e2);C53.aH("CLICK",this,e2);C54.aH("CLICK",this,e2);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(780);this.setHeight(480);this.setLayoutManager(C14);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#sys_web.DeviceChanged",73);r.ln=73;{r.ln=75;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=77;m.LINECHART.setAxes("NONE");
r.ln=78;m.STYLECONVERSION.setFontSize(20);r.ln=79;m.STYLEVALUE.setFontSize(14);r.ln=80;m.PANELFILTER.setLayoutManager(m.LAYOUTFILTERMOBILE);r.ln=81;this.setLayoutManager(m.LAYOUTMAINMOBILE);}else{r.ln=85;m.LINECHART.setAxes("LEFT");r.ln=86;m.STYLECONVERSION.setFontSize(32);r.ln=87;m.STYLEVALUE.setFontSize(18);r.ln=88;m.PANELFILTER.setLayoutManager(m.LAYOUTFILTERDESKTOP);r.ln=89;this.setLayoutManager(m.LAYOUTMAINDESKTOP);}}r.ln=93;r.e();};cO.mthSHOWCRYPTO=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowCrypto",95);
var P0=r.cPF("ITIMEFRAME",Fd.F2.Dc);P0.set(p0);r.ln=95;{r.ln=98;m.INITIALAMOUNT.set(m.APPDATA.ref.getCRYPTOEXCHANGEAMOUNT());r.ln=99;m.CONVERTEDAMOUNT.set(l.zap(l.mul(l.zap(m.APPDATA.ref.getCRYPTOEXCHANGEAMOUNT(),30,12),m.APPDATA.ref.getCRYPTOCURRENCYVALUE()),30,12));r.ln=100;m.CURRENCYFROM.set(m.APPDATA.ref.getCRYPTOCURRENCYNAME());r.ln=101;m.CURRENCYTO.set(m.APPDATA.ref.getCRYPTOCURRENCYTO());r.ln=103;m.TEXT.set(l.s.Substitute("&1 &2 = &3 &4",l.n.AsDisplayString(m.INITIALAMOUNT.get(),15,6,"EDITCODE_NONE"),m.CURRENCYFROM.get(),l.n.AsDisplayString(m.CONVERTEDAMOUNT.get(),15,6,"EDITCODE_NONE"),m.CURRENCYTO.get()));
r.ln=104;m.TEXT1.set(l.s.Substitute("1 &1 = &2 &3",m.CURRENCYFROM.get(),l.n.AsDisplayString(m.APPDATA.ref.getCRYPTOCURRENCYVALUE(),15,6,"EDITCODE_NONE"),m.CURRENCYTO.get()));r.ln=106;{var l1=m.PANELFILTER.getComponentControls().cI();while(l1.step()){var BUTTON=r.sR("BUTTON",l1.item());if(l.nIo(BUTTON,"PRIM_MD.TabItem")){continue;}r.ln=108;if(l.s.ne(BUTTON.getCaption(),P0.get())){continue;}r.ln=110;BUTTON.mthSETFOCUS();r.ln=112;break;r.ln=114;}l1.end();r.dR("BUTTON");}r.ln=116;cO.mthPOPULATECHART.call(this,P0.get());
r.ln=118;l.gW("XLXMAIN").mthLOADINGCOMPLETE();}r.ln=120;r.e();};cO.mthPOPULATECHART=function(p0){var f=this.FLD.XLXCRYTOR,m=this.REF,r=l.mR(this,cO,"PopulateChart",123);var P0=r.cPF("ITIMEFRAME",Fd.F2.Dc);P0.set(p0);var C0=r.cF("MINDATE",Fd.F3.Dc);C0.iC();r.ln=123;{r.ln=127;m.LINECHART.clearList();r.ln=129;m.LINECHARTCAPTION.setCaption(l.cat(l.cat(l.cat(m.APPDATA.ref.getFOREIGNEXCHANGEFROM()," To "),m.APPDATA.ref.getFOREIGNEXCHANGETO())," History"));r.ln=131;m.LINECHART.getPrimaryAxis().setBeginAtZero(false);
r.ln=133;{var l1=m.APPDATA.ref.getCRYPTOHISTORY().cI();while(l1.step()){var ENTRY=r.sR("ENTRY",l1.item());r.ln=135;if(l.s.ne(ENTRY.getCRYPTOHISTORYTIMEFRAME(),P0.get())){continue;}r.ln=137;f.F1.set(ENTRY.getCRYPTOVALUE());r.ln=139;f.F2.set(l.cat(l.cat(l.d.AsString(l.dt.Date(ENTRY.getCRYPTOCURRENCYDATETIME())),l.n.AsUnicodeString(10)),l.t.AsDisplayString(l.dt.Time(ENTRY.getCRYPTOCURRENCYDATETIME()),"HHSMMSSS")));r.ln=141;m.LINECHART.addEntry();r.ln=143;}l1.end();r.dR("ENTRY");}r.ln=145;l.gW("XLXMAIN").mthLOADINGCOMPLETE();
}r.ln=147;r.e();};function e2(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#Filter5years.Click #Filter1Year.Click #FILTER30DAYS.Click #FILTER7DAYS.Click #FILTER24HOURS.Click",151);r.ln=151;{r.ln=153;l.gW("XLXMAIN").mthLOADING();r.ln=155;l.WEB().getHistory().mthADD(l.s.Substitute("view=cryptoconvert&from=&1&to=&2&amount=&3&period=&4",l.n.AsString(m.APPDATA.ref.getCRYPTOCURRENCYFROM()),m.APPDATA.ref.getCRYPTOCURRENCYTO(),l.n.AsString(m.INITIALAMOUNT.get()),SENDER.getCaption()));}r.ln=157;r.e();};{Fd.F1.Dc=function()
{this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XLXDECIMA"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XLXSTRING"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XLXDATE"});}},{rc:["XLXAPPDA"],rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_CHRT.LineChart","PRIM_CHRT.LineChartCaption","PRIM_CHRT.LineChartValue","PRIM_MD.Label","PRIM_PANL","PRIM_MD.TabItem","PRIM_FLD","PRIM_DTIM"]
});