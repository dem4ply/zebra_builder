/**
 * CLASS comando con cordenadas
 *
 * @params x {float}: cordenada de x en MM
 * @params y {float}: cordenada de y en MM
 *
 * HERITAGE: ZebraBuilder.CMD
*/
ZebraBuilder.cmd.Vector = ZebraBuilder.Cmd.extend({
	init: function(x, y, params) {
		this._super(params);
		this.x = x ? x : 0;
		this.y = y ? y : 0;
	},

	/**
	 * FUNCTION regresa el valor de x MM o DOTS
	 *		la cantidad de DOTS depende del parametro de DPM
	 *
	 * @params is_metric {BOOL}: fuerza el resultado a MM o DOTS
	*/
	getX: function(is_metric) {
		is_metric = is_metric === undefined ? this.is_metric : is_metric;
		return is_metric ? this.x : this.x * this.DPM;
	},

	/**
	 * FUNCTION regresa el valor de y MM o DOTS
	 *		la cantidad de DOTS depende del parametro de DPM
	 *
	 * @params is_metric {BOOL}: fuerza el resultado a MM o DOTS
	*/
	getY: function(is_metric) {
		is_metric = is_metric === undefined ? this.is_metric : is_metric;
		return is_metric ? this.y : this.y * this.DPM;
	},
});
