export const isValidRut = rut => {
    const dv = (T) => {
        let M=0, S=1;
        for (;T;T=Math.floor(T/10))
            S = (S + T % 10 * ( 9 - M++ % 6)) %11;
        return S ? S-1 : 'k';
    }
    if (!/^[0-9]+[-|-]{1}[0-9kK]{1}$/.test(rut))
    return false;
    let tmp = rut.split('-');
    let digv = tmp[1];
    rut = tmp[0];
    if (digv == 'K') digv = 'k';
    return (dv(rut) == digv);
}

export const replaceRut = rut => {
    console.log(`rut inicial: ${rut}`);
    const datos = rut.split('-');
    return datos[0] + datos[1].toUpperCase();
}