import '../styles/sectionCard.css'

export default function SectionCard ({style=null, children}) {
    return (
        <div className='section-card' style={style}>{children}</div>
    );
}