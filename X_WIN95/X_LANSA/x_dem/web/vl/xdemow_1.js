﻿LANSA.addComponent({id:"XDEMOW_1",nm:"xDemoWebListInputDepartment",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Department Cell",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"A description is required for department","FRA":"A description is required for department","JPN":"A description is required for department","LLL":"A description is required for department"}[cL]}]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_LIST.IListCellDesign"],
fd:Fd,mt:{OnAdd:{ps:{"ListItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_1",Fd);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN_2","PRIM_TBLO","Column");var C4=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C5=this.cR("LISTCELL","PRIM_VS","Style");var C6=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C7=this.cR("DROPDOWN","PRIM_LIST","DropDown");var C8=this.cR("COLUMNDEPTDESC","PRIM_LIST","String");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setColumn(C3);C4.setManage(C7);C4.setParent(C1);C4.setRow(C2);C4.iC();C5.setBorderTop(0);C5.setBorderBottom(0);C5.setBorderLeft(0);C5.setBorderRight(0);C5.setBackgroundBrush(C6);C5.iC();C6.setColor("TRANSPARENT");C6.iC();C7.setDisplayPosition(1);C7.setHeight(25);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(1);C7.setTop(0);C7.setWidth(201);C7.setStyle(C5);
C7.setColumnLines(false);C7.setRowLines(false);C7.setColumnHeaderHeight(0);C7.setThemeDrawStyle("MenuItem");C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.setSource(f.F1);C8.setColumnUnits("PROPORTION");C8.iC();this.setDisplayPosition(1);this.setHeight(25);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(201);this.setLayoutManager(C1);}});cO.mthONADD=function(p0){var f=this.FLD.XDEMOW_1,m=this.REF,r=l.mR(this,cO,"OnAdd",17);var P0=r.cPD("LISTITEM");P0=r.sR("LISTITEM",p0);
r.ln=17;{r.ln=19;{var l1=m.GDATA.ref.getDEPARTMENTS().cI();while(l1.step()){var DEPARTMENT=r.sR("DEPARTMENT",l1.item());r.ln=21;f.F1.set(DEPARTMENT.getDESCRIPTION());r.ln=22;m.DROPDOWN.addEntry();r.ln=24;m.DROPDOWN.getCurrentItem().setRelatedReference(DEPARTMENT);r.ln=26;}l1.end();r.dR("DEPARTMENT");}}r.ln=28;r.e();};function rl1(F1){return (l.s.ne(F1.get(),""));};},{rc:["XDEMO_30"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_FLD"]
});