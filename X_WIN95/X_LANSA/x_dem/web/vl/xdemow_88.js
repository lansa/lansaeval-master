﻿LANSA.addComponent({id:"XDEMOW_88",nm:"xDemoWebUploadProgress",ot:"wp",tp:"Web Page",de:"Upload progress",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries .......","LLL":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys","LLL":"of Entrys"}[cL],
h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list","LLL":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F3:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],
dv:"",ia:["FE","LC"]},F4:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F7:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]},F8:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F9:
{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],
h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F11:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],
dv:"",ia:["FE"]},F12:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],dv:"",ia:["FE","LC"]},F13:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],
h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F14:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],
h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F15:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],dv:"",ia:["FE"]},F16:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],
dv:0,ia:["FE","RB"]},F17:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],
h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F20:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Upload:{ps:{"File":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_88",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("LAYOUT1","PRIM_TBLO");var C2=this.cR("LAYOUTROW1","PRIM_TBLO","Row");
var C3=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("PROGRESSBAR","XDEMO_66");var C8=this.cR("FILEPICKER","PRIM_WEB","FilePicker");var C9=this.cR("SAVEDTO","PRIM_LABL");var C10=this.cR("TIMER","PRIM_TIMR");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();
C4.setAlignment("TOPCENTER");C4.setColumn(C3);C4.setManage(C7);C4.setParent(C1);C4.setRow(C2);C4.setSizing("FITTOWIDTH");C4.setMarginLeft(8);C4.setMarginRight(8);C4.setMarginTop(8);C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C3);C5.setManage(C8);C5.setParent(C1);C5.setRow(C2);C5.setSizing("FITTOWIDTH");C5.setMarginLeft(8);C5.setMarginRight(8);C5.setMarginTop(8);C5.setFlow("DOWN");C5.iC();C6.setColumn(C3);C6.setFlow("DOWN");C6.setManage(C9);C6.setParent(C1);C6.setRow(C2);C6.setSizing("FITTOWIDTH");
C6.setAlignment("TOPCENTER");C6.setMarginLeft(8);C6.setMarginRight(8);C6.iC();C7.setParent(this);C7.setWidth(969);C7.setHeight(60);C7.setThemeDrawStyle("Heading1");C7.setDisplayPosition(2);C7.setLeft(8);C7.setTop(8);C7.iC();C8.setCaption("Select a File To Upload");C8.setDisplayPosition(1);C8.setEllipses("WORD");C8.setHeight(60);C8.setLeft(8);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(8);C8.setVerticalAlignment("CENTER");C8.setWidth(969);C8.setAlignment("CENTER");C8.setThemeDrawStyle("Heading1");
C8.setStyle(C0);C8.iC();C9.setDisplayPosition(3);C9.setEllipses("WORD");C9.setHeight(60);C9.setLeft(8);C9.setParent(this);C9.setTabPosition(3);C9.setTabStop(false);C9.setTop(68);C9.setVerticalAlignment("CENTER");C9.setWidth(969);C9.setAlignment("CENTER");C9.setThemeDrawStyle("Heading3");C9.iC();C10.setStartup("MANUAL");C10.setInterval(4000);C10.iC();C8.aH("FILESELECTED",this,e1);C10.aH("TICK",this,e5);this.setHeight(489);this.setWidth(985);this.setTheme(l.THEME().get("2015BLUE"));this.setLayoutManager(C1);
var li=this.aL("XDEMOW_88");li.EMPLOYEES=l.cLT({"XEMPLOYID":f.F2,"XEMPTITLE":f.F3,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XEMPDOB":f.F6,"XGENDER":f.F7,"XSTREET":f.F8,"XCITY":f.F9,"XSTATE":f.F10,"XPOSTCODE":f.F11,"XCOUNTRY":f.F12,"XPHONEHME":f.F13,"XPHONEBUS":f.F14,"XPHONEMOB":f.F15,"XSALARY":f.F16,"XSTARTDTE":f.F17,"XTERMDATE":f.F18,"XDEPTMENT":f.F19,"XEMPTHM":f.F20},f.F1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#FilePicker.FileSelected",20);var P0=Ps.r("FILE");r.ln=20;{r.ln=22;cO.mthUPLOAD.call(this,P0);
}r.ln=24;r.e();};cO.mthUPLOAD=function(p0){var m=this.REF,r=l.mR(this,cO,"Upload",26),mth=r;var P0=r.cPD("FILE");P0=p0;var C0=r.cDR("FILEUPLOAD","XDEMOW_84","FILEUPLOAD");C0.iC();C0.aH("UPLOADING",this,e2);C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e4);r.ln=26;{r.ln=31;C0.mthEXECUTEASYNC({FLD:{"XDEMOBLOB":P0.getBlob(),"XDEMOUN_4":P0.getName()},sm:"M"},{FLD:{"XDEMOUN_5":m.SAVEDTO}});r.ln=33;m.PROGRESSBAR.setPERCENTAGE(0);r.ln=35;m.FILEPICKER.setCaption("Waiting");}r.ln=61;r.e();function e2(sender,Ps)
{var r=l.eR(this,cO,"#FileUpload.Uploading",37,mth);var P1=Ps.r("PROGRESS");r.ln=37;{r.ln=39;m.FILEPICKER.setCaption(l.s.Substitute("Uploading &1 (&2Kb)",P0.getName(),l.n.AsDisplayString(l.n.Round(l.div(P0.getFileSize(),1024)),0,0,"EDITCODE_J")));r.ln=41;m.PROGRESSBAR.setPERCENTAGE(P1.get());}r.ln=43;r.e();}function e3(sender,Ps){var r=l.eR(this,cO,"#FileUpload.Completed",45,mth);r.ln=45;{r.ln=47;m.FILEPICKER.setCaption("Complete - Uploaded to");r.ln=49;m.TIMER.mthSTART();}r.ln=51;r.e();}function e4(sender,Ps)
{var r=l.eR(this,cO,"#FileUpload.Failed",53,mth);var P2=Ps.r("REASON");var P3=Ps.r("HANDLED");r.ln=53;{r.ln=55;P3.set(true);r.ln=57;m.FILEPICKER.setCaption(P2.get());}r.ln=59;r.e();}};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Timer.Tick",63);r.ln=63;{r.ln=65;m.TIMER.mthSTOP();r.ln=67;m.FILEPICKER.setCaption("Select a File To Upload");}r.ln=69;r.e();};{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F3.pl=function(){this.aN.call(this);
var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);
C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F3.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F7.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");
C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F7.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XDEMO_66"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_WEB.FilePicker","PRIM_LABL","PRIM_TIMR","PRIM_WEB.DataRequest","PRIM_PKLT"]});