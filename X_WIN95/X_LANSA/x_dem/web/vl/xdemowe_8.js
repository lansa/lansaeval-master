﻿LANSA.addComponent({id:"XDEMOWE_8",nm:"xDemoWebTree",ot:"wp",tp:"Web Page",de:"List Control (Prim_List) as a Tree",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagedep.png");var rc2=l.cB("ximageemp.png");var Fd={F1:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"XDEMOUN_1",an:"xDemoUnicode128_2",ft:"N",ln:128,
dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["ASQN","LC"]},F3:{nm:"XDEMOUN_2",an:"xDemoUnicode128_3",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:l.SqlNull,ia:["ASQN","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{AddDepartments:{},AddEmployees:{ps:{"Department":{pt:"i"},"ParentItem":{pt:"i"}}},AddEntry:{ps:{"Column1":{pt:"i"},"Column2":{pt:"i"},"Column3":{pt:"i"},"Image":{pt:"i"},"ParentItem":{pt:"i"}}}},co:function()
{cO.aN.call(this);var f=this.aF("XDEMOWE_8",Fd);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN","PRIM_TBLO","Column");var C4=this.cR("LIST","PRIM_LIST");var C5=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C6=this.cR("GCOLUMN1","PRIM_LIST","String");var C7=this.cR("GCOLUMN2","PRIM_LIST","String");var C8=this.cR("GCOLUMN3","PRIM_LIST","String");var C9=this.cR("UTILITIES","XDEMO_17");if((C0!=null)&&(C0.iI()==false))
{C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setDisplayPosition(1);C4.setHeight(800);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(1);C4.setTop(0);C4.setWidth(1200);C4.setSelectionStyle("ALL");C4.setRowHeight(22);C4.setRowLines(false);C4.setColumnLines(false);C4.setCheckBoxes(true);C4.iC();C5.setColumn(C3);C5.setManage(C4);C5.setParent(C1);C5.setRow(C2);C5.iC();C6.setDisplayPosition(1);C6.setParent(C4);C6.setSource(f.F1);
C6.setColumnWidth(175);C6.setColumnCaptionType("CAPTION");C6.iC();C7.setDisplayPosition(2);C7.setParent(C4);C7.setSource(f.F2);C7.setColumnWidth(215);C7.setColumnCaptionType("CAPTION");C7.setColumnReadOnly(false);C7.iC();C8.setDisplayPosition(3);C8.setParent(C4);C8.setSource(f.F3);C8.setColumnWidth(363);C8.setColumnCaptionType("CAPTION");C8.setColumnReadOnly(false);C8.iC();C9.iC();C0.aH("PREPARED",this,e1);C4.aH("ITEMCHANGED",this,e2);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});
function e1(sender,Ps){var r=l.eR(this,cO,"#gData.Prepared",17);r.ln=17;{r.ln=19;this.mthADDDEPARTMENTS();}r.ln=21;r.e();};cO.mthADDDEPARTMENTS=function(){var m=this.REF,r=l.mR(this,cO,"AddDepartments",23);r.ln=23;{r.ln=25;{var l1=m.GDATA.ref.getDEPARTMENTS().cI();while(l1.step()){var DEPARTMENT=r.sR("DEPARTMENT",l1.item());r.ln=27;cO.mthADDENTRY.call(this,DEPARTMENT.getID(),DEPARTMENT.getDESCRIPTION(),"",rc1);r.ln=29;cO.mthADDEMPLOYEES.call(this,DEPARTMENT,m.LIST.getCurrentItem());r.ln=31;}l1.end();
r.dR("DEPARTMENT");}}r.ln=33;r.e();};cO.mthADDEMPLOYEES=function(p0,p1){var r=l.mR(this,cO,"AddEmployees",35);var P0=r.cPD("DEPARTMENT");var P1=r.cPD("PARENTITEM");P0=p0;P1=p1;r.ln=35;{r.ln=39;{var l1=P0.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=41;cO.mthADDENTRY.call(this,EMPLOYEE.getID(),EMPLOYEE.getGIVENNAME(),EMPLOYEE.getSURNAME(),rc2,P1);r.ln=43;}l1.end();r.dR("EMPLOYEE");}}r.ln=45;r.e();};cO.mthADDENTRY=function(p0,p1,p2,p3,p4){var f=this.FLD.XDEMOWE_8,m=this.REF,r=l.mR(this,cO,"AddEntry",47);
var P0=r.cP("COLUMN1","PRIM_STR");var P1=r.cP("COLUMN2","PRIM_STR");var P2=r.cP("COLUMN3","PRIM_STR");var P3=r.cPD("IMAGE");var P4=r.cPD("PARENTITEM");var P5=r.cPD("RESULT");P0.set(p0);P1.set((p1===u)?(""):(p1));P2.set((p2===u)?(""):(p2));P3=(p3===u)?(null):(p3);P4=(p4===u)?(null):(p4);P5=null;r.ln=47;{r.ln=55;f.F1.set(P0.get());r.ln=56;f.F2.set(P1.get());r.ln=57;f.F3.set(P2.get());r.ln=59;m.LIST.addEntry();r.ln=61;m.LIST.getCurrentItem().setParentItem(P4);r.ln=63;m.LIST.getCurrentItem().setImage(P3);
r.ln=65;P5=r.sR("P5",m.LIST.getCurrentItem());}r.ln=67;return r.rR(P5);};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemChanged",69);r.ln=69;{r.ln=71;m.UTILITIES.mthUPDATECHECKBOXESLIST(m.LIST.getCurrentItem());}r.ln=73;r.e();};},{rc:["XDEMO_30","XDEMO_17","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LIST","PRIM_TBLO.Item","PRIM_LIST.String"]});