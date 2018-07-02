﻿LANSA.addComponent({id:"XDEMOWEBB",nm:"xDemoWebBackForward",ot:"wp",tp:"Web Page",de:"Forward Back and Deep Linking",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],
h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F6:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"A description is required for department","FRA":"A description is required for department","JPN":"A description is required for department","LLL":"A description is required for department"}[cL]}]},F7:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries .......","LLL":"Entries ......."}[cL],
h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys","LLL":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list","LLL":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F8:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],
de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F10:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",
ia:["FE","LC"]},F11:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F12:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F13:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
dv:"",ia:["FE","LC"]},F14:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F15:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]},F16:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F17:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F18:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],
dv:"",ia:["FE"]},F19:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],dv:0,ia:["FE","RB"]},F20:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F21:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],
h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F22:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],
h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},Activate:{ps:{"EmployeeNumber":{pt:"i"}}},PositionTo:{ps:{"EmployeeNumber":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOWEBB",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");
var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN","PRIM_TBLO","Column");var C4=this.cR("COLUMN_2","PRIM_TBLO","Column");var C5=this.cR("COLUMNDIVIDER","PRIM_TBLO","ColumnDivider");var C6=this.cR("LIST","PRIM_LIST");var C7=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C8=this.cR("COLUMNIMAGE","PRIM_LIST","Image");var C9=this.cR("COLUMNEMPNO","PRIM_LIST","String");var C10=this.cR("COLUMNSURNAME","PRIM_LIST","String");var C11=this.cR("COLUMNGIVENAME","PRIM_LIST","String");
var C12=this.cR("EMPLOYEEDETAILS","XDEMOW_8");var C13=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderTop(0);C0.iC();C1.setDividerStyle("GAP");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(2);C5.setParent(C1);C5.setWidth(4);C5.iC();C6.setDisplayPosition(1);C6.setHeight(800);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);
C6.setTop(0);C6.setWidth(598);C6.setColumnLines(false);C6.setRowLines(false);C6.setRowHeight(38);C6.setStyle(C0);C6.iC();C7.setColumn(C3);C7.setManage(C6);C7.setParent(C1);C7.setRow(C2);C7.iC();C8.setColumnWidth(50);C8.setDisplayPosition(1);C8.setParent(C6);C8.setImageSizing("BESTFIT");C8.setCellMarginTop(2);C8.setCellMarginBottom(2);C8.setSource(f.F2);C8.iC();C9.setDisplayPosition(2);C9.setParent(C6);C9.setSource(f.F1);C9.setColumnWidth(50);C9.setColumnCaption("Emp#");C9.setColumnCaptionType("CAPTION");
C9.iC();C10.setDisplayPosition(4);C10.setParent(C6);C10.setSource(f.F3);C10.setColumnUnits("PROPORTION");C10.setColumnWidth(1);C10.iC();C11.setDisplayPosition(3);C11.setParent(C6);C11.setSource(f.F4);C11.setColumnWidth(1);C11.setColumnUnits("PROPORTION");C11.iC();C12.setDisplayPosition(2);C12.setHeight(800);C12.setLeft(602);C12.setParent(this);C12.setTabPosition(2);C12.setTabStop(false);C12.setWidth(598);C12.setOpacity(50);C12.setEnabled(false);C12.iC();C13.setColumn(C4);C13.setManage(C12);C13.setParent(C1);
C13.setRow(C2);C13.setAlignment("TOPCENTER");C13.iC();l.WEB().aH("URLCHANGED",this,e3);C6.aH("ITEMCLICK",this,e4);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOWEBB");li.DEPARTMENTS=l.cLT({"XDEPTMENT":f.F5,"XDEPTDESC":f.F6},null);li.EMPLOYEES=l.cLT({"XEMPLOYID":f.F1,"XEMPTITLE":f.F8,"XSURNAME":f.F3,"XGIVENAME":f.F4,"XEMPDOB":f.F9,"XGENDER":f.F10,"XSTREET":f.F11,"XCITY":f.F12,"XSTATE":f.F13,"XPOSTCODE":f.F14,"XCOUNTRY":f.F15,"XPHONEHME":f.F16,"XPHONEBUS":f.F17,"XPHONEMOB":f.F18,"XSALARY":f.F19,"XSTARTDTE":f.F20,"XTERMDATE":f.F21,"XDEPTMENT":f.F5,"XEMPTHM":f.F2},f.F7);
}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",29);r.ln=29;{r.ln=31;this.mthLOAD();}r.ln=33;r.e();};cO.mthLOAD=function(){var li=this.LIST.XDEMOWEBB,m=this.REF,r=l.mR(this,cO,"Load",35),mth=r;var C0=r.cDR("GETDATA","XDEMOW_84","GETDATA");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=35;{r.ln=40;C0.mthEXECUTE({},{LIST:{"DEPARTMENTS":li.DEPARTMENTS,"EMPLOYEES":li.EMPLOYEES}});}r.ln=53;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetData.Completed",43,mth);r.ln=43;{r.ln=45;
{var l1=li.EMPLOYEES.selectList();while(l1.step()){r.ln=47;m.LIST.addEntry();r.ln=49;}l1.end();}}r.ln=51;r.e();}};cO.mthACTIVATE=function(p0){var f=this.FLD.XDEMOWEBB,m=this.REF,r=l.mR(this,cO,"Activate",55);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);r.ln=55;{r.ln=59;if(l.s.ne(P0.get(),"")){r.ln=62;cO.mthPOSITIONTO.call(this,P0.get());r.ln=65;m.EMPLOYEEDETAILS.mthSHOWEMPLOYEE(f.F1.get());r.ln=67;m.EMPLOYEEDETAILS.setOpacity(100);r.ln=68;m.EMPLOYEEDETAILS.setEnabled(true);}}r.ln=72;r.e();};
cO.mthPOSITIONTO=function(p0){var f=this.FLD.XDEMOWEBB,m=this.REF,r=l.mR(this,cO,"PositionTo",74);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);r.ln=74;{r.ln=78;if((m.LIST.getFocusItem()!=null)){r.ln=80;f.F22.set(lIO=m.LIST.getEntry(m.LIST.getFocusItem().getEntry()));}r.ln=85;if(l.s.ne(f.F1.get(),P0.get())){r.ln=87;{var l1=m.LIST.selectList();while(l1.step()){r.ln=89;if(l.s.ne(f.F1.get(),P0.get())){continue;}r.ln=91;m.LIST.getCurrentItem().setFocus(true);r.ln=93;break;r.ln=95;}l1.end();}}}r.ln=99;
r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#sys_web.URLChanged",101);r.ln=101;{r.ln=104;if((l.WEB().getURLParameters().get("EMPLOYEE")!=null)){r.ln=106;cO.mthACTIVATE.call(this,l.WEB().getURLParameters().get("EMPLOYEE").getValue());}else{r.ln=110;cO.mthACTIVATE.call(this,"");}}r.ln=114;r.e();};function e4(sender,Ps){var f=this.FLD.XDEMOWEBB,r=l.eR(this,cO,"#List.ItemClick",116);r.ln=116;{r.ln=119;l.WEB().getHistory().mthADD(l.s.Substitute("Employee=&1",f.F1.get()));}r.ln=121;r.e();};function rl1(F6)
{return (l.s.ne(F6.get(),""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F8.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);
C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F8.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F10.pl=function(){this.aN.call(this);
var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F10.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XDEMOW_8","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.ColumnDivider","PRIM_LIST","PRIM_TBLO.Item","PRIM_LIST.Image","PRIM_LIST.String","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT"]
});