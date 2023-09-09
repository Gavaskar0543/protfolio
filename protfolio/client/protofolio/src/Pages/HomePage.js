import React,{useEffect,useState} from  'react';
export default function HomePage(){


    const jobTitles = ['Full Stack Developer', 'Freelancer', 'Java Developer'];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [jobTitle, setJobTitle] = useState(jobTitles[currentTitleIndex]);
  
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
    
    return(
       <div>
        <div className="conttainer d-flex justify-content-center align-items-center bg-smokewhite text-dark">

            <div>
                <h1>Gavaskar Kathirvel</h1>
                <span>
                   <h1>{jobTitle}</h1>
                </span>
            </div>

        </div>
       </div>
    );
}