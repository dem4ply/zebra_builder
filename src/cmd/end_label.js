/**
 * CLASS comando de final de una etiqueta
 * HERITAGE: ZebraBuilder.CMD
*/
ZebraBuilder.EndLabel = ZebraBuilder.Cmd.extend({
	init: function(params) {
		this._super(params);
		this.cmd = 'XZ';
	},
});

