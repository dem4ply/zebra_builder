describe("ZebraBuilder.FieldSeparator", function() {
	it("init", function() {
		var b = new ZebraBuilder.cmd.FieldSeparator();
		expect(b.cmd).toBe('FS');
	});
});
