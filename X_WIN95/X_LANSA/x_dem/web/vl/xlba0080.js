// -----------------------------
// -- Reusable Part: XLBA0080 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0080", 
   nm: "XUtil_JsonWriter", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-common] JSON Writer", 
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
      },
      XLB00047:
      {
         ic: 0,
         nm: "XLB00047",
         an: "XLib_NUMBER",
         ft: "P",
         ln: 30,
         dc: 9,
         lb: "Number",
         h1: "Number",
         h2: " ",
         h3: " ",
         de: "Extended Library - Number Data Type",
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
         AsString: 
         {
         },

         BeginObject: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         EndObject: 
         {
         },

         BeginArray: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         EndArray: 
         {
         },

         Null: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         String: 
         {
            ps: 
            {
               "Value":
               {
                  pt: "i"
               },

               "Name":
               {
                  pt: "i"
               }
            }
         },

         Boolean: 
         {
            ps: 
            {
               "Value":
               {
                  pt: "i"
               },

               "Name":
               {
                  pt: "i"
               }
            }
         },

         Integer: 
         {
            ps: 
            {
               "Value":
               {
                  pt: "i"
               },

               "Name":
               {
                  pt: "i"
               }
            }
         },

         Decimal: 
         {
            ps: 
            {
               "Value":
               {
                  pt: "i"
               },

               "Name":
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
         this.addFields( "XLBA0080", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XInternal_JsonWriter_Widget) Name(#Widget)
         //
         var WIDGET = this.createReference( "WIDGET", "XLBA0078" );

         // ------------------------
         // -- Initialize #WIDGET --
         // ------------------------
         WIDGET.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthASSTRING - AsString
   //
   COM_OWNER.mthASSTRING = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AsString", 6 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // MTHROUTINE Name(AsString)
      //
      rtn.Line( 6 );
      {

         //
         // #Result := #Widget.ToString
         //
         rtn.Line( 9 );
         RESULT.set( ref.WIDGET.mthTOSTRING() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 10 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthBEGINOBJECT - BeginObject
   //
   COM_OWNER.mthBEGINOBJECT = function( parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "BeginObject", 12 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(BeginObject)
      //
      rtn.Line( 12 );
      {

         //
         // #Widget.BeginObject Key(#Name)
         //
         rtn.Line( 15 );
         ref.WIDGET.mthBEGINOBJECT( NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 16 );
      rtn.end();
   };

   //
   // mthENDOBJECT - EndObject
   //
   COM_OWNER.mthENDOBJECT = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "EndObject", 18 );

      //
      // MTHROUTINE Name(EndObject)
      //
      rtn.Line( 18 );
      {

         //
         // #Widget.EndObject
         //
         rtn.Line( 19 );
         ref.WIDGET.mthENDOBJECT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 20 );
      rtn.end();
   };

   //
   // mthBEGINARRAY - BeginArray
   //
   COM_OWNER.mthBEGINARRAY = function( parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "BeginArray", 22 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(BeginArray)
      //
      rtn.Line( 22 );
      {

         //
         // #Widget.BeginArray Key(#Name)
         //
         rtn.Line( 25 );
         ref.WIDGET.mthBEGINARRAY( NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      rtn.end();
   };

   //
   // mthENDARRAY - EndArray
   //
   COM_OWNER.mthENDARRAY = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "EndArray", 28 );

      //
      // MTHROUTINE Name(EndArray)
      //
      rtn.Line( 28 );
      {

         //
         // #Widget.EndArray
         //
         rtn.Line( 29 );
         ref.WIDGET.mthENDARRAY();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 30 );
      rtn.end();
   };

   //
   // mthNULL - Null
   //
   COM_OWNER.mthNULL = function( parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Null", 32 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(Null)
      //
      rtn.Line( 32 );
      {

         //
         // #Widget.Null Key(#Name)
         //
         rtn.Line( 35 );
         ref.WIDGET.mthNULL( NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 36 );
      rtn.end();
   };

   //
   // mthSTRING - String
   //
   COM_OWNER.mthSTRING = function( parm_VALUE, parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "String", 38 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Value)
      //
      var VALUE = rtn.createParameter( "VALUE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(String)
      //
      rtn.Line( 38 );
      {

         //
         // #Widget.String Key(#Name) Value(#Value)
         //
         rtn.Line( 42 );
         ref.WIDGET.mthSTRING( VALUE.get(), NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
      rtn.end();
   };

   //
   // mthBOOLEAN - Boolean
   //
   COM_OWNER.mthBOOLEAN = function( parm_VALUE, parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Boolean", 45 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_BOLN) Name(#Value)
      //
      var VALUE = rtn.createParameter( "VALUE", "PRIM_BOLN" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(Boolean)
      //
      rtn.Line( 45 );
      {

         //
         // #Widget.Boolean Key(#Name) Value(#Value)
         //
         rtn.Line( 49 );
         ref.WIDGET.mthBOOLEAN( VALUE.get(), NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 50 );
      rtn.end();
   };

   //
   // mthINTEGER - Integer
   //
   COM_OWNER.mthINTEGER = function( parm_VALUE, parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Integer", 52 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XLB00051.DataClass );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(Integer)
      //
      rtn.Line( 52 );
      {

         //
         // #Widget.Integer Key(#Name) Value(#Value)
         //
         rtn.Line( 56 );
         ref.WIDGET.mthINTEGER( VALUE.get(), NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 57 );
      rtn.end();
   };

   //
   // mthDECIMAL - Decimal
   //
   COM_OWNER.mthDECIMAL = function( parm_VALUE, parm_NAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Decimal", 59 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_NUMBER) Name(#Value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XLB00047.DataClass );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Name) Mandatory('')
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );
      NAME.set( ( parm_NAME === undefined )  ?  ( "" ) : ( parm_NAME ) );

      //
      // MTHROUTINE Name(Decimal)
      //
      rtn.Line( 59 );
      {

         //
         // #Widget.Decimal Key(#Name) Value(#Value)
         //
         rtn.Line( 63 );
         ref.WIDGET.mthDECIMAL( VALUE.get(), NAME.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 64 );
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

   // -----------------------------
   // -- XLB00047 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XLB00047.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XLB00047 );
      };

      Lansa.createFieldClass( { co: Fields.XLB00047.DataClass, an: "PRIM_FLD", fn: "XLB00047" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0078" ],
   rp: [ "PRIM_OBJT", "PRIM_FLD" ]
});

//# sourceURL=xlba0080.js
