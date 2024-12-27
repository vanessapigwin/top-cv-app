import { useState } from 'react';
import '../styles/sectionCard.css'

export default function SectionCard ({style=null, children}) {
    const [editing, setEditing] = useState(false)

    function editContent () {
        setEditing(!editing)
    }

    return (
        <div className='section-card' style={style}>
            <button onClick={editContent}>{editing ? 'Save' : 'Edit'}</button>
            {children}
        </div>
    );
}