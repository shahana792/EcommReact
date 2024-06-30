const Home = () => {
    return ( 
        <>
        <header className="jumbotron text-center">
        <div className="icons">
            <a href="#" data-toggle="tooltip" title="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
            <a href="#" data-toggle="modal" data-target="#loginModal" title="Login"><i className="fas fa-user"></i></a>
        </div>
        <h1>Craft Ocean</h1>
        <p>Welcome to our DIY website!</p>
    </header>


        
        <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="https://1471793142.rsc.cdn77.org/data/images/full/51978/these-eco-friendly-projects-are-perfect-for-winter-renovations.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Eco-Friendly Projects</h5>
                        <p className="card-text">Explore easy eco-friendly project ideas.</p>
                        <a href="ideas" className="btn btn-primary">Explore Ideas</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://img.freepik.com/free-photo/close-up-woman-sticking-paper-with-hot-glue-gun_23-2148188283.jpg?t=st=1716975398~exp=1716978998~hmac=6ac47e997b44cbe78cd745bd2cd75564f59811f966c23e5af7f1a5ea35515db0&w=996" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Get Started</h5>
                        <p className="card-text">Learn how to get started with DIY projects.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
                  </div>
                <div className="col-md-4">
                <div className="card">
                    <img src="https://img.freepik.com/free-photo/mom-daughter-mother-s-day_23-2147788267.jpg?t=st=1717142582~exp=1717146182~hmac=30a5a5158e04bdeb290f5c5e20afd77a5bc9a9d1f6d93f98032ce00b071d17e0&w=1480" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Unique DIY Mother’s Day Gifts</h5>
                        <p className="card-text">DIY Mother’s Day gifts for every skill level and budget.</p>
                        <a href="#" className="btn btn-primary">Explore More</a>
                    </div>
                </div>
                      </div>
                     <div className="col-md-4">
                <div className="card">
                    <img src="https://img.freepik.com/premium-photo/boxes-room_828688-3556.jpg?w=1380" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">DIY Organizing Ideas for Your Home</h5>
                        <p className="card-text">Talking DIY organization (for your home) today!</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
           
            <div className="col-md-4">
                <div className="card">
                    <img src="https://img.freepik.com/premium-photo/hand-gift-wrapping-paper-holiday-christmas-ribbon-bows_494741-14723.jpg?w=1480" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Popular Projects</h5>
                        <p className="card-text">Check out our popular DIY projects.</p>
                        <a href="#" className="btn btn-primary">View Projects</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://img.freepik.com/premium-photo/smiling-students-looking-teacher-painting-pot_107420-29305.jpg?w=1480" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Community</h5>
                        <p className="card-text">Join our DIY community and connect with others.</p>
                        <a href="#" className="btn btn-primary">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div></>
     );
}
 
export default Home;