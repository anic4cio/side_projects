import inquirer from 'inquirer'
import chalk from 'chalk'
import * as fs from 'fs'

interface Account {
	balance: number
}

const operation = () => {
   inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What you wish to do?',
      choices: ['Create account', 'Show balance', 'Deposit', 'Withdraw', 'Sign out']
   }).then(answer => {
      const action: string = answer['action']
      if (action === 'Create account') {
         congrats()
      } else if (action === 'Show balance') {
         showBalance()
      } else if (action === 'Deposit') {
         deposit()
      } else if (action === 'Withdraw') {
         withdraw()
      } else {
         console.log(chalk.bgBlue('Thanks for using Bank Account. Signing out...'))
         process.exit()
      }
   }).catch(err => console.log(err))
}

const congrats = () => {
   console.log(chalk.bgGreen('Congratulations to chose Bank Account!'))
   console.log(chalk.bgGreen('Set up your account options.'))
   return createAccount()
}

const createAccount = () => {
   inquirer.prompt(
      { name: 'accountName', message: 'Enter your account name:' }
   ).then(answer => {
      const accountName: string = answer['accountName']
      console.info(accountName)

      if (!fs.existsSync('accounts')) {
         fs.mkdirSync('accounts')
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
         console.log(chalk.bgRed('This account name already exists.'))
         createAccount()
         return
      }
      fs.writeFileSync(
         `accounts/${accountName}.json`,
         '{"balance": 0}'
      )
      console.log(chalk.bgGreen('Congrats! You account has been created sucessfully!'))
      operation()
   }).catch((err) => console.log(err))
}

const showBalance = () => {
   inquirer.prompt({
      name: 'accountName',
      message: 'What\'s your account name?'
   }).then(answer => {
      const accountName: string = answer['accountName']
      if (!checkAccount(accountName)) {
         return showBalance()
      }
      const accountData = getAccount(accountName)
      console.log(chalk.bgGreen(`Your current account balance is $${accountData.balance}`))
      operation()
   }).catch(err => console.log(err))
}

const deposit = () => {
   inquirer.prompt({
      name: 'accountName',
      message: 'What\'s your account name?'
   }).then((answer) => {
      const accountName: string = answer['accountName']
      if (!checkAccount(accountName)) {
         return deposit()
      }
      inquirer.prompt([{
         name: 'amount',
         message: 'How much do you want to deposit?'
      }]).then((answer) => {
         const amount: number = answer['amount']
         addAmount(accountName, amount)
         operation()
      }).catch(err => console.log(err))
   }).catch(err => console.log(err))
}

const checkAccount = (accountName: string) => {
   if (!fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed('This account doesn\'t exists. Choose another account to proceed.'))
      return false
   }
   return true
}

const addAmount = (accountName: string, amount: number) => {
   const accountData = getAccount(accountName)
   if (!amount) {
      console.log(chalk.bgRed('An error ocurred! Please, try again.'))
      return deposit()
   }
   accountData['balance'] = amount + accountData.balance
   fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData),
   )
   console.log(chalk.bgGreen(`Your account received $${amount} deposit.`))
}

const getAccount = (accountName: string): Account => {
   const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
      encoding: 'utf8',
      flag: 'r'
   })
   return JSON.parse(accountJSON)
}

const withdraw = () => {
   inquirer.prompt({
      name: 'accountName',
      message: 'What\'s your account name?'
   }).then((answer) => {
      const accountName: string = answer['accountName']
      if (!checkAccount(accountName)) {
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
   }).catch((err) => { console.log(err) })
}

const remove = (accountName: string, amount: number) => {
   const accountData = getAccount(accountName)
   if (!amount) {
      console.log(chalk.bgRed('An error ocurred! Please, try again.'))
      return withdraw()
   }
   if (accountData.balance < amount) {
      console.log(chalk.bgRed('Unavailable value to withdraw.'))
      withdraw()
   }
   accountData['balance'] = accountData.balance - amount
   fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData)
   )
   console.log(chalk.bgGreen(`You has been draw out $${amount}.`))
   operation()
}

operation()
