window.LANSA.addSrc("desn",function(e,c,a){a.p9={I8:0,TW:1,z_a:16,k_a:32};a.njd={PK:0};c.JXb=function(){b.w.call(this);this.wR=[];this.PM=null};var b=c.u(c.JXb,c.jd);b.vb=function(){this.wR=null;b.j.vb.call(this)};b.R=function(){b.j.R.call(this);this.Mjb(null);this.tUc()};b.Mjb=function(b){this.PM!=b&&(null!=this.PM&&this.PM.Aa(this,this.vCb),this.PM=b,null!=this.PM&&this.PM.Ca(this,this.vCb),this.m(a.f.i))};b.ewc=function(){return this.PM};b.oLb=function(a){var b=this.PM;null==b&&a.U()&&a.U().Qt&&
(b=a.U().Qt.oLb(a.U()));return b};b.Lqd=function(){return this.wR};b.Kqd=function(){return this.wR};b.xyc=function(){e.Hb("PRIM_PCOL");var a=new c.KXb(this);return new c.TY(a)};b.Ep=function(a){var b=!1,c=null,e=null,k=null,p=null,d=a.Xa();a=a.Qa();for(var g=99999999,n=99999999,q=0,s=[],w=[],J=this.wR,D=null;q<J.length&&null!=(D=J[q]);q++)s.push(D),w.push(D);s.sort(this.Hpc);w.sort(this.Gpc);for(q=0;q<s.length&&null!=(e=s[q]);q++)if(e.I9a()){J=e.Uc-d;if(null!=c)if(0<=g&&J>g)continue;else if(0>g&&
J<g)continue;c=e;g=J}0>g&&(c=null);s=w;for(q=0;q<s.length&&null!=(p=s[q]);q++)if(p.oNb()){e=p.ed-a;if(null!=k)if(0<=n&&e>n)continue;else if(0>n&&e<n)continue;k=p;n=e}0>n&&(k=null);(c=c?c:k)&&k&&c!=k&&k.I9a()&&k.Xa()<c.Xa()&&(c=k);this.PM!=c&&(this.Mjb(c),b=!0);return b};b.Hpc=function(a,b){var c=b.Xa();return a.Xa()==c?0:a.Xa()<c?-1:1};b.Gpc=function(a,b){var c=b.Qa();return a.Qa()==c?0:a.Qa()<c?-1:1};b.FHc=function(a){a.Qt=this;this.wR.push(a);a.Ca(this,this.dqc)};b.L4b=function(b){b.Qt=null;this.wR.splice(this.wR.indexOf(b),
1);b.Aa(this);this.m(a.f.i)};b.tUc=function(){for(;0<this.wR.length;)this.L4b(this.wR[0])};b.dqc=function(){this.m(a.f.i)};b.vCb=function(b,c){switch(c.Ya){case a.f.qb:case a.f.Ob:this.Mjb(null)}};e.ad(c.JXb,"PRIM_DESN",{Oa:{Designs:{a:b.xyc},ActiveDesign:{a:b.ewc}}});c.IXb=function(){n.w.call(this);this.Qt=null;this.Qra=a.p9.I8;this.ed=this.Uc=0};var n=c.u(c.IXb,c.jd);n.vb=function(){n.j.vb.call(this)};n.R=function(){n.j.R.call(this);this.t5(null)};n.RAb=function(a){this.Qra|=a};n.QAb=function(a){this.Qra&=
~a};n.o6a=function(){return this.Qt};n.t5=function(b){this.Qt!=b&&(null!=this.Qt&&this.Qt.L4b(this),null!=b&&b.FHc(this),this.m(a.f.i))};n.q3c=function(){!1==this.nbb()&&(this.QAb(a.p9.z_a),this.m(a.f.i))};n.nbb=function(){return!1==this.I9a()};n.ac=function(b){if(this.nbb()||this.Uc!=b)this.RAb(a.p9.z_a),this.Uc=b,this.m(a.f.i)};n.Xa=function(){return this.Uc};n.I9a=function(){return 0!=(this.Qra&a.p9.z_a)?!0:!1};n.XKd=function(){!1==this.wPb()&&(this.QAb(a.p9.k_a),this.m(a.f.i))};n.wPb=function(){return!1==
this.oNb()};n.yc=function(b){if(this.wPb()||this.ed!=b)this.RAb(a.p9.k_a),this.ed=b,this.m(a.f.i)};n.Qa=function(){return this.ed};n.oNb=function(){return 0!=(this.Qra&a.p9.k_a)?!0:!1};n.Z$a=function(){return this.Qt&&this.Qt&&this.Qt.PM==this};e.ib(c.IXb,"PRIM_DESN","Design",{Oa:{DesignManager:{a:n.o6a,g:n.t5},Width:{a:function(){return this.nbb()?e.Ld:this.Xa()},g:function(a){a===e.Ld?this.q3c():this.ac(e.L(a))}}}});c.KXb=function(a){q.w.call(this);this.Qt=a};var q=c.u(c.KXb,c.lba);q.lc=function(){return this.Qt.wR.length};
q.ww=function(a){return this.Qt.wR[a]}});
