import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/style/main.scss"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from './store'
import { Provider } from 'react-redux'
import { WagmiConfig, createConfig, createStorage } from 'wagmi'
import { configureChains } from '@wagmi/core'
import { sepolia, mainnet } from '@wagmi/core/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

var currentChain = sepolia;

if (Number(process.env.REACT_APP_L1_CHAIN_ID) === 1) {
    currentChain = mainnet;
}

export const ONLY = {
    id: Number(process.env.REACT_APP_L2_CHAIN_ID),
    name: "OnlyLayer",
    network: "ONLY",
    iconUrl: "https://github.com/layeronly/only-assets/blob/main/Logo%20files/Emblem/1x/Asset%207.png?raw=true",
    iconBackground: "#000000",
    nativeCurrency: {
        decimals: 18,
        name: 'Ethereum',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [process.env.REACT_APP_L2_RPC_URL]
        },
    },
    blockExplorers: {
        default: { name: "OnlyLayer Explorer", url: process.env.REACT_APP_L2_EXPLORER_URL }
    },
    testnet: true

}

const { chains, publicClient } = configureChains(
    [currentChain, ONLY],
    [
        jsonRpcProvider({
            rpc: chain => ({ http: chain.rpcUrls.default.http[0] })

        })
    ])

export const connectors = [
    new MetaMaskConnector({
        chains,
        options : {
            shimDisconnect: false,
        }
    }),
];

const config = createConfig({
    autoConnect: true,
    connectors,
    storage: createStorage({ storage: window.localStorage }),
    publicClient,
})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <WagmiConfig config={config}>
        <Provider store={store}>
            <App />
        </Provider>,
    </WagmiConfig>
);
reportWebVitals();
