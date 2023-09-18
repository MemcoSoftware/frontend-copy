import React, { useEffect, useState } from 'react';
import './styles/UserDetailPage.css';
import Userimg  from "./img/tumblr_mddh4dv3yc1r02l78.jpg";
// React Router DOM Imports
import { useNavigate, useParams } from 'react-router-dom';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { getUserById } from '../services/usersService';
import { AxiosResponse } from 'axios';
import { User } from '../utils/types/User.type';

export const UserDetailPage = () => {
  let loggedIn = useSessionStorage('sessionJWTToken');

  let navigate = useNavigate();
  // Find id from params
  let { id } = useParams();
  console.log(id);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (!loggedIn) {
      return navigate('/login');
    } else {
      if (id) {
        getUserById(loggedIn, id)
          .then((response: AxiosResponse) => {
            if (response.status === 200 && response.data) {
              setUser(response.data);
              console.table(response.data);
            }
          })
          .catch((error: any) => console.error(`[USER BY ID ERROR]: ${error}`));
      } else {
        return navigate('/users');
      }
    }
  }, [loggedIn]);

  // Variable to navigate

  return (
    <div className=''>
      <div className=''>
            {user ? (
            <div className='UserCard'>
                  <section className="usercard-user-section">
                  <div className="usercard" data-state="#about">
                      <div className="usercard-header">
                        <div className="usercard-cover" ></div>
                        <img className='usercard-Avatar' src={Userimg} alt="" width="90px" height="80px" />
                        <h2 className="usercard-fullname">{user.name}</h2>
                        <h2 className="usercard-jobtitle">{user.more_info}</h2>     
                      </div>
                      <div className="usercard-main">
                        <div className="usercard-section is-active" >
                          <div className="usercard-content-1">
                            <div className="usercard-subtitle">Nombre de usuario</div>
                              <p className="usercard-desc">{user.username}</p>
                            <div className="usercard-subtitle">Cedula</div>
                              <p className="usercard-desc">{user.cedula}</p>
                              {user.roles && user.roles.length > 0 && (
                              <div>
                                <p className='usercard-subtitle'>Roles</p>
                                <ul>
                                  {user.roles.map((role: any) => (
                                    <p className='usercard-desc' key={role._id}>{role.name}</p>
                                  ))}
                                </ul>
                              </div>
                               )}
                          </div>     

                          <div className="usercard-content-2"> 
                              <div className="usercard-subtitle">Numero id</div>
                              <p className="usercard-desc">{id}</p>
                            <div className="usercard-subtitle">Telefono</div>
                              <p className="usercard-desc">{user.telefono}</p>                 
                            <div className="usercard-subtitle">Email</div>
                                <p className="usercard-desc">{user.email}</p> 
                          </div>                
                        </div>
                        
                      </div>
                      <div className="usercard-buttons">
                           <button className='usercard-button' data-section="#experience">Editar</button>
                      </div>
                    </div>
                  </section>
                  </div>           
          ) : (
            <div>
              <h2>Loading data...</h2>
            </div>
             )}
      </div>
    </div>
  );
};