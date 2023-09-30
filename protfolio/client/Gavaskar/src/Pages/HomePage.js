import React,{useEffect,useState} from  'react';
import styled from 'styled-components';
export default function HomePage(){

    const [hi,setHi] = useState(false);
    const jobTitles = ['Full Stack Developer', 'Freelancer', 'Java Developer'];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [jobTitle, setJobTitle] = useState(jobTitles[currentTitleIndex]);
    const [animate, setAnimate] = useState(false);
    const [background, setBackground] = useState('#ffffff');
    const [color,setColor] = useState('black');

    setTimeout(() => {
      setHi(true);
    }, 2000);
    

   

  useEffect(() => {
    // Trigger the animation after a delay
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 3000); // Adjust the delay as needed

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 5000); // Change job title every 5 seconds
  
      return () => {
        clearInterval(intervalId); // Cleanup on component unmount
      };
    }, []);


    useEffect(() => {
        setJobTitle(jobTitles[currentTitleIndex]);
      }, [currentTitleIndex]);



      //color fliper
      let hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];




function randomIndex(){
    let index = Math.floor(Math.random()*15);
   let hexElement = hex[index];
   return hexElement;
}


function bgChange() {
    let hexCode = "#";
   for(let i = 0;i<6;i++){
     hexCode +=randomIndex();
   }
   setBackground(hexCode);
   setColor('white');
  
 
  }  

    return(
       <MainDiv>
         
            <div className='greet mb-5'>
            {hi?
               <div><span className='firstLetter'>I'</span>m</div>:<div><span className='firstLetter'>H</span>I</div>}
              </div>
            
         
             
          {hi? 
                  <><div className="container d-flex justify-content-start align-items-center bg-smokewhite text-dark">

            <AnimatedText animate={animate} className='mb-5 d-flex justify-content-around align-items-center'>
              <div>
              <img src={'../../../assets/user.jpeg'} className='shadow-inset' width={100} alt='imae'/>
              </div>
             <div>
             <h1 className='name ml-4  shadow-inset'>Gavaskar Kathirvel</h1>
             </div>

            </AnimatedText>
            </div>


            <AnimatedText animate={animate} className='mb-3'>
           <h1 className='name'>{jobTitle}</h1>
          </AnimatedText></>
       :
           <h1></h1>
          }
    
            <div>
        
            </div>
         
         
       </MainDiv>
    );
}



const MainDiv = styled.div`
height:100vh;
display:flex;
margin-left:5%;


flex-direction:column;
align-items:flex-start;
justify-content:center;

.name{
  font-size:50px;
}
.name:first-letter {
  font-weight: bold;
  font-size: 120%;
  color: red;
  /* Add other styles as needed */
}
.greet{
  font-size:100px;
}
.firstLetter{
  color:red;
}
overflow: hidden;

`;
const AnimatedText = styled.div`
  font-size: 24px;
  white-space: nowrap; /* Prevent text from wrapping */
  transform: ${({ animate }) => (animate ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 1s ease-in-out; /* Adjust the duration and easing as needed */
`;
