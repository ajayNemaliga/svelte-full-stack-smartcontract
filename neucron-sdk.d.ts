// @types/neucron-sdk.d.ts
declare module 'neucron-sdk' {
    export default class NeucronSDK {
      authentication: {
        signUp: (params: { email: string, password: string }) => Promise<any>;
        login: (params: { email: string, password: string }) => Promise<any>;
      };
      wallet: {
        getWalletKeys: (params: {}) => Promise<any>;
        getWalletBalance: (params: {}) => Promise<any>;
        // Add other wallet methods as needed
      };
      pay: {
        txSpend: (params: { outputs: { address: string, note: string, amount: number }[] }) => Promise<any>;
      };
    }
  } 