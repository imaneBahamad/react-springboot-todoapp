import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService(){
        //console.log('Executed service')
        return Axios.get("http://localhost:8081/hello-world")  // Return the promise back, 
                                                                // if it's successful it returns a response following a specific schema {data: ,status: ,...}, 
                                                                // Axios supports all HTTP Requests (get,post,put,delete,...)
    }
}

export default new HelloWorldService()