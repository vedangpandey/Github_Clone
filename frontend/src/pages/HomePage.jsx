import React, { useCallback, useEffect, useState } from 'react'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import toast from 'react-hot-toast'
import Spinner from '../components/Spinner'

function HomePage() {
  const [userProfile,setUserProfile]=useState(null);
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(false);
  const [sortType,setSortType]=useState("recent")
  const user=true;
  const getUserFileAndRepos=useCallback(async (username="vedangpandey")=>{
    setLoading(true)
    try {
      const res= await fetch(`http://localhost:5000/api/users/profile/${username}`)
      const {repos,userProfile}=await res.json();
      setRepos(repos)
      setUserProfile(userProfile)
      return {userProfile,repos};
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  },[])

  useEffect(()=>{
    getUserFileAndRepos();
  },[getUserFileAndRepos])

  const onSearch= async (e,username)=>{
    e.preventDefault();
    setLoading(true);
    setRepos([])
    setUserProfile(null);
    const {userProfile,repos}=await getUserFileAndRepos(username);
    setUserProfile(userProfile)
    setRepos(repos)
    setLoading(false);
    setSortType('recent')
  }
  const onSort=(sortType)=>{
    if(sortType === "recent"){
      repos.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
    }else if(sortType === "stars"){
      repos.sort((a,b)=>b.stargazers_count-a.stargazers_count);
    }
    else if(sortType === "forks"){
      repos.sort((a,b)=>b.forks_count-a.forks_count)
    }
    setSortType(sortType);
    setRepos([...repos]);
  }

  return (
    <div className='m-4'>
      <Search onSearch={onSearch} />
      {repos.length>0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {userProfile && !loading && < ProfileInfo userProfile={userProfile} />}
        { <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default HomePage