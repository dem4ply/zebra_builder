/**
 * CLASS comando field with text
 * HERITAGE: ZebraBuilder.Field
*/
ZebraBuilder.cmd.FieldText = ZebraBuilder.cmd.Field.extend({
	init: function(x, y, w, h, data, params) {
		if (!params)
			params = {};
		this.text = new ZebraBuilder.cmd.Text(w, h, params);
		this._super(x, y, data, params);
	},

	/**
	 * FUNCTION convierte el comando real del campo a string 
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	getCmdString: function(pretty) {
		return this.text.toString();
	},

});
