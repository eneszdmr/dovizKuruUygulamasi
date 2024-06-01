import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowsAltH } from "react-icons/fa";
import axios from 'axios'

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)

    const API_URL = 'https://api.freecurrencyapi.com/v1/latest'
    const KEY = 'fca_live_B5Y0n2sUWD1oj2lx0VpBKVJtr14aGhaUaUKhR6ma'



    const handleExchange = async () => {
        const response = await axios.get(`${API_URL}?&apikey=${KEY}&base_currency=${fromCurrency}`)
        setResult((response.data.data[toCurrency] * amount).toFixed(2));
    }

    return (
        <div className='currency-div'>
            <div style={{ backgroundColor: 'black', color: 'white', width: '100%', textAlign: 'center' }}>
                <h2>Döviz Uygulaması</h2>
            </div>
            <div>
                <input type='number' className='amount' onChange={(e) => setAmount(e.target.value)} />
                <select className='from-currency' onChange={(e) => setFromCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowsAltH style={{ marginRight: '10px', fontSize: '25px', marginTop: '15px' }} />
                <select className='to-currency' onChange={(e) => setToCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <input type='number' className='result' value={result} />
            </div>
            <button className='custom-button' onClick={handleExchange}>Çevir</button>

        </div>
    )
}

export default Currency