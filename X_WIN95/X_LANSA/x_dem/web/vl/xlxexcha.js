﻿LANSA.addComponent({id:"XLXEXCHA",nm:"xLXExchangeControls",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Exchange Controls",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{ic:0,nm:"XLXSTRING",an:"xLXString",ft:"NV",ln:512,dc:0,lb:"String Value",h1:"String",h2:"Value",h3:"",de:"String Value",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{PopulateCurrencies:{},SetDropdownDisplay:{ps:{"CurrencyCode":{pt:"i"},"CurrencyName":
{pt:"i"},"CurrencySymbol":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XLXEXCHA",Fd);var C0=this.cA("APPDATA","XLXAPPDA");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("STYLE2","PRIM_VS","Style");var C3=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C4=this.cR("LAYOUTMAINMOBILE","PRIM_TBLO");var C5=this.cR("LAYOUTMAINMOBILECOLUMN1","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMAINMOBILECOLUMN2","PRIM_TBLO","Column");var C7=this.cR("LAYOUTMAINMOBILECOLUMN3","PRIM_TBLO","Column");var C8=this.cR("LAYOUTMAINMOBILEROW1","PRIM_TBLO","Row");
var C9=this.cR("LAYOUTMAINMOBILEROW2","PRIM_TBLO","Row");var C10=this.cR("LAYOUTMAINMOBILEROW3","PRIM_TBLO","Row");var C11=this.cR("LAYOUTMAINMOBILEITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTMAINMOBILEITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTMAINMOBILEITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMAINMOBILEITEM4","PRIM_TBLO","Item");var C15=this.cR("LAYOUTMAINMOBILEITEM5","PRIM_TBLO","Item");var C16=this.cR("LAYOUTMAINDESKTOP","PRIM_TBLO");var C17=this.cR("LAYOUTMAINDESKTOPCOLUMN1","PRIM_TBLO","Column");
var C18=this.cR("LAYOUTMAINDESKTOPCOLUMN2","PRIM_TBLO","Column");var C19=this.cR("LAYOUTMAINDESKTOPCOLUMN3","PRIM_TBLO","Column");var C20=this.cR("LAYOUTMAINDESKTOPCOLUMN4","PRIM_TBLO","Column");var C21=this.cR("LAYOUTMAINDESKTOPCOLUMN5","PRIM_TBLO","Column");var C22=this.cR("LAYOUTMAINDESKTOPCOLUMN6","PRIM_TBLO","Column");var C23=this.cR("LAYOUTMAINDESKTOPCOLUMN7","PRIM_TBLO","Column");var C24=this.cR("LAYOUTMAINDESKTOPROW1","PRIM_TBLO","Row");var C25=this.cR("LAYOUTMAINDESKTOPITEM1","PRIM_TBLO","Item");
var C26=this.cR("LAYOUTMAINDESKTOPITEM2","PRIM_TBLO","Item");var C27=this.cR("LAYOUTMAINDESKTOPITEM3","PRIM_TBLO","Item");var C28=this.cR("LAYOUTMAINDESKTOPITEM4","PRIM_TBLO","Item");var C29=this.cR("LAYOUTMAINDESKTOPITEM5","PRIM_TBLO","Item");var C30=this.cR("DROPDOWNCURRENCYTO","PRIM_MD","Dropdown");var C31=this.cR("DROPDOWNCURRENCYFROM","PRIM_MD","Dropdown");var C32=this.cR("ICON","PRIM_MD","Icon");var C33=this.cR("EXCHANGEAMOUNT","PRIM_MD","SpinEdit");var C34=this.cR("BUTTON","PRIM_MD","RaisedButton");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setCornerBottomLeft(10);C1.setCornerBottomRight(10);C1.setCornerTopLeft(10);C1.setCornerTopRight(10);C1.setBorderLeft(1);C1.setBorderTop(1);C1.setBorderRight(1);C1.setBorderBottom(1);C1.iC();C2.setBackgroundBrush(C3);C2.iC();C3.setColor("THEME700");C3.setOpacity(60);C3.iC();C4.setSizing("CONTENTHEIGHT");C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.setMinWidth(100);C5.setMaxWidth(140);C5.setWidth(2);C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);
C6.setMinWidth(140);C6.setWidth(3);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.setMaxWidth(80);C7.setMinWidth(40);C7.iC();C8.setDisplayPosition(1);C8.setParent(C4);C8.setHeight(56);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(2);C9.setParent(C4);C9.setHeight(56);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(3);C10.setParent(C4);C10.setHeight(8);C10.setUnits("PIXELS");C10.iC();C11.setColumn(C7);C11.setManage(C34);C11.setParent(C4);C11.setRow(C8);C11.setMarginLeft(8);C11.setMarginRight(8);
C11.setRowSpan(2);C11.setSizing("FITTOWIDTH");C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C6);C12.setManage(C30);C12.setParent(C4);C12.setRow(C9);C12.setMarginTop(8);C12.setMarginRight(8);C12.setMarginLeft(4);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C6);C13.setManage(C31);C13.setParent(C4);C13.setRow(C8);C13.setMarginLeft(4);C13.setMarginRight(8);C13.setMarginTop(8);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C5);C14.setManage(C33);C14.setParent(C4);C14.setRow(C8);C14.setMarginLeft(8);
C14.setMarginRight(4);C14.setMarginTop(8);C14.iC();C15.setColumn(C5);C15.setManage(C32);C15.setParent(C4);C15.setRow(C9);C15.setMarginTop(8);C15.iC();C16.setSizing("CONTENTHEIGHT");C16.iC();C17.setDisplayPosition(1);C17.setParent(C16);C17.setWidth(2);C17.iC();C18.setDisplayPosition(2);C18.setParent(C16);C18.setMinWidth(125);C18.setMaxWidth(150);C18.setWidth(6);C18.iC();C19.setDisplayPosition(3);C19.setParent(C16);C19.setMinWidth(220);C19.setMaxWidth(320);C19.setWidth(10);C19.iC();C20.setDisplayPosition(4);
C20.setParent(C16);C20.setMinWidth(65);C20.setMaxWidth(65);C20.setUnits("PIXELS");C20.setWidth(65);C20.iC();C21.setDisplayPosition(5);C21.setParent(C16);C21.setMinWidth(220);C21.setMaxWidth(320);C21.setWidth(9);C21.iC();C22.setDisplayPosition(6);C22.setParent(C16);C22.setMinWidth(125);C22.setMaxWidth(150);C22.setWidth(6);C22.iC();C23.setDisplayPosition(7);C23.setParent(C16);C23.setWidth(2);C23.iC();C24.setDisplayPosition(1);C24.setParent(C16);C24.setHeight(88);C24.setUnits("PIXELS");C24.iC();C25.setColumn(C19);
C25.setManage(C31);C25.setParent(C16);C25.setRow(C24);C25.setMarginLeft(8);C25.setMarginRight(8);C25.setMarginBottom(16);C25.setMarginTop(16);C25.iC();C26.setColumn(C18);C26.setManage(C33);C26.setParent(C16);C26.setRow(C24);C26.setMarginLeft(8);C26.setMarginRight(8);C26.setMarginBottom(16);C26.setMarginTop(16);C26.iC();C27.setColumn(C20);C27.setManage(C32);C27.setParent(C16);C27.setRow(C24);C27.setSizing("FITTOWIDTH");C27.setMarginLeft(8);C27.setMarginRight(8);C27.iC();C28.setColumn(C21);C28.setManage(C30);
C28.setParent(C16);C28.setRow(C24);C28.setMarginLeft(8);C28.setMarginRight(8);C28.setMarginBottom(16);C28.setMarginTop(16);C28.iC();C29.setColumn(C22);C29.setManage(C34);C29.setParent(C16);C29.setRow(C24);C29.setMarginLeft(8);C29.setMarginRight(8);C29.setMarginBottom(16);C29.setMarginTop(16);C29.iC();C30.setCaption("Currency To");C30.setParent(this);C30.setDisplayPosition(4);C30.setTabPosition(1);C30.setLeft(540);C30.setTop(16);C30.setWidth(220);C30.setHelperPosition("NONE");C30.setHeight(56);C30.setCaptionColor("THEME700");
C30.setPlaceholderColor("THEME400");C30.setAppearance("EDITBOX");C30.setStyle(C1);C30.iC();C31.setCaption("Currency From");C31.setParent(this);C31.setDisplayPosition(2);C31.setTabPosition(2);C31.setLeft(211);C31.setTop(16);C31.setWidth(248);C31.setHelperPosition("NONE");C31.setHeight(56);C31.setCaptionColor("THEME700");C31.setPlaceholderColor("THEME400");C31.setAppearance("EDITBOX");C31.setStyle(C1);C31.iC();C32.setDisplayPosition(3);C32.setIcon("compare_arrows");C32.setLeft(475);C32.setParent(this);
C32.setTabPosition(3);C32.setTop(20);C32.setIconHeight(40);C32.setThemeDrawStyle("Text(255,255,255,1)");C32.setWidth(49);C32.iC();C33.setDisplayPosition(1);C33.setLeft(61);C33.setParent(this);C33.setTabPosition(4);C33.setTop(16);C33.setWidth(134);C33.setAppearance("EDITBOX");C33.setHeight(56);C33.setHelperPosition("NONE");C33.setPlaceholder("Amount");C33.setCaption("Amount");C33.setCaptionColor("THEME700");C33.setPlaceholderColor("THEME400");C33.setIconThemeDrawStyle("Text(255,255,255,1)");C33.setPromptIconColor("255:255:255");
C33.setStyle(C1);C33.iC();C34.setCaption("Go");C34.setDisplayPosition(5);C34.setLeft(776);C34.setParent(this);C34.setTabPosition(5);C34.setThemeDrawStyle("MediumAccent");C34.setWidth(134);C34.setHeight(56);C34.setStyle(C1);C34.setTop(16);C34.iC();l.WEB().aH("DEVICECHANGED",this,e1);C30.aH("CHANGED",this,e4);C31.aH("CHANGED",this,e3);C32.aH("CLICK",this,e5);C33.aH("CHANGED",this,e2);C34.aH("CLICK",this,e6);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(970);
this.setLayoutManager(C16);this.setStyle(C2);this.setHeight(88);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",52);r.ln=52;{r.ln=54;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=56;this.setLayoutManager(m.LAYOUTMAINMOBILE);r.ln=57;m.ICON.setRotation(90);r.ln=58;m.BUTTON.setHeight(40);}else{r.ln=62;this.setLayoutManager(m.LAYOUTMAINDESKTOP);r.ln=63;m.ICON.setRotation(0);r.ln=64;m.BUTTON.setHeight(48);}}r.ln=68;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ExchangeAmount.Changed",70);
r.ln=70;{r.ln=72;m.APPDATA.ref.setFOREIGNEXCHANGEAMOUNT(m.EXCHANGEAMOUNT.get());}r.ln=74;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DropdownCurrencyFrom.Changed",76);r.ln=76;{r.ln=78;m.APPDATA.ref.setFOREIGNEXCHANGEFROM(m.DROPDOWNCURRENCYFROM.getValue());}r.ln=80;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DropdownCurrencyTO.Changed",82);r.ln=82;{r.ln=84;m.APPDATA.ref.setFOREIGNEXCHANGETO(m.DROPDOWNCURRENCYTO.getValue());}r.ln=86;r.e();};function e5(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Icon.Click",88);var C0=r.cF("TEMPFROM",Fd.F1.Dc);var C1=r.cF("TEMPTO",Fd.F1.Dc);C0.iC();C1.iC();r.ln=88;{r.ln=93;C0.set(m.DROPDOWNCURRENCYFROM.get());r.ln=94;C1.set(m.DROPDOWNCURRENCYTO.get());r.ln=96;m.APPDATA.ref.setFOREIGNEXCHANGEFROM(C1.get());m.DROPDOWNCURRENCYFROM.set(C1.get());r.ln=97;m.APPDATA.ref.setFOREIGNEXCHANGETO(C0.get());m.DROPDOWNCURRENCYTO.set(C0.get());}r.ln=99;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button.Click",101);r.ln=101;
{r.ln=103;l.gW("XLXMAIN").mthLOADING();r.ln=107;l.WEB().getHistory().mthADD(l.s.Substitute("view=forexconvert&from=&1&to=&2&amount=&3",m.DROPDOWNCURRENCYFROM.get(),m.DROPDOWNCURRENCYTO.get(),l.n.AsString(m.EXCHANGEAMOUNT.getValue())));}r.ln=110;r.e();};cO.mthPOPULATECURRENCIES=function(){var m=this.REF,r=l.mR(this,cO,"PopulateCurrencies",112);var C0=r.cR("ITEMCOUNT","PRIM_NMBR");C0.iC();r.ln=112;{r.ln=116;{var l1=m.APPDATA.ref.getCURRENCIES().cI();while(l1.step()){var CURRENCY=r.sR("CURRENCY",l1.item());
r.ln=118;C0.set(l.add(C0.get(),1));r.ln=120;m.DROPDOWNCURRENCYFROM.getItems().mthADD(CURRENCY.getCURRENCYCODE(),cO.mthSETDROPDOWNDISPLAY.call(this,CURRENCY.getCURRENCYCODE(),CURRENCY.getCURRENCYNAME(),CURRENCY.getCURRENCYSYMBOL()));r.ln=121;m.DROPDOWNCURRENCYTO.getItems().mthADD(CURRENCY.getCURRENCYCODE(),cO.mthSETDROPDOWNDISPLAY.call(this,CURRENCY.getCURRENCYCODE(),CURRENCY.getCURRENCYNAME(),CURRENCY.getCURRENCYSYMBOL()));r.ln=123;m.DROPDOWNCURRENCYFROM.getItems().getItem(C0.get()).setIconFileName(CURRENCY.getCURRENCYFLAGICON());
r.ln=124;m.DROPDOWNCURRENCYFROM.getItems().getItem(C0.get()).setIconImageSizing("NONE");r.ln=125;m.DROPDOWNCURRENCYFROM.getItems().getItem(C0.get()).setIconThemeDrawStyle("Rounded");r.ln=126;m.DROPDOWNCURRENCYFROM.getItems().getItem(C0.get()).setIconHeight(20);r.ln=127;m.DROPDOWNCURRENCYTO.getItems().getItem(C0.get()).setIconFileName(CURRENCY.getCURRENCYFLAGICON());r.ln=128;m.DROPDOWNCURRENCYTO.getItems().getItem(C0.get()).setIconImageSizing("NONE");r.ln=129;m.DROPDOWNCURRENCYTO.getItems().getItem(C0.get()).setIconHeight(20);
r.ln=130;m.DROPDOWNCURRENCYTO.getItems().getItem(C0.get()).setIconThemeDrawStyle("Rounded");r.ln=132;}l1.end();r.dR("CURRENCY");}r.ln=134;m.EXCHANGEAMOUNT.set(m.APPDATA.ref.getFOREIGNEXCHANGEAMOUNT());r.ln=136;m.DROPDOWNCURRENCYFROM.set(m.APPDATA.ref.getFOREIGNEXCHANGEFROM());r.ln=138;m.DROPDOWNCURRENCYTO.set(m.APPDATA.ref.getFOREIGNEXCHANGETO());r.ln=140;m.APPDATA.ref.mthGETEXCHANGETABLE();}r.ln=142;r.e();};cO.mthSETDROPDOWNDISPLAY=function(p0,p1,p2){var r=l.mR(this,cO,"SetDropdownDisplay",145);
var P0=r.cP("CURRENCYCODE","PRIM_STR");var P1=r.cP("CURRENCYNAME","PRIM_STR");var P2=r.cP("CURRENCYSYMBOL","PRIM_STR");var P3=r.cP("RESULT","PRIM_STR");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=145;{r.ln=151;P3.set(l.s.Substitute("&1 - &2 (&3)",P0.get(),P1.get(),P2.get()));}r.ln=153;return r.rV(P3.get());};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XLXSTRING"});}},{rc:["XLXAPPDA"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Dropdown","PRIM_MD.Icon","PRIM_MD.SpinEdit","PRIM_MD.RaisedButton","PRIM_FLD"],
dp:["PRIM_NMBR"]});