describe("ZebraBuilder.InitLabel", function() {
	it("init", function() {
		var b = new ZebraBuilder.InitLabel();
		expect(b.cmd).toBe('XA');
	});

	it("toString", function() {
		var b = new ZebraBuilder.InitLabel();
		expect(b.toString()).toBe('^XA');
		expect(b.toString(true)).toBe('^XA\n');
	});
});
