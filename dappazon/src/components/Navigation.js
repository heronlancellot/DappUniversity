import { ethers } from 'ethers';

const Navigation = ({ account, setAccount }) => {

    return (
        <nav>
            <div className='nav__brand'>
                <h1>Dappazon</h1>

            </div>
            {account}
        </nav>
    );
}

export default Navigation;