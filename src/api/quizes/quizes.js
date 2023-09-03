import axios from "../service";

const quizes = {
    get:()=>axios.get('/quizes')
        .then(({data})=>data)
        .catch((err) => {
            throw new Error(err);
        })
}
export {quizes};