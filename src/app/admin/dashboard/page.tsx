"use client"
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
const Page = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' }); 
  };

  const [isAdmin, setIsAdmin] = useState(false);

  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user?.email === 'pandey73harsh@gmail.com') {
      setIsAdmin(true);
    } 
  }, [session]);

  useEffect(() => {
    if (!isAdmin) {
      handleLogout();
    }
  }, [isAdmin]);

  return (
    <div>
      admin dashboard
      {isAdmin && <p>Admin</p>}
        <Button onClick={handleLogout}>Sign Out</Button>
    </div>
  )
}

export default Page
