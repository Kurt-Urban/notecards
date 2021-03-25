import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const CreateNoteList = props => {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div>

        </div>
    )
}

const mapStateToProps = state => { };

export default connect(mapStateToProps)(CreateNoteList);