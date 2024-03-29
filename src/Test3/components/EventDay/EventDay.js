import { Button} from "antd";

import { Link, useParams } from "react-router-dom";
import EventList from "../EventList/EventList";
import EventModal from "../EventModal/EventModal";

export function EventDay (){
    const { date } = useParams()
    return( 
    <div>
          <Link to="/test3">
          <Button >Назад</Button>
          </Link>
          <span> Планы на {date}</span>
          <EventList date={date} fullCard/>
      <div>
          <EventModal title={"Добавить задачу"} date={date}/>
      </div>
    </div>)
}