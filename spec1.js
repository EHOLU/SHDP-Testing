

describe('non-prod sso', function () {
	it('open non-prod SHDIP website', function () {
		browser.driver.manage().window().maximize();
		browser.get('https://prod.shdip.int.bayer.com/').then(function () {
			element(by.id('loginBtn')).click();
			// browser.sleep(10000);
			console.log("opened non-prod SHDIP");

		})

	})

	it('sign in page', function () {
		browser.waitForAngularEnabled(false);
		browser.sleep(5000);
		element(by.id('i0116')).sendKeys('venkatamanojkumar.pathirajagari.ext@bayer.com').then(function () {
			element(by.id('idSIButton9')).click();
			browser.sleep(8000);
			console.log("opened non-prod SHDIP dashboard page");
		})
	})

  function srcidcheck(){
		element(by.css("button[class='mat-focus-indicator mat-mini-fab mat-button-base mat-primary']")).click();
			browser.sleep(5000);
			expect(element(by.css("tr[class='mat-row cdk-row ng-star-inserted']:nth-of-type(1)")).getText()).toContain("ADVIN136719");
			browser.sleep(5000);
			// element(by.css("button[class='mat-focus-indicator mat-mini-fab mat-button-base mat-primary']")).click();
			// browser.sleep(4000);

			// element(by.css("button[class='mat-focus-indicator close-icon mat-button mat-button-base']")).click();
			// browser.sleep(3000);
			browser.executeScript('window.scrollTo(0,15000)').then(function () {
	            console.log('++++++SCROLLED Down+++++');
				element(by.xpath('(//span[normalize-space()="Transactions"])')).click().then(function () {
					
      })
	      browser.sleep(4000);
	        })
			browser.executeScript('window.scrollTo(0,15000)');
			browser.sleep(3000);
			var i=0;
			var sum = 0;
            element.all(by.css("td[class='mat-cell cdk-cell cdk-column-date mat-column-date ng-star-inserted']")).each(function(column,index){
								column.getText().then(function(text){
									console.log(text);
									
									var today = new Date();
									var dd = today.getDate();
									var mm = today.getMonth() + 1; //January is 0!
									var yyyy = today.getFullYear();
									var hh = today.getHours();
									var mins = today.getMinutes();
									var ss = today.getSeconds();
									if (dd < 10) {
									  dd = "0" + dd;
									}
									if (mm < 10) {
									  mm = "0" + mm;
									}
									if (hh < 10) {
									  hh = "0" + hh;
									}
									if (mins < 10) {
									  mins = "0" + mins;
									}
								  
									if (ss < 10) {
									  ss = "0" + ss;
									}
								  var today = yyyy + '-' + mm + '-' + dd +' '+ hh +':'+mins+':'+ ss;
									 //var last = today - year
									//  ly1 =yyyy-1;
									//  ly2=mm + '-' + dd + '-' + ly1 +' '+ hh +':'+mins+':'+ ss;
							// console.log(today);
							// console.log(ly2);
								  
							//function getYearAgo(){
								var lastYear = new Date();
								var dd = lastYear.getDate();
								var mm = lastYear.getMonth() + 1; //January is not 0!
								var yyyy1 = lastYear.getFullYear(today) - 1;
								if (dd < 10) { dd = '0' + dd }
								if (mm < 10) { mm = '0' + mm }
								var lastYear =yyyy1 + '-' + mm + '-' + dd +' '+ hh +':'+mins+':'+ ss;    
								//console.log(lastYear);
                                
									//if (text.getTime() > lastYear.getTime()){
									if(text > lastYear){
										i=i+1;
										// element(by.css("td[class='mat-cell cdk-cell cdk-column-quantity mat-column-quantity ng-star-inserted']")).getText().then(function(a){
										// 	element(by.css("td[class='mat-cell cdk-cell cdk-column-price mat-column-price ng-star-inserted']")).getText().then(function(b){
										// 		var c= a*b;
										// 		console.log(c);
										// 	})
										// })
										
                                               	
										
										// console.log(c);	
									}
									console.log(i);
								})
								
							})
							browser.executeScript('window.scrollTo(0,60000)');
							//element.all(by.tagName("tbody")).each(function(){
								//element.all(by.css("tr[class='mat-row cdk-row ng-star-inserted']")).each(function(){
													// row.getText().then(function(text){
													// 	console.log(text);
                                                    
                                                    quantity=[];
						element.all(by.css("td[class='mat-cell cdk-cell cdk-column-quantity mat-column-quantity ng-star-inserted']")).each(function(column,index){
								column.getText().then(function(text1){									                                
                                    quantity.push(text1);
                                    console.log(quantity);
                    });
                })
                        
                        price=[];
                        product=[];
                        var i;
						element.all(by.css("td[class='mat-cell cdk-cell cdk-column-price mat-column-price ng-star-inserted']")).each(function(column,index){
                            column.getText().then(function(text2){ 
                                                    price.push(text2);
                                                    console.log(price);
                                                    
                                                  
									//console.log(b);    
									// let unique1 = a.filter((item, sum, ar) => ar.indexOf(item) === sum);
									// let unique2 = b.filter((item, sum, ar) => ar.indexOf(item) === sum);
                                    // console.log(unique1);
									// console.log(unique2);          
						});
                       
                        
					});
                    var sum = 0;
                    for(var i=0; i< price.length; i++) {
                    sum += price[i]*quantity[i];
                    }
                    console.log(sum);
                   
				
				
				
					
							// element(by.css("td[class='mat-cell cdk-cell cdk-column-price mat-column-price ng-star-inserted']")).getText().then(function(b){
							// 	var d=parseFloat(b);
							// 	console.log(d);
							// });
									// var c=a*b;	
								
									// console.log(c);	
							
							// ron.each(function(){
                            // var a=element(by.css("td[class='mat-cell cdk-cell cdk-column-quantity mat-column-quantity ng-star-inserted']"));
							// var b=element(by.css("td[class='mat-cell cdk-cell cdk-column-price mat-column-price ng-star-inserted']"));
							// 		var c=a*b;	
								
									//console.log(c);	
						//})
						
			// element(by.css('mat-icon[class="mat-icon notranslate mat-menu-trigger material-icons mat-icon-no-color"]')).click();
			// browser.sleep(5000);
			// element(by.css("button[role='menuitem']")).click();
			// browser.sleep(5000);
			// element(by.xpath('(//app-root[1]/div[1]/div[1]/app-body[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-individual-customer-journey[1]/div[1]/mat-card[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3])')).click().then(function () {
			// 	browser.sleep(5000);
			// 	browser.switchTo().activeElement().sendKeys('12 months').then(function () {
			// 		browser.actions().click().perform();
			// 		browser.sleep(5000);
			// 	})
			// })
			// element(by.id('actionBtn')).isEnabled().then(function (enabled) {
			// 	if (enabled) {
			// 		browser.sleep(5000);
			// 		element(by.id('actionBtn')).click();
			// 	}
			// 	else {
			// 		console.log('button is disabled');
			// 	}
			// 	browser.sleep(5000);

			// })
	}

  function searchpage() {
		browser.sleep(5000);
		element(by.css("a[href='/search']")).click();
		browser.sleep(5000);
	}

  

it('search using source id ', function () {
  searchpage();
  element(by.css("mat-step-header[aria-posinset='3']")).click().then(function () {
    browser.sleep(2000);
    element(by.css("input[aria-label='sourceId']")).sendKeys('ADVIN136719');
    browser.sleep(2000);
    let elem = element(by.xpath('(//*[@id="cdk-step-content-0-2"]/form[1]/div[1]/div[2]/button[1])'));
    browser.actions().click(elem).perform();
    browser.sleep(5000);
    srcidcheck();
    browser.sleep(3000);
    console.log("search page search using source id");
  })
}, 600000)

 })