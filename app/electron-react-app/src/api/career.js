const API = "http://localhost:9000";

export const getCareers =  async () => {
    const res = await fetch(`${API}/careers`);
    const response = await res.json();
    return response;
}

export const getCareersByCod = async (cod) => {
    if (cod == '')
        return null;
    const res = await fetch(`${API}/careers/${cod}`);    
    if (res.status != 200)
        return null;

    const response = await res.json();
    return response;
}