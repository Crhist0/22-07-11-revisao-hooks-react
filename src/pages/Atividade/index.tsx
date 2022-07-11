import { useState, useEffect } from 'react';

type TUser = {
    nome: string;
    email: string;
    telefone: string;
}

export default function Atividade() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [lista, setLista] = useState<TUser[]>([]);

    useEffect(() => {
        setNome('');
        setEmail('');
        setTelefone('');
    }, [lista]);

    function onAdicionarUsuario(event: React.MouseEvent) {
        event.preventDefault();
        const usuario = {
            nome,
            email,
            telefone
        };

        setLista([usuario, ...lista]);
    }
    return (
        <>
            <h1>Atividade</h1>
            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" 
                           value={nome} 
                           onChange={(event) => setNome(event.target.value)} />
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="text"
                           value={telefone} 
                           onChange={(event) => setTelefone(event.target.value)} />
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="text"
                           value={email} 
                           onChange={(event) => setEmail(event.target.value)} />
                </div>
                <button onClick={(event) => onAdicionarUsuario(event)}>Adicionar</button>
            </form>
            <ul>
                { lista.map(usuario => {
                    return (
                        <li>{ usuario.nome } - { usuario.email } - { usuario.telefone }</li>
                    );
                }) }
            </ul>
            { lista.length > 10 ? 'Ganhou' : null }
        </>
    );
}