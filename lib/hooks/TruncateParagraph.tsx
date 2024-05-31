'use client'

import React, { useEffect, useState } from 'react';

const TruncateParagraph = ({ text }: { text: string }) => {
    const [truncatedText, setTruncatedText] = useState(text);

    useEffect(() => {
        const words = text.split(' ');
        if (words.length > 12) {
            setTruncatedText(words.slice(0, 12).join(' ') + '...');
        }
    }, [text]);

    return (
        <p className="p-3 ">
            {truncatedText}
        </p>
    );
};

export default TruncateParagraph;
