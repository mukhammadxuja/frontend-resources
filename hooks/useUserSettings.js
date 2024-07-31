import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const useUserSettings = (db, userId) => {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      if (!userId) {
        console.error('User UID is null or undefined');
        return;
      }

      try {
        const settingsDocRef = doc(
          db,
          'users',
          userId,
          'settings',
          'settingsDoc'
        );
        const docSnap = await getDoc(settingsDocRef);
        if (docSnap.exists()) {
          setSettings(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, [db, userId]);

  return settings;
};

export default useUserSettings;
