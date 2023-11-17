import { About_us } from '../About_us/About_us';
import { Schedule } from '../Schedule/Schedule';
import { Services } from '../Services/Services';
import { Stream } from  '../Stream/Stream';


export const Main = () => (
    <main className="main">
        <Schedule />
        <Stream />
        <About_us />
        <Services />
    </main>
)
