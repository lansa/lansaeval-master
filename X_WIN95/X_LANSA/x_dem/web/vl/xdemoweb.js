﻿LANSA.addComponent({id:"XDEMOWEB",nm:"xDemoWebListAddress",ot:"rp",tp:"Reusable Part",de:"Address Cell",tl:14020003},function(l,oI,u){var c1=l.cDec("1.65");var rc1=l.cB("ximagegoo.png");var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_LIST.IListCellDesign"],mt:{OnItemGotReference:{ps:{"ListItem":{pt:"i"}}},GetGoogleMapsURL:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");
var C4=this.cR("ROW_3","PRIM_TBLO","Row");var C5=this.cR("COLUMN","PRIM_TBLO","Column");var C6=this.cR("COLUMN_2","PRIM_TBLO","Column");var C7=this.cR("GADDRESS","PRIM_LABL");var C8=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C9=this.cR("GGOOGLEMAPS","PRIM_IMAG");var C10=this.cR("LAYOUTITEM_4","PRIM_TBLO","Item");this.cD("EMPLOYEE");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);
C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.setWidth(23);C5.setUnits("PIXELS");C5.iC();C6.setDisplayPosition(2);C6.setParent(C1);C6.setWidth(c1);C6.iC();C7.setCaption("<text>");C7.setDisplayPosition(1);C7.setEllipses("END");C7.setLeft(23);C7.setParent(this);C7.setTabPosition(1);C7.setTabStop(false);C7.setTop(0);C7.setWidth(194);C7.setVerticalAlignment("CENTER");C7.setMarginLeft(2);C7.setMarginRight(2);C7.setHeight(63);C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C6);C8.setFlow("DOWN");
C8.setManage(C7);C8.setParent(C1);C8.setRow(C2);C8.setRowSpan(3);C8.iC();C9.setDisplayPosition(2);C9.setLeft(3);C9.setParent(this);C9.setTabPosition(2);C9.setTabStop(false);C9.setTop(25);C9.setWidth(16);C9.setHeight(16);C9.setImage(rc1);C9.setImageSizing("BESTFIT");C9.setStyle(C0);C9.iC();C10.setColumn(C5);C10.setFlow("DOWN");C10.setManage(C9);C10.setParent(C1);C10.setRow(C3);C10.setSizing("NONE");C10.setMarginTop(2);C10.setMarginBottom(2);C10.setMarginLeft(2);C10.setMarginRight(2);C10.iC();C9.aH("CLICK",this,e1);
this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(217);this.setLayoutManager(C1);this.setHeight(63);}});cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",24);var P0=r.cPD("LISTITEM");P0=p0;r.ln=24;{r.ln=27;this.srEMPLOYEE(l.cast(P0.getRelatedReference(),"XDEMO_32"));r.ln=30;m.GADDRESS.set(l.s.Substitute("&1 &2 &3 &4",m.EMPLOYEE.getSTREET(),m.EMPLOYEE.getCITY(),m.EMPLOYEE.getSTATE(),m.EMPLOYEE.getPOSTCODE()));}r.ln=32;
r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#gGoogleMaps.Click",34);r.ln=34;{r.ln=37;l.WEB().mthNAVIGATE(cO.mthGETGOOGLEMAPSURL.call(this));}r.ln=39;r.e();};cO.mthGETGOOGLEMAPSURL=function(){var m=this.REF,r=l.mR(this,cO,"GetGoogleMapsURL",42);var P0=r.cP("RESULT","PRIM_STR");r.ln=42;{r.ln=47;P0.set("http://maps.googleapis.com/maps/api/staticmap?size=800x600&markers=size:mid%7Ccolor:red%7C");r.ln=48;P0.set(l.add(P0.get(),l.s.ReplaceAll(m.EMPLOYEE.getSTREET()," ","+")));r.ln=49;P0.set(l.cat(P0.get(),"+"));
r.ln=50;P0.set(l.add(P0.get(),l.s.ReplaceAll(m.EMPLOYEE.getCITY()," ","+")));r.ln=51;P0.set(l.cat(P0.get(),"+"));r.ln=52;P0.set(l.add(P0.get(),l.s.ReplaceAll(m.EMPLOYEE.getSTATE()," ","+")));r.ln=53;P0.set(l.cat(P0.get(),"&sensor=false"));}r.ln=55;return r.rV(P0.get());};cO.srEMPLOYEE=function(rn){this.sR("EMPLOYEE",rn);};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LABL","PRIM_TBLO.Item","PRIM_IMAG"],dc:["XDEMO_32"]});