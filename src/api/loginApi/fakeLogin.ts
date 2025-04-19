export const fakeLogin = async (email: string, password: string): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'testmail22@gmail.com' && password === 'testPass22') {
                resolve({ token: 'mocked-jwt-token-123456' });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 2000);
    });
  };