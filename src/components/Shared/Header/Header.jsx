import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <Link class="navbar-brand" to="/">Movie Counter</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
};

export default Header;