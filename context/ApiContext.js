'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import useUserSettings from '../hooks/useUserSettings';
import useUserSubcollections from '../hooks/useUserSubcollections';

export const ApiContext = createContext({});

export const useApiContext = () => useContext(ApiContext);

export const ApiContextProvider = ({ children }) => {
  // User
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [loading, setLoading] = useState(true);

  // Profile
  const projects = useUserSubcollections(db, userUid, 'projects');
  const sideProjects = useUserSubcollections(db, userUid, 'side-projects');
  const experiences = useUserSubcollections(db, userUid, 'experiences');
  const educations = useUserSubcollections(db, userUid, 'educations', 'from');
  const volunteerings = useUserSubcollections(db, userUid, 'volunteerings');
  const certifications = useUserSubcollections(db, userUid, 'certifications');
  const awards = useUserSubcollections(db, userUid, 'awards');
  const contacts = useUserSubcollections(db, userUid, 'contacts');
  const messages = useUserSubcollections(db, userUid, 'messages');

  console.log('projects', projects);

  // Messages
  const [unreadMessages, setUnreadMessages] = useState(0);

  const settings = useUserSettings(db, userUid);

  const fetchUnreadMessagesCount = async () => {
    if (!userUid) return;

    const userMessagesRef = collection(db, 'users', userUid, 'messages');

    try {
      const unreadMessagesQuery = query(
        userMessagesRef,
        where('read', '==', false)
      );
      const unreadMessagesSnapshot = await getDocs(unreadMessagesQuery);
      setUnreadMessages(unreadMessagesSnapshot.size);
    } catch (error) {
      console.error('Error fetching unread messages: ', error);
    }
  };

  useEffect(() => {
    fetchUnreadMessagesCount();
  }, [auth.currentUser]);

  const markMessageAsRead = async (messageId) => {
    if (!userUid) return;

    const messageRef = doc(db, 'users', userUid, 'messages', messageId);

    try {
      await updateDoc(messageRef, { read: true });
      setUnreadMessages((prevCount) => Math.max(0, prevCount - 1));
    } catch (error) {
      console.error('Error marking message as read: ', error);
    }
  };

  // Get user from google auth
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserUid(auth.currentUser.uid);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Get user from fireStore
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snapshot = await getDoc(doc(db, 'users', user.uid));
        setUserData(snapshot.data());
      }
    });
  }, [userUid]);

  const values = {
    user,
    userUid,
    loading,
    userData,
    projects,
    sideProjects,
    experiences,
    educations,
    volunteerings,
    certifications,
    awards,
    contacts,

    // messages
    messages,
    unreadMessages,
    setUnreadMessages,
    markMessageAsRead,

    // settings
    settings,
  };

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};
