window.LANSA.addSrc("atlm",function(e,c,a,b,m){e.Gb("PRIM_CPST");a.y9={gjc:0,nzb:1,fjc:2,mzb:4,hjc:8,Pgd:15};a.TQ={Rib:0,C4b:1,B4b:2,ZSc:3};a.TQ.v={VERTICAL:a.TQ.Rib,HORIZONTAL:a.TQ.C4b,DISPLAYPOSITION:a.TQ.B4b,EO:a.TQ.ZSc};a.oya={Ced:0,wsb:1,Aed:2,Eed:3,Bed:4,Ded:5,WQd:6};a.QCd={COa:0,DOa:1};a.c1a={xcb:32};c.vXb=function(b,c,e){p.w.call(this);this.Lb=[];this.Lb=c;this.qi=this.Hi=e;this.Jra=this.cta=0;this.LR=a.y9.gjc};var p=c.u(c.vXb,c.ze);p.U=function(){p.j.U.call(this)};c.Gya=function(){h.w.call(this);
this.CFa=a.TQ.Rib};e.Gb("PRIM_TBLO");var h=c.u(c.Gya,c.Sya);h.U=function(){h.j.U.call(this)};h.wvd=function(){return this.CFa};h.B1c=function(b){this.CFa!=b&&(this.CFa=b,this.l(a.f.h))};h.O5=function(a,b){var c=this.Xma(a);c.O5(b);return c};h.QP=function(a){return this.Be(a).QP()};h.Wnd=function(a){return this.Be(a)};h.C7a=function(){return a.oya.wsb};h.Ap=function(b,c){var e=h.j.Ap.call(this,b,c);if(e){var f=this.Be(b);!f||f.QP()!=a.Rh.z9&&f.QP()!=a.Rh.w9||(e=!1)}return e};h.tr=function(b,c){var e=
h.j.tr.call(this,b,c);if(e){var f=this.Be(b);!f||f.QP()!=a.Rh.M2&&f.QP()!=a.Rh.x9||(e=!1)}return e};h.xwc=function(a){return this.Be(a)};h.mP=function(a,b,c,f){f===m&&(f=!0);a=new e.gd("PRIM_ATLI");a.Vi(b);f&&a.Na(this);return a};h.cPc=function(a,b){return b=this.Ze(a,void 0)};h.xnc=function(a){var b=new c.QNa;b.Vi(a);return b};h.Ze=function(b,e){for(var h=this.NB(b,!0);;){var f=new c.vXb(0,h,e);f.qi.Ua(f.qi.se()+this.wh);f.qi.Ta(f.qi.Td()+this.vh);f.qi.Ra(f.qi.Ot()-this.Pj);f.qi.Ha(f.qi.xI()-this.Oj);
switch(this.CFa){case a.TQ.Rib:this.vP(f,a.Rh.z9);this.vP(f,a.Rh.w9);this.vP(f,a.Rh.M2);this.vP(f,a.Rh.x9);this.vP(f,a.Rh.cG);break;case a.TQ.C4b:this.vP(f,a.Rh.M2);this.vP(f,a.Rh.x9);this.vP(f,a.Rh.z9);this.vP(f,a.Rh.w9);this.vP(f,a.Rh.cG);break;case a.TQ.B4b:for(var g=null,d=h,l=0;l<d.length&&null!=(g=d[l]);l++){var m=g;m.d7!=a.Rh.cG&&0==(g.ha().fb&a.c1a.xcb)&&this.s0a(f,m)}this.vP(f,a.Rh.cG)}if(0==f.cta&&0==f.Jra)break;e.N_(f.cta,f.Jra)}return new c.dJ(e.aa(),e.ba())};h.vP=function(b,c){var e=
null,f=b.Lb;switch(c){case a.Rh.z9:case a.Rh.M2:case a.Rh.cG:for(var g=0;g<f.length&&null!=(e=f[g]);g++){var d=e;if(d.d7==c){var h=e.ha();0==(h.fb&a.c1a.xcb)&&this.s0a(b,d)}}break;case a.Rh.w9:case a.Rh.x9:for(g=f.length-1;0<=g&&null!=(e=f[g]);g--)d=e,d.d7==c&&(h=e.ha(),0==(h.fb&a.c1a.xcb)&&this.s0a(b,d))}};h.s0a=function(b,c){var e=c.eKb(),f,g;switch(c.d7){case a.Rh.z9:g=0;b.LR|=a.y9.nzb;0!=c.KS&&e.Bh(e.aa(),b.Hi.ba()*c.KS/100);e.Cb(b.qi.Q()+c.bf(),b.qi.O()+c.Xe());b.qi.QQa(b.qi.Q(),b.qi.O()+e.ba()+
c.Xe()+c.kg());f=b.qi.aa()-(c.bf()+c.Sf());e.Bh(Math.max(f,0),e.ba());this.ria(c,e);0<g&&(g>b.qi.ba()&&(e=g-b.qi.ba(),e>b.Jra&&(b.Jra=e)),b.qi.q6b(0,g));break;case a.Rh.w9:g=0;b.LR|=a.y9.fjc;0!=c.KS&&e.Bh(e.aa(),b.Hi.ba()*c.KS/100);f=b.qi.ba()-(e.ba()+c.Xe()+c.kg());0!=(b.LR&a.y9.nzb)&&(f=Math.max(f,0));b.qi.Bh(b.qi.aa(),f);e.Cb(b.qi.Q()+c.bf(),b.qi.ua+c.Xe());f=b.qi.aa()-(c.bf()+c.Sf());e.Bh(Math.max(f,0),e.ba());this.ria(c,e);0<g&&(g>b.qi.ba()&&(e=g-b.qi.ba(),e>b.Jra&&(b.Jra=e)),b.qi.N_(0,-g));
break;case a.Rh.M2:g=0;b.LR|=a.y9.mzb;0!=c.KS&&e.Bh(b.Hi.aa()*c.KS/100,e.ba());e.Cb(b.qi.Q()+c.bf(),b.qi.O()+c.Xe());f=b.qi.Q()+e.aa()+c.bf()+c.Sf();b.qi.QQa(Math.max(f,b.Hi.Q()),b.qi.O());f=b.qi.ba()-(c.Xe()+c.kg());e.Bh(e.aa(),Math.max(f,0));this.ria(c,e);0<g&&(g>b.qi.aa()&&(e=g-b.qi.aa(),e>b.cta&&(b.cta=e)),b.qi.q6b(g,0));break;case a.Rh.x9:g=0;b.LR|=a.y9.hjc;0!=c.KS&&e.Bh(b.Hi.aa()*c.KS/100,e.ba());f=b.qi.aa()-(e.aa()+c.bf()+c.Sf());0!=(b.LR&a.y9.mzb)&&(f=Math.max(f,0));b.qi.Bh(f,b.qi.ba());e.Cb(b.qi.va+
c.bf(),b.qi.O()+c.Xe());f=b.qi.ba()-(c.Xe()+c.kg());e.Bh(e.aa(),Math.max(f,0));this.ria(c,e);0<g&&(g>b.qi.aa()&&(e=g-b.qi.aa(),e>b.cta&&(b.cta=e)),b.qi.N_(-g,0));break;case a.Rh.cG:e.Cb(b.qi.Q()+c.bf(),b.qi.O()+c.Xe()),f=b.qi.aa()-(c.bf()+c.Sf()),g=b.qi.ba()-(c.Xe()+c.kg()),e.Bh(Math.max(f,0),Math.max(g,0)),this.ria(c,e)}};h.gjb=function(b,c){var e=this.xwc(b);if(e){if(e.QP()==a.Rh.z9||e.QP()==a.Rh.w9)c[0]=!0;if(e.QP()==a.Rh.M2||e.QP()==a.Rh.x9)c[1]=!0}};e.kd(c.Gya,"PRIM_ATLM",{Oa:{MarginTop:{a:h.Xe,
g:function(a){this.Ge(e.K(a))}},MarginBottom:{a:h.kg,g:function(a){this.Se(e.K(a))}},MarginLeft:{a:h.bf,g:function(a){this.re(e.K(a))}},MarginRight:{a:h.Sf,g:function(a){this.Ud(e.K(a))}},MaxHeight:{a:h.GKa,g:function(a){this.loa(e.K(a))}},MaxWidth:{a:h.HKa,g:function(a){this.Y5(e.K(a))}},MinHeight:{a:h.JKa,g:function(a){this.moa(e.K(a))}},MinWidth:{a:h.KKa,g:function(a){this.a6(e.K(a))}},ProcessingOrder:{a:function(){return e.ta(this.CFa,a.TQ.v)},g:function(b){this.B1c(e.ra(b,a.TQ.v))}}}})});window.LANSA.addSrc("atli",function(e,c,a,b){a.Rh={wzb:0,z9:1,w9:2,M2:3,x9:4,cG:5,Pkc:6};a.Rh.v={NONE:a.Rh.wzb,TOP:a.Rh.z9,BOTTOM:a.Rh.w9,LEFT:a.Rh.M2,RIGHT:a.Rh.x9,CENTER:a.Rh.cG,EO:a.Rh.Pkc};a.Rkc={qia:0};c.QNa=function(){m.w.call(this);this.KS=0;this.d7=a.Rh.wzb;this.LR=a.Rkc.qia};var m=c.u(c.QNa,c.Tya);b.RNa=function(a,b,e){var k=new c.QNa;k.Na(a);k.Vi(b);k.O5(e);return k};m.U=function(){m.j.U.call(this)};m.C7a=function(){return a.oya.wsb};m.QP=function(){return this.d7};m.O5=function(b){this.d7!=
b&&(this.d7=b,this.l(a.f.h))};m.bvd=function(){return this.KS};m.JLd=function(b){0>b?b=0:100<b&&(b=100);this.KS!=b&&(this.KS=b,this.l(a.f.h))};m.Bab=function(b){var c=!1;if(null!=this.eb&&this.eb.M()===b)if(this.eb.Dd()){if(this.eb.ao()||this.d7==a.Rh.cG)c=!0}else this.eb.ao()&&(c=!0);return c};m.YOb=function(a,b,c){this.Na(a);this.Vi(b);this.O5(c)};e.kd(c.QNa,"PRIM_ATLI",{Oa:{MarginTop:{a:m.Xe,g:function(a){this.Ge(e.K(a))}},MarginBottom:{a:m.kg,g:function(a){this.Se(e.K(a))}},MarginLeft:{a:m.bf,
g:function(a){this.re(e.K(a))}},MarginRight:{a:m.Sf,g:function(a){this.Ud(e.K(a))}},MaxHeight:{a:m.GKa,g:function(a){this.loa(e.K(a))}},MaxWidth:{a:m.HKa,g:function(a){this.Y5(e.K(a))}},MinHeight:{a:m.JKa,g:function(a){this.moa(e.K(a))}},MinWidth:{a:m.KKa,g:function(a){this.a6(e.K(a))}},Manage:{a:m.ha,g:m.Vi},Parent:{a:m.M,g:m.Na},Attachment:{a:function(){return e.ta(this.QP(),a.Rh.v)},g:function(b){this.O5(e.ra(b,a.Rh.v))}}}})});