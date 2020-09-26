import axios from 'axios';

export default class SendRequest {
    Send(url, method = 'GET', data = {}){
        let optionA = {
            method: method,
            url: url,
            data: data
        }
        let optionB = {
            method: method,
            url: url
        }
        let options = optionA;
        if (method == 'GET'){
            options = optionB;
        }
        return new Promise( (resolve, reject) => {     
            this.send_request(options)
            .then(response => resolve(response) )
            .catch(err => reject(err) );
        });
    }
    
    send_request(options){
        return new Promise((resolve, reject)=>{
            axios(options)
            .then(response => { console.log(response); resolve(response) } )
            .catch(error => {alert(error); reject(error)} )
        })
    }
}