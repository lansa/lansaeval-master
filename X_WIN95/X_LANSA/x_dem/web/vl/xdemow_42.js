﻿LANSA.addComponent({id:"XDEMOW_42",nm:"xDemoWebTreeOnDemand",ot:"wp",tp:"Web Page",de:"Tree Loading On Demand",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cRc("Loading.gif");var Fd={F1:{nm:"XDEMOUN_4",an:"xDemoUnicode256",ft:"N",ln:256,dc:0,lb:"Unicode 256",h1:"Unicode",h2:"256",h3:"",de:"Unicode 256",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],
h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F3:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F4:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries .......","LLL":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys","LLL":"of Entrys"}[cL],
h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list","LLL":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F5:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XGIVENAME",an:"xEmployeeGivenNames",
ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],
h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F9:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]},F10:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],
dv:"",ia:["FE","LC"]},F11:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F12:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F13:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],
dv:"",ia:["FE"]},F14:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]},F15:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],
h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F16:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],
h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F17:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],dv:"",ia:["FE"]},F18:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],
dv:0,ia:["FE","RB"]},F19:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F20:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F21:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F22:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],
h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"A description is required for department","FRA":"A description is required for department","JPN":"A description is required for department","LLL":"A description is required for department"}[cL]
}]},F23:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,
mt:{AddDepartments:{},AddEmployees:{ps:{"ParentItem":{pt:"i"}}},AddEntry:{ps:{"Caption":{pt:"i"},"Parentitem":{pt:"i"},"Department":{pt:"i"},"EmployeeID":{pt:"i"}}},ItemLoading:{ps:{"LoadingItem":{pt:"i"}}},ItemLoadingComplete:{ps:{"LoadingItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_42",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");
var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LIST","PRIM_LIST");var C8=this.cR("COLUMNXDEMOAL_11","PRIM_LIST","String");var C9=this.cR("COLUMNDEPTMENT1","PRIM_LIST","String");var C10=this.cR("COLUMNEMPNO1","PRIM_LIST","String");var C11=this.cR("LOADIMAGE","PRIM_IMAG");var C12=this.cR("LOADINGITEMS","PRIM_DCOL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(250);C1.setUnits("PIXELS");
C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setWidth(250);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.iC();C5.setColumn(C2);C5.setManage(C7);C5.setParent(C0);C5.setRow(C4);C5.iC();C6.setColumn(C2);C6.setManage(C11);C6.setParent(C0);C6.setRow(C4);C6.setSizing("NONE");C6.iC();C7.setDisplayPosition(2);C7.setHeight(800);C7.setLeft(250);C7.setParent(this);C7.setTabPosition(1);C7.setTop(0);C7.setWidth(700);C7.setColumnLines(false);
C7.setRowLines(false);C7.setRowHeight(22);C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.setSource(f.F1);C8.setColumnWidth(233);C8.setColumnUnits("PROPORTION");C8.setColumnCaption("Personnel Details");C8.setColumnCaptionType("CAPTION");C8.iC();C9.setDisplayPosition(2);C9.setParent(C7);C9.setSource(f.F2);C9.setColumnVisible(false);C9.iC();C10.setDisplayPosition(3);C10.setParent(C7);C10.setSource(f.F3);C10.setColumnVisible(false);C10.iC();C11.setDisplayPosition(1);C11.setLeft(525);C11.setParent(this);
C11.setTabPosition(2);C11.setTabStop(false);C11.setTop(325);C11.setHeight(150);C11.setWidth(150);C11.setImageSizing("BESTFIT");C11.iC();C12.setCollects("PRIM_STR");C12.setKeyedBy("PRIM_LIST.ListItem");C12.iC();C7.aH("ITEMEXPANDING",this,e4);this.setLayoutManager(C0);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("INITIALIZE",this,e1);var li=this.aL("XDEMOW_42");li.EMPLOYEES=l.cLT({"XEMPLOYID":f.F3,"XEMPTITLE":f.F5,"XSURNAME":f.F6,"XGIVENAME":f.F7,"XEMPDOB":f.F8,"XGENDER":f.F9,"XSTREET":f.F10,"XCITY":f.F11,"XSTATE":f.F12,"XPOSTCODE":f.F13,"XCOUNTRY":f.F14,"XPHONEHME":f.F15,"XPHONEBUS":f.F16,"XPHONEMOB":f.F17,"XSALARY":f.F18,"XSTARTDTE":f.F19,"XTERMDATE":f.F20,"XDEPTMENT":f.F2,"XEMPTHM":f.F21},f.F4);
li.DEPARTMENTS=l.cLT({"XDEPTMENT":f.F2,"XDEPTDESC":f.F22},null);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",23);r.ln=23;{r.ln=25;m.LOADIMAGE.setFileName(rc1.get());r.ln=26;this.mthADDDEPARTMENTS();}r.ln=28;r.e();};cO.mthADDDEPARTMENTS=function(){var li=this.LIST.XDEMOW_42,f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"AddDepartments",30),mth=r;var C0=r.cDR("GETDEPARTMENTS","XDEMOW_84","GETDEPARTMENTS");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=30;{r.ln=34;C0.mthEXECUTEASYNC({},{LIST:{"DEPARTMENTS":li.DEPARTMENTS}});
}r.ln=48;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetDepartments.Completed",36,mth);r.ln=36;{r.ln=38;{var l1=li.DEPARTMENTS.selectList();while(l1.step()){r.ln=40;cO.mthADDENTRY.call(this,f.F22.get(),null,f.F2.get());r.ln=42;}l1.end();}r.ln=44;m.LOADIMAGE.setVisible(false);}r.ln=46;r.e();}};cO.mthADDEMPLOYEES=function(p0){var li=this.LIST.XDEMOW_42,f=this.FLD.XDEMOW_42,r=l.mR(this,cO,"AddEmployees",50),mth=r;var P0=r.cPD("PARENTITEM");P0=p0;var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETDEPTEMPLOYEES");
C0.iC();C0.aH("COMPLETED",this,e3);r.ln=50;{r.ln=55;cO.mthITEMLOADING.call(this,P0);r.ln=57;C0.mthEXECUTEASYNC({FLD:{"XDEPTMENT":f.F2.get()}},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=71;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed",59,mth);r.ln=59;{r.ln=61;{var l1=li.EMPLOYEES.selectList();while(l1.step()){r.ln=63;cO.mthADDENTRY.call(this,l.s.Substitute("&1 &2",f.F7.get(),f.F6.get()),P0,f.F2.get(),f.F3.get());r.ln=65;}l1.end();}r.ln=67;cO.mthITEMLOADINGCOMPLETE.call(this,P0);
}r.ln=69;r.e();}};cO.mthADDENTRY=function(p0,p1,p2,p3){var f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"AddEntry",73);var P0=r.cP("CAPTION","PRIM_STR");var P1=r.cPD("PARENTITEM");var P2=r.cP("DEPARTMENT","PRIM_STR");var P3=r.cP("EMPLOYEEID","PRIM_STR");var P4=r.cPD("RESULT");P0.set(p0);P1=p1;P2.set((p2===u)?(""):(p2));P3.set((p3===u)?(""):(p3));r.ln=73;{r.ln=80;f.F1.set(P0.get());r.ln=81;f.F2.set(P2.get());r.ln=82;f.F3.set(P3.get());r.ln=84;m.LIST.addEntry();r.ln=86;P4=r.sR("P4",m.LIST.getCurrentItem());
r.ln=88;m.LIST.getCurrentItem().setParentItem(P1);r.ln=90;if(l.n.lt(m.LIST.getCurrentItem().getLevel(),2)){r.ln=92;m.LIST.getCurrentItem().setHasChildren("UNKNOWN");}}r.ln=96;return r.rR(P4);};function e4(sender,Ps){var r=l.eR(this,cO,"#List.ItemExpanding",98);var P0=Ps.r("ITEM");r.ln=98;{r.ln=100;if(l.and(l.n.eq(P0.getLevel(),1),l.s.ne(P0.getHasChildren(),"YES"))){r.ln=102;cO.mthADDEMPLOYEES.call(this,P0);}}r.ln=106;r.e();};cO.mthITEMLOADING=function(p0){var f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"ItemLoading",108);
var P0=r.cPD("LOADINGITEM");P0=p0;r.ln=108;{r.ln=111;f.F23.set(lIO=m.LIST.getEntry(P0.getEntry()));r.ln=114;m.LOADINGITEMS.mthINSERT(l.cC("PRIM_STR"),P0);r.ln=115;m.LOADINGITEMS.get(P0).set(f.F1.get());r.ln=117;f.F1.set("Loading...");r.ln=118;m.LIST.updateEntry();r.ln=120;P0.setThemeDrawStyle("EMPHASIS");}r.ln=122;r.e();};cO.mthITEMLOADINGCOMPLETE=function(p0){var f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"ItemLoadingComplete",124);var P0=r.cPD("LOADINGITEM");P0=p0;r.ln=124;{r.ln=127;f.F23.set(lIO=m.LIST.getEntry(P0.getEntry()));
r.ln=130;f.F1.set(m.LOADINGITEMS.get(P0).get());r.ln=131;m.LIST.updateEntry();r.ln=133;m.LOADINGITEMS.mthREMOVE(P0);r.ln=135;P0.setThemeDrawStyle("");}r.ln=137;r.e();};function rl1(F22){return (l.s.ne(F22.get(),""));};{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F5.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");
var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F5.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);
};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F9.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F9.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});
}},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_IMAG","PRIM_DCOL","PRIM_WEB.DataRequest","PRIM_PKLT"]});