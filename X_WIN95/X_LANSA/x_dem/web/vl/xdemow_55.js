﻿LANSA.addComponent({id:"XDEMOW_55",nm:"xDemoWebAnimationScale",ot:"wp",tp:"Web Page",de:"Scale Animation",tl:14020003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("LABEL1","PRIM_LABL");var C1=this.cR("LABEL2","PRIM_LABL");var C2=this.cR("LABEL3","PRIM_LABL");var C3=this.cR("LABEL4","PRIM_LABL");var C4=this.cR("ANIMATION","PRIM_ANIM");var C5=this.cR("ANIMATION1","PRIM_ANIM","Scale");var C6=this.cR("ANIMATION2","PRIM_ANIM","Scale");C0.setDisplayPosition(3);
C0.setEllipses("WORD");C0.setHeight(65);C0.setLeft(64);C0.setParent(this);C0.setTabPosition(3);C0.setTabStop(false);C0.setTop(72);C0.setVerticalAlignment("CENTER");C0.setWidth(105);C0.setAlignment("CENTER");C0.setThemeDrawStyle("MediumTitle");C0.setCaption("Label");C0.iC();C1.setDisplayPosition(2);C1.setEllipses("WORD");C1.setHeight(65);C1.setLeft(288);C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(72);C1.setVerticalAlignment("CENTER");C1.setWidth(105);C1.setAlignment("CENTER");
C1.setThemeDrawStyle("MediumTitle");C1.setCaption("Label");C1.iC();C2.setDisplayPosition(1);C2.setEllipses("WORD");C2.setHeight(65);C2.setLeft(176);C2.setParent(this);C2.setTabPosition(1);C2.setTabStop(false);C2.setTop(72);C2.setVerticalAlignment("CENTER");C2.setWidth(105);C2.setAlignment("CENTER");C2.setThemeDrawStyle("MediumTitle");C2.setCaption("Label");C2.iC();C3.setCaption("Mouse over the labels to see the animation");C3.setDisplayPosition(4);C3.setEllipses("WORD");C3.setHeight(44);C3.setLeft(22);
C3.setParent(this);C3.setTabPosition(4);C3.setTabStop(false);C3.setTop(13);C3.setVerticalAlignment("CENTER");C3.setWidth(731);C3.setThemeDrawStyle("Heading2+MediumTitle");C3.setMarginLeft(2);C3.iC();C4.iC();C5.setParent(C4);C5.setScaleHeight(110);C5.setScaleWidth(110);C5.setDuration(100);C5.iC();C6.setParent(C4);C6.setStartTime(100);C6.setDuration(100);C6.iC();C0.aH("MOUSEENTER",this,e1);C1.aH("MOUSEENTER",this,e1);C2.aH("MOUSEENTER",this,e1);this.setTheme(l.THEME().get("2015LIME"));}});function e1(SENDER,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Label1.MouseEnter #Label2.MouseEnter #Label3.MouseEnter",13);r.ln=13;{r.ln=15;m.ANIMATION1.setManage(SENDER);m.ANIMATION2.setManage(SENDER);r.ln=17;m.ANIMATION.mthSTART();}r.ln=19;r.e();};},{rp:["PRIM_WEB","PRIM_LABL","PRIM_ANIM","PRIM_ANIM.Scale"]});