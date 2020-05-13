// -----------------------------
// -- Reusable Part: XLBA0016 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0016", 
   nm: "XWS_OAuth2_Client", 
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
      an: "PRIM_OBJT", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ShowSigninForm: 
         {
            ps: 
            {
               "OAuth2Provider":
               {
                  pt: "i"
               },

               "OAuth2RedirectUrl":
               {
                  pt: "i"
               },

               "AdditionalState":
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
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthSHOWSIGNINFORM - ShowSigninForm
   //
   COM_OWNER.mthSHOWSIGNINFORM = function( parm_OAUTH2PROVIDER, parm_OAUTH2REDIRECTURL, parm_ADDITIONALSTATE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowSigninForm", 4 ), mth = rtn;

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#OAuth2Provider)
      //
      var OAUTH2PROVIDER = rtn.createParameter( "OAUTH2PROVIDER", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#OAuth2RedirectUrl)
      //
      var OAUTH2REDIRECTURL = rtn.createParameter( "OAUTH2REDIRECTURL", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#AdditionalState) Mandatory('')
      //
      var ADDITIONALSTATE = rtn.createParameter( "ADDITIONALSTATE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      OAUTH2PROVIDER.set( parm_OAUTH2PROVIDER );
      OAUTH2REDIRECTURL.set( parm_OAUTH2REDIRECTURL );
      ADDITIONALSTATE.set( ( parm_ADDITIONALSTATE === undefined )  ?  ( "" ) : ( parm_ADDITIONALSTATE ) );

      //
      // DEFINE_COM Class(#XWS_OAuth2_ServerModule.GetLoginUrl) Name(#GetLoginUrl)
      //
      var GETLOGINURL = rtn.createDataRequest( "GETLOGINURL", "XLBA0013", "GETLOGINURL" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#LoginUrl)
      //
      var LOGINURL = rtn.createReference( "LOGINURL", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#XClientDiagnosticsMessage) Name(#DiagMsg)
      //
      var DIAGMSG = rtn.createReference( "DIAGMSG", "XLBA0049" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorCode)
      //
      var ERRORCODE = rtn.createReference( "ERRORCODE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage)
      //
      var ERRORMESSAGE = rtn.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      // -----------------------------
      // -- Initialize #GETLOGINURL --
      // -----------------------------
      GETLOGINURL.initialize();

      // --------------------------
      // -- Initialize #LOGINURL --
      // --------------------------
      LOGINURL.initialize();

      // -------------------------
      // -- Initialize #DIAGMSG --
      // -------------------------
      DIAGMSG.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      // ---------------------------
      // -- Initialize #ERRORCODE --
      // ---------------------------
      ERRORCODE.initialize();

      // ------------------------------
      // -- Initialize #ERRORMESSAGE --
      // ------------------------------
      ERRORMESSAGE.initialize();

      // -----------------------------------------
      // -- Add Event Handlers for #GETLOGINURL --
      // -----------------------------------------
      GETLOGINURL.addEventHandler( "COMPLETED", this, evtRoutine1 );

      //
      // MTHROUTINE Name(ShowSigninForm)
      //
      rtn.Line( 4 );
      {

         //
         // #GetLoginUrl.ExecuteAsync Oauth2provider(#OAuth2Provider) Result(#LoginUrl) Redirecturl(#OAuth2RedirectUrl) Ok(#OK) Errorcode(#ErrorCode) Errormessage(#ErrorMessage) Additionalstate(#AdditionalState)
         //
         rtn.Line( 16 );
         GETLOGINURL.mthEXECUTEASYNC( { FLD: { "FLD_OAUTH2PROVIDER": OAUTH2PROVIDER.get(), "FLD_OAUTH2REDIRECTURL": OAUTH2REDIRECTURL.get(), "FLD_ADDITIONALSTATE": ADDITIONALSTATE.get() } }, { FLD: { "FLD_LOGINURL": LOGINURL, "FLD_OK": OK, "FLD_ERRORCODE": ERRORCODE, "FLD_ERRORMESSAGE": ERRORMESSAGE } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 30 );
      rtn.end();

      //
      // evtRoutine1 - #GetLoginUrl.Completed
      //
      function evtRoutine1( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetLoginUrl.Completed", 18, mth );

         //
         // EVTROUTINE Handling(#GetLoginUrl.Completed)
         //
         rtn.Line( 18 );
         {

            //
            // IF (#OK)
            //
            rtn.Line( 19 );
            if ( Lansa.toBool( OK.get() ) )
            {

               //
               // #SYS_WEB.Navigate Url(#LoginUrl) Target(Current)
               //
               rtn.Line( 20 );
               Lansa.WEB().mthNAVIGATE( LOGINURL.get(), "CURRENT" );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #DiagMsg.AddStringValue Key(Type) Value(Error)
               //
               rtn.Line( 22 );
               DIAGMSG.mthADDSTRINGVALUE( "TYPE", "ERROR" );

               //
               // #DiagMsg.AddStringValue Key(Source) Value(OAuth2.Login)
               //
               rtn.Line( 23 );
               DIAGMSG.mthADDSTRINGVALUE( "SOURCE", "OAUTH2.LOGIN" );

               //
               // #DiagMsg.AddStringValue Key(OAuth2Provider) Value(#OAuth2Provider)
               //
               rtn.Line( 24 );
               DIAGMSG.mthADDSTRINGVALUE( "OAUTH2PROVIDER", OAUTH2PROVIDER.get() );

               //
               // #DiagMsg.AddStringValue Key(Code) Value(#ErrorCode)
               //
               rtn.Line( 25 );
               DIAGMSG.mthADDSTRINGVALUE( "CODE", ERRORCODE.get() );

               //
               // #DiagMsg.AddStringValue Key(Text) Value(#ErrorMessage)
               //
               rtn.Line( 26 );
               DIAGMSG.mthADDSTRINGVALUE( "TEXT", ERRORMESSAGE.get() );

               //
               // #DiagMsg.Dispatch
               //
               rtn.Line( 27 );
               DIAGMSG.mthDISPATCH();

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 29 );
         rtn.end();
      }
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT", "PRIM_WEB.DataRequest" ],
   dc: [ "XLBA0049" ],
   dp: [ "PRIM_DC.UnicodeString", "PRIM_BOLN" ]
});

//# sourceURL=xlba0016.js
