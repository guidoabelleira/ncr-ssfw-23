import axios from 'axios';
import {filterData} from '../hooks/index';

export const getData = async () => {
    try {
        let response = await axios.get(process.env.REACT_APP_BASE_URL_API);
        if(response.status === 200) {
            if(response.data.cuentas) {
                return {
                    status: true,
                    cuentas: filterData(response.data.cuentas)
                }
            } else {
                return {
                    status: false,
                    mensaje: "Error Data"
                }
            }
        } else {
            return {
                status: false,
                mensaje: "Error Api"
            }
        }
    } catch (error) {
        return {
            status: false,
            mensaje: "Error Api"
        }
    }
}