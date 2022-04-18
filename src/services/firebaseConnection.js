import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDx2ZAmVGOu9VcBv4sRttmfoZwLRCIDCpI',
	authDomain: 'sistema-9bc40.firebaseapp.com',
	projectId: 'sistema-9bc40',
	storageBucket: 'sistema-9bc40.appspot.com',
	messagingSenderId: '95029815235',
	appId: '1:95029815235:web:9f072f342304b4f7ccff76',
	measurementId: 'G-M3M7Z4F05E',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
