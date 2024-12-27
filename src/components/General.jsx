import SectionCard from './SectionCard';

export default function GeneralSection() {
    const divStyle = {
        'background-color':'#dce3eb',
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'padding-bottom': '1em'
    };
    return (
        <SectionCard style={divStyle}>
            <h1>Vanessa Rica F. Tan Cardoso</h1>
            <p>vanessa---------@gmail.com</p>
            <p>+62920------</p>
            <p>github.com/vanessa------</p>
        </SectionCard>
    );
}