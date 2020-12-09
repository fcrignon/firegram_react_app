import { useState, useEffect } from "react";
import { storage, db, timestamp } from "../firebaseConfig.js";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const colectionRef = db.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        colectionRef.add({ url, createdAt});
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
