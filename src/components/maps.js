import React, { useEffect, useState } from 'react';
import './maps.css';
import './driverList.css';
import Fire from "../config/config";

const Maps = () => {
    const [driverList, setdriverList] = useState([])
    const [zoom, setzoom] = useState(10)
    const [lat, setlat] = useState(40.7155207)
    const [Ing, setIng] = useState(29.8303372)
    const [counter, setcounter] = useState([10])

    useEffect(() => {
        async function fireGetData() {
            // Firebase Drivers Datalarını Yakalama
            await Fire.dbDrivers.once("value", snap => {
                var data = snap.val();
                var dataDto = Object.entries(data);
                setdriverList(dataDto);
                var locations = [];
                for (let i = 0; i < dataDto.length; i++) {
                    locations.push(dataDto[i][1].l);
                };
                // Firebase Drivers Datalarını Yakalama
                //   ***********************************************************************************
                // Data Drivers Kordinatlarını Haritaya Basma ve Çoklu Marker 
                var map = new window.google.maps.Map(document.getElementById('map'), {
                    zoom: zoom,
                    center: new window.google.maps.LatLng(lat, Ing),
                    mapTypeId: window.google.maps.MapTypeId.ROADMAP
                });
                var infowindow = new window.google.maps.InfoWindow();
                var marker, i;

                for (i = 0; i < locations.length; i++) {
                    marker = new window.google.maps.Marker({
                        position: new window.google.maps.LatLng(locations[i][0], locations[i][1]),
                        map: map
                    });
                    window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }
                // Data Drivers Kordinatlarını Haritaya Basma ve Çoklu Marker 
            })
        }
        fireGetData();
    }, [counter])

    return (
        <div className="col-sm-12 col-md-12">
            <div className="card-header shadow-lg p-2 bgColorBlackToWhite rounded text-white mb-2 mt-1 text-center text-dark">
                <h5>Durak Araç Yönetim Paneli</h5>
            </div>
            {/* *********************************** Harita Bölümü Kodları *******************/}
            <div className="col-sm-9 col-md-9 bg-light pl-0 inlineBlock">
                <div id="map" className="bg-white mapHeight"></div>
            </div>

            {/* *********************************** Durak Bölümü Kodları *******************/}
            <div className="col-sm-3 col-md-3 bg-white driversListHeight scrollBar rounded bg-light inlineBlock">
                <h6 className="text-danger text-center">--DURAK--</h6>
                {driverList && driverList.length > 0 && driverList.map((driver, index) => {
                    return (
                        <div key={index} className="card mb-2 shadow">
                            <p id={index} className="card-body" onClick={() => { getLoc(driver[1].l[0], driver[1].l[1], index) }}>
                                <a href="#" className="fa fa-hand-paper-o" aria-hidden="true"></a>
                                <span className="text-primary"> {driver[0]}</span> : {driver[1].l[0]} <br></br> {driver[1].l[1]}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
    function getLoc(data1, data2, index) {
        setzoom(20);
        setlat(data1);
        setIng(data2);
        setcounter(counter + 1);

        var elementClass = document.getElementsByClassName("borderTop");
        if (elementClass.length <= 0) {
            document.getElementById(index).classList.add("borderTop");
            return;
        }
        var elementId = elementClass[0].id;
        document.getElementById(elementId).classList.remove("borderTop");
        document.getElementById(index).classList.add("borderTop");
    }
}

export default Maps;
