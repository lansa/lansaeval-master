﻿LANSA.addComponent({id:"XCASETTIN",nm:"XCASettings",ot:"wv",tp:"View",de:"Settings",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("STYLERED","PRIM_VS","Style");var C1=this.cR("STYLEPINK","PRIM_VS","Style");var C2=this.cR("STYLEPURPLE","PRIM_VS","Style");var C3=this.cR("STYLEDEEPPURPLE","PRIM_VS","Style");var C4=this.cR("STYLEINDIGO","PRIM_VS","Style");var C5=this.cR("STYLEBLUE","PRIM_VS","Style");var C6=this.cR("STYLELIGHTBLUE","PRIM_VS","Style");
var C7=this.cR("STYLECYAN","PRIM_VS","Style");var C8=this.cR("STYLETEAL","PRIM_VS","Style");var C9=this.cR("STYLEGREEN","PRIM_VS","Style");var C10=this.cR("STYLELIGHTGREEN","PRIM_VS","Style");var C11=this.cR("STYLELIME","PRIM_VS","Style");var C12=this.cR("STYLEYELLOW","PRIM_VS","Style");var C13=this.cR("STYLEAMBER","PRIM_VS","Style");var C14=this.cR("STYLEORANGE","PRIM_VS","Style");var C15=this.cR("STYLEDEEPORANGE","PRIM_VS","Style");var C16=this.cR("LAYOUTMAIN","PRIM_TBLO");var C17=this.cR("LAYOUTROW1","PRIM_TBLO","Row");
var C18=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C19=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C21=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C22=this.cR("FLOWLAYOUT1","PRIM_FWLM");var C23=this.cR("LAYOUTITEM3","PRIM_FWLI");var C24=this.cR("LAYOUT2","PRIM_TBLO");var C25=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C26=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C27=this.cR("LAYOUTITEM4","PRIM_FWLI");var C28=this.cR("LAYOUTITEM5","PRIM_FWLI");
var C29=this.cR("LAYOUTITEM6","PRIM_FWLI");var C30=this.cR("LAYOUTITEM7","PRIM_FWLI");var C31=this.cR("LAYOUTITEM8","PRIM_FWLI");var C32=this.cR("LAYOUTITEM9","PRIM_FWLI");var C33=this.cR("LAYOUTITEM10","PRIM_FWLI");var C34=this.cR("LAYOUTITEM11","PRIM_FWLI");var C35=this.cR("LAYOUTITEM12","PRIM_FWLI");var C36=this.cR("LAYOUTITEM13","PRIM_FWLI");var C37=this.cR("LAYOUTITEM14","PRIM_FWLI");var C38=this.cR("LAYOUTITEM15","PRIM_FWLI");var C39=this.cR("LAYOUTITEM16","PRIM_FWLI");var C40=this.cR("LAYOUTITEM17","PRIM_FWLI");
var C41=this.cR("LAYOUTITEM18","PRIM_FWLI");var C42=this.cR("PANELTHEMECOLORS","PRIM_PANL");var C43=this.cR("PANELRED","PRIM_PANL");var C44=this.cR("PANELPINK","PRIM_PANL");var C45=this.cR("PANELPURPLE","PRIM_PANL");var C46=this.cR("PANELDEEPPURPLE","PRIM_PANL");var C47=this.cR("PANELINDIGO","PRIM_PANL");var C48=this.cR("PANELBLUE","PRIM_PANL");var C49=this.cR("PANELLIGHTBLUE","PRIM_PANL");var C50=this.cR("PANELCYAN","PRIM_PANL");var C51=this.cR("LABELTHEME","PRIM_MD","Label");var C52=this.cR("PANELTEAL","PRIM_PANL");
var C53=this.cR("PANELGREEN","PRIM_PANL");var C54=this.cR("PANELLIGHTGREEN","PRIM_PANL");var C55=this.cR("PANELLIME","PRIM_PANL");var C56=this.cR("PANELYELLOW","PRIM_PANL");var C57=this.cR("PANELAMBER","PRIM_PANL");var C58=this.cR("PANELORANGE","PRIM_PANL");var C59=this.cR("PANELDEEPORANGE","PRIM_PANL");var C60=this.cR("DARKBACKGROUNDSWITCH","PRIM_MD","Switch");C0.setNormBackColor("244:67:54");C0.iC();C1.setNormBackColor("233:30:99");C1.iC();C2.setNormBackColor("156:39:176");C2.iC();C3.setNormBackColor("103:58:183");
C3.iC();C4.setNormBackColor("63:81:181");C4.iC();C5.setNormBackColor("33:150:243");C5.iC();C6.setNormBackColor("3:169:244");C6.iC();C7.setNormBackColor("0:188:212");C7.iC();C8.setNormBackColor("0:150:136");C8.iC();C9.setNormBackColor("76:175:80");C9.iC();C10.setNormBackColor("139:195:74");C10.iC();C11.setNormBackColor("205:220:57");C11.iC();C12.setNormBackColor("255:235:59");C12.iC();C13.setNormBackColor("255:193:7");C13.iC();C14.setNormBackColor("255:152:0");C14.iC();C15.setNormBackColor("255:87:34");
C15.iC();C16.iC();C17.setDisplayPosition(1);C17.setParent(C16);C17.iC();C18.setDisplayPosition(1);C18.setParent(C16);C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C18);C19.setManage(C60);C19.setParent(C16);C19.setRow(C17);C19.setSizing("FITTOWIDTH");C19.setFlow("DOWN");C19.iC();C20.setAlignment("TOPCENTER");C20.setColumn(C18);C20.setManage(C42);C20.setParent(C16);C20.setRow(C17);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setFlow("DOWN");C20.setMarginLeft(25);C20.setMarginRight(25);C20.setMarginBottom(20);
C20.iC();C21.setAlignment("TOPCENTER");C21.setColumn(C18);C21.setManage(C51);C21.setParent(C16);C21.setRow(C17);C21.setSizing("FITTOWIDTH");C21.setFlow("DOWN");C21.iC();C22.setSpacingItems(20);C22.iC();C23.setManage(C43);C23.setParent(C22);C23.iC();C24.iC();C25.setDisplayPosition(1);C25.setParent(C24);C25.iC();C26.setDisplayPosition(1);C26.setParent(C24);C26.iC();C27.setManage(C44);C27.setParent(C22);C27.iC();C28.setManage(C45);C28.setParent(C22);C28.iC();C29.setManage(C46);C29.setParent(C22);C29.iC();
C30.setManage(C47);C30.setParent(C22);C30.iC();C31.setManage(C48);C31.setParent(C22);C31.iC();C32.setManage(C49);C32.setParent(C22);C32.iC();C33.setManage(C50);C33.setParent(C22);C33.iC();C34.setManage(C52);C34.setParent(C22);C34.iC();C35.setManage(C53);C35.setParent(C22);C35.iC();C36.setManage(C54);C36.setParent(C22);C36.iC();C37.setManage(C55);C37.setParent(C22);C37.iC();C38.setManage(C56);C38.setParent(C22);C38.iC();C39.setManage(C57);C39.setParent(C22);C39.iC();C40.setManage(C58);C40.setParent(C22);
C40.iC();C41.setManage(C59);C41.setParent(C22);C41.iC();C42.setDisplayPosition(2);C42.setLeft(25);C42.setParent(this);C42.setTabPosition(1);C42.setTabStop(false);C42.setTop(50);C42.setWidth(935);C42.setLayoutManager(C22);C42.setHeight(110);C42.iC();C43.setDisplayPosition(1);C43.setParent(C42);C43.setTabPosition(16);C43.setTabStop(false);C43.setLayoutManager(C24);C43.setStyle(C0);C43.setLeft(0);C43.setTop(0);C43.iC();C44.setDisplayPosition(2);C44.setLeft(70);C44.setParent(C42);C44.setTabPosition(15);
C44.setTabStop(false);C44.setLayoutManager(C24);C44.setStyle(C1);C44.setTop(0);C44.iC();C45.setDisplayPosition(3);C45.setLeft(140);C45.setParent(C42);C45.setTabPosition(14);C45.setTabStop(false);C45.setLayoutManager(C24);C45.setStyle(C2);C45.setTop(0);C45.iC();C46.setDisplayPosition(4);C46.setLeft(210);C46.setParent(C42);C46.setTabPosition(13);C46.setTabStop(false);C46.setLayoutManager(C24);C46.setStyle(C3);C46.setTop(0);C46.iC();C47.setDisplayPosition(5);C47.setLeft(280);C47.setParent(C42);C47.setTabPosition(12);
C47.setTabStop(false);C47.setLayoutManager(C24);C47.setStyle(C4);C47.setTop(0);C47.iC();C48.setDisplayPosition(6);C48.setLeft(350);C48.setParent(C42);C48.setTabPosition(11);C48.setTabStop(false);C48.setLayoutManager(C24);C48.setStyle(C5);C48.setTop(0);C48.iC();C49.setDisplayPosition(7);C49.setLeft(420);C49.setParent(C42);C49.setTabPosition(10);C49.setTabStop(false);C49.setLayoutManager(C24);C49.setStyle(C6);C49.setTop(0);C49.iC();C50.setDisplayPosition(8);C50.setLeft(490);C50.setParent(C42);C50.setTabPosition(9);
C50.setTabStop(false);C50.setLayoutManager(C24);C50.setStyle(C7);C50.setTop(0);C50.iC();C51.setCaption("Theme");C51.setDisplayPosition(1);C51.setLeft(0);C51.setParent(this);C51.setTabPosition(3);C51.setTop(0);C51.setHeight(50);C51.setPaddingLeft(25);C51.setWidth(985);C51.iC();C52.setDisplayPosition(9);C52.setLeft(560);C52.setParent(C42);C52.setTabPosition(8);C52.setTabStop(false);C52.setLayoutManager(C24);C52.setStyle(C8);C52.setTop(0);C52.iC();C53.setDisplayPosition(10);C53.setLeft(630);C53.setParent(C42);
C53.setTabPosition(7);C53.setTabStop(false);C53.setLayoutManager(C24);C53.setStyle(C9);C53.setTop(0);C53.iC();C54.setDisplayPosition(11);C54.setLeft(700);C54.setParent(C42);C54.setTabPosition(6);C54.setTabStop(false);C54.setLayoutManager(C24);C54.setStyle(C10);C54.setTop(0);C54.iC();C55.setDisplayPosition(12);C55.setLeft(770);C55.setParent(C42);C55.setTabPosition(5);C55.setTabStop(false);C55.setLayoutManager(C24);C55.setStyle(C11);C55.setTop(0);C55.iC();C56.setDisplayPosition(13);C56.setLeft(840);
C56.setParent(C42);C56.setTabPosition(4);C56.setTabStop(false);C56.setLayoutManager(C24);C56.setStyle(C12);C56.setTop(0);C56.iC();C57.setDisplayPosition(14);C57.setLeft(0);C57.setParent(C42);C57.setTabPosition(3);C57.setTabStop(false);C57.setLayoutManager(C24);C57.setStyle(C13);C57.setTop(60);C57.iC();C58.setDisplayPosition(15);C58.setLeft(70);C58.setParent(C42);C58.setTabPosition(2);C58.setTabStop(false);C58.setLayoutManager(C24);C58.setStyle(C14);C58.setTop(60);C58.iC();C59.setDisplayPosition(16);
C59.setLeft(140);C59.setParent(C42);C59.setTabPosition(1);C59.setTabStop(false);C59.setLayoutManager(C24);C59.setStyle(C15);C59.setTop(60);C59.iC();C60.setCaption("Dark background");C60.setDisplayPosition(3);C60.setHeight(50);C60.setLeft(0);C60.setParent(this);C60.setTabPosition(2);C60.setTabStop(false);C60.setIconAlignment("CENTERRIGHT");C60.setWidth(985);C60.setTop(180);C60.setThemeDrawStyle("BottomDivider+TopDivider");C60.setPaddingLeft(25);C60.setPaddingRight(25);C60.setIconColor("THEME500");
C60.iC();C43.aH("CLICK",this,e1);C44.aH("CLICK",this,e2);C45.aH("CLICK",this,e3);C46.aH("CLICK",this,e4);C47.aH("CLICK",this,e5);C48.aH("CLICK",this,e6);C49.aH("CLICK",this,e7);C50.aH("CLICK",this,e8);C52.aH("CLICK",this,e9);C53.aH("CLICK",this,e10);C54.aH("CLICK",this,e11);C55.aH("CLICK",this,e12);C56.aH("CLICK",this,e13);C57.aH("CLICK",this,e14);C58.aH("CLICK",this,e15);C59.aH("CLICK",this,e16);C60.aH("CHANGED",this,e17);this.setDisplayPosition(1);this.setHeight(497);this.setWidth(985);this.setVerticalScroll(true);
this.setLayoutManager(C16);this.setTabPosition(1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#PanelRed.Click",71);r.ln=71;{r.ln=73;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNRED"));}r.ln=75;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#PanelPink.Click",77);r.ln=77;{r.ln=79;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNPINK"));}r.ln=81;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#PanelPurple.Click",83);r.ln=83;{r.ln=85;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNPURPLE"));
}r.ln=87;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#PanelDeepPurple.Click",89);r.ln=89;{r.ln=91;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNDEEPPURPLE"));}r.ln=93;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#PanelIndigo.Click",95);r.ln=95;{r.ln=97;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNINDIGO"));}r.ln=99;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#PanelBlue.Click",101);r.ln=101;{r.ln=103;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNBLUE"));
}r.ln=105;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#PanelLightBlue.Click",107);r.ln=107;{r.ln=109;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIGHTBLUE"));}r.ln=111;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#PanelCyan.Click",113);r.ln=113;{r.ln=115;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNCYAN"));}r.ln=117;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#PanelTeal.Click",119);r.ln=119;{r.ln=121;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNTEAL"));
}r.ln=123;r.e();};function e10(sender,Ps){var r=l.eR(this,cO,"#PanelGreen.Click",125);r.ln=125;{r.ln=127;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNGREEN"));}r.ln=129;r.e();};function e11(sender,Ps){var r=l.eR(this,cO,"#PanelLightGreen.Click",131);r.ln=131;{r.ln=133;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIGHTGREEN"));}r.ln=135;r.e();};function e12(sender,Ps){var r=l.eR(this,cO,"#PanelLime.Click",137);r.ln=137;{r.ln=139;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNLIME"));
}r.ln=141;r.e();};function e13(sender,Ps){var r=l.eR(this,cO,"#PanelYellow.Click",143);r.ln=143;{r.ln=145;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNYELLOW"));}r.ln=147;r.e();};function e14(sender,Ps){var r=l.eR(this,cO,"#PanelAmber.Click",148);r.ln=148;{r.ln=150;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNAMBER"));}r.ln=152;r.e();};function e15(sender,Ps){var r=l.eR(this,cO,"#PanelOrange.Click",154);r.ln=154;{r.ln=156;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNORANGE"));
}r.ln=158;r.e();};function e16(sender,Ps){var r=l.eR(this,cO,"#PanelDeepOrange.Click",160);r.ln=160;{r.ln=162;l.WEB().getWebPage().setTheme(l.THEME().get("MATERIALDESIGNDEEPORANGE"));}r.ln=164;r.e();};function e17(sender,Ps){var r=l.eR(this,cO,"#DarkBackgroundSwitch.Changed",166);r.ln=166;{r.ln=168;if(l.s.eq(l.WEB().getWebPage().getThemeBackground(),"LIGHT")){r.ln=170;l.WEB().getWebPage().setThemeBackground("DARK");}else{r.ln=174;l.WEB().getWebPage().setThemeBackground("LIGHT");}}r.ln=178;r.e();};
},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_FWLM","PRIM_FWLI","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Switch"]});