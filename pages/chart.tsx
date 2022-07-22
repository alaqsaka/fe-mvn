import React, {useState} from 'react'
import { clearInterval, setInterval } from 'timers'
import BarChart from '../components/BarChart'

const Chart = () => {
    // Mendapatkan input dari user
    const [angka, setAngka] = useState('')
    const [isAngka, setIsAngka] = useState<boolean>()
    const [chartArray, setChartArray] = useState<number[]>([])
    const [isStart, setIsStart] = useState(true)
    const [intervalId, setIntervalId] = useState<any>(0);

    var arr: number[] = []

    // Mengecek bahwa input tersebut adalah angka dan tidak sama dengan 0
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAngka(e.target.value)
        validasiAngka(e.target.value)
    }

    // Jika input berupa selain angka atau angka = 0, maka kirim error
    const validasiAngka = (angka: any) => { 
        if (angka.trim() === '' || angka ==0) {
            setIsAngka(false);
            
            return false;
          }
        setIsAngka(!isNaN(angka));
        return !isNaN(angka);
    }

    // Membuat angka acak sesuai dengan jumlah angka
    const generateRandomInteger = (angka: number) => {
        console.log(angka)
        
        for(let i =0; i<angka; i++) {
            arr.push(Math.floor(Math.random() * 101))
        }
        // console.log(arr)
        setChartArray(arr)
        arr = []
        return arr
    }

    // Generate Chart
    const handleStart = (angka: any) => {
        setIsStart(prevIsStart => !prevIsStart)

        if(intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
        
        console.log('start')
        const newIntervalId = setInterval(() => {
            generateRandomInteger(angka)
        }, 3000);
        
        setIntervalId(newIntervalId)
    }

  return (
    <div className='justify-center py-4'>
        
            <div className='flex justify-center mt-4 mb-2'>
                <input type="text" name='angka' 
                onChange={handleChange}
                required 
                className='flex-auto border-2 border-gray-400 rounded mr-2 h-11' placeholder='Masukkan angka...'/>

                <button type='submit' 
                onClick={() =>handleStart(angka)}
                className={`bg-gray-400 text-white px-4 rounded-md`} disabled={!isAngka}>{isStart ? 'Start' : 'Stop'}</button>
            </div>

            {/* Error */}
            {angka && (
                     <p className='text-red-500 font-semibold'>{isAngka ?  '' : 'Masukkan berupa angka dan tidak boleh 0'}</p>
                )}

        {/* Pecahan Cards */}
        <div className='mt-4'>
            <div className=''>
                {chartArray && ( 
                    <div className='flex gap-2 h-full justify-center'>
                        {chartArray.length >0 && (
                            chartArray.map((value: number, index) => (
                                <BarChart key={index} value={chartArray[index]}/>
                            ))  
                        )}
                    </div>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Chart