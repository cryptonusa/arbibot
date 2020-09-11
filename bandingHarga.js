const { ethers } = require("ethers")
const erc20 = require("@studydefi/money-legos/erc20");
const kyber = require("@studydefi/money-legos/kyber");
const { dai } = require("@studydefi/money-legos/erc20")

const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)
const kyberNetwork = new ethers.Contract(
    kyber.network.address,
    kyber.network.abi,
    provider
  );
/*
  async function checkPair(args) {
    const { inputTokenSymbol, inputTokenAddress, outputTokenSymbol, outputTokenAddress, inputAmount } = args
  
    let kyberResult = await kyberNetwork(inputTokenAddress, outputTokenAddress, inputAmount, true).call() //masih masalah bagaimana caranya pakai 

    console.table([{
      'Input Token': inputTokenSymbol,
      'Output Token': outputTokenSymbol,
      'Input Amount': ethers.utils.formatEther(inputAmount, 'Ether'),
      'Kyber Expected Rate': ethers.utils.formatEther(kyberResult.expectedRate, 'Ether'),
      'Kyber Min Return': ethers.utils.formatEther(kyberResult.slippageRate, 'Ether'),
    }])
  }
  
  let priceMonitor
  let monitoringPrice = false
  
  async function monitorPrice() {
    if(monitoringPrice) {
      return
    }
  
    console.log("Checking prices...")
    monitoringPrice = true
  
    try {
  
      // ADD YOUR CUSTOM TOKEN PAIRS HERE!!!
  
      await checkPair({
        inputTokenSymbol: erc20.eth.symbol,
        inputTokenAddress: erc20.eth.address,
        outputTokenSymbol: erc20.dai.symbol,
        outputTokenAddress: erc20.dai.address,
        inputAmount: ethers.utils.parseEther("1.0")
      })

      await checkPair({
        inputTokenSymbol: 'ETH',
        inputTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        outputTokenSymbol: 'MKR',
        outputTokenAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        inputAmount: web3.utils.toWei('1', 'ETHER')
      })
    } catch (error) {
      console.error(error)
      monitoringPrice = false
      clearInterval(priceMonitor)
      return
    }
  
    monitoringPrice = false
  }
  
  // Check markets every n seconds
  const POLLING_INTERVAL = process.env.POLLING_INTERVAL || 3000 // 3 Seconds
  priceMonitor = setInterval(async () => { await monitorPrice() }, POLLING_INTERVAL)
  */
 console.log("Tes tesji dulu", erc20.dai.symbol, kyberNetwork.address)