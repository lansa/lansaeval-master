// -----------------------
// -- Web Page: T02MAIN --
// -----------------------
LANSA.addComponent(
{
   id: "T02MAIN", 
   nm: "T02Main", 
   ot: "wp", 
   tp: "Web Page", 
   de: "LANSAEVAL2 App", 
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
      an: "PRIM_WEB", 

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
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn1) DisplayPosition(1) Parent(#LayoutMain) Units(Content) Width(220)
         //
         var LAYOUTMAINCOLUMN1 = this.createReference( "LAYOUTMAINCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn2) DisplayPosition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINCOLUMN2 = this.createReference( "LAYOUTMAINCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow1) DisplayPosition(1) Parent(#LayoutMain) Height(56) Units(Pixels)
         //
         var LAYOUTMAINROW1 = this.createReference( "LAYOUTMAINROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow2) DisplayPosition(2) Parent(#LayoutMain) Height(40) Units(Content)
         //
         var LAYOUTMAINROW2 = this.createReference( "LAYOUTMAINROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow3) DisplayPosition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINROW3 = this.createReference( "LAYOUTMAINROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Column(#LayoutMainColumn1) Manage(#AppBar) Parent(#LayoutMain) Row(#LayoutMainRow1) ColumnSpan(2)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem2) Column(#LayoutMainColumn1) Manage(#AppDrawer) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToHeight) RowSpan(2)
         //
         var LAYOUTMAINITEM2 = this.createReference( "LAYOUTMAINITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem4) Column(#LayoutMainColumn2) Manage(#SearchString) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToWidth) Alignment(TopCenter)
         //
         var LAYOUTMAINITEM4 = this.createReference( "LAYOUTMAINITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem3) Column(#LayoutMainColumn2) Manage(#ViewContainer) Parent(#LayoutMain) Row(#LayoutMainRow3)
         //
         var LAYOUTMAINITEM3 = this.createReference( "LAYOUTMAINITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppBar)
         //
         var LAYOUTAPPBAR = this.createReference( "LAYOUTAPPBAR", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppBarRow1) DisplayPosition(1) Parent(#LayoutAppBar)
         //
         var LAYOUTAPPBARROW1 = this.createReference( "LAYOUTAPPBARROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppBarColumn1) DisplayPosition(1) Parent(#LayoutAppBar)
         //
         var LAYOUTAPPBARCOLUMN1 = this.createReference( "LAYOUTAPPBARCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppBarItem1) Alignment(CenterRight) Column(#LayoutAppBarColumn1) Manage(#SearchIcon) Parent(#LayoutAppBar) Row(#LayoutAppBarRow1) Sizing(None)
         //
         var LAYOUTAPPBARITEM1 = this.createReference( "LAYOUTAPPBARITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWER = this.createReference( "LAYOUTAPPDRAWER", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppDrawerColumn1) DisplayPosition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERCOLUMN1 = this.createReference( "LAYOUTAPPDRAWERCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppDrawerRow1) DisplayPosition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERROW1 = this.createReference( "LAYOUTAPPDRAWERROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem1) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#ButtonEmployees) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM1 = this.createReference( "LAYOUTAPPDRAWERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem2) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#ButtonView2) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM2 = this.createReference( "LAYOUTAPPDRAWERITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem3) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#ButtonView3) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM3 = this.createReference( "LAYOUTAPPDRAWERITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem4) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#ButtonSettings) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM4 = this.createReference( "LAYOUTAPPDRAWERITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem5) Alignment(TopCenter) Column(#LayoutAppDrawerColumn1) Flow(Down) Manage(#ButtonSignOut) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1) Sizing(FitToWidth)
         //
         var LAYOUTAPPDRAWERITEM5 = this.createReference( "LAYOUTAPPDRAWERITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppBar) Name(#AppBar) DisplayPosition(1) Parent(#COM_OWNER) TabPosition(1) TabStop(False) Width(1200) ThemeDrawStyle('Heading1') Caption('LANSAEVAL2 App') CaptionMarginBottom(0) CaptionMarginRight(0) CaptionMarginTop(0) Icon("menu") LayoutManager(#LayoutAppBar)
         //
         var APPBAR = this.createReference( "APPBAR", "PRIM_MD", "AppBar" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#SearchIcon) DisplayPosition(1) Icon('search') Left(1152) Parent(#AppBar) TabPosition(1) TabStop(False) Top(4)
         //
         var SEARCHICON = this.createReference( "SEARCHICON", "PRIM_MD", "Icon" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppDrawer) Name(#AppDrawer) DisplayPosition(2) Parent(#COM_OWNER) TabPosition(2) TabStop(False) Top(56) Height(744) LayoutManager(#LayoutAppDrawer) ThemeDrawStyle('MediumTitle') Width(220)
         //
         var APPDRAWER = this.createReference( "APPDRAWER", "PRIM_MD", "AppDrawer" );

         //
         // DEFINE_COM Class(#PRIM_MD.FlatButton) Name(#ButtonEmployees) Caption('Employees') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(1) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(1) TabStop(False) Top(0) Width(219) Height(48) Icon('view_quilt')
         //
         var BUTTONEMPLOYEES = this.createReference( "BUTTONEMPLOYEES", "PRIM_MD", "FlatButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.FlatButton) Name(#ButtonView2) Caption('View2') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(2) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(2) TabStop(False) Top(0) Width(219) Height(48) Icon('view_quilt')
         //
         var BUTTONVIEW2 = this.createReference( "BUTTONVIEW2", "PRIM_MD", "FlatButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.FlatButton) Name(#ButtonView3) Caption('View3') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(3) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(3) TabStop(False) Top(0) Width(219) Height(48) Icon('view_quilt')
         //
         var BUTTONVIEW3 = this.createReference( "BUTTONVIEW3", "PRIM_MD", "FlatButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.FlatButton) Name(#ButtonSettings) Caption('Settings') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(4) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(4) TabStop(False) Top(192) Width(219) Height(48) Icon('settings') ThemeDrawStyle('TopDivider')
         //
         var BUTTONSETTINGS = this.createReference( "BUTTONSETTINGS", "PRIM_MD", "FlatButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.FlatButton) Name(#ButtonSignOut) Caption('Sign Out') CaptionAlignment(CenterLeft) CaptionMarginLeft(16) DisplayPosition(5) IconMarginLeft(16) Left(0) Parent(#AppDrawer) TabPosition(5) TabStop(False) Top(192) Width(219) Height(48) Icon('exit_to_app') 
         //
         var BUTTONSIGNOUT = this.createReference( "BUTTONSIGNOUT", "PRIM_MD", "FlatButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.Edit) Name(#SearchString) Appearance(None) DisplayPosition(4) Height(40) HelperPosition(None) CaptionPosition(None) Left(220) Parent(#COM_OWNER) TabPosition(4) Top(56) Width(980) Icon('search') Placeholder('Search') ThemeDrawStyle('BottomDivider') Visible(False)
         //
         var SEARCHSTRING = this.createReference( "SEARCHSTRING", "PRIM_MD", "Edit" );

         //
         // DEFINE_COM Class(#PRIM_MD.ViewContainer) Name(#ViewContainer) DisplayPosition(3) Left(220) Parent(#COM_OWNER) TabPosition(3) TabStop(False) Top(56) Height(744) Width(980)
         //
         var VIEWCONTAINER = this.createReference( "VIEWCONTAINER", "PRIM_MD", "ViewContainer" );

         //
         // DEFINE_COM Class(#T02Employees) Name(#Employees) Height(744) Left(326) Parent(#ViewContainer) TabStop(False) Width(980) DisplayPosition(1) TabPosition(1)
         //
         var EMPLOYEES = this.createReference( "EMPLOYEES", "T02EMPLOY" );

         //
         // DEFINE_COM Class(#T02View2) Name(#View2) Height(744) Left(326) Parent(#ViewContainer) TabStop(False) Width(980) DisplayPosition(2) TabPosition(2)
         //
         var VIEW2 = this.createReference( "VIEW2", "T02VIEW2" );

         //
         // DEFINE_COM Class(#T02View3) Name(#View3) Height(744) Left(326) Parent(#ViewContainer) TabStop(False) Width(980) DisplayPosition(3) TabPosition(3)
         //
         var VIEW3 = this.createReference( "VIEW3", "T02VIEW3" );

         //
         // DEFINE_COM Class(#T02Settings) Name(#Settings) DisplayPosition(4) Parent(#ViewContainer) Caption('Settings') Height(412) Width(920) Left(612) TabPosition(4)
         //
         var SETTINGS = this.createReference( "SETTINGS", "T02SETTIN" );

         //
         // DEFINE_COM Class(#T02SignIn) Name(#SignIn)
         //
         var SIGNIN = this.createReference( "SIGNIN", "T02SIGNIN" );

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN1 --
         // -----------------------------------
         LAYOUTMAINCOLUMN1.setDisplayPosition( 1 );
         LAYOUTMAINCOLUMN1.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN1.setUnits( "CONTENT" );
         LAYOUTMAINCOLUMN1.setWidth( 220 );
         LAYOUTMAINCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN2 --
         // -----------------------------------
         LAYOUTMAINCOLUMN2.setDisplayPosition( 2 );
         LAYOUTMAINCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW1 --
         // --------------------------------
         LAYOUTMAINROW1.setDisplayPosition( 1 );
         LAYOUTMAINROW1.setParent( LAYOUTMAIN );
         LAYOUTMAINROW1.setHeight( 56 );
         LAYOUTMAINROW1.setUnits( "PIXELS" );
         LAYOUTMAINROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW2 --
         // --------------------------------
         LAYOUTMAINROW2.setDisplayPosition( 2 );
         LAYOUTMAINROW2.setParent( LAYOUTMAIN );
         LAYOUTMAINROW2.setHeight( 40 );
         LAYOUTMAINROW2.setUnits( "CONTENT" );
         LAYOUTMAINROW2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW3 --
         // --------------------------------
         LAYOUTMAINROW3.setDisplayPosition( 2 );
         LAYOUTMAINROW3.setParent( LAYOUTMAIN );
         LAYOUTMAINROW3.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM1 --
         // ---------------------------------
         LAYOUTMAINITEM1.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM1.setManage( APPBAR );
         LAYOUTMAINITEM1.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM1.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM1.setColumnSpan( 2 );
         LAYOUTMAINITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM2 --
         // ---------------------------------
         LAYOUTMAINITEM2.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM2.setManage( APPDRAWER );
         LAYOUTMAINITEM2.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM2.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM2.setSizing( "FITTOHEIGHT" );
         LAYOUTMAINITEM2.setRowSpan( 2 );
         LAYOUTMAINITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM4 --
         // ---------------------------------
         LAYOUTMAINITEM4.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM4.setManage( SEARCHSTRING );
         LAYOUTMAINITEM4.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM4.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTMAINITEM4.setAlignment( "TOPCENTER" );
         LAYOUTMAINITEM4.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM3 --
         // ---------------------------------
         LAYOUTMAINITEM3.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM3.setManage( VIEWCONTAINER );
         LAYOUTMAINITEM3.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM3.setRow( LAYOUTMAINROW3 );
         LAYOUTMAINITEM3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTAPPBAR --
         // ------------------------------
         LAYOUTAPPBAR.initialize();

         // ----------------------------------
         // -- Initialize #LAYOUTAPPBARROW1 --
         // ----------------------------------
         LAYOUTAPPBARROW1.setDisplayPosition( 1 );
         LAYOUTAPPBARROW1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARROW1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPBARCOLUMN1 --
         // -------------------------------------
         LAYOUTAPPBARCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPBARCOLUMN1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTAPPBARITEM1 --
         // -----------------------------------
         LAYOUTAPPBARITEM1.setAlignment( "CENTERRIGHT" );
         LAYOUTAPPBARITEM1.setColumn( LAYOUTAPPBARCOLUMN1 );
         LAYOUTAPPBARITEM1.setManage( SEARCHICON );
         LAYOUTAPPBARITEM1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARITEM1.setRow( LAYOUTAPPBARROW1 );
         LAYOUTAPPBARITEM1.setSizing( "NONE" );
         LAYOUTAPPBARITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTAPPDRAWER --
         // ---------------------------------
         LAYOUTAPPDRAWER.initialize();

         // ----------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERCOLUMN1 --
         // ----------------------------------------
         LAYOUTAPPDRAWERCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERCOLUMN1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERCOLUMN1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERROW1 --
         // -------------------------------------
         LAYOUTAPPDRAWERROW1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERROW1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERROW1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM1 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM1.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM1.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM1.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM1.setManage( BUTTONEMPLOYEES );
         LAYOUTAPPDRAWERITEM1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM1.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM2 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM2.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM2.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM2.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM2.setManage( BUTTONVIEW2 );
         LAYOUTAPPDRAWERITEM2.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM2.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM2.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM3 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM3.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM3.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM3.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM3.setManage( BUTTONVIEW3 );
         LAYOUTAPPDRAWERITEM3.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM3.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM3.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM4 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM4.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM4.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM4.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM4.setManage( BUTTONSETTINGS );
         LAYOUTAPPDRAWERITEM4.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM4.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM4.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM5 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM5.setAlignment( "TOPCENTER" );
         LAYOUTAPPDRAWERITEM5.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM5.setFlow( "DOWN" );
         LAYOUTAPPDRAWERITEM5.setManage( BUTTONSIGNOUT );
         LAYOUTAPPDRAWERITEM5.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM5.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTAPPDRAWERITEM5.initialize();

         // ------------------------
         // -- Initialize #APPBAR --
         // ------------------------
         APPBAR.setDisplayPosition( 1 );
         APPBAR.setParent( this );
         APPBAR.setTabPosition( 1 );
         APPBAR.setTabStop( false );
         APPBAR.setWidth( 1200 );
         APPBAR.setThemeDrawStyle( "Heading1" );
         APPBAR.setCaption( "LANSAEVAL2 App" );
         APPBAR.setCaptionMarginBottom( 0 );
         APPBAR.setCaptionMarginRight( 0 );
         APPBAR.setCaptionMarginTop( 0 );
         APPBAR.setIcon( "menu" );
         APPBAR.setLayoutManager( LAYOUTAPPBAR );
         APPBAR.initialize();

         // ----------------------------
         // -- Initialize #SEARCHICON --
         // ----------------------------
         SEARCHICON.setDisplayPosition( 1 );
         SEARCHICON.setIcon( "search" );
         SEARCHICON.setLeft( 1152 );
         SEARCHICON.setParent( APPBAR );
         SEARCHICON.setTabPosition( 1 );
         SEARCHICON.setTabStop( false );
         SEARCHICON.setTop( 4 );
         SEARCHICON.initialize();

         // ---------------------------
         // -- Initialize #APPDRAWER --
         // ---------------------------
         APPDRAWER.setDisplayPosition( 2 );
         APPDRAWER.setParent( this );
         APPDRAWER.setTabPosition( 2 );
         APPDRAWER.setTabStop( false );
         APPDRAWER.setTop( 56 );
         APPDRAWER.setHeight( 744 );
         APPDRAWER.setLayoutManager( LAYOUTAPPDRAWER );
         APPDRAWER.setThemeDrawStyle( "MediumTitle" );
         APPDRAWER.setWidth( 220 );
         APPDRAWER.initialize();

         // ---------------------------------
         // -- Initialize #BUTTONEMPLOYEES --
         // ---------------------------------
         BUTTONEMPLOYEES.setCaption( "Employees" );
         BUTTONEMPLOYEES.setCaptionAlignment( "CENTERLEFT" );
         BUTTONEMPLOYEES.setCaptionMarginLeft( 16 );
         BUTTONEMPLOYEES.setDisplayPosition( 1 );
         BUTTONEMPLOYEES.setIconMarginLeft( 16 );
         BUTTONEMPLOYEES.setLeft( 0 );
         BUTTONEMPLOYEES.setParent( APPDRAWER );
         BUTTONEMPLOYEES.setTabPosition( 1 );
         BUTTONEMPLOYEES.setTabStop( false );
         BUTTONEMPLOYEES.setTop( 0 );
         BUTTONEMPLOYEES.setWidth( 219 );
         BUTTONEMPLOYEES.setHeight( 48 );
         BUTTONEMPLOYEES.setIcon( "view_quilt" );
         BUTTONEMPLOYEES.initialize();

         // -----------------------------
         // -- Initialize #BUTTONVIEW2 --
         // -----------------------------
         BUTTONVIEW2.setCaption( "View2" );
         BUTTONVIEW2.setCaptionAlignment( "CENTERLEFT" );
         BUTTONVIEW2.setCaptionMarginLeft( 16 );
         BUTTONVIEW2.setDisplayPosition( 2 );
         BUTTONVIEW2.setIconMarginLeft( 16 );
         BUTTONVIEW2.setLeft( 0 );
         BUTTONVIEW2.setParent( APPDRAWER );
         BUTTONVIEW2.setTabPosition( 2 );
         BUTTONVIEW2.setTabStop( false );
         BUTTONVIEW2.setTop( 0 );
         BUTTONVIEW2.setWidth( 219 );
         BUTTONVIEW2.setHeight( 48 );
         BUTTONVIEW2.setIcon( "view_quilt" );
         BUTTONVIEW2.initialize();

         // -----------------------------
         // -- Initialize #BUTTONVIEW3 --
         // -----------------------------
         BUTTONVIEW3.setCaption( "View3" );
         BUTTONVIEW3.setCaptionAlignment( "CENTERLEFT" );
         BUTTONVIEW3.setCaptionMarginLeft( 16 );
         BUTTONVIEW3.setDisplayPosition( 3 );
         BUTTONVIEW3.setIconMarginLeft( 16 );
         BUTTONVIEW3.setLeft( 0 );
         BUTTONVIEW3.setParent( APPDRAWER );
         BUTTONVIEW3.setTabPosition( 3 );
         BUTTONVIEW3.setTabStop( false );
         BUTTONVIEW3.setTop( 0 );
         BUTTONVIEW3.setWidth( 219 );
         BUTTONVIEW3.setHeight( 48 );
         BUTTONVIEW3.setIcon( "view_quilt" );
         BUTTONVIEW3.initialize();

         // --------------------------------
         // -- Initialize #BUTTONSETTINGS --
         // --------------------------------
         BUTTONSETTINGS.setCaption( "Settings" );
         BUTTONSETTINGS.setCaptionAlignment( "CENTERLEFT" );
         BUTTONSETTINGS.setCaptionMarginLeft( 16 );
         BUTTONSETTINGS.setDisplayPosition( 4 );
         BUTTONSETTINGS.setIconMarginLeft( 16 );
         BUTTONSETTINGS.setLeft( 0 );
         BUTTONSETTINGS.setParent( APPDRAWER );
         BUTTONSETTINGS.setTabPosition( 4 );
         BUTTONSETTINGS.setTabStop( false );
         BUTTONSETTINGS.setTop( 192 );
         BUTTONSETTINGS.setWidth( 219 );
         BUTTONSETTINGS.setHeight( 48 );
         BUTTONSETTINGS.setIcon( "settings" );
         BUTTONSETTINGS.setThemeDrawStyle( "TopDivider" );
         BUTTONSETTINGS.initialize();

         // -------------------------------
         // -- Initialize #BUTTONSIGNOUT --
         // -------------------------------
         BUTTONSIGNOUT.setCaption( "Sign Out" );
         BUTTONSIGNOUT.setCaptionAlignment( "CENTERLEFT" );
         BUTTONSIGNOUT.setCaptionMarginLeft( 16 );
         BUTTONSIGNOUT.setDisplayPosition( 5 );
         BUTTONSIGNOUT.setIconMarginLeft( 16 );
         BUTTONSIGNOUT.setLeft( 0 );
         BUTTONSIGNOUT.setParent( APPDRAWER );
         BUTTONSIGNOUT.setTabPosition( 5 );
         BUTTONSIGNOUT.setTabStop( false );
         BUTTONSIGNOUT.setTop( 192 );
         BUTTONSIGNOUT.setWidth( 219 );
         BUTTONSIGNOUT.setHeight( 48 );
         BUTTONSIGNOUT.setIcon( "exit_to_app" );
         BUTTONSIGNOUT.initialize();

         // ------------------------------
         // -- Initialize #SEARCHSTRING --
         // ------------------------------
         SEARCHSTRING.setAppearance( "NONE" );
         SEARCHSTRING.setDisplayPosition( 4 );
         SEARCHSTRING.setHeight( 40 );
         SEARCHSTRING.setHelperPosition( "NONE" );
         SEARCHSTRING.setCaptionPosition( "NONE" );
         SEARCHSTRING.setLeft( 220 );
         SEARCHSTRING.setParent( this );
         SEARCHSTRING.setTabPosition( 4 );
         SEARCHSTRING.setTop( 56 );
         SEARCHSTRING.setWidth( 980 );
         SEARCHSTRING.setIcon( "search" );
         SEARCHSTRING.setPlaceholder( "Search" );
         SEARCHSTRING.setThemeDrawStyle( "BottomDivider" );
         SEARCHSTRING.setVisible( false );
         SEARCHSTRING.initialize();

         // -------------------------------
         // -- Initialize #VIEWCONTAINER --
         // -------------------------------
         VIEWCONTAINER.setDisplayPosition( 3 );
         VIEWCONTAINER.setLeft( 220 );
         VIEWCONTAINER.setParent( this );
         VIEWCONTAINER.setTabPosition( 3 );
         VIEWCONTAINER.setTabStop( false );
         VIEWCONTAINER.setTop( 56 );
         VIEWCONTAINER.setHeight( 744 );
         VIEWCONTAINER.setWidth( 980 );
         VIEWCONTAINER.initialize();

         // ---------------------------
         // -- Initialize #EMPLOYEES --
         // ---------------------------
         EMPLOYEES.setHeight( 744 );
         EMPLOYEES.setLeft( 326 );
         EMPLOYEES.setParent( VIEWCONTAINER );
         EMPLOYEES.setTabStop( false );
         EMPLOYEES.setWidth( 980 );
         EMPLOYEES.setDisplayPosition( 1 );
         EMPLOYEES.setTabPosition( 1 );
         EMPLOYEES.initialize();

         // -----------------------
         // -- Initialize #VIEW2 --
         // -----------------------
         VIEW2.setHeight( 744 );
         VIEW2.setLeft( 326 );
         VIEW2.setParent( VIEWCONTAINER );
         VIEW2.setTabStop( false );
         VIEW2.setWidth( 980 );
         VIEW2.setDisplayPosition( 2 );
         VIEW2.setTabPosition( 2 );
         VIEW2.initialize();

         // -----------------------
         // -- Initialize #VIEW3 --
         // -----------------------
         VIEW3.setHeight( 744 );
         VIEW3.setLeft( 326 );
         VIEW3.setParent( VIEWCONTAINER );
         VIEW3.setTabStop( false );
         VIEW3.setWidth( 980 );
         VIEW3.setDisplayPosition( 3 );
         VIEW3.setTabPosition( 3 );
         VIEW3.initialize();

         // --------------------------
         // -- Initialize #SETTINGS --
         // --------------------------
         SETTINGS.setDisplayPosition( 4 );
         SETTINGS.setParent( VIEWCONTAINER );
         SETTINGS.setCaption( "Settings" );
         SETTINGS.setHeight( 412 );
         SETTINGS.setWidth( 920 );
         SETTINGS.setLeft( 612 );
         SETTINGS.setTabPosition( 4 );
         SETTINGS.initialize();

         // ------------------------
         // -- Initialize #SIGNIN --
         // ------------------------
         SIGNIN.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "DEVICECHANGED", this, evtRoutine9 );

         // ------------------------------------
         // -- Add Event Handlers for #APPBAR --
         // ------------------------------------
         APPBAR.addEventHandler( "ICONCLICK", this, evtRoutine8 );

         // ----------------------------------------
         // -- Add Event Handlers for #SEARCHICON --
         // ----------------------------------------
         SEARCHICON.addEventHandler( "CLICK", this, evtRoutine10 );

         // ---------------------------------------------
         // -- Add Event Handlers for #BUTTONEMPLOYEES --
         // ---------------------------------------------
         BUTTONEMPLOYEES.addEventHandler( "CLICK", this, evtRoutine2 );

         // -----------------------------------------
         // -- Add Event Handlers for #BUTTONVIEW2 --
         // -----------------------------------------
         BUTTONVIEW2.addEventHandler( "CLICK", this, evtRoutine3 );

         // -----------------------------------------
         // -- Add Event Handlers for #BUTTONVIEW3 --
         // -----------------------------------------
         BUTTONVIEW3.addEventHandler( "CLICK", this, evtRoutine4 );

         // --------------------------------------------
         // -- Add Event Handlers for #BUTTONSETTINGS --
         // --------------------------------------------
         BUTTONSETTINGS.addEventHandler( "CLICK", this, evtRoutine5 );

         // -------------------------------------------
         // -- Add Event Handlers for #BUTTONSIGNOUT --
         // -------------------------------------------
         BUTTONSIGNOUT.addEventHandler( "CLICK", this, evtRoutine6 );

         // ------------------------------------------
         // -- Add Event Handlers for #SEARCHSTRING --
         // ------------------------------------------
         SEARCHSTRING.addEventHandler( "AUTOSUGGEST", this, evtRoutine11 );

         // -------------------------------------------
         // -- Add Event Handlers for #VIEWCONTAINER --
         // -------------------------------------------
         VIEWCONTAINER.addEventHandler( "ACTIVEVIEWCHANGED", this, evtRoutine12 );

         // ------------------------------------
         // -- Add Event Handlers for #SIGNIN --
         // ------------------------------------
         SIGNIN.addEventHandler( "COMPLETED", this, evtRoutine7 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNTEAL" ) );
         this.setLayoutManager( LAYOUTMAIN );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 60 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 60 );
      {

         //
         // #SignIn.Show
         //
         rtn.Line( 62 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 64 );
      rtn.end();
   };

   //
   // evtRoutine2 - #ButtonEmployees.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonEmployees.Click", 66 );

      //
      // EVTROUTINE Handling(#ButtonEmployees.Click)
      //
      rtn.Line( 66 );
      {

         //
         // #Employees.Show
         //
         rtn.Line( 68 );
         ref.EMPLOYEES.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 70 );
      rtn.end();
   };

   //
   // evtRoutine3 - #ButtonView2.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonView2.Click", 71 );

      //
      // EVTROUTINE Handling(#ButtonView2.Click)
      //
      rtn.Line( 71 );
      {

         //
         // #View2.Show
         //
         rtn.Line( 73 );
         ref.VIEW2.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 75 );
      rtn.end();
   };

   //
   // evtRoutine4 - #ButtonView3.Click
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonView3.Click", 76 );

      //
      // EVTROUTINE Handling(#ButtonView3.Click)
      //
      rtn.Line( 76 );
      {

         //
         // #View3.Show
         //
         rtn.Line( 78 );
         ref.VIEW3.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 80 );
      rtn.end();
   };

   //
   // evtRoutine5 - #ButtonSettings.Click
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonSettings.Click", 81 );

      //
      // EVTROUTINE Handling(#ButtonSettings.Click)
      //
      rtn.Line( 81 );
      {

         //
         // #Settings.Show
         //
         rtn.Line( 83 );
         ref.SETTINGS.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 85 );
      rtn.end();
   };

   //
   // evtRoutine6 - #ButtonSignOut.Click
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonSignOut.Click", 87 );

      //
      // DEFINE_COM Class(#T02Session.SignOut) Name(#SignOut)
      //
      var SIGNOUT = rtn.createDataRequest( "SIGNOUT", "T02SESSIO", "SIGNOUT" );

      // -------------------------
      // -- Initialize #SIGNOUT --
      // -------------------------
      SIGNOUT.initialize();

      //
      // EVTROUTINE Handling(#ButtonSignOut.Click)
      //
      rtn.Line( 87 );
      {

         //
         // #SignOut.ExecuteAsync
         //
         rtn.Line( 91 );
         SIGNOUT.mthEXECUTEASYNC( {  }, {  } );

         //
         // #ViewContainer.Clear
         //
         rtn.Line( 93 );
         ref.VIEWCONTAINER.mthCLEAR();

         //
         // #SignIn.Show
         //
         rtn.Line( 95 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 97 );
      rtn.end();
   };

   //
   // evtRoutine7 - #SignIn.Completed
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SignIn.Completed", 99 );

      //
      // EVTROUTINE Handling(#SignIn.Completed)
      //
      rtn.Line( 99 );
      {

         //
         // #Employees.Show
         //
         rtn.Line( 101 );
         ref.EMPLOYEES.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 103 );
      rtn.end();
   };

   //
   // evtRoutine8 - #AppBar.IconClick
   //
   function evtRoutine8( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AppBar.IconClick", 105 );

      //
      // EVTROUTINE Handling(#AppBar.IconClick)
      //
      rtn.Line( 105 );
      {

         //
         // #AppDrawer.ToggleDrawer
         //
         rtn.Line( 107 );
         ref.APPDRAWER.mthTOGGLEDRAWER();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 109 );
      rtn.end();
   };

   //
   // evtRoutine9 - #Sys_Web.DeviceChanged
   //
   function evtRoutine9( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Sys_Web.DeviceChanged", 111 );

      //
      // EVTROUTINE Handling(#Sys_Web.DeviceChanged)
      //
      rtn.Line( 111 );
      {

         //
         // IF (#Sys_Web.Device = Mobile)
         //
         rtn.Line( 113 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.DrawerStyle := SlideInLeft
            //
            rtn.Line( 115 );
            ref.APPDRAWER.setDrawerStyle( "SLIDEINLEFT" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AppDrawer.DrawerStyle := Permanent
            //
            rtn.Line( 119 );
            ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 123 );
      rtn.end();
   };

   //
   // evtRoutine10 - #SearchIcon.Click
   //
   function evtRoutine10( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchIcon.Click", 125 );

      //
      // EVTROUTINE Handling(#SearchIcon.Click)
      //
      rtn.Line( 125 );
      {

         //
         // IF (#SearchString <> "")
         //
         rtn.Line( 127 );
         if ( Lansa.String.ne( ref.SEARCHSTRING.get(), "" ) )
         {

            //
            // #SearchString := ""
            //
            rtn.Line( 129 );
            ref.SEARCHSTRING.set( "" );

            //
            // SET Com(#Employees) Filter(#SearchString)
            //
            rtn.Line( 131 );
            ref.EMPLOYEES.setFILTER( ref.SEARCHSTRING.get() );

         //
         // ENDIF 
         //
         }

         //
         // #SearchString.Visible := *Not #SearchString.Visible
         //
         rtn.Line( 135 );
         ref.SEARCHSTRING.setVisible( Lansa.not( ref.SEARCHSTRING.getVisible() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 137 );
      rtn.end();
   };

   //
   // evtRoutine11 - #SearchString.AutoSuggest
   //
   function evtRoutine11( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchString.AutoSuggest", 139 );

      //
      // EVTROUTINE Handling(#SearchString.AutoSuggest)
      //
      rtn.Line( 139 );
      {

         //
         // SET Com(#Employees) Filter(#SearchString)
         //
         rtn.Line( 141 );
         ref.EMPLOYEES.setFILTER( ref.SEARCHSTRING.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 143 );
      rtn.end();
   };

   //
   // evtRoutine12 - #ViewContainer.ActiveViewChanged
   //
   function evtRoutine12( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ViewContainer.ActiveViewChanged", 145 );

      //
      // EVTROUTINE Handling(#ViewContainer.ActiveViewChanged)
      //
      rtn.Line( 145 );
      {

         //
         // #SearchString := ""
         //
         rtn.Line( 147 );
         ref.SEARCHSTRING.set( "" );

         //
         // #SearchString.Visible := False
         //
         rtn.Line( 149 );
         ref.SEARCHSTRING.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 151 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "T02EMPLOY", "T02VIEW2", "T02VIEW3", "T02SETTIN", "T02SIGNIN" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_MD.AppBar", "PRIM_MD.Icon", "PRIM_MD.AppDrawer", "PRIM_MD.FlatButton", "PRIM_MD.Edit", "PRIM_MD.ViewContainer", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=t02main.js
