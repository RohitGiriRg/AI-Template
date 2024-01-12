import React, { useEffect, useRef, useState } from 'react'


import './home.css'
import MyMap from './MapContainer'
import Clock from './Clock'


const Home = (props) => {
 const [scrollDirection, setScrollDirection] = useState(0);

   useEffect(() => {
    // Function to handle scroll events
    const handleScroll = (event) => {
      // Determine scroll direction based on deltaY property
      const direction = event.deltaY > 0 ? 1 : -1;

      // Update the state with the increasing or decreasing value
      setScrollDirection((prevDirection) => prevDirection + direction);
    };

    // Add event listener for mouse wheel scroll
    window.addEventListener("wheel", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); 

  
  
 

  const handleWheel = (e) => {
    // Adjust the scroll position based on the mouse wheel delta
    setScrollLeft((prevScrollLeft) => prevScrollLeft + e.deltaY);

    // Prevent the default vertical scroll behavior
    e.preventDefault();
  };
  
  return (
    <>    
      

     <Clock />
     <div className="horizontal-scroll-container"> 
    <div className="content">
      <div className="home-container">
   
    
      <div className="home-container01" >
        <div className="home-container02">
          <div className="home-container03">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <span className="home-text">New flow</span>
          </div>
          <div className="home-container04 onhover">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M1024 405.714v453.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-453.714c17.143 18.857 36.571 35.429 57.714 49.714 94.857 64.571 190.857 129.143 284 197.143 48 35.429 107.429 78.857 169.714 78.857h1.143c62.286 0 121.714-43.429 169.714-78.857 93.143-67.429 189.143-132.571 284.571-197.143 20.571-14.286 40-30.857 57.143-49.714zM1024 237.714c0 64-47.429 121.714-97.714 156.571-89.143 61.714-178.857 123.429-267.429 185.714-37.143 25.714-100 78.286-146.286 78.286h-1.143c-46.286 0-109.143-52.571-146.286-78.286-88.571-62.286-178.286-124-266.857-185.714-40.571-27.429-98.286-92-98.286-144 0-56 30.286-104 91.429-104h841.143c49.714 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <span className="home-text001">
              <span className="home-text002">Coffee?</span>
              <span> </span>
              <span className="home-text004">
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text005 ">Marisa Lu</span>
            </span>
          </div>
          <div className="home-container05 onhover">
            <svg viewBox="0 0 1024 1024" className="home-icon04">
              <path d="M1024 405.714v453.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-453.714c17.143 18.857 36.571 35.429 57.714 49.714 94.857 64.571 190.857 129.143 284 197.143 48 35.429 107.429 78.857 169.714 78.857h1.143c62.286 0 121.714-43.429 169.714-78.857 93.143-67.429 189.143-132.571 284.571-197.143 20.571-14.286 40-30.857 57.143-49.714zM1024 237.714c0 64-47.429 121.714-97.714 156.571-89.143 61.714-178.857 123.429-267.429 185.714-37.143 25.714-100 78.286-146.286 78.286h-1.143c-46.286 0-109.143-52.571-146.286-78.286-88.571-62.286-178.286-124-266.857-185.714-40.571-27.429-98.286-92-98.286-144 0-56 30.286-104 91.429-104h841.143c49.714 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <span className="home-text006">
              <span className="home-text007">Feedback</span>
              <span> </span>
              <span className="home-text009">· Lindsey Weiss</span>
            </span>
          </div>
          <div className="home-container06 onhover">
            <svg viewBox="0 0 1024 1024" className="home-icon06">
              <path d="M1024 405.714v453.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-453.714c17.143 18.857 36.571 35.429 57.714 49.714 94.857 64.571 190.857 129.143 284 197.143 48 35.429 107.429 78.857 169.714 78.857h1.143c62.286 0 121.714-43.429 169.714-78.857 93.143-67.429 189.143-132.571 284.571-197.143 20.571-14.286 40-30.857 57.143-49.714zM1024 237.714c0 64-47.429 121.714-97.714 156.571-89.143 61.714-178.857 123.429-267.429 185.714-37.143 25.714-100 78.286-146.286 78.286h-1.143c-46.286 0-109.143-52.571-146.286-78.286-88.571-62.286-178.286-124-266.857-185.714-40.571-27.429-98.286-92-98.286-144 0-56 30.286-104 91.429-104h841.143c49.714 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <span className="home-text010">
              <span className="home-text011">Post-grad plans</span>
              <span> </span>
              <span className="home-text013">· Evelyn Ma</span>
            </span>
          </div>
          <div className="home-container07 onhover">
            <svg viewBox="0 0 1024 1024" className="home-icon08">
              <path d="M1024 405.714v453.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-453.714c17.143 18.857 36.571 35.429 57.714 49.714 94.857 64.571 190.857 129.143 284 197.143 48 35.429 107.429 78.857 169.714 78.857h1.143c62.286 0 121.714-43.429 169.714-78.857 93.143-67.429 189.143-132.571 284.571-197.143 20.571-14.286 40-30.857 57.143-49.714zM1024 237.714c0 64-47.429 121.714-97.714 156.571-89.143 61.714-178.857 123.429-267.429 185.714-37.143 25.714-100 78.286-146.286 78.286h-1.143c-46.286 0-109.143-52.571-146.286-78.286-88.571-62.286-178.286-124-266.857-185.714-40.571-27.429-98.286-92-98.286-144 0-56 30.286-104 91.429-104h841.143c49.714 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <span className="home-text014">
              <span className="home-text015">Launch Plan</span>
              <span> </span>
              <span className="home-text017">· Dennis Jin</span>
            </span>
          </div>
          <div className="home-container08 onhover">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
            </svg>
            <span className="home-text018">Victoria Wang</span>
          </div>
          <div className="home-container09 onhover">
            <svg viewBox="0 0 1024 1024" className="home-icon12">
              <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
            </svg>
            <span className="home-text019">Advait Kalakkad</span>
          </div>
          <div className="home-container10 onhover">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="home-text020">Danny Trinh</span>
          </div>
        </div>
      </div>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M1024 405.714v453.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-453.714c17.143 18.857 36.571 35.429 57.714 49.714 94.857 64.571 190.857 129.143 284 197.143 48 35.429 107.429 78.857 169.714 78.857h1.143c62.286 0 121.714-43.429 169.714-78.857 93.143-67.429 189.143-132.571 284.571-197.143 20.571-14.286 40-30.857 57.143-49.714zM1024 237.714c0 64-47.429 121.714-97.714 156.571-89.143 61.714-178.857 123.429-267.429 185.714-37.143 25.714-100 78.286-146.286 78.286h-1.143c-46.286 0-109.143-52.571-146.286-78.286-88.571-62.286-178.286-124-266.857-185.714-40.571-27.429-98.286-92-98.286-144 0-56 30.286-104 91.429-104h841.143c49.714 0 91.429 41.143 91.429 91.429z"></path>
                </svg>
                <span className="home-text021">
                  <span className="home-text022">Coffee?</span>
                  <span> </span>
                  <span className="home-text024">· Mail from </span>
                  <span className="home-text025">Marisa Lu</span>
                </span>
              </div>
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
              </svg>
            </div>
          </div>
          <div className="home-container16">
            <div className="home-container17">
              <div className="home-container18">
                <span className="home-text026">Marisa Lu</span>
                <span className="home-text027">Just Now</span>
              </div>
              <h1 className="home-text028">Coffee?</h1>
              <span className="home-text029">
                <span>Hey Jason,</span>
                <br></br>
                <br></br>
                <br></br>
                <span>
                  Was wondering if you&apos;d be interested in meeting my team
                  at 
                </span>
                <span>
                  Philz Coffee at 11 AM today. No pressure if you can&apos;t
                  make it,
                </span>
                <span> although I think you guys would really get along!</span>
                <br></br>
                <br></br>
                <br></br>
                <span>Marisa</span>
                <br></br>
              </span>
              <div className="home-separator"></div>
              <div className="home-container19">
                <button type="button" className="home-button button">
                  Reply
                </button>
                <button type="button" className="home-button1 button">
                  <span className="home-text042">
                    <span>Forward</span>
                    <br></br>
                  </span>
                </button>
                <button type="button" className="home-button2 button">
                  <span className="home-text045">
                    <span>Delete</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="home-container20">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M597.333 426.667v170.667h-170.667v-170.667zM768 170.667c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003h-85.333v-85.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM597.333 341.333h-170.667v-85.333c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005h85.333v170.667h-85.333c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-85.333h170.667v85.333c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005h-85.333v-170.667h85.333c47.104 0 89.856-19.157 120.661-50.005s50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661zM341.333 341.333h-85.333c-23.595 0-44.843-9.515-60.331-25.003s-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM341.333 682.667v85.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003zM682.667 682.667h85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331z"></path>
                </svg>
                <span className="home-text048">More actions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container21">
          <div className="home-container22">
            <div className="home-container23">
              <span className="home-text049">See my availability: today</span>
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
              </svg>
            </div>
          </div>
          <div className="home-container24">
            <div className="home-container25">
              <h1 className="home-text050">
                <span className="home-text051">Available until 1 PM</span>
                <br className="home-text052"></br>
              </h1>
              <span className="home-text053">
                <span>Would you like to create an event for</span>
                <br></br>
                <span>Coffee with Marisa at 11 AM?</span>
                <br></br>
              </span>
              <div className="home-container26">
                <div className="home-container27">
                  <span className="home-text058">9:41 AM</span>
                  <span className="home-text059">11 AM</span>
                  <span className="home-text060">1 PM</span>
                  <span className="home-text061">3 PM</span>
                </div>
                <div className="home-container28">
                  <div className="home-container29">
                    <div className="home-separator1"></div>
                    <div className="home-container30">
                      <span className="home-text062">Coffee with Marisa</span>
                      <span className="home-text063">Philz Coffee</span>
                    </div>
                  </div>
                  <div className="home-container31">
                    <span className="home-text064">
                      Meeting with Danny Trinh
                    </span>
                    <span className="home-text065">Mars Land</span>
                  </div>
                </div>
              </div>
              <div className="home-separator2"></div>
              <div className="home-container32">
                <div className="home-container33">
                  <button type="button" className="home-button3 button">
                    <span>
                      <span>Create Event</span>
                      <br></br>
                    </span>
                  </button>
                  <button type="button" className="home-button4 button">
                    <span className="home-text069">Edit Event</span>
                  </button>
                  <button type="button" className="home-button5 button">
                    <span className="home-text070">
                      <span>Full Calendar</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <span className="home-text073">
                  <span>Dismiss</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container34">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M597.333 426.667v170.667h-170.667v-170.667zM768 170.667c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003h-85.333v-85.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM597.333 341.333h-170.667v-85.333c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005h85.333v170.667h-85.333c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-85.333h170.667v85.333c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005h-85.333v-170.667h85.333c47.104 0 89.856-19.157 120.661-50.005s50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661zM341.333 341.333h-85.333c-23.595 0-44.843-9.515-60.331-25.003s-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM341.333 682.667v85.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003zM682.667 682.667h85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331z"></path>
                </svg>
                <span className="home-text076">More actions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container35">
          <div className="home-container36">
            <div className="home-container37">
              <div className="home-container38">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                </svg>
                <span className="home-text077">
                  <span className="home-text078">Philz Coffee</span>
                  <span> </span>
                  <span className="home-text080">· Location</span>
                </span>
              </div>
              <svg viewBox="0 0 1024 1024" className="home-icon28">
                <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
              </svg>
            </div>
          </div>
          <div className="home-container39">
            <MyMap />
          </div>
          <div className="home-container40">
            <div className="home-container41">
              <h1 className="home-text081">Philz Coffee</h1>
              <span className="home-text082">
                <span>Custom-blended java in a casual setting.</span>
                <br></br>
              </span>
              <span className="home-text085">
                <span>20686 Stevens Creek Bivd</span>
                <br></br>
                <span>Cupertino, CA 95014</span>
                <br></br>
              </span>
              <div className="home-separator3"></div>
              <div className="home-container42">
                <button type="button" className="home-button6 button">
                  <svg viewBox="0 0 1024 1024" className="home-icon30">
                    <path d="M442.368 815.019c14.891 44.757 43.136 46.336 63.061 3.669l226.517-485.333c19.925-42.752 1.451-61.184-41.259-41.259l-485.376 226.475c-42.709 19.925-41.088 48.171 3.627 63.104l175.061 58.325 58.368 175.019z"></path>
                  </svg>
                  <span className="home-text090">
                    <span className="home-text091">Get Directions</span>
                    <span className="home-text093">Requires your location</span>
                    <br className="home-text094"></br>
                  </span>
                </button>
                <button type="button" className="home-button7 button">
                  <span className="home-text095">
                    <span>See details</span>
                    <br></br>
                  </span>
                </button>
                <button type="button" className="home-button8 button">
                  <span className="home-text098">Find more cafes nearby</span>
                </button>
              </div>
              <div className="home-container43">
                <svg viewBox="0 0 1024 1024" className="home-icon32">
                  <path d="M597.333 426.667v170.667h-170.667v-170.667zM768 170.667c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003h-85.333v-85.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM597.333 341.333h-170.667v-85.333c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005h85.333v170.667h-85.333c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-85.333h170.667v85.333c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005h-85.333v-170.667h85.333c47.104 0 89.856-19.157 120.661-50.005s50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661zM341.333 341.333h-85.333c-23.595 0-44.843-9.515-60.331-25.003s-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM341.333 682.667v85.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003zM682.667 682.667h85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331z"></path>
                </svg>
                <span className="home-text099">More actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home
