import React, { useEffect, useState } from 'react';
import { getStudents  } from '../api/student.js';

export const Persons = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [students, setStudents] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await getStudents();
				setStudents(data);
				setError(null);
			} catch (err) {
				setError(err);
				setStudents(null);        
			}
			setIsLoading(false);
		};
		fetchData();
	}, [])

	if (isLoading)
		return (
			<div>
			<span className='spinner-border'></span> Loading Students....
			</div>
		);

	if (error)
		return (
			<div className='alert alert-danger'>
				Error fetching students: {error.message}
			</div>
		);	
	return (
	<div> Estudiantes
		<ul>
		{
			students.map((student, index) => {
				return <li key={index}>rut: {student.rut_person}</li>
			})
		}
		</ul>
	</div>
	);
}