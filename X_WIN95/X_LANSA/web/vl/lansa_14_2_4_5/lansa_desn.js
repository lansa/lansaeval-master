window.LANSA.addSrc("desn",function(d,c,a){a.Raa={daa:0,dZ:1,m4a:16,Y3a:32};a.uod={bN:0};c.g1b=function(){b.H.call(this);this.OT=[];this.dP=null};var b=c.q(c.g1b,c.Hd);b.nb=function(){this.OT=null;b.j.nb.call(this)};b.R=function(){b.j.R.call(this);this.iob(null);this.RZc()};b.iob=function(b){this.dP!=b&&(null!=this.dP&&this.dP.Ba(this,this.XGb),this.dP=b,null!=this.dP&&this.dP.Fa(this,this.XGb),this.k(a.g.h))};b.fBc=function(){return this.dP};b.KPb=function(a){var b=this.dP;null==b&&a.K()&&a.K().gv&&
(b=a.K().gv.KPb(a.K()));return b};b.Xvd=function(){return this.OT};b.Wvd=function(){return this.OT};b.zDc=function(){d.Db("PRIM_PCOL");var a=new c.h1b(this);return new c.f0(a)};b.Wq=function(a){var b=!1,c=null,d=null,h=null,f=null,e=a.Qa();a=a.Ia();for(var q=99999999,g=99999999,p=0,v=[],u=[],C=this.OT,S=null;p<C.length&&null!=(S=C[p]);p++)v.push(S),u.push(S);v.sort(this.tuc);u.sort(this.suc);for(p=0;p<v.length&&null!=(d=v[p]);p++)if(d.adb()){C=d.ad-e;if(null!=c)if(0<=q&&C>q)continue;else if(0>q&&
C<q)continue;c=d;q=C}0>q&&(c=null);v=u;for(p=0;p<v.length&&null!=(f=v[p]);p++)if(f.IRb()){d=f.ld-a;if(null!=h)if(0<=g&&d>g)continue;else if(0>g&&d<g)continue;h=f;g=d}0>g&&(h=null);(c=c?c:h)&&h&&c!=h&&h.adb()&&h.Qa()<c.Qa()&&(c=h);this.dP!=c&&(this.iob(c),b=!0);return b};b.tuc=function(a,b){var c=b.Qa();return a.Qa()==c?0:a.Qa()<c?-1:1};b.suc=function(a,b){var c=b.Ia();return a.Ia()==c?0:a.Ia()<c?-1:1};b.aNc=function(a){a.gv=this;this.OT.push(a);a.Fa(this,this.Puc)};b.s9b=function(b){b.gv=null;this.OT.splice(this.OT.indexOf(b),
1);b.Ba(this);this.k(a.g.h)};b.RZc=function(){for(;0<this.OT.length;)this.s9b(this.OT[0])};b.Puc=function(){this.k(a.g.h)};b.XGb=function(b,c){switch(c.Za){case a.g.wb:case a.g.Tb:this.iob(null)}};d.xd(c.g1b,"PRIM_DESN",{Pa:{Designs:{a:b.zDc},ActiveDesign:{a:b.fBc}}});c.f1b=function(){p.H.call(this);this.gv=null;this.Eva=a.Raa.daa;this.ld=this.ad=0};var p=c.q(c.f1b,c.Hd);p.nb=function(){p.j.nb.call(this)};p.R=function(){p.j.R.call(this);this.z7(null)};p.tFb=function(a){this.Eva|=a};p.sFb=function(a){this.Eva&=
~a};p.W$a=function(){return this.gv};p.z7=function(b){this.gv!=b&&(null!=this.gv&&this.gv.s9b(this),null!=b&&b.aNc(this),this.k(a.g.h))};p.I8c=function(){!1==this.Gfb()&&(this.sFb(a.Raa.m4a),this.k(a.g.h))};p.Gfb=function(){return!1==this.adb()};p.Wb=function(b){if(this.Gfb()||this.ad!=b)this.tFb(a.Raa.m4a),this.ad=b,this.k(a.g.h)};p.Qa=function(){return this.ad};p.adb=function(){return 0!=(this.Eva&a.Raa.m4a)?!0:!1};p.tQd=function(){!1==this.ZTb()&&(this.sFb(a.Raa.Y3a),this.k(a.g.h))};p.ZTb=function(){return!1==
this.IRb()};p.lc=function(b){if(this.ZTb()||this.ld!=b)this.tFb(a.Raa.Y3a),this.ld=b,this.k(a.g.h)};p.Ia=function(){return this.ld};p.IRb=function(){return 0!=(this.Eva&a.Raa.Y3a)?!0:!1};p.qeb=function(){return this.gv&&this.gv&&this.gv.dP==this};d.mb(c.f1b,"PRIM_DESN","Design",{Pa:{DesignManager:{a:p.W$a,f:p.z7},Width:{a:function(){return this.Gfb()?d.Tc:this.Qa()},f:function(a){a===d.Tc?this.I8c():this.Wb(d.v(a))}}}});c.h1b=function(a){u.H.call(this);this.gv=a};var u=c.q(c.h1b,c.Gda);u.zc=function(){return this.gv.OT.length};
u.Fx=function(a){return this.gv.OT[a]}});
