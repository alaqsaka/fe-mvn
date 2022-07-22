import { type } from 'os'
import React, {useState} from 'react'
import PecahanCard from '../components/PecahanCard'

const Pecahan = () => {
    // Mendapatkan input dari user
    const [angka, setAngka] = useState('')
    const [isAngka, setIsAngka] = useState<boolean>()

    // Mengecek bahwa input tersebut adalah angka dan tidak sama dengan 0
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAngka(e.target.value)
        console.log(angka)

        if (validasiAngka(e.target.value)) {
            console.log('✅ It is a valid number');
          } else {
            console.log('⛔️ It is NOT a valid number');
          }
    }

    // Konversi dari string ke angka
    const validasiAngka = (angka: any) => { 
        if (angka.trim() === '' || angka ==0) {
            setIsAngka(false);
            console.log('salah')
            return false;
          }
        setIsAngka(!isNaN(angka));
        return !isNaN(angka);
    }


    // Jika input berupa selain angka atau angka = 0, maka kirim error
    const handleSubmit = (angka: any) => {
        console.log(angka)
    }
    // Mengkonversi ke dalam bentuk pecahan, dimasukan ke dalam list 


  return (
    <div className='justify-center py-4'>
        <h1 className='font-bold text-2xl text-center'>
            Pecahan
        </h1>

        
            <div className='flex justify-center mt-4 mb-2'>
                <input type="text" name='angka' 
                onChange={handleChange}
                required 
                className='flex-auto border-2 border-gray-400 rounded mr-2 h-11' placeholder='Masukkan angka...'/>

                <button type='submit' 
                onClick={() =>handleSubmit(angka)}
                className={`bg-gray-400 text-white px-2 rounded-md`} disabled={!isAngka}>Generate</button>
            </div>

            {/* Error */}
            {angka && (
                     <p className='text-red-500 font-semibold'>{isAngka ?  '' : 'Masukkan berupa angka dan tidak boleh 0'}</p>
                )}
        {/* Pecahan Cards */}
        <div className='mt-4'>
            <PecahanCard />
        </div>
    </div>
  )
}

export default Pecahan