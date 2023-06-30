import axios from 'axios';

const koneksiDepsFood = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/mahasiswa',
});

export default koneksiDepsFood;
