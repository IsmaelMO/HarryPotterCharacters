
import "regenerator-runtime/runtime";
let axios = require('axios');
/*class HarryPotterRequest {

    async  getCharacters(){

        let APIurl = "http://localhost:5000/characters";
        
        const requestBody = {
        }

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : "* /*"
            }
        };

        var result = {};

        let data = {
        }

        await axios.get(APIurl, data, config)
            .then(response => {
                result = JSON.parse(response.data);
            })
            .catch(error => console.error(error));

        return result;
    }

}

module.exports = HarryPotterRequest
*/
export const getCharacters = () =>{

    let APIurl = "http://localhost:5000/characters";
    
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept' : "*/*"
        }
    };

    var result = {};

    let data = {
    }

     axios.get(APIurl, data, config)
        .then(response => {
            result = JSON.parse(response.data);
        })
        .catch(error => console.error(error));

    return result;
}