window.LANSA.addSrc("stpg",function(e,c,a,b){a.WLa={HGc:1,i$a:1};c.iYb=function(){m.w.call(this);this.fvb=a.WLa.HGc;this.JXa=!0;this.Kra=a.Z.EAa;this.Rb=null};var m=c.u(c.iYb,c.wd);m.U=function(){this.Na(null);m.j.U.call(this)};m.ke=function(){return this.JXa};m.Vf=function(b){this.JXa!=b&&(this.JXa=b,this.l(a.f.h))};m.Kja=function(){return 0!=(this.fvb&a.WLa.i$a)?!0:!1};m.V6b=function(b){b!=this.Kja()&&(this.fvb=this.fvb&~a.WLa.i$a|(b?a.WLa.i$a:0),this.l(a.f.h))};m.Ksd=function(){return this.Kra};
m.l0c=function(b){this.Kra!=b&&(this.Kra=b,this.l(a.f.h))};m.M=function(){return this.Rb};m.Na=function(c){if(this.Rb!=c){var e=b.W().wfc;this.Rb&&(e.splice(e.indexOf(this),1),this.Rb.Da(this,this.b$));if(this.Rb=c)e.push(this),this.Rb.Ea(this,this.b$);this.l(a.f.h)}};m.vvc=function(){this.Ga(a.G.ARc)};b.jYb=function(c,e){for(var m=!1,g,q=b.W().wfc,f=0;f<q.length&&null!=(g=q[f]);f++)if(g.Rb==c&&!0==g.JXa&&g.Kra!=a.Z.EAa&&e==g.Kra){g.vvc();m=!0;break}return m};m.b$=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.Na(null)}};
e.kd(c.iYb,"PRIM_STPG",{Oa:{ShortCut:{a:function(){return e.ta(this.Kra,a.Z.v)},g:function(b){this.l0c(e.ra(b,a.Z.v))}},Enabled:{a:m.ke,g:function(a){this.Vf(e.za(a))}},Parent:{a:m.M,g:m.Na}}})});
