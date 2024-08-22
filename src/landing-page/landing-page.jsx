
import HomePage from "../home-page/home-component"
import MemoizedCarGrid from "../car-grid-component/Car-grid-component";
import Footer from "../footer-app/footer";

function LandingPage (props){

    


    return (
        <div>
{<HomePage/>}
<MemoizedCarGrid GetCarfromGrid={props.GetCarfromGrid} />

{<Footer/>}

        </div>
    )
}

export default LandingPage;