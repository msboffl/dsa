## Banking System (LC 2043) – Quick Notes

- **What it is**: Simple bank with `n` accounts. Supports `deposit`, `withdraw`, `transfer`.
- **Indexing**: Accounts are **1-indexed**. Internally converted to 0-index.
- **Safety checks**: Rejects invalid account numbers, negative money, and withdrawals/transfers that exceed balance.

### API

- **constructor(balance: number[])**: copies the initial balances.
- **transfer(account1, account2, money): boolean**
- **deposit(account, money): boolean**
- **withdraw(account, money): boolean**

### Key Rules (easy to remember)

- **1-indexed accounts** → subtract 1 to index the array.
- **No negatives** → `money < 0` or invalid account → `false`.
- **Insufficient funds** → `false` for `withdraw/transfer`.
- Otherwise, update balances and return `true`.

### Minimal Example (paste at bottom to try locally)

```ts
const bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.transfer(1, 2, 5)); // true (10->5, 100->105)
console.log(bank.deposit(5, 20)); // true (30->50)
console.log(bank.withdraw(3, 25)); // false (20 < 25)
```

### Files

- `bankSystem.ts`: TypeScript implementation
- `bankSystem.js`: JavaScript version

Tip: Mirrors LeetCode 2043; good for bounds checks and state updates.

---

### Code Explanation

- **Class state**: `balance: number[]` holds current money for each account. The constructor clones the input array (`slice()`) to avoid mutating the caller's array.

- **Index handling**: All public methods receive 1-indexed `account` numbers as in the problem. Internally: `const idx = account - 1` (or `idx1/idx2`).

- **Common validations**:

  - Reject negative `money` and negative/zero-ish account indexes: check `money < 0` and `account < 0` (accounts start from 1, so `< 0` is enough given problem constraints).
  - Bounds: if computed index `>= this.balance.length` → invalid account → return `false`.

- **transfer(account1, account2, money)**:

  - Validate money and both accounts; ensure both indices are within bounds.
  - Check sufficient funds on source: `money > this.balance[idx1]` → `false`.
  - Perform two updates: `balance[idx1] -= money; balance[idx2] += money;` and return `true`.

- **deposit(account, money)**:

  - Validate account and money.
  - Add money: `balance[idx] += money;` and return `true`.

- **withdraw(account, money)**:

  - Validate account and money.
  - Check sufficient funds: `money > balance[idx]` → `false`.
  - Subtract and return `true`.

- **Time/Space Complexity**:

  - Each operation (`transfer`, `deposit`, `withdraw`) is **O(1)** time and **O(1)** extra space.
  - Construction clones the input: **O(n)** time and space proportional to number of accounts.

- **Edge cases to remember**:
  - Negative `money` is rejected everywhere.
  - Invalid account numbers (<= 0 leads to negative index after `-1`, or index beyond last) are rejected.
  - `withdraw/transfer` deny when funds are insufficient; `deposit` never checks funds.

---

### Full TypeScript Implementation

```ts
// Bank supports O(1) deposit, withdraw, and transfer between 1-indexed accounts
class Bank {
  // Holds current balances for each account (index 0 corresponds to account 1)
  private balance: number[];

  constructor(balance: number[]) {
    // Clone input to avoid mutating the caller's array
    this.balance = balance.slice();
  }

  // Move `money` from account1 to account2
  transfer(account1: number, account2: number, money: number): boolean {
    // Validate non-negative money and account numbers
    if (money < 0 || account1 < 0 || account2 < 0) return false;

    // Convert from 1-indexed accounts to 0-indexed array positions
    const idx1 = account1 - 1;
    const idx2 = account2 - 1;

    // Bounds check: both accounts must exist
    if (idx1 >= this.balance.length || idx2 >= this.balance.length)
      return false;

    // Must have enough funds in source account
    if (money > this.balance[idx1]) return false;

    // Apply the transfer
    this.balance[idx1] -= money;
    this.balance[idx2] += money;
    return true;
  }

  // Add `money` to `account`
  deposit(account: number, money: number): boolean {
    const idx = account - 1;

    // Validate account index and non-negative money
    if (account < 0 || money < 0 || idx >= this.balance.length) return false;

    // Apply the deposit
    this.balance[idx] += money;
    return true;
  }

  // Subtract `money` from `account` if sufficient funds
  withdraw(account: number, money: number): boolean {
    const idx = account - 1;

    // Validate account index and non-negative money
    if (account < 0 || money < 0 || idx >= this.balance.length) return false;

    // Must have enough funds to withdraw
    if (money > this.balance[idx]) return false;

    // Apply the withdrawal
    this.balance[idx] -= money;
    return true;
  }
}
```
