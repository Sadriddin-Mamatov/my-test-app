import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NumberFactsProps {
    type: string;
    number: string;
    random: boolean;
}

const NumberFacts: React.FC<NumberFactsProps> = ({ type, number, random }) => {
    const [fact, setFact] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFact = async () => {
            try {
                setLoading(true);
                const num = random ? 'random' : number;
                const response = await axios.get(`http://numbersapi.com/${num}/${type}`);
                setFact(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch the fact.');
                setLoading(false);
            }
        };

        fetchFact();
    }, [type, number, random]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Fact about {random ? 'random number' : number} ({type}):</h2>
            <p>{fact}</p>
        </div>
    );
};

export default NumberFacts;
