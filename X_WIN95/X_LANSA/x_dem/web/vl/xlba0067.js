// -----------------------------
// -- Reusable Part: XLBA0067 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0067", 
   nm: "XInternal_Config_Clientside_Base", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] Config Clientside", 
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
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         GetSingleton: 
         {
         },

         AssertAvailable: 
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
         // DEFINE_COM Class(#XInternal_Config_Clientside_Singleton_Base) Name(#gSingleton) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GSINGLETON" );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 9 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 9 );
      {

         //
         // #gSingleton <= #COM_SELF.GetSingleton
         //
         rtn.Line( 10 );
         this.setrefGSINGLETON( this.mthGETSINGLETON() );

         //
         // IF (#gSingleton.IsAvailable)
         //
         rtn.Line( 12 );
         if ( ref.GSINGLETON.getISAVAILABLE() )
         {

            //
            // SIGNAL Event(OnAvailable)
            //
            rtn.Line( 13 );
            this.fireEvent( "ONAVAILABLE" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 15 );
      rtn.end();
   };

   //
   // mthGETSINGLETON - GetSingleton
   //
   COM_OWNER.mthGETSINGLETON = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "GetSingleton", 17 );

      //
      // DEFINE_MAP For(*RESULT) Class(#XInternal_Config_Clientside_Singleton_Base) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // MTHROUTINE Name(GetSingleton) Options(*ABSTRACT) Access(*PROTECT)
      //
      rtn.Line( 17 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 19 );
      return rtn.retRef( RESULT );
   };

   //
   // mthASSERTAVAILABLE - AssertAvailable
   //
   COM_OWNER.mthASSERTAVAILABLE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "AssertAvailable", 21 );

      //
      // MTHROUTINE Name(AssertAvailable)
      //
      rtn.Line( 21 );
      {

         //
         // IF (*Not #COM_SELF.IsAvailable)
         //
         rtn.Line( 22 );
         if ( Lansa.not( this.getISAVAILABLE() ) )
         {

            //
            // ABORT Msgtxt('Config values are not yet available')
            //
            rtn.Line( 23 );
            Lansa.abort( "Config values are not yet available" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 25 );
      rtn.end();
   };

   //
   // mthGETISAVAILABLE - GetIsAvailable
   //
   COM_OWNER.mthGETISAVAILABLE = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetIsAvailable", 27 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_BOLN) Name(#result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_BOLN" );

      //
      // PTYROUTINE Name(GetIsAvailable)
      //
      rtn.Line( 27 );
      {

         //
         // #result := #gSingleton.IsAvailable
         //
         rtn.Line( 30 );
         RESULT.set( ref.GSINGLETON.getISAVAILABLE() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 31 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // evtRoutine2 - #gSingleton.OnAvailable
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#gSingleton.OnAvailable", 33 );

      //
      // EVTROUTINE Handling(#gSingleton.OnAvailable)
      //
      rtn.Line( 33 );
      {

         //
         // SIGNAL Event(OnAvailable)
         //
         rtn.Line( 34 );
         this.fireEvent( "ONAVAILABLE" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(IsAvailable) Get(GetIsAvailable)
   //
   COM_OWNER.getISAVAILABLE = function()
   {
      return this.mthGETISAVAILABLE();
   };

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefGSINGLETON = function( refNew )
   {
      if ( this.REF.GSINGLETON != null )
      {
         // -------------------------------------------
         // -- Remove Event Handlers for #GSINGLETON --
         // -------------------------------------------
         this.REF.GSINGLETON.removeEventHandler( "ONAVAILABLE", this, evtRoutine2 );
      }

      this.setref( "GSINGLETON", refNew );

      if ( this.REF.GSINGLETON != null )
      {
         // ----------------------------------------
         // -- Add Event Handlers for #GSINGLETON --
         // ----------------------------------------
         this.REF.GSINGLETON.addEventHandler( "ONAVAILABLE", this, evtRoutine2 );
      }
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ],
   dc: [ "XLBA0066" ]
});

//# sourceURL=xlba0067.js
