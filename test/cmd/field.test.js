describe("ZebraBuilder.Field", function() {
	it("init", function() {
		var b = new ZebraBuilder.cmd.Field(1,2, 'VOID');
		expect(b.x).toBe(1);
		expect(b.y).toBe(2);
		expect(b.data.data).toBe('VOID');
		expect(b.cmd).toBe('FO');
	});

	it("changeData", function() {
		var b = new ZebraBuilder.cmd.Field(1, 2, 'VOID');
		b.changeData('NO VOID')
		expect(b.data.toString()).toBe('^FDNO VOID');
	});

	it("toString", function() {
		var b = new ZebraBuilder.cmd.Field();
		expect(b.toString(true)).toBe('^FO0,0\n\t^FD\n\^FS');
		b = new ZebraBuilder.cmd.Field(10, 15, 'TEST');
		expect(b.toString(true)).toBe('^FO10,15\n\t^FDTEST\n\^FS');
		b = new ZebraBuilder.cmd.Field(10, 15, 'TEST', {
			is_metric: false,
		});
		expect(b.toString(true)).toBe('^FO80,120\n\t^FDTEST\n\^FS');
		b = new ZebraBuilder.cmd.Field(10, 15, 'TEST', {
			is_metric: false,
			DPM: 10,
		});
		expect(b.toString(true)).toBe('^FO100,150\n\t^FDTEST\n\^FS');
		b = new ZebraBuilder.cmd.Field(10, 15, 'TEST', {
			carret: '[',
			delimiter: '.',
			tilde: '+',
		});
		expect(b.toString(true)).toBe('[FO10.15\n\t[FDTEST\n\[FS');
	});
});
