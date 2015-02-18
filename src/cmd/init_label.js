/**
 * CLASS comando de inicio de una etiqueta
 * HERITAGE: ZebraBuilder.CMD
*/
ZebraBuilder.InitLabel = ZebraBuilder.Cmd.extend({
	init: function(params) {
		this._super(params);
		this.cmd = 'XA';
	},
});

