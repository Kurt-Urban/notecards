import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

const NoteList = props => {
    const [display, setDisplay] = useState({});

    useEffect(() => {
        setDisplay(props.fetchNotes())
    }, [])

    // const listValidate = (list) => {
    //     if (list.userId === props.currentUserId) {
    //         return (
    //             <div className="primary">Your List</div>
    //         )
    //     }
    // }

    // const renderList = () => {
    //     return notes.map(note => {
    //         return (
    //             <div className="ui container" key={note.id}>
    //                 <div className="ui header">
    //                     My Lists
    //                 </div>
    //                 <div className="item">

    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    return (
        <div>
            <h2>Your Lists</h2>
            {/* {renderList()} */}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         lists: Object.values(state.lists),
//         currentUserId: state.auth.current.userId,
//         isSignedIn: state.auth.current.isSignedIn
//     };
// }

export default connect(null, { fetchNotes })(NoteList);