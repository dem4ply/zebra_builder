/**
 * CLASS comando field
 * HERITAGE: ZebraBuilder.cmd.Vector
*/
ZebraBuilder.cmd.Field = ZebraBuilder.cmd.Vector.extend({
	init: function(x, y, data, params) {
		this._super(x, y, params);
		if (!params)
			params = {};
		this.cmd = 'FO';
		this.end_field = new ZebraBuilder.cmd.FieldSeparator(params)
		params.indent_lvl = this.indent_lvl + 1;
		this.data = new ZebraBuilder.cmd.Data( data, params );
	},

	/**
	 * FUNCTION cambia el valor del data que se le manda en el campo 
	 *
	 * @params data {string}: nuevo valor del data del campo
	*/
	changeData: function(data) {
		this.data.data = data.toString();
	},

	/**
	 * FUNCTION convierte el comando a string
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		var result = this._super(pretty, this.getX(), this.getY());
		result += this.getCmdString(pretty);
		result += this.data.toString(pretty);
		result += new ZebraBuilder.cmd.FieldSeparator({
			carret: this.carret,
			delimiter: this.delimiter,
			tilde: this.tilde,
			indent_lvl: this.indent_lvl,
		}).toString();
		return result;
	},

	/**
	 * FUNCTION convierte el comando real del campo a string 
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	getCmdString: function(pretty) {
		return '';
	}
});
