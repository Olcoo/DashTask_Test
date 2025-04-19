export const getInitialToken = (): string | null => {
    const localToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');
    
    const token = localToken || sessionToken || null;

    if(!token || token.trim() === '') {
        return null;
    }

    return token;
};