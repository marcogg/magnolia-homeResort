import HubspotForm from 'react-hubspot-form'


<HubspotForm
  portalId='21634170'
  formId='e4e1d2d9-4bc9-4a26-ae9b-94c4cfd9f3f5'
  onSubmit={() => console.log('Enviado!')}
  onReady={(form) => console.log('Form ready!')}
  loading={<div>Loading...</div>}
/>

// const ContactForm = () => {
//   const createHbspt = () => {
//     hbspt.forms.create({
//       region: 'na1',
//       portalId: '21634170',
//       formId: 'e4e1d2d9-4bc9-4a26-ae9b-94c4cfd9f3f5'
//     })
//   }
//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-6 col-md-6 col-lg-6'>
//           {createHbspt()}
//         </div>
//       </div>
//     </div>
//   )
// }

export default HubspotForm
