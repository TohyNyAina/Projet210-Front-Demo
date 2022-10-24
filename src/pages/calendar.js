import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './calendar.css';
import Navbar from './navbar';


export default class DemoApp extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='calendar' >
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />
                </div>
            </div>
        )
    }
}