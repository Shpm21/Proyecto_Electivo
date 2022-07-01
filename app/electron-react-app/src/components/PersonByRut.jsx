import React, { useEffect, useState } from 'react';
import { getStudentsByRut  } from '../api/student.js';

export const PersonByRut = ({rut_person}) => {
    const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await getStudentsByRut(rut_person);
                console.log(data);
				setStudent(data);
				setError(null);
			} catch (err) {
                setError(err);
				setStudent(null);      
			}
			setIsLoading(false);
		};
		fetchData(); 
    }, [rut_person]);
    
    if (!isLoading)
        if (student)
            return (
                student.map((student) => {
                    return (
                        <div>
                            <p>Rut: {student.rut_person}</p>
                            <p>Codigo de carrera: {student.cod_plain}</p>
                            <p>A de Ingreso: {student.year}</p>
                        </div>
                    );
                })
            );
        else
            return (
                <div>
                    <p>El rut ingresado no es de un estudiante</p>
                </div>
                );
    else
        return (
            <div>
                <span className='spinner-border'></span> Cargando estudiante....
            </div>   
            );
    if (error)
        return 
        (                
            <p>
                Error fetching student: {error.message}
            </p>)
}