describe("ZebraBuilder.cmd.Data", function() {
	it("init", function() {
		var b = new ZebraBuilder.cmd.Data();
		expect(b.data).toBe('');
		b = new ZebraBuilder.cmd.Data('HOLA');
		expect(b.data).toBe('HOLA');
		b = new ZebraBuilder.cmd.Data(1.2);
		expect(b.data).toBe('1.2');
	});

	it("toString", function() {
		var b = new ZebraBuilder.cmd.Data();
		expect(b.toString()).toBe('^FD');
		b = new ZebraBuilder.cmd.Data('HOLA');
		expect(b.toString()).toBe('^FDHOLA');
		b = new ZebraBuilder.cmd.Data(1.2);
		expect(b.toString()).toBe('^FD1.2');
	});
});
