import { Services_item } from '../Services_item/Services_item';
import services from '../Services_list.json';
import services2 from '../Services_list_2.json';
import services3 from '../Services_list_3.json';
import '../Services.css';

export const Services_list = () => {
    return (
        <div>
            <div className="services-list services-list--1">
                {services.map((item) => (
                    <Services_item key={item.id} item={item} />
                ))}
            </div>
            <div className="services-list services-list--2">
                {services2.map((item2) => (
                    <Services_item key={item2.id} item={item2} />
                ))}
            </div>
            <div className="services-list services-list--3">
                {services3.map((item3) => (
                    <Services_item key={item3.id} item={item3} />
                ))}
            </div>
        </div>
    );
};
