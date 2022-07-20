import{ Link }from 'react-router-dom'
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import Article from '../components/article';
import Pagination from '../components/pagination';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';


function Login(){
    return(
            <>
                         <div>
        {/* Start Header */}
        <Header/>
      {/* End Header */}
      <main className="container">       
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              Form Login
            </h3>
            <form>
            
            <div className='mb-3'>
                <label for='idUsername'>Username</label>
                <input type='text' id='idUsername'></input>
            </div>
            <div className='mb-3'>
                <label for='idPassword'>Password</label>
                <input type='password' id='idPassword'></input>
            </div>
            </form>
            <Link to='/signup'>SignUp</Link>
            
            {/* Start Article */}
            <Article/>
            {/* End Article */}
    
            {/* Start Pagination */}
            <Pagination/>
            {/* End Pagination */}
           
          </div>
    
          {/* Start Sidebar */}
          <Sidebar/>
          {/* End Sidebar */}
         
        </div>
      </main>
    
      {/* Start Footer */}
        <Footer/>
      {/* End Footer */}
     
        </div>
            </>
    );
}

export default Login;