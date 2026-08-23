import { useContext, type Provider, type ReactNode } from 'react';
import {
    type IRegularLibraryContext,
    RegularLibraryContext,
    RegularLibraryContextProvider
} from './RegularLibraryContext';
import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

const createWrapper = (
    Wrapper: Provider<IRegularLibraryContext | null>,
    props: { value: IRegularLibraryContext | null }
) => {
    return function CreatedWrapper({ children }: { children: ReactNode }) {
        return <Wrapper {...props}>{children}</Wrapper>;
    };
};

describe('RegularLibraryContext', () => {
    test('should return context message', () => {
        const { result } = renderHook(
            () => {
                return useContext(RegularLibraryContext);
            },
            {
                wrapper: createWrapper(RegularLibraryContextProvider, {
                    value: { message: 'Hello, regular context!' }
                })
            }
        );
        expect(result.current?.message).toBe('Hello, regular context!');
    });
});
