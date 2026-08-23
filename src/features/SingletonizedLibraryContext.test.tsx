import { useContext, type Provider, type ReactNode } from 'react';
import {
    type ISingletonizedLibraryContext,
    SingletonizedLibraryContext,
    SingletonizedLibraryContextProvider
} from './SingletonizedLibraryContext';
import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

const createWrapper = (
    Wrapper: Provider<ISingletonizedLibraryContext | null>,
    props: { value: ISingletonizedLibraryContext | null }
) => {
    return function CreatedWrapper({ children }: { children: ReactNode }) {
        return <Wrapper {...props}>{children}</Wrapper>;
    };
};

describe('SingletonizedLibraryContext', () => {
    test('should return context message', () => {
        const { result } = renderHook(
            () => {
                return useContext(SingletonizedLibraryContext);
            },
            {
                wrapper: createWrapper(SingletonizedLibraryContextProvider, {
                    value: { message: 'Hello, singletonized context!' }
                })
            }
        );
        expect(result.current?.message).toBe('Hello, singletonized context!');
    });
});
