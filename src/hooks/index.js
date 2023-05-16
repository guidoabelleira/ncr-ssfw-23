export const filterData = (cuentas) => {
    let arrayFilter = cuentas.filter(e => e.n.length > 4).filter(e => e.tipo_letras === "CC" || e.tipo_letras === "CA").filter(e => e.moneda === "u$s" || e.moneda === "$")
    return arrayFilter
}   