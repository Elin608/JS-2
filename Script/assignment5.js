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
//account.getBalance();
//account.deposit(400);
//account.getBalance();
//account.withdrawal(100);
//account.getBalance();
//account.getAccountName();

let running = true;
while (running) {
    let choice = prompt (
        "ATM Menu\n" +
        "1. Show account name\n" +
        "2. Show balance\n" +
        "3. Deposit money \n" +
        "4. Withdraw money\n" +
        "5. Exit"
    );

switch (choice){
    case "1": 
    account.getAccountName();
    break;

     case "2": 
    account.getBalance();
    break;

    case "3": 
    let depositAmount = Number(prompt ("Enter amount to deposit"));
    account.deposit(depositAmount);
    break;

    case "4": 
    let withdrawalAmount = Number(prompt("Enter amonut to withdraw"));
    account.withdrawal(withdrawalAmount);
    break;

    case "5": 
    running = false;
    alert ("Bye")
    break;
    
    default:
        alert ("invalid choice");
}
}


    
