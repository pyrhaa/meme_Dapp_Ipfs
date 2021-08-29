import React, { Component } from 'react';

class App extends Component {
  render() {
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
                  <input type='file' onChange={this.captureFile} />

                  <input type='submit' />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
