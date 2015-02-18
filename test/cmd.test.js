describe("ZebraBuilder.Cmd", function() {
	it("init default", function() {
		var b = new ZebraBuilder.Cmd();
		expect(b.carret).toBe('^');
		expect(b.delimiter).toBe(',');
		expect(b.tilde).toBe('~');
	});

	it("init params", function() {
		var b = new ZebraBuilder.Cmd({
			carret: '[',
			delimiter: '.',
			tilde: '+',
		});
		expect(b.carret).toBe('[');
		expect(b.delimiter).toBe('.');
		expect(b.tilde).toBe('+');
	});

	it("toString", function() {
		var b = new ZebraBuilder.Cmd();
		expect(b.toString()).toBe('^');
		expect(b.toString(true)).toBe('^\n');
		expect(b.toString(true, 'test')).toBe('^test\n');
	});

	it("toString indent_lvl", function() {
		var b = new ZebraBuilder.Cmd({
			indent_lvl: 1,
		});
		expect(b.toString()).toBe('^');
		expect(b.toString(true)).toBe('\t^\n');
		expect(b.toString(true, 'test')).toBe('\t^test\n');
	});
});
