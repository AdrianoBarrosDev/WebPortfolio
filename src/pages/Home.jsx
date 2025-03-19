import { Sidebar } from "../components/Sidebar";
import { Contact } from "./elements/Contact";
import { Experience } from "./elements/Experience";
import { Footer } from "./elements/Footer";
import { Portfolio } from "./elements/Portfolio";
import { Top } from "./elements/Top";

export function Home() {

    return (
        <>  
            <div className="row" style={{ minHeight: '100vh' }}>
                <div className="col-12 col-lg-10 p-0">
                    <Top id='top'/>
                    <Portfolio id='portfolio'/>
                    <Experience id='experience'/>
                    <Contact id='contact'/>
                </div>
                <nav className="col-lg-2 d-none d-lg-block" style={{ minHeight: '100vh' }}>
                    <Sidebar />
                </nav>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    );
}