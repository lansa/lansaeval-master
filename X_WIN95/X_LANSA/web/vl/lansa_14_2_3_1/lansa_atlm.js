window.LANSA.addSrc("atlm",function(d,c,a,b,r){d.Db("PRIM_CPST");a.S$={mnc:0,XCb:1,lnc:2,WCb:4,nnc:8,rld:15};a.BS={imb:0,J8b:1,I8b:2,DXc:3};a.BS.u={VERTICAL:a.BS.imb,HORIZONTAL:a.BS.J8b,DISPLAYPOSITION:a.BS.I8b,EO:a.BS.DXc};a.uAa={njd:0,Wvb:1,ljd:2,pjd:3,mjd:4,ojd:5,LVd:6};a.JHd={eRa:0,fRa:1};a.y4a={Mfb:32};c.p0b=function(b,c,d){u.H.call(this);this.Pb=[];this.Pb=c;this.Bi=this.Xi=d;this.Sta=this.nva=0;this.oT=a.S$.mnc};var u=c.q(c.p0b,c.He);u.R=function(){u.j.R.call(this)};c.PAa=function(){k.H.call(this);
this.YHa=a.BS.imb};d.Db("PRIM_TBLO");var k=c.q(c.PAa,c.aBa);k.R=function(){k.j.R.call(this)};k.lAd=function(){return this.YHa};k.s6c=function(b){this.YHa!=b&&(this.YHa=b,this.k(a.g.h))};k.e7=function(a,b){var c=this.bpa(a);c.e7(b);return c};k.uR=function(a){return this.Kd(a).uR()};k.zsd=function(a){return this.Kd(a)};k.cab=function(){return a.uAa.Wvb};k.oo=function(b,c){var d=k.j.oo.call(this,b,c);if(d){var f=this.Kd(b);!f||f.uR()!=a.di.T$&&f.uR()!=a.di.Q$||(d=!1)}return d};k.hq=function(b,c){var d=
k.j.hq.call(this,b,c);if(d){var f=this.Kd(b);!f||f.uR()!=a.di.a4&&f.uR()!=a.di.R$||(d=!1)}return d};k.YAc=function(a){return this.Kd(a)};k.IM=function(a,b,c,f){f===r&&(f=!0);a=d.$c("PRIM_ATLI");a.sj(b);f&&a.Oa(this);return a};k.HTc=function(a,b){return b=this.ef(a,void 0)};k.Krc=function(a){var b=new c.sQa;b.sj(a);return b};k.ef=function(b,d){for(var k=this.QC(b,!0);;){var f=new c.p0b(0,k,d);f.Bi.Ta(f.Bi.he()+this.eh);f.Bi.Va(f.Bi.Pd()+this.dh);f.Bi.Ra(f.Bi.Ur()-this.lj);f.Bi.Ha(f.Bi.KJ()-this.kj);
switch(this.YHa){case a.BS.imb:this.WQ(f,a.di.T$);this.WQ(f,a.di.Q$);this.WQ(f,a.di.a4);this.WQ(f,a.di.R$);this.WQ(f,a.di.gH);break;case a.BS.J8b:this.WQ(f,a.di.a4);this.WQ(f,a.di.R$);this.WQ(f,a.di.T$);this.WQ(f,a.di.Q$);this.WQ(f,a.di.gH);break;case a.BS.I8b:for(var h=null,e=k,m=0;m<e.length&&null!=(h=e[m]);m++){var g=h;g.v8!=a.di.gH&&0==(h.fa().jb&a.y4a.Mfb)&&this.O3a(f,g)}this.WQ(f,a.di.gH)}if(0==f.nva&&0==f.Sta)break;d.c1(f.nva,f.Sta)}return new c.tK(d.$(),d.aa())};k.WQ=function(b,c){var d=null,
f=b.Pb;switch(c){case a.di.T$:case a.di.a4:case a.di.gH:for(var h=0;h<f.length&&null!=(d=f[h]);h++){var e=d;if(e.v8==c){var m=d.fa();0==(m.jb&a.y4a.Mfb)&&this.O3a(b,e)}}break;case a.di.Q$:case a.di.R$:for(h=f.length-1;0<=h&&null!=(d=f[h]);h--)e=d,e.v8==c&&(m=d.fa(),0==(m.jb&a.y4a.Mfb)&&this.O3a(b,e))}};k.O3a=function(b,c){var d=c.RNb(),f,h;switch(c.v8){case a.di.T$:h=0;b.oT|=a.S$.XCb;0!=c.pU&&d.Yg(d.$(),b.Xi.aa()*c.pU/100);d.Fb(b.Bi.O()+c.Qe(),b.Bi.M()+c.Ge());b.Bi.rTa(b.Bi.O(),b.Bi.M()+d.aa()+c.Ge()+
c.Zf());f=b.Bi.$()-(c.Qe()+c.Of());d.Yg(Math.max(f,0),d.aa());this.Wja(c,d);0<h&&(h>b.Bi.aa()&&(d=h-b.Bi.aa(),d>b.Sta&&(b.Sta=d)),b.Bi.y$b(0,h));break;case a.di.Q$:h=0;b.oT|=a.S$.lnc;0!=c.pU&&d.Yg(d.$(),b.Xi.aa()*c.pU/100);f=b.Bi.aa()-(d.aa()+c.Ge()+c.Zf());0!=(b.oT&a.S$.XCb)&&(f=Math.max(f,0));b.Bi.Yg(b.Bi.$(),f);d.Fb(b.Bi.O()+c.Qe(),b.Bi.ua+c.Ge());f=b.Bi.$()-(c.Qe()+c.Of());d.Yg(Math.max(f,0),d.aa());this.Wja(c,d);0<h&&(h>b.Bi.aa()&&(d=h-b.Bi.aa(),d>b.Sta&&(b.Sta=d)),b.Bi.c1(0,-h));break;case a.di.a4:h=
0;b.oT|=a.S$.WCb;0!=c.pU&&d.Yg(b.Xi.$()*c.pU/100,d.aa());d.Fb(b.Bi.O()+c.Qe(),b.Bi.M()+c.Ge());f=b.Bi.O()+d.$()+c.Qe()+c.Of();b.Bi.rTa(Math.max(f,b.Xi.O()),b.Bi.M());f=b.Bi.aa()-(c.Ge()+c.Zf());d.Yg(d.$(),Math.max(f,0));this.Wja(c,d);0<h&&(h>b.Bi.$()&&(d=h-b.Bi.$(),d>b.nva&&(b.nva=d)),b.Bi.y$b(h,0));break;case a.di.R$:h=0;b.oT|=a.S$.nnc;0!=c.pU&&d.Yg(b.Xi.$()*c.pU/100,d.aa());f=b.Bi.$()-(d.$()+c.Qe()+c.Of());0!=(b.oT&a.S$.WCb)&&(f=Math.max(f,0));b.Bi.Yg(f,b.Bi.aa());d.Fb(b.Bi.va+c.Qe(),b.Bi.M()+c.Ge());
f=b.Bi.aa()-(c.Ge()+c.Zf());d.Yg(d.$(),Math.max(f,0));this.Wja(c,d);0<h&&(h>b.Bi.$()&&(d=h-b.Bi.$(),d>b.nva&&(b.nva=d)),b.Bi.c1(-h,0));break;case a.di.gH:d.Fb(b.Bi.O()+c.Qe(),b.Bi.M()+c.Ge()),f=b.Bi.$()-(c.Qe()+c.Of()),h=b.Bi.aa()-(c.Ge()+c.Zf()),d.Yg(Math.max(f,0),Math.max(h,0)),this.Wja(c,d)}};k.ymb=function(b,c){var d=this.YAc(b);if(d){if(d.uR()==a.di.T$||d.uR()==a.di.Q$)c[0]=!0;if(d.uR()==a.di.a4||d.uR()==a.di.R$)c[1]=!0}};d.wd(c.PAa,"PRIM_ATLM",{Pa:{MarginTop:{a:k.Ge,f:function(a){this.td(d.v(a))}},
MarginBottom:{a:k.Zf,f:function(a){this.Ae(d.v(a))}},MarginLeft:{a:k.Qe,f:function(a){this.$d(d.v(a))}},MarginRight:{a:k.Of,f:function(a){this.Ed(d.v(a))}},MaxHeight:{a:k.eNa,f:function(a){this.uqa(d.v(a))}},MaxWidth:{a:k.fNa,f:function(a){this.o7(d.v(a))}},MinHeight:{a:k.hNa,f:function(a){this.vqa(d.v(a))}},MinWidth:{a:k.iNa,f:function(a){this.q7(d.v(a))}},ProcessingOrder:{a:function(){return d.sa(this.YHa,a.BS.u)},f:function(b){this.s6c(d.qa(b,a.BS.u))}}}})});window.LANSA.addSrc("atli",function(d,c,a,b){a.di={fDb:0,T$:1,Q$:2,a4:3,R$:4,gH:5,Woc:6};a.di.u={NONE:a.di.fDb,TOP:a.di.T$,BOTTOM:a.di.Q$,LEFT:a.di.a4,RIGHT:a.di.R$,CENTER:a.di.gH,EO:a.di.Woc};a.Yoc={Vja:0};c.sQa=function(){r.H.call(this);this.pU=0;this.v8=a.di.fDb;this.oT=a.Yoc.Vja};var r=c.q(c.sQa,c.bBa);b.tQa=function(a,b,d){var p=new c.sQa;p.Oa(a);p.sj(b);p.e7(d);return p};r.R=function(){r.j.R.call(this)};r.cab=function(){return a.uAa.Wvb};r.uR=function(){return this.v8};r.e7=function(b){this.v8!=
b&&(this.v8=b,this.k(a.g.h))};r.Rzd=function(){return this.pU};r.vQd=function(b){0>b?b=0:100<b&&(b=100);this.pU!=b&&(this.pU=b,this.k(a.g.h))};r.Mdb=function(b){var c=!1;if(null!=this.Ya&&this.Ya.L()===b)if(this.Ya.Md()){if(this.Ya.Po()||this.v8==a.di.gH)c=!0}else this.Ya.Po()&&(c=!0);return c};r.XSb=function(a,b,c){this.Oa(a);this.sj(b);this.e7(c)};d.wd(c.sQa,"PRIM_ATLI",{Pa:{MarginTop:{a:r.Ge,f:function(a){this.td(d.v(a))}},MarginBottom:{a:r.Zf,f:function(a){this.Ae(d.v(a))}},MarginLeft:{a:r.Qe,
f:function(a){this.$d(d.v(a))}},MarginRight:{a:r.Of,f:function(a){this.Ed(d.v(a))}},MaxHeight:{a:r.eNa,f:function(a){this.uqa(d.v(a))}},MaxWidth:{a:r.fNa,f:function(a){this.o7(d.v(a))}},MinHeight:{a:r.hNa,f:function(a){this.vqa(d.v(a))}},MinWidth:{a:r.iNa,f:function(a){this.q7(d.v(a))}},Manage:{a:r.fa,f:r.sj},Parent:{a:r.L,f:r.Oa},Attachment:{a:function(){return d.sa(this.uR(),a.di.u)},f:function(b){this.e7(d.qa(b,a.di.u))}}}})});
