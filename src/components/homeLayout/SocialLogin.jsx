import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn btn-outline btn-secondary w-full'><FaGoogle size={24}/>Login With Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={24} />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;