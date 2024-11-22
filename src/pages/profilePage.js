import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BottomNavBar from '../components/navbar';

export default function ProfileCard() {
   const [profile, setProfile] = useState(null); 
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
       const fetchGithubProfile = async () => {
           try {
               const profileResponse = await axios.get('https://api.github.com/users/Ghal-crash');
               setProfile(profileResponse.data);
               setLoading(false);
           } catch (error) {
               console.error('Error fetching GitHub data:', error);
               setLoading(false);
           }
       };

       fetchGithubProfile();
   }, []);

   if (loading) {
       return (
           <div className="flex justify-center items-center h-screen">
               <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
           </div>
       );
   }

   return (
       <div className="flex flex-col justify-center items-center h-[100vh]">
           <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-600/50 transition-shadow duration-300 dark:shadow-gray-700/50 dark:hover:shadow-gray-800/50 dark:!bg-navy-800 dark:text-white">
               <div className="relative flex h-32 w-full justify-center rounded-xl bg-gray-100">
                   <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-gray-900 shadow-md">
                       <img 
                           className="h-full w-full rounded-full" 
                           src={profile?.avatar_url} 
                           alt="GitHub Profile" 
                       />
                   </div>
               </div> 
               <div className="mt-16 flex flex-col items-center">
                   <h4 className="text-xl font-bold text-navy-700 dark:text-black">
                       {profile?.name || profile?.login}
                   </h4>
                   <p className="text-base font-normal text-gray-600">
                       {profile?.bio || 'GitHub Developer'}
                   </p>
               </div> 
               <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                   <div className="flex flex-col items-center justify-center">
                       <p className="text-2xl font-bold text-navy-700 dark:text-black">
                           {profile?.public_repos}
                       </p>
                       <p className="text-sm font-normal text-gray-600">Repositories</p>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <p className="text-2xl font-bold text-navy-700 dark:text-black">
                           {profile?.followers}
                       </p>
                       <p className="text-sm font-normal text-gray-600">Followers</p>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <p className="text-2xl font-bold text-navy-700 dark:text-black">
                           {profile?.following}
                       </p>
                       <p className="text-sm font-normal text-gray-600">Following</p>
                   </div>
               </div>
               <div className="mt-2">
                   <a 
                       href={profile?.html_url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-900 hover:text-gray-700 dark:text-white"
                   >
                       View GitHub Profile
                   </a>
               </div>
           </div>
           <BottomNavBar />
       </div>
   );
}