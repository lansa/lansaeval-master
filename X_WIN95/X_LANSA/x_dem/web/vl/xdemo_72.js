﻿LANSA.addComponent({id:"XDEMO_72",nm:"xDemoWebSwipeItem",ot:"rp",tp:"Reusable Part",pt:"ap",de:"Swipe item",tl:15000003},function(l,oI,u){var c1=l.cDec("1.7");var cO=l.rC(oI,{an:"PRIM_PANL",mt:{Prepare:{ps:{"Employee":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C4=this.cR("IMAGE1","PRIM_IMAG");C0.iC();C1.setDisplayPosition(1);
C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(c1);C2.iC();C3.setColumn(C1);C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);C3.setMarginBottom(6);C3.setMarginLeft(6);C3.setMarginRight(6);C3.setMarginTop(6);C3.iC();C4.setDisplayPosition(1);C4.setLeft(6);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);C4.setTop(6);C4.setHeight(357);C4.setWidth(365);C4.setImageSizing("BESTFIT");C4.iC();this.setDisplayPosition(1);this.setHeight(369);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setWidth(377);this.setLayoutManager(C0);}});cO.mthPREPARE=function(p0){var m=this.REF,r=l.mR(this,cO,"Prepare",11);var P0=r.cPD("EMPLOYEE");P0=r.sR("EMPLOYEE",p0);r.ln=11;{r.ln=14;m.IMAGE1.setImage(null);r.ln=16;if((P0!=null)){r.ln=18;m.IMAGE1.setImage(P0.getTHUMBNAIL());}}r.ln=22;r.e();};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG"]});