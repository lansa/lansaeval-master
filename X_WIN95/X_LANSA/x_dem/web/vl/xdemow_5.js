﻿LANSA.addComponent({id:"XDEMOW_5",nm:"xDemoWebListInputGivename",ot:"rp",tp:"Reusable Part",de:"Givename",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],
h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_LIST.IListCellDesign"],fd:Fd,mt:{AutoComplete:{ps:{"Value":{pt:"io"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOW_5",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cF("XEMPLOYEEGIVENNAMES",Fd.F1.VISUALEDIT);var C3=this.cR("TABLELAYOUT","PRIM_TBLO");
var C4=this.cR("ROW","PRIM_TBLO","Row");var C5=this.cR("COLUMN","PRIM_TBLO","Column");var C6=this.cR("ITEM","PRIM_TBLO","Item");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.setBackgroundBrush(C1);C0.iC();C1.setColor("TRANSPARENT");C1.iC();C2.setDisplayPosition(1);C2.setParent(this);C2.setTabPosition(1);C2.setHeight(30);C2.setWidth(500);C2.setMarginLeft(0);C2.setEditStyle(C0);C2.aD();C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);
C5.setParent(C3);C5.iC();C6.setColumn(C5);C6.setManage(C2);C6.setParent(C3);C6.setRow(C4);C6.iC();C2.aH("AUTOCOMPLETING",this,e1);this.setDisplayPosition(1);this.setHeight(30);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C3);this.setTabStop(false);this.aLF({"XGIVENAME":C2});}});function e1(sender,Ps){var r=l.eR(this,cO,"#xEmployeeGivenNames.AutoCompleting",16);var P0=Ps.r("VALUE");r.ln=16;{r.ln=18;cO.mthAUTOCOMPLETE.call(this,P0);}r.ln=20;r.e();};
cO.mthAUTOCOMPLETE=function(p0){var r=l.mR(this,cO,"AutoComplete",22);var P0=r.cPF("VALUE",Fd.F1.Dc);P0.set(p0.get());var C0=r.cDR("AUTOCOMPLETE","XDEMOW_84","COMPLETEGIVENAME");C0.iC();r.ln=22;{r.ln=27;C0.mthEXECUTE({FLD:{"AUTOCOMPLETEGIVENAME":P0.get()}},{FLD:{"AUTOCOMPLETEGIVENAME":P0}});p0.set(P0.get());}r.ln=29;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_EVEF","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_FLD","PRIM_WEB.DataRequest"]});