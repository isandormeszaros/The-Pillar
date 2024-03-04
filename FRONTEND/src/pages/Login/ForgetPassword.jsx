// import WatchesServices from '../../services/WatchesServices';
// import { useState } from 'react';

// // SendGrid API kulcs beállítása
// sgMail.setApiKey('your-sendgrid-api-key');

// function ForgetPassword() {
//   const [email, setEmail] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Ellenőrizzük, hogy az e-mail cím helyes formátumban van-e
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError('Invalid email address');
//       return;
//     }

//     WatchesServices.getOtp()
//       .then(response => {
//         // Ha az OTP generálása sikeres
//         if (response.data && response.data.otp) {
//           const otp = response.data.otp;

//           // Az e-mail üzenet összeállítása
//           const msg = {
//             to: email,
//             from: 'your-email@example.com', // Küldő e-mail címe, amit ellenőriznie kell a SendGrid-nek
//             subject: 'OTP for password reset',
//             text: `Your OTP for password reset is: ${otp}`
//           };

//           // Elküldjük az e-mailt a SendGrid segítségével
//           sgMail.send(msg)
//             .then(() => {
//               console.log('Email sent'); // Sikeres e-mail küldésének jelzése a konzolon
//               setOtpSent(true); // Állítsuk be a flag-et, hogy az OTP-t sikeresen elküldték
//             })
//             .catch(error => {
//               setError('Error sending email: ' + error.message); // Hibajelzés, ha az e-mail küldése nem sikerült
//             });
//         } else {
//           setError('Failed to generate OTP'); // Hibajelzés, ha az OTP generálása nem sikerült
//         }
//       })
//       .catch(error => {
//         setError('Error generating OTP: ' + error.message); // Hibajelzés, ha valamilyen hiba történt az OTP generálása közben
//       });
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send OTP</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {otpSent && <p>OTP sent successfully to your email.</p>}
//     </div>
//   );
// }

// export default ForgetPassword;
