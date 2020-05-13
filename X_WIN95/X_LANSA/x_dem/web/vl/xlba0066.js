// -----------------------------
// -- Reusable Part: XLBA0066 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0066", 
   nm: "XInternal_Config_Clientside_Singleton_Base", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] Config Singleton", 
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

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         IsAvailable: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Fetch: 
         {
         },

         SetAvailable: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         OnAvailable: 
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
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gAvailable)
         //
         var GAVAILABLE = this.createReference( "GAVAILABLE", "PRIM_BOLN" );

         // ----------------------------
         // -- Initialize #GAVAILABLE --
         // ----------------------------
         GAVAILABLE.initialize();

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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 9 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 9 );
      {

         //
         // #COM_SELF.Fetch
         //
         rtn.Line( 10 );
         this.mthFETCH();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 11 );
      rtn.end();
   };

   //
   // mthFETCH - Fetch
   //
   COM_OWNER.mthFETCH = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "Fetch", 13 );

      //
      // MTHROUTINE Name(Fetch) Options(*ABSTRACT) Access(*PROTECT)
      //
      rtn.Line( 13 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 14 );
      rtn.end();
   };

   //
   // mthSETAVAILABLE - SetAvailable
   //
   COM_OWNER.mthSETAVAILABLE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetAvailable", 16 );

      //
      // MTHROUTINE Name(SetAvailable) Options(*FINAL) Access(*PROTECT)
      //
      rtn.Line( 16 );
      {

         //
         // #gAvailable := True
         //
         rtn.Line( 17 );
         ref.GAVAILABLE.set( true );

         //
         // SIGNAL Event(OnAvailable)
         //
         rtn.Line( 19 );
         this.fireEvent( "ONAVAILABLE" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 20 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(IsAvailable) Get(*AUTO #gAvailable)
   //
   COM_OWNER.getISAVAILABLE = function()
   {
      return this.REF.GAVAILABLE.get();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT", "PRIM_BOLN" ]
});

//# sourceURL=xlba0066.js
