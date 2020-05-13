// -----------------------------
// -- Reusable Part: XLBA0069 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0069", 
   nm: "XInternal_PayPal_ClientConfig", 
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
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "XLBA0067", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         ClientId_Production: 
         {
            da: "na"
         },

         ClientId_Sandbox: 
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
         // DEFINE_COM Class(#XInternal_PayPal_ClientConfig_Singleton) Name(#XInternal_PayPal_ClientConfig_Singleton) Scope(*APPLICATION)
         //
         var XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON = this.createApplicationReference( "XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON", "XLBA0068" );

         //
         // DEFINE_COM Class(#XInternal_PayPal_ClientConfig_Singleton) Name(#Singleton) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "SINGLETON" );

         // ---------------------------------------------------------
         // -- Initialize #XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON --
         // ---------------------------------------------------------
         if ( ( XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON != null ) && ( XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON.isInitialized() == false ) )
         {
            XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON.initialize();
         }

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 10 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 10 );
      {

         //
         // #Singleton <= #XInternal_PayPal_ClientConfig_Singleton
         //
         rtn.Line( 11 );
         this.setrefSINGLETON( ref.XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON.ref );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 12 );
      rtn.end();
   };

   //
   // mthGETSINGLETON - GetSingleton
   //
   COM_OWNER.mthGETSINGLETON = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetSingleton", 14 );

      //
      // DEFINE_MAP Class(#XLBA0066) Name(Result) For(*RESULT) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // MTHROUTINE Name(GetSingleton) Options(*REDEFINE) Access(*PROTECT)
      //
      rtn.Line( 14 );
      {

         //
         // #Result <= #XInternal_PayPal_ClientConfig_Singleton
         //
         rtn.Line( 16 );
         RESULT = rtn.setref( "RESULT", ref.XINTERNAL_PAYPAL_CLIENTCONFIG_SINGLETON.ref );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 17 );
      return rtn.retRef( RESULT );
   };

   //
   // mthGETCLIENTIDPROD - GetClientIdProd
   //
   COM_OWNER.mthGETCLIENTIDPROD = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetClientIdProd", 19 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // PTYROUTINE Name(GetClientIdProd)
      //
      rtn.Line( 19 );
      {

         //
         // #COM_SELF.AssertAvailable
         //
         rtn.Line( 22 );
         this.mthASSERTAVAILABLE();

         //
         // #Result := #Singleton.ClientId_Production
         //
         rtn.Line( 24 );
         RESULT.set( ref.SINGLETON.getCLIENTID_PRODUCTION() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 25 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETCLIENTIDSANDBOX - GetClientIdSandbox
   //
   COM_OWNER.mthGETCLIENTIDSANDBOX = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetClientIdSandbox", 27 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // PTYROUTINE Name(GetClientIdSandbox)
      //
      rtn.Line( 27 );
      {

         //
         // #COM_SELF.AssertAvailable
         //
         rtn.Line( 30 );
         this.mthASSERTAVAILABLE();

         //
         // #Result := #Singleton.ClientId_Sandbox
         //
         rtn.Line( 32 );
         RESULT.set( ref.SINGLETON.getCLIENTID_SANDBOX() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 33 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // DEFINE_PTY Name(ClientId_Production) Get(GetClientIdProd)
   //
   COM_OWNER.getCLIENTID_PRODUCTION = function()
   {
      return this.mthGETCLIENTIDPROD();
   };

   //
   // DEFINE_PTY Name(ClientId_Sandbox) Get(GetClientIdSandbox)
   //
   COM_OWNER.getCLIENTID_SANDBOX = function()
   {
      return this.mthGETCLIENTIDSANDBOX();
   };

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefSINGLETON = function( refNew )
   {
      this.setref( "SINGLETON", refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0067", "XLBA0068" ],
   dc: [ "XLBA0068" ]
});

//# sourceURL=xlba0069.js
