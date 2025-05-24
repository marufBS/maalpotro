// import { useState, useRef } from 'react';
// import axios from 'axios';
// import { HiOutlineLocationMarker, HiOutlineCloudUpload } from 'react-icons/hi';
// import { CiUser } from 'react-icons/ci';
// import { IoStorefrontOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
// import { PiIdentificationCardThin } from "react-icons/pi";
// import { TbLicense } from "react-icons/tb";
// import { RxCross2 } from 'react-icons/rx';

// export default function Form() {
//   const [form, setForm] = useState({
//     phone: '',
//     email: '',
//     location: '',
//     shopName: '',
//     ownerName: '',
//     nidNo: '',
//     tradeLicenseNo: ''
//   });
//   const [status, setStatus] = useState('');
//   // const [files, setFiles] = useState({
//   //   nidFront: null,
//   //   nidBack: null,
//   //   tradeLicense: null
//   // });
//   // const [previews, setPreviews] = useState({
//   //   nidFront: '',
//   //   nidBack: '',
//   //   tradeLicense: ''
//   // });

//   // refs so we can clear the inputs programmatically
//   // const nidFrontRef = useRef();
//   // const nidBackRef = useRef();
//   // const tradeLicenseRef = useRef();

//   const formFields = [
//     { id: 'ownerName', icon: CiUser, placeholder: 'e.g., Muhammad Ibrahim', type: 'text' },
//     { id: 'shopName', icon: IoStorefrontOutline, placeholder: 'e.g., Ibrahim Mart', type: 'text' },
//     { id: 'phone', icon: IoCallOutline, placeholder: 'e.g., 01701234567', type: 'text' },
//     { id: 'email', icon: IoMailOutline, placeholder: 'you@example.com (optional)', type: 'email' },
//     { id: 'nidNo', icon: PiIdentificationCardThin, placeholder: 'NID (optional)', type: 'text' },
//     { id: 'tradeLicenseNo', icon: TbLicense, placeholder: 'Trade License (optional)', type: 'text' },
//   ]

//   const handleChange = e => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // const handleFileSelect = (id, file) => {
//   //   // create preview URL
//   //   const url = URL.createObjectURL(file);
//   //   setFiles(prev => ({ ...prev, [id]: file }));
//   //   setPreviews(prev => ({ ...prev, [id]: url }));
//   // };

//   // const clearFile = id => {
//   //   // clear state + preview + input value
//   //   setFiles(prev => ({ ...prev, [id]: null }));
//   //   URL.revokeObjectURL(previews[id]);
//   //   setPreviews(prev => ({ ...prev, [id]: '' }));
//   //   const ref = ({ nidFront: nidFrontRef, nidBack: nidBackRef, tradeLicense: tradeLicenseRef })[id];
//   //   if (ref?.current) ref.current.value = '';
//   // };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setStatus('Submitting…');

//     const data = new FormData();
//     Object.entries(form).forEach(([k, v]) => data.append(k, v));
//     // Object.entries(files).forEach(([k, file]) => data.append(k, file));

