// -----------------------------
// -- Reusable Part: XLBA0061 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0061", 
   nm: "XWebUtil_DynamicScript_Base", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] Base for dyn loaded script", 
   tl: 14020401
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
      an: "PRIM_OBJT", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ScriptId: 
         {
         },

         ScriptUrl: 
         {
         },

         ScriptLoaded: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         OnReady: 
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

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XWebUtil_AddScript) Name(#AddScript)
         //
         var ADDSCRIPT = this.createReference( "ADDSCRIPT", "XLBA0060" );

         // ---------------------------
         // -- Initialize #ADDSCRIPT --
         // ---------------------------
         ADDSCRIPT.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #ADDSCRIPT --
         // ---------------------------------------
         ADDSCRIPT.addEventHandler( "ONLOADED", this, evtRoutine2 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 8 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 8 );
      {

         //
         // #AddScript.LoadScript Id(#COM_SELF.ScriptId) Url(#COM_SELF.ScriptUrl)
         //
         rtn.Line( 9 );
         ref.ADDSCRIPT.mthLOADSCRIPT( this.mthSCRIPTID(), this.mthSCRIPTURL() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 10 );
      rtn.end();
   };

   //
   // evtRoutine2 - #AddScript.OnLoaded
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddScript.OnLoaded", 12 );

      //
      // EVTROUTINE Handling(#AddScript.OnLoaded)
      //
      rtn.Line( 12 );
      {

         //
         // #COM_SELF.ScriptLoaded
         //
         rtn.Line( 13 );
         this.mthSCRIPTLOADED();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 14 );
      rtn.end();
   };

   //
   // mthSCRIPTID - ScriptId
   //
   COM_OWNER.mthSCRIPTID = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ScriptId", 16 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // MTHROUTINE Name(ScriptId) Options(*ABSTRACT) Access(*PROTECT)
      //
      rtn.Line( 16 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 18 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthSCRIPTURL - ScriptUrl
   //
   COM_OWNER.mthSCRIPTURL = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ScriptUrl", 20 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // MTHROUTINE Name(ScriptUrl) Options(*ABSTRACT) Access(*PROTECT)
      //
      rtn.Line( 20 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 22 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthSCRIPTLOADED - ScriptLoaded
   //
   COM_OWNER.mthSCRIPTLOADED = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ScriptLoaded", 24 );

      //
      // MTHROUTINE Name(ScriptLoaded) Access(*PROTECT)
      //
      rtn.Line( 24 );
      {

         //
         // SIGNAL Event(OnReady)
         //
         rtn.Line( 25 );
         this.fireEvent( "ONREADY" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0060" ],
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xlba0061.js
