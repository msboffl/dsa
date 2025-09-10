class Bank {
  private balance: number[];
  constructor(balance: number[]) {
    this.balance = balance.slice();
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (money < 0 || account1 < 0 || account2 < 0) return false;
    const idx1 = account1 - 1;
    const idx2 = account2 - 1;

    if (idx1 >= this.balance.length || idx2 >= this.balance.length)
      return false;
    if (money > this.balance[idx1]) return false;
    this.balance[idx1] -= money;
    this.balance[idx2] += money;
    return true;
  }

  deposit(account: number, money: number): boolean {
    const idx = account - 1;
    if (account < 0 || money < 0 || idx >= this.balance.length) {
      return false;
    }
    this.balance[idx] += money;
    return true;
  }

  withdraw(account: number, money: number): boolean {
    const idx = account - 1;
    if (account < 0 || money < 0 || idx >= this.balance.length) {
      return false;
    }

    if (money > this.balance[idx]) return false;
    this.balance[idx] -= money;
    return true;
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
