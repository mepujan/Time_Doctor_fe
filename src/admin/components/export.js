import jsPDF from 'jspdf';
import { EventList } from './EventList';
import { renderToString } from 'react-dom/server';


export const Export = async (datas) => {
        const document = new jsPDF();
        const event = renderToString(<EventList datas={datas} />);
        document.setFontSize(10);
        await document.html(event);
        document.save('scheduled-data.pdf');
};