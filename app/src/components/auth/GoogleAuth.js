// import React, { useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import { signIn, signOut } from '../actions';

// const GoogleAuth = props => {
//     const [isSignedIn, setSignedIn] = useState({})
//     const auth = useRef(null)
//     useEffect(() => {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: '596183468753-q4g8spo37nq0frolk8inqln8jev7gifi.apps.googleusercontent.com',
//                 scope: 'email',
//             }).then(() => {
//                 auth.current = window.gapi.auth2.getAuthInstance();
//                 setSignedIn(auth.current.isSignedIn.get());
//                 auth.current.isSignedIn.listen(onAuthChange)
//             })
//         })
//     }, [isSignedIn]);

//     const onAuthChange = () => {
//         setSignedIn(auth.current.isSignedIn.get())
//     }

//     const onSignInClick = () => {
//         auth.current.signIn();
//     };

//     const onSignOutClick = () => {
//         auth.current.signOut();
//     };

//     const renderAuthButton = () => {
//         if (isSignedIn === null) {
//             return null;
//         } else if (isSignedIn) {
//             return <button className="ui google button" onClick={onSignOutClick}>
//                 <i className="google icon" />
//                  Logout {/*{(!auth.current ? null : auth.current.currentUser.get().getId())} */}
//             </button>
//         } else {
//             return <button className="ui green google button" onClick={onSignInClick}>
//                 <i className="google icon" />
//                 Sign in with Google
//             </button>
//         }
//     }
//     return (
//         <div>{renderAuthButton()}</div>
//     );
// }
// const mapStateToProps = state => {
//     return {
//         auth: state.auth,
//         userId: state.auth.userId,
//         isSignedIn: state.auth.isSignedIn
//     };
// }

// export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
