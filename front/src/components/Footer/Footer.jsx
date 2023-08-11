// import React from 'react';
// import "./Footer.css";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

// export const Footer = () => {
//   const iconStyle = { color: '#fafafa' }; // Define el color azul para los iconos
//   return (
//     <>
//       {console.log('Esta línea ahora es alcanzable antes del return.')}
//       <div className='footer'>
//         <div className='sb-footer-section-padding'>
//           <div className='sb-footer-links'>
//             <div className='sb-footer-links-div'>
//               <h4>Empresa</h4>
//               <a href="/empresario">
//                 <p>Empresario</p>
//               </a>
//               <a href="/seguro-medico">
//                 <p>Seguro médico</p>
//               </a>
//               <a href="/participar">
//                 <p>Participar</p>
//               </a>
//             </div>
//             <div className='sb-footer-links_div'>
//               <h4>Recursos</h4>
//               <a href="/recursos">
//                 <p>Centro de recursos</p>
//               </a>
//               <a href="/recursos">
//                 <p>Testimonios</p>
//               </a>
//               <a href="/recursos">
//                 <p>Centro de ayuda</p>
//               </a>
//             </div>
//             <div className='sb_footer-links_div'>
//               <h4>Socios</h4>
//               <a href="/empresario">
//                 <p>Tecnologías</p>
//               </a>
//             </div>
//             <div className='sb_footer-links_div'>
//               <h4>Recursos</h4>
//               <a href="/recursos">
//                 <p>Centro de recursos</p>
//               </a>
//               <a href="/prensa">
//                 <p>Prensa</p>
//               </a>
//               <a href="/especialistas">
//                 <p>Especialistas</p>
//               </a>
//               <a href="/contacto">
//                 <p>Contacto</p>
//               </a>
//             <div className='socialmedia'  style={iconStyle}>
//               <p> < FacebookIcon />  </p>
//               <p><TwitterIcon/> </p>
//               <p><InstagramIcon/>  </p>

//             </div>
//             </div>
//           </div>
//           <hr />
//           <div className='sb_footer-below'>
//             <div className='sb_footer-copyright'>
//               <p>
//                 @{new Date().getFullYear()} CodeInn. All right reserved.
//               </p>
//             <div className='sb_footer-belloe-links'>
//               <a href="/terms"><div><p>Terms & Conditions</p></div></a>
//               <a href="/privacy"><div><p>Privacy</p></div></a>
//               <a href="/security"><div><p>Security</p></div></a>
//               <a href="/cookie"><div><p>Terms & Conditions</p></div></a>
//             </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const iconStyle = { color: "#fafafa" ,"&:hover": { color: "#5c21b8" }}; // Define the color white for the icons
  return (
    <>
      {console.log("This line is now reachable before the return.")}
      <div className="footer">
        <div className="sb-footer-section-padding">
          <div className="sb-footer-links">
            <div className="sb-footer-links-div">
              <h4>Company</h4>
              <a href="/entrepreneur">
                <p>Entrepreneur</p>
              </a>
              <a href="/health-insurance">
                <p>Health Insurance</p>
              </a>
              <a href="/join">
                <p>Join</p>
              </a>
            </div>
            <div className="sb-footer-links_div">
              <h4>Resources</h4>
              <a href="/resources">
                <p>Resource Center</p>
              </a>
              <a href="/testimonials">
                <p>Testimonials</p>
              </a>
              <a href="/help-center">
                <p>Help Center</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Contact</h4>
              <a href="/resources">
                <p>Resource Center</p>
              </a>
              <a href="/press">
                <p>Press</p>
              </a>
              <a href="/specialists">
                <p>Specialists</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>FollowUS</h4>
              <div className="socialmedia" style={iconStyle}>
                  <FacebookIcon sx={{ "&:hover": { color: "#5c21b8" },}} />
                  <TwitterIcon sx={{ "&:hover": { color: "#5c21b8" },}}/>
                  <InstagramIcon sx={{ "&:hover": { color: "#5c21b8" },}}/>
              
              </div>
            </div>
          </div>
          <hr />
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>@{new Date().getFullYear()} CodeInn. All rights reserved.</p>
              <div className="sb_footer-belloe-links">
                <a href="/terms">
                  <div>
                    <p>Terms & Conditions</p>
                  </div>
                </a>
                <a href="/privacy">
                  <div>
                    <p>Privacy</p>
                  </div>
                </a>
                <a href="/security">
                  <div>
                    <p>Security</p>
                  </div>
                </a>
                <a href="/cookie">
                  <div>
                    <p>Cookie Policy</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
