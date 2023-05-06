import axios from 'axios';
import { useState,useEffect } from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const koneksiMahasiswa = axios.create({
  // baseURL: "http://192.168.1.33:5000/api/mahasiswa"
   baseURL: "http://127.0.0.1:5000/api/mahasiswa"
 }); 

export default function FormMahasiswa() {
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [post, setPost] = useState(null);
    const [mahasiswa, setMahasiswa] =  useState(null);

    useEffect(() => {
      async function getMahasiswa() {
        const response = await koneksiMahasiswa.get("/").then(function (axiosResponse) {
            setMahasiswa(axiosResponse.data.data);
         })
         .catch(function (error) {
         
          alert('error from mahasiswa in api mahasiswa: '+error);
         });;
          }
      getMahasiswa();
    }, []);

   
    useEffect(() => {
      async function getPost() {
        const response = await client.get("/1");
        setPost(response.data);
      }
      getPost();
    }, []);
   
  if (!post) return "No post!"
  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama: ${nama} \n Nim: ${nim}`)
  }

    return (

<center><br></br><h1>Form Input Mahasiswa</h1><br></br>
<div>
  <form onSubmit={handleSubmit}>

      <table border={0}>
        <tbody>
        <tr>
        <td> <label> nim:</label></td>
        <td><input type="text" id="nim"  value={nim}
          onChange={(e) => setNim(e.target.value)}  /></td>
    </tr>
    <tr>
        <td>  <label> nama:</label></td>
        <td><input type="text" id="nama"  value={nama}
          onChange={(e) => setNama(e.target.value)} /></td>
    </tr>
       
    <tr>
        <td>  <label> Tanggal Lahir:</label></td>
        <td>   <input
                type="date" value="2018-07-22" min="1945-01-01" max="2024-12-31
                "/></td>
    </tr>

    <tr>
        <td>  <label> Agama:</label></td>
        <td>   <select>
            <option value="Pilih Agama">Pilih Agama</option>
            <option value="Islam">Islam</option>
            <option value="Kristen Protestan">Kristen Protestan</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
            <option value="Konghucu">Konghucu</option>
        </select></td>
    </tr>

    <tr>
        <td>  <label> Alamat:</label></td>
        <td><textarea  id="address" style={{resize: "none"}} /></td>
    </tr>
    
    <tr>
        <td>  <label> Jurusan:</label></td>
        <td>   <select>
            <option value="Pilih Jurusan">Pilih Jurusan</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Manajemen Informatika">Manajemen Informatika</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Manajemen">Manajemen</option>
        </select></td>
    </tr>

    <tr>
        <td>  <label> Hobby:</label></td>
        <td>   <select>
            <option value="Pilih Hobby">Pilih Hobby</option>
            <option value="Musik">Musik</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Membaca">Membaca</option>
            <option value="Main Game">Main Game</option>
            <option value="Nonton Film">Nonton Film</option>
        </select></td>
    </tr>
    <tr>
        <td>  <label> Jenis Kelamin:</label></td>
        <td>   <input
                type="radio" value="Pria" name="Jenis Kelamin"/> Pria
            <input
            
                type="radio" value="Wanita"  name="Jenis Kelamin"/> Wanita</td>
    </tr>
    

    <tr>
        <td>  <label> Foto:</label></td>
        <td>   <input
                type="file" name="foto"/>  </td>
    </tr>
        </tbody>
      </table>

      <br></br><input type="submit" /><br></br><br></br>
     
      </form>
      <table border={1}>
        <thead>
            {/* <tr><td>Nim</td>
            <td>Nama</td></tr> */}
        </thead>
        <tbody>
            <tr>
                {/* <td>{nim}</td>
                <td>{nama}</td> */}
            </tr>
        </tbody>
      </table>
      
      <div>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button> */}
      </div>

      <br/>
      <br/>
      <br/>
    Tabel Mahasiswa hasil get Local Nodejs
    <table border={1}>
        <thead>
            <tr><td>Nim</td>
            <td>Nama</td></tr>
        </thead>
    
            {/* <tr>
                <td>{mahasiswa[0].nim}</td>
                <td>{mahasiswa[0].nama}</td>
            </tr>
            {/* <tr>
                <td>{mahasiswa[1].nim}</td>
                <td>{mahasiswa[1].nama}</td>
            </tr> */} 

        <tbody>
        {/* {mahasiswa.map((mhs) => */}
            <tr>
                {/* <td>{mhs.nim}</td> */}
                {/* <td>{mhs.nama}</td> */}
            </tr>
        )}

     </tbody>
      </table>

      </div>
      </center>
    )
  }
   

