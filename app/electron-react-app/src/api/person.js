const API = "http://localhost:9000";

export const getPersons =  async () => {
    const res = await fetch(`${API}/persons`);
    const response = await res.json();
    return response;
}

export const getPersonsByRut = async (rut) => {
    if (rut == '')
        return null;

    const res = await fetch(`${API}/persons/${rut}`);
    
    if (res.status != 200)
        return null;

    const response = await res.json();
    return response;
}