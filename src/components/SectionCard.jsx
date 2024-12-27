import '../styles/sectionCard.css'

export default function SectionCard ({style=null, children}) {
    return (
        <div className='section-card' style={style}>
            <button>Edit</button>
            {children}
        </div>
    );
}