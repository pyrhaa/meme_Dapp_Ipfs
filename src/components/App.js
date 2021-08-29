import React, { useState } from 'react';
import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0');

const App = () => {
  const [fileUrl, updateFileUrl] = useState(``);
  const onChange = async (e) => {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  return (
    <div>
      <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
        <a
          className='navbar-brand col-sm-3 col-md-2 mr-0'
          href='http://www.dappuniversity.com/bootcamp'
          target='_blank'
          rel='noopener noreferrer'
        >
          Meme of the Day
        </a>
      </nav>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <main role='main' className='col-lg-12 d-flex text-center'>
            <div className='content mr-auto ml-auto'>
              <p>&nbsp;</p>
              <h2>Change Meme</h2>
              <form>
                {/*input for choose file in our computer*/}
                <input type='file' onChange={onChange} />
                {fileUrl && <img src={fileUrl} alt='test' width='600px' />}
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
