"use client"
import React, { useState } from 'react'

const NftViewBox = () => {
    const [walletAddress, setWalletAddress] = useState('')

    const handleInputChange = (event: any) => {
        setWalletAddress(event.target.value)
    }

    return (
        <div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wallet address</label>
                <input 
                    type="text" 
                    id="walletAddress" 
                    value={walletAddress} 
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="eg : 0x742d35Cc6634C0532925a3b844Bc454e4438f44e" 
                    required 
                />
            </div>
            <div>
                <button 
                    type="button" 
                    className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${!walletAddress ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={!walletAddress}
                >
                    Get all nfts
                </button>
            </div>
        </div>
    )
}

export default NftViewBox
