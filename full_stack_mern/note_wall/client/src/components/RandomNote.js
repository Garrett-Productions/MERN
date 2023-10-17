// import {useEffect, useState} from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';


// const RandomNote = ({noteList, setNoteList}) => {
//     const navigate = useNavigate();
//     const [randomNoteData, setRandomNoteData] = useState(() => getRandomNote(data));
//     const getRandomNote = (noteList) => {
//         const randomNote = noteList[Math.floor(Math.random() * noteList.length)];
//         return randomNote;
//         };

//         useEffect(() => {
//             axios.get("http://localhost:8000/api/notes")
//             .then((res) => {
//                 console.log("Res data here", res.data)
//                 setRandomNoteData(res.data)
//             })
//             .catch(err => console.log(err))
//         }, [])


//     return (
//         <div style={{maxWidth:"400px", margin:"0 auto"}}>
//             <div style={{display:"flex", justifyContent:"space-between"}}>
//                 <h1 style={{fontWeight:"bold"}}> Note Wall</h1>
//                 <Link to={'/'}>go back home</Link>
//                 </div>
//                 <p>Random Note</p>
//             <hr/>
            
//             <h3>{note.title}</h3>
//             <h3>{note.body}</h3>
//             <p>random note content</p>
//         </div>
//     )
// }


// export default RandomNote;