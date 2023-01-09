import { prompt } from 'inquirer'
import * as chalk from 'chalk'
import * as fs from 'fs'

interface Account {
   balance: number
}

const welcome = () => {
   console.log(chalk.bgBlue('Welcome to Bank Account!\nWhat do you wish for today?\n'))
}

const start = () => {
   prompt({
      type: 'list',
      name: 'accountName',
      choices: ['Login account', 'Create New Account', 'Close terminal']
   }).then(answer => {
      const action: string = answer['accountName']
      if (action === 'Login account') {
         return login()
      } else if (action === 'Create New Account') {
         return createAccount()
      } else {
         console.log(chalk.bgBlue('Thanks for using Bank Account.\n'))
         console.log(chalk.bgRed('Terminal closed!'))
         process.exit()
      }
   })
}

const login = () => {
   prompt({
      name: 'accountName',
      message: 'What\'s your account name?'
   }).then(answer => {
      const accountName: string = answer['accountName']
      if (!checkAccount(accountName)) {
         return login()
      }
      return operation(accountName)
   }).catch(err => console.log(err))
}

const checkAccount = (accountName: string) => {
   if (!fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed('This account doesn\'t exists. Choose another account to proceed.\n'))
      return false
   }
   return true
}

const operation = async (accountName: string) => {
   prompt({
      type: 'list',
      name: 'action',
      message: 'What you wish to do?',
      choices: ['Show balance', 'Deposit', 'Withdraw', 'Sign out']
   }).then(answer => {
      const action: string = answer['action']
      if (action === 'Show balance') {
         return showBalance(accountName)
      } else if (action === 'Deposit') {
         return deposit(accountName)
      } else if (action === 'Withdraw') {
         return withdraw(accountName)
      } else {
         console.log(chalk.bgBlue('Thanks for using Bank Account. Signing out...\n'))
         return start()
      }
   }).catch(err => console.log(err))
}

const createAccount = () => {
   prompt(
      { name: 'accountName', message: 'Enter your new account name:' }
   ).then(answer => {
      const accountName: string = answer['accountName']
      if (!fs.existsSync('accounts')) {
         fs.mkdirSync('accounts')
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
         console.log(chalk.bgRed('This account name already exists.\n'))
         return start()
      }
      fs.writeFileSync(
         `accounts/${accountName}.json`,
         '{"balance": 0}'
      )
      console.log(chalk.bgBlue('Congratulations to chose Bank Account!'))
      console.log(chalk.bgGreen('You account has been created sucessfully!\n'))
      return operation(accountName)
   }).catch(err => console.log(err))
}

const getAccount = (accountName: string): Account => {
   const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
      encoding: 'utf8',
      flag: 'r'
   })
   return JSON.parse(accountJSON)
}

const showBalance = (accountName: string) => {
   const accountData = getAccount(accountName)
   console.log(chalk.bgGreen(`Your current account balance is $${accountData.balance}`))
   return operation(accountName)
}

const deposit = (accountName: string): void => {
   prompt([{
      name: 'amount',
      message: 'How much do you want to deposit?'
   }]).then(answer => {
      const amount = parseFloat(answer['amount'])
      if (amount == 0) {
         console.log(chalk.bgRed('You cannot deposit $0. Please, try again.\n'))
         return operation(accountName)
      }
      if (!amount) {
         console.log(chalk.bgRed('Only numeric character accepted! Please, try again.\n'))
         return operation(accountName)
      }
      addAmount(accountName, amount)
      return operation(accountName)
   }).catch(err => console.log(err))
}

const addAmount = (accountName: string, amount: number) => {
   const accountData = getAccount(accountName)
   accountData['balance'] += amount
   fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData),
   )
   console.log(chalk.bgGreen(`Your account received $${amount} deposit.`))
}

const withdraw = (accountName: string): void => {
   prompt({
      name: 'amount',
      message: 'How much do you want to draw out?'
   }).then(answer => {
      const amount = parseFloat(answer['amount'])
      return drawAmount(accountName, amount)
   }).catch(err => console.log(err))
}

const drawAmount = (accountName: string, amount: number) => {
   const accountData = getAccount(accountName)
   if (!amount) {
      console.log(chalk.bgRed('You must enter a numeric value to withdraw.\n'))
      return operation(accountName)
   }
   if (accountData.balance < amount) {
      console.log(chalk.bgRed('Unavailable value to withdraw.\n'))
      return operation(accountName)
   }
   accountData['balance'] = accountData.balance - amount
   fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData)
   )
   console.log(chalk.bgGreen(`You has been draw out $${amount}.\n`))
   return operation(accountName)
}

welcome()
start()
