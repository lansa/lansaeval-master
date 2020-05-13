// -----------------------------
// -- Reusable Part: XLBA0092 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0092", 
   nm: "XInternal_Client_BaseObject", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] Client Base", 
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
         FatalError: 
         {
            ps: 
            {
               "Text":
               {
                  pt: "i"
               }
            }
         },

         LogInfo: 
         {
            ps: 
            {
               "Text":
               {
                  pt: "i"
               }
            }
         },

         LogError: 
         {
            ps: 
            {
               "Text":
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
   // mthFATALERROR - FatalError
   //
   COM_OWNER.mthFATALERROR = function( parm_TEXT )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "FatalError", 4 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Text)
      //
      var TEXT = rtn.createParameter( "TEXT", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TEXT.set( parm_TEXT );

      //
      // MTHROUTINE Name(FatalError) Access(*PROTECT)
      //
      rtn.Line( 4 );
      {

         //
         // #Text := 'Fatal error: ' + #Text
         //
         rtn.Line( 7 );
         TEXT.set( Lansa.add( "Fatal error: ", TEXT.get() ) );

         //
         // #SYS_WEB.Console.Log Text(#Text) Type(Error)
         //
         rtn.Line( 9 );
         Lansa.WEB().getConsole().mthLOG( TEXT.get(), "ERROR" );

         //
         // #SYS_WEB.Alert Caption(#Text)
         //
         rtn.Line( 10 );
         Lansa.WEB().mthALERT( TEXT.get() );

         //
         // ABORT Msgtxt(#Text)
         //
         rtn.Line( 11 );
         Lansa.abort( TEXT );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 12 );
      rtn.end();
   };

   //
   // mthLOGINFO - LogInfo
   //
   COM_OWNER.mthLOGINFO = function( parm_TEXT )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "LogInfo", 14 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Text)
      //
      var TEXT = rtn.createParameter( "TEXT", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TEXT.set( parm_TEXT );

      //
      // MTHROUTINE Name(LogInfo) Access(*PROTECT)
      //
      rtn.Line( 14 );
      {

         //
         // #SYS_WEB.Console.Log Type(Information) Text(#Text)
         //
         rtn.Line( 17 );
         Lansa.WEB().getConsole().mthLOG( TEXT.get(), "INFORMATION" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 18 );
      rtn.end();
   };

   //
   // mthLOGERROR - LogError
   //
   COM_OWNER.mthLOGERROR = function( parm_TEXT )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "LogError", 20 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Text)
      //
      var TEXT = rtn.createParameter( "TEXT", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TEXT.set( parm_TEXT );

      //
      // MTHROUTINE Name(LogError) Access(*PROTECT)
      //
      rtn.Line( 20 );
      {

         //
         // #SYS_WEB.Console.Log Type(Information) Text(#Text)
         //
         rtn.Line( 23 );
         Lansa.WEB().getConsole().mthLOG( TEXT.get(), "INFORMATION" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 24 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xlba0092.js
