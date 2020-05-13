// -----------------------------
// -- Reusable Part: XLBA0101 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0101", 
   nm: "XInternal_DeviceSqlDb_QueryExecutionQueue", 
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
      an: "XLBA0092", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Queue: 
         {
            ps: 
            {
               "Query":
               {
                  pt: "i"
               }
            }
         },

         QueueImpl: 
         {
            ps: 
            {
               "Query":
               {
                  pt: "i"
               },

               "ParentContext":
               {
                  pt: "i"
               }
            }
         },

         ExecuteNext: 
         {
         },

         ExecuteQueryImpl: 
         {
            ps: 
            {
               "ArgsJson":
               {
                  pt: "i"
               }
            }
         },

         FinalizeQueryExecution: 
         {
            ps: 
            {
               "TargetContext":
               {
                  pt: "i"
               },

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

         BeginExecute: 
         {
         },

         EndExecute: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         QueryCompleted: 
         {
            ps: 
            {
               "Context":
               {
                  pt: "i"
               },

               "Result":
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
         this.addFields( "XLBA0101", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gIsExecuting)
         //
         var GISEXECUTING = this.createReference( "GISEXECUTING", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#XInternal_DeviceSqlDb_QueryContext>) Name(#gList)
         //
         var GLIST = this.createReference( "GLIST", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryContext) Name(#ExecutingContext) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "EXECUTINGCONTEXT" );

         //
         // DEFINE_COM Class(#XInternal_DeviceSqlDb_Widget) Name(#gWidget) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GWIDGET" );

         //
         // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryArgumentConverter) Name(#gArgsConverter) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GARGSCONVERTER" );

         // ------------------------------
         // -- Initialize #GISEXECUTING --
         // ------------------------------
         GISEXECUTING.initialize();

         // -----------------------
         // -- Initialize #GLIST --
         // -----------------------
         GLIST.setCollects( "XLBA0102" );
         GLIST.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthQUEUE - Queue
   //
   COM_OWNER.mthQUEUE = function( parm_QUERY )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Queue", 14 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_Query) Name(#Query) Pass(*BY_REFERENCE)
      //
      var QUERY = rtn.createDynamicParameter( "QUERY" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      QUERY = parm_QUERY;

      //
      // MTHROUTINE Name(Queue)
      //
      rtn.Line( 14 );
      {

         //
         // #COM_SELF.QueueImpl Query(#Query)
         //
         rtn.Line( 17 );
         this.mthQUEUEIMPL( QUERY, undefined );

         //
         // IF (*Not #gIsExecuting)
         //
         rtn.Line( 19 );
         if ( Lansa.toBool( Lansa.not( ref.GISEXECUTING.get() ) ) )
         {

            //
            // #COM_SELF.BeginExecute
            //
            rtn.Line( 20 );
            this.mthBEGINEXECUTE();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 22 );
      rtn.end();
   };

   //
   // mthQUEUEIMPL - QueueImpl
   //
   COM_OWNER.mthQUEUEIMPL = function( parm_QUERY, parm_PARENTCONTEXT )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "QueueImpl", 24 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_Query) Name(#Query) Pass(*BY_REFERENCE)
      //
      var QUERY = rtn.createDynamicParameter( "QUERY" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XInternal_DeviceSqlDb_QueryContext) Name(#ParentContext) Mandatory(*NULL) Pass(*BY_REFERENCE)
      //
      var PARENTCONTEXT = rtn.createDynamicParameter( "PARENTCONTEXT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      QUERY = parm_QUERY;
      PARENTCONTEXT = ( parm_PARENTCONTEXT === undefined )  ?  ( null ) : ( parm_PARENTCONTEXT );

      //
      // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryContext) Name(#QueryContext) Reference(*DYNAMIC)
      //
      var QUERYCONTEXT = rtn.createDynamicReference( "QUERYCONTEXT" );

      //
      // DEFINE_COM Class(#XLib_INT64) Name(#I)
      //
      var I = rtn.createFieldReference( "I", Fields.XLB00051.DataClass );

      // -------------------
      // -- Initialize #I --
      // -------------------
      I.initialize();

      //
      // MTHROUTINE Name(QueueImpl) Access(*PRIVATE)
      //
      rtn.Line( 24 );
      {

         //
         // #QueryContext <= *New #XInternal_DeviceSqlDb_QueryContext.Create( #Query #ParentContext )
         //
         rtn.Line( 31 );
         QUERYCONTEXT = rtn.setref( "QUERYCONTEXT", Lansa.createAs( "XLBA0102", undefined, "mthCREATE", [ QUERY, PARENTCONTEXT ] ) );

         //
         // IF (#Query.QueryCount > 0)
         //
         rtn.Line( 33 );
         if ( Lansa.Number.gt( QUERY.getQUERYCOUNT(), 0 ) )
         {

            //
            // BEGIN_LOOP Using(#I) To(#Query.QueryCount)
            //
            rtn.Line( 34 );
            for( var i1 = 1, step1 = 1, to1 = Lansa.toInt( QUERY.getQUERYCOUNT() ); I.set( i1 ), ( ( ( step1 >= 0 ) && ( i1 <= to1 ) ) || ( ( step1 < 0 ) && ( i1 >= to1 ) ) ); i1 += step1 )
            {

               //
               // #COM_SELF.QueueImpl Query(#Query.QueryAt<#I>) Parentcontext(#QueryContext)
               //
               rtn.Line( 35 );
               this.mthQUEUEIMPL( QUERY.getQUERYAT( I.get() ), QUERYCONTEXT );

            //
            // END_LOOP 
            //
            }

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #gList.Insert Item(#QueryContext)
            //
            rtn.Line( 38 );
            ref.GLIST.mthINSERT( QUERYCONTEXT );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 41 );
      rtn.end();
   };

   //
   // mthEXECUTENEXT - ExecuteNext
   //
   COM_OWNER.mthEXECUTENEXT = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ExecuteNext", 43 );

      //
      // DEFINE_COM Class(#XDevice_SqlDb_Query) Name(#Query) Reference(*DYNAMIC)
      //
      var QUERY = rtn.createDynamicReference( "QUERY" );

      //
      // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryArgumentConverter) Name(#ArgsConverter) Reference(*DYNAMIC)
      //
      var ARGSCONVERTER = rtn.createDynamicReference( "ARGSCONVERTER" );

      //
      // DEFINE_COM Class(#PRIM_WEB.Json) Name(#ArgsJson) Reference(*DYNAMIC)
      //
      var ARGSJSON = rtn.createDynamicReference( "ARGSJSON" );

      //
      // MTHROUTINE Name(ExecuteNext) Access(*PRIVATE)
      //
      rtn.Line( 43 );
      {

         //
         // IF (*Not #gIsExecuting)
         //
         rtn.Line( 48 );
         if ( Lansa.toBool( Lansa.not( ref.GISEXECUTING.get() ) ) )
         {

            //
            // #COM_SELF.FatalError Text('Query executor is not running')
            //
            rtn.Line( 49 );
            this.mthFATALERROR( "Query executor is not running" );

         //
         // ENDIF 
         //
         }

         //
         // IF (#ExecutingContext *IsNot *Null)
         //
         rtn.Line( 52 );
         if ( ( ref.EXECUTINGCONTEXT != null ) )
         {

            //
            // #COM_SELF.FatalError Text('Looks like the previous query has not completed execution')
            //
            rtn.Line( 53 );
            this.mthFATALERROR( "Looks like the previous query has not completed execution" );

         //
         // ENDIF 
         //
         }

         //
         // IF (#gList.ItemCount = 0)
         //
         rtn.Line( 56 );
         if ( Lansa.Number.eq( ref.GLIST.getItemCount(), 0 ) )
         {

            //
            // #COM_SELF.FatalError Text('No more item to execute')
            //
            rtn.Line( 57 );
            this.mthFATALERROR( "No more item to execute" );

         //
         // ENDIF 
         //
         }

         //
         // #Query <= #gList.First.Query
         //
         rtn.Line( 61 );
         QUERY = rtn.setref( "QUERY", ref.GLIST.getFirst().getQUERY() );

         //
         // #ArgsConverter <= *New #XInternal_DeviceSqlDb_QueryArgumentConverter.Create( #Query.Arguments )
         //
         rtn.Line( 62 );
         ARGSCONVERTER = rtn.setref( "ARGSCONVERTER", Lansa.createAs( "XLBA0103", undefined, "mthCREATE", [ QUERY.getARGUMENTS() ] ) );

         //
         // IF (#ArgsConverter.HasAsyncTransform)
         //
         rtn.Line( 64 );
         if ( ARGSCONVERTER.mthHASASYNCTRANSFORM() )
         {

            //
            // #gArgsConverter <= #ArgsConverter
            //
            rtn.Line( 65 );
            this.setrefGARGSCONVERTER( ARGSCONVERTER );

            //
            // #ArgsConverter.ConvertAsync
            //
            rtn.Line( 66 );
            ARGSCONVERTER.mthCONVERTASYNC();

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #ArgsJson <= #ArgsConverter.Convert
            //
            rtn.Line( 68 );
            ARGSJSON = rtn.setref( "ARGSJSON", ARGSCONVERTER.mthCONVERT() );

            //
            // #COM_SELF.ExecuteQueryImpl Argsjson(#ArgsJson)
            //
            rtn.Line( 69 );
            this.mthEXECUTEQUERYIMPL( ARGSJSON );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 71 );
      rtn.end();
   };

   //
   // evtRoutine1 - #gArgsConverter.AsyncCompleted
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#gArgsConverter.AsyncCompleted", 73 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var ARGSJSON = parms.ref( "RESULT" );

      //
      // EVTROUTINE Handling(#gArgsConverter.AsyncCompleted) Result(#ArgsJson)
      //
      rtn.Line( 73 );
      {

         //
         // #gArgsConverter <= *NULL
         //
         rtn.Line( 74 );
         this.setrefGARGSCONVERTER( null );

         //
         // #COM_SELF.ExecuteQueryImpl Argsjson(#ArgsJson)
         //
         rtn.Line( 76 );
         this.mthEXECUTEQUERYIMPL( ARGSJSON );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 77 );
      rtn.end();
   };

   //
   // mthEXECUTEQUERYIMPL - ExecuteQueryImpl
   //
   COM_OWNER.mthEXECUTEQUERYIMPL = function( parm_ARGSJSON )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ExecuteQueryImpl", 79 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_WEB.Json) Name(#ArgsJson) Pass(*BY_REFERENCE)
      //
      var ARGSJSON = rtn.createDynamicParameter( "ARGSJSON" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ARGSJSON = parm_ARGSJSON;

      //
      // DEFINE_COM Class(#XDevice_SqlDb_Query) Name(#Query) Reference(*DYNAMIC)
      //
      var QUERY = rtn.createDynamicReference( "QUERY" );

      //
      // MTHROUTINE Name(ExecuteQueryImpl) Access(*PRIVATE)
      //
      rtn.Line( 79 );
      {

         //
         // #gList.RemoveFirst Result(#ExecutingContext)
         //
         rtn.Line( 84 );
         this.setrefEXECUTINGCONTEXT( ref.GLIST.mthREMOVEFIRST() );

         //
         // #Query <= #ExecutingContext.Query
         //
         rtn.Line( 86 );
         QUERY = rtn.setref( "QUERY", ref.EXECUTINGCONTEXT.getQUERY() );

         //
         // #gWidget <= *New #XInternal_DeviceSqlDb_Widget
         //
         rtn.Line( 87 );
         this.setrefGWIDGET( Lansa.createComponent( "XLBA0093" ) );

         //
         // #gWidget.ExecuteSql Sql(#Query.Sql) Args(#ArgsJson)
         //
         rtn.Line( 89 );
         ref.GWIDGET.mthEXECUTESQL( QUERY.getSQL(), ARGSJSON.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 90 );
      rtn.end();
   };

   //
   // evtRoutine2 - #gWidget.ExecuteSqlCompleted
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#gWidget.ExecuteSqlCompleted", 92 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var ROWSJSONSTR = parms.ref( "ROWS" );
      var STATUS = parms.ref( "STATUS" );
      var MESSAGE = parms.ref( "MESSAGE" );

      //
      // DEFINE_COM Class(#PRIM_WEB.Json) Name(#Rows) Reference(*DYNAMIC)
      //
      var ROWS = rtn.createDynamicReference( "ROWS" );

      //
      // EVTROUTINE Handling(#gWidget.ExecuteSqlCompleted) Rows(#RowsJsonStr) Status(#Status) Message(#Message)
      //
      rtn.Line( 92 );
      {

         //
         // IF ((#Status = OK) *And (#RowsJsonStr <> ''))
         //
         rtn.Line( 95 );
         if ( Lansa.and( Lansa.String.eq( STATUS.get(), "OK" ), Lansa.String.ne( ROWSJSONSTR.get(), "" ) ) )
         {

            //
            // #Rows <= *New #PRIM_WEB.Json
            //
            rtn.Line( 96 );
            ROWS = rtn.setref( "ROWS", Lansa.createComponent( "PRIM_WEB", "Json" ) );

            //
            // #Rows.Text := #RowsJsonStr
            //
            rtn.Line( 97 );
            ROWS.setText( ROWSJSONSTR.get() );

         //
         // ENDIF 
         //
         }

         //
         // #COM_SELF.FinalizeQueryExecution Targetcontext(#ExecutingContext) Rows(#Rows) Status(#Status) Message(#Message)
         //
         rtn.Line( 100 );
         this.mthFINALIZEQUERYEXECUTION( ref.EXECUTINGCONTEXT, ROWS, STATUS.get(), MESSAGE.get() );

         //
         // #gWidget <= *NULL
         //
         rtn.Line( 102 );
         this.setrefGWIDGET( null );

         //
         // #ExecutingContext <= *NULL
         //
         rtn.Line( 103 );
         this.setrefEXECUTINGCONTEXT( null );

         //
         // IF (#gList.ItemCount > 0)
         //
         rtn.Line( 106 );
         if ( Lansa.Number.gt( ref.GLIST.getItemCount(), 0 ) )
         {

            //
            // #COM_SELF.ExecuteNext
            //
            rtn.Line( 107 );
            this.mthEXECUTENEXT();

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #COM_SELF.EndExecute
            //
            rtn.Line( 109 );
            this.mthENDEXECUTE();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 111 );
      rtn.end();
   };

   //
   // mthFINALIZEQUERYEXECUTION - FinalizeQueryExecution
   //
   COM_OWNER.mthFINALIZEQUERYEXECUTION = function( parm_TARGETCONTEXT, parm_ROWS, parm_STATUS, parm_MESSAGE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "FinalizeQueryExecution", 113 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XInternal_DeviceSqlDb_QueryContext) Name(#TargetContext) Pass(*BY_REFERENCE)
      //
      var TARGETCONTEXT = rtn.createDynamicParameter( "TARGETCONTEXT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_WEB.Json) Name(#Rows) Pass(*BY_REFERENCE)
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
      TARGETCONTEXT = parm_TARGETCONTEXT;
      ROWS = parm_ROWS;
      STATUS.set( parm_STATUS );
      MESSAGE.set( parm_MESSAGE );

      //
      // DEFINE_COM Class(#XDevice_SqlDb_Query) Name(#Query) Reference(*DYNAMIC)
      //
      var QUERY = rtn.createDynamicReference( "QUERY" );

      //
      // DEFINE_COM Class(#XDevice_SqlDb_QueryResult) Name(#QueryResult) Reference(*DYNAMIC)
      //
      var QUERYRESULT = rtn.createDynamicReference( "QUERYRESULT" );

      //
      // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryContext) Name(#ParentContext) Reference(*DYNAMIC)
      //
      var PARENTCONTEXT = rtn.createDynamicReference( "PARENTCONTEXT" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ParentQueryStatus)
      //
      var PARENTQUERYSTATUS = rtn.createReference( "PARENTQUERYSTATUS", "PRIM_DC", "UnicodeString" );

      // -----------------------------------
      // -- Initialize #PARENTQUERYSTATUS --
      // -----------------------------------
      PARENTQUERYSTATUS.initialize();

      //
      // MTHROUTINE Name(FinalizeQueryExecution)
      //
      rtn.Line( 113 );
      {

         //
         // #Query <= #TargetContext.Query
         //
         rtn.Line( 124 );
         QUERY = rtn.setref( "QUERY", TARGETCONTEXT.getQUERY() );

         //
         // #TargetContext.CreateResult Result(#QueryResult) Rows(#Rows) Status(#Status) Message(#Message)
         //
         rtn.Line( 125 );
         QUERYRESULT = rtn.setref( "QUERYRESULT", TARGETCONTEXT.mthCREATERESULT( ROWS, STATUS.get(), MESSAGE.get() ) );

         //
         // SIGNAL Event(QueryCompleted) Context(#TargetContext) Result(#QueryResult)
         //
         rtn.Line( 127 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createDynamicReference( "CONTEXT" );
            evtParms.createDynamicReference( "RESULT" );

            evtParms.setref( "CONTEXT", TARGETCONTEXT );
            evtParms.setref( "RESULT", QUERYRESULT );

            this.fireEvent( "QUERYCOMPLETED", evtParms );

            evtParms.end();
         }

         //
         // #ParentContext <= #TargetContext.ParentContext
         //
         rtn.Line( 129 );
         PARENTCONTEXT = rtn.setref( "PARENTCONTEXT", TARGETCONTEXT.getPARENTCONTEXT() );

         //
         // IF (#ParentContext *IsNot *Null)
         //
         rtn.Line( 130 );
         if ( ( PARENTCONTEXT != null ) )
         {

            //
            // IF (#ParentContext.IsSubResultsComplete)
            //
            rtn.Line( 131 );
            if ( PARENTCONTEXT.mthISSUBRESULTSCOMPLETE() )
            {

               //
               // #ParentQueryStatus := OK
               //
               rtn.Line( 132 );
               PARENTQUERYSTATUS.set( "OK" );

               //
               // IF (#ParentContext.HasFailedSubquery)
               //
               rtn.Line( 134 );
               if ( PARENTCONTEXT.getHASFAILEDSUBQUERY() )
               {

                  //
                  // #ParentQueryStatus := GROUP_ERROR
                  //
                  rtn.Line( 135 );
                  PARENTQUERYSTATUS.set( "GROUP_ERROR" );

               //
               // ENDIF 
               //
               }

               //
               // #COM_SELF.FinalizeQueryExecution Targetcontext(#TargetContext.ParentContext) Rows(*NULL) Status(#ParentQueryStatus) Message('')
               //
               rtn.Line( 138 );
               this.mthFINALIZEQUERYEXECUTION( TARGETCONTEXT.getPARENTCONTEXT(), null, PARENTQUERYSTATUS.get(), "" );

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
      rtn.Line( 141 );
      rtn.end();
   };

   //
   // mthBEGINEXECUTE - BeginExecute
   //
   COM_OWNER.mthBEGINEXECUTE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "BeginExecute", 143 );

      //
      // MTHROUTINE Name(BeginExecute) Access(*PRIVATE)
      //
      rtn.Line( 143 );
      {

         //
         // IF (#gIsExecuting)
         //
         rtn.Line( 144 );
         if ( Lansa.toBool( ref.GISEXECUTING.get() ) )
         {

            //
            // #COM_SELF.FatalError Text('Query executor is already running')
            //
            rtn.Line( 145 );
            this.mthFATALERROR( "Query executor is already running" );

         //
         // ENDIF 
         //
         }

         //
         // #gIsExecuting := True
         //
         rtn.Line( 148 );
         ref.GISEXECUTING.set( true );

         //
         // #COM_SELF.ExecuteNext
         //
         rtn.Line( 150 );
         this.mthEXECUTENEXT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 151 );
      rtn.end();
   };

   //
   // mthENDEXECUTE - EndExecute
   //
   COM_OWNER.mthENDEXECUTE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "EndExecute", 153 );

      //
      // MTHROUTINE Name(EndExecute) Access(*PRIVATE)
      //
      rtn.Line( 153 );
      {

         //
         // IF (*Not #gIsExecuting)
         //
         rtn.Line( 154 );
         if ( Lansa.toBool( Lansa.not( ref.GISEXECUTING.get() ) ) )
         {

            //
            // #COM_SELF.FatalError Text('Query executor is not running')
            //
            rtn.Line( 155 );
            this.mthFATALERROR( "Query executor is not running" );

         //
         // ENDIF 
         //
         }

         //
         // #gIsExecuting := False
         //
         rtn.Line( 158 );
         ref.GISEXECUTING.set( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 159 );
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

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefEXECUTINGCONTEXT = function( refNew )
   {
      this.setref( "EXECUTINGCONTEXT", refNew );
   };

   COM_OWNER.setrefGWIDGET = function( refNew )
   {
      if ( this.REF.GWIDGET != null )
      {
         // ----------------------------------------
         // -- Remove Event Handlers for #GWIDGET --
         // ----------------------------------------
         this.REF.GWIDGET.removeEventHandler( "EXECUTESQLCOMPLETED", this, evtRoutine2 );
      }

      this.setref( "GWIDGET", refNew );

      if ( this.REF.GWIDGET != null )
      {
         // -------------------------------------
         // -- Add Event Handlers for #GWIDGET --
         // -------------------------------------
         this.REF.GWIDGET.addEventHandler( "EXECUTESQLCOMPLETED", this, evtRoutine2 );
      }
   };

   COM_OWNER.setrefGARGSCONVERTER = function( refNew )
   {
      if ( this.REF.GARGSCONVERTER != null )
      {
         // -----------------------------------------------
         // -- Remove Event Handlers for #GARGSCONVERTER --
         // -----------------------------------------------
         this.REF.GARGSCONVERTER.removeEventHandler( "ASYNCCOMPLETED", this, evtRoutine1 );
      }

      this.setref( "GARGSCONVERTER", refNew );

      if ( this.REF.GARGSCONVERTER != null )
      {
         // --------------------------------------------
         // -- Add Event Handlers for #GARGSCONVERTER --
         // --------------------------------------------
         this.REF.GARGSCONVERTER.addEventHandler( "ASYNCCOMPLETED", this, evtRoutine1 );
      }
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_BOLN", "PRIM_LCOL", "PRIM_FLD" ],
   dc: [ "XLBA0102", "XLBA0093", "XLBA0103", "XLBA0098", "XLBA0096" ],
   dp: [ "PRIM_WEB.Json", "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlba0101.js
