// https://github.com/franlol/useFetch/

import { useState, useEffect } from 'react';

export default (url, options = {}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ status: false, message: '' });

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError({ status: true, message: error.message });
                setLoading(false);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [data, loading, error];
}
