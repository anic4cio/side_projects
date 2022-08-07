// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')

operation()

function operation() {

    inquirer.prompt(
        {
            type: 'list',
            name: 'action',
            message: 'What you wish to do?',
            choices: ['Create account', 'Show balance', 'Deposit', 'Withdraw', 'Sign out']
        },
    ).then((answer) => {
        const action = answer['action']

        if(action === 'Create account') {
            congrats()
        } else if(action === 'Show balance') {
            showBalance()
        } else if(action === 'Deposit') {
            deposit()
        } else if(action === 'Withdraw') {
            withdraw()
        } else {
            console.log(chalk.bgBlue('Thanks for using Bank Account. Signing out...'))
            process.exit()
        }
    }).catch((err) => console.log(err))
}

function congrats() {
    console.log(chalk.bgGreen('Congratulations to chose Bank Account!'))
    console.log(chalk.bgGreen('Set up your account options.'))
    createAccount()
}

function createAccount() {

    inquirer.prompt(
        {name: 'accountName', message: 'Enter your account name:'}
    ).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)
        
        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed('This account name already exists.'))
            createAccount()
            return
        }
        
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance": 0}',
            function(err) {
                console.log(err)
            }
        )
        console.log(chalk.bgGreen('Congrats! You account has been created sucessfully!'))
        operation()

    }).catch((err) => console.log(err))
}

function showBalance() {

    inquirer.prompt(
        {
            name: 'accountName',
            message: `What's your account name?`
        }
    ).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)) {
            return showBalance()
        }
        const accountData = getAccount(accountName)
        console.log(chalk.bgGreen(`Your current account balance is $${accountData.balance}`))
        operation()
    }).catch((err) => console.log(err))

}

function deposit() {
    inquirer.prompt(
        {
            name: 'accountName',
            message: `What's your account name?`
        }
    ).then((answer) => {
        const accountName = answer['accountName']
        if(!checkAccount(accountName)) {
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'How much do you want to deposit?'
            }
        ]).then((answer) => {

            const amount = answer['amount']
            addAmount(accountName, amount)
            operation()

        }).catch((err) => console.log(err)) 
    }).catch((err) => {console.log(err)})
}

function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed(`This account doesn't exists. Choose another account to proceed.`))
        return false 
    }
    return true
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed('An error ocurred! Please, try again.'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.log(err)
        }
    )
    console.log(chalk.bgGreen(`Your account received $${amount} deposit.`))
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8', 
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}

function withdraw() {
    inquirer.prompt(
        {
            name: 'accountName',
            message: `What's your account name?`
        }
    ).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt(
            {
                name: 'amount',
                message: 'How much do you want to draw out?'
            }
        ).then((answer) => {

            const amount = answer['amount']
            remove(accountName, amount)
        }).catch((err) => console.log(err)) 
    }).catch((err) => {console.log(err)})
}

function remove(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed('An error ocurred! Please, try again.'))
        return withdraw()
    }

    if(accountData.balance < amount) {
        console.log(chalk.bgRed(`Unavailable value to withdraw.`))
        withdraw()
    }
    
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.log(err)
        }
    )
    console.log(chalk.bgGreen(`You has been draw out $${amount}.`))
    operation()
}