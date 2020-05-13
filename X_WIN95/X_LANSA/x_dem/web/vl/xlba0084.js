// -----------------------------
// -- Reusable Part: XLBA0084 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0084", 
   nm: "XInternal_WebUtil", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] Internal", 
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
      // MTHROUTINE Name(FatalError)
      //
      rtn.Line( 4 );
      {

         //
         // #Text := 'Fatal error: ' + #Text
         //
         rtn.Line( 7 );
         TEXT.set( Lansa.add( "Fatal error: ", TEXT.get() ) );

         //
         // #SYS_WEB.Console.Log Type(Error) Text(#Text)
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

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xlba0084.js
