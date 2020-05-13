// --------------------------
// -- Web Widget: XLBA0078 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0078", 
   nm: "XInternal_JsonWriter_Widget", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-common] JsonWriter Widget", 
   tl: 14000101, 
   cl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      (function (PROTOTYPE, WIDGET) {
          PROTOTYPE.onCreateInstance = function () {
              this._stack = [];
              this._json = undefined;
          };
          PROTOTYPE.ToString = function () {
              return JSON.stringify(this._json);
          };
          PROTOTYPE.BeginObject = function (key) {
              this.newEntry({}, key);
          };
          PROTOTYPE.EndObject = function () {
              this.closeEntry();
          };
          PROTOTYPE.BeginArray = function (key) {
              this.newEntry([], key);
          };
          PROTOTYPE.EndArray = function () {
              this.closeEntry();
          };
          PROTOTYPE.String = function (value, key) {
              this.newEntry(value, key);
          };
          PROTOTYPE.Decimal = PROTOTYPE.Integer = function (value, key) {
              this.newEntry(value, key);
          };
          PROTOTYPE.Boolean = function (value, key) {
              this.newEntry(value, key);
          };
          PROTOTYPE.Null = function (key) {
              this.newEntry(null, key);
          };
          // Private functions
          PROTOTYPE.topOfStack = function () {
              return this._stack[this._stack.length - 1];
          };
          // Private functions
          PROTOTYPE.newEntry = function (entry, key) {
              var topOfStack = this.topOfStack();
              if (typeof topOfStack === "object" && topOfStack) {
                  if (topOfStack instanceof Array) {
                      topOfStack.push(entry);
                  }
                  else {
                      topOfStack[key] = entry;
                  }
              }
              if (this._stack.length === 0) {
                  this._json = entry;
              }
              if (entry !== null && typeof entry === "object") {
                  this._stack.push(entry);
              }
          };
          PROTOTYPE.closeEntry = function () {
              this._stack.pop();
          };
          // Done
          return WIDGET.Completed;
      });
      
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBA0078", 
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

   COM_OWNER.mthBEGINOBJECT = function( Key )
   {
      this.invoke( "BeginObject", [ Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthENDOBJECT = function()
   {
      this.invoke( "EndObject" );
   };

   COM_OWNER.mthBEGINARRAY = function( Key )
   {
      this.invoke( "BeginArray", [ Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthENDARRAY = function()
   {
      this.invoke( "EndArray" );
   };

   COM_OWNER.mthSTRING = function( Value, Key )
   {
      this.invoke( "String", [ Lansa.toString( Value ), Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthDECIMAL = function( Value, Key )
   {
      this.invoke( "Decimal", [ Lansa.toNumber( Value ), Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthINTEGER = function( Value, Key )
   {
      this.invoke( "Integer", [ Lansa.toInt( Value ), Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthBOOLEAN = function( Value, Key )
   {
      this.invoke( "Boolean", [ Lansa.toBool( Value ), Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthNULL = function( Key )
   {
      this.invoke( "Null", [ Lansa.toString( Key ) ] );
   };

   COM_OWNER.mthTOSTRING = function()
   {
      return Lansa.toString( this.invoke( "ToString" ) );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Object" ]
});

//# sourceURL=xlba0078.js
