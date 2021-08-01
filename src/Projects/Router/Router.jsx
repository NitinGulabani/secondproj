import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
const Router1 = () => {

    const Name = () => {
        return <h1>HEllo I am Name Page</h1>
    }

    return (
        <>
            <Switch>
                <Route exact path='/' component={About} />
                <Route exact path='/contact/name' component={Name} />
                <Route  path='/contaCt' component={Contact} />
                <Route component={About} />
            </Switch>
        </>
    )
}

export default Router1;