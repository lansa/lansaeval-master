// -----------------------------
// -- Reusable Part: XLBA0087 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0087", 
   nm: "XInternal_Google_ClientConfig", 
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
         Recaptcha_V2_SiteKey: 
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
         // DEFINE_COM Class(#XInternal_Google_ClientConfig_Singleton) Name(#XInternal_Google_ClientConfig_Singleton) Scope(*APPLICATION)
         //
         var XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON = this.createApplicationReference( "XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON", "XLBA0086" );

         //
         // DEFINE_COM Class(#XInternal_Google_ClientConfig_Singleton) Name(#Singleton) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "SINGLETON" );

         // ---------------------------------------------------------
         // -- Initialize #XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON --
         // ---------------------------------------------------------
         if ( ( XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON != null ) && ( XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON.isInitialized() == false ) )
         {
            XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON.initialize();
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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 9 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 9 );
      {

         //
         // #Singleton <= #XInternal_Google_ClientConfig_Singleton
         //
         rtn.Line( 10 );
         this.setrefSINGLETON( ref.XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON.ref );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 11 );
      rtn.end();
   };

   //
   // mthGETSINGLETON - GetSingleton
   //
   COM_OWNER.mthGETSINGLETON = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetSingleton", 13 );

      //
      // DEFINE_MAP Class(#XLBA0066) Name(Result) For(*RESULT) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // MTHROUTINE Name(GetSingleton) Options(*REDEFINE) Access(*PROTECT)
      //
      rtn.Line( 13 );
      {

         //
         // #Result <= #XInternal_Google_ClientConfig_Singleton
         //
         rtn.Line( 15 );
         RESULT = rtn.setref( "RESULT", ref.XINTERNAL_GOOGLE_CLIENTCONFIG_SINGLETON.ref );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 16 );
      return rtn.retRef( RESULT );
   };

   //
   // mthGETRECAPTCHA_V2_SITEKEY - GetRecaptcha_V2_SiteKey
   //
   COM_OWNER.mthGETRECAPTCHA_V2_SITEKEY = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetRecaptcha_V2_SiteKey", 18 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // PTYROUTINE Name(GetRecaptcha_V2_SiteKey)
      //
      rtn.Line( 18 );
      {

         //
         // #COM_SELF.AssertAvailable
         //
         rtn.Line( 21 );
         this.mthASSERTAVAILABLE();

         //
         // #Result := #Singleton.Recaptcha_V2_SiteKey
         //
         rtn.Line( 23 );
         RESULT.set( ref.SINGLETON.getRECAPTCHA_V2_SITEKEY() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 24 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // DEFINE_PTY Name(Recaptcha_V2_SiteKey) Get(GetRecaptcha_V2_SiteKey)
   //
   COM_OWNER.getRECAPTCHA_V2_SITEKEY = function()
   {
      return this.mthGETRECAPTCHA_V2_SITEKEY();
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
   rc: [ "XLBA0067", "XLBA0086" ],
   dc: [ "XLBA0086" ]
});

//# sourceURL=xlba0087.js
