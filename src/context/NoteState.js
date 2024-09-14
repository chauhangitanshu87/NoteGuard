import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61322f19553781a8ca8453d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early, because it is good for whole day active mind and body. ",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a83453ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "Education",
          "description": "Please concentrate on your education and leave another stuff ",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        } ,
        {
          "_id": "61322f18739453781a83453ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "Spiritual",
          "description": "God is great and he is in every situation , every aspect and in every human being",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        }
        
      ]
      const [notes, setNotes] = useState(notesInitial)
      return (
        
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;