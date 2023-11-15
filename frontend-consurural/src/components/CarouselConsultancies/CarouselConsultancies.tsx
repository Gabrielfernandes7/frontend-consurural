import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import {
    ConsultanciesService,
    DataConsultance,
} from "../../services/ConsultanciesService";
import "./CarouselConsultancies.css";

const CarouselConsultancies = () => {
    const [consultancies, setConsultancies] = useState<DataConsultance[]>([]);

    useEffect(() => {
        ConsultanciesService.getConsultanciesSmall().then((data) =>
            setConsultancies(data.slice(0, 5))
        );
    }, []);

    const consultanceTemplate = (consultance: DataConsultance) => {
        return (
            <div className="card2 border-1 border-round py-0 px-0 my-6 mx-18">
                <div className="mb-3">
                    <img
                        src={consultance.image_consultance}
                        alt={consultance.consultance_name}
                        className="image-card"
                    />
                </div>
                <div>
                    <h4 className="name-consultance mb-1">
                        {consultance.consultance_name}
                    </h4>
                    <div className="flex flex-wrap justify-content-center 
                        py-5 py-5 mx-2">
                        <p>
                            {consultance.text_consultance}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div >
            <Carousel
                value={consultancies}
                numVisible={4}
                numScroll={1}
                itemTemplate={consultanceTemplate}
                responsiveOptions={[
                    {
                        breakpoint: "1375",
                        numVisible: 3,
                        numScroll: 1,
                    },
                    {
                        breakpoint: "1170",
                        numVisible: 2,
                        numScroll: 1,
                    },
                    {
                        breakpoint: "835px",
                        numVisible: 1,
                        numScroll: 1,
                    },
                    {
                        breakpoint: "600px",
                        numVisible: 1,
                        numScroll: 1,
                    },
                ]}
            />
        </div>
    );
};

export default CarouselConsultancies;
