window.LANSA.addSrc("evef",function(e,c,a,b){e.Gb("PRIM_EVP");e.Gb("PRIM_EDIT");c.BUb=function(b){m.w.call(this,b);this.jm|=a.$4a.Hrb;this.gf|=268435456;this.Ca=new c.AUb(this);this.Ca.Na(this);this.Ca.wa(this,a.G.ah,this.BA)};var m=c.u(c.BUb,c.M4);m.vb=function(){b.la(this.Ca);this.Ca=null;m.j.vb.call(this)};m.Saa=function(){return this.Ca};m.jq=function(b){this.Ca.Bn()!=b&&(this.Ca.jq(b),this.ca(a.f.h))};m.Bn=function(){return this.Ca.Bn()};m.cu=function(b){this.Ca.lr()!=b&&(this.Ca.cu(b),this.ca(a.f.h))};
m.lr=function(){return this.Ca.lr()};m.$A=function(b){this.Ca.Nv()!=b&&(this.Ca.$A(b),this.ca(a.f.h))};m.Nv=function(){return this.Ca.Nv()};m.Lv=function(){return this.bn()!=this.wp()};m.wp=function(){return this.Ca.wp()};m.Qq=function(a){this.Ca.Qq(a)};m.bn=function(){return this.Ca.bn()};m.Pq=function(a){this.Ca.Pq(a)};m.cc=function(){return this.Ca.cc()};m.Ju=function(){return this.Ca.ea};m.MM=function(a){1==a?this.So(268435456):this.So(0)};m.xI=function(){var a=0;268435456==this.pj()&&(a=1);return a};
m.So=function(b){this.pj()!=b&&(this.gf=this.gf&~a.hi.uja|b,this.hh(),this.l(a.f.h))};m.pj=function(){return this.gf&a.hi.uja};m.xMa=function(){return this.OI()?!0:!1};m.OI=function(){return 0<this.pj()};m.QCa=function(){this.Pe()&&this.Pe().Wb(this.Rra);this.Ca&&this.Ca.Wb(this.Bra)};m.xxa=function(){this.Ca.Bg(this.hb());this.Ca.ix(!0);this.Ca.Yu(!0);this.Ca.O5(this.TT());this.Ca.Sg(this.He());this.Ca.AJ(this.Ej());this.Ca.c6(this.EK);this.Ca.Bm(this.um());this.Ca.Pl(this.gj());this.Ca.gu(this.Qw());
this.Ca.Hj(this.ti());this.Ca.Gj(this.Hh());this.Ca.Hm(this.Nk());this.hb().wMa()&&this.Ca.ss("*")};m.cZ=function(a){this.xxa();m.j.cZ.call(this,a)};m.Dj=function(){this.xxa();m.j.Dj.call(this)};m.Ze=function(a){if(this.Ca){var c=this.Oe(),e,q,f;this.Cd()?(q=this.vh,f=this.wh,e=c.aa()-(this.vh+this.Oj),c=c.ba()-(this.wh+this.Nj)):(q=this.cf(),f=this.Xe(),e=c.aa()-(this.cf()+this.Tf()),c=c.ba()-(this.Xe()+this.kg()));this.Ca.kb(b.zd(q,f,e,c))}m.j.Ze.call(this,a)};m.Oja=function(){var a;this.Ca&&(a=
this.Ca.bl());return a};m.YE=function(a,b){a&&a.Da(this,this.Wn);b&&b.Ea(this,this.Wn);this.Ca.Bg(b)};m.Gq=function(){this.Ca.$e()};m.zg=function(a){null!=this.Ca&&this.Ca.AJ(this.Ej());m.j.zg.call(this,a);this.Ca&&(this.Ca.Fr(null),this.Ca.ix(!0),this.Ca.Yu(!0),this.cz&&this.Ca.Fr(this.cz))};m.trb=function(){this.Ca&&this.Ca.occ()};m.e_=function(a,b){this.Ca&&this.Ca.e_(a,b)};m.JX=function(){this.Ca&&this.Ca.JX()};m.UK=function(a){this.Ca&&this.Ca.UK(a)};m.GM=function(a){this.Ca&&this.Ca.GM(a)};
m.BA=function(){this.kc()};m.Wn=function(){};m.AIa=m[a.$.Fba]=function(){this.Ca&&this.n6(this.KY())};m.MT=m[a.$.ny]=function(){this.Ca.$e()};m.iL=m[a.$.dM]=function(){this.Ca.$e()};e.kd(c.BUb,"PRIM_EVEF",{tJ:a.Ev.T9,Oa:{ComponentVersion:{a:m.xI,g:function(a){this.MM(e.K(a))}},AutoTab:{a:m.TT,g:function(a){this.O5(e.za(a))}},AutoSelect:{a:m.um,g:function(a){this.Bm(e.za(a))}},WordWrap:{a:m.Od,g:function(a){this.Re(e.za(a))}},ShowSelection:{a:m.gj,g:function(a){this.Pl(e.za(a))}},ShowSelectionHilight:{a:m.Qw,
g:function(a){this.gu(e.za(a))}},ShowPrompter:{a:m.i4,g:function(a){this.toa(e.za(a))}},PrompterImage:{a:m.TKa,g:m.k6},PrompterTabStop:{a:m.kwa,g:function(a){this.Xlb(e.za(a))}},UsePicklist:{a:m.BLa,g:function(a){this.lR(e.za(a))}},EditAlignment:{a:function(){return e.ta(this.ti(),a.Cl.v)},g:function(b){this.Hj(e.ra(b,a.Cl.v))}},DisplayAlignment:{a:function(){return e.ta(this.Hh(),a.gi.v)},g:function(b){this.Gj(e.ra(b,a.gi.v))}},Text:{a:m.Nja},SelectionEnd:{a:m.bn,g:function(a){this.Pq(e.K(a))}},
SelectionStart:{a:m.wp,g:function(a){this.Qq(e.K(a))}},VisualStyleEdit:{a:m.b9a,g:m.wBa},NumericEditStyle:{a:function(){return e.ta(this.Nk(),a.nn.v)},g:function(b){this.Hm(e.ra(b,a.nn.v))}},HasSelection:{a:m.Lv},EditStyle:{a:m.H3,g:m.vda},EditStyles:{a:m.Xja},EditMouseOverStyle:{a:m.jKa,g:m.kRa},EditMouseOverStyles:{a:m.kKa},EditFocusedStyle:{a:m.hKa,g:m.jRa},EditFocusedStyles:{a:m.iKa},LabelStyle:{a:m.P3,g:m.zda},LabelStyles:{a:m.wKa},LabelMouseOverStyle:{a:m.uKa,g:m.yRa},LabelMouseOverStyles:{a:m.vKa},
InputType:{a:function(){return e.ta(this.Bn(),a.Ee.v)},g:function(b){this.jq(e.ra(b,a.Ee.v))}},InputTypePattern:{a:m.lr,g:function(a){this.cu(e.ma(a))}},SpellCheck:{a:m.Nv,g:function(a){this.$A(e.za(a))}},Value:{a:function(){return this.Ja()},g:function(a){this.Wa(a)}}},jc:{SelectText:function(a,b){this.e_(e.K(a)-1,e.K(b))}},lg:{hg:"Value"}});c.AUb=function(a){p.w.call(this);this.ofc=a};var p=c.u(c.AUb,c.sM);p.wU=function(){return this.ofc.fs()||this.ofc.FK?!1:p.j.wU.call(this)}},{rp:["PRIM_EVP",
"PRIM_EDIT"]});
