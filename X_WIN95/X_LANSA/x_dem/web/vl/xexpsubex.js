﻿LANSA.addComponent({id:"XEXPSUBEX",nm:"xEXPsubmitexpense",ot:"wv",tp:"Dialog",de:"Submit and expense",tl:14020004},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEXPDESC",an:"xExpenseDescription",ft:"NV",ln:50,dc:0,lb:{"ENG":"Description","FRA":"Notes","JPN":"Description","LLL":"Description"}[cL],h1:{"ENG":"Description","FRA":"Notes","JPN":"Description","LLL":"Description"}[cL],h2:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":"","LLL":""}[cL],
de:{"ENG":"Description","FRA":"Notes","JPN":"Description","LLL":"Description"}[cL],dv:"",ia:["FE","LC"]},F2:{nm:"STD_AMNT",ft:"P",ln:9,dc:2,ec:"A",lb:{"ENG":"Amount","FRA":"Montant","JPN":"Amount","LLL":"Amount"}[cL],h1:{"ENG":"Amount","FRA":"Montant","JPN":"Amount","LLL":"Amount"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard AMOUNT","FRA":"Montant Standard","JPN":"Standard AMOUNT","LLL":"Standard AMOUNT"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],
h1:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard","JPN":"Standard TEXT","LLL":"Standard TEXT"}[cL],dv:"",ia:["LC"]}};var cO=l.rC(oI,{an:"PRIM_DLG",fd:Fd,pt:{Caption:{da:"rw"},CaptionRight:{da:"rw"},SumOfLineItems:{da:"rw"}},mt:{AddCard:{ps:{"Expense":{pt:"i"}}},uAddExpense:{}},co:function(){cO.aN.call(this);var f=this.aF("XEXPSUBEX",Fd);var C0=this.cR("STYLECARD","PRIM_VS","Style");var C1=this.cR("STYLECAPTION","PRIM_VS","Style");
var C2=this.cR("STYLEHEADER","PRIM_VS","Style");var C3=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C4=this.cR("BRUSHHEADER","PRIM_VS","SolidBrush");var C5=this.cR("LAYOUTMAIN","PRIM_TBLO");var C6=this.cR("ROW1MAIN","PRIM_TBLO","Row");var C7=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");var C8=this.cR("ITEM1MAIN","PRIM_TBLO","Item");var C9=this.cR("LAYOUTCARD","PRIM_TBLO");var C10=this.cR("COLUMN1CARD","PRIM_TBLO","Column");var C11=this.cR("ROW1CARD","PRIM_TBLO","Row");var C12=this.cR("ROW2CARD","PRIM_TBLO","Row");
var C13=this.cR("LAYOUTCARDROW1","PRIM_TBLO","Row");var C14=this.cR("ITEM1CARD","PRIM_TBLO","Item");var C15=this.cR("ITEM2CARD","PRIM_TBLO","Item");var C16=this.cR("ITEM3CARD","PRIM_TBLO","Item");var C17=this.cR("ITEM4CARD","PRIM_TBLO","Item");var C18=this.cR("LAYOUTCARDITEM1","PRIM_TBLO","Item");var C19=this.cR("LAYOUTCARDHEADER","PRIM_TBLO");var C20=this.cR("COLUMN1CARDHEADER","PRIM_TBLO","Column");var C21=this.cR("ROW1CARDHEADER","PRIM_TBLO","Row");var C22=this.cR("ITEM1CARDHEADER","PRIM_TBLO","Item");
var C23=this.cR("ITEM2CARDHEADER","PRIM_TBLO","Item");var C24=this.cR("LAYOUTCARDHEADERITEM1","PRIM_TBLO","Item");var C25=this.cR("LAYOUTCARDHEADERITEM2","PRIM_TBLO","Item");var C26=this.cR("LAYOUTCARDHEADERITEM3","PRIM_TBLO","Item");var C27=this.cR("LAYOUTCARDHEADERITEM4","PRIM_TBLO","Item");var C28=this.cR("LAYOUTCARDHEADERITEM5","PRIM_TBLO","Item");var C29=this.cR("LAYOUTCARDHEADERITEM6","PRIM_TBLO","Item");var C30=this.cR("CARD","PRIM_PANL");var C31=this.cR("EXPENSELIST","PRIM_TREE");var C32=this.cR("LABELEXPENSEDESCRIPTION","PRIM_MD","Label");
var C33=this.cR("LABELEXPENSEVALUE","PRIM_MD","Label");var C34=this.cR("CARDHEADERPANEL","PRIM_PANL");var C35=this.cR("LABELTOTAL","PRIM_MD","Label");var C36=this.cR("LABELNUMBEROFLINES","PRIM_MD","Label");var C37=this.cR("BUTTONSUBMIT","PRIM_MD","RaisedButton");var C38=this.cF("XEXPENSEDESCRIPTION",Fd.F1.EDITFIELD);var C39=this.cR("LABELEXPENSEID","PRIM_MD","Label");var C40=this.cF("SUMOFLINEITEMS",Fd.F2.Dc);var C41=this.cA("APPLICATION","XEXPAPPL");C0.setTextColor("3DMEDIUMSHADOW");C0.iC();C1.setFontSize(18);
C1.setFontUnits("PIXEL");C1.iC();C2.setBackgroundBrush(C4);C2.setForegroundBrush(C3);C2.iC();C3.setColor("THEMETEXT");C3.iC();C4.setColor("217:217:217");C4.setOpacity(80);C4.iC();C5.setSizing("CONTENTHEIGHT");C5.setMarginLeft(5);C5.setMarginRight(5);C5.setMarginTop(10);C5.setMarginBottom(3);C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.setHeight(361);C6.setUnits("CONTENT");C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setColumn(C7);C8.setManage(C30);C8.setParent(C5);C8.setRow(C6);
C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.setAlignment("TOPCENTER");C8.iC();C9.setSizing("CONTENTHEIGHT");C9.iC();C10.setParent(C9);C10.setDisplayPosition(1);C10.iC();C11.setParent(C9);C11.setDisplayPosition(1);C11.setUnits("PIXELS");C11.setHeight(150);C11.iC();C12.setParent(C9);C12.setDisplayPosition(2);C12.setHeight(184);C12.setUnits("CONTENT");C12.iC();C13.setDisplayPosition(3);C13.setParent(C9);C13.setHeight(25);C13.setUnits("PIXELS");C13.iC();C14.setManage(C31);C14.setColumn(C10);C14.setParent(C9);
C14.setRow(C12);C14.setAlignment("TOPCENTER");C14.setSizing("FITTOWIDTH");C14.setMarginTop(2);C14.setMarginLeft(2);C14.setMarginRight(2);C14.setFlow("DOWN");C14.iC();C15.setAlignment("CENTERLEFT");C15.setColumn(C10);C15.setParent(C9);C15.setRow(C11);C15.setSizing("FITTOHEIGHT");C15.iC();C16.setAlignment("CENTERRIGHT");C16.setColumn(C10);C16.setManage(C33);C16.setParent(C9);C16.setRow(C11);C16.setSizing("FITTOHEIGHT");C16.iC();C17.setColumn(C10);C17.setManage(C34);C17.setParent(C9);C17.setRow(C11);
C17.setFlow("DOWN");C17.setAlignment("TOPCENTER");C17.setSizing("FITTOWIDTH");C17.iC();C18.setManage(C37);C18.setParent(C9);C18.setRow(C13);C18.setSizing("FITTOHEIGHT");C18.setColumn(C10);C18.setAlignment("BOTTOMRIGHT");C18.setFlow("DOWN");C18.iC();C19.iC();C20.setDisplayPosition(1);C20.setParent(C19);C20.iC();C21.setDisplayPosition(1);C21.setParent(C19);C21.iC();C22.setColumn(C20);C22.setManage(C33);C22.setParent(C19);C22.setRow(C21);C22.setSizing("FITTOWIDTH");C22.setMarginRight(2);C22.setFlow("DOWN");
C22.setAlignment("TOPCENTER");C22.iC();C23.setColumn(C20);C23.setParent(C19);C23.setRow(C21);C23.setSizing("NONE");C23.setFlow("LEFT");C23.setAlignment("TOPLEFT");C23.iC();C24.setParent(C19);C24.setRow(C21);C24.setSizing("NONE");C24.setColumn(C20);C24.setAlignment("TOPRIGHT");C24.setFlow("LEFT");C24.iC();C25.setManage(C35);C25.setParent(C19);C25.setRow(C21);C25.setSizing("FITTOWIDTH");C25.setColumn(C20);C25.setFlow("DOWN");C25.setAlignment("TOPCENTER");C25.iC();C26.setManage(C36);C26.setParent(C19);
C26.setRow(C21);C26.setSizing("FITTOWIDTH");C26.setColumn(C20);C26.setFlow("DOWN");C26.setAlignment("TOPCENTER");C26.iC();C27.setManage(C38);C27.setParent(C19);C27.setRow(C21);C27.setSizing("FITTOWIDTH");C27.setColumn(C20);C27.setAlignment("TOPCENTER");C27.setFlow("DOWN");C27.setMarginTop(30);C27.iC();C28.setManage(C32);C28.setParent(C19);C28.setRow(C21);C28.setSizing("CONTENTHEIGHT");C28.setColumn(C20);C28.setAlignment("TOPLEFT");C28.iC();C29.setManage(C39);C29.setParent(C19);C29.setRow(C21);C29.setSizing("CONTENTHEIGHT");
C29.setColumn(C20);C29.setAlignment("TOPRIGHT");C29.setMarginRight(7);C29.iC();C30.setParent(this);C30.setDisplayPosition(1);C30.setTabPosition(1);C30.setLayoutManager(C9);C30.setStyle(C0);C30.setLeft(5);C30.setWidth(582);C30.setThemeDrawStyle("Card+Shadow1");C30.setHeight(361);C30.iC();C31.setParent(C30);C31.setDisplayPosition(2);C31.setTabPosition(1);C31.setHeight(182);C31.setLeft(2);C31.setTop(152);C31.setWidth(576);C31.setThemeDrawStyle("BottomDivider");C31.iC();C32.setCaption("Submit Expense");
C32.setDisplayPosition(4);C32.setLeft(0);C32.setParent(C34);C32.setTabPosition(3);C32.setTop(0);C32.setWidth(193);C32.setHeight(31);C32.setThemeDrawStyle("Heading1");C32.iC();C33.setCaption("$81.00");C33.setDisplayPosition(3);C33.setLeft(0);C33.setParent(C34);C33.setTabPosition(1);C33.setTop(94);C33.setWidth(578);C33.setStyle(C1);C33.setCaptionAlignment("CENTER");C33.setHeight(34);C33.iC();C34.setDisplayPosition(3);C34.setLeft(0);C34.setParent(C30);C34.setTabPosition(3);C34.setTabStop(false);C34.setTop(0);
C34.setLayoutManager(C19);C34.setHeight(148);C34.setWidth(580);C34.setStyle(C2);C34.setThemeDrawStyle("BottomDivider");C34.iC();C35.setCaption("Total");C35.setDisplayPosition(2);C35.setLeft(0);C35.setParent(C34);C35.setTabPosition(4);C35.setTop(71);C35.setCaptionAlignment("CENTER");C35.setWidth(580);C35.setHeight(23);C35.iC();C36.setCaption("Number of lines");C36.setDisplayPosition(5);C36.setLeft(0);C36.setParent(C34);C36.setTabPosition(5);C36.setTop(128);C36.setWidth(580);C36.setHeight(20);C36.setCaptionAlignment("CENTER");
C36.setThemeDrawStyle("Subheading");C36.iC();C37.setCaption("Submit for Approval");C37.setDisplayPosition(1);C37.setLeft(440);C37.setParent(C30);C37.setTabPosition(2);C37.setTop(334);C37.setHeight(25);C37.setWidth(140);C37.setThemeBackground("DARK");C37.iC();C38.setDisplayPosition(1);C38.setLeft(0);C38.setTabPosition(2);C38.setParent(C34);C38.setTop(30);C38.setWidth(580);C38.setHeight(41);C38.aD();C38.iC();C39.setCaption("#12345");C39.setDisplayPosition(6);C39.setLeft(473);C39.setParent(C34);C39.setTabPosition(6);
C39.setThemeDrawStyle("Heading1");C39.setTop(0);C39.setHeight(31);C39.setCaptionAlignment("CENTERRIGHT");C39.iC();C40.aD();C40.iC();if((C41!=null)&&(C41.iI()==false)){C41.iC();}C37.aH("CLICK",this,e2);C38.aH("CHANGED",this,e3);C41.aH("UMYEXPENSESREADY",this,e1);C31.aDS("XEXPLIST");C31.aLF({"STD_TEXT":f.F3});this.setLayoutManager(C5);this.setHeight(376);this.setWidth(594);this.setPlacement("FULLSCREEN");}});function e1(sender,Ps){var r=l.eR(this,cO,"#Application.uMyExpensesReady",73);r.ln=73;{r.ln=75;
this.mthUADDEXPENSE();}r.ln=77;r.e();};cO.mthADDCARD=function(p0){var m=this.REF,r=l.mR(this,cO,"AddCard",82);var P0=r.cPD("EXPENSE");P0=p0;r.ln=82;{r.ln=86;m.EXPENSELIST.addEntry();r.ln=88;m.EXPENSELIST.getCurrentItem().setRelatedReference(P0);r.ln=90;l.cast(m.EXPENSELIST.getCurrentItem().getDesign(),"XEXPLIST").setSHOWMONTH(false);}r.ln=92;r.e();};cO.mthUADDEXPENSE=function(){var m=this.REF,r=l.mR(this,cO,"uAddExpense",94);r.ln=94;{r.ln=96;m.LABELNUMBEROFLINES.set(l.cat("# of Expense Lines: ",l.n.AsString(m.APPLICATION.ref.getUNUMBEROFDETAILS())));
r.ln=97;m.LABELEXPENSEVALUE.set(l.n.AsString(m.APPLICATION.ref.getEXPENSES().get(1).getUEXPENSETOTAL()));r.ln=98;m.LABELEXPENSEID.setCaption(l.cat("#",l.n.AsString(m.APPLICATION.ref.getEXPENSES().get(1).getUEXPENSEID())));r.ln=99;m.XEXPENSEDESCRIPTION.set(m.APPLICATION.ref.getEXPENSES().get(1).getUEXPENSEDESCRIPTION());r.ln=101;{var l1=m.APPLICATION.ref.getEXPENSES().cI();while(l1.step()){var EXPENSEDETAIL=r.sR("EXPENSEDETAIL",l1.item());r.ln=103;EXPENSEDETAIL.setUSHOWCATEGORY(true);r.ln=105;this.mthADDCARD(EXPENSEDETAIL);
r.ln=107;}l1.end();r.dR("EXPENSEDETAIL");}r.ln=109;this.mthSHOW();}r.ln=111;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonSubmit.Click",113);r.ln=113;{r.ln=115;m.APPLICATION.ref.mthUSUBMITEXPENSE(m.XEXPENSEDESCRIPTION.get(),l.s.AsNumber(m.LABELEXPENSEID.getCaption()));}r.ln=117;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#xExpenseDescription.Changed",119);r.ln=119;{r.ln=121;m.BUTTONSUBMIT.setEnabled(l.s.ne(m.XEXPENSEDESCRIPTION.get(),""));}r.ln=123;r.e();};
cO.getCAPTION=function(){return this.REF.LABELEXPENSEDESCRIPTION.get();};cO.setCAPTION=function(v){this.REF.LABELEXPENSEDESCRIPTION.set(v);};cO.getCAPTIONRIGHT=function(){return this.REF.LABELEXPENSEVALUE.get();};cO.setCAPTIONRIGHT=function(v){this.REF.LABELEXPENSEVALUE.set(v);};cO.getSUMOFLINEITEMS=function(){return this.REF.SUMOFLINEITEMS.get();};cO.setSUMOFLINEITEMS=function(v){this.REF.SUMOFLINEITEMS.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEXPDESC"});
Fd.F1.EDITFIELD=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XEXPDESC",cn:"EditField"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_AMNT"});}},{rc:["XEXPAPPL"],rp:["PRIM_DLG","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_PANL","PRIM_TREE","PRIM_MD.Label","PRIM_MD.RaisedButton","PRIM_MD.EditField","PRIM_FLD"],dc:["XEXPLIST"]});