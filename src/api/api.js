import axios from 'axios';

function getColors(callback) {
    axios.get(`api/colors`)
        .then(response => {
            callback(response)
        });
}

export { getColors };