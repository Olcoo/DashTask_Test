export type AuthContextType = {
    token: string | null,
    login: (token: string, remember: boolean) => void,
    logout: () => void,
};