import { useEffect, useState } from 'react'
import InputForm from './components/InputForm'
import Viewer from './components/Viewer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [formData, setFormData] = useState(null);

  const handleSubmitForm = (val) => {
    setFormData(val);
  }

  return (
    <>
      <div className=' bg-black w-full min-h-[100vh] text-white flex flex-col gap-y-4 items-center justify-center'>
        <ToastContainer position="bottom-center" autoClose={500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          theme="colored"
          className='text-[16px] text-center'
          limit={1}
        />
        <InputForm handleSubmitForm={handleSubmitForm} />

        <Viewer inputData={formData} />
      </div>
    </>
  )
}

export default App
