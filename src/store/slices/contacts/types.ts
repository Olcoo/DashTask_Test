export type Contact = {
    id: number,
    name: string,
    email: string,
};

export type ContactStateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ContactState = {
    contacts: Contact[],
    fetchStatus: ContactStateStatus,
    createtatus: ContactStateStatus,
};