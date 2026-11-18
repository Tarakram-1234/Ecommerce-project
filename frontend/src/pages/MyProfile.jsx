import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const MyProfile = () => {
  const { token, userData, backendUrl } = useContext(ShopContext);
  const [stats, setStats] = useState({ totalOrders: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      if (token) {
        try {
          const response = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { token } });
          if (response.data.success) {
            setStats({ totalOrders: response.data.orders.length });
          }
        } catch (error) {
          console.log("Error fetching order stats:", error);
        }
      }
    };
    fetchStats();
  }, [token, backendUrl]);

  return (
    <div className='border-t border-gray-500/40 pt-8 min-h-[60vh]'>
      <div className='text-2xl mb-8'>
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>

      <div className='flex flex-col gap-6 max-w-lg'>
        <div className='bg-gray-50 p-6 sm:p-8 border border-gray-200 rounded-sm flex flex-col gap-5'>
          <h3 className='text-lg sm:text-xl font-medium text-gray-800 border-b pb-3 mb-1'>Account Information</h3>
          
          <div className='flex flex-col gap-1'>
            <p className='text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider'>Full Name</p>
            <p className='text-base sm:text-lg text-gray-800 capitalize'>{userData ? userData.name : 'Loading...'}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <p className='text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider'>Email Address</p>
            <p className='text-base sm:text-lg text-gray-800'>{userData ? userData.email : 'Loading...'}</p>
          </div>
          
          <div className='flex flex-col gap-1 mt-4 pt-5 border-t border-gray-200'>
            <p className='text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider'>Total Orders Placed</p>
            <p className='text-3xl font-medium text-gray-800'>{stats.totalOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
