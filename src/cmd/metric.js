/**
 * CLASS comando para cambiar el estilo de la metrica
 * HERITAGE: ZebraBuilder.CMD
*/
ZebraBuilder.cmd.Metric = ZebraBuilder.Cmd.extend({
	init: function(params) {
		this._super(params);
		if (!params)
			params = {};

		this.cmd = 'MU';
	},

	/**
	 * FUNCTION convierte el comando a string
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		arg = this.is_metric ? 'M' : 'D';
		return this._super(pretty, arg);
	},
});
