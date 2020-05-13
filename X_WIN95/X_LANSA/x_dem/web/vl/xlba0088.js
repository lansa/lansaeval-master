// -----------------------------
// -- Reusable Part: XLBA0088 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0088", 
   nm: "XWS_Google_RecaptchaV2Visual", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-integration-lib]", 
   tl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XLB00051:
      {
         ic: 0,
         nm: "XLB00051",
         an: "XLib_INT64",
         ft: "I",
         ln: 8,
         dc: 0,
         lb: "Int64",
         h1: "Int64",
         h2: " ",
         h3: " ",
         de: "Extended Library - Int64 Data Type",
         dv: 0,
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         IsReady: 
         {
            da: "na"
         },

         Response: 
         {
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Visualize: 
         {
         },

         ApplyPendingChanges: 
         {
         },

         SetupWidget: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         OnError: 
         {
            ps: 
            {
               "Message":
               {
                  pt: "i"
               }
            }
         }
      },

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "XLBA0088", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_MD.Alert) Name(#LoadingMessage) Visible(True) Caption('Loading reCAPTCHA...') DisplayPosition(1) Duration(3000) Left(-122) Parent(#COM_OWNER) TabPosition(2) ThemeDrawStyle('LightTitle') Top(11) Width(548)
         //
         var LOADINGMESSAGE = this.createReference( "LOADINGMESSAGE", "PRIM_MD", "Alert" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item3) Manage(#Widget) Parent(#Layout1) Row(#Layout1Row1) Column(#Layout1Column1)
         //
         var LAYOUT1ITEM3 = this.createReference( "LAYOUT1ITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item2) Manage(#LoadingMessage) Parent(#Layout1) Row(#Layout1Row1) Sizing(None) Column(#Layout1Column1)
         //
         var LAYOUT1ITEM2 = this.createReference( "LAYOUT1ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout1Row1) DisplayPosition(1) Parent(#Layout1)
         //
         var LAYOUT1ROW1 = this.createReference( "LAYOUT1ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Layout1Column1) DisplayPosition(1) Parent(#Layout1)
         //
         var LAYOUT1COLUMN1 = this.createReference( "LAYOUT1COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Alignment(TopLeft) Column(#Layout1Column1) Parent(#Layout1) Row(#Layout1Row1)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XInternal_WebUtil) Name(#Util)
         //
         var UTIL = this.createReference( "UTIL", "XLBA0084" );

         //
         // DEFINE_COM Class(#XInternal_Google_ClientConfig) Name(#Config)
         //
         var CONFIG = this.createReference( "CONFIG", "XLBA0087" );

         //
         // DEFINE_COM Class(#XInternal_DynScript_GoogleRecaptcha) Name(#Script)
         //
         var SCRIPT = this.createReference( "SCRIPT", "XLBA0090" );

         //
         // DEFINE_COM Class(#XInternal_Google_Recaptcha_Widget_V2) Name(#Widget) DisplayPosition(2) Parent(#COM_OWNER) TabPosition(1) Left(0) Top(0) Height(78) Width(304)
         //
         var WIDGET = this.createReference( "WIDGET", "XLBA0089" );

         //
         // DEFINE_COM Class(#XLib_INT64) Name(#ReadyCounter)
         //
         var READYCOUNTER = this.createFieldReference( "READYCOUNTER", Fields.XLB00051.DataClass );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#HasPendingConfigure)
         //
         var HASPENDINGCONFIGURE = this.createReference( "HASPENDINGCONFIGURE", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#HasVisualized)
         //
         var HASVISUALIZED = this.createReference( "HASVISUALIZED", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gRecaptchaTheme)
         //
         var GRECAPTCHATHEME = this.createReference( "GRECAPTCHATHEME", "PRIM_DC", "UnicodeString" );

         // --------------------------------
         // -- Initialize #LOADINGMESSAGE --
         // --------------------------------
         LOADINGMESSAGE.setVisible( true );
         LOADINGMESSAGE.setCaption( "Loading reCAPTCHA..." );
         LOADINGMESSAGE.setDisplayPosition( 1 );
         LOADINGMESSAGE.setDuration( 3000 );
         LOADINGMESSAGE.setLeft( -122 );
         LOADINGMESSAGE.setParent( this );
         LOADINGMESSAGE.setTabPosition( 2 );
         LOADINGMESSAGE.setThemeDrawStyle( "LightTitle" );
         LOADINGMESSAGE.setTop( 11 );
         LOADINGMESSAGE.setWidth( 548 );
         LOADINGMESSAGE.initialize();

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM3 --
         // ------------------------------
         LAYOUT1ITEM3.setManage( WIDGET );
         LAYOUT1ITEM3.setParent( LAYOUT1 );
         LAYOUT1ITEM3.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM3.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM2 --
         // ------------------------------
         LAYOUT1ITEM2.setManage( LOADINGMESSAGE );
         LAYOUT1ITEM2.setParent( LAYOUT1 );
         LAYOUT1ITEM2.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM2.setSizing( "NONE" );
         LAYOUT1ITEM2.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM2.initialize();

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
         LAYOUT1ITEM1.setAlignment( "TOPLEFT" );
         LAYOUT1ITEM1.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM1.setParent( LAYOUT1 );
         LAYOUT1ITEM1.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM1.initialize();

         // ----------------------
         // -- Initialize #UTIL --
         // ----------------------
         UTIL.initialize();

         // ------------------------
         // -- Initialize #CONFIG --
         // ------------------------
         CONFIG.initialize();

         // ------------------------
         // -- Initialize #SCRIPT --
         // ------------------------
         SCRIPT.initialize();

         // ------------------------
         // -- Initialize #WIDGET --
         // ------------------------
         WIDGET.setDisplayPosition( 2 );
         WIDGET.setParent( this );
         WIDGET.setTabPosition( 1 );
         WIDGET.setLeft( 0 );
         WIDGET.setTop( 0 );
         WIDGET.setHeight( 78 );
         WIDGET.setWidth( 304 );
         WIDGET.initialize();

         // ------------------------------
         // -- Initialize #READYCOUNTER --
         // ------------------------------
         READYCOUNTER.applyDefault();
         READYCOUNTER.initialize();

         // -------------------------------------
         // -- Initialize #HASPENDINGCONFIGURE --
         // -------------------------------------
         HASPENDINGCONFIGURE.initialize();

         // -------------------------------
         // -- Initialize #HASVISUALIZED --
         // -------------------------------
         HASVISUALIZED.initialize();

         // ---------------------------------
         // -- Initialize #GRECAPTCHATHEME --
         // ---------------------------------
         GRECAPTCHATHEME.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #CONFIG --
         // ------------------------------------
         CONFIG.addEventHandler( "ONAVAILABLE", this, evtRoutine4 );

         // ------------------------------------
         // -- Add Event Handlers for #SCRIPT --
         // ------------------------------------
         SCRIPT.addEventHandler( "ONREADY", this, evtRoutine1 );

         // ------------------------------------
         // -- Add Event Handlers for #WIDGET --
         // ------------------------------------
         WIDGET.addEventHandler( "INITIALIZE", this, evtRoutine2 );
         WIDGET.addEventHandler( "ONERROR", this, evtRoutine3 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 78 );
         this.setWidth( 304 );
         this.setLayoutManager( LAYOUT1 );
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLeft( 0 );
         this.setTop( 0 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthVISUALIZE - Visualize
   //
   COM_OWNER.mthVISUALIZE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Visualize", 29 );

      //
      // MTHROUTINE Name(Visualize)
      //
      rtn.Line( 29 );
      {

         //
         // IF (#HasVisualized)
         //
         rtn.Line( 30 );
         if ( Lansa.toBool( ref.HASVISUALIZED.get() ) )
         {

            //
            // #Util.FatalError Text('reCAPTCHA has been visualized')
            //
            rtn.Line( 31 );
            ref.UTIL.mthFATALERROR( "reCAPTCHA has been visualized" );

         //
         // ENDIF 
         //
         }

         //
         // #HasVisualized := True
         //
         rtn.Line( 34 );
         ref.HASVISUALIZED.set( true );

         //
         // #HasPendingConfigure := True
         //
         rtn.Line( 35 );
         ref.HASPENDINGCONFIGURE.set( true );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 37 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 38 );
      rtn.end();
   };

   //
   // evtRoutine1 - #Script.OnReady
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Script.OnReady", 40 );

      //
      // EVTROUTINE Handling(#Script.OnReady)
      //
      rtn.Line( 40 );
      {

         //
         // #ReadyCounter += 1
         //
         rtn.Line( 41 );
         ref.READYCOUNTER.set( Lansa.add( ref.READYCOUNTER.get(), 1 ) );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 43 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 44 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Widget.Initialize
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.Initialize", 46 );

      //
      // EVTROUTINE Handling(#Widget.Initialize)
      //
      rtn.Line( 46 );
      {

         //
         // #ReadyCounter += 1
         //
         rtn.Line( 47 );
         ref.READYCOUNTER.set( Lansa.add( ref.READYCOUNTER.get(), 1 ) );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 49 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 50 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Widget.OnError
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.OnError", 52 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var MESSAGE = parms.ref( "MESSAGE" );

      //
      // EVTROUTINE Handling(#Widget.OnError) Message(#Message)
      //
      rtn.Line( 52 );
      {

         //
         // SIGNAL Event(OnError) Message(#Message)
         //
         rtn.Line( 54 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createReference( "MESSAGE", "PRIM_DC", "UnicodeString" );

            evtParms.ref( "MESSAGE" ).set( MESSAGE.get() );

            this.fireEvent( "ONERROR", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 56 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Config.OnAvailable
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Config.OnAvailable", 58 );

      //
      // EVTROUTINE Handling(#Config.OnAvailable)
      //
      rtn.Line( 58 );
      {

         //
         // #ReadyCounter += 1
         //
         rtn.Line( 59 );
         ref.READYCOUNTER.set( Lansa.add( ref.READYCOUNTER.get(), 1 ) );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 61 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 62 );
      rtn.end();
   };

   //
   // mthAPPLYPENDINGCHANGES - ApplyPendingChanges
   //
   COM_OWNER.mthAPPLYPENDINGCHANGES = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ApplyPendingChanges", 64 );

      //
      // MTHROUTINE Name(ApplyPendingChanges) Access(*PRIVATE)
      //
      rtn.Line( 64 );
      {

         //
         // IF (#COM_SELF.IsReady)
         //
         rtn.Line( 65 );
         if ( this.getISREADY() )
         {

            //
            // #Widget.Visible := True
            //
            rtn.Line( 66 );
            ref.WIDGET.setVisible( true );

            //
            // #LoadingMessage.Visible := False
            //
            rtn.Line( 67 );
            ref.LOADINGMESSAGE.setVisible( false );

            //
            // IF (#HasPendingConfigure)
            //
            rtn.Line( 69 );
            if ( Lansa.toBool( ref.HASPENDINGCONFIGURE.get() ) )
            {

               //
               // #HasPendingConfigure := False
               //
               rtn.Line( 70 );
               ref.HASPENDINGCONFIGURE.set( false );

               //
               // #COM_SELF.SetupWidget
               //
               rtn.Line( 72 );
               this.mthSETUPWIDGET();

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 75 );
      rtn.end();
   };

   //
   // mthSETUPWIDGET - SetupWidget
   //
   COM_OWNER.mthSETUPWIDGET = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetupWidget", 77 );

      //
      // MTHROUTINE Name(SetupWidget) Access(*PRIVATE)
      //
      rtn.Line( 77 );
      {

         //
         // #Widget.SiteKey := #Config.Recaptcha_V2_SiteKey
         //
         rtn.Line( 78 );
         ref.WIDGET.setSITEKEY( ref.CONFIG.getRECAPTCHA_V2_SITEKEY() );

         //
         // #Widget.Setup
         //
         rtn.Line( 80 );
         ref.WIDGET.mthSETUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 81 );
      rtn.end();
   };

   //
   // mthGETISREADY - GetIsReady
   //
   COM_OWNER.mthGETISREADY = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetIsReady", 83 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_BOLN) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_BOLN" );

      //
      // PTYROUTINE Name(GetIsReady)
      //
      rtn.Line( 83 );
      {

         //
         // #Result := #ReadyCounter = 3
         //
         rtn.Line( 86 );
         RESULT.set( Lansa.Number.eq( ref.READYCOUNTER.get(), 3 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETRESPONSE - GetResponse
   //
   COM_OWNER.mthGETRESPONSE = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetResponse", 89 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // PTYROUTINE Name(GetResponse)
      //
      rtn.Line( 89 );
      {

         //
         // #Result := #Widget.GetResponse
         //
         rtn.Line( 92 );
         RESULT.set( ref.WIDGET.mthGETRESPONSE() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 93 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // DEFINE_PTY Name(IsReady) Get(GetIsReady)
   //
   COM_OWNER.getISREADY = function()
   {
      return this.mthGETISREADY();
   };

   //
   // DEFINE_PTY Name(Response) Get(GetResponse)
   //
   COM_OWNER.getRESPONSE = function()
   {
      return this.mthGETRESPONSE();
   };

   // -----------------------------
   // -- XLB00051 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XLB00051.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XLB00051 );
      };

      Lansa.createFieldClass( { co: Fields.XLB00051.DataClass, an: "PRIM_FLD", fn: "XLB00051" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0084", "XLBA0087", "XLBA0090", "XLBA0089" ],
   rp: [ "PRIM_PANL", "PRIM_MD.Alert", "PRIM_TBLO", "PRIM_TBLO.Item", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_FLD", "PRIM_BOLN", "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlba0088.js
