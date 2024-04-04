class Account {
    constructor(accNo, balance) {
        this.accNo = accNo;
        this.balance = balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class currentAccount extends Account {
    constructor(accNo, balance, interestRate) {
        super(accNo, balance);
        this.interestRate = interestRate;
    }
    addCustomer() {
        console.log('addCustomer');
    }
    removeCustomer() {
        console.log('removeCustomer');
    }
}
class savingAccount extends Account {
    constructor(accNo, balance, minBalance) {
        super(accNo, balance);
        this.minBalance = minBalance;
    }
    addCustomer() {
        console.log('addCustomer');
    }
    removeCustomer() {
        console.log('removeCustomer');
    }
}
