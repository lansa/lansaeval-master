﻿LANSA.addComponent({id:"XDEMO_35",nm:"xDemoWebUDCTreeOnDemandEmployeeItem",ot:"rp",tp:"Reusable Part",de:"Tree Employee Design",tl:14020008},function(l,oI,u){var c1=l.cDec("1.72"),c2=l.cDec(".37"),c3=l.cDec("1.16");var cO=l.rC(oI,{an:"XDEMO_18",mt:{OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");
var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("ROW3","PRIM_TBLO","Row");var C7=this.cR("ROW4","PRIM_TBLO","Row");var C8=this.cR("COL1","PRIM_TBLO","Column");var C9=this.cR("COL2","PRIM_TBLO","Column");var C10=this.cR("COL3","PRIM_TBLO","Column");var C11=this.cR("COL4","PRIM_TBLO","Column");var C12=this.cR("COL5","PRIM_TBLO","Column");var C13=this.cR("ITEM3","PRIM_TBLO","Item");var C14=this.cR("ITEM4","PRIM_TBLO","Item");var C15=this.cR("ITEM5","PRIM_TBLO","Item");
var C16=this.cR("ITEM6","PRIM_TBLO","Item");var C17=this.cR("TBLO_1","PRIM_TBLO","Item");var C18=this.cR("TBLO_2","PRIM_TBLO","Item");var C19=this.cR("TBLO_3","PRIM_TBLO","Item");var C20=this.cR("TBLO_4","PRIM_TBLO","Item");var C21=this.cR("TBLO_5","PRIM_TBLO","Item");var C22=this.cR("TBLO_7","PRIM_TBLO","Item");var C23=this.cR("TBLO_8","PRIM_TBLO","Item");var C24=this.cR("TBLO_10","PRIM_TBLO","Item");var C25=this.cR("LFULLNAME","PRIM_LABL");var C26=this.cR("LSTREET","PRIM_LABL");var C27=this.cR("LCITY","PRIM_LABL");
var C28=this.cR("LSTATEPOSTCODE","PRIM_LABL");var C29=this.cR("LNAME","PRIM_LABL");var C30=this.cR("LADDRESS","PRIM_LABL");var C31=this.cR("LCONTACT","PRIM_LABL");var C32=this.cR("LWORK","PRIM_LABL");var C33=this.cR("LHOME","PRIM_LABL");var C34=this.cR("LPHONEWORK","PRIM_LABL");var C35=this.cR("LPHONEHOME","PRIM_LABL");var C36=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");this.cD("GEMPLOYEE");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(6);C2.setParent(C1);C2.setWidth(70);C2.setUnits("PIXELS");
C2.iC();C3.setDisplayPosition(7);C3.setParent(C1);C3.setWidth(c1);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.iC();C5.setDisplayPosition(2);C5.setParent(C1);C5.iC();C6.setDisplayPosition(3);C6.setParent(C1);C6.iC();C7.setDisplayPosition(4);C7.setParent(C1);C7.iC();C8.setDisplayPosition(2);C8.setParent(C1);C8.setUnits("PIXELS");C8.setWidth(56);C8.iC();C9.setDisplayPosition(3);C9.setParent(C1);C9.setUnits("PIXELS");C9.setWidth(70);C9.iC();C10.setDisplayPosition(4);C10.setParent(C1);C10.setWidth(c2);
C10.iC();C11.setDisplayPosition(5);C11.setParent(C1);C11.setWidth(c3);C11.iC();C12.setDisplayPosition(1);C12.setParent(C1);C12.setWidth(30);C12.setUnits("PIXELS");C12.iC();C13.setColumn(C10);C13.setManage(C25);C13.setParent(C1);C13.setRow(C4);C13.setColumnSpan(2);C13.iC();C14.setColumn(C3);C14.setManage(C26);C14.setParent(C1);C14.setRow(C5);C14.iC();C15.setColumn(C3);C15.setManage(C27);C15.setParent(C1);C15.setRow(C6);C15.iC();C16.setColumn(C3);C16.setManage(C28);C16.setParent(C1);C16.setRow(C7);
C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C9);C17.setManage(C29);C17.setParent(C1);C17.setRow(C4);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C2);C18.setFlow("DOWN");C18.setManage(C30);C18.setParent(C1);C18.setRow(C5);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C9);C19.setFlow("DOWN");C19.setManage(C31);C19.setParent(C1);C19.setRow(C5);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C10);C20.setFlow("DOWN");C20.setManage(C32);C20.setParent(C1);C20.setRow(C5);C20.iC();C21.setAlignment("TOPLEFT");
C21.setColumn(C10);C21.setFlow("DOWN");C21.setManage(C33);C21.setParent(C1);C21.setRow(C6);C21.iC();C22.setAlignment("TOPLEFT");C22.setColumn(C11);C22.setFlow("DOWN");C22.setManage(C34);C22.setParent(C1);C22.setRow(C5);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C11);C23.setFlow("DOWN");C23.setManage(C35);C23.setParent(C1);C23.setRow(C6);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C8);C24.setFlow("DOWN");C24.setManage(C36);C24.setParent(C1);C24.setRow(C4);C24.setSizing("FITTOWIDTH");
C24.setMarginTop(2);C24.iC();C25.setCaption("Firstname, Surname");C25.setDisplayPosition(1);C25.setEllipses("WORD");C25.setHeight(20);C25.setLeft(156);C25.setParent(this);C25.setTabPosition(4);C25.setTabStop(false);C25.setTop(0);C25.setVerticalAlignment("CENTER");C25.setWidth(178);C25.setDragStyle("AGGREGATED");C25.setThemeDrawStyle("Heading3");C25.iC();C26.setCaption("Street");C26.setDisplayPosition(2);C26.setEllipses("WORD");C26.setHeight(20);C26.setLeft(404);C26.setParent(this);C26.setTabPosition(3);
C26.setTabStop(false);C26.setTop(20);C26.setVerticalAlignment("CENTER");C26.setWidth(198);C26.setDragStyle("AGGREGATED");C26.iC();C27.setCaption("City");C27.setDisplayPosition(3);C27.setEllipses("WORD");C27.setHeight(20);C27.setLeft(404);C27.setParent(this);C27.setTabPosition(2);C27.setTabStop(false);C27.setTop(40);C27.setVerticalAlignment("CENTER");C27.setWidth(198);C27.setDragStyle("AGGREGATED");C27.iC();C28.setCaption("State & PostCode");C28.setDisplayPosition(4);C28.setEllipses("WORD");C28.setHeight(20);
C28.setLeft(404);C28.setParent(this);C28.setTabPosition(1);C28.setTabStop(false);C28.setTop(60);C28.setVerticalAlignment("CENTER");C28.setWidth(198);C28.setDragStyle("AGGREGATED");C28.iC();C29.setCaption("Name");C29.setDisplayPosition(5);C29.setEllipses("WORD");C29.setLeft(86);C29.setParent(this);C29.setTabPosition(5);C29.setTabStop(false);C29.setTop(0);C29.setVerticalAlignment("CENTER");C29.setHeight(20);C29.setWidth(70);C29.setDragStyle("AGGREGATED");C29.setThemeDrawStyle("Heading3");C29.iC();C30.setCaption("Address");
C30.setDisplayPosition(6);C30.setEllipses("WORD");C30.setLeft(334);C30.setParent(this);C30.setTabPosition(6);C30.setTabStop(false);C30.setTop(20);C30.setVerticalAlignment("CENTER");C30.setHeight(20);C30.setWidth(70);C30.setDragStyle("AGGREGATED");C30.iC();C31.setCaption("Contact");C31.setDisplayPosition(7);C31.setEllipses("WORD");C31.setLeft(86);C31.setParent(this);C31.setTabPosition(7);C31.setTabStop(false);C31.setTop(20);C31.setVerticalAlignment("CENTER");C31.setHeight(20);C31.setWidth(70);C31.setDragStyle("AGGREGATED");
C31.iC();C32.setCaption("Work");C32.setDisplayPosition(8);C32.setEllipses("WORD");C32.setLeft(156);C32.setParent(this);C32.setTabPosition(8);C32.setTabStop(false);C32.setTop(20);C32.setVerticalAlignment("CENTER");C32.setHeight(20);C32.setDragStyle("AGGREGATED");C32.setWidth(43);C32.iC();C33.setCaption("Home");C33.setDisplayPosition(9);C33.setEllipses("WORD");C33.setLeft(156);C33.setParent(this);C33.setTabPosition(9);C33.setTabStop(false);C33.setTop(40);C33.setVerticalAlignment("CENTER");C33.setHeight(20);
C33.setDragStyle("AGGREGATED");C33.setWidth(43);C33.iC();C34.setCaption("Work Phone");C34.setDisplayPosition(10);C34.setEllipses("WORD");C34.setLeft(199);C34.setParent(this);C34.setTabPosition(10);C34.setTabStop(false);C34.setTop(20);C34.setVerticalAlignment("CENTER");C34.setHeight(20);C34.setDragStyle("AGGREGATED");C34.setWidth(135);C34.iC();C35.setCaption("Home Phone");C35.setDisplayPosition(11);C35.setEllipses("WORD");C35.setLeft(199);C35.setParent(this);C35.setTabPosition(11);C35.setTabStop(false);
C35.setTop(40);C35.setVerticalAlignment("CENTER");C35.setHeight(20);C35.setDragStyle("AGGREGATED");C35.setWidth(135);C35.iC();C36.setDisplayPosition(12);C36.setLeft(30);C36.setParent(this);C36.setTabPosition(12);C36.setTop(2);C36.setWidth(56);C36.setImageSizing("BESTFIT");C36.setStyle(C0);C36.iC();this.setHeight(80);this.setLayoutManager(C1);this.setWidth(602);}});cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",48);var P0=r.cPD("TREEITEM");P0=p0;r.ln=48;{r.ln=50;
this.srGEMPLOYEE(l.cast(P0.getRelatedReference(),"XDEMO_32"));r.ln=52;m.LFULLNAME.set(l.s.Substitute("&1 &2 (&3)",m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getSURNAME(),m.GEMPLOYEE.getID()));r.ln=54;m.LSTREET.set(m.GEMPLOYEE.getSTREET());r.ln=55;m.LCITY.set(m.GEMPLOYEE.getCITY());r.ln=56;m.LSTATEPOSTCODE.set(l.s.Substitute("&1, &2",m.GEMPLOYEE.getSTATE(),m.GEMPLOYEE.getPOSTCODE()));r.ln=57;m.LPHONEHOME.set(m.GEMPLOYEE.getPHONEHOME());r.ln=58;m.LPHONEWORK.set(m.GEMPLOYEE.getPHONEWORK());r.ln=60;m.EMPLOYEEIMAGE.setImage(m.GEMPLOYEE.getTHUMBNAIL());
}r.ln=62;r.e();};cO.srGEMPLOYEE=function(rn){this.sR("GEMPLOYEE",rn);};},{rc:["XDEMO_18"],rp:["PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG"],dc:["XDEMO_32"]});