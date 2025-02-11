const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
})

exports.eventCreated = functions.firestore
    .document('events/{eventId}')
    .onCreate(doc => {

        const event = doc.data();
        const notification = {
            content: 'Added a new event',
            user: `${event.authorFirstName} ${event.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
})

exports.userJoined = functions.auth.user()
.onCreate(user => {
    
    return admin.firestore().collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
        const newUser = doc.data()
        const notification = {
            content: 'Joined the site',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })
})