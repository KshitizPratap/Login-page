import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAstPYCYG_iMWuhoU4YhwzqjJ6_cZMY1Uk",
  authDomain: "login-6d50c.firebaseapp.com",
  projectId: "login-6d50c",
  storageBucket: "login-6d50c.appspot.com",
  messagingSenderId: "937458231628",
  appId: "1:937458231628:web:031b0a8db872cce77e07e9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
