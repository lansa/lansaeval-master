﻿LANSA.addComponent({id:"XDEMOW_83",nm:"xDemoWebCSV",ot:"wp",tp:"Web Page",de:"Download a CSV",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.81");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F6:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]},F7:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F8:
{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],
dv:"",ia:["FE"]},F11:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},isItemSelected:{},Download:{}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_83",Fd);
var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LIST","PRIM_LIST");var C8=this.cR("COLUMNXEMPLOYID1","PRIM_LIST","String");var C9=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C10=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");
var C11=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C12=this.cR("COLUMNXEMPDOB1","PRIM_LIST","DateTime");var C13=this.cR("COLUMNXGENDER1","PRIM_LIST","String");var C14=this.cR("COLUMNXSTREET1","PRIM_LIST","String");var C15=this.cR("COLUMNXCITY1","PRIM_LIST","String");var C16=this.cR("COLUMNXSTATE1","PRIM_LIST","String");var C17=this.cR("COLUMNXPOSTCODE1","PRIM_LIST","String");var C18=this.cR("COLUMNXCOUNTRY1","PRIM_LIST","String");var C19=this.cR("DOWNLOAD","PRIM_PHBN");var C20=this.cR("LABEL1","PRIM_LABL");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(69);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setColumn(C1);C4.setManage(C7);C4.setParent(C0);C4.setRow(C3);C4.iC();C5.setColumn(C1);C5.setManage(C20);C5.setParent(C0);C5.setRow(C2);C5.iC();C6.setAlignment("CENTERRIGHT");C6.setColumn(C1);C6.setManage(C19);C6.setParent(C0);C6.setRow(C2);C6.setSizing("NONE");C6.setMarginRight(8);C6.iC();
C7.setDisplayPosition(1);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(1);C7.setTop(69);C7.setHeight(651);C7.setWidth(1032);C7.setSelectionStyle("ALL");C7.setColumnLines(false);C7.setRowLines(false);C7.iC();C8.setColumnWidth(100);C8.setDisplayPosition(1);C8.setParent(C7);C8.setSource(f.F1);C8.iC();C9.setColumnWidth(94);C9.setDisplayPosition(2);C9.setParent(C7);C9.setSource(f.F2);C9.iC();C10.setColumnWidth(198);C10.setDisplayPosition(3);C10.setParent(C7);C10.setSource(f.F3);C10.iC();C11.setColumnWidth(200);
C11.setDisplayPosition(4);C11.setParent(C7);C11.setSource(f.F4);C11.iC();C12.setColumnWidth(98);C12.setDisplayPosition(5);C12.setParent(C7);C12.setShowTime(false);C12.setSource(f.F5);C12.iC();C13.setColumnWidth(88);C13.setDisplayPosition(6);C13.setParent(C7);C13.setSource(f.F6);C13.iC();C14.setColumnWidth(302);C14.setDisplayPosition(7);C14.setParent(C7);C14.setSource(f.F7);C14.iC();C15.setColumnWidth(182);C15.setDisplayPosition(8);C15.setParent(C7);C15.setSource(f.F8);C15.iC();C16.setColumnWidth(160);
C16.setDisplayPosition(9);C16.setParent(C7);C16.setSource(f.F9);C16.iC();C17.setColumnWidth(91);C17.setDisplayPosition(10);C17.setParent(C7);C17.setSource(f.F10);C17.iC();C18.setColumnWidth(186);C18.setDisplayPosition(11);C18.setParent(C7);C18.setSource(f.F11);C18.iC();C19.setCaption("Download");C19.setDisplayPosition(2);C19.setLeft(856);C19.setParent(this);C19.setTabPosition(2);C19.setTop(6);C19.setWidth(168);C19.setHeight(56);C19.setWordWrap(true);C19.setThemeDrawStyle("Heading1");C19.setEnabled(false);
C19.iC();C20.setDisplayPosition(3);C20.setEllipses("WORD");C20.setHeight(69);C20.setLeft(0);C20.setParent(this);C20.setTabPosition(3);C20.setTabStop(false);C20.setTop(0);C20.setVerticalAlignment("CENTER");C20.setWidth(1032);C20.setThemeDrawStyle("Title+DarkTitle");C20.setMarginLeft(8);C20.setCaption("Select items to download as CSV");C20.iC();C7.aH("CHANGED",this,e3);C19.aH("CLICK",this,e2);this.setHeight(720);this.setWidth(1032);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015GREEN"));
this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOW_83");li.EMPLOYEESCSV=l.cLT({"XEMPLOYID":f.F1,"XEMPTITLE":f.F2,"XSURNAME":f.F3,"XGIVENAME":f.F4,"XEMPDOB":f.F5,"XGENDER":f.F6,"XSTREET":f.F7,"XCITY":f.F8,"XSTATE":f.F9,"XPOSTCODE":f.F10,"XCOUNTRY":f.F11},null);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",27);r.ln=27;{r.ln=29;this.mthLOAD();}r.ln=31;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Download.Click",33);r.ln=33;{r.ln=35;this.mthDOWNLOAD();}r.ln=37;
r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.Changed",39);r.ln=39;{r.ln=41;m.DOWNLOAD.setEnabled(cO.mthISITEMSELECTED.call(this));}r.ln=43;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",45);var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETEMPLOYEES");C0.iC();r.ln=45;{r.ln=49;C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEES":m.LIST}});}r.ln=51;r.e();};cO.mthISITEMSELECTED=function(){var m=this.REF,r=l.mR(this,cO,"isItemSelected",53);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=53;
{r.ln=56;{var l1=m.LIST.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=58;P0.set(ITEM.getSelected());r.ln=59;if(l.tB(P0.get())){break;}r.ln=61;}l1.end();r.dR("ITEM");}}r.ln=63;return r.rV(P0.get());};cO.mthDOWNLOAD=function(){var li=this.LIST.XDEMOW_83,m=this.REF,r=l.mR(this,cO,"Download",65);var C0=r.cRR("DOWNLOADCSV","XDEMOW_84","DOWNLOADCSV");C0.iC();r.ln=65;{r.ln=69;li.EMPLOYEESCSV.clearList();r.ln=71;{var l1=m.LIST.selectList();while(l1.step()){r.ln=73;if(l.not(m.LIST.getCurrentItem().getSelected()))
{continue;}r.ln=75;li.EMPLOYEESCSV.addEntry();r.ln=77;}l1.end();}r.ln=79;C0.mthEXECUTE({LIST:{"EMPLOYEESCSV":li.EMPLOYEESCSV}},{});}r.ln=81;r.e();};{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");
C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F6.pl=function()
{this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F6.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.DateTime","PRIM_PHBN","PRIM_LABL","PRIM_WEB.DataRequest","PRIM_WEB.ResourceRequest","PRIM_PKLT"]
});