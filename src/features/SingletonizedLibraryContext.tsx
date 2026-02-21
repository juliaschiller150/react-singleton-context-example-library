import { createRegisteredContext } from 'react-singleton-context';

export interface ISingletonizedLibraryContext {
    message: string;
}

export const SingletonizedLibraryContext =
    createRegisteredContext<ISingletonizedLibraryContext | null>(
        'ExampleLibrary_SingletonizedLibraryContext',
        null
    );

export const SingletonizedLibraryContextProvider = SingletonizedLibraryContext.Provider;
