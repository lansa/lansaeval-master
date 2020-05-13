// --------------------------
// -- Web Widget: XLBA0063 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0063", 
   nm: "XInternal_PayPal_PayButtonWidget", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-integration-lib]", 
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
      PROTOTYPE.fireOnPaymentAuthorized = function()
      {
         Lansa.fireEvent( this, "ONPAYMENTAUTHORIZED" );
      };

      PROTOTYPE.fireOnPaymentExecuted = function()
      {
         Lansa.fireEvent( this, "ONPAYMENTEXECUTED" );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      (function (PROTOTYPE, WIDGET) {
          PROTOTYPE.onCreateInstance = function () {
              this._clientId = {
                  sandbox: "",
                  production: "",
              };
          };
          PROTOTYPE.onRealizeControl = function (parentElement) {
              this._parentElement = parentElement;
          };
          PROTOTYPE.getClientId_Sandbox = function () {
              return this._clientId.sandbox;
          };
          PROTOTYPE.setClientId_Sandbox = function (value) {
              this._clientId.sandbox = value;
          };
          PROTOTYPE.getClientId_Production = function () {
              return this._clientId.production;
          };
          PROTOTYPE.setClientId_Production = function (value) {
              this._clientId.production = value;
          };
          PROTOTYPE.Setup = function (jsonPayment) {
              var _this = this;
              var payment = JSON.parse(jsonPayment);
              paypal.Button.render({
                  // Configure environment
                  env: 'sandbox',
                  client: {
                      sandbox: this._clientId.sandbox,
                      production: this._clientId.production,
                  },
                  // Customize button (optional)
                  locale: 'en_US',
                  style: {
                      size: 'small',
                      color: 'gold',
                      shape: 'pill',
                  },
                  // Enable Pay Now checkout flow (optional)
                  commit: true,
                  // Set up a payment
                  payment: function (data, actions) {
                      return actions.payment.create(payment);
                  },
                  // Payment authorized
                  onAuthorize: function (data, actions) {
                      _this.fireOnPaymentAuthorized();
                      return actions.payment.execute()
                          .then(function () {
                          _this.fireOnPaymentExecuted();
                      });
                  }
              }, this._parentElement);
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
      nm: "XLBA0063", 
      fe: fnEvents, 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Control", 

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
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setCLIENTID_PRODUCTION( "" );
         this.setCLIENTID_SANDBOX( "" );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   COM_OWNER.getCLIENTID_PRODUCTION = function()
   {
      return Lansa.toString( this.get( "ClientId_Production" ) );
   };

   COM_OWNER.setCLIENTID_PRODUCTION = function( value )
   {
      this.set( "ClientId_Production", Lansa.toString( value ) );
   };

   COM_OWNER.getCLIENTID_SANDBOX = function()
   {
      return Lansa.toString( this.get( "ClientId_Sandbox" ) );
   };

   COM_OWNER.setCLIENTID_SANDBOX = function( value )
   {
      this.set( "ClientId_Sandbox", Lansa.toString( value ) );
   };

   COM_OWNER.mthSETUP = function( Payment )
   {
      this.invoke( "Setup", [ Lansa.toString( Payment ) ] );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Control" ]
});

//# sourceURL=xlba0063.js
