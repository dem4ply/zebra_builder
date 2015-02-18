describe("ZebraBuilder.cmd.Metric", function() {
	it("init", function() {
		var b = new ZebraBuilder.cmd.Metric();
		expect(b.cmd).toBe('MU');
	});

	it("init is metric", function() {
		var b = new ZebraBuilder.cmd.Metric();
		expect(b.is_metric).toBe( true );
		var b = new ZebraBuilder.cmd.Metric({
			is_metric: true
		});
		expect(b.is_metric).toBe( true );
	});

	it("init is no metric", function() {
		var b = new ZebraBuilder.cmd.Metric({
			is_metric: false 
		});
		expect(b.is_metric).toBe( false );
	});

	it("toString metric", function() {
		var b = new ZebraBuilder.cmd.Metric();
		expect(b.toString()).toBe('^MUM');
		expect(b.toString(true)).toBe('^MUM\n');
	});

	it("toString no metric", function() {
		var b = new ZebraBuilder.cmd.Metric({
			is_metric: false 
		});
		expect(b.toString()).toBe('^MUD');
		expect(b.toString(true)).toBe('^MUD\n');
	});
});
