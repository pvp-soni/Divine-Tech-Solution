import React from 'react'
import './styles.css'
import Logo from '../assets/main_logo.png'
import Logo2 from '../assets/ds-new-thick-logo.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation();
  return (
    <>
    <div className="navbar">
        <div className="logo_section">
            <img src={Logo} alt="" height={50} width={346} />
        </div>
        <div className="links_section">
            <NavLink to='/' className="link">
                Home
                <svg className={location.pathname==='/'?'link_active':'link_inactive'} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/training' className="link">
                Training
                <svg className={location.pathname==='/training'?'link_active':'link_inactive'} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/services' className="link">
                Services
                <svg className={location.pathname==='/services'?'link_active':'link_inactive'} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/consultancy' className="link">
                Consultancy
                <svg className={location.pathname==='/consultancy'?'link_active':'link_inactive'} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/about-us' className="link">
                About Us
                <svg className={location.pathname==='/about-us'?'link_active':'link_inactive'} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
            <NavLink to='/contact-us' className="link">
                Contact Us
                <svg className={location.pathname==='/contact-us'?'link_active':'link_inactive'} width="111" height="4" viewBox="0 0 111 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0H106L111 4H0L5 0Z" fill="#3EADAE"/>
                </svg>
            </NavLink>
        </div>
    </div>
    <Outlet></Outlet>
    <div className="footer">
      <div className="footer_content">
         <div className="footer_logo_section">
          <div className="footer_logo_tagline">
            <div><img src={Logo2} alt="" height={66} width={66} /></div>
            Your one-stop center for all technology solutions
          </div>
          <div className="footer_send_message">
            <div className="send_message_form">
              Get in touch with us
              <div className="footer_input">
                <input type="text" placeholder='Enter your email here'/>
                <input type="text" placeholder='Enter your message here'/>
              </div>
              <button className='primary_btn_small'>Send Message</button>
            </div>
          </div>
         </div>
         <div className="footer_links_section">
          <div className="footer_subsection_heading">Useful Links</div>
          <div className="footer_links">
            <NavLink to='/' className='useful_link'>Home</NavLink>
            <NavLink to='/training' className='useful_link'>Training</NavLink>
            <NavLink to='/services' className='useful_link'>Services</NavLink>
            <NavLink to='/consultancy' className='useful_link'>Consultancy</NavLink>
            <NavLink to='/about-us' className='useful_link'>About Us</NavLink>
          </div>
         </div>
         <div className="footer_contact_section">
          <div className="footer_subsection_heading">Contact Us</div>
          <div className="footer_contact_info">
            <div>
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.94322 6.08503L5.56472 7.27211C5.74694 7.87074 6.00148 8.44687 6.32314 8.98874C6.65867 9.52666 7.06296 10.0222 7.52663 10.4638L9.31185 9.93585C10.312 9.63988 11.4038 9.94385 12.0689 10.7038L13.0856 11.8653C13.4973 12.3315 13.7037 12.9333 13.6611 13.5431C13.6185 14.1529 13.3302 14.7228 12.8573 15.1321C11.1987 16.5848 8.6451 17.076 6.7332 15.6345C5.0521 14.3654 3.63021 12.8087 2.53934 11.0429C1.4457 9.28591 0.713486 7.34378 0.382409 5.3219C0.0156967 3.04693 1.75091 1.2263 3.91451 0.605564C5.20467 0.2344 6.58151 0.871138 7.0549 2.05822L7.6133 3.45809C7.98002 4.3796 7.71665 5.41949 6.94322 6.08503Z" fill="white"/>
              </svg>
              +91 84909 80192
            </div>
            <div>
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3333 2.83341L6.99992 6.16675L1.66659 2.83341V1.50008L6.99992 4.83342L12.3333 1.50008M12.3333 0.166748H1.66659C0.926585 0.166748 0.333252 0.760081 0.333252 1.50008V9.50008C0.333252 9.8537 0.473728 10.1928 0.723776 10.4429C0.973825 10.6929 1.31296 10.8334 1.66659 10.8334H12.3333C12.6869 10.8334 13.026 10.6929 13.2761 10.4429C13.5261 10.1928 13.6666 9.8537 13.6666 9.50008V1.50008C13.6666 1.14646 13.5261 0.807321 13.2761 0.557272C13.026 0.307224 12.6869 0.166748 12.3333 0.166748Z" fill="white"/>
              </svg>
              admin@divinetechsolutions.in
            </div>
            <div>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C4.54184 0.00172024 3.14389 0.581735 2.11282 1.61281C1.08174 2.64389 0.501724 4.04184 0.500003 5.5C0.498663 6.69155 0.887857 7.8507 1.608 8.8C1.608 8.8 1.758 8.9975 1.7825 9.026L6 14L10.2195 9.0235C10.2415 8.997 10.392 8.8 10.392 8.8L10.3925 8.7985C11.1122 7.84954 11.5012 6.69098 11.5 5.5C11.4983 4.04184 10.9183 2.64389 9.88719 1.61281C8.85611 0.581735 7.45817 0.00172024 6 0ZM6 7.5C5.60444 7.5 5.21776 7.3827 4.88886 7.16294C4.55996 6.94318 4.30362 6.63082 4.15224 6.26537C4.00087 5.89991 3.96126 5.49778 4.03843 5.10982C4.1156 4.72186 4.30608 4.36549 4.58579 4.08579C4.86549 3.80608 5.22186 3.6156 5.60982 3.53843C5.99778 3.46126 6.39992 3.50087 6.76537 3.65224C7.13082 3.80362 7.44318 4.05996 7.66294 4.38886C7.88271 4.71776 8 5.10444 8 5.5C7.99934 6.03023 7.78842 6.53855 7.41349 6.91348C7.03856 7.28841 6.53023 7.49934 6 7.5Z" fill="white"/>
              </svg>
              One world, B-611, Nr. Sheetal Park, 150 ft. Ring Road, Rajkot-360001, Gujarat, India
            </div>
          </div>
         </div>
      </div>
      <div className="footer_horizontal_line"></div>
      <div className="footer_icons">
        <div>©2024, all rights reserved</div>
        <div>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="white"/>
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0281 0C12.1531 0.003 12.7241 0.009 13.2171 0.023L13.4111 0.03C13.6351 0.038 13.8561 0.0479999 14.1231 0.0599999C15.1871 0.11 15.9131 0.278 16.5501 0.525C17.2101 0.779 17.7661 1.123 18.3221 1.678C18.8308 2.17773 19.2243 2.78247 19.4751 3.45C19.7221 4.087 19.8901 4.813 19.9401 5.878C19.9521 6.144 19.9621 6.365 19.9701 6.59L19.9761 6.784C19.9911 7.276 19.9971 7.847 19.9991 8.972L20.0001 9.718V11.028C20.0025 11.7574 19.9948 12.4868 19.9771 13.216L19.9711 13.41C19.9631 13.635 19.9531 13.856 19.9411 14.122C19.8911 15.187 19.7211 15.912 19.4751 16.55C19.2243 17.2175 18.8308 17.8223 18.3221 18.322C17.8223 18.8307 17.2176 19.2242 16.5501 19.475C15.9131 19.722 15.1871 19.89 14.1231 19.94L13.4111 19.97L13.2171 19.976C12.7241 19.99 12.1531 19.997 11.0281 19.999L10.2821 20H8.97308C8.24334 20.0026 7.5136 19.9949 6.78408 19.977L6.59008 19.971C6.35269 19.962 6.11535 19.9517 5.87808 19.94C4.81408 19.89 4.08808 19.722 3.45008 19.475C2.78291 19.2241 2.17852 18.8306 1.67908 18.322C1.17003 17.8224 0.776189 17.2176 0.525081 16.55C0.278081 15.913 0.11008 15.187 0.0600805 14.122L0.0300805 13.41L0.0250806 13.216C0.00664665 12.4868 -0.00168758 11.7574 8.05157e-05 11.028V8.972C-0.00268738 8.2426 0.00464673 7.5132 0.0220806 6.784L0.0290806 6.59C0.0370806 6.365 0.0470805 6.144 0.0590805 5.878C0.109081 4.813 0.27708 4.088 0.52408 3.45C0.775775 2.7822 1.1703 2.17744 1.68008 1.678C2.17923 1.16955 2.78327 0.776074 3.45008 0.525C4.08808 0.278 4.81308 0.11 5.87808 0.0599999C6.14408 0.0479999 6.36608 0.038 6.59008 0.03L6.78408 0.0239999C7.51327 0.00623271 8.24268 -0.0014347 8.97208 0.000999928L11.0281 0ZM10.0001 5C8.674 5 7.40223 5.52678 6.46455 6.46447C5.52687 7.40215 5.00008 8.67392 5.00008 10C5.00008 11.3261 5.52687 12.5979 6.46455 13.5355C7.40223 14.4732 8.674 15 10.0001 15C11.3262 15 12.5979 14.4732 13.5356 13.5355C14.4733 12.5979 15.0001 11.3261 15.0001 10C15.0001 8.67392 14.4733 7.40215 13.5356 6.46447C12.5979 5.52678 11.3262 5 10.0001 5ZM10.0001 7C10.394 6.99993 10.7842 7.07747 11.1482 7.22817C11.5122 7.37887 11.8429 7.5998 12.1215 7.87833C12.4002 8.15686 12.6212 8.48754 12.772 8.85149C12.9229 9.21544 13.0005 9.60553 13.0006 9.9995C13.0006 10.3935 12.9231 10.7836 12.7724 11.1476C12.6217 11.5116 12.4008 11.8423 12.1223 12.121C11.8437 12.3996 11.513 12.6206 11.1491 12.7714C10.7851 12.9223 10.395 12.9999 10.0011 13C9.20543 13 8.44237 12.6839 7.87976 12.1213C7.31715 11.5587 7.00108 10.7956 7.00108 10C7.00108 9.20435 7.31715 8.44129 7.87976 7.87868C8.44237 7.31607 9.20543 7 10.0011 7M15.2511 3.5C14.9196 3.5 14.6016 3.6317 14.3672 3.86612C14.1328 4.10054 14.0011 4.41848 14.0011 4.75C14.0011 5.08152 14.1328 5.39946 14.3672 5.63388C14.6016 5.8683 14.9196 6 15.2511 6C15.5826 6 15.9005 5.8683 16.135 5.63388C16.3694 5.39946 16.5011 5.08152 16.5011 4.75C16.5011 4.41848 16.3694 4.10054 16.135 3.86612C15.9005 3.6317 15.5826 3.5 15.2511 3.5Z" fill="white"/>
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.303 0.25H4.697C3.51758 0.25 2.38647 0.718522 1.5525 1.5525C0.718522 2.38647 0.25 3.51758 0.25 4.697V15.303C0.25 16.4824 0.718522 17.6135 1.5525 18.4475C2.38647 19.2815 3.51758 19.75 4.697 19.75H15.303C16.4824 19.75 17.6135 19.2815 18.4475 18.4475C19.2815 17.6135 19.75 16.4824 19.75 15.303V4.697C19.75 3.51758 19.2815 2.38647 18.4475 1.5525C17.6135 0.718522 16.4824 0.25 15.303 0.25ZM6.843 15.992C6.84614 16.0464 6.83811 16.1009 6.81942 16.1521C6.80072 16.2034 6.77176 16.2502 6.7343 16.2898C6.69684 16.3294 6.65167 16.361 6.60158 16.3825C6.55149 16.404 6.49752 16.4151 6.443 16.415H4.663C4.55566 16.4124 4.45362 16.3678 4.37883 16.2907C4.30403 16.2137 4.26244 16.1104 4.263 16.003V8.6C4.26153 8.54655 4.27079 8.49335 4.29023 8.44355C4.30967 8.39374 4.3389 8.34834 4.3762 8.31002C4.41349 8.2717 4.45808 8.24125 4.50734 8.22047C4.5566 8.19968 4.60953 8.18898 4.663 8.189H6.443C6.49647 8.18898 6.5494 8.19968 6.59866 8.22047C6.64792 8.24125 6.69251 8.2717 6.7298 8.31002C6.7671 8.34834 6.79633 8.39374 6.81577 8.44355C6.83521 8.49335 6.84447 8.54655 6.843 8.6V15.992ZM5.52 6.632C5.32729 6.63056 5.13674 6.59117 4.95925 6.51608C4.78176 6.441 4.62079 6.33169 4.48554 6.1944C4.35029 6.05711 4.24341 5.89452 4.171 5.71593C4.09858 5.53733 4.06206 5.34621 4.0635 5.1535C4.06494 4.96079 4.10433 4.77024 4.17942 4.59275C4.2545 4.41526 4.36381 4.25429 4.5011 4.11904C4.63839 3.98379 4.80098 3.87691 4.97957 3.8045C5.15817 3.73208 5.34929 3.69556 5.542 3.697C5.92452 3.70944 6.28703 3.87087 6.55219 4.14686C6.81734 4.42284 6.96415 4.79152 6.96128 5.17423C6.9584 5.55694 6.80609 5.92337 6.53682 6.19535C6.26755 6.46732 5.90266 6.6233 5.52 6.63M16.337 15.98C16.3365 16.081 16.2969 16.178 16.2264 16.2503C16.1558 16.3227 16.06 16.3649 15.959 16.368H14.08C13.9788 16.3649 13.8828 16.3226 13.8123 16.25C13.7418 16.1774 13.7022 16.0802 13.702 15.979V12.555C13.702 12.044 13.858 10.332 12.346 10.332C11.167 10.332 10.934 11.532 10.889 12.066V16.057C10.889 16.1584 10.8496 16.2558 10.779 16.3286C10.7085 16.4014 10.6123 16.4439 10.511 16.447H8.688C8.58474 16.4467 8.4858 16.4055 8.41287 16.3324C8.33995 16.2593 8.299 16.1603 8.299 16.057V8.564C8.30212 8.46266 8.34458 8.36652 8.41739 8.29595C8.49019 8.22539 8.58761 8.18595 8.689 8.186H10.511C10.6124 8.18595 10.7098 8.22539 10.7826 8.29595C10.8554 8.36652 10.8979 8.46266 10.901 8.564V9.209C11.167 8.81962 11.5343 8.51027 11.9633 8.3143C12.3922 8.11834 12.8665 8.0432 13.335 8.097C16.37 8.097 16.359 10.932 16.359 12.544L16.337 15.98Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar