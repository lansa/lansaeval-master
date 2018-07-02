﻿LANSA.addComponent({id:"XTLMAIN",nm:"XTLMain",ot:"wp",tp:"Web Page",de:"Timeline",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDESTID",an:"xDestinationId",ft:"I",ln:4,dc:0,lb:{"ENG":"Identification","FRA":"Identification","JPN":" ID","LLL":"Identification"}[cL],h1:{"ENG":"Identification","FRA":"Identification","JPN":" ID","LLL":"Identification"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Destination Identification","FRA":"Identification de destination","JPN":"行き先 ID","LLL":"Destination Identification"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"XDESTNAME",an:"xDestinationName",ft:"N",ln:50,dc:0,lb:{"ENG":"Name","FRA":"Nom","JPN":"名称","LLL":"Name"}[cL],h1:{"ENG":"Name","FRA":"Nom","JPN":"名称","LLL":"Name"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Destination Name","FRA":"Nom de destination","JPN":"行き先名","LLL":"Destination Name"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XDESTDESC",an:"xDestinationDescription",ft:"N",ln:256,dc:0,lb:{"ENG":"Description","FRA":"Description","JPN":"記述","LLL":"Description"}[cL],h1:{"ENG":"Description","FRA":"Description","JPN":"記述","LLL":"Description"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Destination Description","FRA":"Description de destination","JPN":"行き先の記述","LLL":"Destination Description"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XDESTIMG",
an:"xDestinationImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Image","FRA":"Image","JPN":"イメージ","LLL":"Image"}[cL],h1:{"ENG":"Destination","FRA":"Image","JPN":"行き先","LLL":"Destination"}[cL],h2:{"ENG":"Image","FRA":"Destination","JPN":"イメージ","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Destination Image","FRA":"Image de destination","JPN":"行き先イメージ","LLL":"Destination Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F5:{nm:"STD_DATEX",ft:"D",ln:10,dc:0,lb:{"ENG":"Std RDMLX date","FRA":"?","JPN":"?","LLL":"Std RDMLX date"}[cL],
h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"RDMLX","FRA":"?","JPN":"?","LLL":"RDMLX"}[cL],h3:{"ENG":"Date","FRA":"?","JPN":"?","LLL":"Date"}[cL],de:{"ENG":"Standard RDMLX date","FRA":"?","JPN":"?","LLL":"Standard RDMLX date"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);var f=this.aF("XTLMAIN",Fd);var C0=this.cR("STYLETITLE","PRIM_VS","Style");var C1=this.cR("BRUSHTITLE","PRIM_VS","SolidBrush");var C2=this.cR("LAYOUT","PRIM_TBLO");
var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("TITLE","PRIM_LABL");var C12=this.cR("ICON","PRIM_MD","Label");var C13=this.cR("TIMELINE","PRIM_TREE");C0.setFontSize(24);
C0.setForegroundBrush(C1);C0.setFontUnits("PIXEL");C0.iC();C1.setColor("255:255:255");C1.setOpacity(95);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setWidth(4);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.iC();C5.setDisplayPosition(1);C5.setParent(C2);C5.setUnits("PIXELS");C5.setHeight(70);C5.iC();C6.setDisplayPosition(2);C6.setParent(C2);C6.setHeight(40);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(3);C7.setParent(C2);C7.iC();C8.setColumn(C3);C8.setManage(C13);C8.setParent(C2);
C8.setRow(C7);C8.setAlignment("TOPCENTER");C8.setColumnSpan(2);C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.iC();C9.setManage(C12);C9.setParent(C2);C9.setRow(C5);C9.setSizing("NONE");C9.setColumn(C3);C9.setAlignment("CENTERLEFT");C9.setMarginLeft(30);C9.iC();C10.setColumn(C3);C10.setManage(C11);C10.setParent(C2);C10.setRow(C5);C10.setColumnSpan(2);C10.setAlignment("CENTERLEFT");C10.iC();C11.setCaption("Timeline");C11.setDisplayPosition(2);C11.setEllipses("WORD");C11.setHeight(70);C11.setLeft(0);C11.setParent(this);
C11.setTabPosition(2);C11.setTabStop(false);C11.setTop(0);C11.setVerticalAlignment("CENTER");C11.setWidth(982);C11.setThemeDrawStyle("DarkTitle");C11.setStyle(C0);C11.setMarginLeft(80);C11.iC();C12.setDisplayPosition(1);C12.setIcon("access_time");C12.setLeft(30);C12.setParent(this);C12.setTabPosition(3);C12.setTop(15);C12.setIconHeight(40);C12.setHeight(40);C12.setWidth(40);C12.setStyle(C0);C12.iC();C13.setDisplayPosition(3);C13.setParent(this);C13.setTabPosition(1);C13.setHeight(1551);C13.setWidth(982);
C13.setLeft(0);C13.setTop(110);C13.iC();C13.aDS("XTLDSGN");C13.aLF({"XDESTID":f.F1,"XDESTNAME":f.F2,"XDESTDESC":f.F3,"XDESTIMG":f.F4,"STD_DATEX":f.F5});this.setWidth(1000);this.setLayoutManager(C2);this.setTheme(l.THEME().get("MATERIALDESIGNLIGHTGREEN"));this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",27);var C0=r.cDR("LOADDESTINATIONS","XTLSERVER","LOADDESTINATIONS");C0.iC();r.ln=27;{r.ln=30;C0.mthEXECUTEASYNC({},{LIST:{"XDESTINATIONLIST":m.TIMELINE}});
}r.ln=32;r.e();};},{rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_MD.Label","PRIM_TREE","PRIM_WEB.DataRequest"],dc:["XTLDSGN"]});