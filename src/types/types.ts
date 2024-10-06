export interface Account {
    owner: string;
    movements: number[];
    interestRate : number;
    pin: number;
    username?: string;
    balance?: number;
}

export interface AccountProps {
    account: Account;
    updateAccount: (account: Account) => void;
}

export interface LoginProps {
    onLogin: (account: Account) => void;
}