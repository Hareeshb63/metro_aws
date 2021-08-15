import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import Navbar from './Components/Navbar';
// 
import { API, graphqlOperation, } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { listMetroSt2ams } from './graphql/queries'

Amplify.configure(awsconfig);

function App() {

  const [stations, setStation] = useState([]);
    

    useEffect(() => {
        fetchStations()
    }, [])

    // Api
    const fetchStations = async () => {
      const todos= await API.graphql(graphqlOperation(listMetroSt2ams));
      const stationList = todos.data.listMetroSt2ams.items;
      console.warn("data",todos)
        // try {
        //     const stationData = await API.graphql(graphqlOperation(listMetroSt2ams));
        //     const stationList = stationData.data.listMetroSt2ams.items;
        //     console.log('list station', stationList)
        //     setStation(stationList)
        //     console.log("db",stations);
        // } catch (error) {
        //     console.log('Error on fetching data', error)
        // }
    }
  return (
    
    <div className="App">
    <header className="App-header">
    < Navbar/> 


    
    </header>
      
  </div>

  );
}

export default withAuthenticator(App);
