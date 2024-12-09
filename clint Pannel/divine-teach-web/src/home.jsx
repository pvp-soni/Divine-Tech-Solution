import React from "react";
import "./home.css";
import homeIMG from "./himg.png"
import EnquariImag from "./it (1).png"
import solution1 from "./image.png"
import soultion2 from "./image (1).png"
import solution3 from "./image (2).png"


const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
       
        
      </header>
      <body>  
        <div className="contant">
        <div className="contant1">
        <p className="contant-subtitle">Where ideas meet innovation!</p>
        <p className="contant-title">Divine Tech Solutions</p>
        
        <p className="contant-description">
          Your one-stop center for all technology-related solutions<br></br>
          and expert advice.
        </p>
        <button className="explore-button">Explore</button>
        </div>
        <div className="contaant2">
        <img src = {homeIMG} alt="image" className="himg"></img>
        </div>
        </div>

        {/* who we are section */}


        <div className="who-we-are-main">
        <div className="sub1">
        <p className="sub-head">Who we are?</p>
        <p className="main-head">Your Technology Partner</p>
        </div>
          
        <div className="sub2">
        <p className="sub-description">
        Providing comprehensive technology solutions and expert advice for all <br/> 
        your IT needs. Specializing in software applications, mobile apps, <br/>
        website development, and research consultancy       </p>
        </div>
        </div>

        {/* Explore section  */}

        <div className="main-explore">
          <svg width="13" height="271" viewBox="0 0 13 271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L13 5V266L0 271V0Z" fill="#283956"/>
          </svg>
          <div className="explore-main-content">
          <div className="sub1">
          <p className="sub-head">Who we are?</p>
          <p className="main-head" style={{color: '#3EADAE'}}>Your Technology Partner</p>
          </div>
          
          <div className="sub2">
          <p className="sub-description" style={{color: 'black', opacity: '0.6'}}>
          Providing comprehensive technology solutions and expert advice for all <br/> 
          your IT needs. Specializing in software applications, mobile apps, <br/>
          website development, and research consultancy       </p>
          </div>
          </div>
          <svg width="13" height="271" viewBox="0 0 13 271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L0 5V266L13 271V0Z" fill="#283956"/>
          </svg>
        </div>

        {/* cunsaltuncy section */}

        <div className="cunsalt-section">

          <div className="cunsalt-sub-section1">

           <div className="cunsalt-sub-sub-section1">
              <p className="cunsalt-title"> Expert IT Consultancy Services </p>
              <p className="cunsalt-subtitle"> For Students, Client & Firms</p>
            </div>

            <div className="cunsalt-sub-sub-section2">
             
              <svg width="190" height="29" viewBox="0 0 190 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88038 8.75513L1.16933 10.0329L1.01504 10.0647C0.781479 10.1274 0.568558 10.2517 0.398019 10.4249C0.227481 10.5982 0.105436 10.8141 0.0443477 11.0506C-0.0167407 11.2871 -0.0146838 11.5358 0.0503082 11.7713C0.1153 12.0068 0.240899 12.2206 0.414278 12.3909L6.72501 18.6057L5.23676 27.3844L5.21901 27.5363C5.20471 27.7807 5.25487 28.0246 5.36435 28.2429C5.47383 28.4612 5.6387 28.6462 5.84208 28.7789C6.04545 28.9116 6.28002 28.9872 6.52177 28.998C6.76353 29.0088 7.00377 28.9544 7.21791 28.8403L15.0087 24.6962L22.7817 28.8403L22.9183 28.9039C23.1437 28.9937 23.3886 29.0212 23.6279 28.9837C23.8673 28.9461 24.0925 28.8448 24.2804 28.6901C24.4683 28.5355 24.6121 28.333 24.6971 28.1036C24.7822 27.8741 24.8053 27.6259 24.7643 27.3844L23.2746 18.6057L29.5881 12.3895L29.6946 12.2721C29.8467 12.0825 29.9465 11.8556 29.9837 11.6143C30.0209 11.373 29.9942 11.1261 29.9064 10.8987C29.8185 10.6712 29.6727 10.4714 29.4836 10.3196C29.2946 10.1677 29.0692 10.0693 28.8303 10.0343L20.1193 8.75513L16.2252 0.770766C16.1126 0.539433 15.9381 0.344632 15.7217 0.208414C15.5052 0.0721954 15.2554 0 15.0005 0C14.7456 0 14.4958 0.0721954 14.2793 0.208414C14.0629 0.344632 13.8885 0.539433 13.7758 0.770766L9.88038 8.75513Z" fill="white"/>
                <path d="M49.8804 8.75513L41.1693 10.0329L41.015 10.0647C40.7815 10.1274 40.5686 10.2517 40.398 10.4249C40.2275 10.5982 40.1054 10.8141 40.0443 11.0506C39.9833 11.2871 39.9853 11.5358 40.0503 11.7713C40.1153 12.0068 40.2409 12.2206 40.4143 12.3909L46.725 18.6057L45.2368 27.3844L45.219 27.5363C45.2047 27.7807 45.2549 28.0246 45.3644 28.2429C45.4738 28.4612 45.6387 28.6462 45.8421 28.7789C46.0455 28.9116 46.28 28.9872 46.5218 28.998C46.7635 29.0088 47.0038 28.9544 47.2179 28.8403L55.0087 24.6962L62.7817 28.8403L62.9183 28.9039C63.1437 28.9937 63.3886 29.0212 63.6279 28.9837C63.8673 28.9461 64.0925 28.8448 64.2804 28.6901C64.4683 28.5355 64.6121 28.333 64.6971 28.1036C64.7822 27.8741 64.8053 27.6259 64.7643 27.3844L63.2746 18.6057L69.5881 12.3895L69.6946 12.2721C69.8467 12.0825 69.9465 11.8556 69.9837 11.6143C70.0209 11.373 69.9942 11.1261 69.9064 10.8987C69.8185 10.6712 69.6727 10.4714 69.4836 10.3196C69.2946 10.1677 69.0692 10.0693 68.8303 10.0343L60.1193 8.75513L56.2252 0.770766C56.1126 0.539433 55.9381 0.344632 55.7217 0.208414C55.5052 0.0721954 55.2554 0 55.0005 0C54.7456 0 54.4958 0.0721954 54.2793 0.208414C54.0629 0.344632 53.8885 0.539433 53.7758 0.770766L49.8804 8.75513Z" fill="white"/>
                <path d="M89.8804 8.75513L81.1693 10.0329L81.015 10.0647C80.7815 10.1274 80.5686 10.2517 80.398 10.4249C80.2275 10.5982 80.1054 10.8141 80.0443 11.0506C79.9833 11.2871 79.9853 11.5358 80.0503 11.7713C80.1153 12.0068 80.2409 12.2206 80.4143 12.3909L86.725 18.6057L85.2368 27.3844L85.219 27.5363C85.2047 27.7807 85.2549 28.0246 85.3644 28.2429C85.4738 28.4612 85.6387 28.6462 85.8421 28.7789C86.0455 28.9116 86.28 28.9872 86.5218 28.998C86.7635 29.0088 87.0038 28.9544 87.2179 28.8403L95.0087 24.6962L102.782 28.8403L102.918 28.9039C103.144 28.9937 103.389 29.0212 103.628 28.9837C103.867 28.9461 104.092 28.8448 104.28 28.6901C104.468 28.5355 104.612 28.333 104.697 28.1036C104.782 27.8741 104.805 27.6259 104.764 27.3844L103.275 18.6057L109.588 12.3895L109.695 12.2721C109.847 12.0825 109.946 11.8556 109.984 11.6143C110.021 11.373 109.994 11.1261 109.906 10.8987C109.819 10.6712 109.673 10.4714 109.484 10.3196C109.295 10.1677 109.069 10.0693 108.83 10.0343L100.119 8.75513L96.2252 0.770766C96.1126 0.539433 95.9381 0.344632 95.7217 0.208414C95.5052 0.0721954 95.2554 0 95.0005 0C94.7456 0 94.4958 0.0721954 94.2793 0.208414C94.0629 0.344632 93.8885 0.539433 93.7758 0.770766L89.8804 8.75513Z" fill="white"/>
                <path d="M129.88 8.75513L121.169 10.0329L121.015 10.0647C120.781 10.1274 120.569 10.2517 120.398 10.4249C120.227 10.5982 120.105 10.8141 120.044 11.0506C119.983 11.2871 119.985 11.5358 120.05 11.7713C120.115 12.0068 120.241 12.2206 120.414 12.3909L126.725 18.6057L125.237 27.3844L125.219 27.5363C125.205 27.7807 125.255 28.0246 125.364 28.2429C125.474 28.4612 125.639 28.6462 125.842 28.7789C126.045 28.9116 126.28 28.9872 126.522 28.998C126.764 29.0088 127.004 28.9544 127.218 28.8403L135.009 24.6962L142.782 28.8403L142.918 28.9039C143.144 28.9937 143.389 29.0212 143.628 28.9837C143.867 28.9461 144.092 28.8448 144.28 28.6901C144.468 28.5355 144.612 28.333 144.697 28.1036C144.782 27.8741 144.805 27.6259 144.764 27.3844L143.275 18.6057L149.588 12.3895L149.695 12.2721C149.847 12.0825 149.946 11.8556 149.984 11.6143C150.021 11.373 149.994 11.1261 149.906 10.8987C149.819 10.6712 149.673 10.4714 149.484 10.3196C149.295 10.1677 149.069 10.0693 148.83 10.0343L140.119 8.75513L136.225 0.770766C136.113 0.539433 135.938 0.344632 135.722 0.208414C135.505 0.0721954 135.255 0 135.001 0C134.746 0 134.496 0.0721954 134.279 0.208414C134.063 0.344632 133.888 0.539433 133.776 0.770766L129.88 8.75513Z" fill="white"/>
                <path d="M169.88 8.75513L161.169 10.0329L161.015 10.0647C160.781 10.1274 160.569 10.2517 160.398 10.4249C160.227 10.5982 160.105 10.8141 160.044 11.0506C159.983 11.2871 159.985 11.5358 160.05 11.7713C160.115 12.0068 160.241 12.2206 160.414 12.3909L166.725 18.6057L165.237 27.3844L165.219 27.5363C165.205 27.7807 165.255 28.0246 165.364 28.2429C165.474 28.4612 165.639 28.6462 165.842 28.7789C166.045 28.9116 166.28 28.9872 166.522 28.998C166.764 29.0088 167.004 28.9544 167.218 28.8403L175.009 24.6962L182.782 28.8403L182.918 28.9039C183.144 28.9937 183.389 29.0212 183.628 28.9837C183.867 28.9461 184.092 28.8448 184.28 28.6901C184.468 28.5355 184.612 28.333 184.697 28.1036C184.782 27.8741 184.805 27.6259 184.764 27.3844L183.275 18.6057L189.588 12.3895L189.695 12.2721C189.847 12.0825 189.946 11.8556 189.984 11.6143C190.021 11.373 189.994 11.1261 189.906 10.8987C189.819 10.6712 189.673 10.4714 189.484 10.3196C189.295 10.1677 189.069 10.0693 188.83 10.0343L180.119 8.75513L176.225 0.770766C176.113 0.539433 175.938 0.344632 175.722 0.208414C175.505 0.0721954 175.255 0 175.001 0C174.746 0 174.496 0.0721954 174.279 0.208414C174.063 0.344632 173.888 0.539433 173.776 0.770766L169.88 8.75513Z" fill="white"/>
              </svg>
              <p className="cunsalt-subtitle" >Top rated by 100+ clients</p>
            </div>
            <button className="Enquire-button">Enquire Now</button>

          </div>
            <img src={EnquariImag} alt="" />
      
      </div>

      {/* solution centere */}
      <div className="solution">
        <div className="solution-section1">
          <div className="solution-title">Technology Solution Center</div>
          <div className="solution-subtitle">One-stop center for all technology-related solutions, offering IT support, software applications, mobile apps, website design & development</div>

        </div>
        
        
        <div className="solution-section2">
          <div className="solution-sub-section2">
            <img src={solution1} alt="" />
            <div className="solutionn-sub-sub-section2">
              <div className="solutionn-sub-sub-section2-title">Expert IT Guidance</div>
              <div className="solutionn-sub-sub-section2-sub-title">Get expert advice on IT choices and software solutions from our experienced team</div>
            </div>
          </div>
          <div className="solution-sub-section2">
            <img src={solution1} alt="" />
            <div className="solutionn-sub-sub-section2">
              <div className="solutionn-sub-sub-section2-title">Expert IT Guidance</div>
              <div className="solutionn-sub-sub-section2-sub-title">Get expert advice on IT choices and software solutions from our experienced team</div>
            </div>
          </div>
          <div className="solution-sub-section2">
            <img src={solution1} alt="" />
            <div className="solutionn-sub-sub-section2">
              <div className="solutionn-sub-sub-section2-title">Expert IT Guidance</div>
              <div className="solutionn-sub-sub-section2-sub-title">Get expert advice on IT choices and software solutions from our experienced team</div>
            </div>
          </div>
          <div className="solution-sub-section2"></div>
          <div className="solution-sub-section2"></div>
        </div>

      </div>

      {/* contact us  */}
      <div className="contact">
          <div className="contact-section-1">
            <div className="contact-sub-section-1-1">Contact US</div>
            <div className="contact-sub-section-1-2">For all your technology-related solutions, training needs, and expert advice, contact us today!</div>
          </div>
          <div className="contact-section-2">
            <div className="contact-sub-section-2-1">
              <div className="contact-sub-section-2-1-1">
                <label>Contact</label>
                <input type="text" placeholder="Enter your first name "/>
              </div>
              <div className="contact-sub-section-2-1-2">
                <label>Email*</label>
                <input type="text" placeholder="Enter your Email "/>
            </div>
            </div>
              <div className="contact-sub-section-2-2">
                <label> Message* </label>
                <textarea type="text" placeholder="Type your Message here"/>
              </div>
          </div>
         <button className="send-message"> send Message </button>
      </div>
      

      </body>
    </div>
  );
};

export default Home;

