﻿LANSA.addComponent({id:"XDACAROU",nm:"xDACarouselItem",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Carousel Item",tl:15000003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDESTIN_2",an:"xDestinationImageDesc",ft:"NV",ln:1024,dc:0,lb:"Image descripti",h1:"Image",h2:"description",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Image description",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_CARO.ICarouselDesign"],
fd:Fd,mt:{OnItemGotReference:{ps:{"CarouselItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDACAROU",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("TABLELAYOUTCOLUMN2","PRIM_TBLO","Column");var C2=this.cR("TABLELAYOUTCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("TABLELAYOUTCOLUMN3","PRIM_TBLO","Column");var C4=this.cR("ROW2","PRIM_TBLO","Row");var C5=this.cR("TABLELAYOUT1ROW1","PRIM_TBLO","Row");var C6=this.cR("TABLELAYOUT1ROW2","PRIM_TBLO","Row");var C7=this.cR("TABLELAYOUT1ROW4","PRIM_TBLO","Row");
var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("TABLELAYOUT1ITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUT","PRIM_TBLO");var C11=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C12=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C13=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C14=this.cR("IMAGE","PRIM_IMAG");var C15=this.cR("PANELLABEL","PRIM_PANL");var C16=this.cR("EDIT","PRIM_MD","Label");this.cD("GIMAGE");C0.iC();C1.setDisplayPosition(2);C1.setParent(C0);C1.setMaxWidth(700);
C1.setWidth(100);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(2);C4.setParent(C0);C4.setHeight(100);C4.setMaxHeight(700);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.iC();C6.setDisplayPosition(4);C6.setParent(C0);C6.iC();C7.setDisplayPosition(3);C7.setParent(C0);C7.setUnits("PIXELS");C7.setHeight(200);C7.iC();C8.setColumn(C1);C8.setManage(C14);C8.setParent(C0);C8.setRow(C4);C8.setMarginTop(16);C8.setMarginBottom(16);
C8.setMarginLeft(16);C8.setMarginRight(16);C8.iC();C9.setManage(C15);C9.setParent(C0);C9.setRow(C7);C9.setColumn(C1);C9.setMarginBottom(8);C9.iC();C10.iC();C11.setDisplayPosition(1);C11.setParent(C10);C11.iC();C12.setDisplayPosition(1);C12.setParent(C10);C12.setHeight(37);C12.setUnits("CONTENT");C12.iC();C13.setManage(C16);C13.setParent(C10);C13.setRow(C12);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setColumn(C11);C13.iC();C14.setDisplayPosition(1);C14.setLeft(23);C14.setParent(this);C14.setTabPosition(1);
C14.setTabStop(false);C14.setHeight(268);C14.setWidth(575);C14.setTop(19);C14.setImageSizing("BESTFIT");C14.iC();C15.setParent(this);C15.setDisplayPosition(2);C15.setTabPosition(2);C15.setTop(303);C15.setLeft(7);C15.setHeight(192);C15.setWidth(607);C15.setLayoutManager(C10);C15.setVerticalScroll(true);C15.iC();C16.setCaption("Caption");C16.setDisplayPosition(1);C16.setHeight(37);C16.setLeft(0);C16.setParent(C15);C16.setTabPosition(1);C16.setTop(0);C16.setWidth(607);C16.setThemeDrawStyle("Text(255,255,255,1)");
C16.setPaddingLeft(8);C16.setPaddingRight(8);C16.setPaddingTop(8);C16.setPaddingBottom(8);C16.setWordWrap(true);C16.iC();l.WEB().aH("DEVICECHANGED",this,e1);this.setDisplayPosition(1);this.setHeight(505);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(620);this.setLayoutManager(C0);this.aLF({"XDESTIN_2":f.F1});}});cO.mthONITEMGOTREFERENCE=function(p0){var f=this.FLD.XDACAROU,m=this.REF,r=l.mR(this,cO,"OnItemGotReference",30);var P0=r.cPD("CAROUSELITEM");P0=r.sR("CAROUSELITEM",p0);
r.ln=30;{r.ln=32;this.setrefGIMAGE(l.cast(P0.getRelatedReference(),"PRIM_IMAG"));r.ln=34;m.IMAGE.setFileName(m.GIMAGE.getFileName());r.ln=36;m.EDIT.set(f.F1.get());}r.ln=38;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",40);r.ln=40;{r.ln=42;if(l.s.eq(l.WEB().getDevice(),"MOBILE")){r.ln=44;m.TABLELAYOUT1ITEM1.setManage(m.PANELLABEL);m.TABLELAYOUT1ITEM1.setParent(m.TABLELAYOUT);m.TABLELAYOUT1ITEM1.setRow(m.TABLELAYOUT1ROW4);m.TABLELAYOUT1ITEM1.setColumn(m.TABLELAYOUTCOLUMN2);
m.TABLELAYOUT1ITEM1.setMarginRight(8);m.TABLELAYOUT1ITEM1.setMarginLeft(8);r.ln=46;m.TABLELAYOUT1ROW4.setDisplayPosition(3);m.TABLELAYOUT1ROW4.setParent(m.TABLELAYOUT);m.TABLELAYOUT1ROW4.setUnits("PIXELS");m.TABLELAYOUT1ROW4.setHeight(160);}else{r.ln=50;m.TABLELAYOUT1ITEM1.setManage(m.PANELLABEL);m.TABLELAYOUT1ITEM1.setParent(m.TABLELAYOUT);m.TABLELAYOUT1ITEM1.setRow(m.TABLELAYOUT1ROW4);m.TABLELAYOUT1ITEM1.setColumn(m.TABLELAYOUTCOLUMN2);m.TABLELAYOUT1ITEM1.setMarginRight(-48);m.TABLELAYOUT1ITEM1.setMarginLeft(-48);
r.ln=52;m.TABLELAYOUT1ROW4.setDisplayPosition(3);m.TABLELAYOUT1ROW4.setParent(m.TABLELAYOUT);m.TABLELAYOUT1ROW4.setUnits("PIXELS");m.TABLELAYOUT1ROW4.setHeight(200);}}r.ln=56;r.e();};cO.setrefGIMAGE=function(rn){this.sR("GIMAGE",rn);};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_MD.Label","PRIM_FLD"],dp:["PRIM_IMAG"]});