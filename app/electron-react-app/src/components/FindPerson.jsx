import React, { useState } from 'react';
import { PersonByRut } from './PersonByRut.jsx';
import { isValidRut } from '../logic/validate.js';
import { Login } from './Login.jsx';

export const FindPerson = () => {
    const [rut, setRut] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rutValid, setRutValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (isValidRut(rut))
            setRutValid(true);
        else
            setRutValid(false);
        setIsLoading(false);
    };
    return (
        <section>
            <h2>Buscar Estudiante:</h2>
            <form onSubmit={handleSubmit} className="">
                <div className='db-2'>
                    <label htmlFor='rut' className="form-label">
                        <b>Rut:</b>
                    </label>
                    <input 
                        type='text'
                        onChange={ (e) => setRut(e.target.value)} 
                        id='rut' 
                        name='rut'
                        value={rut} 
                    />
                </div>

                <button disabled={ isLoading || !rut}>
                    {isLoading ? (
                        <>
                        <span className='spinner-border'></span>{" "}
                        Cargando estudiante....
                        </>
                    ) : (
                        "Submit"
                        )}
                </button>
                {rutValid ? 
                (<Login rut_person={rut} />) : 
                    (<>
                        <p>Formato de rut: 1111111-1</p>
                    </>)}
                
                {error && (
                    <p>
                        Ha ocurrido un error al buscar el estudiante: {error.message}
                    </p>
                )}
            </form>
        </section>

    );
    
}