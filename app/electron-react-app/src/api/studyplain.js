const API = "http://localhost:9000";

export const getStudyPlains =  async () => {
    const res = await fetch(`${API}/studyplains`);
    const response = await res.json();
    return response;
}

export const getStudyPlainsByCod = async (cod) => {
    if (cod == '')
        return null;

    const res = await fetch(`${API}/studyplains/${cod}`);
    
    if (res.status != 200)
        return null;

    const response = await res.json();
    return response;
}