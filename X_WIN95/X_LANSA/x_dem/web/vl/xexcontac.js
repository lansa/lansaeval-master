﻿LANSA.addComponent({id:"XEXCONTAC",nm:"xEXContactUs",ot:"wv",tp:"View",pt:"ap",de:"Contact Us",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",mt:{ValidateContactDetails:{}},ev:{MessageResult:{ps:{"Message":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLELINK","PRIM_VS","Style");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("LAYOUTMAINDESKTOP","PRIM_TBLO");var C3=this.cR("LAYOUTMAINDESKTOPCOLUMN1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMAINDESKTOPROW1","PRIM_TBLO","Row");
var C5=this.cR("LAYOUTMAINDESKTOPROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUTMAINDESKTOPROWDIVIDER1","PRIM_TBLO","RowDivider");var C7=this.cR("LAYOUTMAINDESKTOPITEM1","PRIM_TBLO","Item");var C8=this.cR("LAYOUTMAINDESKTOPITEM2","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINMOBILE","PRIM_TBLO");var C10=this.cR("LAYOUTMAINMOBILECOLUMN1","PRIM_TBLO","Column");var C11=this.cR("LAYOUTMAINMOBILEROW1","PRIM_TBLO","Row");var C12=this.cR("LAYOUTMAINMOBILEROW2","PRIM_TBLO","Row");var C13=this.cR("LAYOUTMAINMOBILEITEM1","PRIM_TBLO","Item");
var C14=this.cR("LAYOUTMAINMOBILEITEM2","PRIM_TBLO","Item");var C15=this.cR("LAYOUTCONTACTPANELDESKTOP","PRIM_TBLO");var C16=this.cR("LAYOUTCONTACTPANELDESKTOPCOLUMN1","PRIM_TBLO","Column");var C17=this.cR("LAYOUTCONTACTPANELDESKTOPCOLUMN2","PRIM_TBLO","Column");var C18=this.cR("LAYOUTCONTACTPANELDESKTOPCOLUMN3","PRIM_TBLO","Column");var C19=this.cR("LAYOUTCONTACTPANELDESKTOPCOLUMN4","PRIM_TBLO","Column");var C20=this.cR("LAYOUTCONTACTPANELDESKTOPROW1","PRIM_TBLO","Row");var C21=this.cR("LAYOUTCONTACTPANELDESKTOPITEM2","PRIM_TBLO","Item");
var C22=this.cR("LAYOUTCONTACTPANELDESKTOPITEM1","PRIM_TBLO","Item");var C23=this.cR("LAYOUTCONTACTPANELMOBILE","PRIM_TBLO");var C24=this.cR("LAYOUTCONTACTPANELMOBILECOLUMN","PRIM_TBLO","Column");var C25=this.cR("LAYOUTCONTACTPANELMOBILEROW","PRIM_TBLO","Row");var C26=this.cR("LAYOUTCONTACTPANELMOBILEITEM1","PRIM_TBLO","Item");var C27=this.cR("LAYOUTCONTACTPANELMOBILEITEM2","PRIM_TBLO","Item");var C28=this.cR("LAYOUTCONTACTDETAILS","PRIM_TBLO");var C29=this.cR("LAYOUTCONTACTDETAILSCOLUMN1","PRIM_TBLO","Column");
var C30=this.cR("LAYOUTCONTACTDETAILSROW2","PRIM_TBLO","Row");var C31=this.cR("LAYOUTCONTACTDETAILSROW7","PRIM_TBLO","Row");var C32=this.cR("LAYOUTCONTACTDETAILSITEM2","PRIM_TBLO","Item");var C33=this.cR("LAYOUTCONTACTDETAILSITEM3","PRIM_TBLO","Item");var C34=this.cR("LAYOUTCONTACTDETAILSITEM7","PRIM_TBLO","Item");var C35=this.cR("LAYOUTCONTACTDETAILSITEM9","PRIM_TBLO","Item");var C36=this.cR("LAYOUTCONTACTDETAILSITEM1","PRIM_TBLO","Item");var C37=this.cR("LAYOUTCONTACTDETAILSITEM5","PRIM_TBLO","Item");
var C38=this.cR("LAYOUTCONTACTUSDESKTOP","PRIM_TBLO");var C39=this.cR("LAYOUTCONTACTUSDESKTOPCOLUMN2","PRIM_TBLO","Column");var C40=this.cR("LAYOUTCONTACTUSDESKTOPROW1","PRIM_TBLO","Row");var C41=this.cR("LAYOUTCONTACTUSDESKTOPCOLUMN1","PRIM_TBLO","Column");var C42=this.cR("LAYOUTCONTACTUSDESKTOPROW2","PRIM_TBLO","Row");var C43=this.cR("LAYOUTCONTACTUSDESKTOPROW3","PRIM_TBLO","Row");var C44=this.cR("LAYOUTCONTACTUSDESKTOPROW6","PRIM_TBLO","Row");var C45=this.cR("LAYOUTCONTACTUSDESKTOPROW4","PRIM_TBLO","Row");
var C46=this.cR("LAYOUTCONTACTUSDESKTOPITEM1","PRIM_TBLO","Item");var C47=this.cR("LAYOUTCONTACTUSDESKTOPITEM3","PRIM_TBLO","Item");var C48=this.cR("LAYOUTCONTACTUSDESKTOPITEM5","PRIM_TBLO","Item");var C49=this.cR("LAYOUTCONTACTUSDESKTOPITEM7","PRIM_TBLO","Item");var C50=this.cR("LAYOUTCONTACTUSDESKTOPITEM6","PRIM_TBLO","Item");var C51=this.cR("LAYOUTCONTACTUSDESKTOPITEM8","PRIM_TBLO","Item");var C52=this.cR("LAYOUTCONTACTUSDESKTOPITEM2","PRIM_TBLO","Item");var C53=this.cR("LAYOUTCONTACTUSMOBILE","PRIM_TBLO");
var C54=this.cR("LAYOUTCONTACTUSMOBILECOLUMN","PRIM_TBLO","Column");var C55=this.cR("LAYOUTCONTACTUSMOBILEROW","PRIM_TBLO","Row");var C56=this.cR("LAYOUTCONTACTUSMOBILEITEM2","PRIM_TBLO","Item");var C57=this.cR("LAYOUTCONTACTUSMOBILEITEM3","PRIM_TBLO","Item");var C58=this.cR("LAYOUTCONTACTUSMOBILEITEM4","PRIM_TBLO","Item");var C59=this.cR("LAYOUTCONTACTUSMOBILEITEM5","PRIM_TBLO","Item");var C60=this.cR("LAYOUTCONTACTUSMOBILEITEM6","PRIM_TBLO","Item");var C61=this.cR("LAYOUTCONTACTUSMOBILEITEM7","PRIM_TBLO","Item");
var C62=this.cR("MAP","PRIM_WEB","HtmlContainer");var C63=this.cR("PANELDETAILS","PRIM_PANL");var C64=this.cR("PANELCONTACTDETAILS","PRIM_PANL");var C65=this.cR("PANELCONTACTUS","PRIM_PANL");var C66=this.cR("LABELCOMPANYNAME","PRIM_MD","Label");var C67=this.cR("LABELWEBSITE","PRIM_MD","Label");var C68=this.cR("LABELADDRESS","PRIM_MD","Label");var C69=this.cR("LABELEMAIL","PRIM_MD","Label");var C70=this.cR("LABELPHONE","PRIM_MD","Label");var C71=this.cR("EDITCONTACTNAME","PRIM_MD","Edit");var C72=this.cR("EDITCONTACTEMAIL","PRIM_MD","Edit");
var C73=this.cR("EDITCONTACTMESSAGE","PRIM_MD","Edit");var C74=this.cR("EDITCONTACTPHONE","PRIM_MD","Edit");var C75=this.cR("PANEL","PRIM_PANL");var C76=this.cR("DROPDOWNINQUIRYTYPE","PRIM_MD","Dropdown");var C77=this.cR("TEXT","PRIM_MD","Label");var C78=this.cR("LABELMORE","PRIM_MD","Label");C0.setCursor("HAND");C0.iC();C1.setUnderline(true);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.setHeight(8);C4.iC();C5.setDisplayPosition(3);
C5.setParent(C2);C5.setHeight(12);C5.iC();C6.setDisplayPosition(2);C6.setHeight(4);C6.setParent(C2);C6.iC();C7.setManage(C62);C7.setParent(C2);C7.setRow(C4);C7.setColumn(C3);C7.iC();C8.setAlignment("TOPCENTER");C8.setColumn(C3);C8.setManage(C63);C8.setParent(C2);C8.setRow(C5);C8.iC();C9.iC();C10.setDisplayPosition(1);C10.setParent(C9);C10.iC();C11.setDisplayPosition(1);C11.setParent(C9);C11.iC();C12.setDisplayPosition(2);C12.setParent(C9);C12.iC();C13.setManage(C62);C13.setParent(C9);C13.setRow(C11);
C13.setColumn(C10);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C10);C14.setManage(C63);C14.setParent(C9);C14.setRow(C12);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.iC();C15.iC();C16.setDisplayPosition(2);C16.setParent(C15);C16.setUnits("PIXELS");C16.setWidth(320);C16.setMinWidth(250);C16.setMaxWidth(320);C16.iC();C17.setDisplayPosition(3);C17.setParent(C15);C17.setMinWidth(450);C17.setMaxWidth(600);C17.setWidth(25);C17.iC();C18.setDisplayPosition(4);C18.setParent(C15);C18.iC();C19.setDisplayPosition(1);
C19.setParent(C15);C19.iC();C20.setDisplayPosition(1);C20.setParent(C15);C20.iC();C21.setManage(C64);C21.setParent(C15);C21.setRow(C20);C21.setColumn(C16);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");C21.setAlignment("TOPLEFT");C21.iC();C22.setManage(C65);C22.setParent(C15);C22.setRow(C20);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setColumn(C17);C22.setAlignment("TOPLEFT");C22.setMarginTop(83);C22.iC();C23.iC();C24.setParent(C23);C24.setDisplayPosition(1);C24.iC();C25.setParent(C23);C25.setUnits("CONTENT");
C25.setDisplayPosition(1);C25.setHeight(724);C25.iC();C26.setManage(C64);C26.setFlow("DOWN");C26.setSizing("CONTENTHEIGHTFITTOWIDTH");C26.setColumn(C24);C26.setRow(C25);C26.setParent(C23);C26.setAlignment("TOPLEFT");C26.iC();C27.setManage(C65);C27.setFlow("DOWN");C27.setSizing("CONTENTHEIGHTFITTOWIDTH");C27.setColumn(C24);C27.setRow(C25);C27.setParent(C23);C27.setAlignment("TOPLEFT");C27.iC();C28.iC();C29.setDisplayPosition(1);C29.setParent(C28);C29.iC();C30.setDisplayPosition(1);C30.setParent(C28);
C30.setHeight(119);C30.setUnits("CONTENT");C30.iC();C31.setDisplayPosition(2);C31.setParent(C28);C31.setHeight(205);C31.setUnits("CONTENT");C31.iC();C32.setAlignment("CENTERLEFT");C32.setColumn(C29);C32.setManage(C66);C32.setParent(C28);C32.setRow(C30);C32.setSizing("CONTENTHEIGHTFITTOWIDTH");C32.setFlow("DOWN");C32.setColumnSpan(2);C32.iC();C33.setAlignment("TOPLEFT");C33.setColumn(C29);C33.setManage(C68);C33.setParent(C28);C33.setRow(C31);C33.setSizing("CONTENTHEIGHTFITTOWIDTH");C33.setFlow("DOWN");
C33.iC();C34.setAlignment("TOPLEFT");C34.setColumn(C29);C34.setManage(C69);C34.setParent(C28);C34.setRow(C31);C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.setFlow("DOWN");C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C29);C35.setManage(C70);C35.setParent(C28);C35.setRow(C31);C35.setSizing("CONTENTHEIGHTFITTOWIDTH");C35.setFlow("DOWN");C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C29);C36.setManage(C78);C36.setParent(C28);C36.setRow(C31);C36.setSizing("CONTENTHEIGHTFITTOWIDTH");C36.setFlow("DOWN");
C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C29);C37.setManage(C67);C37.setParent(C28);C37.setRow(C31);C37.setSizing("CONTENTHEIGHTFITTOWIDTH");C37.setFlow("DOWN");C37.iC();C38.iC();C39.setDisplayPosition(2);C39.setParent(C38);C39.iC();C40.setDisplayPosition(1);C40.setParent(C38);C40.setUnits("CONTENT");C40.setHeight(36);C40.iC();C41.setDisplayPosition(1);C41.setParent(C38);C41.iC();C42.setDisplayPosition(2);C42.setParent(C38);C42.setHeight(56);C42.setUnits("CONTENT");C42.iC();C43.setDisplayPosition(3);
C43.setParent(C38);C43.setHeight(64);C43.setUnits("CONTENT");C43.iC();C44.setDisplayPosition(4);C44.setParent(C38);C44.setHeight(148);C44.setUnits("CONTENT");C44.iC();C45.setDisplayPosition(5);C45.setParent(C38);C45.setUnits("PIXELS");C45.setHeight(16);C45.iC();C46.setAlignment("TOPLEFT");C46.setColumn(C41);C46.setManage(C73);C46.setParent(C38);C46.setRow(C44);C46.setFlow("DOWN");C46.setMarginLeft(8);C46.setMarginRight(8);C46.setSizing("FITTOWIDTH");C46.setColumnSpan(2);C46.setMarginTop(8);C46.iC();
C47.setAlignment("TOPLEFT");C47.setColumn(C41);C47.setManage(C72);C47.setParent(C38);C47.setRow(C43);C47.setFlow("DOWN");C47.setMarginLeft(8);C47.setMarginRight(8);C47.setSizing("FITTOWIDTH");C47.setMarginTop(8);C47.iC();C48.setAlignment("TOPLEFT");C48.setColumn(C41);C48.setManage(C71);C48.setParent(C38);C48.setRow(C42);C48.setFlow("DOWN");C48.setMarginLeft(8);C48.setMarginRight(8);C48.setSizing("FITTOWIDTH");C48.iC();C49.setAlignment("TOPLEFT");C49.setColumn(C39);C49.setManage(C74);C49.setParent(C38);
C49.setRow(C43);C49.setFlow("DOWN");C49.setMarginLeft(8);C49.setMarginRight(8);C49.setSizing("FITTOWIDTH");C49.setMarginTop(8);C49.iC();C50.setColumn(C39);C50.setParent(C38);C50.setRow(C42);C50.setSizing("FITTOWIDTH");C50.iC();C51.setAlignment("BOTTOMLEFT");C51.setColumn(C41);C51.setManage(C77);C51.setParent(C38);C51.setRow(C40);C51.setSizing("FITTOWIDTH");C51.iC();C52.setManage(C76);C52.setParent(C38);C52.setRow(C42);C52.setSizing("FITTOWIDTH");C52.setColumn(C39);C52.setMarginLeft(8);C52.setMarginRight(8);
C52.setAlignment("TOPLEFT");C52.iC();C53.iC();C54.setParent(C53);C54.setDisplayPosition(1);C54.iC();C55.setParent(C53);C55.setDisplayPosition(1);C55.iC();C56.setAlignment("TOPLEFT");C56.setColumn(C54);C56.setManage(C73);C56.setParent(C53);C56.setRow(C55);C56.setSizing("FITTOWIDTH");C56.setFlow("DOWN");C56.setMarginLeft(8);C56.setMarginRight(8);C56.iC();C57.setAlignment("TOPLEFT");C57.setColumn(C54);C57.setManage(C74);C57.setParent(C53);C57.setRow(C55);C57.setSizing("FITTOWIDTH");C57.setFlow("DOWN");
C57.setMarginLeft(8);C57.setMarginRight(8);C57.iC();C58.setAlignment("TOPLEFT");C58.setColumn(C54);C58.setManage(C72);C58.setParent(C53);C58.setRow(C55);C58.setSizing("FITTOWIDTH");C58.setFlow("DOWN");C58.setMarginLeft(8);C58.setMarginRight(8);C58.iC();C59.setAlignment("TOPLEFT");C59.setColumn(C54);C59.setManage(C71);C59.setParent(C53);C59.setRow(C55);C59.setSizing("FITTOWIDTH");C59.setFlow("DOWN");C59.setMarginLeft(8);C59.setMarginRight(8);C59.iC();C60.setAlignment("TOPLEFT");C60.setColumn(C54);
C60.setManage(C76);C60.setParent(C53);C60.setRow(C55);C60.setSizing("FITTOWIDTH");C60.setFlow("DOWN");C60.setMarginLeft(8);C60.setMarginRight(8);C60.iC();C61.setAlignment("TOPLEFT");C61.setColumn(C54);C61.setManage(C77);C61.setParent(C53);C61.setRow(C55);C61.setSizing("FITTOWIDTH");C61.setFlow("DOWN");C61.iC();C62.setParent(this);C62.setDisplayPosition(2);C62.setTabPosition(2);C62.setTabStop(false);C62.setHeight(306);C62.setWidth(1073);C62.iC();C63.setDisplayPosition(3);C63.setLeft(0);C63.setParent(this);
C63.setTabPosition(3);C63.setTabStop(false);C63.setTop(310);C63.setHeight(459);C63.setWidth(1073);C63.setLayoutManager(C15);C63.setThemeDrawStyle("DarkTitle");C63.iC();C64.setDisplayPosition(1);C64.setHeight(324);C64.setTabPosition(2);C64.setTabStop(false);C64.setWidth(320);C64.setLayoutManager(C28);C64.setTop(0);C64.setParent(C63);C64.setLeft(77);C64.setVerticalScroll(true);C64.iC();C65.setDisplayPosition(2);C65.setHeight(400);C65.setLeft(397);C65.setParent(C63);C65.setTabPosition(1);C65.setTabStop(false);
C65.setLayoutManager(C53);C65.setTop(83);C65.setWidth(600);C65.iC();C66.setCaption("Expenses");C66.setDisplayPosition(3);C66.setParent(C64);C66.setTabPosition(5);C66.setWidth(320);C66.setHeight(119);C66.setThemeDrawStyle("Heading2");C66.setIconThemeDrawStyle("Text(255,255,255,1)");C66.setLeft(0);C66.setTop(0);C66.setCaptionMarginBottom(0);C66.setCaptionMarginTop(0);C66.setPaddingBottom(8);C66.setPaddingLeft(8);C66.setPaddingRight(8);C66.setPaddingTop(24);C66.setCaptionMarginLeft(0);C66.setCaptionMarginRight(0);
C66.setIcon("monetization_on");C66.setIconAlignment("ABOVECAPTION");C66.setIconHeight(64);C66.iC();C67.setCaption("https://developer.lansa.com");C67.setDisplayPosition(2);C67.setParent(C64);C67.setTabPosition(2);C67.setTop(156);C67.setWidth(320);C67.setHeight(48);C67.setLeft(0);C67.setIconThemeDrawStyle("ForegroundLightPrimary+Rounded+Background1+Background2");C67.setIcon("link");C67.setIconMarginRight(16);C67.setCaptionMarginBottom(0);C67.setCaptionMarginLeft(0);C67.setCaptionMarginRight(0);C67.setPaddingBottom(8);
C67.setPaddingLeft(8);C67.setPaddingRight(8);C67.setStyle(C0);C67.setMouseOverStyle(C1);C67.setCaptionMarginTop(0);C67.setPaddingTop(8);C67.setIconPadding(4);C67.setThemeDrawStyle("Text(208,208,208,1)");C67.iC();C68.setCaption("My Address");C68.setDisplayPosition(4);C68.setParent(C64);C68.setTabPosition(4);C68.setTop(204);C68.setWidth(320);C68.setIconThemeDrawStyle("ForegroundLightPrimary+Rounded+Background1+Background2");C68.setLeft(0);C68.setIconMarginRight(16);C68.setCaptionMarginBottom(0);C68.setCaptionMarginTop(0);
C68.setCaptionMarginRight(0);C68.setCaptionMarginLeft(0);C68.setPaddingBottom(8);C68.setPaddingLeft(8);C68.setPaddingRight(8);C68.setHeight(40);C68.setIcon("business");C68.setIconPadding(4);C68.setThemeDrawStyle("Text(208,208,208,1)");C68.iC();C69.setCaption("Info@ContactsApp.com");C69.setDisplayPosition(5);C69.setParent(C64);C69.setTabPosition(1);C69.setTop(244);C69.setWidth(320);C69.setHeight(40);C69.setLeft(0);C69.setIconThemeDrawStyle("ForegroundLightPrimary+Rounded+Background1+Background2");
C69.setIcon("email");C69.setIconMarginRight(16);C69.setCaptionMarginBottom(0);C69.setCaptionMarginLeft(0);C69.setCaptionMarginRight(0);C69.setPaddingBottom(8);C69.setPaddingLeft(8);C69.setPaddingRight(8);C69.setStyle(C0);C69.setMouseOverStyle(C1);C69.setCaptionMarginTop(0);C69.setIconPadding(4);C69.setThemeDrawStyle("Text(208,208,208,1)");C69.iC();C70.setCaption("+1 630 874 7000");C70.setDisplayPosition(6);C70.setParent(C64);C70.setTabPosition(3);C70.setTop(284);C70.setWidth(320);C70.setHeight(40);
C70.setLeft(0);C70.setIconThemeDrawStyle("ForegroundLightPrimary+Rounded+Background1+Background2");C70.setIcon("phone");C70.setIconMarginRight(16);C70.setCaptionMarginBottom(0);C70.setCaptionMarginLeft(0);C70.setCaptionMarginRight(0);C70.setPaddingBottom(8);C70.setPaddingLeft(8);C70.setPaddingRight(8);C70.setStyle(C0);C70.setMouseOverStyle(C1);C70.setCaptionMarginTop(0);C70.setIconPadding(4);C70.setThemeDrawStyle("Text(208,208,208,1)");C70.iC();C71.setCaption("Your Name");C71.setDisplayPosition(2);
C71.setParent(C65);C71.setTabPosition(1);C71.setTop(36);C71.setWidth(584);C71.setLeft(8);C71.setIconHeight(16);C71.setCaptionColor("THEME100");C71.setHeight(56);C71.setHelperColor("THEME700");C71.setPlaceholderColor("THEME200");C71.setHelperPosition("NONE");C71.iC();C72.setCaption("Your Email");C72.setDisplayPosition(4);C72.setParent(C65);C72.setTabPosition(3);C72.setTop(148);C72.setWidth(584);C72.setLeft(8);C72.setIconHeight(16);C72.setCaptionColor("THEME100");C72.setHeight(56);C72.setHelperColor("THEME700");
C72.setPlaceholderColor("THEME200");C72.setHelperPosition("NONE");C72.iC();C73.setCaption("Message");C73.setDisplayPosition(6);C73.setHeight(140);C73.setMultiLine(true);C73.setParent(C65);C73.setTabPosition(5);C73.setTop(260);C73.setWidth(584);C73.setLeft(8);C73.setIconHeight(16);C73.setHelperColor("THEME700");C73.setCaptionColor("THEME100");C73.setPlaceholderColor("THEME200");C73.setPromptIcon("send");C73.iC();C74.setCaption("Your Phone");C74.setDisplayPosition(5);C74.setParent(C65);C74.setTabPosition(4);
C74.setTop(204);C74.setWidth(584);C74.setLeft(8);C74.setIconHeight(16);C74.setCaptionColor("THEME100");C74.setHeight(56);C74.setHelperColor("THEME700");C74.setPlaceholderColor("THEME200");C74.setHelperPosition("NONE");C74.iC();C75.setDisplayPosition(1);C75.setHeight(4);C75.setLeft(6);C75.setParent(this);C75.setTabPosition(1);C75.setTabStop(false);C75.setTop(402);C75.setWidth(422);C75.iC();C76.setCaption("Inquiry Type");C76.setDisplayPosition(3);C76.setLeft(8);C76.setParent(C65);C76.setTabPosition(2);
C76.setTop(92);C76.setWidth(584);C76.setHeight(56);C76.setCaptionColor("THEME100");C76.setHelperColor("THEME700");C76.setPlaceholderColor("THEME200");C76.setPromptPosition("BOTTOM");C76.setHelperPosition("NONE");C76.iC();C77.setCaption("CONTACT US DIRECT");C77.setDisplayPosition(1);C77.setLeft(0);C77.setParent(C65);C77.setTabPosition(6);C77.setThemeDrawStyle("Strong");C77.setTop(0);C77.setWidth(600);C77.setPaddingRight(16);C77.setPaddingLeft(16);C77.iC();C78.setCaption("MORE ABOUTUS");C78.setDisplayPosition(1);
C78.setLeft(0);C78.setParent(C64);C78.setTabPosition(6);C78.setThemeDrawStyle("Strong");C78.setTop(119);C78.setWidth(320);C78.setHeight(37);C78.setPaddingBottom(8);C78.setPaddingLeft(8);C78.setPaddingRight(8);C78.setPaddingTop(8);C78.iC();l.WEB().aH("DEVICECHANGED",this,e3);C71.aH("CHANGED",this,e5);C72.aH("CHANGED",this,e5);C73.aH("PROMPTING",this,e4);C73.aH("ENTER",this,e4);C73.aH("CHANGED",this,e5);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(1073);this.setHeight(769);this.setLayoutManager(C2);
this.setVerticalScroll(true);this.aH("INITIALIZE",this,e1);this.aH("PREPARE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",110);r.ln=110;{r.ln=111;m.LABELADDRESS.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("2001 Butterfield Road",","),l.n.AsUnicodeString(10)),"Downers Grove"),","),l.n.AsUnicodeString(10)),"IL, 60515"),","),l.n.AsUnicodeString(10)),"USA"));r.ln=113;m.MAP.setHtml("<html><iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=2001%20Butterfield%20Road,%20Downers%20Grove,%20IL,%2060515,%20,%20USA&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></html>");
}r.ln=115;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",117);r.ln=117;{r.ln=120;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("GENR","General");r.ln=121;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("FEAT","Feature Request");r.ln=122;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("HELP","Help");r.ln=123;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("SALE","Sales & Marketing");r.ln=124;m.DROPDOWNINQUIRYTYPE.getItems().mthADD("SUPP","Support");r.ln=126;m.DROPDOWNINQUIRYTYPE.set("GENR");}
r.ln=128;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",132);r.ln=132;{r.ln=134;if(l.s.eq(l.WEB().getDevice(),"DESKTOP")){r.ln=136;this.setLayoutManager(m.LAYOUTMAINDESKTOP);r.ln=137;m.PANELCONTACTUS.setLayoutManager(m.LAYOUTCONTACTUSDESKTOP);r.ln=138;m.PANELDETAILS.setLayoutManager(m.LAYOUTCONTACTPANELDESKTOP);r.ln=139;m.LAYOUTMAINDESKTOPROWDIVIDER1.setParent(m.LAYOUTMAINDESKTOP);}else{r.ln=143;this.setLayoutManager(m.LAYOUTMAINMOBILE);r.ln=144;m.PANELCONTACTUS.setLayoutManager(m.LAYOUTCONTACTUSMOBILE);
r.ln=145;m.PANELDETAILS.setLayoutManager(m.LAYOUTCONTACTPANELMOBILE);r.ln=146;m.LAYOUTMAINDESKTOPROWDIVIDER1.setParent(null);}}r.ln=150;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EditContactMessage.Prompting #EditContactMessage.Enter",153);var C0=r.cDR("CONTACT","XEXSRVM","CONTACTUS");var C1=r.cR("RESULT","PRIM_BOLN");C0.iC();C1.iC();r.ln=153;{r.ln=158;if(cO.mthVALIDATECONTACTDETAILS.call(this)){r.ln=160;C0.mthEXECUTE({FLD:{"XEXEMAIL":m.EDITCONTACTEMAIL.get(),"XEXNAME":m.EDITCONTACTNAME.get(),"XEXPHONE":m.EDITCONTACTPHONE.get(),"XEXMESSAGE":m.EDITCONTACTMESSAGE.get(),"XEXINQUIRYTYPE":m.DROPDOWNINQUIRYTYPE.get()}},{FLD:{"XEXRESULT":C1}});
r.ln=162;if(l.tB(l.b.eq(C1.get(),true))){r.ln=164;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_ALPH");eP.r("MESSAGE").set("Message successfully sent.");this.fE("MESSAGERESULT",eP);eP.e();}r.ln=166;m.EDITCONTACTNAME.set("");m.EDITCONTACTMESSAGE.set("");m.EDITCONTACTEMAIL.set("");m.EDITCONTACTPHONE.set("");m.EDITCONTACTMESSAGE.set("");r.ln=167;m.DROPDOWNINQUIRYTYPE.set("GENR");}else{r.ln=171;{var eP=l.ePs();eP.cR("MESSAGE","PRIM_ALPH");eP.r("MESSAGE").set("Message failed to send. Try again later.");this.fE("MESSAGERESULT",eP);
eP.e();}}}}r.ln=177;r.e();};function e5(SENDER,Ps){var r=l.eR(this,cO,"#EditContactEmail.Changed #EditContactMessage.Changed #EditContactName.Changed",179);r.ln=179;{r.ln=181;SENDER.mthCLEARERROR();r.ln=182;SENDER.setHelperPosition("NONE");}r.ln=184;r.e();};cO.mthVALIDATECONTACTDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"ValidateContactDetails",191);var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=191;{r.ln=194;P0.set(true);r.ln=196;if(l.s.eq(m.EDITCONTACTEMAIL.get(),"")){r.ln=198;m.EDITCONTACTEMAIL.mthSHOWERROR("Email Address must be specified.");
r.ln=199;m.EDITCONTACTEMAIL.setHelperPosition("BOTTOM");r.ln=200;P0.set(false);}else{r.ln=204;if(l.not(l.s.IsValidEmail(m.EDITCONTACTEMAIL.getValue()))){r.ln=206;m.EDITCONTACTEMAIL.mthSHOWERROR("Email Address Supplied is not valid");r.ln=207;m.EDITCONTACTEMAIL.setHelperPosition("BOTTOM");r.ln=208;P0.set(false);}}r.ln=214;if(l.s.eq(m.EDITCONTACTNAME.get(),"")){r.ln=216;m.EDITCONTACTNAME.mthSHOWERROR("Name must be specified.");r.ln=217;m.EDITCONTACTNAME.setHelperPosition("BOTTOM");r.ln=218;P0.set(false);
}r.ln=222;if(l.s.eq(m.EDITCONTACTMESSAGE.get(),"")){r.ln=224;m.EDITCONTACTMESSAGE.mthSHOWERROR("Message must be specified.");r.ln=225;m.EDITCONTACTMESSAGE.setHelperPosition("BOTTOM");r.ln=226;P0.set(false);}}r.ln=230;return r.rV(P0.get());};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.RowDivider","PRIM_TBLO.Item","PRIM_WEB.HtmlContainer","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.Dropdown","PRIM_WEB.DataRequest"],dp:["PRIM_BOLN"]});