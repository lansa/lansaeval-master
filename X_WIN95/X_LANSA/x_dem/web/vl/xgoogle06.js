LANSA.addComponent({id:"XGOOGLE06",nm:"xGoogleBasicChart",ot:"ww",tp:"Widget",pt:"ap",de:"Basic Google Pie or Bar Chart",tl:14000101,cl:15000003},function(l,oI,u){var fF=function(wP){wP.fireItemGotSelection=function(pIndex,pCaption,pValue){var eP=l.ePs();eP.aI("INDEX",pIndex);eP.aS("CAPTION",pCaption);eP.aD("VALUE",pValue);l.fE(this,"ITEMGOTSELECTION",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
google.load( 'visualization', '1', { packages:["corechart","bar"], callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
this.m_DataTable = new google.visualization.DataTable();
this.m_DataTable.addColumn( 'string', 'Caption' );
this.m_DataTable.addColumn( 'number', 'Value' );
this.m_DrawCounter = 0;
this.m_ChartType = "PIE";
this.m_Bars = "vertical";
this.m_PieChart = null;
this.m_BarChar  = null;
this.m_BarColor = "#ffa726";
this.parentDiv = null;
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.parentDiv = parentDiv;
this.BarCharDiv = document.createElement('div');
this.BarCharDiv.style.height = "100%";
this.BarCharDiv.style.width = "100%";
this.BarCharDiv.style.display = "none";
this.parentDiv.appendChild(this.BarCharDiv);
this.PieCharDiv = document.createElement('div');
this.PieCharDiv.style.height = "100%";
this.PieCharDiv.style.width = "100%";
this.PieCharDiv.style.display = "none";
this.parentDiv.appendChild(this.PieCharDiv);
}
PROTOTYPE.onSizeChanged = function()
{
if (this.m_DrawCounter > 0) this.DrawChart();
}
PROTOTYPE.getChartType = function()
{
return this.m_ChartType;
}
PROTOTYPE.setChartType = function( strValue )
{
if (strValue.toUpperCase() == "PIE") this.m_ChartType = "PIE";
else this.m_ChartType = "BAR";
if (this.m_DrawCounter > 0) this.DrawChart();
}
PROTOTYPE.getBars = function()
{
return this.m_Bars;
}
PROTOTYPE.setBars = function( strValue )
{
this.m_Bars = strValue;
}
PROTOTYPE.getBarColor = function()
{
return this.m_BarColor;
}
PROTOTYPE.setBarColor = function( strValue )
{
this.m_BarColor = strValue;
}
PROTOTYPE.Add = function( decValue, strCaption )
{
this.m_DataTable.addRow( [ strCaption, decValue, ] );
}
PROTOTYPE.Clear = function()
{
this.m_DataTable.removeRows( 0, this.m_DataTable.getNumberOfRows() );
}
PROTOTYPE.DrawChart = function()
{
this.DrawChart();
}
PROTOTYPE.DrawChart = function()
{
this.m_DrawCounter += 1;
this.BarCharDiv.style.display = "none";
this.PieCharDiv.style.display = "none";
if (this.m_ChartType == "PIE")
{
this.PieCharDiv.style.display = "block";
if (this.m_PieChart == null)
{
this.m_PieChart = new google.visualization.PieChart( this.PieCharDiv );
this.AttachPieChartEvents();
}
this.m_PieChart.draw( this.m_DataTable,
{
title          : '',
legend         : 'none',
pieSliceText   : 'label',
backgroundColor: 'transparent',
colors:['#009688','#F44336','#03A9F4','#FFEB3B','#673AB7','#8BC34A','#FF9800','#E91E63','#3F51B5','#FFC107','#4CAF50','#9C27B0','#FF5722','#00BCD4','#CDDC39'],
});
}
else
{
this.BarCharDiv.style.display = "block";
if (this.m_BarChart == null)
{
this.m_BarChart = new google.charts.Bar( this.BarCharDiv );
this.AttachBarChartEvents();
}
this.m_BarChart.draw( this.m_DataTable, google.charts.Bar.convertOptions(
{
colors: [ this.m_BarColor ],
legend: { position: "none" },
bars: this.m_Bars,
backgroundColor: 'transparent', chartArea:{ backgroundColor: 'transparent' }
}));
}
}
PROTOTYPE.AttachPieChartEvents = function()
{
var pThis = this;
google.visualization.events.addListener( this.m_PieChart, 'select', function()
{
var item = pThis.m_PieChart.getSelection()[0];
if ( item )
{
pThis.fireItemGotSelection( ( item.row + 1 ), pThis.m_DataTable.getValue( item.row, 0 ), pThis.m_DataTable.getValue( item.row, 1 ) );
}
});
}
PROTOTYPE.AttachBarChartEvents = function()
{
var pThis = this;
google.visualization.events.addListener( this.m_BarChart, 'select', function()
{
var item = pThis.m_BarChart.getSelection()[0];
if ( item )
{
pThis.fireItemGotSelection( ( item.row + 1 ), pThis.m_DataTable.getValue( item.row, 0 ), pThis.m_DataTable.getValue( item.row, 1 ) );
}
});
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE06",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setCHARTTYPE("P");this.setBARS("vertical");this.setBARCOLOR("#ffa726");}});cO.getCHARTTYPE=function(){return l.tS(this.get("ChartType"));};cO.setCHARTTYPE=function(v){this.set("ChartType",l.tS(v));};cO.getBARS=function(){return l.tS(this.get("Bars"));};cO.setBARS=function(v){this.set("Bars",l.tS(v));};cO.getBARCOLOR=function(){return l.tS(this.get("BarColor"));
};cO.setBARCOLOR=function(v){this.set("BarColor",l.tS(v));};cO.mthADD=function(P0,P1){this.invoke("Add",[l.tN(P0),l.tS(P1)]);};cO.mthCLEAR=function(){this.invoke("Clear");};cO.mthDRAWCHART=function(){this.invoke("DrawChart");};},{rp:["PRIM_WDGT.Control"]});