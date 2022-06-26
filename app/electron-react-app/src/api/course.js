const API = "http://localhost:9000";

export const getCourses =  async () => {
    const res = await fetch(`${API}/courses`);
    const response = await res.json();
    return response;
}

export const getCoursesByCod = async (cod) => {
    if (cod == '')
        return null;

    const res = await fetch(`${API}/courses/${cod}`);
    
    if (res.status != 200)
        return null;

    const response = await res.json();
    return response;
}