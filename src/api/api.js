import axios from 'axios';

function getColors(callback) {
    let url = "https://hex-colors-api.herokuapp.com/api/colors"
    axios.get(url)
        .then(response => {
            callback(response)
        });
}

export { getColors };