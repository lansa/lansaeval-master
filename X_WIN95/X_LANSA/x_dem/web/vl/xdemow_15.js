﻿LANSA.addComponent({id:"XDEMOW_15",nm:"xDemoWebMoreLess",ot:"wp",tp:"Web Page",de:"List with expandable items",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("ROW_3","PRIM_TBLO","Row");var C5=this.cR("ROW_4","PRIM_TBLO","Row");var C6=this.cR("ROW_5","PRIM_TBLO","Row");var C7=this.cR("COLUMN","PRIM_TBLO","Column");
var C8=this.cR("COLUMN_2","PRIM_TBLO","Column");var C9=this.cR("COLUMN_3","PRIM_TBLO","Column");var C10=this.cR("COLUMN_4","PRIM_TBLO","Column");var C11=this.cR("COLUMN_5","PRIM_TBLO","Column");var C12=this.cR("TREE","PRIM_TREE");var C13=this.cR("LAYOUTITEM","PRIM_TBLO","Item");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(4);
C5.setParent(C1);C5.iC();C6.setDisplayPosition(5);C6.setParent(C1);C6.iC();C7.setDisplayPosition(1);C7.setParent(C1);C7.iC();C8.setDisplayPosition(2);C8.setParent(C1);C8.iC();C9.setDisplayPosition(3);C9.setParent(C1);C9.iC();C10.setDisplayPosition(4);C10.setParent(C1);C10.iC();C11.setDisplayPosition(5);C11.setParent(C1);C11.iC();C12.setDisplayPosition(1);C12.setHeight(800);C12.setLeft(0);C12.setParent(this);C12.setTabPosition(1);C12.setTop(0);C12.setWidth(1200);C12.iC();C13.setColumn(C7);C13.setManage(C12);
C13.setParent(C1);C13.setRow(C2);C13.setColumnSpan(5);C13.setRowSpan(5);C13.iC();C0.aH("PREPARED",this,e1);C12.aDS("XDEMO_22");C12.aLF({});this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gData.Prepared",19);r.ln=19;{r.ln=21;{var l1=m.GDATA.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=23;m.TREE.addEntry();r.ln=25;m.TREE.getCurrentItem().setRelatedReference(EMPLOYEE);r.ln=26;m.TREE.getCurrentItem().setMarginTop(2);
r.ln=28;}l1.end();r.dR("EMPLOYEE");}}r.ln=30;r.e();};},{rc:["XDEMO_30","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TREE","PRIM_TBLO.Item"],dc:["XDEMO_22"]});