// import { type } from '@testing-library/user-event/dist/type';
// import { AuthContext } from './AuthContext';
import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;


}

export const AuthContext = createContext<AuthContextType>(null!);
