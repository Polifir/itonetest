import { Badge, Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { deleteEvent, selectCalendarEvents } from "../../api/calendarApi"
import EventModal from "../EventModal/EventModal"

import style from "./EventList.module.css"

const EventList = ({ date, fullCard = false }) => {
    const events = useSelector(selectCalendarEvents)
    const dispatch = useDispatch()
    const eventList = events.find((event) => event.date === date)

    const delteItem = (eventId) =>{
      dispatch(deleteEvent({date, eventId}))
    }
    console.log(eventList)
  
    return (

        <ul>
          {eventList?.events.map((event) => (
            <li className={fullCard && style.container} key={event.id}>
              <Badge status="success" text={event.title} />
              {fullCard &&  <div className={style.fullCard}>
                <div> начало мероприятия в <span>{event.startTime}</span> до <span>{event.endTime}</span></div>
                <Button onClick={() =>delteItem(event.id)}>Удалить</Button>
                <EventModal  title={"Редактировать задачу"} date={date} initValue={event}/>
                </div>}
            </li>
          ))}
        </ul>
    )
  }

export default EventList