import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='h-52 bg-gray-600 m-1 rounded border-1 border-slate-50 border-solid ring-1'>
            <div className='min-h-full flex justify-center items-center flex-col'>

                <div className="flex flex-shrink-0 items-center rounded">
                  <img
                    className="h-24 w-auto rounded-t-full"
                    src="https://lh3.googleusercontent.com/p/AF1QipM4l71nb_djIQNB_esTRDvhaPT7eGNkT2fc_PdI=w1080-h608-p-no-v0"
                    alt="Your Company"
                  />
                </div>
                <code className='text-white mt-2'>Copywrite &#169; 2023 &#8475;&#8494;&#9786;&#8510;earner</code>
                <div className='w-1/4 m-1 flex justify-between items-center rounded text-white gap-y-px'>
                    <Link to='#'>Privacy policy</Link>
                    <i className='border border-white border-solid h-4'></i>
                    <Link to='#'>Security</Link>
                    <i className='border border-white border-solid h-4'></i>
                    <Link to='#'>Legal staff</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;