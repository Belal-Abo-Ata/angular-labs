abstract class Account {
	accNo: number;
	balance: number;

	constructor(accNo: number, balance: number) {
		this.accNo = accNo;
		this.balance = balance;
	}

	debitAmount() {}

	creditAmount() {}
	getBalance() {}
}

interface IAccount {
	dateOfOpening: Date;
	addCustomer(): void;
	removeCustomer(): void;
}

class currentAccount extends Account implements IAccount {
	protected interestRate: number;
	dateOfOpening: Date;

	constructor(accNo: number, balance: number, interestRate: number) {
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


class savingAccount extends Account implements IAccount {
	protected minBalance: number;
	dateOfOpening: Date;

	constructor(accNo: number, balance: number, minBalance: number) {
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


