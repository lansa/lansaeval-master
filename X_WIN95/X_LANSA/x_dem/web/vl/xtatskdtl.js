﻿LANSA.addComponent({id:"XTATSKDTL",nm:"XTATaskDetailDialog",ot:"wv",tp:"Dialog",pt:"ap",de:"Tasks Task Details Dialog",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec(".87");var Fd={F1:{nm:"XTASKID",an:"xTaskId",ft:"I",ln:4,dc:0,lb:"Task ID",h1:"Task",h2:"ID",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Task ID",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_DLG",fd:Fd,mt:{ShowDetail:{ps:{"Task":{pt:"i"}}},DeleteTask:
{}},ev:{TaskDeleted:{}},co:function(){cO.aN.call(this);this.aF("XTATSKDTL",Fd);var C0=this.cR("HEADERIMAGESTYLE","PRIM_VS","Style");var C1=this.cR("BRUSHFOREGROUNDAVATAR","PRIM_VS","SolidBrush");var C2=this.cR("BRUSHBACKGROUNDAVATAR","PRIM_VS","SolidBrush");var C3=this.cR("BRUSHBORDERAVATAR","PRIM_VS","SolidBrush");var C4=this.cR("STYLE_PRIORITYTEXT","PRIM_VS","Style");var C5=this.cR("BRUSHPRIORITY1","PRIM_VS","SolidBrush");var C6=this.cR("LAYOUTMAIN","PRIM_TBLO");var C7=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");
var C8=this.cR("ROW1MAIN","PRIM_TBLO","Row");var C9=this.cR("ROW2MAIN","PRIM_TBLO","Row");var C10=this.cR("ROW3MAIN","PRIM_TBLO","Row");var C11=this.cR("LAYOUTITEM1MAIN","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM2MAIN","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM3MAIN","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMOBILEMENUBAR","PRIM_TBLO");var C15=this.cR("ROW1MOBILEMENUBAR","PRIM_TBLO","Row");var C16=this.cR("COLUMN1MOBILEMENUBAR","PRIM_TBLO","Column");var C17=this.cR("LAYOUTITEM1MOBILEMENUBAR","PRIM_TBLO","Item");
var C18=this.cR("LAYOUTITEM2MOBILEMENUBAR","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM3MOBILEMENUBAR","PRIM_TBLO","Item");var C20=this.cR("LAYOUTHEADER","PRIM_TBLO");var C21=this.cR("COLUMN1HEADER","PRIM_TBLO","Column");var C22=this.cR("COLUMN2HEADER","PRIM_TBLO","Column");var C23=this.cR("COLUMN3HEADER","PRIM_TBLO","Column");var C24=this.cR("ROW1HEADER","PRIM_TBLO","Row");var C25=this.cR("LAYOUTITEM1HEADER","PRIM_TBLO","Item");var C26=this.cR("LAYOUTITEM2HEADER","PRIM_TBLO","Item");var C27=this.cR("LAYOUTITEM3HEADER","PRIM_TBLO","Item");
var C28=this.cR("LAYOUTMENURIGHT","PRIM_TBLO");var C29=this.cR("ROW1MENURIGHT","PRIM_TBLO","Row");var C30=this.cR("COLUMN1MENURIGHT","PRIM_TBLO","Column");var C31=this.cR("LAYOUTITEM1MENURIGHT","PRIM_TBLO","Item");var C32=this.cR("LAYOUTITEM2MENURIGHT","PRIM_TBLO","Item");var C33=this.cR("LAYOUTITEM3MENURIGHT","PRIM_TBLO","Item");var C34=this.cR("LAYOUTCONTENT","PRIM_TBLO");var C35=this.cR("COLUMN1CONTENT","PRIM_TBLO","Column");var C36=this.cR("COLUMN2CONTENT","PRIM_TBLO","Column");var C37=this.cR("COLUMN3CONTENT","PRIM_TBLO","Column");
var C38=this.cR("COLUMN4CONTENT","PRIM_TBLO","Column");var C39=this.cR("COLUMN5CONTENT","PRIM_TBLO","Column");var C40=this.cR("ROW1CONTENT","PRIM_TBLO","Row");var C41=this.cR("ROW2CONTENT","PRIM_TBLO","Row");var C42=this.cR("ROW3CONTENT","PRIM_TBLO","Row");var C43=this.cR("ROW4CONTENT","PRIM_TBLO","Row");var C44=this.cR("ROW5CONTENT","PRIM_TBLO","Row");var C45=this.cR("ROW6CONTENT","PRIM_TBLO","Row");var C46=this.cR("LAYOUTITEM1CONTENT","PRIM_TBLO","Item");var C47=this.cR("LAYOUTITEM2CONTENT","PRIM_TBLO","Item");
var C48=this.cR("LAYOUTITEM3CONTENT","PRIM_TBLO","Item");var C49=this.cR("LAYOUTITEM4CONTENT","PRIM_TBLO","Item");var C50=this.cR("LAYOUTITEM5CONTENT","PRIM_TBLO","Item");var C51=this.cR("LAYOUTITEM6CONTENT","PRIM_TBLO","Item");var C52=this.cR("LAYOUTITEM7CONTENT","PRIM_TBLO","Item");var C53=this.cR("LAYOUTITEM8CONTENT","PRIM_TBLO","Item");var C54=this.cR("LAYOUTITEM9CONTENT","PRIM_TBLO","Item");var C55=this.cR("LAYOUTITEM10CONTENT","PRIM_TBLO","Item");var C56=this.cR("LAYOUTITEM11CONTENT","PRIM_TBLO","Item");
var C57=this.cR("LAYOUTITEM12CONTENT","PRIM_TBLO","Item");var C58=this.cR("LAYOUTITEM13CONTENT","PRIM_TBLO","Item");var C59=this.cR("PANELMOBILEMENUBAR","PRIM_PANL");var C60=this.cR("PANELHEADER","PRIM_PANL");var C61=this.cR("PANELCONTENT","PRIM_PANL");var C62=this.cR("BUTTONCLOSETOP","PRIM_MD","Icon");var C63=this.cR("BUTTONEDITTOP","PRIM_MD","Icon");var C64=this.cR("BUTTONDELETETOP","PRIM_MD","Icon");var C65=this.cR("HEADERIMAGE","PRIM_MD","Label");var C66=this.cR("HEADERTEXT","PRIM_LABL");var C67=this.cR("PANELMENURIGHT","PRIM_PANL");
var C68=this.cR("BUTTONEDITRIGHT","PRIM_MD","Icon");var C69=this.cR("BUTTONDELETERIGHT","PRIM_MD","Icon");var C70=this.cR("BUTTONCLOSERIGHT","PRIM_MD","Icon");var C71=this.cR("DETAILHEADER","PRIM_MD","Label");var C72=this.cR("TASKDETAILS","PRIM_MD","Label");var C73=this.cR("IMAGEDETAILS","PRIM_MD","Label");var C74=this.cR("TASKREASON","PRIM_MD","Label");var C75=this.cR("IMAGEREASON","PRIM_MD","Label");var C76=this.cR("TASKSTATUS","PRIM_MD","Label");var C77=this.cR("IMAGEASSIGNEDTO","PRIM_MD","Label");
var C78=this.cR("TASKCREATED","PRIM_MD","Label");var C79=this.cR("IMAGEDATES","PRIM_MD","Label");var C80=this.cR("TASKLASTMODIFIED","PRIM_MD","Label");var C81=this.cR("PRIORITYTEXT1","PRIM_MD","Label");var C82=this.cR("PRIORITYTEXT2","PRIM_MD","Label");var C83=this.cR("IMAGEPRIORITY","PRIM_MD","Label");var C84=this.cA("TASKEDITDIALOG","XTATSKEDT");var C85=this.cR("DELETEDIALOG","XTADELETE");C0.setBackgroundBrush(C2);C0.setCornerBottomLeft(30);C0.setCornerBottomRight(30);C0.setCornerTopLeft(30);C0.setCornerTopRight(30);
C0.setBorderBottom(3);C0.setBorderLeft(3);C0.setBorderRight(3);C0.setBorderTop(3);C0.setForegroundBrush(C1);C0.setBorderBrush(C3);C0.iC();C1.setColor("255:255:255");C1.iC();C2.setColor("155:197:61");C2.iC();C3.setColor("207:207:207");C3.iC();C4.setForegroundBrush(C5);C4.iC();C5.setColor("229:89:52");C5.iC();C6.iC();C7.setParent(C6);C7.setDisplayPosition(1);C7.iC();C8.setDisplayPosition(1);C8.setParent(C6);C8.setUnits("CONTENT");C8.setHeight(63);C8.iC();C9.setParent(C6);C9.setDisplayPosition(2);C9.setUnits("PIXELS");
C9.setHeight(110);C9.iC();C10.setParent(C6);C10.setDisplayPosition(3);C10.iC();C11.setColumn(C7);C11.setManage(C59);C11.setParent(C6);C11.setRow(C8);C11.setSizing("FITTOWIDTH");C11.setAlignment("TOPCENTER");C11.iC();C12.setColumn(C7);C12.setManage(C60);C12.setParent(C6);C12.setRow(C9);C12.iC();C13.setManage(C61);C13.setParent(C6);C13.setRow(C10);C13.setColumn(C7);C13.iC();C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.iC();C17.setAlignment("CENTERLEFT");
C17.setColumn(C16);C17.setManage(C62);C17.setParent(C14);C17.setRow(C15);C17.setSizing("NONE");C17.setMarginLeft(16);C17.iC();C18.setAlignment("CENTERRIGHT");C18.setColumn(C16);C18.setManage(C63);C18.setParent(C14);C18.setRow(C15);C18.setSizing("NONE");C18.setFlow("LEFT");C18.setMarginBottom(2);C18.setMarginRight(16);C18.iC();C19.setAlignment("CENTERRIGHT");C19.setColumn(C16);C19.setManage(C64);C19.setParent(C14);C19.setRow(C15);C19.setSizing("NONE");C19.setFlow("LEFT");C19.setMarginBottom(2);C19.setMarginRight(8);
C19.iC();C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.setUnits("PIXELS");C21.setWidth(110);C21.iC();C22.setDisplayPosition(2);C22.setParent(C20);C22.setWidth(c1);C22.iC();C23.setDisplayPosition(3);C23.setParent(C20);C23.setUnits("CONTENT");C23.setWidth(160);C23.iC();C24.setDisplayPosition(1);C24.setParent(C20);C24.iC();C25.setColumn(C22);C25.setManage(C66);C25.setParent(C20);C25.setRow(C24);C25.iC();C26.setColumn(C23);C26.setManage(C67);C26.setParent(C20);C26.setRow(C24);C26.setSizing("FITTOHEIGHT");
C26.iC();C27.setColumn(C21);C27.setManage(C65);C27.setParent(C20);C27.setRow(C24);C27.setSizing("NONE");C27.iC();C28.iC();C29.setDisplayPosition(1);C29.setParent(C28);C29.iC();C30.setDisplayPosition(1);C30.setParent(C28);C30.iC();C31.setAlignment("CENTERRIGHT");C31.setColumn(C30);C31.setManage(C70);C31.setParent(C28);C31.setRow(C29);C31.setSizing("NONE");C31.setFlow("LEFT");C31.setMarginRight(16);C31.iC();C32.setColumn(C30);C32.setFlow("LEFT");C32.setManage(C68);C32.setParent(C28);C32.setRow(C29);
C32.setSizing("NONE");C32.setAlignment("CENTERRIGHT");C32.setMarginRight(8);C32.iC();C33.setAlignment("CENTERRIGHT");C33.setColumn(C30);C33.setManage(C69);C33.setParent(C28);C33.setRow(C29);C33.setSizing("NONE");C33.setFlow("LEFT");C33.setMarginRight(8);C33.iC();C34.iC();C35.setDisplayPosition(1);C35.setParent(C34);C35.setMaxWidth(43);C35.setMinWidth(10);C35.iC();C36.setDisplayPosition(2);C36.setParent(C34);C36.setWidth(24);C36.setUnits("PIXELS");C36.iC();C37.setDisplayPosition(3);C37.setParent(C34);
C37.setMinWidth(10);C37.setMaxWidth(43);C37.iC();C38.setDisplayPosition(4);C38.setParent(C34);C38.setWidth(10);C38.iC();C39.setDisplayPosition(5);C39.setParent(C34);C39.setMinWidth(10);C39.setMaxWidth(43);C39.iC();C40.setDisplayPosition(1);C40.setParent(C34);C40.setHeight(80);C40.setUnits("PIXELS");C40.iC();C41.setDisplayPosition(2);C41.setParent(C34);C41.setHeight(49);C41.setUnits("CONTENT");C41.setMinHeight(48);C41.iC();C42.setDisplayPosition(3);C42.setParent(C34);C42.setHeight(49);C42.setUnits("CONTENT");
C42.setMinHeight(48);C42.iC();C43.setDisplayPosition(4);C43.setParent(C34);C43.setHeight(49);C43.setUnits("CONTENT");C43.setMinHeight(48);C43.iC();C44.setDisplayPosition(5);C44.setParent(C34);C44.setHeight(25);C44.setUnits("CONTENT");C44.setMinHeight(48);C44.iC();C45.setDisplayPosition(6);C45.setParent(C34);C45.setHeight(68);C45.setUnits("CONTENT");C45.setMinHeight(70);C45.iC();C46.setColumn(C36);C46.setManage(C71);C46.setParent(C34);C46.setRow(C40);C46.setSizing("NONE");C46.setAlignment("CENTERLEFT");
C46.setMarginRight(5);C46.iC();C47.setColumn(C38);C47.setManage(C72);C47.setParent(C34);C47.setRow(C41);C47.setAlignment("TOPCENTER");C47.setSizing("CONTENTHEIGHTFITTOWIDTH");C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C36);C48.setManage(C73);C48.setParent(C34);C48.setRow(C41);C48.setSizing("NONE");C48.iC();C49.setColumn(C38);C49.setManage(C74);C49.setParent(C34);C49.setRow(C42);C49.setAlignment("TOPCENTER");C49.setSizing("CONTENTHEIGHTFITTOWIDTH");C49.iC();C50.setAlignment("TOPCENTER");
C50.setColumn(C36);C50.setManage(C75);C50.setParent(C34);C50.setRow(C42);C50.setSizing("NONE");C50.iC();C51.setColumn(C38);C51.setManage(C76);C51.setParent(C34);C51.setRow(C43);C51.setAlignment("TOPCENTER");C51.setSizing("CONTENTHEIGHTFITTOWIDTH");C51.iC();C52.setAlignment("TOPCENTER");C52.setColumn(C36);C52.setManage(C77);C52.setParent(C34);C52.setRow(C43);C52.setSizing("NONE");C52.iC();C53.setColumn(C38);C53.setManage(C78);C53.setParent(C34);C53.setRow(C45);C53.setAlignment("TOPCENTER");C53.setSizing("CONTENTHEIGHTFITTOWIDTH");
C53.setFlow("DOWN");C53.iC();C54.setAlignment("TOPCENTER");C54.setColumn(C36);C54.setManage(C79);C54.setParent(C34);C54.setRow(C45);C54.setSizing("NONE");C54.iC();C55.setColumn(C38);C55.setManage(C80);C55.setParent(C34);C55.setRow(C45);C55.setAlignment("TOPCENTER");C55.setSizing("CONTENTHEIGHTFITTOWIDTH");C55.setFlow("DOWN");C55.setMarginTop(3);C55.iC();C56.setColumn(C38);C56.setManage(C81);C56.setParent(C34);C56.setRow(C44);C56.setAlignment("TOPLEFT");C56.setSizing("CONTENTWIDTH");C56.setFlow("RIGHT");
C56.iC();C57.setColumn(C38);C57.setManage(C82);C57.setParent(C34);C57.setRow(C44);C57.setAlignment("TOPLEFT");C57.setSizing("CONTENTWIDTH");C57.setFlow("RIGHT");C57.setMarginLeft(5);C57.iC();C58.setAlignment("TOPCENTER");C58.setColumn(C36);C58.setManage(C83);C58.setParent(C34);C58.setRow(C44);C58.setSizing("NONE");C58.iC();C59.setDisplayPosition(3);C59.setLeft(0);C59.setParent(this);C59.setTabPosition(3);C59.setTabStop(false);C59.setThemeDrawStyle("BottomDivider");C59.setHeight(63);C59.setWidth(698);
C59.setLayoutManager(C14);C59.setTop(0);C59.iC();C60.setDisplayPosition(2);C60.setLeft(0);C60.setParent(this);C60.setTabPosition(2);C60.setTabStop(false);C60.setHeight(110);C60.setWidth(698);C60.setThemeDrawStyle("BottomDivider+Heading2");C60.setLayoutManager(C20);C60.setTop(63);C60.iC();C61.setParent(this);C61.setDisplayPosition(1);C61.setTabPosition(1);C61.setLayoutManager(C34);C61.setHeight(425);C61.setLeft(0);C61.setTop(173);C61.setWidth(698);C61.setVerticalScroll(true);C61.iC();C62.setDisplayPosition(1);
C62.setHeight(40);C62.setLeft(16);C62.setParent(C59);C62.setTabPosition(3);C62.setTop(11);C62.setWidth(40);C62.setIcon("close");C62.setIconKind("ACTIVE");C62.iC();C63.setDisplayPosition(2);C63.setHeight(40);C63.setLeft(642);C63.setParent(C59);C63.setTabPosition(2);C63.setTop(9);C63.setWidth(40);C63.setIcon("edit");C63.setIconKind("ACTIVE");C63.iC();C64.setDisplayPosition(3);C64.setHeight(40);C64.setLeft(594);C64.setParent(C59);C64.setTabPosition(1);C64.setTop(9);C64.setWidth(40);C64.setIcon("delete");
C64.setIconKind("ACTIVE");C64.iC();C65.setDisplayPosition(1);C65.setHeight(60);C65.setParent(C60);C65.setTabPosition(2);C65.setWidth(60);C65.setLeft(25);C65.setTop(24);C65.setIcon("assignment_turned_in");C65.setStyle(C0);C65.setIconHeight(34);C65.setIconAlignment("CENTER");C65.iC();C66.setCaption("Task Title");C66.setDisplayPosition(2);C66.setEllipses("WORD");C66.setHeight(109);C66.setLeft(110);C66.setParent(C60);C66.setTabPosition(1);C66.setTabStop(false);C66.setTop(0);C66.setVerticalAlignment("CENTER");
C66.setMarginTop(4);C66.setWidth(428);C66.setMarginRight(85);C66.iC();C67.setDisplayPosition(3);C67.setLeft(538);C67.setParent(C60);C67.setTabPosition(3);C67.setTabStop(false);C67.setTop(0);C67.setHeight(109);C67.setWidth(160);C67.setLayoutManager(C28);C67.iC();C68.setDisplayPosition(2);C68.setHeight(40);C68.setLeft(56);C68.setParent(C67);C68.setTabPosition(2);C68.setTop(34);C68.setWidth(40);C68.setIcon("edit");C68.setIconKind("ACTIVE");C68.iC();C69.setDisplayPosition(3);C69.setHeight(40);C69.setLeft(8);
C69.setParent(C67);C69.setTabPosition(1);C69.setTop(34);C69.setWidth(40);C69.setIcon("delete");C69.setIconKind("ACTIVE");C69.iC();C70.setDisplayPosition(1);C70.setHeight(40);C70.setLeft(104);C70.setParent(C67);C70.setTabPosition(3);C70.setTop(34);C70.setWidth(40);C70.setIcon("close");C70.setIconKind("ACTIVE");C70.iC();C71.setCaption("Task details");C71.setDisplayPosition(1);C71.setHeight(25);C71.setParent(C61);C71.setTabPosition(1);C71.setTop(28);C71.setWidth(110);C71.setThemeDrawStyle("Heading3");
C71.setLeft(38);C71.iC();C72.setCaption("This is WHAT needs to be done");C72.setDisplayPosition(2);C72.setParent(C61);C72.setTabPosition(8);C72.setTop(80);C72.setWidth(545);C72.setPaddingBottom(28);C72.setLeft(110);C72.setHeight(49);C72.setWordWrap(true);C72.iC();C73.setDisplayPosition(3);C73.setHeight(24);C73.setLeft(43);C73.setParent(C61);C73.setTabPosition(13);C73.setTop(80);C73.setWidth(24);C73.setIcon("assignment");C73.setIconOpacity(50);C73.iC();C74.setCaption("This is WHY it needs to be done");
C74.setDisplayPosition(4);C74.setParent(C61);C74.setTabPosition(7);C74.setTop(129);C74.setWidth(545);C74.setPaddingBottom(28);C74.setLeft(110);C74.setHeight(49);C74.setWordWrap(true);C74.iC();C75.setDisplayPosition(5);C75.setHeight(24);C75.setLeft(43);C75.setParent(C61);C75.setTabPosition(12);C75.setTop(129);C75.setWidth(24);C75.setIcon("help");C75.setIconOpacity(50);C75.iC();C76.setCaption("This is WHO needs to do it");C76.setDisplayPosition(6);C76.setParent(C61);C76.setTabPosition(6);C76.setTop(178);
C76.setWidth(545);C76.setPaddingBottom(28);C76.setLeft(110);C76.setHeight(49);C76.setWordWrap(true);C76.iC();C77.setDisplayPosition(7);C77.setHeight(24);C77.setLeft(43);C77.setParent(C61);C77.setTabPosition(10);C77.setTop(178);C77.setWidth(24);C77.setIcon("person");C77.setIconOpacity(50);C77.iC();C78.setCaption("Created: ");C78.setDisplayPosition(8);C78.setHeight(24);C78.setParent(C61);C78.setTabPosition(5);C78.setTop(275);C78.setWidth(545);C78.setPaddingBottom(3);C78.setLeft(110);C78.setWordWrap(true);
C78.iC();C79.setDisplayPosition(9);C79.setHeight(24);C79.setLeft(43);C79.setParent(C61);C79.setTabPosition(11);C79.setTop(275);C79.setWidth(24);C79.setIcon("today");C79.setIconOpacity(50);C79.iC();C80.setCaption("Last Modified:");C80.setDisplayPosition(10);C80.setHeight(41);C80.setParent(C61);C80.setTabPosition(4);C80.setTop(302);C80.setWidth(545);C80.setPaddingBottom(20);C80.setLeft(110);C80.setWordWrap(true);C80.iC();C81.setCaption("Priority 1.");C81.setDisplayPosition(11);C81.setHeight(25);C81.setParent(C61);
C81.setTabPosition(3);C81.setTop(227);C81.setWidth(64);C81.setLeft(110);C81.iC();C82.setCaption("Must be done now!!!");C82.setDisplayPosition(12);C82.setHeight(25);C82.setLeft(179);C82.setParent(C61);C82.setTabPosition(2);C82.setTop(227);C82.setWidth(130);C82.setStyle(C4);C82.iC();C83.setDisplayPosition(13);C83.setHeight(24);C83.setLeft(43);C83.setParent(C61);C83.setTabPosition(9);C83.setTop(227);C83.setWidth(24);C83.setIcon("fa-flag");C83.setIconOpacity(50);C83.setIconHeight(22);C83.iC();if((C84!=null)&&(C84.iI()==false))
{C84.iC();}C85.iC();l.WEB().aH("DEVICECHANGED",this,e1);C62.aH("CLICK",this,e2);C63.aH("CLICK",this,e3);C64.aH("CLICK",this,e4);C68.aH("CLICK",this,e3);C69.aH("CLICK",this,e4);C70.aH("CLICK",this,e2);C85.aH("DELETECONFIRMED",this,e5);this.setHeight(600);this.setWidth(700);this.setLayoutManager(C6);this.setAutoClose(true);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance #SYS_WEB.DeviceChanged",122);r.ln=122;{r.ln=124;if(l.s.eq(l.WEB().getDevice(),"MOBILE"))
{r.ln=126;this.setPlacement("FULLSCREEN");r.ln=127;m.PANELMOBILEMENUBAR.setVisible(true);r.ln=128;m.PANELMENURIGHT.setVisible(false);}else{r.ln=132;this.setPlacement("CENTER");r.ln=133;m.PANELMOBILEMENUBAR.setVisible(false);r.ln=134;m.PANELMENURIGHT.setVisible(true);}}r.ln=138;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonCloseRight.Click #ButtonCloseTop.Click",140);r.ln=140;{r.ln=142;this.mthCLOSE();}r.ln=144;r.e();};function e3(sender,Ps){var f=this.FLD.XTATSKDTL,m=this.REF,r=l.eR(this,cO,"#ButtonEditRight.Click #ButtonEditTop.Click",146);
r.ln=146;{r.ln=148;m.TASKEDITDIALOG.ref.mthEDITTASK(f.F1.get());r.ln=150;this.mthCLOSE();}r.ln=152;r.e();};function e4(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonDeleteRight.Click #ButtonDeleteTop.Click",154);r.ln=154;{r.ln=156;m.DELETEDIALOG.mthSHOW();}r.ln=158;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#DeleteDialog.DeleteConfirmed",160);r.ln=160;{r.ln=162;this.mthDELETETASK();}r.ln=164;r.e();};cO.mthSHOWDETAIL=function(p0){var f=this.FLD.XTATSKDTL,m=this.REF,r=l.mR(this,cO,"ShowDetail",170);
var P0=r.cPD("TASK");P0=r.sR("TASK",p0);r.ln=170;{r.ln=173;f.F1.set(P0.getTASKID());r.ln=175;m.HEADERIMAGE.setIcon(P0.getAVATARFONTICON());r.ln=177;m.HEADERIMAGESTYLE.setBackgroundBrush(P0.getAVATARBACKGROUNDBRUSH());r.ln=179;m.HEADERTEXT.set(P0.getDESCRIPTIONTEXT());r.ln=181;m.TASKDETAILS.set(P0.getDETAILSTEXT());r.ln=183;m.TASKREASON.set(P0.getREASONTEXT());r.ln=185;m.TASKSTATUS.set(P0.getSTATUSTEXT());r.ln=187;m.PRIORITYTEXT1.set(P0.getPRIORITYTEXT());r.ln=189;m.PRIORITYTEXT2.set(P0.getPRIORITYDESCRIPTION());
r.ln=191;m.STYLE_PRIORITYTEXT.setForegroundBrush(P0.getPRIORITYFOREGROUNDBRUSH());r.ln=193;m.TASKCREATED.set(P0.getDATECREATEDTEXT());r.ln=195;m.TASKLASTMODIFIED.set(P0.getDATELASTMODIFIEDTEXT());r.ln=197;this.mthSHOW();}r.ln=199;r.e();};cO.mthDELETETASK=function(){var f=this.FLD.XTATSKDTL,r=l.mR(this,cO,"DeleteTask",201),mth=r;var C0=r.cDR("DELETETASK","XTASRVM","DELETETASK");C0.iC();C0.aH("COMPLETED",this,e6);r.ln=201;{r.ln=205;C0.mthEXECUTEASYNC({FLD:{"XTASKID":f.F1.get()}},{});}r.ln=215;r.e();
function e6(sender,Ps){var r=l.eR(this,cO,"#DeleteTask.Completed",207,mth);r.ln=207;{r.ln=209;this.mthCLOSE();r.ln=211;this.fE("TASKDELETED");}r.ln=213;r.e();}};},{rc:["XTATSKEDT","XTADELETE"],rp:["PRIM_DLG","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Icon","PRIM_MD.Label","PRIM_LABL","PRIM_WEB.DataRequest","PRIM_FLD"]});