import { useState, useEffect } from "react";
import getSearchService from "../api/getSearchService";

export default function useGetSearch(searchTerm) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const resetResults = () => {
        setResults([]);
    };

    useEffect(() => {
        const fetchDataFromService = async () => {
            await getSearchService(searchTerm).then(setResults);
            setLoading(false);
        };

        if (searchTerm >= 3 && !results.length > 0) {
            fetchDataFromService();
        } else {
            const timeoutId = setTimeout(() => {
                if (searchTerm) {
                    fetchDataFromService();
                }
            }, 750);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [searchTerm]);
    return { results, loading, resetResults };
}
