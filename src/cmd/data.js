/**
 * CLASS comando data
 *
 * @params data {string}: data que se le asignara al comando
 *
 * HERITAGE: ZebraBuilder.CMD
*/
ZebraBuilder.cmd.Data = ZebraBuilder.Cmd.extend({
	init: function(data, params) {
		this._super(params);
		if (data === undefined)
			data = '';
		this.data = data.toString();
		this.cmd = 'FD';
	},

	/**
	 * FUNCTION convierte el comando a string
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		return this._super(pretty, this.data);
	}
});
