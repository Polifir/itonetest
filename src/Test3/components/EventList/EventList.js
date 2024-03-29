import { Badge, Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { deleteEvent, selectCalendarEvents } from "../../api/calendarApi"
import EventModal from "../EventModal/EventModal"

const mockDate = [{
  date: "2024-03-22",
  events: [{
    id: "2024-03-221",
    title: "name task",
    startTime: "string",
    endTime: "str",
  }]
}]

const EventList = ({ date, fullCard = false }) => {
    const events = useSelector(selectCalendarEvents)
    const dispatch = useDispatch()
    const eventList = events.find((event) => event.date === date)

    const delteItem = (eventId) =>{
      dispatch(deleteEvent({date, eventId}))
    }
  
    return (

        <ul>
          {eventList?.events.map((event) => (
            <li key={event.id}>
              <Badge status="success" text={event.title} />
              {fullCard &&  <div>
                <div>Время</div>
                <Button onClick={() =>delteItem(event.id)}>Удалить</Button>
                <EventModal  title={"Редактировать задачу"} date={date} initValue={event}/>
                </div>}
            </li>
          ))}
        </ul>
    )
  }

export default EventList