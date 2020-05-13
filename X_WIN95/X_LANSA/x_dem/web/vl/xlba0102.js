// -----------------------------
// -- Reusable Part: XLBA0102 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0102", 
   nm: "XInternal_DeviceSqlDb_QueryContext", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-lansa-mobile]", 
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
      an: "XLBA0092", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         Query: 
         {
            da: "r"
         },

         ParentContext: 
         {
            da: "r"
         },

         Results: 
         {
            da: "r"
         },

         HasFailedSubquery: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         CreateResult: 
         {
            ps: 
            {
               "Rows":
               {
                  pt: "i"
               },

               "Status":
               {
                  pt: "i"
               },

               "Message":
               {
                  pt: "i"
               }
            }
         },

         Internal_AddResult: 
         {
            ps: 
            {
               "Result":
               {
                  pt: "i"
               }
            }
         },

         IsSubResultsComplete: 
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
         // DEFINE_COM Class(#XDevice_SqlDb_Query) Name(#gQuery) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GQUERY" );

         //
         // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryContext) Name(#gParentContext) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GPARENTCONTEXT" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#XDevice_SqlDb_QueryResult>) Name(#gResults)
         //
         var GRESULTS = this.createReference( "GRESULTS", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gHasFailedSubquery)
         //
         var GHASFAILEDSUBQUERY = this.createReference( "GHASFAILEDSUBQUERY", "PRIM_BOLN" );

         // --------------------------
         // -- Initialize #GRESULTS --
         // --------------------------
         GRESULTS.setCollects( "XLBA0096" );
         GRESULTS.initialize();

         // ------------------------------------
         // -- Initialize #GHASFAILEDSUBQUERY --
         // ------------------------------------
         GHASFAILEDSUBQUERY.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCREATE - Create
   //
   COM_OWNER.mthCREATE = function( parm_QUERY, parm_PARENTCONTEXT )
   {
      var ref = this.REF, rtn = Lansa.conRoutine( this, COM_OWNER, "Create" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_Query) Name(#Query) Pass(*BY_REFERENCE)
      //
      var QUERY = rtn.createDynamicParameter( "QUERY" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XInternal_DeviceSqlDb_QueryContext) Name(#ParentContext) Pass(*BY_REFERENCE)
      //
      var PARENTCONTEXT = rtn.createDynamicParameter( "PARENTCONTEXT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      QUERY = parm_QUERY;
      PARENTCONTEXT = parm_PARENTCONTEXT;

      //
      // MTHROUTINE Name(Create) Options(*CONSTRUCTOR *REQUIRED)
      //
      {

         //
         // #gQuery <= #Query
         //
         rtn.Line( 18 );
         this.setrefGQUERY( QUERY );

         //
         // #gParentContext <= #ParentContext
         //
         rtn.Line( 19 );
         this.setrefGPARENTCONTEXT( PARENTCONTEXT );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 20 );
      return rtn.retNew( this );
   };

   //
   // mthCREATERESULT - CreateResult
   //
   COM_OWNER.mthCREATERESULT = function( parm_ROWS, parm_STATUS, parm_MESSAGE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "CreateResult", 22 );

      //
      // DEFINE_MAP For(*RESULT) Class(#XDevice_SqlDb_QueryResult) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_WEB.Json) Name(#Rows) Mandatory(*NULL) Pass(*BY_REFERENCE)
      //
      var ROWS = rtn.createDynamicParameter( "ROWS" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Status)
      //
      var STATUS = rtn.createParameter( "STATUS", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Message)
      //
      var MESSAGE = rtn.createParameter( "MESSAGE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ROWS = ( parm_ROWS === undefined )  ?  ( null ) : ( parm_ROWS );
      STATUS.set( parm_STATUS );
      MESSAGE.set( parm_MESSAGE );

      //
      // MTHROUTINE Name(CreateResult)
      //
      rtn.Line( 22 );
      {

         //
         // #Result <= *New #XDevice_SqlDb_QueryResult.Create( #Rows #gResults #Status #Message )
         //
         rtn.Line( 28 );
         RESULT = rtn.setref( "RESULT", Lansa.createAs( "XLBA0096", undefined, "mthCREATE", [ ROWS, ref.GRESULTS, STATUS.get(), MESSAGE.get() ] ) );

         //
         // IF (#gParentContext *IsNot *Null)
         //
         rtn.Line( 30 );
         if ( ( ref.GPARENTCONTEXT != null ) )
         {

            //
            // #gParentContext.Internal_AddResult Result(#Result)
            //
            rtn.Line( 31 );
            ref.GPARENTCONTEXT.mthINTERNAL_ADDRESULT( RESULT );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 33 );
      return rtn.retRef( RESULT );
   };

   //
   // mthINTERNAL_ADDRESULT - Internal_AddResult
   //
   COM_OWNER.mthINTERNAL_ADDRESULT = function( parm_RESULT )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Internal_AddResult", 35 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_QueryResult) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      RESULT = parm_RESULT;

      //
      // MTHROUTINE Name(Internal_AddResult)
      //
      rtn.Line( 35 );
      {

         //
         // #gResults.Insert Item(#Result)
         //
         rtn.Line( 38 );
         ref.GRESULTS.mthINSERT( RESULT );

         //
         // IF (#Result.Status <> OK)
         //
         rtn.Line( 40 );
         if ( Lansa.String.ne( RESULT.getSTATUS(), "OK" ) )
         {

            //
            // #gHasFailedSubquery := True
            //
            rtn.Line( 41 );
            ref.GHASFAILEDSUBQUERY.set( true );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
      rtn.end();
   };

   //
   // mthISSUBRESULTSCOMPLETE - IsSubResultsComplete
   //
   COM_OWNER.mthISSUBRESULTSCOMPLETE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "IsSubResultsComplete", 45 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_BOLN) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_BOLN" );

      //
      // MTHROUTINE Name(IsSubResultsComplete)
      //
      rtn.Line( 45 );
      {

         //
         // IF (#gQuery.QueryCount = 0)
         //
         rtn.Line( 48 );
         if ( Lansa.Number.eq( ref.GQUERY.getQUERYCOUNT(), 0 ) )
         {

            //
            // #Result := True
            //
            rtn.Line( 49 );
            RESULT.set( true );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // IF (#gResults.ItemCount = #gQuery.QueryCount)
            //
            rtn.Line( 51 );
            if ( Lansa.Number.eq( ref.GRESULTS.getItemCount(), ref.GQUERY.getQUERYCOUNT() ) )
            {

               //
               // #Result := True
               //
               rtn.Line( 52 );
               RESULT.set( true );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 55 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // DEFINE_PTY Name(Query) Get(*REFERENCE #gQuery)
   //
   COM_OWNER.getQUERY = function()
   {
      return this.REF.GQUERY;
   };

   //
   // DEFINE_PTY Name(ParentContext) Get(*REFERENCE #gParentContext)
   //
   COM_OWNER.getPARENTCONTEXT = function()
   {
      return this.REF.GPARENTCONTEXT;
   };

   //
   // DEFINE_PTY Name(Results) Get(*REFERENCE #gResults)
   //
   COM_OWNER.getRESULTS = function()
   {
      return this.REF.GRESULTS;
   };

   //
   // DEFINE_PTY Name(HasFailedSubquery) Get(*AUTO #gHasFailedSubquery)
   //
   COM_OWNER.getHASFAILEDSUBQUERY = function()
   {
      return this.REF.GHASFAILEDSUBQUERY.get();
   };

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefGQUERY = function( refNew )
   {
      this.setref( "GQUERY", refNew );
   };

   COM_OWNER.setrefGPARENTCONTEXT = function( refNew )
   {
      this.setref( "GPARENTCONTEXT", refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_LCOL", "PRIM_BOLN" ],
   dc: [ "XLBA0098", "XLBA0102", "XLBA0096" ]
});

//# sourceURL=xlba0102.js
