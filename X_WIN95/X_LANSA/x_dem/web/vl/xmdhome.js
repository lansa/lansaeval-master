﻿LANSA.addComponent({id:"XMDHOME",nm:"xMdHome",ot:"wv",tp:"View",de:"Material Design Home",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xmdimg010.jpg");var rc2=l.cB("xmdimg003.jpg");var Fd={F1:{nm:"STD_DATEX",ft:"D",ln:10,dc:0,lb:{"ENG":"Std RDMLX date","FRA":"?","JPN":"?","LLL":"Std RDMLX date"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"RDMLX","FRA":"?","JPN":"?","LLL":"RDMLX"}[cL],
h3:{"ENG":"Date","FRA":"?","JPN":"?","LLL":"Date"}[cL],de:{"ENG":"Standard RDMLX date","FRA":"?","JPN":"?","LLL":"Standard RDMLX date"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,rm:["dt"],ev:{ShowCards:{},ShowPickers:{},ShowDialogs:{},ShowSelections:{}},co:function(){cO.aN.call(this);this.aF("XMDHOME",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("STYLE2","PRIM_VS","Style");var C3=this.cR("STYLE3","PRIM_VS","Style");
var C4=this.cR("STYLE4","PRIM_VS","Style");var C5=this.cR("LAYOUT1","PRIM_TBLO");var C6=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUT1ITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEMPANELTOP","PRIM_TBLO","Item");var C12=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C13=this.cR("LAYOUT1ITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUT1ITEM6","PRIM_TBLO","Item");
var C15=this.cR("FLOWLAYOUT1","PRIM_FWLM");var C16=this.cR("FLOWLAYOUT1ITEM1","PRIM_FWLI");var C17=this.cR("FLOWLAYOUT1ITEM2","PRIM_FWLI");var C18=this.cR("LAYOUTCARDITEM4","PRIM_TBLO","Item");var C19=this.cR("LAYOUTCARDITEM5","PRIM_TBLO","Item");var C20=this.cR("FLOWLAYOUT1ITEM4","PRIM_FWLI");var C21=this.cR("FLOWLAYOUT1ITEM5","PRIM_FWLI");var C22=this.cR("LAYOUTCARDITEM6","PRIM_TBLO","Item");var C23=this.cR("LAYOUTCARDITEM7","PRIM_TBLO","Item");var C24=this.cR("FLOWLAYOUT1ITEM3","PRIM_FWLI");var C25=this.cR("LAYOUTCARDITEM9","PRIM_TBLO","Item");
var C26=this.cR("LAYOUTCARDITEM10","PRIM_TBLO","Item");var C27=this.cR("FLOWLAYOUT1ITEM6","PRIM_FWLI");var C28=this.cR("LAYOUTCARDITEM12","PRIM_TBLO","Item");var C29=this.cR("LAYOUTCARDITEM13","PRIM_TBLO","Item");var C30=this.cR("PANELTOP","PRIM_PANL");var C31=this.cR("PANEL_BOTTOM","PRIM_PANL");var C32=this.cR("PANELCARD1","PRIM_PANL");var C33=this.cR("IMAGE1","PRIM_IMAG");var C34=this.cR("LABEL","PRIM_MD","Label");var C35=this.cR("PANEL","PRIM_PANL");var C36=this.cR("BUTTON","PRIM_MD","RaisedButton");
var C37=this.cR("LAYOUTCARD","PRIM_TBLO");var C38=this.cR("LAYOUTCARDROW1","PRIM_TBLO","Row");var C39=this.cR("LAYOUTCARDSCOLUMN1","PRIM_TBLO","Column");var C40=this.cR("LAYOUTCARDITEM1","PRIM_TBLO","Item");var C41=this.cR("LAYOUTCARDITEM2","PRIM_TBLO","Item");var C42=this.cR("LAYOUTCARDITEM3","PRIM_TBLO","Item");var C43=this.cR("LAYOUTCARDITEM8","PRIM_TBLO","Item");var C44=this.cR("LAYOUTCARDITEM11","PRIM_TBLO","Item");var C45=this.cR("LAYOUTCARDITEM14","PRIM_TBLO","Item");var C46=this.cR("LAYOUTCARDITEM15","PRIM_TBLO","Item");
var C47=this.cR("LAYOUTCARDITEM16","PRIM_TBLO","Item");var C48=this.cR("LAYOUTCARDITEM17","PRIM_TBLO","Item");var C49=this.cR("LAYOUTCARDITEM18","PRIM_TBLO","Item");var C50=this.cR("LAYOUTCARDITEM19","PRIM_TBLO","Item");var C51=this.cR("BUTTON2","PRIM_MD","FlatButton");var C52=this.cR("LABEL1","PRIM_MD","Label");var C53=this.cR("LABEL2","PRIM_MD","Label");var C54=this.cR("PANELCARD2","PRIM_PANL");var C55=this.cR("LABEL3","PRIM_MD","Label");var C56=this.cR("DATEPICKER","PRIM_MD","DateTimePicker");
var C57=this.cR("MOREPICKERS","PRIM_MD","FlatButton");var C58=this.cR("CARD2","PRIM_PANL");var C59=this.cR("IMAGE2","PRIM_IMAG");var C60=this.cR("BUTTONSHARE","PRIM_MD","FlatButton");var C61=this.cR("BUTTONEXPLORE","PRIM_MD","FlatButton");var C62=this.cR("DIVIDER","PRIM_PANL");var C63=this.cR("LABELPRIMARY","PRIM_MD","Label");var C64=this.cR("TEXT4","PRIM_MD","Label");var C65=this.cR("TEXT5","PRIM_MD","Label");var C66=this.cR("PANELCARD4","PRIM_PANL");var C67=this.cR("LABEL4","PRIM_MD","Label");var C68=this.cR("MORECARDS","PRIM_MD","FlatButton");
var C69=this.cR("PANELCARD3","PRIM_PANL");var C70=this.cR("LABEL5","PRIM_MD","Label");var C71=this.cR("MOREDIALOGS","PRIM_MD","FlatButton");var C72=this.cR("CARDDIALOG","PRIM_PANL");var C73=this.cR("CARDDIALOGBUTTON","PRIM_MD","FlatButton");var C74=this.cR("CARDDIALOGBUTTON1","PRIM_MD","FlatButton");var C75=this.cR("CARDDIALOGLABEL1","PRIM_MD","Label");var C76=this.cR("CARDDIALOGLABEL2","PRIM_MD","Label");var C77=this.cR("PANELCARD5","PRIM_PANL");var C78=this.cR("LABEL6","PRIM_MD","Label");var C79=this.cR("MORESELECTION","PRIM_MD","FlatButton");
var C80=this.cR("CHECKBOX","PRIM_MD","CheckBox");var C81=this.cR("CHECKBOX1","PRIM_MD","CheckBox");var C82=this.cR("SWITCH","PRIM_MD","Switch");var C83=this.cR("RADIOBUTTON","PRIM_MD","RadioButton");var C84=this.cR("RADIOBUTTON1","PRIM_MD","RadioButton");var C85=this.cR("RADIOBUTTON2","PRIM_MD","RadioButton");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("0:0:0");C1.setOpacity(35);C1.iC();C2.setCursor("HAND");C2.iC();C3.setCursor("HAND");C3.iC();C4.setCursor("HAND");C4.iC();C5.iC();C6.setDisplayPosition(1);
C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setColumn(C7);C8.setManage(C33);C8.setParent(C5);C8.setRow(C6);C8.iC();C9.setColumn(C7);C9.setManage(C34);C9.setParent(C5);C9.setRow(C6);C9.setSizing("CONTENTHEIGHTFITTOWIDTH");C9.setFlow("DOWN");C9.setMarginLeft(20);C9.setMarginRight(20);C9.iC();C10.setColumn(C7);C10.setManage(C36);C10.setParent(C5);C10.setRow(C6);C10.setSizing("NONE");C10.setFlow("DOWN");C10.setMarginTop(20);C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C7);
C11.setManage(C30);C11.setParent(C5);C11.setRow(C6);C11.setFlow("DOWN");C11.setSizing("FITTOWIDTH");C11.iC();C12.setColumn(C7);C12.setParent(C5);C12.setRow(C6);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C7);C13.setManage(C31);C13.setParent(C5);C13.setRow(C6);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setFlow("DOWN");C13.iC();C14.setColumn(C7);C14.setManage(C35);C14.setParent(C5);C14.setRow(C6);C14.iC();C15.setSpacing(20);C15.setSpacingItems(30);C15.setMarginBottom(30);C15.setMarginLeft(30);
C15.setMarginRight(30);C15.setMarginTop(30);C15.iC();C16.setManage(C32);C16.setParent(C15);C16.iC();C17.setManage(C54);C17.setParent(C15);C17.iC();C18.setAlignment("TOPCENTER");C18.setColumn(C39);C18.setManage(C55);C18.setParent(C37);C18.setRow(C38);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");C18.iC();C19.setAlignment("BOTTOMRIGHT");C19.setColumn(C39);C19.setManage(C57);C19.setParent(C37);C19.setRow(C38);C19.setSizing("NONE");C19.setFlow("LEFT");C19.setMarginBottom(10);C19.setMarginRight(10);
C19.iC();C20.setManage(C58);C20.setParent(C15);C20.iC();C21.setManage(C66);C21.setParent(C15);C21.iC();C22.setAlignment("TOPCENTER");C22.setColumn(C39);C22.setManage(C67);C22.setParent(C37);C22.setRow(C38);C22.setSizing("FITTOWIDTH");C22.setFlow("DOWN");C22.iC();C23.setAlignment("BOTTOMRIGHT");C23.setColumn(C39);C23.setManage(C68);C23.setParent(C37);C23.setRow(C38);C23.setSizing("NONE");C23.setFlow("LEFT");C23.setMarginBottom(10);C23.setMarginRight(10);C23.iC();C24.setManage(C69);C24.setParent(C15);
C24.iC();C25.setAlignment("TOPCENTER");C25.setColumn(C39);C25.setManage(C70);C25.setParent(C37);C25.setRow(C38);C25.setSizing("FITTOWIDTH");C25.setFlow("DOWN");C25.iC();C26.setAlignment("BOTTOMRIGHT");C26.setColumn(C39);C26.setManage(C71);C26.setParent(C37);C26.setRow(C38);C26.setSizing("NONE");C26.setFlow("LEFT");C26.setMarginBottom(10);C26.setMarginRight(10);C26.iC();C27.setManage(C77);C27.setParent(C15);C27.iC();C28.setAlignment("TOPCENTER");C28.setColumn(C39);C28.setManage(C78);C28.setParent(C37);
C28.setRow(C38);C28.setSizing("FITTOWIDTH");C28.setFlow("DOWN");C28.iC();C29.setAlignment("BOTTOMRIGHT");C29.setColumn(C39);C29.setManage(C79);C29.setParent(C37);C29.setRow(C38);C29.setSizing("NONE");C29.setFlow("LEFT");C29.setMarginBottom(10);C29.setMarginRight(10);C29.iC();C30.setParent(this);C30.setDisplayPosition(1);C30.setTabPosition(1);C30.setLayoutManager(C5);C30.setHeight(337);C30.setLeft(0);C30.setTop(0);C30.setWidth(1279);C30.iC();C31.setParent(this);C31.setDisplayPosition(2);C31.setTabPosition(2);
C31.setLeft(0);C31.setTop(337);C31.setWidth(1279);C31.setHeight(942);C31.setLayoutManager(C15);C31.iC();C32.setParent(C31);C32.setDisplayPosition(1);C32.setTabPosition(5);C32.setLeft(30);C32.setTop(30);C32.setHeight(339);C32.setWidth(339);C32.setThemeDrawStyle("Card");C32.setLayoutManager(C37);C32.iC();C33.setDisplayPosition(4);C33.setImage(rc1);C33.setLeft(0);C33.setParent(C30);C33.setTabPosition(2);C33.setTabStop(false);C33.setImageSizing("CROPPED");C33.setTop(0);C33.setHeight(337);C33.setWidth(1279);
C33.iC();C34.setCaption("GO FASTER WITH VISUAL LANSA AND MATERIAL DESIGN");C34.setDisplayPosition(1);C34.setLeft(20);C34.setParent(C30);C34.setTabPosition(4);C34.setTabStop(false);C34.setTop(145);C34.setThemeBackground("DARK");C34.setWidth(1239);C34.setThemeDrawStyle("Title");C34.setHeight(47);C34.setStyle(C2);C34.setWordWrap(true);C34.setCaptionAlignment("TOPCENTER");C34.iC();C35.setDisplayPosition(3);C35.setLeft(0);C35.setParent(C30);C35.setTabPosition(1);C35.setTabStop(false);C35.setTop(0);C35.setHeight(337);
C35.setWidth(1279);C35.setStyle(C0);C35.iC();C36.setCaption("FIND OUT MORE");C36.setDisplayPosition(2);C36.setLeft(540);C36.setParent(C30);C36.setTabPosition(3);C36.setTabStop(false);C36.setThemeDrawStyle("MediumSuccess+Heading1");C36.setTop(212);C36.setHeight(43);C36.setWidth(199);C36.setStyle(C3);C36.setThemeBackground("DARK");C36.iC();C37.iC();C38.setDisplayPosition(1);C38.setParent(C37);C38.iC();C39.setDisplayPosition(1);C39.setParent(C37);C39.iC();C40.setAlignment("BOTTOMRIGHT");C40.setColumn(C39);
C40.setManage(C51);C40.setParent(C37);C40.setRow(C38);C40.setSizing("NONE");C40.setFlow("LEFT");C40.setMarginBottom(10);C40.setMarginRight(10);C40.iC();C41.setAlignment("TOPCENTER");C41.setColumn(C39);C41.setManage(C52);C41.setParent(C37);C41.setRow(C38);C41.setSizing("FITTOWIDTH");C41.setFlow("DOWN");C41.iC();C42.setAlignment("TOPCENTER");C42.setColumn(C39);C42.setManage(C53);C42.setParent(C37);C42.setRow(C38);C42.setSizing("FITTOWIDTH");C42.setFlow("DOWN");C42.iC();C43.setAlignment("TOPCENTER");
C43.setColumn(C39);C43.setManage(C58);C43.setParent(C37);C43.setRow(C38);C43.setSizing("NONE");C43.setFlow("DOWN");C43.iC();C44.setAlignment("TOPCENTER");C44.setColumn(C39);C44.setManage(C72);C44.setParent(C37);C44.setRow(C38);C44.setSizing("NONE");C44.setFlow("DOWN");C44.setMarginTop(10);C44.iC();C45.setAlignment("TOPCENTER");C45.setColumn(C39);C45.setManage(C80);C45.setParent(C37);C45.setRow(C38);C45.setSizing("FITTOWIDTH");C45.setFlow("DOWN");C45.setMarginLeft(20);C45.setMarginRight(20);C45.setMarginTop(10);
C45.iC();C46.setAlignment("TOPCENTER");C46.setColumn(C39);C46.setManage(C81);C46.setParent(C37);C46.setRow(C38);C46.setSizing("FITTOWIDTH");C46.setFlow("DOWN");C46.setMarginLeft(20);C46.setMarginRight(20);C46.setMarginTop(10);C46.iC();C47.setAlignment("TOPCENTER");C47.setColumn(C39);C47.setManage(C82);C47.setParent(C37);C47.setRow(C38);C47.setSizing("FITTOWIDTH");C47.setFlow("DOWN");C47.setMarginLeft(20);C47.setMarginRight(20);C47.setMarginTop(10);C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C39);
C48.setManage(C83);C48.setParent(C37);C48.setRow(C38);C48.setSizing("FITTOWIDTH");C48.setFlow("DOWN");C48.setMarginLeft(20);C48.setMarginRight(20);C48.setMarginTop(10);C48.iC();C49.setAlignment("TOPCENTER");C49.setColumn(C39);C49.setManage(C84);C49.setParent(C37);C49.setRow(C38);C49.setSizing("FITTOWIDTH");C49.setFlow("DOWN");C49.setMarginLeft(20);C49.setMarginRight(20);C49.setMarginTop(10);C49.iC();C50.setAlignment("TOPCENTER");C50.setColumn(C39);C50.setManage(C85);C50.setParent(C37);C50.setRow(C38);
C50.setSizing("FITTOWIDTH");C50.setFlow("DOWN");C50.setMarginLeft(20);C50.setMarginRight(20);C50.setMarginTop(10);C50.iC();C51.setCaption("FIND OUT MORE");C51.setDisplayPosition(1);C51.setLeft(194);C51.setParent(C32);C51.setTabPosition(2);C51.setTabStop(false);C51.setThemeDrawStyle("ForegroundMediumPrimary");C51.setTop(291);C51.setWidth(133);C51.setStyle(C4);C51.iC();C52.setCaption("What is Material Design?");C52.setDisplayPosition(2);C52.setLeft(0);C52.setParent(C32);C52.setTabPosition(3);C52.setTabStop(false);
C52.setThemeDrawStyle("Heading1+Strong");C52.setTop(0);C52.setWidth(337);C52.setWordWrap(true);C52.setCaptionMarginTop(20);C52.setHeight(57);C52.setCaptionAlignment("TOPLEFT");C52.setCaptionMarginLeft(20);C52.setCaptionMarginRight(20);C52.setPaddingBottom(10);C52.iC();C53.setCaption("Material Design is a design language developed in 2014 by Google. Expanding upon the \"card\" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.");
C53.setDisplayPosition(3);C53.setLeft(0);C53.setParent(C32);C53.setTabPosition(1);C53.setTabStop(false);C53.setThemeDrawStyle("Heading3+ForegroundSecondary");C53.setTop(57);C53.setWidth(337);C53.setWordWrap(true);C53.setCaptionMarginTop(20);C53.setHeight(216);C53.setCaptionAlignment("TOPLEFT");C53.setCaptionMarginLeft(20);C53.setCaptionMarginRight(20);C53.setPaddingBottom(10);C53.iC();C54.setParent(C31);C54.setDisplayPosition(2);C54.setTabPosition(4);C54.setLeft(399);C54.setTop(30);C54.setHeight(480);
C54.setWidth(340);C54.setThemeDrawStyle("Card");C54.setLayoutManager(C37);C54.iC();C55.setCaption("First look Date Picker");C55.setDisplayPosition(1);C55.setLeft(0);C55.setParent(C54);C55.setTabPosition(1);C55.setTabStop(false);C55.setThemeDrawStyle("Heading1+Strong");C55.setTop(0);C55.setWidth(338);C55.setWordWrap(true);C55.setCaptionMarginTop(20);C55.setHeight(57);C55.setCaptionAlignment("TOPLEFT");C55.setCaptionMarginLeft(20);C55.setCaptionMarginRight(20);C55.setPaddingBottom(10);C55.iC();C56.setDisplayPosition(2);
C56.setLeft(20);C56.setParent(C54);C56.setTabPosition(3);C56.setTabStop(false);C56.setTop(71);C56.setHeight(350);C56.iC();C57.setCaption("FIND OUT MORE");C57.setDisplayPosition(3);C57.setLeft(195);C57.setParent(C54);C57.setTabPosition(2);C57.setTabStop(false);C57.setThemeDrawStyle("ForegroundMediumPrimary");C57.setTop(432);C57.setWidth(133);C57.setStyle(C4);C57.iC();C58.setThemeDrawStyle("Card");C58.setDisplayPosition(2);C58.setHeight(320);C58.setLayoutManager(C5);C58.setLeft(29);C58.setParent(C66);
C58.setTabPosition(3);C58.setTabStop(false);C58.setTop(57);C58.setWidth(350);C58.iC();C59.setDisplayPosition(2);C59.setImage(rc2);C59.setLeft(0);C59.setParent(C58);C59.setTabPosition(1);C59.setTabStop(false);C59.setTop(0);C59.setWidth(348);C59.setHeight(180);C59.setImageSizing("FITBOTH");C59.iC();C60.setCaption("SHARE");C60.setDisplayPosition(3);C60.setLeft(5);C60.setParent(C58);C60.setTabPosition(2);C60.setTabStop(false);C60.setTop(277);C60.iC();C61.setCaption("EXPLORE");C61.setDisplayPosition(4);
C61.setLeft(110);C61.setParent(C58);C61.setTabPosition(3);C61.setTabStop(false);C61.setThemeDrawStyle("ForegroundMediumAccent");C61.setTop(277);C61.iC();C62.setDisplayPosition(5);C62.setLeft(0);C62.setParent(C58);C62.setTabPosition(4);C62.setTabStop(false);C62.setThemeDrawStyle("BottomDivider");C62.setTop(264);C62.setWidth(348);C62.setHeight(4);C62.iC();C63.setCaption("Primary Heading");C63.setDisplayPosition(1);C63.setLeft(0);C63.setParent(C58);C63.setTabPosition(5);C63.setTabStop(false);C63.setTop(132);
C63.setWidth(348);C63.setHeight(48);C63.setCaptionMarginLeft(20);C63.setThemeDrawStyle("Heading2");C63.setThemeBackground("DARK");C63.iC();C64.setCaption("Secondary heading");C64.setDisplayPosition(6);C64.setLeft(0);C64.setParent(C58);C64.setTabPosition(6);C64.setTabStop(false);C64.setThemeDrawStyle("ForegroundSecondary");C64.setTop(180);C64.setWidth(348);C64.setCaptionMarginLeft(20);C64.iC();C65.setCaption("Card description and extra details");C65.setDisplayPosition(7);C65.setLeft(0);C65.setParent(C58);
C65.setTabPosition(7);C65.setTabStop(false);C65.setTop(216);C65.setWidth(348);C65.setCaptionMarginLeft(20);C65.iC();C66.setParent(C31);C66.setDisplayPosition(3);C66.setTabPosition(3);C66.setLeft(769);C66.setTop(30);C66.setHeight(443);C66.setWidth(410);C66.setThemeDrawStyle("Card");C66.setLayoutManager(C37);C66.iC();C67.setCaption("First look Cards");C67.setDisplayPosition(1);C67.setLeft(0);C67.setParent(C66);C67.setTabPosition(1);C67.setTabStop(false);C67.setThemeDrawStyle("Heading1+Strong");C67.setTop(0);
C67.setWidth(408);C67.setWordWrap(true);C67.setCaptionMarginTop(20);C67.setHeight(57);C67.setCaptionAlignment("TOPLEFT");C67.setCaptionMarginLeft(20);C67.setCaptionMarginRight(20);C67.setPaddingBottom(10);C67.iC();C68.setCaption("FIND OUT MORE");C68.setDisplayPosition(3);C68.setLeft(265);C68.setParent(C66);C68.setTabPosition(2);C68.setTabStop(false);C68.setThemeDrawStyle("ForegroundMediumPrimary");C68.setTop(395);C68.setWidth(133);C68.setStyle(C4);C68.iC();C69.setParent(C31);C69.setDisplayPosition(4);
C69.setTabPosition(2);C69.setLeft(30);C69.setTop(530);C69.setHeight(412);C69.setWidth(347);C69.setThemeDrawStyle("Card");C69.setLayoutManager(C37);C69.iC();C70.setCaption("First look Dialogs");C70.setDisplayPosition(1);C70.setLeft(0);C70.setParent(C69);C70.setTabPosition(1);C70.setTabStop(false);C70.setThemeDrawStyle("Heading1+Strong");C70.setTop(0);C70.setWidth(345);C70.setWordWrap(true);C70.setCaptionMarginTop(20);C70.setHeight(57);C70.setCaptionAlignment("TOPLEFT");C70.setCaptionMarginLeft(20);
C70.setCaptionMarginRight(20);C70.setPaddingBottom(10);C70.iC();C71.setCaption("FIND OUT MORE");C71.setDisplayPosition(2);C71.setLeft(202);C71.setParent(C69);C71.setTabPosition(3);C71.setTabStop(false);C71.setThemeDrawStyle("ForegroundMediumPrimary");C71.setTop(364);C71.setWidth(133);C71.setStyle(C4);C71.iC();C72.setDisplayPosition(3);C72.setLeft(28);C72.setParent(C69);C72.setTabPosition(2);C72.setTabStop(false);C72.setThemeDrawStyle("Card+ForegroundMediumPrimary");C72.setTop(67);C72.setHeight(281);
C72.setWidth(289);C72.iC();C73.setCaption("AGREE");C73.setDisplayPosition(1);C73.setLeft(177);C73.setParent(C72);C73.setTabPosition(2);C73.setTabStop(false);C73.setThemeDrawStyle("ForegroundMediumPrimary");C73.setTop(233);C73.iC();C74.setCaption("DISAGREE");C74.setDisplayPosition(2);C74.setLeft(67);C74.setParent(C72);C74.setTabPosition(4);C74.setTabStop(false);C74.setThemeDrawStyle("ForegroundMediumPrimary");C74.setTop(233);C74.iC();C75.setCaption("Use Google's location service?");C75.setDisplayPosition(3);
C75.setLeft(0);C75.setParent(C72);C75.setTabPosition(3);C75.setTabStop(false);C75.setThemeDrawStyle("Heading1+Strong");C75.setTop(0);C75.setWidth(281);C75.setWordWrap(true);C75.setCaptionMarginTop(20);C75.setHeight(89);C75.setCaptionAlignment("TOPLEFT");C75.setCaptionMarginLeft(20);C75.setCaptionMarginRight(20);C75.setPaddingBottom(10);C75.iC();C76.setCaption("Let apps use Google's location service to estimate your location faster. Anonymous location data will be collected and sent to Google");C76.setDisplayPosition(4);
C76.setLeft(8);C76.setParent(C72);C76.setTabPosition(1);C76.setTabStop(false);C76.setThemeDrawStyle("Heading3+ForegroundSecondary");C76.setTop(80);C76.setWidth(273);C76.setWordWrap(true);C76.setCaptionMarginTop(20);C76.setHeight(129);C76.setCaptionAlignment("TOPLEFT");C76.setCaptionMarginLeft(20);C76.setCaptionMarginRight(20);C76.setPaddingBottom(10);C76.iC();C77.setParent(C31);C77.setDisplayPosition(5);C77.setTabPosition(1);C77.setLeft(407);C77.setTop(530);C77.setHeight(412);C77.setWidth(347);C77.setThemeDrawStyle("Card");
C77.setLayoutManager(C37);C77.iC();C78.setCaption("First look Selection");C78.setDisplayPosition(1);C78.setLeft(0);C78.setParent(C77);C78.setTabPosition(1);C78.setTabStop(false);C78.setThemeDrawStyle("Heading1+Strong");C78.setTop(0);C78.setWidth(345);C78.setWordWrap(true);C78.setCaptionMarginTop(20);C78.setHeight(57);C78.setCaptionAlignment("TOPLEFT");C78.setCaptionMarginLeft(20);C78.setCaptionMarginRight(20);C78.setPaddingBottom(10);C78.iC();C79.setCaption("FIND OUT MORE");C79.setDisplayPosition(2);
C79.setLeft(202);C79.setParent(C77);C79.setTabPosition(2);C79.setTabStop(false);C79.setThemeDrawStyle("ForegroundMediumPrimary");C79.setTop(364);C79.setWidth(133);C79.setStyle(C4);C79.iC();C80.setCaption("Standard Checkbox");C80.setCheckState("CHECKED");C80.setDisplayPosition(3);C80.setLeft(20);C80.setParent(C77);C80.setTabPosition(3);C80.setTop(67);C80.setWidth(305);C80.setIconAlignment("CENTERRIGHT");C80.setHeight(30);C80.iC();C81.setCaption("Primary Checkbox");C81.setCheckState("CHECKED");C81.setDisplayPosition(4);
C81.setIconColor("THEME500");C81.setLeft(20);C81.setParent(C77);C81.setTabPosition(4);C81.setTop(107);C81.setWidth(305);C81.setIconAlignment("CENTERRIGHT");C81.setHeight(30);C81.iC();C82.setChecked(true);C82.setDisplayPosition(5);C82.setIconColor("THEMEACCENTMEDIUM");C82.setLeft(20);C82.setParent(C77);C82.setTabPosition(5);C82.setTop(147);C82.setWidth(305);C82.setIconAlignment("CENTERRIGHT");C82.setCaption("Accent Switch");C82.iC();C83.setCaption("Standard RadioButton");C83.setDisplayPosition(6);
C83.setLeft(20);C83.setParent(C77);C83.setTabPosition(6);C83.setTop(187);C83.setWidth(305);C83.setIconAlignment("CENTERRIGHT");C83.setHeight(30);C83.iC();C84.setCaption("Primary RadioButton");C84.setDisplayPosition(7);C84.setIconColor("THEME500");C84.setLeft(20);C84.setParent(C77);C84.setTabPosition(7);C84.setTop(227);C84.setWidth(305);C84.setIconAlignment("CENTERRIGHT");C84.setHeight(30);C84.iC();C85.setCaption("Accent RadioButton");C85.setChecked(true);C85.setDisplayPosition(8);C85.setIconColor("THEMEACCENTMEDIUM");
C85.setLeft(20);C85.setParent(C77);C85.setTabPosition(8);C85.setTop(267);C85.setWidth(305);C85.setIconAlignment("CENTERRIGHT");C85.setHeight(30);C85.iC();C36.aH("CLICK",this,e7);C51.aH("CLICK",this,e1);C57.aH("CLICK",this,e3);C68.aH("CLICK",this,e4);C71.aH("CLICK",this,e5);C79.aH("CLICK",this,e6);this.setLayoutManager(C5);this.setHeight(865);this.setVerticalScroll(true);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1297);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Button2.Click",114);
r.ln=114;{r.ln=116;l.WEB().mthNAVIGATE("https://material.io/guidelines/","NEW");}r.ln=118;r.e();};function e2(sender,Ps){var f=this.FLD.XMDHOME,m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",120);r.ln=120;{r.ln=122;m.DATEPICKER.setValue(l.d.Now(f.F1.get()));}r.ln=127;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#MorePickers.Click",143);r.ln=143;{r.ln=145;this.fE("SHOWPICKERS");}r.ln=147;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#MoreCards.Click",149);r.ln=149;{r.ln=151;this.fE("SHOWCARDS");
}r.ln=153;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#MoreDialogs.Click",155);r.ln=155;{r.ln=157;this.fE("SHOWDIALOGS");}r.ln=159;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#MoreSelection.Click",161);r.ln=161;{r.ln=163;this.fE("SHOWSELECTIONS");}r.ln=165;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#Button.Click",167);r.ln=167;{r.ln=169;l.WEB().mthNAVIGATE("https://www.lansa.com","NEW");}r.ln=171;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_FWLM","PRIM_FWLI","PRIM_PANL","PRIM_IMAG","PRIM_MD.Label","PRIM_MD.RaisedButton","PRIM_MD.FlatButton","PRIM_MD.DateTimePicker","PRIM_MD.CheckBox","PRIM_MD.Switch","PRIM_MD.RadioButton","PRIM_DTIM"]
});