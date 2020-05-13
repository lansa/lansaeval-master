// -----------------------------
// -- Reusable Part: XLBA0049 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0049", 
   nm: "XClientDiagnosticsMessage", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] Client-side Diags", 
   tl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XLB00051:
      {
         ic: 0,
         nm: "XLB00051",
         an: "XLib_INT64",
         ft: "I",
         ln: 8,
         dc: 0,
         lb: "Int64",
         h1: "Int64",
         h2: " ",
         h3: " ",
         de: "Extended Library - Int64 Data Type",
         dv: 0,
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_OBJT", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Dispatch: 
         {
         },

         AddStringValue: 
         {
            ps: 
            {
               "Key":
               {
                  pt: "i"
               },

               "Value":
               {
                  pt: "i"
               }
            }
         },

         AddIntegerValue: 
         {
            ps: 
            {
               "Key":
               {
                  pt: "i"
               },

               "Value":
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

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "XLBA0049", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XWebUtil_DispatchEvent) Name(#Event)
         //
         var EVENT = this.createReference( "EVENT", "XLBA0048" );

         // -----------------------
         // -- Initialize #EVENT --
         // -----------------------
         EVENT.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthDISPATCH - Dispatch
   //
   COM_OWNER.mthDISPATCH = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Dispatch", 6 );

      //
      // MTHROUTINE Name(Dispatch)
      //
      rtn.Line( 6 );
      {

         //
         // #Event.Dispatch Name('diag-agent')
         //
         rtn.Line( 7 );
         ref.EVENT.mthDISPATCH( "diag-agent" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 8 );
      rtn.end();
   };

   //
   // mthADDSTRINGVALUE - AddStringValue
   //
   COM_OWNER.mthADDSTRINGVALUE = function( parm_KEY, parm_VALUE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddStringValue", 10 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Key)
      //
      var KEY = rtn.createParameter( "KEY", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Value)
      //
      var VALUE = rtn.createParameter( "VALUE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      KEY.set( parm_KEY );
      VALUE.set( parm_VALUE );

      //
      // MTHROUTINE Name(AddStringValue)
      //
      rtn.Line( 10 );
      {

         //
         // #Event.AddStringValue Key(#Key) Value(#Value)
         //
         rtn.Line( 14 );
         ref.EVENT.mthADDSTRINGVALUE( KEY.get(), VALUE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 15 );
      rtn.end();
   };

   //
   // mthADDINTEGERVALUE - AddIntegerValue
   //
   COM_OWNER.mthADDINTEGERVALUE = function( parm_KEY, parm_VALUE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddIntegerValue", 17 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Key)
      //
      var KEY = rtn.createParameter( "KEY", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      KEY.set( parm_KEY );
      VALUE.set( parm_VALUE );

      //
      // MTHROUTINE Name(AddIntegerValue)
      //
      rtn.Line( 17 );
      {

         //
         // #Event.AddIntegerValue Key(#Key) Value(#Value)
         //
         rtn.Line( 21 );
         ref.EVENT.mthADDINTEGERVALUE( KEY.get(), VALUE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 22 );
      rtn.end();
   };

   // -----------------------------
   // -- XLB00051 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XLB00051.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XLB00051 );
      };

      Lansa.createFieldClass( { co: Fields.XLB00051.DataClass, an: "PRIM_FLD", fn: "XLB00051" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0048" ],
   rp: [ "PRIM_OBJT", "PRIM_FLD" ]
});

//# sourceURL=xlba0049.js