//     try {
//       const res = await axios.post(
//         'https://bakite.co/api/users/create',
//         data,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       if (res.status === 200 || res.status === 201) {
//         setStatus('Submitted successfully!');
//         setForm({ phone: '', email: '', location: '', shopName: '', ownerName: '' });
//         // clearFile('nidFront');
//         // clearFile('nidBack');
//         // clearFile('tradeLicense');
//       } else {
//         setStatus(`Unexpected status: ${res.status}`);
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus(err.response
//         ? `Error ${err.response.status}: ${err.response.data.error}`
//         : 'Submission failed.');
//     }
//   };

//   // function FileDropZone({ id, label, inputRef }) {
//   //   const preview = previews[id];

//   //   return (
//   //     <div className="mb-4">
//   //       <p className="block mb-1 font-medium">{label}</p>
//   //       <div
//   //         onDragOver={e => e.preventDefault()}
//   //         onDrop={e => {
//   //           e.preventDefault();
//   //           const file = e.dataTransfer.files?.[0];
//   //           if (file) handleFileSelect(id, file);
//   //         }}
//   //         className="relative bg-white flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-[120px] md:h-[250px] cursor-pointer hover:border-gray-400 transition overflow-hidden"
//   //         onClick={() => inputRef.current.click()}
//   //       >
//   //         {preview
//   //           ? (
//   //             <>
//   //               <img
//   //                 src={preview}
//   //                 alt={label}
//   //                 className="object-cover w-full h-full"
//   //               />
//   //               <button
//   //                 type="button"
//   //                 onClick={e => { e.stopPropagation(); clearFile(id); }}
//   //                 className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
//   //               >
//   //                 <RxCross2 size={16} />
//   //               </button>
//   //             </>
//   //           )
//   //           : (
//   //             <div className="flex flex-col items-center">
//   //               <HiOutlineCloudUpload className="text-gray-400" size={32} />
//   //               <p className="mt-2 font-semibold text-gray-700">Browse Files</p>
//   //               <p className="text-sm text-gray-500">Drag and drop files here</p>
//   //             </div>
//   //           )
//   //         }

//   //         <input
//   //           id={id}
//   //           type="file"
//   //           accept="image/*"
//   //           ref={inputRef}
//   //           className="sr-only"
//   //           onChange={e => {
//   //             const file = e.target.files?.[0];
//   //             if (file) handleFileSelect(id, file);
//   //           }}
//   //         />
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   return (
//     // <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 shadow-lg">
//     <div className="max-w-lg mx-auto bg-[#EFFEFD] rounded-3xl p-5 shadow-lg flex flex-col">
//       <h1 className="text-2xl font-bold text-center mb-6">Pre-Register Your Shop</h1>
//       <div className='flex-1 overflow-y-auto no-scrollbar p-2'>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           {/** Text fields **/}
//           {/* <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
//             {formFields.map(({ id, icon: Icon, placeholder, type }) => (
//               <div key={id} className={`${id==='location'?'col-span-2':''}`}>
//                 <label htmlFor={id} className="sr-only">{placeholder}</label>
//                 <div className="relative">
//                   <Icon
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//                     size={15}
//                   />
//                   <input
//                     id={id}
//                     name={id}
//                     type={type}
//                     value={form[id]}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     className="w-full bg-gray-200 placeholder:text-sm rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     required
//                   />
//                 </div>
//               </div>
//             ))}
//           </div> */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {formFields.map(({ id, icon: Icon, placeholder, type }) => (
//               <div key={id}>
//                 <label htmlFor={id} className="sr-only">{placeholder}</label>
//                 <div className="relative">
//                   <Icon
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//                     size={15}
//                   />
//                   <input
//                     id={id}
//                     name={id}
//                     type={type}
//                     value={form[id]}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     className="w-full bg-gray-200 placeholder:text-sm rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     required={id === 'email' ? false : true}
//                   />
//                 </div>
//               </div>
//             ))}

//             {/* Location as a full-width textarea */}
//             <div className="col-span-full">
//               <label htmlFor="location" className="sr-only">e.g., Agrabad, Chittagong</label>
//               <textarea
//                 id="location"
//                 name="location"
//                 value={form.location}
//                 onChange={handleChange}
//                 placeholder="e.g., Agrabad, Chittagong"
//                 rows={3}
//                 className="w-full bg-gray-200 placeholder:text-sm rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
//                 required
//               />
//             </div>
//           </div>
//           {/** File zones **/}
//           {/* <FileDropZone id="nidFront" label="NID Picture — Front" inputRef={nidFrontRef} />
//           <FileDropZone id="nidBack" label="NID Picture — Back" inputRef={nidBackRef} />
//           <FileDropZone id="tradeLicense" label="Trade License Picture" inputRef={tradeLicenseRef} /> */}

//           {/** Submit **/}
//           <button
//             type="submit"
//             className="w-full bg-[#009CA3] text-white font-bold py-3 rounded-full hover:bg-[#0A5F65] transition"
//           >
//             {status ?
//               <span>{status}</span> :
//               'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState, useRef } from 'react';
import axios from 'axios';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiUser } from 'react-icons/ci';
import { IoStorefrontOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { PiIdentificationCardThin } from 'react-icons/pi';
import { TbLicense } from 'react-icons/tb';

export default function Form() {
  const [form, setForm] = useState({
    phone: '',
    email: '',
    location: '',
    shopName: '',
    ownerName: '',
    nidNo: '',
    tradeLicenseNo: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formFields = [
    { id: 'ownerName', icon: CiUser, placeholder: 'e.g., Muhammad Ibrahim', type: 'text' },
    { id: 'shopName', icon: IoStorefrontOutline, placeholder: 'e.g., Ibrahim Mart', type: 'text' },
    { id: 'phone', icon: IoCallOutline, placeholder: 'e.g., 01701234567', type: 'text' },
    { id: 'email', icon: IoMailOutline, placeholder: 'you@example.com (optional)', type: 'email' },
    { id: 'nidNo', icon: PiIdentificationCardThin, placeholder: 'NID (optional)', type: 'text' },
    { id: 'tradeLicenseNo', icon: TbLicense, placeholder: 'Trade License (optional)', type: 'text' }
  ];

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

    try {
      console.log('registering')
      const res = await axios.post(
        'https://bakite.co/api/users/create',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (res.status === 200 || res.status === 201) {
        setStatus('Submitted successfully!');
        setForm({ phone: '', email: '', location: '', shopName: '', ownerName: '', nidNo: '', tradeLicenseNo: '' });
      } else {
        setStatus(`Unexpected status: ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      setStatus(
        err.response
          ? `Error ${err.response.status}: ${err.response.data.error}`
          : 'Submission failed.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative max-w-lg mx-auto bg-[#EFFEFD] rounded-3xl p-5 shadow-lg flex flex-col">
      {isSubmitting && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-3xl">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
        </div>
      )}

      <h1 className="text-2xl font-bold text-center mb-6">Pre-Register Your Shop</h1>
      <div className="flex-1 overflow-y-auto no-scrollbar p-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields.map(({ id, icon: Icon, placeholder, type }) => (
              <div key={id}>
                <label htmlFor={id} className="sr-only">{placeholder}</label>
                <div className="relative">
                  <Icon
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={15}
                  />
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={form[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-gray-200 placeholder:text-sm rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required={id === 'email' || id === 'nidNo' || id === 'tradeLicenseNo' ? false : true}
                  />
                </div>
              </div>
            ))}
            <div className="col-span-full">
              <label htmlFor="location" className="sr-only">e.g., Agrabad, Chittagong</label>
              <textarea
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g., Agrabad, Chittagong"
                rows={3}
                className="w-full bg-gray-200 placeholder:text-sm rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#009CA3] text-white font-bold py-3 rounded-full hover:bg-[#0A5F65] transition disabled:opacity-50"
            disabled={isSubmitting}
          >
            {status || 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
