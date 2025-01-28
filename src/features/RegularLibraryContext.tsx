import * as React from 'react';

export interface IRegularLibraryContext {
	message: string;
}

export const RegularLibraryContext =
	React.createContext<IRegularLibraryContext | null>(null);

RegularLibraryContext.displayName = 'ExampleLibrary_RegularLibraryContext';

export const RegularLibraryContextProvider = RegularLibraryContext.Provider;
