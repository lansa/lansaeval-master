﻿LANSA.addComponent({id:"XDEMO_31",nm:"xDemoWebDataDepartment",ot:"rp",tp:"Reusable Part",de:"Department Data Object",tl:14020003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F2:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{ID:{da:"r"},Description:{da:"r"},Employees:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_31",Fd);var C0=this.cA("GDATA","XDEMO_30");if((C0!=null)&&(C0.iI()==false)){C0.iC();}this.aLF({"XDEPTMENT":f.F1,"XDEPTDESC":f.F2});}});cO.mthGETEMPLOYEES=function(){var f=this.FLD.XDEMO_31,m=this.REF,r=l.pR(this,cO,"GetEmployees",16);
var P0=r.cPD("PROPERTY");r.ln=16;{r.ln=20;P0=r.sR("P0",l.cC("PRIM_ACOL").tB([ti1]));r.ln=23;{var l1=m.GDATA.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=24;if(l.s.ne(EMPLOYEE.getDEPARTMENTCODE(),f.F1.get())){continue;}r.ln=26;P0.mthINSERT(EMPLOYEE);r.ln=28;}l1.end();r.dR("EMPLOYEE");}}r.ln=30;return r.rR(P0);};cO.getID=function(){var f=this.FLD.XDEMO_31;return f.F1.get();};cO.getDESCRIPTION=function(){var f=this.FLD.XDEMO_31;return f.F2.get();};cO.getEMPLOYEES=function()
{return this.mthGETEMPLOYEES();};var ti1={p:"XDEMO_32"};},{rc:["XDEMO_30"],rp:["PRIM_OBJT"]});