'use client'
import Image from 'next/image'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

export default function Home() {
    const [user] = useAuthState(auth);
    const router = useRouter()
    const userSession = sessionStorage.getItem('user');
  
    console.log({user})
   
    if (!user && !userSession){
      return router.push('/sign-up')
    }
    
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">You are signed in!</h1>
          <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button>
        </div>
      </main>
    );
  }