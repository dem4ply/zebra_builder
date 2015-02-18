/**
 * CLASS comando field end
 * HERITAGE: ZebraBuilder.CMD
*/
ZebraBuilder.cmd.FieldSeparator = ZebraBuilder.Cmd.extend({
	init: function(params) {
		this._super(params);
		this.cmd = 'FS';
	},
});
