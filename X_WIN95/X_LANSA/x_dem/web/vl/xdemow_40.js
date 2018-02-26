﻿LANSA.addComponent({id:"XDEMOW_40",nm:"xDemoWebAnimationTable",ot:"wp",tp:"Web Page",de:"Table Animations",tl:14020003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("ROW_3","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("COLUMN_2","PRIM_TBLO","Column");var C6=this.cR("COLUMN_3","PRIM_TBLO","Column");
var C7=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C10=this.cR("PANEL1","PRIM_PANL");var C11=this.cR("PANEL2","PRIM_PANL");var C12=this.cR("LABEL1","PRIM_LABL");var C13=this.cR("ANIMATION","PRIM_ANIM");var C14=this.cR("ITEM1","PRIM_ANIM","TableLayoutItem");var C15=this.cR("ITEM2","PRIM_ANIM","TableLayoutItem");var C16=this.cR("ITEM5","PRIM_ANIM","Opacity");var C17=this.cR("ITEM6","PRIM_ANIM","Opacity");
var C18=this.cR("ITEM7","PRIM_ANIM","Opacity");var C19=this.cR("ITEM8","PRIM_ANIM","Opacity");var C20=this.cR("ANIMATION2","PRIM_ANIM");var C21=this.cR("ITEM3","PRIM_ANIM","TableLayoutItem");var C22=this.cR("ITEM4","PRIM_ANIM","TableLayoutItem");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.iC();C5.setDisplayPosition(2);C5.setParent(C0);C5.iC();
C6.setDisplayPosition(3);C6.setParent(C0);C6.iC();C7.setColumn(C4);C7.setManage(C10);C7.setParent(C0);C7.setRow(C1);C7.iC();C8.setColumn(C5);C8.setManage(C11);C8.setParent(C0);C8.setRow(C2);C8.setColumnSpan(2);C8.setRowSpan(2);C8.iC();C9.setColumn(C5);C9.setFlow("DOWN");C9.setManage(C12);C9.setParent(C0);C9.setRow(C1);C9.setSizing("NONE");C9.iC();C10.setDisplayPosition(1);C10.setHeight(267);C10.setLeft(0);C10.setParent(this);C10.setTabPosition(1);C10.setTabStop(false);C10.setTop(0);C10.setWidth(400);
C10.setThemeDrawStyle("LightTitle");C10.iC();C11.setDisplayPosition(2);C11.setHeight(533);C11.setLeft(400);C11.setParent(this);C11.setTabPosition(2);C11.setTabStop(false);C11.setTop(267);C11.setWidth(800);C11.setThemeDrawStyle("DarkTitle");C11.iC();C12.setCaption("Click a box to animate");C12.setDisplayPosition(3);C12.setEllipses("WORD");C12.setHeight(159);C12.setLeft(447);C12.setParent(this);C12.setTabPosition(3);C12.setTabStop(false);C12.setTop(54);C12.setVerticalAlignment("CENTER");C12.setWidth(306);
C12.setAlignment("CENTER");C12.setThemeDrawStyle("Title+MediumTitle");C12.iC();C13.iC();C14.setColumn(C5);C14.setRow(C2);C14.setRowSpan(2);C14.setColumnSpan(2);C14.setParent(C13);C14.setManage(C7);C14.iC();C15.setColumn(C4);C15.setRow(C1);C15.setRowSpan(1);C15.setColumnSpan(1);C15.setParent(C13);C15.setManage(C8);C15.iC();C16.setParent(C13);C16.setManage(C10);C16.setDuration(500);C16.iC();C17.setParent(C13);C17.setManage(C11);C17.setDuration(500);C17.iC();C18.setParent(C13);C18.setManage(C10);C18.setDuration(500);
C18.setStartTime(500);C18.setOpacity(100);C18.iC();C19.setParent(C13);C19.setManage(C11);C19.setDuration(500);C19.setStartTime(500);C19.setOpacity(100);C19.iC();C20.iC();C21.setColumn(C4);C21.setRow(C1);C21.setRowSpan(1);C21.setColumnSpan(1);C21.setParent(C20);C21.setManage(C7);C21.iC();C22.setColumn(C5);C22.setRow(C2);C22.setRowSpan(2);C22.setColumnSpan(2);C22.setParent(C20);C22.setManage(C8);C22.iC();C10.aH("CLICK",this,e1);C11.aH("CLICK",this,e1);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015ORANGE"));
}});function e1(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#Panel1.Click #Panel2.Click",30);r.ln=30;{r.ln=32;SENDER.setDisplayPosition(1);r.ln=34;if(l.and(l.not(m.ANIMATION.getIsAnimating()),l.not(m.ANIMATION2.getIsAnimating()))){r.ln=36;if((m.LAYOUTITEM1.getRow()===m.ROW)){r.ln=38;m.ANIMATION.mthSTART();}else{r.ln=42;m.ANIMATION2.mthSTART();}}}r.ln=48;r.e();};},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_PANL","PRIM_LABL","PRIM_ANIM","PRIM_ANIM.TableLayoutItem","PRIM_ANIM.Opacity"]
});