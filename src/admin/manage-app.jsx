import { CarProvider } from "./manage-car-context"
import ManageCars from "./manage-car-component"

function ManageCarApp (){

    return (

    <CarProvider>

<ManageCars/>

    </CarProvider>
    )

}

export default ManageCarApp;