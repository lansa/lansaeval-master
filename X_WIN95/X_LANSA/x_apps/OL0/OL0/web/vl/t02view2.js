// --------------------
// -- View: T02VIEW2 --
// --------------------
LANSA.addComponent(
{
   id: "T02VIEW2", 
   nm: "T02View2", 
   ot: "wv", 
   tp: "View", 
   de: "View2", 
   tl: 14020003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_VIEW", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout1Row1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUT1ROW1 = this.createReference( "LAYOUT1ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Layout1Column1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUT1COLUMN1 = this.createReference( "LAYOUT1COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Column(#Layout1Column1) Manage(#Label) Parent(#Layout1) Row(#Layout1Row1)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#Label) Caption('Test KL 2 View2') Displayposition(1) Height(450) Iconheight(0) Left(0) Parent(#COM_OWNER) Tabposition(1) Top(0) Width(300) Captionalignment(Center) Themedrawstyle('Heading1')
         //
         var LABEL = this.createReference( "LABEL", "PRIM_MD", "Label" );

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUT1ROW1 --
         // -----------------------------
         LAYOUT1ROW1.setDisplayPosition( 1 );
         LAYOUT1ROW1.setParent( LAYOUT1 );
         LAYOUT1ROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUT1COLUMN1 --
         // --------------------------------
         LAYOUT1COLUMN1.setDisplayPosition( 1 );
         LAYOUT1COLUMN1.setParent( LAYOUT1 );
         LAYOUT1COLUMN1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM1 --
         // ------------------------------
         LAYOUT1ITEM1.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM1.setManage( LABEL );
         LAYOUT1ITEM1.setParent( LAYOUT1 );
         LAYOUT1ITEM1.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM1.initialize();

         // -----------------------
         // -- Initialize #LABEL --
         // -----------------------
         LABEL.setCaption( "Test KL 2 View2" );
         LABEL.setDisplayPosition( 1 );
         LABEL.setHeight( 450 );
         LABEL.setIconHeight( 0 );
         LABEL.setLeft( 0 );
         LABEL.setParent( this );
         LABEL.setTabPosition( 1 );
         LABEL.setTop( 0 );
         LABEL.setWidth( 300 );
         LABEL.setCaptionAlignment( "CENTER" );
         LABEL.setThemeDrawStyle( "Heading1" );
         LABEL.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLayoutManager( LAYOUT1 );
         this.setCaption( "View2" );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_VIEW", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_MD.Label" ]
});

//# sourceURL=t02view2.js
