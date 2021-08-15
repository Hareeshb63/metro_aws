import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-secondary">
                <span className="navbar-brand mb-0 h1 text-white">S Metro</span>
                <AmplifySignOut/>
            </nav>
        </div>
       
        
    )
}

export default Navbar;  
