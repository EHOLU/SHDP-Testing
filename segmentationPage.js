/**
 * 
 */
describe('non-prod sso',function(){
	it('open non-prod SHDIP website', function() {
		browser.get('https://np.shdip.int.bayer.com/').then(function(){
			element(by.id('loginBtn')).click();
			// browser.sleep(10000);
			console.log("opened non-prod SHDIP");

		})

	})
	it('sign in page',function(){
		browser.waitForAngularEnabled(false);
		browser.sleep(1000);
		element(by.id('i0116')).sendKeys('maniratnam.meka.ext@bayer.com').then(function(){
			element(by.id('idSIButton9')).click();
			browser.sleep(5000);
			console.log("opened non-prod SHDIP dashboard page");
		})
		browser.waitForAngular();
	})
	it('Selecting Region',function(){
		//element(by.css("div[class='mat-form-field-infix ng-tns-c105-2']")).click();
		browser.sleep(10000);
		element(by.css("mat-select[tabindex='0']")).click();
		browser.sleep(10000);
		element(by.cssContainingText('mat-select-min-line ng-tns-c212-3 ng-star-inserted', 'APAC')).click().then(function(){
			browser.waitForAngular();
		})
		
	})
})