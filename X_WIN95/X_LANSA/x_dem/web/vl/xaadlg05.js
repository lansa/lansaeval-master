﻿LANSA.addComponent({id:"XAADLG05",nm:"xAAImageDialog",ot:"wv",tp:"Dialog",de:"Image Dialog",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.82"),c2=l.cDec("1.7");var rc1=l.cB("ximageima.png");var Fd={F1:{nm:"XACCIMAGE",an:"xAccidentImage",ft:"BL",ln:0,dc:0,lb:"Accident Image",h1:"Accident",h2:"Image",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Accident Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,
{an:"PRIM_DLG",fd:Fd,pt:{AccidentImage:{da:"rw"}},co:function(){cO.aN.call(this);this.aF("XAADLG05",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("LAYOUTHEADER","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTCONTENT","PRIM_TBLO");
var C9=this.cR("COLUMN2","PRIM_TBLO","Column");var C10=this.cR("COLUMN3","PRIM_TBLO","Column");var C11=this.cR("ROW3","PRIM_TBLO","Row");var C12=this.cR("LAYOUT2ITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUT2ITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUT1","PRIM_TBLO");var C15=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C16=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C17=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C18=this.cR("CONTENTPANEL","PRIM_PANL");var C19=this.cR("HEADER","PRIM_PANL");
var C20=this.cR("ICONCLOSE","PRIM_MD","Icon");var C21=this.cR("HEADING","PRIM_MD","Label");var C22=this.cR("IMAGE1","PRIM_IMAG");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("255:255:255");C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.setHeight(48);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(2);C5.setParent(C2);C5.setHeight(c1);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C3);C6.setManage(C19);C6.setParent(C2);C6.setRow(C4);
C6.iC();C7.setManage(C18);C7.setParent(C2);C7.setRow(C5);C7.setColumn(C3);C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.setWidth(48);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(2);C10.setParent(C8);C10.setWidth(c2);C10.iC();C11.setDisplayPosition(1);C11.setParent(C8);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C9);C12.setManage(C20);C12.setParent(C8);C12.setRow(C11);C12.setSizing("NONE");C12.iC();C13.setColumn(C10);C13.setManage(C21);C13.setParent(C8);C13.setRow(C11);
C13.setMarginRight(48);C13.iC();C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.iC();C17.setColumn(C16);C17.setManage(C22);C17.setParent(C14);C17.setRow(C15);C17.iC();C18.setParent(this);C18.setDisplayPosition(2);C18.setTabPosition(2);C18.setHeight(527);C18.setLeft(0);C18.setTop(48);C18.setWidth(382);C18.setVerticalScroll(true);C18.setLayoutManager(C14);C18.iC();C19.setParent(this);C19.setDisplayPosition(1);C19.setTabPosition(1);C19.setThemeDrawStyle("DarkTitle");
C19.setHeight(48);C19.setLeft(0);C19.setTop(0);C19.setWidth(382);C19.setLayoutManager(C8);C19.iC();C20.setDisplayPosition(1);C20.setIcon("arrow_back");C20.setLeft(0);C20.setParent(C19);C20.setTabPosition(1);C20.setTop(0);C20.iC();C21.setDisplayPosition(2);C21.setLeft(48);C21.setParent(C19);C21.setTabPosition(2);C21.setThemeDrawStyle("Heading2");C21.setTop(0);C21.setHeight(48);C21.setWidth(286);C21.setCaptionAlignment("CENTER");C21.setWordWrap(true);C21.setCaption("Image View");C21.iC();C22.setDisplayPosition(1);
C22.setImage(rc1);C22.setImageSizing("BESTFIT");C22.setLeft(0);C22.setParent(C18);C22.setTabPosition(1);C22.setTabStop(false);C22.setTop(0);C22.setHeight(527);C22.setWidth(382);C22.iC();C20.aH("CLICK",this,e2);this.setHeight(577);this.setWidth(384);this.setLayoutManager(C2);this.setPlacement("FULLSCREEN");this.setStyle(C0);this.setAutoClose(true);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",38);r.ln=38;{r.ln=40;m.IMAGE1.setFileName(this.getACCIDENTIMAGE());
}r.ln=42;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#IconClose.Click",44);r.ln=44;{r.ln=46;this.mthCLOSE();}r.ln=48;r.e();};cO.getACCIDENTIMAGE=function(){var f=this.FLD.XAADLG05;return f.F1.get();};cO.setACCIDENTIMAGE=function(v){var f=this.FLD.XAADLG05;f.F1.set(v);};},{rp:["PRIM_DLG","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Icon","PRIM_MD.Label","PRIM_IMAG"]});