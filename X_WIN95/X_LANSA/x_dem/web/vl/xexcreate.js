﻿LANSA.addComponent({id:"XEXCREATE",nm:"XEXCreateExpense",ot:"wv",tp:"Dialog",de:"Create Expense",tl:14020003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",co:function(){cO.aN.call(this);var C0=this.cR("STYLECAPTION","PRIM_VS","Style");var C1=this.cR("LAYOUTMAIN","PRIM_TBLO");var C2=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");var C3=this.cR("COLUMN2MAIN","PRIM_TBLO","Column");var C4=this.cR("COLUMN3MAIN","PRIM_TBLO","Column");var C5=this.cR("ROW1MAIN","PRIM_TBLO","Row");var C6=this.cR("ROW2MAIN","PRIM_TBLO","Row");
var C7=this.cR("ROW3MAIN","PRIM_TBLO","Row");var C8=this.cR("ROW4MAIN","PRIM_TBLO","Row");var C9=this.cR("ITEM1MAIN","PRIM_TBLO","Item");var C10=this.cR("ITEM2MAIN","PRIM_TBLO","Item");var C11=this.cR("ITEM3MAIN","PRIM_TBLO","Item");var C12=this.cR("ITEM4MAIN","PRIM_TBLO","Item");var C13=this.cR("ITEM5MAIN","PRIM_TBLO","Item");var C14=this.cR("LAYOUTDETAILS","PRIM_TBLO");var C15=this.cR("COLUMN1DETAILS","PRIM_TBLO","Column");var C16=this.cR("COLUMN2DETAILS","PRIM_TBLO","Column");var C17=this.cR("COLUMN3DETAILS","PRIM_TBLO","Column");
var C18=this.cR("ROW1DETAILS","PRIM_TBLO","Row");var C19=this.cR("ROW2DETAILS","PRIM_TBLO","Row");var C20=this.cR("ROW3DETAILS","PRIM_TBLO","Row");var C21=this.cR("ROW4DETAILS","PRIM_TBLO","Row");var C22=this.cR("ROW5DETAILS","PRIM_TBLO","Row");var C23=this.cR("ITEM1DETAILS","PRIM_TBLO","Item");var C24=this.cR("ITEM2DETAILS","PRIM_TBLO","Item");var C25=this.cR("ITEM3DETAILS","PRIM_TBLO","Item");var C26=this.cR("ITEM4DETAILS","PRIM_TBLO","Item");var C27=this.cR("ITEM5DETAILS","PRIM_TBLO","Item");var C28=this.cR("MERCHANT","PRIM_MD","Edit");
var C29=this.cR("DATE","PRIM_MD","Edit");var C30=this.cR("CLOSE","PRIM_MD","Label");var C31=this.cR("LABELCAPTION","PRIM_LABL");var C32=this.cR("TOTAL","PRIM_MD","Edit");var C33=this.cR("COMMENT","PRIM_MD","Edit");var C34=this.cR("BUTTONSAVE","PRIM_MD","RaisedButton");var C35=this.cR("BUTTONCANCEL","PRIM_MD","FlatButton");var C36=this.cR("BUTTONRECEIPT","PRIM_MD","RaisedButton");var C37=this.cR("PANELDETAILS","PRIM_PANL");C0.setFontSize(24);C0.setFontUnits("PIXEL");C0.iC();C1.iC();C2.setDisplayPosition(1);
C2.setParent(C1);C2.setUnits("PIXELS");C2.setWidth(40);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setWidth(40);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.setUnits("PIXELS");C5.setHeight(10);C5.iC();C6.setDisplayPosition(2);C6.setParent(C1);C6.setHeight(40);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(3);C7.setParent(C1);C7.setMaxHeight(350);C7.iC();C8.setDisplayPosition(4);C8.setParent(C1);C8.setUnits("PIXELS");
C8.setHeight(80);C8.iC();C9.setAlignment("TOPRIGHT");C9.setColumn(C4);C9.setManage(C30);C9.setParent(C1);C9.setRow(C6);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C3);C10.setManage(C31);C10.setParent(C1);C10.setRow(C6);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C3);C11.setManage(C34);C11.setParent(C1);C11.setRow(C8);C11.setSizing("NONE");C11.setFlow("RIGHT");C11.setMarginTop(20);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C3);C12.setManage(C35);C12.setParent(C1);C12.setRow(C8);
C12.setSizing("NONE");C12.setFlow("RIGHT");C12.setMarginLeft(20);C12.setMarginTop(20);C12.iC();C13.setColumn(C2);C13.setManage(C37);C13.setParent(C1);C13.setRow(C7);C13.setColumnSpan(3);C13.iC();C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.setUnits("PIXELS");C15.setWidth(40);C15.iC();C16.setDisplayPosition(2);C16.setParent(C14);C16.iC();C17.setDisplayPosition(3);C17.setParent(C14);C17.setUnits("PIXELS");C17.setWidth(40);C17.iC();C18.setDisplayPosition(1);C18.setParent(C14);C18.setHeight(20);
C18.setUnits("PIXELS");C18.iC();C19.setDisplayPosition(2);C19.setParent(C14);C19.setHeight(76);C19.setUnits("PIXELS");C19.iC();C20.setDisplayPosition(3);C20.setParent(C14);C20.setHeight(76);C20.setUnits("PIXELS");C20.iC();C21.setDisplayPosition(4);C21.setParent(C14);C21.setHeight(76);C21.setUnits("PIXELS");C21.iC();C22.setDisplayPosition(5);C22.setParent(C14);C22.setHeight(76);C22.setUnits("PIXELS");C22.iC();C23.setColumn(C16);C23.setManage(C28);C23.setParent(C14);C23.setRow(C19);C23.iC();C24.setManage(C32);
C24.setParent(C14);C24.setRow(C20);C24.setColumn(C16);C24.setMarginRight(130);C24.iC();C25.setAlignment("CENTERRIGHT");C25.setColumn(C16);C25.setManage(C36);C25.setParent(C14);C25.setRow(C20);C25.setSizing("NONE");C25.iC();C26.setManage(C29);C26.setParent(C14);C26.setRow(C21);C26.setColumn(C16);C26.iC();C27.setColumn(C16);C27.setManage(C33);C27.setParent(C14);C27.setRow(C22);C27.iC();C28.setDisplayPosition(1);C28.setCaption("Merchant");C28.setLeft(40);C28.setParent(C37);C28.setTabPosition(1);C28.setTop(20);
C28.setHeight(76);C28.setWidth(575);C28.iC();C29.setDisplayPosition(2);C29.setCaption("Date");C29.setLeft(40);C29.setParent(C37);C29.setTabPosition(4);C29.setTop(172);C29.setHeight(76);C29.setWidth(575);C29.iC();C30.setDisplayPosition(1);C30.setIcon("close");C30.setIconOpacity(50);C30.setLeft(615);C30.setParent(this);C30.setTabPosition(1);C30.setTabStop(false);C30.setHeight(40);C30.setWidth(40);C30.iC();C31.setCaption("Add Expense");C31.setDisplayPosition(2);C31.setEllipses("WORD");C31.setHeight(40);
C31.setLeft(40);C31.setParent(this);C31.setTabPosition(2);C31.setTabStop(false);C31.setVerticalAlignment("CENTER");C31.setWidth(575);C31.setStyle(C0);C31.iC();C32.setDisplayPosition(3);C32.setCaption("Total");C32.setLeft(40);C32.setParent(C37);C32.setTabPosition(2);C32.setTop(96);C32.setHeight(76);C32.setWidth(445);C32.iC();C33.setDisplayPosition(4);C33.setCaption("Comment");C33.setLeft(40);C33.setParent(C37);C33.setTabPosition(5);C33.setTop(248);C33.setHeight(76);C33.setWidth(575);C33.iC();C34.setCaption("SAVE");
C34.setDisplayPosition(3);C34.setLeft(40);C34.setParent(this);C34.setTabPosition(3);C34.setThemeDrawStyle("Primary");C34.setTop(420);C34.setWidth(140);C34.iC();C35.setCaption("CANCEL");C35.setDisplayPosition(4);C35.setLeft(200);C35.setParent(this);C35.setTabPosition(4);C35.setThemeDrawStyle("PrimaryForeground");C35.setTop(420);C35.iC();C36.setCaption("SELECT RECEIPT");C36.setDisplayPosition(5);C36.setLeft(495);C36.setParent(C37);C36.setTabPosition(3);C36.setTop(116);C36.setThemeDrawStyle("PrimaryForeground");
C36.setWidth(120);C36.setTabStop(false);C36.iC();C37.setDisplayPosition(5);C37.setLeft(0);C37.setParent(this);C37.setTabPosition(5);C37.setTabStop(false);C37.setTop(50);C37.setWidth(655);C37.setVerticalScroll(true);C37.setLayoutManager(C14);C37.setHeight(350);C37.iC();C28.aH("CHANGED",this,e4);C29.aH("CHANGED",this,e5);C30.aH("CLICK",this,e2);C32.aH("CHANGED",this,e6);C33.aH("CHANGED",this,e7);C34.aH("CLICK",this,e3);C35.aH("CLICK",this,e2);this.setHeight(540);this.setWidth(657);this.setLayoutManager(C1);
this.setVerticalScroll(true);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",53);r.ln=53;{r.ln=55;m.MERCHANT.set("");m.DATE.set("");m.COMMENT.set("");m.TOTAL.set("");r.ln=57;m.MERCHANT.mthCLEARERROR();r.ln=58;m.DATE.mthCLEARERROR();r.ln=59;m.COMMENT.mthCLEARERROR();r.ln=60;m.TOTAL.mthCLEARERROR();}r.ln=62;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonCancel.Click #Close.Click",64);r.ln=64;{r.ln=66;this.mthCLOSE();}r.ln=68;r.e();
};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonSave.Click",70);var C0=r.cR("VALID","PRIM_BOLN");C0.setValue(true);C0.iC();r.ln=70;{r.ln=74;if(l.s.eq(l.s.Trim(m.MERCHANT.getValue()),"")){r.ln=76;m.MERCHANT.mthSHOWERROR("You MUST specify a merchant");r.ln=77;C0.set(false);}r.ln=81;if(l.s.eq(l.s.Trim(m.TOTAL.getValue()),"")){r.ln=83;m.TOTAL.mthSHOWERROR("You MUST specify an amount");r.ln=84;C0.set(false);}r.ln=88;if(l.s.eq(l.s.Trim(m.DATE.getValue()),"")){r.ln=90;m.DATE.mthSHOWERROR("You MUST specify a date");
r.ln=91;C0.set(false);}r.ln=95;if(l.s.eq(l.s.Trim(m.COMMENT.getValue()),"")){r.ln=97;m.COMMENT.mthSHOWERROR("You MUST specify a comment");r.ln=98;C0.set(false);}r.ln=102;if(l.tB(C0.get())){r.ln=104;this.mthCLOSE();}}r.ln=108;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Merchant.Changed",110);r.ln=110;{r.ln=112;m.MERCHANT.mthCLEARERROR();}r.ln=114;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Date.Changed",116);r.ln=116;{r.ln=118;m.DATE.mthCLEARERROR();}r.ln=120;
r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Total.Changed",122);r.ln=122;{r.ln=124;m.TOTAL.mthCLEARERROR();}r.ln=126;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Comment.Changed",128);r.ln=128;{r.ln=130;m.COMMENT.mthCLEARERROR();}r.ln=132;r.e();};},{rp:["PRIM_DLG","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Edit","PRIM_MD.Label","PRIM_LABL","PRIM_MD.RaisedButton","PRIM_MD.FlatButton","PRIM_PANL"],dp:["PRIM_BOLN"]});
