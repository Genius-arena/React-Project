// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import Pagination from './components/Pagination';
import './App.css';

import Input from './components/Input';


function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const inputBar = document.querySelector('input');

const page =3;


  const search = async (e) => {
    const res = await fetch(`https://api.github.com/search/users?q=${user}&page={page}`);
    const data = await res.json();
    const response = data.items;
    setUsers(response);
    console.log(response);
    console.log(response.length);

    inputBar.value = ""
  };



  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost); 

  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const submit = (e) => {
    e.preventDefault();
    search();
  };
  

let g = users.length;

console.log("kkkkkkkkkkkkkkkkkkkkk " + g)

  return (
    <div className='App'>


     <header>
        <h1>
          <a href='google.com'>
            <GoMarkGithub className='logo' size={20} />
            <span>Github User Search</span>
          </a>
        </h1>
        <Input user={user} setUser={setUser} search={search} submit={submit} />
      </header>

      {/* {console.log("This is DDDD " + users.length)} */}
      {users !== [] && (
        <div className='container' >
          {users.map((profile) => {
            return ( 
              <><section key={profile.id}>
                <img
                  src={`${profile.avatar_url}`}
                  alt=''
                  className='profilePic' />
                <p className='username'>{profile.login}</p>
                <div className='tentative'>
                  <span className='score'>Score: {profile.score}</span>
                  <a href={`github.com/${profile.login}`} className='link'>
                    <GoMarkGithub />
                    github.com/{profile.login}
                  </a>
                </div>


              </section>
              </>
  

            );
          })}



<Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={users.length}
                  paginate={paginate} />


        </div>



      )}
    </div>
  );
}


export default App;
