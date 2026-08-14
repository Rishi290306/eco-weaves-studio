// Official Firebase Web SDK initialization for Eco Weaves Studio Cloud Database
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-EcoWeavesStudioPublicAppKey2025",
  authDomain: "eco-weaves-studio.firebaseapp.com",
  projectId: "eco-weaves-studio-db",
  storageBucket: "eco-weaves-studio-db.appspot.com",
  messagingSenderId: "987654321098",
  appId: "1:987654321098:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function submitInquiryToCloudDB(data) {
  try {
    const docRef = await addDoc(collection(db, "contact_messages"), {
      name: data.name || "Valued Client",
      email: data.email || "noemail@ecoweaves.com",
      phone: data.phone || "",
      company: data.company || "",
      subject: data.subject || "Inquiry",
      message: data.message || "",
      createdAt: serverTimestamp()
    });
    console.log("✅ Saved to Firebase Cloud Database! Doc ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Firebase Cloud DB submission notice:", error.message);
    return false;
  }
}
