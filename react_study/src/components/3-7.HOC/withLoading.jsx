import React from 'react'
import { useState, useEffect } from 'react'

export default function withLoading(Componemt) {
    const WithLoadingComponent = (props) => {
        const [loading, setLoading] = useState(true);
        useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        
        return () => clearTimeout(timer);
        }, [])
    
    return loading ? <p>Loading... </p> : (
        <button>
            Button
        </button>
    )
    }
    return WithLoadingComponent

    
}
