console.log("test");
const account={
    accountName:"Leon",
    balance:500,

getBalance(){
    console.log("Balance:"+ this.balance);
    },

deposit(amount){
    this.balance+=amount;
    console.log("Deposited"+amount);
    },

withdrawal(amount){
    if (amount <= this .balance){
        this.balance -= amount;
        console.log("WithDrawn: " + amount);
    } else{
        console.log("Not enough money");
    }
    },
    
    

getAccountName(){
    console.log("Account holder"+this.accountName);
    }
};
account.getBalance();
account.deposit(400);
account.getBalance();
account.withdrawal(100);
account.getBalance();
account.getAccountName();

