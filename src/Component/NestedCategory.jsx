import React from 'react'
import { Link, useParams } from 'react-router-dom'
import NestedCatData from '../Datas/NestedCatData';
function NestedCategoryformotherbaby() {
    let { cattitle } = useParams();
    { var abc = NestedCatData.filter((a) => (a.maincat == cattitle.toLowerCase())) }
    return (
        <>
            <div className="container py-5">
                    <h1 className='text-center'>{cattitle}</h1>
                <div className="row my-5">
                {abc.map((b) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                                <ul>
                                    <li><Link to="" style={{color:'black'}}>{b.scat}</Link></li>
                                </ul>
                        </div>
                      ))}
                </div>
              

            </div>
        </>
    )
}

export default NestedCategoryformotherbaby
