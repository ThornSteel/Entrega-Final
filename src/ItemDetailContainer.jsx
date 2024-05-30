import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom';
import "./styles/itemDetailContainer.css"

export const ItemDetailContainer = () => {

  const [data, setData] = useState([])
  const { idDetalle } = useParams();
  useEffect(() => {
    const queryDb = getFirestore()
    const queryDoc = doc(queryDb, "productos", idDetalle)
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [idDetalle])

  return (
    <div className='itemDetailContainer'> 
      <ItemDetail data={data} />
    </div>
  )
}
