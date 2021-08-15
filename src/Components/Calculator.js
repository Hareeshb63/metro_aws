import { API, graphqlOperation, } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { listMetroSt2ams } from '../graphql/queries';



function Calculator() {

    const [stations, setStation] = useState([]);
    const [totalAmount, settotalAmount] = useState([]);

    useEffect(() => {
        fetchStations()
    }, [])

    // Api
    const fetchStations = async () => {
        try {
            const stationData = await API.graphql(graphqlOperation(listMetroSt2ams));
            const stationList = stationData.data.listMetroSt2ams.items;
            console.log('list station', stationList)
            setStation(stationList)
            console.log("db",stations);
        } catch (error) {
            console.log('Error on fetching data', error)
        }
    }

    // 

    var source = [{ id: '', name: '--Select Area--' }, { id: '1', name: 'Vijaynagar' }, { id: '2', name: 'Attiguppe' }, { id: '3', name: 'Jalahalli' }, { id: '4', name: 'Jayanagar' }];
    var destination = [{ id: '', name: '--Select Area--' }, { id: '1', name: 'Vijaynagar' }, { id: '2', name: 'Attiguppe' }, { id: '3', name: 'Jalahalli' }, { id: '4', name: 'Jayanagar' }];

    var price = [
                [0, 10, 15, 20, 25],
                [25, 0, 10, 15, 20],
                [20, 25, 0, 15, 10],
                [15, 20, 25, 0, 10],
                [10, 15, 20, 25, 0]
            ];


    var SrcselStation;
    var total;


    var sourceValue;
    function fromStation(e) {
        // console.log("eve",e.target.value);
        SrcselStation = e.target.value;
        console.warn("fromstation", SrcselStation)
        sourceValue = SrcselStation;
        console.log("fromId", sourceValue);
    }


    var destselStation;
    var destinationValue
    function toStation(e) {
        // console.log("eve",e.target.value);
        destselStation = e.target.value;
        console.warn("tostation", destselStation)
        destinationValue = destselStation
        console.log("toId", destinationValue);
        calculation();
    }

    function calculation() {

        // if (sourceValue && destinationValue) {
        //     var diff = (destinationValue - sourceValue);
        //     if (diff < 0) {
        //         diff = diff * (-1);
        //     }
        //     var temp = (diff - 1);
        //     var temp1 = (temp * 5);
        //     total = (temp1 + 10);
        //     settotalAmount(total);
        //     console.log("total=", total)
        //     return total;

        // } else {
        //     console.log("Error. select Again");

        // }
                total= price[sourceValue][destinationValue];
                console.log("arraTotol",total);
                settotalAmount(total);

    }


    var sourceData = source.map((item, i) => {
        return <option key={i} value={item.id}>{item.name}</option>

    });

    var distData = destination.map((item, i) => {
        return <option key={i} value={item.id}>{item.name}</option>

    });

    return <div className="box">
        <div className="form-group">
            <label>From Station</label>
            <select className="form-control" onChange={fromStation}> {sourceData}</select>
        </div>

        <div className="form-group">
            <label>To Station</label>
            <select className="form-control" onChange={toStation}> {distData}</select>
        </div>

        <div className="">

            <p>Total Amount: <span>{totalAmount}</span></p>
        </div>
        
    </div>



}
export default Calculator;
