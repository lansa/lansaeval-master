﻿LANSA.addComponent({id:"XAAVIEW01",nm:"xAccAssessorEditAssessment",ot:"wv",tp:"View",de:"Edit Assessment",tl:14020004},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XAAFLD21",an:"xAccAssessorAssesmentNumber",ft:"N",ln:24,dc:0,lb:"Acciedent Asses",h1:"Acciedent",h2:"Assessment",h3:"Claim",de:"Acciedent Assessment Claim Number",dv:"",ia:["FE","RB"]},F2:{nm:"XAAFLD22",an:"xAccAssessorDriverSurname",ft:"N",ln:25,dc:0,lb:"Driver Surname",
h1:"Driver",h2:"Surname",h3:"",de:"Driver Surname",dv:"",ia:["FE"]},F3:{nm:"XAAFLD23",an:"xAccAssessorDriverGivenName",ft:"N",ln:25,dc:0,lb:"Driver Given Na",h1:"Driver",h2:"Given",h3:"Name",de:"Driver Given Name",dv:"",ia:["FE"]},F4:{nm:"XAAFLD25",an:"xAccAssessorVehicleMakeModel",ft:"N",ln:128,dc:0,lb:"Vehicle Make/Mo",h1:"Vehicle",h2:"Make/Model",h3:"",de:"Vehicle Make/Model",dv:"",ia:["FE"]},F5:{nm:"XAAFLD24",an:"xAccAssessorVehicleReg",ft:"N",ln:10,dc:0,lb:"Vehicle Registr",h1:"Vehicle",h2:"Registration",
h3:"",de:"Vehicle Registration",dv:"",ia:["FE"]},F6:{nm:"XAAFLD35",an:"xAccAssessorVehicleVIN",ft:"N",ln:17,dc:0,lb:"Vehicle Identif",h1:"Vehicle",h2:"Identification",h3:"Number",de:"Vehicle Identification Number",dv:"",ia:["FE","LC"]},F7:{nm:"XAAFLD26",an:"xAccAssessorAccidentDateTime",ft:"DT",ln:26,dc:0,lb:"Accident DateTi",h1:"Accident",h2:"DateTime",h3:"",de:"Accident DateTime",dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F8:{nm:"XAAFLD36",an:"xAccAssessorCoordinates",ft:"N",ln:48,dc:0,lb:"Accident Coordi",
h1:"Accident",h2:"Coordinates",h3:"",de:"Accident Coordinates",dv:"",ia:["FE","LC"]},F9:{nm:"XAAFLD20",an:"xAccAssessorAccidentNotes",ft:"VC",ln:8192,dc:0,lb:"Assessor Accide",h1:"Assessor",h2:"Accident",h3:"Notes",de:"Assessor Accident Notes",dv:"",ia:["FE","LC"]},F10:{nm:"XAAFLD30",an:"xAccAssessorAccidentLatitude",ft:"P",ln:12,dc:9,lb:"Accident Latitu",h1:"Accident",h2:"Latitude",h3:"",de:"Accident Latitude",dv:0,ia:["FE","RB"]},F11:{nm:"XAAFLD29",an:"xAccAssessorAccidentLongitude",ft:"P",ln:12,
dc:9,lb:"Accident Longit",h1:"Accident",h2:"Longitude",h3:"",de:"Accident Longitude",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,pt:{Latitude:{da:"rw"},Longitude:{da:"rw"}},mt:{GetItem:{},AddAnotherImage:{},ImageComplete:{},CanBeSubmited:{}},co:function(){cO.aN.call(this);this.aF("XAAVIEW01",Fd);var C0=this.cR("VIEWLAYOUT","PRIM_TBLO");var C1=this.cR("VIEWLAYOUT1ROW","PRIM_TBLO","Row");var C2=this.cR("VIEWLAYOUT1COLUMN","PRIM_TBLO","Column");var C3=this.cR("VIEWLAYOUTITEM2","PRIM_TBLO","Item");
var C4=this.cR("VIEWLAYOUTITEM3","PRIM_TBLO","Item");var C5=this.cR("VIEWLAYOUTITEM4","PRIM_TBLO","Item");var C6=this.cR("VIEWLAYOUTITEM6","PRIM_TBLO","Item");var C7=this.cR("VIEWLAYOUTITEM7","PRIM_TBLO","Item");var C8=this.cR("VIEWLAYOUTITEM8","PRIM_TBLO","Item");var C9=this.cR("VIEWLAYOUTITEM10","PRIM_TBLO","Item");var C10=this.cR("VIEWLAYOUTITEM11","PRIM_TBLO","Item");var C11=this.cR("VIEWLAYOUTITEM12","PRIM_TBLO","Item");var C12=this.cR("VIEWLAYOUTITEM13","PRIM_TBLO","Item");var C13=this.cR("VIEWLAYOUTITEM1","PRIM_TBLO","Item");
var C14=this.cR("VIEWLAYOUTITEM5","PRIM_TBLO","Item");var C15=this.cR("VIEWLAYOUTITEM14","PRIM_TBLO","Item");var C16=this.cR("VIEWLAYOUTITEM15","PRIM_TBLO","Item");var C17=this.cR("VIEWLAYOUTITEM16","PRIM_TBLO","Item");var C18=this.cR("VIEWLAYOUTITEM9","PRIM_TBLO","Item");var C19=this.cR("VIEWLAYOUTITEM17","PRIM_TBLO","Item");var C20=this.cR("VIEWLAYOUTITEM18","PRIM_TBLO","Item");var C21=this.cR("VIEWLAYOUTITEM19","PRIM_TBLO","Item");var C22=this.cR("LAYOUT1","PRIM_TBLO");var C23=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");
var C24=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C25=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C26=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C27=this.cR("LAYOUT2","PRIM_TBLO");var C28=this.cR("LAYOUT2ROW1","PRIM_TBLO","Row");var C29=this.cR("LAYOUT2COLUMN1","PRIM_TBLO","Column");var C30=this.cR("LAYOUT2ITEM1","PRIM_TBLO","Item");var C31=this.cR("LAYOUT2ITEM2","PRIM_TBLO","Item");var C32=this.cR("LAYOUT2ITEM3","PRIM_TBLO","Item");var C33=this.cR("LAYOUT2ITEM4","PRIM_TBLO","Item");
var C34=this.cR("LAYOUT2ITEM5","PRIM_TBLO","Item");var C35=this.cR("LAYOUT2ITEM6","PRIM_TBLO","Item");var C36=this.cR("LAYOUT2ITEM7","PRIM_TBLO","Item");var C37=this.cR("LAYOUT2ITEM8","PRIM_TBLO","Item");var C38=this.cR("LAYOUT2ITEM9","PRIM_TBLO","Item");var C39=this.cR("LAYOUT2ITEM10","PRIM_TBLO","Item");var C40=this.cR("LAYOUT2ITEM11","PRIM_TBLO","Item");var C41=this.cR("LAYOUT2ITEM12","PRIM_TBLO","Item");var C42=this.cR("LAYOUT2ITEM13","PRIM_TBLO","Item");var C43=this.cR("LAYOUT2ITEM14","PRIM_TBLO","Item");
var C44=this.cR("LAYOUT2ITEM15","PRIM_TBLO","Item");var C45=this.cR("MAINPANEL","PRIM_PANL");var C46=this.cF("ASSESMENTNUMBER",Fd.F1.EDITFIELD);var C47=this.cF("DRIVERSURNAME",Fd.F2.EDITFIELD);var C48=this.cF("DRIVERGIVENNAME",Fd.F3.EDITFIELD);var C49=this.cF("VEHICLEMAKEMODEL",Fd.F4.EDITFIELD);var C50=this.cF("VEHICLEREG",Fd.F5.EDITFIELD);var C51=this.cF("VEHICLEVIN",Fd.F6.EDITFIELD);var C52=this.cF("ACCIDENTDATETIME",Fd.F7.DATEFIELD);var C53=this.cF("COORDINATES",Fd.F8.EDITFIELD);var C54=this.cR("AUDIONOTES","PRIM_MD","Edit");
var C55=this.cF("ACCIDENTNOTES",Fd.F9.EDITFIELD);var C56=this.cR("CAMERAPROMPT","PRIM_MD","Edit");var C57=this.cR("CAMERAPROMPT2","PRIM_MD","Edit");var C58=this.cR("CAMERAPROMPT3","PRIM_MD","Edit");var C59=this.cR("CAMERAPROMPT4","PRIM_MD","Edit");var C60=this.cR("ADDANOTHERIMAGE","PRIM_MD","Icon");var C61=this.cR("LABELADDIMAGE","PRIM_MD","Label");var C62=this.cR("ADDIMAGE","PRIM_PANL");var C63=this.cR("BUTTONSUBMIT","PRIM_MD","ActionButton");var C64=this.cA("DATA","XAAOBJ01");var C65=this.cA("APPLICATIONCONTROL","XAAOBJ02");
var C66=this.cA("APPLICATIONSETTINGS","XAAOBJ08");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPLEFT");C3.setColumn(C2);C3.setManage(C52);C3.setParent(C0);C3.setRow(C1);C3.setSizing("FITTOWIDTH");C3.setFlow("DOWN");C3.setMarginLeft(4);C3.setMarginRight(4);C3.setMarginTop(4);C3.iC();C4.setAlignment("TOPLEFT");C4.setColumn(C2);C4.setManage(C50);C4.setParent(C0);C4.setRow(C1);C4.setSizing("FITTOWIDTH");C4.setFlow("DOWN");
C4.setMarginLeft(4);C4.setMarginRight(4);C4.setMarginTop(4);C4.iC();C5.setAlignment("TOPLEFT");C5.setColumn(C2);C5.setManage(C49);C5.setParent(C0);C5.setRow(C1);C5.setSizing("FITTOWIDTH");C5.setFlow("DOWN");C5.setMarginLeft(4);C5.setMarginRight(4);C5.setMarginTop(4);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C2);C6.setManage(C48);C6.setParent(C0);C6.setRow(C1);C6.setSizing("FITTOWIDTH");C6.setFlow("DOWN");C6.setMarginLeft(4);C6.setMarginRight(4);C6.setMarginTop(4);C6.iC();C7.setAlignment("TOPLEFT");
C7.setColumn(C2);C7.setManage(C47);C7.setParent(C0);C7.setRow(C1);C7.setSizing("FITTOWIDTH");C7.setFlow("DOWN");C7.setMarginLeft(4);C7.setMarginRight(4);C7.setMarginTop(4);C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C2);C8.setManage(C46);C8.setParent(C0);C8.setRow(C1);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.setMarginLeft(4);C8.setMarginRight(4);C8.setMarginTop(4);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C2);C9.setManage(C54);C9.setParent(C0);C9.setRow(C1);C9.setSizing("FITTOWIDTH");
C9.setFlow("DOWN");C9.setMarginLeft(4);C9.setMarginRight(4);C9.setMarginTop(4);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C2);C10.setManage(C55);C10.setParent(C0);C10.setRow(C1);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setFlow("DOWN");C10.setMarginLeft(4);C10.setMarginRight(4);C10.setMarginTop(4);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C2);C11.setManage(C51);C11.setParent(C0);C11.setRow(C1);C11.setSizing("FITTOWIDTH");C11.setFlow("DOWN");C11.setMarginLeft(4);C11.setMarginRight(4);
C11.setMarginTop(4);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C2);C12.setManage(C53);C12.setParent(C0);C12.setRow(C1);C12.setSizing("FITTOWIDTH");C12.setFlow("DOWN");C12.setMarginLeft(4);C12.setMarginRight(4);C12.setMarginTop(4);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C2);C13.setManage(C56);C13.setParent(C0);C13.setRow(C1);C13.setSizing("FITTOWIDTH");C13.setFlow("DOWN");C13.setMarginLeft(4);C13.setMarginRight(4);C13.setMarginTop(4);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C2);
C14.setManage(C57);C14.setParent(C0);C14.setRow(C1);C14.setSizing("FITTOWIDTH");C14.setFlow("DOWN");C14.setMarginLeft(4);C14.setMarginRight(4);C14.setMarginTop(4);C14.iC();C15.setColumn(C2);C15.setFlow("DOWN");C15.setManage(C58);C15.setParent(C0);C15.setRow(C1);C15.setSizing("FITTOWIDTH");C15.setAlignment("TOPLEFT");C15.setMarginLeft(4);C15.setMarginRight(4);C15.setMarginTop(4);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C2);C16.setManage(C59);C16.setParent(C0);C16.setRow(C1);C16.setSizing("FITTOWIDTH");
C16.setFlow("DOWN");C16.setMarginLeft(4);C16.setMarginRight(4);C16.setMarginTop(4);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C2);C17.setParent(C0);C17.setRow(C1);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginLeft(4);C17.setMarginRight(4);C17.setMarginTop(4);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C2);C18.setManage(C60);C18.setParent(C0);C18.setRow(C1);C18.setSizing("FITTOWIDTH");C18.setFlow("DOWN");C18.setMarginLeft(4);C18.setMarginRight(4);C18.setMarginTop(4);C18.iC();
C19.setAlignment("TOPLEFT");C19.setColumn(C2);C19.setManage(C62);C19.setParent(C0);C19.setRow(C1);C19.setSizing("FITTOWIDTH");C19.setFlow("DOWN");C19.setMarginLeft(4);C19.setMarginRight(4);C19.setMarginTop(4);C19.iC();C20.setAlignment("TOPRIGHT");C20.setColumn(C2);C20.setManage(C63);C20.setParent(C0);C20.setRow(C1);C20.setSizing("NONE");C20.setMarginRight(18);C20.setMarginTop(18);C20.iC();C21.setColumn(C2);C21.setManage(C45);C21.setParent(C0);C21.setRow(C1);C21.setAlignment("TOPLEFT");C21.iC();C22.iC();
C23.setParent(C22);C23.setDisplayPosition(1);C23.iC();C24.setParent(C22);C24.setDisplayPosition(1);C24.iC();C25.setAlignment("CENTERRIGHT");C25.setColumn(C24);C25.setManage(C60);C25.setParent(C22);C25.setRow(C23);C25.setSizing("NONE");C25.setFlow("LEFT");C25.setMarginRight(4);C25.iC();C26.setAlignment("CENTERRIGHT");C26.setColumn(C24);C26.setManage(C61);C26.setParent(C22);C26.setRow(C23);C26.setSizing("FITTOWIDTH");C26.setFlow("LEFT");C26.setMarginLeft(46);C26.iC();C27.iC();C28.setDisplayPosition(1);
C28.setParent(C27);C28.iC();C29.setDisplayPosition(1);C29.setParent(C27);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C29);C30.setManage(C55);C30.setParent(C27);C30.setRow(C28);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");C30.setFlow("DOWN");C30.setMarginLeft(4);C30.setMarginRight(12);C30.setMarginTop(4);C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C29);C31.setManage(C54);C31.setParent(C27);C31.setRow(C28);C31.setSizing("FITTOWIDTH");C31.setFlow("DOWN");C31.setMarginLeft(4);C31.setMarginRight(12);
C31.setMarginTop(4);C31.iC();C32.setAlignment("TOPLEFT");C32.setColumn(C29);C32.setManage(C62);C32.setParent(C27);C32.setRow(C28);C32.setSizing("FITTOWIDTH");C32.setFlow("DOWN");C32.setMarginLeft(4);C32.setMarginRight(12);C32.setMarginTop(4);C32.iC();C33.setAlignment("TOPLEFT");C33.setColumn(C29);C33.setManage(C59);C33.setParent(C27);C33.setRow(C28);C33.setSizing("FITTOWIDTH");C33.setFlow("DOWN");C33.setMarginLeft(4);C33.setMarginRight(12);C33.setMarginTop(4);C33.iC();C34.setAlignment("TOPLEFT");
C34.setColumn(C29);C34.setManage(C58);C34.setParent(C27);C34.setRow(C28);C34.setSizing("FITTOWIDTH");C34.setFlow("DOWN");C34.setMarginLeft(4);C34.setMarginRight(12);C34.setMarginTop(4);C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C29);C35.setManage(C57);C35.setParent(C27);C35.setRow(C28);C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.setMarginLeft(4);C35.setMarginRight(12);C35.setMarginTop(4);C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C29);C36.setManage(C56);C36.setParent(C27);
C36.setRow(C28);C36.setSizing("FITTOWIDTH");C36.setFlow("DOWN");C36.setMarginLeft(4);C36.setMarginRight(12);C36.setMarginTop(4);C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C29);C37.setManage(C53);C37.setParent(C27);C37.setRow(C28);C37.setSizing("FITTOWIDTH");C37.setFlow("DOWN");C37.setMarginLeft(4);C37.setMarginRight(12);C37.setMarginTop(4);C37.iC();C38.setAlignment("TOPLEFT");C38.setColumn(C29);C38.setManage(C52);C38.setParent(C27);C38.setRow(C28);C38.setSizing("FITTOWIDTH");C38.setFlow("DOWN");
C38.setMarginLeft(4);C38.setMarginRight(12);C38.setMarginTop(4);C38.iC();C39.setAlignment("TOPLEFT");C39.setColumn(C29);C39.setManage(C51);C39.setParent(C27);C39.setRow(C28);C39.setSizing("FITTOWIDTH");C39.setFlow("DOWN");C39.setMarginLeft(4);C39.setMarginRight(12);C39.setMarginTop(4);C39.iC();C40.setAlignment("TOPLEFT");C40.setColumn(C29);C40.setManage(C50);C40.setParent(C27);C40.setRow(C28);C40.setSizing("FITTOWIDTH");C40.setFlow("DOWN");C40.setMarginLeft(4);C40.setMarginRight(12);C40.setMarginTop(4);
C40.iC();C41.setAlignment("TOPLEFT");C41.setColumn(C29);C41.setManage(C49);C41.setParent(C27);C41.setRow(C28);C41.setSizing("FITTOWIDTH");C41.setFlow("DOWN");C41.setMarginLeft(4);C41.setMarginRight(12);C41.setMarginTop(4);C41.iC();C42.setAlignment("TOPLEFT");C42.setColumn(C29);C42.setManage(C48);C42.setParent(C27);C42.setRow(C28);C42.setSizing("FITTOWIDTH");C42.setFlow("DOWN");C42.setMarginLeft(4);C42.setMarginRight(12);C42.setMarginTop(4);C42.iC();C43.setAlignment("TOPLEFT");C43.setColumn(C29);C43.setManage(C47);
C43.setParent(C27);C43.setRow(C28);C43.setSizing("FITTOWIDTH");C43.setFlow("DOWN");C43.setMarginLeft(4);C43.setMarginRight(12);C43.setMarginTop(4);C43.iC();C44.setAlignment("TOPLEFT");C44.setColumn(C29);C44.setManage(C46);C44.setParent(C27);C44.setRow(C28);C44.setSizing("FITTOWIDTH");C44.setFlow("DOWN");C44.setMarginLeft(4);C44.setMarginRight(12);C44.setMarginTop(4);C44.iC();C45.setParent(this);C45.setDisplayPosition(2);C45.setTabPosition(2);C45.setHeight(489);C45.setLeft(0);C45.setTop(0);C45.setWidth(604);
C45.setLayoutManager(C27);C45.setVerticalScroll(true);C45.iC();C46.setCaptionType("DESCRIPTION");C46.setDisplayPosition(1);C46.setLeft(4);C46.setParent(C45);C46.setTabPosition(3);C46.setTop(4);C46.setHelperPosition("NONE");C46.setHeight(48);C46.setWidth(570);C46.setReadOnly(true);C46.setAppearance("NONE");C46.aD();C46.iC();C47.setCaptionType("DESCRIPTION");C47.setDisplayPosition(2);C47.setLeft(4);C47.setParent(C45);C47.setTabPosition(8);C47.setTop(56);C47.setHelperPosition("NONE");C47.setHeight(48);
C47.setWidth(570);C47.setReadOnly(true);C47.setAppearance("NONE");C47.aD();C47.iC();C48.setCaptionType("DESCRIPTION");C48.setDisplayPosition(3);C48.setLeft(4);C48.setParent(C45);C48.setTabPosition(9);C48.setTop(108);C48.setHelperPosition("NONE");C48.setHeight(48);C48.setWidth(570);C48.setReadOnly(true);C48.setAppearance("NONE");C48.aD();C48.iC();C49.setCaptionType("DESCRIPTION");C49.setDisplayPosition(4);C49.setLeft(4);C49.setParent(C45);C49.setTabPosition(10);C49.setTop(160);C49.setHelperPosition("NONE");
C49.setHeight(48);C49.setWidth(570);C49.setReadOnly(true);C49.setAppearance("NONE");C49.aD();C49.iC();C50.setCaptionType("DESCRIPTION");C50.setDisplayPosition(6);C50.setLeft(4);C50.setParent(C45);C50.setTabPosition(11);C50.setTop(264);C50.setHelperPosition("NONE");C50.setHeight(48);C50.setWidth(570);C50.setReadOnly(true);C50.setAppearance("NONE");C50.aD();C50.iC();C51.setParent(C45);C51.setDisplayPosition(5);C51.setTabPosition(15);C51.setHelperPosition("NONE");C51.setHeight(48);C51.setLeft(4);C51.setTop(212);
C51.setWidth(570);C51.setCaption("Vehicle Idenitifaction Number");C51.setAppearance("NONE");C51.setReadOnly(true);C51.aD();C51.iC();C52.setCaptionType("DESCRIPTION");C52.setDisplayPosition(7);C52.setLeft(4);C52.setParent(C45);C52.setTabPosition(12);C52.setTop(316);C52.setHelperPosition("NONE");C52.setHeight(48);C52.setWidth(570);C52.setShowTime(true);C52.setReadOnly(true);C52.setAppearance("NONE");C52.aD();C52.iC();C53.setDisplayPosition(8);C53.setParent(C45);C53.setTabPosition(14);C53.setLeft(4);
C53.setTop(368);C53.setWidth(570);C53.setCaption("Accident Location");C53.setHeight(48);C53.setPromptIcon("fa-map-marker");C53.setPromptIconColor("252:77:1");C53.setPromptIconHeight(36);C53.setIconImageSizing("NONE");C53.setIconHeight(36);C53.setHelperPosition("NONE");C53.setCaptionType("LABEL");C53.setCaptionPosition("NONE");C53.setPromptOnly(true);C53.aD();C53.iC();C54.setCaption("Audio Notes");C54.setDisplayPosition(14);C54.setLeft(4);C54.setParent(C45);C54.setTabPosition(7);C54.setTop(668);C54.setHelperPosition("NONE");
C54.setHeight(48);C54.setWidth(570);C54.setPromptIcon("fa-microphone");C54.setPromptIconImageSizing("NONE");C54.setPromptIconColor("THEME600");C54.setPromptIconHeight(36);C54.setPlaceholder("Add Audio Notes");C54.setCaptionPosition("NONE");C54.setIconHeight(36);C54.setPromptOnly(true);C54.iC();C55.setCaptionType("DESCRIPTION");C55.setDisplayPosition(15);C55.setLeft(4);C55.setParent(C45);C55.setTabPosition(13);C55.setTop(720);C55.setWidth(570);C55.setHelperPosition("NONE");C55.setMultiLine(true);C55.setHeight(60);
C55.aD();C55.iC();C56.setDisplayPosition(9);C56.setLeft(4);C56.setParent(C45);C56.setTabPosition(5);C56.setTop(420);C56.setHeight(48);C56.setWidth(570);C56.setHelperPosition("NONE");C56.setCaption("Add Image of Damage");C56.setPromptOnly(true);C56.setIconColor("THEME600");C56.setPromptIcon("photo_camera");C56.setPromptIconColor("THEME600");C56.setCaptionPosition("NONE");C56.setPlaceholder("Add Image of Damage");C56.setPromptIconHeight(36);C56.iC();C57.setDisplayPosition(10);C57.setLeft(4);C57.setParent(C45);
C57.setTabPosition(6);C57.setTop(472);C57.setHeight(48);C57.setWidth(570);C57.setHelperPosition("NONE");C57.setCaption("Damage Image");C57.setPromptOnly(true);C57.setIconColor("THEME600");C57.setPromptIcon("photo_camera");C57.setPromptIconColor("THEME600");C57.setVisible(false);C57.setPromptIconImageSizing("BESTFIT");C57.setCaptionPosition("NONE");C57.setPlaceholder("Add Image of Damage");C57.setPromptIconHeight(36);C57.iC();C58.setDisplayPosition(11);C58.setLeft(4);C58.setParent(C45);C58.setTabPosition(4);
C58.setTop(524);C58.setHeight(48);C58.setWidth(570);C58.setHelperPosition("NONE");C58.setCaption("Damage Image");C58.setPromptOnly(true);C58.setIconColor("THEME600");C58.setPromptIcon("photo_camera");C58.setPromptIconColor("THEME600");C58.setVisible(false);C58.setPromptIconImageSizing("BESTFIT");C58.setCaptionPosition("NONE");C58.setPlaceholder("Add Image of Damage");C58.setPromptIconHeight(36);C58.iC();C59.setDisplayPosition(12);C59.setLeft(4);C59.setParent(C45);C59.setTabPosition(2);C59.setTop(576);
C59.setHeight(48);C59.setWidth(570);C59.setHelperPosition("NONE");C59.setCaption("Damage Image");C59.setPromptOnly(true);C59.setIconColor("THEME600");C59.setPromptIcon("photo_camera");C59.setPromptIconColor("THEME600");C59.setVisible(false);C59.setPromptIconImageSizing("BESTFIT");C59.setCaptionPosition("NONE");C59.setPlaceholder("Add Image of Damage");C59.setPromptIconHeight(36);C59.iC();C60.setDisplayPosition(1);C60.setIcon("add_circle");C60.setLeft(530);C60.setParent(C62);C60.setTabPosition(1);
C60.setTop(0);C60.setWidth(36);C60.setHeight(36);C60.setThemeDrawStyle("ForegroundMediumPrimary");C60.setIconHeight(28);C60.iC();C61.setParent(C62);C61.setDisplayPosition(2);C61.setTabPosition(2);C61.setTop(6);C61.setWidth(524);C61.setCaption("Add Another Image");C61.setCaptionAlignment("CENTERRIGHT");C61.setHeight(24);C61.setLeft(6);C61.iC();C62.setParent(C45);C62.setDisplayPosition(13);C62.setTabPosition(1);C62.setLeft(4);C62.setTop(628);C62.setHeight(36);C62.setWidth(570);C62.setLayoutManager(C22);
C62.setVisible(false);C62.iC();C63.setDisplayPosition(1);C63.setIcon("fa-upload");C63.setLeft(506);C63.setParent(this);C63.setTabPosition(1);C63.setThemeDrawStyle("MediumSuccess");C63.setTop(18);C63.setVisible(false);C63.setHeight(80);C63.setWidth(80);C63.iC();if((C64!=null)&&(C64.iI()==false)){C64.iC();}if((C65!=null)&&(C65.iI()==false)){C65.iC();}if((C66!=null)&&(C66.iI()==false)){C66.iC();}C53.aH("PROMPTING",this,e1);C54.aH("PROMPTING",this,e7);C55.aH("CHANGED",this,e10);C56.aH("PROMPTING",this,e2);
C57.aH("PROMPTING",this,e3);C58.aH("PROMPTING",this,e4);C59.aH("PROMPTING",this,e5);C60.aH("CLICK",this,e9);C63.aH("CLICK",this,e11);C65.aH("CAMERACOMPLETE",this,e6);C65.aH("RECORDCOMPLETE",this,e8);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C0);this.setHeight(489);this.setWidth(604);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#coordinates.Prompting",89);r.ln=89;{r.ln=91;m.APPLICATIONCONTROL.ref.mthSHOWMAP(this.getLATITUDE(),this.getLONGITUDE());}r.ln=93;
r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CameraPrompt.Prompting",96);r.ln=96;{r.ln=98;m.APPLICATIONCONTROL.ref.mthSHOWCAMERA(1);}r.ln=100;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CameraPrompt2.Prompting",103);r.ln=103;{r.ln=105;m.APPLICATIONCONTROL.ref.mthSHOWCAMERA(2);}r.ln=107;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CameraPrompt3.Prompting",110);r.ln=110;{r.ln=112;m.APPLICATIONCONTROL.ref.mthSHOWCAMERA(3);}r.ln=114;r.e();};function e5(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#CameraPrompt4.Prompting",117);r.ln=117;{r.ln=119;m.APPLICATIONCONTROL.ref.mthSHOWCAMERA(4);}r.ln=121;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#ApplicationControl.CameraComplete",124);r.ln=124;{r.ln=126;this.mthIMAGECOMPLETE();}r.ln=128;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AudioNotes.Prompting",131);r.ln=131;{r.ln=133;m.APPLICATIONCONTROL.ref.mthRECORDINGANDPLAYBACK();}r.ln=136;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ApplicationControl.RecordComplete",139);
r.ln=139;{r.ln=141;m.AUDIONOTES.setValue(m.DATA.ref.getCURRENTASSESSMENT().getFILENAMEAUDIO());r.ln=143;this.mthCANBESUBMITED();}r.ln=145;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#AddAnotherImage.Click",148);r.ln=148;{r.ln=150;this.mthADDANOTHERIMAGE();}r.ln=152;r.e();};function e10(sender,Ps){var r=l.eR(this,cO,"#AccidentNotes.Changed",155);r.ln=155;{r.ln=157;this.mthCANBESUBMITED();}r.ln=159;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonSubmit.Click",162);r.ln=162;
{r.ln=164;m.APPLICATIONCONTROL.ref.mthSUBMIT();}r.ln=166;r.e();};cO.mthGETITEM=function(){var m=this.REF,r=l.mR(this,cO,"GetItem",172);r.ln=172;{r.ln=174;m.ASSESMENTNUMBER.set(m.DATA.ref.getCURRENTASSESSMENT().getASSESSMENTNUMBER());r.ln=176;m.DRIVERSURNAME.set(m.DATA.ref.getCURRENTASSESSMENT().getDRIVERSURNAME());r.ln=178;m.DRIVERGIVENNAME.set(m.DATA.ref.getCURRENTASSESSMENT().getDRIVERGIVENNAME());r.ln=180;m.VEHICLEMAKEMODEL.set(m.DATA.ref.getCURRENTASSESSMENT().getVEHICLEMAKEMODEL());r.ln=182;
m.VEHICLEREG.set(m.DATA.ref.getCURRENTASSESSMENT().getVEHICLEREG());r.ln=184;m.VEHICLEVIN.set(m.DATA.ref.getCURRENTASSESSMENT().getVEHICLEVIN());r.ln=186;m.ACCIDENTDATETIME.set(m.DATA.ref.getCURRENTASSESSMENT().getACCIDENTDATETIME());r.ln=188;m.COORDINATES.set(m.DATA.ref.getCURRENTASSESSMENT().getACCIDENTCORDINATES());r.ln=190;this.setLATITUDE(m.DATA.ref.getCURRENTASSESSMENT().getACCIDENTLATITUDE());r.ln=192;this.setLONGITUDE(m.DATA.ref.getCURRENTASSESSMENT().getACCIDENTLONGITUDE());}r.ln=194;r.e();
};cO.mthADDANOTHERIMAGE=function(){var m=this.REF,r=l.mR(this,cO,"AddAnotherImage",200);r.ln=200;{r.ln=202;m.CAMERAPROMPT2.setVisible(l.s.ne(m.CAMERAPROMPT.getValue(),""));r.ln=204;m.CAMERAPROMPT3.setVisible(l.s.ne(m.CAMERAPROMPT2.getValue(),""));r.ln=206;m.CAMERAPROMPT4.setVisible(l.s.ne(m.CAMERAPROMPT3.getValue(),""));r.ln=208;m.ADDIMAGE.setVisible(l.s.eq(m.CAMERAPROMPT3.getValue(),""));}r.ln=210;r.e();};cO.mthIMAGECOMPLETE=function(){var m=this.REF,r=l.mR(this,cO,"ImageComplete",213);r.ln=213;
{r.ln=215;{var l1=m.DATA.ref.getASSESSMENTIMAGES().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=217;{var v1=ITEM.getIMAGENUMBER();if(r.ln=219,l.n.eq(v1,1)){r.ln=222;m.CAMERAPROMPT.set(ITEM.getFILENAMEIMAGE());r.ln=224;m.ADDIMAGE.setVisible(true);}else if(r.ln=226,l.n.eq(v1,2)){r.ln=228;m.CAMERAPROMPT2.set(ITEM.getFILENAMEIMAGE());}else if(r.ln=230,l.n.eq(v1,3)){r.ln=232;m.CAMERAPROMPT3.set(ITEM.getFILENAMEIMAGE());}else if(r.ln=234,l.n.eq(v1,4)){r.ln=236;m.CAMERAPROMPT4.set(ITEM.getFILENAMEIMAGE());
r.ln=239;m.ADDIMAGE.setVisible(false);}r.ln=241;}r.ln=243;}l1.end();r.dR("ITEM");}r.ln=245;this.mthCANBESUBMITED();}r.ln=247;r.e();};cO.mthCANBESUBMITED=function(){var m=this.REF,r=l.mR(this,cO,"CanBeSubmited",250);r.ln=250;{r.ln=252;m.DATA.ref.getCURRENTASSESSMENT().setACCIDENTNOTES(m.ACCIDENTNOTES.get());r.ln=254;m.BUTTONSUBMIT.setVisible(l.and(l.and(l.s.ne(m.ACCIDENTNOTES.get(),""),l.s.ne(m.AUDIONOTES.get(),"")),l.s.ne(m.CAMERAPROMPT.get(),"")));}r.ln=256;r.e();};cO.getLATITUDE=function(){var f=this.FLD.XAAVIEW01;
return f.F10.get();};cO.setLATITUDE=function(v){var f=this.FLD.XAAVIEW01;f.F10.set(v);};cO.getLONGITUDE=function(){var f=this.FLD.XAAVIEW01;return f.F11.get();};cO.setLONGITUDE=function(v){var f=this.FLD.XAAVIEW01;f.F11.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XAAFLD21"});Fd.F1.EDITFIELD=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD21",cn:"EditField"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);
};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XAAFLD22"});Fd.F2.EDITFIELD=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD22",cn:"EditField"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XAAFLD23"});Fd.F3.EDITFIELD=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD23",cn:"EditField"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XAAFLD25"});
Fd.F4.EDITFIELD=function(){this.aN.call(this,new Fd.F4.Dc());};l.cFC({co:Fd.F4.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD25",cn:"EditField"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XAAFLD24"});Fd.F5.EDITFIELD=function(){this.aN.call(this,new Fd.F5.Dc());};l.cFC({co:Fd.F5.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD24",cn:"EditField"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XAAFLD35"});Fd.F6.EDITFIELD=function()
{this.aN.call(this,new Fd.F6.Dc());};l.cFC({co:Fd.F6.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD35",cn:"EditField"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XAAFLD26"});Fd.F7.DATEFIELD=function(){this.aN.call(this,new Fd.F7.Dc());};l.cFC({co:Fd.F7.DATEFIELD,an:"PRIM_MD",at:"DateTimeField",fn:"XAAFLD26",cn:"DateField"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XAAFLD36"});Fd.F8.EDITFIELD=function(){this.aN.call(this,new Fd.F8.Dc());
};l.cFC({co:Fd.F8.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD36",cn:"EditField"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XAAFLD20"});Fd.F9.EDITFIELD=function(){this.aN.call(this,new Fd.F9.Dc());};l.cFC({co:Fd.F9.EDITFIELD,an:"PRIM_MD",at:"EditField",fn:"XAAFLD20",cn:"EditField"});}},{rc:["XAAOBJ01","XAAOBJ02","XAAOBJ08"],rp:["PRIM_VIEW","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.EditField","PRIM_MD.DateTimeField","PRIM_MD.Edit","PRIM_MD.Icon","PRIM_MD.Label","PRIM_MD.ActionButton"]
});