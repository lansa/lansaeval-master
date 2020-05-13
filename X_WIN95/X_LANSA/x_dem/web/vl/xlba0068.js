// -----------------------------
// -- Reusable Part: XLBA0068 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0068", 
   nm: "XInternal_PayPal_ClientConfig_Singleton", 
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
         ClientId_Production: 
         {
            da: "r"
         },

         ClientId_Sandbox: 
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
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ClientId_Prod)
         //
         var CLIENTID_PROD = this.createReference( "CLIENTID_PROD", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ClientId_Sandbox)
         //
         var CLIENTID_SANDBOX = this.createReference( "CLIENTID_SANDBOX", "PRIM_DC", "UnicodeString" );

         // -------------------------------
         // -- Initialize #CLIENTID_PROD --
         // -------------------------------
         CLIENTID_PROD.initialize();

         // ----------------------------------
         // -- Initialize #CLIENTID_SANDBOX --
         // ----------------------------------
         CLIENTID_SANDBOX.initialize();
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
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Fetch", 10 ), mth = rtn;

      //
      // DEFINE_COM Class(#XInternal_PayPal_ClientConfig_ServerModule.GetConfig) Name(#Srv)
      //
      var SRV = rtn.createDataRequest( "SRV", "XLBA0065", "GETCONFIG" );

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
      rtn.Line( 10 );
      {

         //
         // #Srv.ExecuteAsync Clientid_Prod(#ClientId_Prod) Clientid_Sandbox(#ClientId_Sandbox)
         //
         rtn.Line( 13 );
         SRV.mthEXECUTEASYNC( {  }, { FLD: { "FLD_CLIENTID_PROD": ref.CLIENTID_PROD, "FLD_CLIENTID_SANDBOX": ref.CLIENTID_SANDBOX } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 18 );
      rtn.end();

      //
      // evtRoutine1 - #Srv.Completed
      //
      function evtRoutine1( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Srv.Completed", 15, mth );

         //
         // EVTROUTINE Handling(#Srv.Completed)
         //
         rtn.Line( 15 );
         {

            //
            // #COM_SELF.SetAvailable
            //
            rtn.Line( 16 );
            this.mthSETAVAILABLE();

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 17 );
         rtn.end();
      }
   };

   //
   // DEFINE_PTY Name(ClientId_Production) Get(*Auto #ClientId_Prod)
   //
   COM_OWNER.getCLIENTID_PRODUCTION = function()
   {
      return this.REF.CLIENTID_PROD.get();
   };

   //
   // DEFINE_PTY Name(ClientId_Sandbox) Get(*Auto #ClientId_Sandbox)
   //
   COM_OWNER.getCLIENTID_SANDBOX = function()
   {
      return this.REF.CLIENTID_SANDBOX.get();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0066" ],
   rp: [ "PRIM_DC.UnicodeString", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xlba0068.js
