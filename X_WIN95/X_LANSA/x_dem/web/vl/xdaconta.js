﻿LANSA.addComponent({id:"XDACONTA",nm:"xDAContactUsPanel",ot:"rp",tp:"Reusable Part",pt:"ap",de:"ContactUsPanel",tl:15000003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cR("STYLELINK","PRIM_VS","Style");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("LAYOUTREGIONALOFFICESDESKTOP","PRIM_TBLO");var C3=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN2","PRIM_TBLO","Column");
var C5=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN3","PRIM_TBLO","Column");var C6=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN4","PRIM_TBLO","Column");var C7=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN5","PRIM_TBLO","Column");var C8=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN6","PRIM_TBLO","Column");var C9=this.cR("LAYOUTREGIONALOFFICESDESKTOPCOLUMN7","PRIM_TBLO","Column");var C10=this.cR("LAYOUTREGIONALOFFICESDESKTOPROW","PRIM_TBLO","Row");var C11=this.cR("LAYOUTREGIONALOFFICESDESKTOPROW1","PRIM_TBLO","Row");
var C12=this.cR("LAYOUTREGIONALOFFICESDESKTOPITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTREGIONALOFFICESDESKTOPITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTREGIONALOFFICESDESKTOPITEM1","PRIM_TBLO","Item");var C15=this.cR("LAYOUTREGIONALOFFICESDESKTOPITEM4","PRIM_TBLO","Item");var C16=this.cR("LAYOUTREGIONALOFFICESMOBILE","PRIM_TBLO");var C17=this.cR("LAYOUTREGIONALOFFICESMOBILECOLUMN","PRIM_TBLO","Column");var C18=this.cR("LAYOUTREGIONALOFFICESMOBILEROW1","PRIM_TBLO","Row");var C19=this.cR("LAYOUTREGIONALOFFICESMOBILEROW2","PRIM_TBLO","Row");
var C20=this.cR("LAYOUTREGIONALOFFICESMOBILEITEM1","PRIM_TBLO","Item");var C21=this.cR("LAYOUTREGIONALOFFICESMOBILEITEM2","PRIM_TBLO","Item");var C22=this.cR("LAYOUTREGIONALOFFICESMOBILEITEM3","PRIM_TBLO","Item");var C23=this.cR("LAYOUTREGIONALOFFICESMOBILEITEM4","PRIM_TBLO","Item");var C24=this.cR("LAYOUTASIAPACPANEL","PRIM_TBLO");var C25=this.cR("LAYOUTASIAPACPANELROW1","PRIM_TBLO","Row");var C26=this.cR("LAYOUTASIAPACPANELCOLUMN1","PRIM_TBLO","Column");var C27=this.cR("LAYOUTASIAPACPANELROW2","PRIM_TBLO","Row");
var C28=this.cR("LAYOUTASIAPACPANELROW3","PRIM_TBLO","Row");var C29=this.cR("LAYOUTASIAPACPANELROW4","PRIM_TBLO","Row");var C30=this.cR("LAYOUTASIAPACPANELROW5","PRIM_TBLO","Row");var C31=this.cR("LAYOUTASIAPACPANELROW6","PRIM_TBLO","Row");var C32=this.cR("LAYOUTASIAPACPANELROW7","PRIM_TBLO","Row");var C33=this.cR("LAYOUTASIAPACPANELITEM1","PRIM_TBLO","Item");var C34=this.cR("LAYOUTASIAPACPANELITEM2","PRIM_TBLO","Item");var C35=this.cR("LAYOUTASIAPACPANELITEM3","PRIM_TBLO","Item");var C36=this.cR("LAYOUTASIAPACPANELITEM4","PRIM_TBLO","Item");
var C37=this.cR("LAYOUTASIAPACPANELITEM6","PRIM_TBLO","Item");var C38=this.cR("LAYOUTEUROPANEL","PRIM_TBLO");var C39=this.cR("LAYOUTEUROPANELROW1","PRIM_TBLO","Row");var C40=this.cR("LAYOUTEUROPANELCOLUMN1","PRIM_TBLO","Column");var C41=this.cR("LAYOUTEUROPANELROW2","PRIM_TBLO","Row");var C42=this.cR("LAYOUTEUROPANELROW3","PRIM_TBLO","Row");var C43=this.cR("LAYOUTEUROPANELROW4","PRIM_TBLO","Row");var C44=this.cR("LAYOUTEUROPANELROW5","PRIM_TBLO","Row");var C45=this.cR("LAYOUTEUROPANELROW6","PRIM_TBLO","Row");
var C46=this.cR("LAYOUTEUROPANELITEM1","PRIM_TBLO","Item");var C47=this.cR("LAYOUTEUROPANELITEM2","PRIM_TBLO","Item");var C48=this.cR("LAYOUTEUROPANELITEM3","PRIM_TBLO","Item");var C49=this.cR("LAYOUTEUROPANELITEM4","PRIM_TBLO","Item");var C50=this.cR("LAYOUTEUROPANELITEM6","PRIM_TBLO","Item");var C51=this.cR("LAYOUTAMERICAPANEL","PRIM_TBLO");var C52=this.cR("LAYOUTAMERICAPANELROW1","PRIM_TBLO","Row");var C53=this.cR("LAYOUTAMERICAPANELCOLUMN1","PRIM_TBLO","Column");var C54=this.cR("LAYOUTAMERICAPANELROW2","PRIM_TBLO","Row");
var C55=this.cR("LAYOUTAMERICAPANELROW3","PRIM_TBLO","Row");var C56=this.cR("LAYOUTAMERICAPANELROW4","PRIM_TBLO","Row");var C57=this.cR("LAYOUTAMERICAPANELROW5","PRIM_TBLO","Row");var C58=this.cR("LAYOUTAMERICAPANELROW6","PRIM_TBLO","Row");var C59=this.cR("LAYOUTAMERICAPANELITEM1","PRIM_TBLO","Item");var C60=this.cR("LAYOUTAMERICAPANELITEM3","PRIM_TBLO","Item");var C61=this.cR("LAYOUTAMERICAPANELITEM4","PRIM_TBLO","Item");var C62=this.cR("LAYOUTAMERICAPANELITEM5","PRIM_TBLO","Item");var C63=this.cR("LAYOUTAMERICAPANELITEM6","PRIM_TBLO","Item");
var C64=this.cR("LAYOUTAMERICAPANELITEM7","PRIM_TBLO","Item");var C65=this.cR("LAYOUTEUROPANELITEM7","PRIM_TBLO","Item");var C66=this.cR("LAYOUTASIAPACPANELITEM7","PRIM_TBLO","Item");var C67=this.cR("LAYOUTAMERICAPANELITEM9","PRIM_TBLO","Item");var C68=this.cR("LAYOUTAMERICAPANELITEM10","PRIM_TBLO","Item");var C69=this.cR("LAYOUTAMERICAPANELITEM11","PRIM_TBLO","Item");var C70=this.cR("LAYOUTEUROPANELITEM9","PRIM_TBLO","Item");var C71=this.cR("LAYOUTEUROPANELITEM10","PRIM_TBLO","Item");var C72=this.cR("LAYOUTEUROPANELITEM11","PRIM_TBLO","Item");
var C73=this.cR("LAYOUTASIAPACPANELITEM5","PRIM_TBLO","Item");var C74=this.cR("LAYOUTASIAPACPANELITEM8","PRIM_TBLO","Item");var C75=this.cR("LAYOUTASIAPACPANELITEM9","PRIM_TBLO","Item");var C76=this.cR("PANELUS","PRIM_PANL");var C77=this.cR("PANELEUROPE","PRIM_PANL");var C78=this.cR("PANELASIAPAC","PRIM_PANL");var C79=this.cR("HEADINGNORTHAMERICA","PRIM_MD","Label");var C80=this.cR("XUSADDRESS","PRIM_MD","Label");var C81=this.cR("XUSEMAIL","PRIM_MD","Label");var C82=this.cR("XUSPHONE","PRIM_MD","Label");
var C83=this.cR("HEADINGEU","PRIM_MD","Label");var C84=this.cR("XFRADDRESS","PRIM_MD","Label");var C85=this.cR("XFREMAIL","PRIM_MD","Label");var C86=this.cR("XFRPHONE","PRIM_MD","Label");var C87=this.cR("HEADINGASIAPAC","PRIM_MD","Label");var C88=this.cR("XAUADDRESS","PRIM_MD","Label");var C89=this.cR("XAUEMAIL","PRIM_MD","Label");var C90=this.cR("XAUPHONE","PRIM_MD","Label");var C91=this.cR("HEADINGUSA","PRIM_MD","Label");var C92=this.cR("HEADINGFRANCE","PRIM_MD","Label");var C93=this.cR("HEADINGAUSTRALIA","PRIM_MD","Label");
var C94=this.cR("HEADINGCANADA","PRIM_MD","Label");var C95=this.cR("HEADINGUK","PRIM_MD","Label");var C96=this.cR("HEADINGJAPAN","PRIM_MD","Label");var C97=this.cR("XCAADDRESS","PRIM_MD","Label");var C98=this.cR("XCAEMAIL","PRIM_MD","Label");var C99=this.cR("XCAPHONE","PRIM_MD","Label");var C100=this.cR("XUKADDRESS","PRIM_MD","Label");var C101=this.cR("XUKEMAIL","PRIM_MD","Label");var C102=this.cR("XUKPHONE","PRIM_MD","Label");var C103=this.cR("XJPADDRESS","PRIM_MD","Label");var C104=this.cR("XJPEMAIL","PRIM_MD","Label");
var C105=this.cR("XJPPHONE","PRIM_MD","Label");var C106=this.cR("HEADING","PRIM_MD","Label");var C107=this.cR("PHONE","PRIM_ACOL");var C108=this.cR("EMAIL","PRIM_ACOL");C0.setCursor("HAND");C0.iC();C1.setUnderline(true);C1.iC();C2.setSizing("CONTENTHEIGHT");C2.iC();C3.setDisplayPosition(2);C3.setParent(C2);C3.setWidth(20);C3.setMaxWidth(256);C3.iC();C4.setDisplayPosition(4);C4.setParent(C2);C4.setWidth(20);C4.setMaxWidth(256);C4.iC();C5.setDisplayPosition(6);C5.setParent(C2);C5.setWidth(20);C5.setMaxWidth(256);
C5.iC();C6.setDisplayPosition(1);C6.setParent(C2);C6.iC();C7.setDisplayPosition(5);C7.setParent(C2);C7.setMaxWidth(20);C7.iC();C8.setDisplayPosition(3);C8.setParent(C2);C8.setMaxWidth(20);C8.setWidth(20);C8.iC();C9.setDisplayPosition(7);C9.setParent(C2);C9.iC();C10.setDisplayPosition(2);C10.setParent(C2);C10.iC();C11.setDisplayPosition(1);C11.setParent(C2);C11.setHeight(56);C11.setUnits("PIXELS");C11.iC();C12.setManage(C76);C12.setParent(C2);C12.setRow(C10);C12.setColumn(C3);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");
C12.setAlignment("TOPCENTER");C12.iC();C13.setManage(C77);C13.setParent(C2);C13.setRow(C10);C13.setColumn(C4);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setAlignment("TOPCENTER");C13.iC();C14.setManage(C78);C14.setParent(C2);C14.setRow(C10);C14.setColumn(C5);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setAlignment("TOPCENTER");C14.iC();C15.setAlignment("TOPCENTER");C15.setColumn(C6);C15.setManage(C106);C15.setParent(C2);C15.setRow(C11);C15.setColumnSpan(7);C15.iC();C16.setSizing("CONTENTHEIGHT");
C16.iC();C17.setParent(C16);C17.setDisplayPosition(1);C17.iC();C18.setParent(C16);C18.setUnits("PIXELS");C18.setHeight(56);C18.setDisplayPosition(1);C18.iC();C19.setParent(C16);C19.setDisplayPosition(2);C19.iC();C20.setManage(C76);C20.setParent(C16);C20.setRow(C19);C20.setColumn(C17);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setFlow("DOWN");C20.setAlignment("TOPCENTER");C20.iC();C21.setManage(C77);C21.setParent(C16);C21.setRow(C19);C21.setColumn(C17);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");C21.setFlow("DOWN");
C21.setAlignment("TOPCENTER");C21.setMarginTop(8);C21.iC();C22.setManage(C78);C22.setParent(C16);C22.setRow(C19);C22.setColumn(C17);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setFlow("DOWN");C22.setAlignment("TOPCENTER");C22.iC();C23.setManage(C106);C23.setRow(C18);C23.setColumn(C17);C23.setParent(C16);C23.iC();C24.iC();C25.setDisplayPosition(2);C25.setParent(C24);C25.setHeight(39);C25.setUnits("CONTENT");C25.iC();C26.setDisplayPosition(1);C26.setParent(C24);C26.iC();C27.setDisplayPosition(3);C27.setParent(C24);
C27.setUnits("PIXELS");C27.setHeight(144);C27.iC();C28.setDisplayPosition(5);C28.setParent(C24);C28.setHeight(144);C28.setUnits("CONTENT");C28.iC();C29.setDisplayPosition(6);C29.setParent(C24);C29.setHeight(8);C29.setUnits("PIXELS");C29.iC();C30.setDisplayPosition(1);C30.setParent(C24);C30.setHeight(8);C30.setUnits("PIXELS");C30.iC();C31.setDisplayPosition(7);C31.setParent(C24);C31.iC();C32.setDisplayPosition(4);C32.setParent(C24);C32.setUnits("PIXELS");C32.setHeight(16);C32.iC();C33.setAlignment("TOPLEFT");
C33.setColumn(C26);C33.setManage(C87);C33.setParent(C24);C33.setRow(C25);C33.setSizing("CONTENTHEIGHTFITTOWIDTH");C33.setFlow("DOWN");C33.setMarginLeft(8);C33.setMarginRight(8);C33.setMarginTop(8);C33.iC();C34.setAlignment("TOPLEFT");C34.setColumn(C26);C34.setManage(C88);C34.setParent(C24);C34.setRow(C27);C34.setSizing("CONTENTHEIGHTFITTOWIDTH");C34.setFlow("DOWN");C34.setMarginLeft(8);C34.setMarginRight(8);C34.setMarginTop(8);C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C26);C35.setManage(C90);
C35.setParent(C24);C35.setRow(C27);C35.setSizing("CONTENTHEIGHTFITTOWIDTH");C35.setFlow("DOWN");C35.setMarginLeft(8);C35.setMarginRight(8);C35.setMarginTop(8);C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C26);C36.setManage(C89);C36.setParent(C24);C36.setRow(C27);C36.setSizing("CONTENTHEIGHTFITTOWIDTH");C36.setFlow("DOWN");C36.setMarginLeft(8);C36.setMarginRight(8);C36.setMarginTop(8);C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C26);C37.setManage(C93);C37.setParent(C24);C37.setRow(C27);
C37.setSizing("CONTENTHEIGHTFITTOWIDTH");C37.setFlow("DOWN");C37.setMarginLeft(8);C37.setMarginRight(8);C37.setMarginTop(8);C37.iC();C38.iC();C39.setDisplayPosition(2);C39.setParent(C38);C39.setHeight(39);C39.setUnits("CONTENT");C39.iC();C40.setDisplayPosition(1);C40.setParent(C38);C40.iC();C41.setDisplayPosition(3);C41.setParent(C38);C41.setUnits("PIXELS");C41.setHeight(144);C41.iC();C42.setDisplayPosition(5);C42.setParent(C38);C42.setHeight(127);C42.setUnits("CONTENT");C42.iC();C43.setDisplayPosition(6);
C43.setParent(C38);C43.setHeight(8);C43.setUnits("PIXELS");C43.iC();C44.setDisplayPosition(1);C44.setParent(C38);C44.setHeight(8);C44.setUnits("PIXELS");C44.iC();C45.setDisplayPosition(4);C45.setParent(C38);C45.setUnits("PIXELS");C45.setHeight(16);C45.iC();C46.setAlignment("TOPLEFT");C46.setColumn(C40);C46.setManage(C83);C46.setParent(C38);C46.setRow(C39);C46.setSizing("CONTENTHEIGHTFITTOWIDTH");C46.setFlow("DOWN");C46.setMarginLeft(8);C46.setMarginRight(8);C46.setMarginTop(8);C46.iC();C47.setAlignment("TOPLEFT");
C47.setColumn(C40);C47.setManage(C86);C47.setParent(C38);C47.setRow(C41);C47.setSizing("CONTENTHEIGHTFITTOWIDTH");C47.setFlow("DOWN");C47.setMarginLeft(8);C47.setMarginRight(8);C47.setMarginTop(8);C47.iC();C48.setAlignment("TOPLEFT");C48.setColumn(C40);C48.setManage(C85);C48.setParent(C38);C48.setRow(C41);C48.setSizing("CONTENTHEIGHTFITTOWIDTH");C48.setFlow("DOWN");C48.setMarginLeft(8);C48.setMarginRight(8);C48.setMarginTop(8);C48.iC();C49.setAlignment("TOPLEFT");C49.setColumn(C40);C49.setManage(C84);
C49.setParent(C38);C49.setRow(C41);C49.setSizing("CONTENTHEIGHTFITTOWIDTH");C49.setFlow("DOWN");C49.setMarginLeft(8);C49.setMarginRight(8);C49.setMarginTop(8);C49.iC();C50.setAlignment("TOPLEFT");C50.setColumn(C40);C50.setManage(C92);C50.setParent(C38);C50.setRow(C41);C50.setSizing("CONTENTHEIGHTFITTOWIDTH");C50.setFlow("DOWN");C50.setMarginLeft(8);C50.setMarginRight(8);C50.setMarginTop(8);C50.iC();C51.iC();C52.setDisplayPosition(2);C52.setParent(C51);C52.setHeight(39);C52.setUnits("CONTENT");C52.iC();
C53.setDisplayPosition(1);C53.setParent(C51);C53.iC();C54.setDisplayPosition(3);C54.setParent(C51);C54.setUnits("PIXELS");C54.setHeight(144);C54.iC();C55.setDisplayPosition(5);C55.setParent(C51);C55.setHeight(127);C55.setUnits("CONTENT");C55.iC();C56.setDisplayPosition(1);C56.setParent(C51);C56.setHeight(8);C56.setUnits("PIXELS");C56.iC();C57.setDisplayPosition(4);C57.setParent(C51);C57.setUnits("PIXELS");C57.setHeight(16);C57.iC();C58.setDisplayPosition(6);C58.setParent(C51);C58.setHeight(8);C58.setUnits("PIXELS");
C58.iC();C59.setAlignment("TOPLEFT");C59.setColumn(C53);C59.setManage(C79);C59.setParent(C51);C59.setRow(C52);C59.setSizing("CONTENTHEIGHTFITTOWIDTH");C59.setFlow("DOWN");C59.setMarginLeft(8);C59.setMarginRight(8);C59.setMarginTop(8);C59.iC();C60.setAlignment("TOPLEFT");C60.setColumn(C53);C60.setManage(C80);C60.setParent(C51);C60.setRow(C54);C60.setSizing("CONTENTHEIGHTFITTOWIDTH");C60.setFlow("DOWN");C60.setMarginLeft(8);C60.setMarginRight(8);C60.setMarginTop(8);C60.iC();C61.setAlignment("TOPLEFT");
C61.setColumn(C53);C61.setManage(C81);C61.setParent(C51);C61.setRow(C54);C61.setSizing("CONTENTHEIGHTFITTOWIDTH");C61.setFlow("DOWN");C61.setMarginLeft(8);C61.setMarginRight(8);C61.setMarginTop(8);C61.iC();C62.setAlignment("TOPLEFT");C62.setColumn(C53);C62.setManage(C82);C62.setParent(C51);C62.setRow(C54);C62.setSizing("CONTENTHEIGHTFITTOWIDTH");C62.setFlow("DOWN");C62.setMarginLeft(8);C62.setMarginRight(8);C62.setMarginTop(8);C62.iC();C63.setAlignment("TOPLEFT");C63.setColumn(C53);C63.setManage(C91);
C63.setParent(C51);C63.setRow(C54);C63.setSizing("CONTENTHEIGHTFITTOWIDTH");C63.setFlow("DOWN");C63.setMarginLeft(8);C63.setMarginRight(8);C63.setMarginTop(8);C63.iC();C64.setAlignment("TOPLEFT");C64.setColumn(C53);C64.setManage(C94);C64.setParent(C51);C64.setRow(C55);C64.setSizing("CONTENTHEIGHTFITTOWIDTH");C64.setFlow("DOWN");C64.setMarginTop(8);C64.setMarginLeft(8);C64.setMarginRight(8);C64.iC();C65.setAlignment("TOPLEFT");C65.setColumn(C40);C65.setManage(C95);C65.setParent(C38);C65.setRow(C42);
C65.setSizing("CONTENTHEIGHTFITTOWIDTH");C65.setFlow("DOWN");C65.setMarginTop(8);C65.setMarginLeft(8);C65.setMarginRight(8);C65.iC();C66.setAlignment("TOPLEFT");C66.setColumn(C26);C66.setManage(C96);C66.setParent(C24);C66.setRow(C28);C66.setSizing("CONTENTHEIGHTFITTOWIDTH");C66.setFlow("DOWN");C66.setMarginTop(8);C66.setMarginLeft(8);C66.setMarginRight(8);C66.iC();C67.setAlignment("TOPLEFT");C67.setColumn(C53);C67.setManage(C97);C67.setParent(C51);C67.setRow(C55);C67.setSizing("CONTENTHEIGHTFITTOWIDTH");
C67.setFlow("DOWN");C67.setMarginLeft(8);C67.setMarginRight(8);C67.setMarginTop(8);C67.iC();C68.setAlignment("TOPLEFT");C68.setColumn(C53);C68.setManage(C98);C68.setParent(C51);C68.setRow(C55);C68.setSizing("CONTENTHEIGHTFITTOWIDTH");C68.setFlow("DOWN");C68.setMarginLeft(8);C68.setMarginRight(8);C68.setMarginTop(8);C68.iC();C69.setAlignment("TOPLEFT");C69.setColumn(C53);C69.setManage(C99);C69.setParent(C51);C69.setRow(C55);C69.setSizing("CONTENTHEIGHTFITTOWIDTH");C69.setFlow("DOWN");C69.setMarginLeft(8);
C69.setMarginRight(8);C69.setMarginTop(8);C69.iC();C70.setAlignment("TOPLEFT");C70.setColumn(C40);C70.setManage(C100);C70.setParent(C38);C70.setRow(C42);C70.setSizing("CONTENTHEIGHTFITTOWIDTH");C70.setFlow("DOWN");C70.setMarginLeft(8);C70.setMarginRight(8);C70.setMarginTop(8);C70.iC();C71.setAlignment("TOPLEFT");C71.setColumn(C40);C71.setManage(C101);C71.setParent(C38);C71.setRow(C42);C71.setSizing("CONTENTHEIGHTFITTOWIDTH");C71.setFlow("DOWN");C71.setMarginLeft(8);C71.setMarginRight(8);C71.setMarginTop(8);
C71.iC();C72.setAlignment("TOPLEFT");C72.setColumn(C40);C72.setManage(C102);C72.setParent(C38);C72.setRow(C42);C72.setSizing("CONTENTHEIGHTFITTOWIDTH");C72.setFlow("DOWN");C72.setMarginLeft(8);C72.setMarginRight(8);C72.setMarginTop(8);C72.iC();C73.setAlignment("TOPLEFT");C73.setColumn(C26);C73.setManage(C103);C73.setParent(C24);C73.setRow(C28);C73.setSizing("CONTENTHEIGHTFITTOWIDTH");C73.setFlow("DOWN");C73.setMarginLeft(8);C73.setMarginRight(8);C73.setMarginTop(8);C73.iC();C74.setAlignment("TOPLEFT");
C74.setColumn(C26);C74.setManage(C104);C74.setParent(C24);C74.setRow(C28);C74.setSizing("CONTENTHEIGHTFITTOWIDTH");C74.setFlow("DOWN");C74.setMarginLeft(8);C74.setMarginRight(8);C74.setMarginTop(8);C74.iC();C75.setAlignment("TOPLEFT");C75.setColumn(C26);C75.setManage(C105);C75.setParent(C24);C75.setRow(C28);C75.setSizing("CONTENTHEIGHTFITTOWIDTH");C75.setFlow("DOWN");C75.setMarginLeft(8);C75.setMarginRight(8);C75.setMarginTop(8);C75.iC();C76.setDisplayPosition(1);C76.setLeft(129);C76.setParent(this);
C76.setTabPosition(3);C76.setTabStop(false);C76.setTop(56);C76.setHeight(342);C76.setWidth(256);C76.setLayoutManager(C51);C76.iC();C77.setDisplayPosition(2);C77.setLeft(405);C77.setParent(this);C77.setTabPosition(1);C77.setTabStop(false);C77.setTop(56);C77.setHeight(342);C77.setWidth(256);C77.setLayoutManager(C38);C77.iC();C78.setDisplayPosition(3);C78.setLeft(681);C78.setParent(this);C78.setTabPosition(2);C78.setTabStop(false);C78.setTop(56);C78.setHeight(359);C78.setWidth(256);C78.setLayoutManager(C24);
C78.iC();C79.setDisplayPosition(1);C79.setLeft(8);C79.setParent(C76);C79.setTabPosition(3);C79.setThemeDrawStyle("Heading1+ForegroundDarkPrimary");C79.setTop(16);C79.setWidth(240);C79.setCaption("North America");C79.setHeight(31);C79.iC();C80.setCaption("2001 Butterfield Road, Suite 102, Downers Grove, IL, 60515, USA");C80.setDisplayPosition(5);C80.setParent(C76);C80.setTabPosition(6);C80.setTop(140);C80.setWidth(240);C80.setIconThemeDrawStyle("ForegroundLightPrimary");C80.setLeft(8);C80.setIconMarginRight(16);
C80.setIconOpacity(60);C80.setCaptionMarginBottom(0);C80.setCaptionMarginTop(0);C80.setCaptionMarginRight(0);C80.setCaptionMarginLeft(0);C80.setHeight(34);C80.setWordWrap(true);C80.iC();C81.setCaption("Info@DestinationsApp.com");C81.setDisplayPosition(3);C81.setParent(C76);C81.setTabPosition(2);C81.setTop(90);C81.setWidth(240);C81.setHeight(17);C81.setLeft(8);C81.setIconThemeDrawStyle("ForegroundLightPrimary");C81.setIconMarginRight(16);C81.setIconOpacity(60);C81.setCaptionMarginBottom(0);C81.setCaptionMarginLeft(0);
C81.setCaptionMarginRight(0);C81.setStyle(C0);C81.setMouseOverStyle(C1);C81.setCaptionMarginTop(0);C81.iC();C82.setCaption("+1 630 874 7000");C82.setDisplayPosition(4);C82.setParent(C76);C82.setTabPosition(4);C82.setTop(115);C82.setWidth(240);C82.setHeight(17);C82.setLeft(8);C82.setIconThemeDrawStyle("ForegroundLightPrimary");C82.setIconMarginRight(16);C82.setIconOpacity(60);C82.setCaptionMarginBottom(0);C82.setCaptionMarginLeft(0);C82.setCaptionMarginRight(0);C82.setStyle(C0);C82.setMouseOverStyle(C1);
C82.setCaptionMarginTop(0);C82.iC();C83.setCaption("Europe");C83.setDisplayPosition(1);C83.setLeft(8);C83.setParent(C77);C83.setTabPosition(3);C83.setThemeDrawStyle("Heading1+ForegroundDarkPrimary");C83.setTop(16);C83.setWidth(240);C83.setHeight(31);C83.iC();C84.setCaption("13, rue Camille Desmoulins 92441, Issy-les-Moulineaux, Cedex, France");C84.setDisplayPosition(5);C84.setParent(C77);C84.setTabPosition(6);C84.setTop(140);C84.setWidth(240);C84.setIconThemeDrawStyle("ForegroundLightPrimary");C84.setLeft(8);
C84.setIconMarginRight(16);C84.setIconOpacity(60);C84.setCaptionMarginBottom(0);C84.setCaptionMarginTop(0);C84.setCaptionMarginRight(0);C84.setCaptionMarginLeft(0);C84.setHeight(34);C84.setWordWrap(true);C84.iC();C85.setCaption("Info@DestinationsApp.fr");C85.setDisplayPosition(3);C85.setParent(C77);C85.setTabPosition(2);C85.setTop(90);C85.setWidth(240);C85.setHeight(17);C85.setLeft(8);C85.setIconThemeDrawStyle("ForegroundLightPrimary");C85.setIconMarginRight(16);C85.setIconOpacity(60);C85.setCaptionMarginBottom(0);
C85.setCaptionMarginLeft(0);C85.setCaptionMarginRight(0);C85.setStyle(C0);C85.setMouseOverStyle(C1);C85.setCaptionMarginTop(0);C85.iC();C86.setCaption("+33 158 042 450");C86.setDisplayPosition(4);C86.setParent(C77);C86.setTabPosition(4);C86.setTop(115);C86.setWidth(240);C86.setHeight(17);C86.setLeft(8);C86.setIconThemeDrawStyle("ForegroundLightPrimary");C86.setIconMarginRight(16);C86.setIconOpacity(60);C86.setCaptionMarginBottom(0);C86.setCaptionMarginLeft(0);C86.setCaptionMarginRight(0);C86.setStyle(C0);
C86.setMouseOverStyle(C1);C86.setCaptionMarginTop(0);C86.iC();C87.setCaption("Asia Pacific");C87.setDisplayPosition(1);C87.setLeft(8);C87.setParent(C78);C87.setTabPosition(3);C87.setThemeDrawStyle("Heading1+ForegroundDarkPrimary");C87.setWidth(240);C87.setHeight(31);C87.setTop(16);C87.iC();C88.setCaption("122 Arthur Street North Sydney, NSW, 2060, Australia");C88.setDisplayPosition(5);C88.setParent(C78);C88.setTabPosition(7);C88.setTop(140);C88.setWidth(240);C88.setIconThemeDrawStyle("ForegroundLightPrimary");
C88.setLeft(8);C88.setIconMarginRight(16);C88.setIconOpacity(60);C88.setCaptionMarginBottom(0);C88.setCaptionMarginTop(0);C88.setCaptionMarginRight(0);C88.setCaptionMarginLeft(0);C88.setHeight(34);C88.setWordWrap(true);C88.iC();C89.setCaption("Info@DestinationsApp.com.au");C89.setDisplayPosition(3);C89.setParent(C78);C89.setTabPosition(2);C89.setTop(90);C89.setWidth(240);C89.setHeight(17);C89.setLeft(8);C89.setIconThemeDrawStyle("ForegroundLightPrimary");C89.setIconMarginRight(16);C89.setIconOpacity(60);
C89.setCaptionMarginBottom(0);C89.setCaptionMarginLeft(0);C89.setCaptionMarginRight(0);C89.setStyle(C0);C89.setMouseOverStyle(C1);C89.setCaptionMarginTop(0);C89.iC();C90.setCaption("+61 2 8907 0200");C90.setDisplayPosition(4);C90.setParent(C78);C90.setTabPosition(5);C90.setTop(115);C90.setWidth(240);C90.setHeight(17);C90.setLeft(8);C90.setIconThemeDrawStyle("ForegroundLightPrimary");C90.setIconMarginRight(16);C90.setIconOpacity(60);C90.setCaptionMarginBottom(0);C90.setCaptionMarginLeft(0);C90.setCaptionMarginRight(0);
C90.setStyle(C0);C90.setMouseOverStyle(C1);C90.setCaptionMarginTop(0);C90.iC();C91.setCaption("Destinations USA");C91.setDisplayPosition(2);C91.setLeft(8);C91.setParent(C76);C91.setTabPosition(8);C91.setThemeDrawStyle("Heading2+ForegroundMediumPrimary");C91.setTop(55);C91.setWidth(240);C91.setHeight(27);C91.iC();C92.setCaption("Destinations France");C92.setDisplayPosition(2);C92.setLeft(8);C92.setParent(C77);C92.setTabPosition(8);C92.setThemeDrawStyle("Heading2+ForegroundMediumPrimary");C92.setTop(55);
C92.setWidth(240);C92.setHeight(27);C92.iC();C93.setCaption("Desitnations Australia");C93.setDisplayPosition(2);C93.setLeft(8);C93.setParent(C78);C93.setTabPosition(8);C93.setThemeDrawStyle("Heading2+ForegroundMediumPrimary");C93.setTop(55);C93.setWidth(240);C93.setHeight(27);C93.iC();C94.setCaption("Destinations Canada");C94.setDisplayPosition(6);C94.setLeft(8);C94.setParent(C76);C94.setTabPosition(9);C94.setThemeDrawStyle("Heading2+ForegroundMediumPrimary");C94.setTop(215);C94.setWidth(240);C94.setHeight(27);
C94.iC();C95.setCaption("Destinations U.K.");C95.setDisplayPosition(6);C95.setLeft(8);C95.setParent(C77);C95.setTabPosition(9);C95.setThemeDrawStyle("Heading2+ForegroundMediumPrimary");C95.setTop(215);C95.setWidth(240);C95.setHeight(27);C95.iC();C96.setCaption("Destinantions Japan");C96.setDisplayPosition(6);C96.setLeft(8);C96.setParent(C78);C96.setTabPosition(9);C96.setThemeDrawStyle("Heading2+ForegroundMediumPrimary");C96.setTop(215);C96.setWidth(240);C96.setHeight(27);C96.iC();C97.setCaption("2700 Matheson Blvd East, Suite 801E Mississauga, ON, L4W 4V9, Canada");
C97.setDisplayPosition(9);C97.setParent(C76);C97.setTabPosition(7);C97.setTop(300);C97.setWidth(240);C97.setIconThemeDrawStyle("ForegroundLightPrimary");C97.setLeft(8);C97.setIconMarginRight(16);C97.setIconOpacity(60);C97.setCaptionMarginBottom(0);C97.setCaptionMarginTop(0);C97.setCaptionMarginRight(0);C97.setCaptionMarginLeft(0);C97.setHeight(34);C97.setWordWrap(true);C97.iC();C98.setCaption("Info@DestinationsApp.ca");C98.setDisplayPosition(7);C98.setParent(C76);C98.setTabPosition(1);C98.setTop(250);
C98.setWidth(240);C98.setHeight(17);C98.setLeft(8);C98.setIconThemeDrawStyle("ForegroundLightPrimary");C98.setIconMarginRight(16);C98.setIconOpacity(60);C98.setCaptionMarginBottom(0);C98.setCaptionMarginLeft(0);C98.setCaptionMarginRight(0);C98.setStyle(C0);C98.setMouseOverStyle(C1);C98.setCaptionMarginTop(0);C98.iC();C99.setCaption(" +1 905 238 1690");C99.setDisplayPosition(8);C99.setParent(C76);C99.setTabPosition(5);C99.setTop(275);C99.setWidth(240);C99.setHeight(17);C99.setLeft(8);C99.setIconThemeDrawStyle("ForegroundLightPrimary");
C99.setIconMarginRight(16);C99.setIconOpacity(60);C99.setCaptionMarginBottom(0);C99.setCaptionMarginLeft(0);C99.setCaptionMarginRight(0);C99.setStyle(C0);C99.setMouseOverStyle(C1);C99.setCaptionMarginTop(0);C99.iC();C100.setCaption("26-30 Upper Marlborough Road St. Albans, Hertfordshire, AL1 3UU, UK");C100.setDisplayPosition(9);C100.setParent(C77);C100.setTabPosition(7);C100.setTop(300);C100.setWidth(240);C100.setIconThemeDrawStyle("ForegroundLightPrimary");C100.setLeft(8);C100.setIconMarginRight(16);
C100.setIconOpacity(60);C100.setCaptionMarginBottom(0);C100.setCaptionMarginTop(0);C100.setCaptionMarginRight(0);C100.setCaptionMarginLeft(0);C100.setHeight(34);C100.setWordWrap(true);C100.iC();C101.setCaption("Info@DestinationsApp.co.uk");C101.setDisplayPosition(7);C101.setParent(C77);C101.setTabPosition(1);C101.setTop(250);C101.setWidth(240);C101.setHeight(17);C101.setLeft(8);C101.setIconThemeDrawStyle("ForegroundLightPrimary");C101.setIconMarginRight(16);C101.setIconOpacity(60);C101.setCaptionMarginBottom(0);
C101.setCaptionMarginLeft(0);C101.setCaptionMarginRight(0);C101.setStyle(C0);C101.setMouseOverStyle(C1);C101.setCaptionMarginTop(0);C101.iC();C102.setCaption("+44 1727 790300");C102.setDisplayPosition(8);C102.setParent(C77);C102.setTabPosition(5);C102.setTop(275);C102.setWidth(240);C102.setHeight(17);C102.setLeft(8);C102.setIconThemeDrawStyle("ForegroundLightPrimary");C102.setIconMarginRight(16);C102.setIconOpacity(60);C102.setCaptionMarginBottom(0);C102.setCaptionMarginLeft(0);C102.setCaptionMarginRight(0);
C102.setStyle(C0);C102.setMouseOverStyle(C1);C102.setCaptionMarginTop(0);C102.iC();C103.setCaption("BC Plaza 5th Floor, 2-3-10 Kudanminami, Chiyoda-ku, Tokyo, 102-0074, Japan");C103.setDisplayPosition(9);C103.setParent(C78);C103.setTabPosition(6);C103.setTop(300);C103.setWidth(240);C103.setIconThemeDrawStyle("ForegroundLightPrimary");C103.setLeft(8);C103.setIconMarginRight(16);C103.setIconOpacity(60);C103.setCaptionMarginBottom(0);C103.setCaptionMarginTop(0);C103.setCaptionMarginRight(0);C103.setCaptionMarginLeft(0);
C103.setHeight(51);C103.setWordWrap(true);C103.iC();C104.setCaption("Info@DestinationsApp.co.jp");C104.setDisplayPosition(7);C104.setParent(C78);C104.setTabPosition(1);C104.setTop(250);C104.setWidth(240);C104.setHeight(17);C104.setLeft(8);C104.setIconThemeDrawStyle("ForegroundLightPrimary");C104.setIconMarginRight(16);C104.setIconOpacity(60);C104.setCaptionMarginBottom(0);C104.setCaptionMarginLeft(0);C104.setCaptionMarginRight(0);C104.setStyle(C0);C104.setMouseOverStyle(C1);C104.setCaptionMarginTop(0);
C104.iC();C105.setCaption("+81 3 5275 1201");C105.setDisplayPosition(8);C105.setParent(C78);C105.setTabPosition(4);C105.setTop(275);C105.setWidth(240);C105.setHeight(17);C105.setLeft(8);C105.setIconThemeDrawStyle("ForegroundLightPrimary");C105.setIconMarginRight(16);C105.setIconOpacity(60);C105.setCaptionMarginBottom(0);C105.setCaptionMarginLeft(0);C105.setCaptionMarginRight(0);C105.setStyle(C0);C105.setMouseOverStyle(C1);C105.setCaptionMarginTop(0);C105.iC();C106.setCaption("Our offices");C106.setDisplayPosition(4);
C106.setHeight(56);C106.setLeft(0);C106.setParent(this);C106.setTabPosition(4);C106.setThemeDrawStyle("DarkTitle+Heading1");C106.setTop(0);C106.setWidth(1065);C106.setCaptionAlignment("CENTER");C106.iC();C107.setCollects("PRIM_MD.Label");C107.iC();C108.setCollects("PRIM_MD.Label");C108.iC();l.WEB().aH("DEVICECHANGED",this,e1);C81.aH("CLICK",this,e3);C82.aH("CLICK",this,e4);C85.aH("CLICK",this,e3);C86.aH("CLICK",this,e4);C89.aH("CLICK",this,e3);C90.aH("CLICK",this,e4);C98.aH("CLICK",this,e3);C99.aH("CLICK",this,e4);
C101.aH("CLICK",this,e3);C102.aH("CLICK",this,e4);C104.aH("CLICK",this,e3);C105.aH("CLICK",this,e4);this.setDisplayPosition(1);this.setHeight(415);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(1065);this.setLayoutManager(C2);this.aH("INITIALIZE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEb.DeviceChanged",122);r.ln=122;{r.ln=124;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=126;this.setLayoutManager(m.LAYOUTREGIONALOFFICESMOBILE);}else{r.ln=130;
this.setLayoutManager(m.LAYOUTREGIONALOFFICESDESKTOP);}}r.ln=134;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",136);r.ln=136;{r.ln=138;m.XUSADDRESS.set(l.cat(l.cat(l.cat(l.cat("2001 Butterfield Road, Suite 102",l.n.AsUnicodeString(10)),"Downers Grove, IL, 60515,"),l.n.AsUnicodeString(10)),"USA"));r.ln=139;m.XFRADDRESS.set(l.cat(l.cat(l.cat(l.cat("13, rue Camille Desmoulins",l.n.AsUnicodeString(10)),"92441, Issy-les-Moulineaux, Cedex,"),l.n.AsUnicodeString(10)),"France"));
r.ln=140;m.XAUADDRESS.set(l.cat(l.cat(l.cat(l.cat("122 Arthur Street",l.n.AsUnicodeString(10)),"North Sydney, NSW, 2060,"),l.n.AsUnicodeString(10)),"Australia"));r.ln=141;m.XCAADDRESS.set(l.cat(l.cat(l.cat(l.cat("2700 Matheson Blvd East,",l.n.AsUnicodeString(10)),"East Tower, Suite 801E"),l.n.AsUnicodeString(10)),"Mississauga, ON, L4W 4V9, Canada"));r.ln=143;m.XUKADDRESS.set(l.cat(l.cat(l.cat(l.cat("26-30 Upper Marlborough Road",l.n.AsUnicodeString(10)),"St. Albans, Hertfordshire, AL1 3UU,"),l.n.AsUnicodeString(10)),"United Kingdom"));
r.ln=145;m.XJPADDRESS.set(l.cat(l.cat(l.cat(l.cat("BC Plaza 5th Floor,",l.n.AsUnicodeString(10)),"2-3-10 Kudanminami, Chiyoda-ku,"),l.n.AsUnicodeString(10)),"Tokyo, 102-0074, Japan"));}r.ln=147;r.e();};function e3(SENDER,Ps){var r=l.eR(this,cO,"#xUSEmail.Click #xCAEmail.Click #xUKEmail.Click #xFREmail.Click #xAUEmail.Click #xJPEmail.Click",150);var C0=r.cR("QUICKEMAIL","PRIM_STR");C0.iC();r.ln=150;{r.ln=154;C0.set(l.s.Substitute("mailto:&1",SENDER.getCaption()));r.ln=156;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");
}r.ln=158;r.e();};function e4(SENDER,Ps){var r=l.eR(this,cO,"#xUSPhone.Click #xCAPhone.Click #xUKPhone.Click #xFRPhone.Click #xAUPhone.Click #xJPPhone.Click",160);var C0=r.cR("QUICKPHONE","PRIM_STR");C0.iC();r.ln=160;{r.ln=164;C0.set(l.s.Substitute("tel:&1",SENDER.getCaption()));r.ln=166;l.WEB().mthNAVIGATE(C0.get(),"CURRENT");}r.ln=168;r.e();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_ACOL"],dp:["PRIM_STR"]});