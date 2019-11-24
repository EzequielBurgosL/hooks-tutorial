import React, { useState, useEffect } from 'react'

import './Pagination.scss';

// Aquí podemos separar la llamada API de la presentación:
// function useBeersSearch() {
//   const [beers, setBeers] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const path = `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`
    
//     fetch(path)
//       .then(response => response.json())
//       .then(data => console.log(data) || setBeers(data))
//       .catch(error => console.log('error', error))
//   }, [page])

//   return { page, beers, setPage };
// }

export default function Pagination() {
  const [beers, setBeers] = useState([])
  const [page, setPage] = useState(1);
  // const { page, beers, setPage } = useBeersSearch()

  useEffect(() => {
    const path = `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`
    
    fetch(path)
      .then(response => response.json())
      .then(data => console.log(data) || setBeers(data))
      .catch(error => console.log('error', error))
  }, [page])

  return (
    <div className="pagination">
      <h1 className="pagination-title">Beers pagination</h1>
      <div className="beers">
        {beers.map(el => {
          return (
            <div className="beers-item">
              <h2 className="beers-item-text">{el.id}: {el.name}</h2>
            </div>
          )
        })}
      </div>
      <div className="pagination-buttons">
        {page > 1 && <button className="btn" onClick={() => setPage(page - 1)}>prev</button>}
        <button className="btn" onClick={() => setPage(page + 1)}>next</button>
      </div>
    </div>
  )
}


// export default function Pagination() {
//   const [beers, setBeers] = useState([])
//   const [page, setPage] = useState(parseInt(localStorage.getItem('page')) || 1);

//   useEffect(() => {
//     const path = `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`
    
//     fetch(path)
//       .then(response => response.json())
//       .then(data => console.log(data) || setBeers(data))
//       .catch(error => console.log('error', error))
    
//     // return () => {};
//     localStorage.setItem('page', page);
//   }, [page])

//   return (
//     <div className="pagination">
//       <h1 className="pagination-title">Beers pagination</h1>
//       <div className="beers">
//         {beers.map(el => {
//           return (
//             <div className="beers-item">
//               <h2 className="beers-item-text">{el.id}: {el.name}</h2>
//             </div>
//           )
//         })}
//       </div>
//       <div className="pagination-buttons">
//         {page > 1 && <button className="btn" onClick={() => setPage(page - 1)}>prev</button>}
//         <button className="btn" onClick={() => setPage(page + 1)}>next</button>
//       </div>
//     </div>
//   )
// }
