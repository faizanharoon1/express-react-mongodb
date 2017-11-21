import axios from 'axios';
class ItemService {
    
      sendData(data) {
    
        axios.post('http://localhost:3000/items/add/post', {

           data
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }
      deleteData(id){
        axios.get('http://localhost:3000/items/delete/'+id)
        .then(function (response) {
          console.log(response);
      }).catch(err => console.log(err));
      }

    }
    
    export default ItemService;