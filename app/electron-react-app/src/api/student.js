import { replaceRut } from "../logic/validate";

const API = "http://localhost:9000";

export const getStudents =  async () => {
    const res = await fetch(`${API}/students`);
    const response = await res.json();
    return response;
}

export const getStudentsByRut = async (rut) => {
    const rutN = replaceRut(rut);
    if (rutN == '')
        return null;

    const res = await fetch(`${API}/students/${rutN}`);
    
    if (res.status != 200)
        return null;

    const response = await res.json();
    return response;
}


export const login = async (rut) => {
    const res = await fetch(`${API}/login/${rut}`);
    if (!res)
        return null;
    const response = await res.json();
    return response;
    
}