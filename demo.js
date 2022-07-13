describe('non-prod sso',function(){
	function searchFarmerDtl(){
		browser.sleep(5000);
		element(by.css("a[href='/search']")).click();

		element(by.css("input[aria-label='Full Name']")).clear();
		element(by.css("input[aria-label='Full Name']")).sendKeys('manish k');
		browser.sleep(3000);
		element(by.css("span[class='mat-button-wrapper']")).click().then(function(){
		browser.sleep(5000);
		element(by.css("button[class='mat-focus-indicator mat-mini-fab mat-button-base mat-primary']")).click();
		browser.sleep(5000);
		element(by.css("button[class='mat-focus-indicator mat-mini-fab mat-button-base mat-primary']")).click();
		browser.sleep(5000);
		element(by.css("button[class='mat-focus-indicator close-icon mat-button mat-button-base']")).click();
		browser.sleep(5000);
		element(by.css('mat-icon[class="mat-icon notranslate mat-menu-trigger material-icons mat-icon-no-color"]')).click();
		browser.sleep(5000);
		})
		}
	it('open non-prod SHDIP website', function() {
		browser.driver.manage().window().maximize();
	    browser.get('https://np.shdip.int.bayer.com/').then(function(){
	    	element(by.id('loginBtn')).click();
	    //	browser.sleep(10000);
	    	console.log("opened non-prod SHDIP");
	    
	    })
	    
    })

 
     it('sign in page',function(){
    	 browser.waitForAngularEnabled(false);
    	 browser.sleep(5000);
    	element(by.id('i0116')).sendKeys('venkatamanojkumar.pathirajagari.ext@bayer.com').then(function(){
    		  element(by.id('idSIButton9')).click();
    		  browser.sleep(8000);
    		  console.log("opened non-prod SHDIP dashboard page");
    	 })
     })
     it('search using name',function(){
    	 searchFarmerDtl();
    	 element(by.css("button[role='menuitem']:nth-of-type(1)")).click();
    	 browser.sleep(5000);
    	 
    	 browser.sleep(2000);
    	 searchFarmerDtl();
    	 element(by.css("button[role='menuitem']:nth-of-type(2)")).click();
    	 browser.sleep(5000);
    	 console.log("search page search using source id");
     },120000)
})