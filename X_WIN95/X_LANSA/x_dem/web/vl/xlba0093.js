// --------------------------
// -- Web Widget: XLBA0093 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0093", 
   nm: "XInternal_DeviceSqlDb_Widget", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-lansa-mobile]", 
   tl: 14000101, 
   cl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -------------------------------------
   // -- Helper functions to fire events --
   // -------------------------------------
   var fnEvents = function( PROTOTYPE )
   {
      PROTOTYPE.fireExecuteSqlCompleted = function( parm_Status, parm_Message, parm_Rows )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addStringParm( "STATUS", parm_Status );
         evtParms.addStringParm( "MESSAGE", parm_Message );
         evtParms.addStringParm( "ROWS", parm_Rows );

         Lansa.fireEvent( this, "EXECUTESQLCOMPLETED", evtParms );
      };

      PROTOTYPE.fireApplySchemaCompleted = function( parm_Status, parm_Message )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addStringParm( "STATUS", parm_Status );
         evtParms.addStringParm( "MESSAGE", parm_Message );

         Lansa.fireEvent( this, "APPLYSCHEMACOMPLETED", evtParms );
      };

      PROTOTYPE.fireDownloadDataCompleted = function( parm_Status, parm_Message, parm_Tag )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addStringParm( "STATUS", parm_Status );
         evtParms.addStringParm( "MESSAGE", parm_Message );
         evtParms.addStringParm( "TAG", parm_Tag );

         Lansa.fireEvent( this, "DOWNLOADDATACOMPLETED", evtParms );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      /**
       *
       */
      (function (PROTOTYPE, WIDGET) {
          var definition = {
              /**
               *
              */
              ApplySchema: function (schema) {
                  var _this = this;
                  LONGRANGE.SQLDB.executesql({
                      schema: schema,
                      onCompleted: function (result) {
                          _this.fireApplySchemaCompleted(result.status == LONGRANGE.Status.Ok ? "OK" : "APPLY_FAILED", result.message);
                      }
                  });
              },
              /**
               *
               */
              ExecuteSql: function (strsql, jsonArgs) {
                  var _this = this;
                  var options = {
                      sql: strsql,
                      allowScripting: true,
                      parameters: undefined,
                      onCompleted: function (result) {
                          var message = "";
                          var rows = "";
                          if (result.message) {
                              message = result.message;
                          }
                          if (result.rows) {
                              rows = JSON.stringify(result.rows);
                          }
                          _this.fireExecuteSqlCompleted(result.status == LONGRANGE.Status.Ok ? "OK" : "EXEC_FAILED", message, rows);
                      },
                  };
                  //
                  if (jsonArgs.length > 0) {
                      options.parameters = JSON.parse(jsonArgs);
                  }
                  //
                  LONGRANGE.SQLDB.executesql(options);
              },
              /**
               *
               */
              DownloadData: function (url, tag) {
                  var _this = this;
                  fetch(url)
                      .then(function (response) {
                      var error = null;
                      switch (response.status) {
                          case 200: break;
                          case 404:
                              error = "The service can't be found, ensure you have the path defined in your server module API definition.";
                              break;
                          default:
                              error = "Unknown error occurred while invoking the download service.";
                              break;
                      }
                      if (error) {
                          error += "\nThe url/path is \"" + url + "\"\nHTTP status code is " + response.status;
                          throw new Error(error);
                      }
                      return response.json();
                  })
                      .then(function (data) { return data.tables; })
                      .then(function (tables) { return processTables(tables); })
                      .then(function () { return _this.fireDownloadDataCompleted("OK", "", tag); })
                      .catch(function (e) { return _this.fireDownloadDataCompleted("FAILED", e ? (e.message ? e.message : e.toString()) : "Unspecified error", tag); });
                  function processTables(tables) {
                      var p = Promise.resolve();
                      var _loop_1 = function (table) {
                          var name_1 = table.table;
                          var rows = table.rows;
                          var _loop_2 = function (row) {
                              p = p.then(function () { return processRow(name_1, row); });
                          };
                          for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                              var row = rows_1[_i];
                              _loop_2(row);
                          }
                      };
                      for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
                          var table = tables_1[_i];
                          _loop_1(table);
                      }
                      return p;
                  }
                  function processRow(tableName, row) {
                      var query = constructSql(tableName, row);
                      return new Promise(function (resolve, reject) {
                          LONGRANGE.SQLDB.executesql({
                              sql: query.sql,
                              allowScripting: true,
                              parameters: query.args,
                              onCompleted: function (result) {
                                  if (result.status == LONGRANGE.Status.Ok) {
                                      resolve();
                                  }
                                  else {
                                      reject(result.message);
                                  }
                              },
                          });
                      });
                  }
                  function constructSql(tableName, values) {
                      var fields = [];
                      var argIdentifiers = [];
                      var argValues = [];
                      for (var field in values) {
                          fields.push(field);
                          argValues.push(values[field]);
                          argIdentifiers.push("?" + fields.length);
                      }
                      return {
                          sql: "REPLACE INTO " + tableName + "(" + fields.join(",") + ") VALUES (" + argIdentifiers.join(",") + ")",
                          args: argValues,
                      };
                  }
              },
          };
          //
          return init();
          /**
           *
           */
          function init() {
              Object
                  .getOwnPropertyNames(definition)
                  .forEach(function (prop) { return PROTOTYPE[prop] = definition[prop]; });
              //
              var widgetStatus = WIDGET.Completed;
              if (!window.LONGRANGE) {
                  // Longrange hasn't finished loading yet
                  widgetStatus = WIDGET.Loading;
                  // Make sure we don't break the callback for other longrange widgets.
                  var pPreviousOnLongRangeReady_1 = window.onLongRangeReady;
                  // Finalize the widget definition when we receive the callback.
                  window.onLongRangeReady = function () {
                      WIDGET.Finalize();
                      if (pPreviousOnLongRangeReady_1) {
                          pPreviousOnLongRangeReady_1();
                      }
                  };
              }
              return widgetStatus;
          }
      });
      
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBA0093", 
      fe: fnEvents, 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Object", 

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

   COM_OWNER.mthEXECUTESQL = function( Sql, Args )
   {
      this.invoke( "ExecuteSql", [ Lansa.toString( Sql ), Lansa.toString( Args ) ] );
   };

   COM_OWNER.mthAPPLYSCHEMA = function( Schema )
   {
      this.invoke( "ApplySchema", [ Lansa.toString( Schema ) ] );
   };

   COM_OWNER.mthDOWNLOADDATA = function( Url, Tag )
   {
      this.invoke( "DownloadData", [ Lansa.toString( Url ), Lansa.toString( Tag ) ] );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Object" ]
});

//# sourceURL=xlba0093.js
