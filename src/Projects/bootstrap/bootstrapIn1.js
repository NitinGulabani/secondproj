import React from 'react';

const Bootstrap = () => {
    return(
        <>
            <h1 className="text-center my-5">Welcome to my channel</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="https://picsum.photos/287" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                             </div>
                        </div>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="https://picsum.photos/287/180" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="https://picsum.photos/286/180" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
    
}

export default Bootstrap;