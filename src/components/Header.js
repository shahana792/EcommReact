import { Link } from "react-router-dom";

const Header = () => {
    return ( 
       <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src="image(1).png" alt="Bootstrap" width="100" height="100"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="mailto:qureshishahana792@gmail.com">Contact </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" data-toggle="modal" data-target="#loginModal">Login</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="contact-name">Name</label>
                            <input type="text" className="form-control" id="contact-name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input type="email" className="form-control" id="contact-email" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>
     );
}
 
export default Header;