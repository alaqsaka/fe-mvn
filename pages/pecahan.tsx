import React, {useState} from 'react'
import PecahanCard from '../components/PecahanCard'

const Pecahan = () => {
    // Mendapatkan input dari user
    const [angka, setAngka] = useState('')
    const [isAngka, setIsAngka] = useState<boolean>()
    const [pecahan, setPecahan] = useState<number[]>([])
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

    // Mengkonversi ke dalam bentuk pecahan, dimasukan ke dalam list 
    const konversiPecahan = (angka: string) => {
        let arrayOfDigits = Array.from(String(angka), Number)
       

        for(let i =0; i<arrayOfDigits.length; i++) {
            let num = arrayOfDigits[i] * (10 ** (arrayOfDigits.length - (i+1)) )
            if (num != 0){
                arr.push(num)
            }
        }

        return arr
    }

    const handleSubmit = (angka: any) => {
        
        setPecahan(konversiPecahan(angka))
    }

  return (
    <div className='justify-center py-4'>
        
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
            {pecahan  && (
                <div>
                    {pecahan.length >0 && pecahan.map((digit: number) => (
                        // <div key={digit}>
                        //     {digit}
                        // </div>
                        <PecahanCard key={digit} digit={digit}/>
                    ))}

                </div>
            )}
            
            
        </div>
    </div>
  )
}

export default Pecahan