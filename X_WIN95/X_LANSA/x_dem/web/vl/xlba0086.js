// -----------------------------
// -- Reusable Part: XLBA0086 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0086", 
   nm: "XInternal_Google_ClientConfig_Singleton", 
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
      an: "XLBA0066", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         Recaptcha_V2_SiteKey: 
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
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#Recaptcha_V2_SiteKey)
         //
         var RECAPTCHA_V2_SITEKEY = this.createReference( "RECAPTCHA_V2_SITEKEY", "PRIM_DC", "UnicodeString" );

         // --------------------------------------
         // -- Initialize #RECAPTCHA_V2_SITEKEY --
         // --------------------------------------
         RECAPTCHA_V2_SITEKEY.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthFETCH - Fetch
   //
   COM_OWNER.mthFETCH = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Fetch", 8 ), mth = rtn;

      //
      // DEFINE_COM Class(#XInternal_Google_ClientConfig_ServerModule.GetConfig) Name(#Srv)
      //
      var SRV = rtn.createDataRequest( "SRV", "XLBA0085", "GETCONFIG" );

      // ---------------------
      // -- Initialize #SRV --
      // ---------------------
      SRV.initialize();

      // ---------------------------------
      // -- Add Event Handlers for #SRV --
      // ---------------------------------
      SRV.addEventHandler( "COMPLETED", this, evtRoutine1 );

      //
      // MTHROUTINE Name(Fetch) Options(*REDEFINE)
      //
      rtn.Line( 8 );
      {

         //
         // #Srv.ExecuteAsync Recaptcha_V2_Sitekey(#Recaptcha_V2_SiteKey)
         //
         rtn.Line( 11 );
         SRV.mthEXECUTEASYNC( {  }, { FLD: { "FLD_RECAPTCHA_V2_SITEKEY": ref.RECAPTCHA_V2_SITEKEY } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 16 );
      rtn.end();

      //
      // evtRoutine1 - #Srv.Completed
      //
      function evtRoutine1( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Srv.Completed", 13, mth );

         //
         // EVTROUTINE Handling(#Srv.Completed)
         //
         rtn.Line( 13 );
         {

            //
            // #COM_SELF.SetAvailable
            //
            rtn.Line( 14 );
            this.mthSETAVAILABLE();

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 15 );
         rtn.end();
      }
   };

   //
   // DEFINE_PTY Name(Recaptcha_V2_SiteKey) Get(*Auto #Recaptcha_V2_SiteKey)
   //
   COM_OWNER.getRECAPTCHA_V2_SITEKEY = function()
   {
      return this.REF.RECAPTCHA_V2_SITEKEY.get();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0066" ],
   rp: [ "PRIM_DC.UnicodeString", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xlba0086.js
