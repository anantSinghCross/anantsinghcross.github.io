import React, {useState, useEffect} from 'react'
import { initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
/*

Establishes Firestore connection and returns all the 'resume' collection data

*/
export function useResumeCollection(){
    const [resume, setResume] = useState([])
    useEffect(()=>{

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDh2G5QwwQBx-3Vmiv-DzlOuZ0SJOn3kWo",
            authDomain: "my-portfolio-a3a3e.firebaseapp.com",
            projectId: "my-portfolio-a3a3e",
            storageBucket: "my-portfolio-a3a3e.appspot.com",
            messagingSenderId: "131300789790",
            appId: "1:131300789790:web:baea0b618a9defdd53680f"
        };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
    
        const getResume = async () => {
            const resumeCollection = collection(db, 'resume');
            const resumeSnapshot = await getDocs(resumeCollection);
            const resumeArray = resumeSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setResume(resumeArray);
        }
        getResume();
    }, [])
    return resume;
}