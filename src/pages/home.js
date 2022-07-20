import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import Article from '../components/article';
import Pagination from '../components/pagination';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

function Home(){
    return(
        <>
         <div>
        {/* Start Header */}
        <Header/>
      {/* End Header */}
      <main className="container">
        {/* Start Jumbotron */}
        <Jumbotron/>
        {/* End Jumbotron */}
       
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>
    
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
       
    )
}

export default Home;