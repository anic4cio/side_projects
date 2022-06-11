const os = require('os')

// memória disponível
console.log(os.freemem()) // 4110794752

// diretório principal
console.log(os.homedir()) // /home/anic4cio

// sistema operacional
console.log(os.type()) // Linux

// núcleos de CPUs
console.log(os.cpus()) //
/*
[
    {
      model: 'AMD FX(tm)-6300 Six-Core Processor',
      speed: 1625,
      times: {
        user: 6663740,
        nice: 2070,
        sys: 1420500,
        idle: 157684610,
        irq: 0
      }
    },
    {
      model: 'AMD FX(tm)-6300 Six-Core Processor',
      speed: 1437,
      times: {
        user: 7407500,
        nice: 4360,
        sys: 1636090,
        idle: 156726590,
        irq: 0
      }
    },
    {
      model: 'AMD FX(tm)-6300 Six-Core Processor',
      speed: 1926,
      times: {
        user: 7766770,
        nice: 3970,
        sys: 1747890,
        idle: 156083870,
        irq: 0
      }
    },
    {
      model: 'AMD FX(tm)-6300 Six-Core Processor',
      speed: 1965,
      times: {
        user: 6979780,
        nice: 2040,
        sys: 1697680,
        idle: 156830050,
        irq: 0
      }
    },
    {
      model: 'AMD FX(tm)-6300 Six-Core Processor',
      speed: 1511,
      times: {
        user: 7373250,
        nice: 2940,
        sys: 1640920,
        idle: 156728960,
        irq: 0
      }
    },
    {
      model: 'AMD FX(tm)-6300 Six-Core Processor',
      speed: 1851,
      times: {
        user: 7523080,
        nice: 2660,
        sys: 1797780,
        idle: 156437130,
        irq: 0
      }
    }
  ] 
  */