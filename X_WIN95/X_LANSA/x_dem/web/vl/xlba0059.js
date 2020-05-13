// -----------------------------
// -- Reusable Part: XLBA0059 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0059", 
   nm: "XWS_PayPal_SimplePayButton", 
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
         Payment: 
         {
            da: "r"
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

         SetupButtonWidget: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         OnPaymentAuthorized: 
         {
         },

         OnPaymentExecuted: 
         {
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
         this.addFields( "XLBA0059", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Alignment(TopLeft) Column(#Layout1Column1) Manage(#ButtonWidget) Parent(#Layout1) Row(#Layout1Row1)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XInternal_WebUtil) Name(#Util)
         //
         var UTIL = this.createReference( "UTIL", "XLBA0084" );

         //
         // DEFINE_COM Class(#XInternal_PayPal_ClientConfig) Name(#Config)
         //
         var CONFIG = this.createReference( "CONFIG", "XLBA0069" );

         //
         // DEFINE_COM Class(#XInternal_DynScript_PayPalCheckout) Name(#Script)
         //
         var SCRIPT = this.createReference( "SCRIPT", "XLBA0062" );

         //
         // DEFINE_COM Class(#XInternal_PayPal_PayButtonWidget) Name(#ButtonWidget) Visible(False) Displayposition(1) Parent(#COM_OWNER) Tabposition(1) Left(0) Top(0) Height(270) Width(500)
         //
         var BUTTONWIDGET = this.createReference( "BUTTONWIDGET", "XLBA0063" );

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
         // DEFINE_COM Class(#XWS_PayPal_Payment) Name(#gPayment)
         //
         var GPAYMENT = this.createReference( "GPAYMENT", "XLBA0070" );

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
         LAYOUT1ITEM1.setAlignment( "TOPLEFT" );
         LAYOUT1ITEM1.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM1.setManage( BUTTONWIDGET );
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

         // ------------------------------
         // -- Initialize #BUTTONWIDGET --
         // ------------------------------
         BUTTONWIDGET.setVisible( false );
         BUTTONWIDGET.setDisplayPosition( 1 );
         BUTTONWIDGET.setParent( this );
         BUTTONWIDGET.setTabPosition( 1 );
         BUTTONWIDGET.setLeft( 0 );
         BUTTONWIDGET.setTop( 0 );
         BUTTONWIDGET.setHeight( 270 );
         BUTTONWIDGET.setWidth( 500 );
         BUTTONWIDGET.initialize();

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

         // --------------------------
         // -- Initialize #GPAYMENT --
         // --------------------------
         GPAYMENT.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #CONFIG --
         // ------------------------------------
         CONFIG.addEventHandler( "ONAVAILABLE", this, evtRoutine2 );

         // ------------------------------------
         // -- Add Event Handlers for #SCRIPT --
         // ------------------------------------
         SCRIPT.addEventHandler( "ONREADY", this, evtRoutine1 );

         // ------------------------------------------
         // -- Add Event Handlers for #BUTTONWIDGET --
         // ------------------------------------------
         BUTTONWIDGET.addEventHandler( "ONPAYMENTAUTHORIZED", this, evtRoutine3 );
         BUTTONWIDGET.addEventHandler( "ONPAYMENTEXECUTED", this, evtRoutine4 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 270 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 500 );
         this.setLayoutManager( LAYOUT1 );
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
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Visualize", 23 );

      //
      // MTHROUTINE Name(Visualize)
      //
      rtn.Line( 23 );
      {

         //
         // IF (#HasVisualized)
         //
         rtn.Line( 24 );
         if ( Lansa.toBool( ref.HASVISUALIZED.get() ) )
         {

            //
            // #Util.FatalError Text("PayPal button has been visualized")
            //
            rtn.Line( 25 );
            ref.UTIL.mthFATALERROR( "PayPal button has been visualized" );

         //
         // ENDIF 
         //
         }

         //
         // CASE Of_Field(#gPayment.Transactions.ItemCount)
         //
         rtn.Line( 29 );
         {
            var value1 = ref.GPAYMENT.getTRANSACTIONS().getItemCount();

            //
            // WHEN Value_Is(= 0)
            //
            if ( rtn.Line( 30 ), Lansa.Number.eq( value1, 0 ) )
            {

               //
               // #Util.FatalError Text("No transaction is specified")
               //
               rtn.Line( 31 );
               ref.UTIL.mthFATALERROR( "No transaction is specified" );
            }

            //
            // WHEN Value_Is(> 1)
            //
            else if ( rtn.Line( 33 ), Lansa.Number.gt( value1, 1 ) )
            {

               //
               // #Util.FatalError Text("Defining multiple transactions is not currently supported by PayPal")
               //
               rtn.Line( 34 );
               ref.UTIL.mthFATALERROR( "Defining multiple transactions is not currently supported by PayPal" );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 35 );
         }

         //
         // #HasVisualized := True
         //
         rtn.Line( 38 );
         ref.HASVISUALIZED.set( true );

         //
         // #HasPendingConfigure := True
         //
         rtn.Line( 39 );
         ref.HASPENDINGCONFIGURE.set( true );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 41 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // evtRoutine1 - #Script.OnReady
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Script.OnReady", 44 );

      //
      // EVTROUTINE Handling(#Script.OnReady)
      //
      rtn.Line( 44 );
      {

         //
         // #ReadyCounter += 1
         //
         rtn.Line( 45 );
         ref.READYCOUNTER.set( Lansa.add( ref.READYCOUNTER.get(), 1 ) );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 47 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 48 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Config.OnAvailable
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Config.OnAvailable", 50 );

      //
      // EVTROUTINE Handling(#Config.OnAvailable)
      //
      rtn.Line( 50 );
      {

         //
         // #ReadyCounter += 1
         //
         rtn.Line( 51 );
         ref.READYCOUNTER.set( Lansa.add( ref.READYCOUNTER.get(), 1 ) );

         //
         // #COM_SELF.ApplyPendingChanges
         //
         rtn.Line( 53 );
         this.mthAPPLYPENDINGCHANGES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 54 );
      rtn.end();
   };

   //
   // mthAPPLYPENDINGCHANGES - ApplyPendingChanges
   //
   COM_OWNER.mthAPPLYPENDINGCHANGES = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ApplyPendingChanges", 56 );

      //
      // MTHROUTINE Name(ApplyPendingChanges) Access(*PRIVATE)
      //
      rtn.Line( 56 );
      {

         //
         // IF (#ReadyCounter = 2)
         //
         rtn.Line( 57 );
         if ( Lansa.Number.eq( ref.READYCOUNTER.get(), 2 ) )
         {

            //
            // #ButtonWidget.Visible := True
            //
            rtn.Line( 58 );
            ref.BUTTONWIDGET.setVisible( true );

            //
            // IF (#HasPendingConfigure)
            //
            rtn.Line( 60 );
            if ( Lansa.toBool( ref.HASPENDINGCONFIGURE.get() ) )
            {

               //
               // #HasPendingConfigure := False
               //
               rtn.Line( 61 );
               ref.HASPENDINGCONFIGURE.set( false );

               //
               // #COM_SELF.SetupButtonWidget
               //
               rtn.Line( 63 );
               this.mthSETUPBUTTONWIDGET();

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
      rtn.Line( 66 );
      rtn.end();
   };

   //
   // evtRoutine3 - #ButtonWidget.OnPaymentAuthorized
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonWidget.OnPaymentAuthorized", 68 );

      //
      // EVTROUTINE Handling(#ButtonWidget.OnPaymentAuthorized)
      //
      rtn.Line( 68 );
      {

         //
         // SIGNAL Event(OnPaymentAuthorized)
         //
         rtn.Line( 69 );
         this.fireEvent( "ONPAYMENTAUTHORIZED" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 70 );
      rtn.end();
   };

   //
   // evtRoutine4 - #ButtonWidget.OnPaymentExecuted
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ButtonWidget.OnPaymentExecuted", 72 );

      //
      // EVTROUTINE Handling(#ButtonWidget.OnPaymentExecuted)
      //
      rtn.Line( 72 );
      {

         //
         // SIGNAL Event(OnPaymentExecuted)
         //
         rtn.Line( 73 );
         this.fireEvent( "ONPAYMENTEXECUTED" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   //
   // mthSETUPBUTTONWIDGET - SetupButtonWidget
   //
   COM_OWNER.mthSETUPBUTTONWIDGET = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetupButtonWidget", 76 );

      //
      // DEFINE_COM Class(#XUtil_JsonWriter) Name(#JsonWriter)
      //
      var JSONWRITER = rtn.createReference( "JSONWRITER", "XLBA0080" );

      //
      // DEFINE_COM Class(#XInternal_PayPal_JsonGenerator) Name(#JsonGenerator)
      //
      var JSONGENERATOR = rtn.createReference( "JSONGENERATOR", "XLBA0079" );

      // ----------------------------
      // -- Initialize #JSONWRITER --
      // ----------------------------
      JSONWRITER.initialize();

      // -------------------------------
      // -- Initialize #JSONGENERATOR --
      // -------------------------------
      JSONGENERATOR.initialize();

      //
      // MTHROUTINE Name(SetupButtonWidget) Access(*PRIVATE)
      //
      rtn.Line( 76 );
      {

         //
         // #ButtonWidget.ClientId_Production := #Config.ClientId_Production
         //
         rtn.Line( 80 );
         ref.BUTTONWIDGET.setCLIENTID_PRODUCTION( ref.CONFIG.getCLIENTID_PRODUCTION() );

         //
         // #ButtonWidget.ClientId_Sandbox := #Config.ClientId_Sandbox
         //
         rtn.Line( 81 );
         ref.BUTTONWIDGET.setCLIENTID_SANDBOX( ref.CONFIG.getCLIENTID_SANDBOX() );

         //
         // #JsonGenerator.GeneratePayment Payment(#gPayment) Writer(#JsonWriter)
         //
         rtn.Line( 83 );
         JSONGENERATOR.mthGENERATEPAYMENT( JSONWRITER, undefined, ref.GPAYMENT );

         //
         // #ButtonWidget.Setup Payment(#JsonWriter.AsString)
         //
         rtn.Line( 84 );
         ref.BUTTONWIDGET.mthSETUP( JSONWRITER.mthASSTRING() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 85 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(Payment) Get(*REFERENCE #gPayment)
   //
   COM_OWNER.getPAYMENT = function()
   {
      return this.REF.GPAYMENT;
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
   rc: [ "XLBA0084", "XLBA0069", "XLBA0062", "XLBA0063", "XLBA0070" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_FLD", "PRIM_BOLN" ],
   dc: [ "XLBA0080", "XLBA0079" ]
});

//# sourceURL=xlba0059.js
