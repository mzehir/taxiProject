// import React, { useEffect, useState } from 'react';
// import './driverList.css';
// import Fire from "../config/config"
// import Maps from './maps'

// const DriverList = () => {
//     const [driverList, setdriverList] = useState([])

//     useEffect(() => {
//         Fire.dbDrivers.on("value", snap => {
//             var data = snap.val();
//             var dataDto = Object.entries(data)
//             setdriverList(dataDto)
//         })
//     }, [])

//     return (
//         <div className="col-sm-3 col-md-3 bg-white driversListHeight scrollBar rounded bg-light">
//             <h4 className="text-danger">--DURAK--</h4>
//             <button onClick={() => { deneme() }}>DDD</button>
//             {driverList && driverList.length > 0 && driverList.map((driver, index) => {
//                 return (
//                     <div key={index} className="">
//                         <p onClick={() => { getLoc(driver[1].l[0], driver[1].l[1]) }}>
//                             <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
//                             <span className="text-primary"> {driver[0]}</span> : {driver[1].l[0]} <br></br> {driver[1].l[1]}
//                         </p>
//                     </div>
//                 )
//             })}
//         </div>
//     );

//     function getLoc(data1, data2) {
//        alert("asd") 
//         // alert(data1 + " " + data2)
//         // var clickLokasyon = {
//         //     clicklat: data1,
//         //     clickIng: data2
//         // }
        
//     }

//     function deneme() {
//         alert("Kitap") 
//          // alert(data1 + " " + data2)
//          // var clickLokasyon = {
//          //     clicklat: data1,
//          //     clickIng: data2
//          // }
         
//      }

// }
// export default DriverList;