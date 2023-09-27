import styled from 'styled-components';
function Contact(){
    return(
       <MainDiv id="contact-section">
        <div className="text-bold my-4 d-flex align-items-center justify-content-center w-100 text-center">
            <h2>Contact Me</h2>

        </div>
        <div className=" container d-flex align-items-center justify-content-center w-100">
           <form className="form-control" action="/" method="post">
            <div className="form-group w-50 d-flex-cols aign-items-center justify-content-center">
            <div className="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username" />
            </div>
            <div className="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your mail address" />
            </div>

            <div className="form-group mb-3">
        <label for="exampleTextarea">Textarea Label</label>
        <textarea className="form-control" id="exampleTextarea" rows="4"></textarea>
    </div>
<div className="form-group d-flex align-items-center justify-content-center ">
    <button className="btn btn-outline-primary">send</button>

</div>
            </div>

           </form>
        </div>

       </MainDiv>
    );
}

const MainDiv = styled.div`
height:100vh;

`;
export default Contact;