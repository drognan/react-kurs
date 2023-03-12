import Accordion from '../components/Accordion';

function AccordionPage() {

    const items = [
        { id: 'aloegu', label: 'Can I use React on an project?', content: 'You can use React on any project you want.'},
        { id: '12345', label: 'Can I use Javascript on an project?', content: 'You can use Javascript on any project you want.'},
        { id: '<.qjk', label: 'Can I use CSS on an project?', content: 'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. '},
    ];

    return <Accordion items={items}/>
};

export default AccordionPage;