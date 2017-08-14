  describe("E2E testing snake", function() {

    it("should have the right title", function() {
      browser.url('http://localhost:8080');
      var title = browser.getTitle();
      expect(title).toEqual('Snake');
    });

    it("should have a canvas", function() {
      var canvas = browser.getText('canvas');
      expect(browser.getTagName('canvas')).toEqual('canvas');
    });
  });
