function attack() {

    this.taskListPage = element(by.css("a[href='/tasklist']"));
    this.inputFarmerRule = element(by.xpath("(//mat-card-content/div[1]/div[2]/mat-form-field/div/div[1]/div[3]/mat-select)"));
    this.inputFarmerName = element(by.css("input[aria-label='Full Name']"));
    this.inputfsrcsys = element(by.xpath("(//mat-card-content/div[1]/div[3]/mat-form-field/div/div[1]/div[3]/mat-select)"));
    this.inputMatchScore = element(by.xpath('(//div[4]/mat-form-field[1]/div[1]/div[1]/div[3])'));
    this.firstPage= element(by.css("button[aria-label='First page']"));
    this.nextPage= element(by.css("button[aria-label='Next page']"));
    this.lastPage= element(by.css("button[aria-label='Last page']"));
    this.searchButton = element(by.css("button[aria-label='Search']"));
}
module.exports = new attack();