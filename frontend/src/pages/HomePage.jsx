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
  const getUserFileAndRepos=useCallback(async ()=>{
    setLoading(true)
    try {
      const userRes= await fetch('https://api.github.com/users/vedangpandey')
      console.log(1)
      const userProfile= await userRes.json()
      
      setUserProfile(userProfile);
      const repoRes=await fetch(userProfile.repos_url)
      const repos=await repoRes.json()
      console.log(repos)
      setRepos(repos)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  },[])
  useEffect(()=>{
    getUserFileAndRepos();
  },[getUserFileAndRepos])
  return (
    <div className='m-4'>
      <Search />
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {userProfile && !loading && < ProfileInfo userProfile={userProfile} />}
        {repos.length>0 && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default HomePage