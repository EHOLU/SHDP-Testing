var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	capabilities: {
		'browserName': 'chrome',
		'shardTestFiles': true,
		'maxInstances': 1
	},
	jasmineNodeOpts: { defaultTimeoutInterval: 360000, showColors: true },
	//framework: 'jasmine2',
	specs: ['taskPage.js'],
	onPrepare: function () {
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
				savePath: 'target/screenshots'
			})
		),
			protractor.loginHelpers = require('C:/Users/EHOLU/eclipse-workspace/SHDP-Testing/login.js');
	},
	suites: {
		smoke: ['allpages.js', 'dashboard.js']
	},
	//specs: ['dashboard with region,country.js'],
};