import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { DepoimentsService, DataDepoiments } from '../../services/DepoimentsService';
import './CarouselDepoiments.css';

const CarouselDepoiments = () => {
    const [consultancies, setDepoiments] = useState<DataDepoiments[]>([]);

    useEffect(() => {
        DepoimentsService.getDepoimentsSmall()
            .then((data) => setDepoiments(data.slice(0, 5)));
    }, []);

    const depoimentTemplate = (depoiment: DataDepoiments) => {
        return (
            <div className="card border-1 border-round py-3 px-5 my-6 mx-18">
                <div>
                    <h4 className="name-depoiment mb-1">
                        {depoiment.text_depoiment}
                    </h4>
                    <div className="flex flex-wrap justify-content-center py-5 mx-2">
                        <p> {depoiment.costumer_author_depoiment} </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container-carousel">
            <Carousel
                value={consultancies}
                numVisible={4}
                numScroll={1}
                itemTemplate={depoimentTemplate}
                responsiveOptions={[
                    {
                        breakpoint: '1199px',
                        numVisible: 4,
                        numScroll: 1
                    },
                    {
                        breakpoint: '991px',
                        numVisible: 2,
                        numScroll: 1
                    },
                    {
                        breakpoint: '767px',
                        numVisible: 1,
                        numScroll: 1
                    },
                    {
                        breakpoint: '600px',
                        numVisible: 1,
                        numScroll: 1
                    }
                ]}
            />
        </div>
    );
};

export default CarouselDepoiments;