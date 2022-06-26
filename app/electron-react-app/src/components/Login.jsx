import React, { useEffect, useState } from 'react';
import { login } from '../api/student';

export const Login = ({rut_person}) => {
    const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await login(rut_person);
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

    // if (error)
    //     return 
    //     (                
    //         <p>
    //             Error fetching student: {error.message}
    //         </p>)

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
            )
        else
        (
            <div>
                <p>El rut ingresado no es de un estudiante</p>
            </div>
        )
    else
    (
        <div>
            <span className='spinner-border'></span> Cargando estudiante....
        </div>   
    )
}