import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()           // Async, så vi kan inte köra dirre här. Promise't funkar inte som tänkte. Returnerar på BÅDE succeeds och fails! vi måste unwrappa promiset!
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}
