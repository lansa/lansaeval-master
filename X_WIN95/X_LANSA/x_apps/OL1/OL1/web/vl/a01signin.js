﻿LANSA.addComponent({id:"A01SIGNIN",nm:"A01SignIn",ot:"wv",tp:"Dialog",de:"Sign In",tl:14020005},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",mt:{SignIn:{}},ev:{Completed:{}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C2=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C6=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C8=this.cR("LABEL","PRIM_MD","Label");var C9=this.cR("USERNAME","PRIM_MD","Edit");var C10=this.cR("PASSWORD","PRIM_MD","Edit");var C11=this.cR("BUTTONSIGNIN","PRIM_MD","RaisedButton");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setMinHeight(120);C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(2);C3.iC();C4.setColumn(C1);
C4.setManage(C9);C4.setParent(C0);C4.setRow(C3);C4.setSizing("FITTOWIDTH");C4.setFlow("DOWN");C4.setMarginTop(16);C4.setMarginLeft(24);C4.setMarginRight(24);C4.setAlignment("TOPRIGHT");C4.iC();C5.setColumn(C1);C5.setManage(C10);C5.setParent(C0);C5.setRow(C3);C5.setSizing("FITTOWIDTH");C5.setFlow("DOWN");C5.setMarginLeft(24);C5.setMarginRight(24);C5.setAlignment("TOPRIGHT");C5.setMarginTop(8);C5.iC();C6.setColumn(C1);C6.setManage(C11);C6.setParent(C0);C6.setRow(C3);C6.setSizing("NONE");C6.setAlignment("TOPRIGHT");
C6.setMarginRight(24);C6.setFlow("DOWN");C6.setMarginTop(40);C6.iC();C7.setColumn(C1);C7.setManage(C8);C7.setParent(C0);C7.setRow(C2);C7.setSizing("FITTOWIDTH");C7.setAlignment("TOPCENTER");C7.iC();C8.setCaption("My First App");C8.setDisplayPosition(3);C8.setHeight(120);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(4);C8.setThemeDrawStyle("DarkTitle+Title");C8.setTop(0);C8.setWidth(327);C8.setCaptionAlignment("CENTER");C8.setIconThemeDrawStyle("Title");C8.iC();C9.setDisplayPosition(1);C9.setLeft(24);
C9.setParent(this);C9.setTabPosition(1);C9.setTop(136);C9.setHeight(56);C9.setWidth(279);C9.setCaption("Username");C9.setHelperPosition("NONE");C9.iC();C10.setDisplayPosition(2);C10.setLeft(24);C10.setParent(this);C10.setTabPosition(2);C10.setTop(200);C10.setHeight(56);C10.setWidth(279);C10.setCaption("Password");C10.setPasswordChar("*");C10.setHelperPosition("NONE");C10.iC();C11.setCaption("Sign in");C11.setDisplayPosition(4);C11.setLeft(203);C11.setParent(this);C11.setTabPosition(3);C11.setTop(296);
C11.setButtonDefault(true);C11.setThemeDrawStyle("DarkTitle");C11.iC();l.WEB().aH("DEVICECHANGED",this,e1);C11.aH("CLICK",this,e2);this.setLayoutManager(C0);this.setHeight(353);this.setWidth(329);this.setVerticalScroll(true);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.CreateInstance #SYS_WEB.DeviceChanged",26);r.ln=26;{r.ln=28;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=30;this.setPlacement("FULLSCREEN");}else{r.ln=34;this.setPlacement("CENTER");}
}r.ln=38;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonSignIn.Click",40);r.ln=40;{r.ln=42;this.mthSIGNIN();}r.ln=44;r.e();};cO.mthSIGNIN=function(){var m=this.REF,r=l.mR(this,cO,"SignIn",46),mth=r;var C0=r.cDR("SIGNIN","A01SESSIO","SIGNIN");var C1=r.cR("RETURNCODE","PRIM_STR");C0.iC();C1.iC();C0.aH("COMPLETED",this,e3);r.ln=46;{r.ln=51;C0.mthEXECUTEASYNC({FLD:{"A01USERNAME":m.USERNAME.get(),"A01PASSWORD":m.PASSWORD.get()}},{FLD:{"A01RETURNCODE":C1}});}r.ln=67;r.e();function e3(sender,Ps)
{var r=l.eR(this,cO,"#SignIn.Completed",53,mth);r.ln=53;{r.ln=55;if(l.tB(l.s.eq(C1.get(),"OK"))){r.ln=57;this.mthCLOSE();r.ln=59;m.PASSWORD.set("");r.ln=61;this.fE("COMPLETED");}}r.ln=65;r.e();}};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.RaisedButton","PRIM_WEB.DataRequest"],dp:["PRIM_STR"]});