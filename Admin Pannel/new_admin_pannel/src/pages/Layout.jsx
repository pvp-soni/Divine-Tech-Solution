import React from 'react'
import './styles.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    const sidebarItems = [
        {
            path: '/',
            name: "Dashboard",
            icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' d="M1 10.5H7C7.26522 10.5 7.51957 10.3946 7.70711 10.2071C7.89464 10.0196 8 9.76522 8 9.5V1.5C8 1.23478 7.89464 0.98043 7.70711 0.792893C7.51957 0.605357 7.26522 0.5 7 0.5H1C0.734784 0.5 0.48043 0.605357 0.292893 0.792893C0.105357 0.98043 0 1.23478 0 1.5V9.5C0 9.76522 0.105357 10.0196 0.292893 10.2071C0.48043 10.3946 0.734784 10.5 1 10.5ZM0 17.5C0 17.7652 0.105357 18.0196 0.292893 18.2071C0.48043 18.3946 0.734784 18.5 1 18.5H7C7.26522 18.5 7.51957 18.3946 7.70711 18.2071C7.89464 18.0196 8 17.7652 8 17.5V13.5C8 13.2348 7.89464 12.9804 7.70711 12.7929C7.51957 12.6054 7.26522 12.5 7 12.5H1C0.734784 12.5 0.48043 12.6054 0.292893 12.7929C0.105357 12.9804 0 13.2348 0 13.5V17.5ZM10 17.5C10 17.7652 10.1054 18.0196 10.2929 18.2071C10.4804 18.3946 10.7348 18.5 11 18.5H17C17.2652 18.5 17.5196 18.3946 17.7071 18.2071C17.8946 18.0196 18 17.7652 18 17.5V10.5C18 10.2348 17.8946 9.98043 17.7071 9.79289C17.5196 9.60536 17.2652 9.5 17 9.5H11C10.7348 9.5 10.4804 9.60536 10.2929 9.79289C10.1054 9.98043 10 10.2348 10 10.5V17.5ZM11 7.5H17C17.2652 7.5 17.5196 7.39464 17.7071 7.20711C17.8946 7.01957 18 6.76522 18 6.5V1.5C18 1.23478 17.8946 0.98043 17.7071 0.792893C17.5196 0.605357 17.2652 0.5 17 0.5H11C10.7348 0.5 10.4804 0.605357 10.2929 0.792893C10.1054 0.98043 10 1.23478 10 1.5V6.5C10 6.76522 10.1054 7.01957 10.2929 7.20711C10.4804 7.39464 10.7348 7.5 11 7.5Z" fill="#717171"/>
            </svg>
        },
        {
            path: '/courses',
            name: "Courses",
            icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' d="M16.2439 13.8902C17.2098 13.8902 18 13.1 18 12.1341V2.47561C18 1.50976 17.2098 0.719513 16.2439 0.719513H7.02439C7.2878 1.24634 7.46341 1.86098 7.46341 2.47561H16.2439V12.1341H8.34146V13.8902M11.8537 5.10976V6.86585H6.58537V18.2805H4.82927V13.0122H3.07317V18.2805H1.31707V11.2561H0V6.86585C0 5.9 0.790244 5.10976 1.7561 5.10976H11.8537ZM5.70732 2.47561C5.70732 3.44146 4.91707 4.23171 3.95122 4.23171C2.98537 4.23171 2.19512 3.44146 2.19512 2.47561C2.19512 1.50976 2.98537 0.719513 3.95122 0.719513C4.91707 0.719513 5.70732 1.50976 5.70732 2.47561ZM13.6098 4.23171H15.3659V11.2561H13.6098V4.23171ZM10.9756 7.7439H12.7317V11.2561H10.9756V7.7439ZM8.34146 7.7439H10.0976V11.2561H8.34146V7.7439Z" fill="#008CFF"/>
            </svg>
        },
        {
            path: '/services',
            name: "Services",
            icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' d="M6.12 8.555L8.055 6.5975L6.795 5.315L5.805 6.305L4.545 5.045L5.5125 4.055L4.5 3.0425L2.5425 5L6.12 8.555ZM13.5 15.9575L15.4575 14L14.445 12.9875L13.455 13.955L12.195 12.695L13.1625 11.705L11.88 10.445L9.945 12.38L13.5 15.9575ZM12.8025 4.4825L14.0625 5.7425L15.3225 4.4825L14.04 3.2L12.8025 4.4825ZM4.725 17.6H0.9V13.775L4.8375 9.8375L0 5L4.5 0.5L9.36 5.36L12.7575 1.94C12.9375 1.76 13.14 1.625 13.365 1.535C13.59 1.445 13.8225 1.4 14.0625 1.4C14.3025 1.4 14.535 1.445 14.76 1.535C14.985 1.625 15.1875 1.76 15.3675 1.94L16.56 3.155C16.74 3.335 16.875 3.5375 16.965 3.7625C17.055 3.9875 17.1 4.22 17.1 4.46C17.1 4.7 17.055 4.9289 16.965 5.1467C16.875 5.3645 16.74 5.5631 16.56 5.7425L13.1625 9.1625L18 14L13.5 18.5L8.6625 13.6625L4.725 17.6Z" fill="#717171"/>
            </svg>
        },
        {
            path: '/consultancy',
            name: "Consultancy",
            icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' fill-rule="evenodd" clip-rule="evenodd" d="M8.98329 2.42891C8.44581 2.41921 7.9117 2.51558 7.41152 2.71253C6.91133 2.90948 6.4549 3.20313 6.06833 3.57668C5.68177 3.95023 5.37266 4.39634 5.1587 4.88949C4.94474 5.38264 4.83013 5.91313 4.82143 6.45063V12.0718C4.82143 12.4128 4.68597 12.7398 4.44485 12.9809C4.20373 13.222 3.87671 13.3575 3.53571 13.3575H1.92857C1.41708 13.3575 0.926543 13.1543 0.564865 12.7926C0.203188 12.4309 0 11.9404 0 11.4289V8.85748C0 8.34599 0.203188 7.85545 0.564865 7.49378C0.926543 7.1321 1.41708 6.92891 1.92857 6.92891H2.89286V6.42748C2.90459 5.63727 3.07187 4.85712 3.38515 4.13157C3.69843 3.40601 4.15156 2.74928 4.71868 2.19888C5.2858 1.64848 5.95579 1.21518 6.69039 0.923744C7.42498 0.632306 8.20979 0.488432 9 0.50034C9.79021 0.488432 10.575 0.632306 11.3096 0.923744C12.0442 1.21518 12.7142 1.64848 13.2813 2.19888C13.8484 2.74928 14.3016 3.40601 14.6149 4.13157C14.9281 4.85712 15.0954 5.63727 15.1071 6.42748V6.92891H16.0714C16.5829 6.92891 17.0735 7.1321 17.4351 7.49378C17.7968 7.85545 18 8.34599 18 8.85748V11.4289C18 11.9404 17.7968 12.4309 17.4351 12.7926C17.0735 13.1543 16.5829 13.3575 16.0714 13.3575H15.1071V14.0003C15.1073 14.8692 14.7876 15.7076 14.2089 16.3558C13.6303 17.0039 12.8333 17.4163 11.97 17.5142C11.8023 17.8135 11.5579 18.0627 11.2618 18.2361C10.9657 18.4094 10.6288 18.5006 10.2857 18.5003H8.35714C7.84565 18.5003 7.35511 18.2972 6.99344 17.9355C6.63176 17.5738 6.42857 17.0833 6.42857 16.5718C6.42857 16.0603 6.63176 15.5697 6.99344 15.2081C7.35511 14.8464 7.84565 14.6432 8.35714 14.6432H10.2857C10.9826 14.6432 11.5933 15.0122 11.9314 15.5663C12.2858 15.4849 12.6021 15.2857 12.8286 15.0012C13.0551 14.7168 13.1785 14.364 13.1786 14.0003V6.44934C13.1698 5.90908 13.0539 5.37593 12.8378 4.88071C12.6217 4.38548 12.3095 3.93801 11.9194 3.56416C11.5293 3.1903 11.069 2.89748 10.565 2.70262C10.061 2.50777 9.52343 2.41474 8.98329 2.42891Z" fill="#717171"/>
        </svg>
        },
        {
            path: '/feedback',
            name: "Feedback",
            icon: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' d="M3.86969 15.9788L1.64462 18.2038C1.33827 18.5102 0.987418 18.5789 0.592064 18.4099C0.196711 18.2409 -0.000643373 17.9384 1.57561e-06 17.5025V2.43485C1.57561e-06 1.90276 0.189616 1.44743 0.568846 1.06884C0.948076 0.69026 1.40341 0.500645 1.93485 0.5H17.4136C17.9457 0.5 18.4013 0.689615 18.7806 1.06884C19.1598 1.44807 19.3491 1.90341 19.3485 2.43485V14.0439C19.3485 14.576 19.1592 15.0317 18.7806 15.4109C18.402 15.7901 17.9463 15.9794 17.4136 15.9788H3.86969ZM9.67423 13.0765C9.94833 13.0765 10.1783 12.9836 10.364 12.7979C10.5497 12.6121 10.6423 12.3825 10.6417 12.1091C10.641 11.8356 10.5481 11.606 10.363 11.4203C10.1779 11.2345 9.94833 11.1416 9.67423 11.1416C9.40012 11.1416 9.17052 11.2345 8.98542 11.4203C8.80032 11.606 8.70745 11.8356 8.70681 12.1091C8.70616 12.3825 8.79903 12.6125 8.98542 12.7988C9.17181 12.9852 9.40141 13.0778 9.67423 13.0765ZM9.67423 9.2068C9.94833 9.2068 10.1783 9.11393 10.364 8.92819C10.5497 8.74244 10.6423 8.51284 10.6417 8.23938V4.36969C10.6417 4.09559 10.5488 3.86599 10.363 3.68089C10.1773 3.49579 9.94769 3.40291 9.67423 3.40227C9.40077 3.40162 9.17117 3.4945 8.98542 3.68089C8.79968 3.86728 8.70681 4.09688 8.70681 4.36969V8.23938C8.70681 8.51348 8.79968 8.74341 8.98542 8.92915C9.17117 9.1149 9.40077 9.20745 9.67423 9.2068Z" fill="#717171"/>
            </svg>            
        },
        {
            path: '/faqs',
            name: "FAQs",
            icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' d="M9 0.5C7.82308 0.5 6.92308 1.4 6.92308 2.57692V6.73077C6.92308 7.90769 7.82308 8.80769 9 8.80769H13.1538L15.9231 11.5769V8.80769C17.1 8.80769 18 7.90769 18 6.73077V2.57692C18 1.4 17.1 0.5 15.9231 0.5H9ZM11.8994 2.57692H13.0888L14.2574 6.73077H13.2189L12.9372 5.69231H11.8987L11.6398 6.73077H10.7308L11.8994 2.57692ZM12.4615 3.26923C12.3923 3.54615 12.3148 3.884 12.2448 4.09169L12.051 5H12.8728L12.6775 4.091C12.5398 3.884 12.4615 3.54615 12.4615 3.26923ZM2.07692 7.42308C0.9 7.42308 0 8.32308 0 9.5V13.6538C0 14.8308 0.9 15.7308 2.07692 15.7308V18.5L4.84615 15.7308H9C10.1769 15.7308 11.0769 14.8308 11.0769 13.6538V9.5H9C7.68462 9.5 6.642 8.6 6.29585 7.42308H2.07692ZM5.25738 9.43492C6.43431 9.43492 6.98815 10.4042 6.98815 11.5118C6.98815 12.4811 6.65515 13.0958 6.10131 13.3728C6.37823 13.5112 6.70638 13.5846 7.05254 13.6538L6.79362 14.3462C6.309 14.2077 5.80638 13.9917 5.32177 13.7833C5.25254 13.7141 5.13138 13.7189 5.06215 13.7189C4.23138 13.6497 3.46154 12.9615 3.46154 11.5769C3.46154 10.4 4.14969 9.43492 5.25738 9.43492ZM5.25738 10.1923C4.70354 10.1923 4.43492 10.8154 4.43492 11.5769C4.43492 12.4077 4.70354 12.9615 5.25738 12.9615C5.81123 12.9615 6.10062 12.3385 6.10062 11.5769C6.10062 10.8154 5.81123 10.1923 5.25738 10.1923Z" fill="#717171"/>
            </svg>
        },
        {
            path: '/about-us',
            name: "About Us",
            icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg_color' fill-rule="evenodd" clip-rule="evenodd" d="M8.99998 0.5C13.9706 0.5 18 4.52941 18 9.49998C18 14.4705 13.9706 18.5 8.99998 18.5C4.02945 18.5 0 14.4705 0 9.49998C0 4.52941 4.02945 0.5 8.99998 0.5ZM9.90195 8.59999H8.10198V14H9.90195V8.59999ZM9.00913 4.77498C8.35295 4.77498 7.87695 5.24833 7.87695 5.88751C7.87695 6.55255 8.34042 7.02501 9.00913 7.02501C9.65186 7.02501 10.127 6.55251 10.127 5.9C10.127 5.24837 9.65186 4.77498 9.00913 4.77498Z" fill="#717171"/>
            </svg>
        }
    ];
    
  return (
    <>
    <div className="layout_main_body">
    <aside>
        <div className='sidebar'>
            <div className='logo_in_sidebar'>
                <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=148,fit=crop,q=95/Y4LJ41ZXZJuQK2E8/divine-AoPvExJeBliMb25W.png' height={50} width={50}></img>
                Divine Tech Solution
            </div>
            
            <div id='sidebar_links'>
            {
                sidebarItems.map((item, index)=>(
                    <NavLink exact to={item.path} key={index} className={({isActive})=> isActive ? 'sidebar_link_card-selected' : 'sidebar_link_card'} id='text-decoration'>
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))
            }
            </div>
        </div>
        <div className='main-navbar'>
            {
                sidebarItems.map((item, index)=>{
                    if(location.pathname===item.path){
                        return item.name.toUpperCase();
                    }
                })
            }
            <div id='user_notify_icons_div'>
                <div>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.49994 0.833328C5.98378 0.833328 4.52973 1.43562 3.45765 2.5077C2.38556 3.57978 1.78327 5.03384 1.78327 6.54999V9.43119C1.78339 9.55788 1.75403 9.68286 1.69752 9.79625L0.295306 12.5999C0.226809 12.7368 0.194465 12.889 0.201347 13.042C0.208229 13.195 0.254107 13.3437 0.334624 13.474C0.415142 13.6042 0.527625 13.7118 0.66139 13.7863C0.795156 13.8609 0.945763 13.9 1.09891 13.9H13.901C14.0541 13.9 14.2047 13.8609 14.3385 13.7863C14.4723 13.7118 14.5847 13.6042 14.6653 13.474C14.7458 13.3437 14.7917 13.195 14.7985 13.042C14.8054 12.889 14.7731 12.7368 14.7046 12.5999L13.3032 9.79625C13.2464 9.68293 13.2167 9.55795 13.2166 9.43119V6.54999C13.2166 5.03384 12.6143 3.57978 11.5422 2.5077C10.4701 1.43562 9.01609 0.833328 7.49994 0.833328ZM7.49994 16.35C6.99307 16.3503 6.4986 16.1933 6.08467 15.9008C5.67074 15.6083 5.35773 15.1945 5.18877 14.7167H9.81111C9.64215 15.1945 9.32914 15.6083 8.91521 15.9008C8.50128 16.1933 8.0068 16.3503 7.49994 16.35Z" fill="white"/>
                </svg>
                </div>
                <div>
                <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.199951 17.4H12.8V14.4C12.7983 13.2866 12.3331 12.2192 11.5065 11.4319C10.6798 10.6446 9.55904 10.2016 8.38995 10.2H4.60995C3.44086 10.2016 2.32013 10.6446 1.49345 11.4319C0.666776 12.2192 0.201618 13.2866 0.199951 14.4V17.4ZM2.08995 4.80001C2.08995 5.63069 2.34859 6.44271 2.83317 7.1334C3.31775 7.82409 4.00649 8.36241 4.81232 8.6803C5.61814 8.99819 6.50484 9.08136 7.3603 8.9193C8.21576 8.75725 9.00154 8.35723 9.61829 7.76985C10.235 7.18247 10.6551 6.43411 10.8252 5.61939C10.9954 4.80467 10.908 3.96019 10.5743 3.19274C10.2405 2.42529 9.67524 1.76934 8.95002 1.30783C8.2248 0.846332 7.37217 0.600006 6.49995 0.600006C5.33035 0.600006 4.20865 1.0425 3.38161 1.83016C2.55457 2.61781 2.08995 3.6861 2.08995 4.80001Z" fill="white"/>
                </svg>
                </div>
            </div>
        </div>
    </aside>
    
    <main>
        
        
        <Outlet></Outlet>
    </main>
    </div>
    </>
  )
}

export default Layout