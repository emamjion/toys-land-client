import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-rose-100 rounded-lg p-6'>
                <h1 className='text-2xl font-medium mb-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>
                    When a user login in, the authorization server issues an access token which is an a remains that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server from the user. The access token lets the client signal to the server that it has recieved authorization by the user to perform convinced tasks or access convinced resources.
                </p>
            </div>
            <div className='bg-orange-100 rounded-lg p-6'>
                <h1 className='text-2xl font-medium mb-3'>Compare SQL and NoSQL databases?</h1>
                <p>
                    SQL databases are vertically scalable. On the other hand, NoSQL databases are horizontally scalable. <br />
                    SQL databases have fixed or static or predefined schema. On the other hand, NoSQL databases have dynamic schema. <br />
                    SQL databases are not best suited for hierarchical data storage. On the other hand, NoSQL databases are best suited for hierarchical storage.
                </p>
            </div>
            <div className='bg-cyan-100 rounded-lg p-6'>
                <h1 className='text-2xl font-medium mb-3'>What is express js? What is Nest JS (google it)?</h1>
                <p>
                    Express Js - Express is a Node Js web application framework that provides a wide range of functionality for constructing web and mobile applications.It is a layer built on top of Node that aids in the management of servers and routes.
                    <br />
                    Nest Js - Nest Js is a Node Js framework for building server-side applications. It is based on TypeScript and JavaScript. Nest makes use the Express HTTP framework by default.
                </p>
            </div>
            <div className='bg-purple-100 rounded-lg p-6'>
                <h1 className='text-2xl font-medium mb-3'>What is MongoDB aggregate and how does it work (google it)?</h1>
                <p>
                    MongoDB aggregates makes it easier to query data from any collectio. It involves things like matching, getting data from other collections, selecting fields and much more.
                </p>
            </div>
        </div>
    );
};

export default Blogs;