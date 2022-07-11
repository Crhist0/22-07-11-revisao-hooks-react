import { useEffect, useState } from 'react';

export default function UseEffectHook() {
    // #1 -> sem segundo parametro -> executa a cada re-render 
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('Executou');
    });
    // #2 -> segundo parametro em vazio -> executa apenas uma vez 
    // após compomente terminar de renderizar o conteúdo
    useEffect(() => {
        console.log('Executou 2');
    }, []);
    // #3 -> segundo parametro com valor -> executa sempre
    // que algum dos valores dos parametros mudar
    useEffect(() => {
        console.log('Executou 3');
    }, [count2]);
    return (
        <>
            <h2>useEffect</h2>
            <button onClick={() => setCount(old => ++old)}>+1</button>
            <button onClick={() => setCount2(old => old + 5)}>+5</button>
        </>
    );
}