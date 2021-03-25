import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

const NoteList = props => {
    useEffect(() => {
        props.fetchNotes()
    }, [])


    const renderList = () => {
        return props.lists.map(list => {
            return (
                <div className="item" key={list.id}>
                    <div className="content">
                        {list.content}
                    </div>
                </div>
            );
        })
    };

    return (
        <div>
            <h2>Your Lists</h2>
            {renderList()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lists: Object.values(state.listNotes),
    };
}

export default connect(mapStateToProps, { fetchNotes })(NoteList);