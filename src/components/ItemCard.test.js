import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import {ItemCard} from './ItemCard'

test('Visualiza Numero de Cuenta', () => {
    const item = {
        e: "1",
        n: "872378326701",
        t: "02",
        saldo: "1500",
        moneda: "u$s",
        tipo_letras: "CC"
    }

    const component = render(<ItemCard tipo="CARD" titulo={item.tipo_letras} detalle={item.n} />)
    component.getByText("872378326701")
    
})